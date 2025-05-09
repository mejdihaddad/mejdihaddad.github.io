// src/components/Experience.jsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { experienceData } from '@/data/Experience';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust based on your card width + gap
      const container = scrollContainerRef.current;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="experience" 
      className="container mx-auto py-16 px-4"
      ref={sectionRef}
    >
      <div className={`flex justify-between items-center mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-2xl font-bold">Experience</h2>
        
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm transition-transform hover:scale-110"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm transition-transform hover:scale-110"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className={`flex overflow-x-auto gap-6 pb-6 hide-scrollbar transition-all duration-700 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {experienceData.experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            style={{
              transitionDelay: `${200 + index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="h-44 w-full bg-gray-50 border-b border-gray-100 flex items-center justify-center">
              <img 
                src={experience.logo}
                alt={`${experience.company} logo`}
                style={{
                  width: '250px',  
                  height: '150px',  
                  objectFit: 'contain',
                  transition: 'transform 0.5s ease'
                }}
                className="hover:scale-110"
              />
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-medium mb-1">{experience.role}</h3>
              <div className="text-blue-600 font-medium mb-2">{experience.company}</div>
              
              {/* Location and duration */}
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {experience.location}
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {experience.duration}
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                {experience.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-gray-100 py-1 px-2 rounded hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}