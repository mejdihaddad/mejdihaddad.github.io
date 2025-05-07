// src/components/Certifications.jsx
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { certificationsData } from '@/data/Certifications';

export default function Certifications() {
  // Animation and UI states
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  
  // Animation on scroll
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
  
  // Function to scroll the container left or right
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
      id="certifications" 
      className="container mx-auto py-16 px-4"
      ref={sectionRef}
    >
      {/* Section heading with title and navigation - animated */}
      <div className={`flex justify-between items-center mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-2xl font-bold">Certifications</h2>
        
        {/* Navigation arrows with hover animation */}
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
      
      {/* Horizontally scrollable certifications container with animation */}
      <div 
        ref={scrollContainerRef}
        className={`flex overflow-x-auto gap-6 pb-6 hide-scrollbar transition-all duration-700 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {certificationsData.certifications.map((certification, index) => (
          <div
            key={certification.id}
            className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            style={{
              transitionDelay: `${200 + index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {/* Certificate image/logo with pulse animation on hover */}
            <div className="relative h-36 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <Image 
                src={certification.image}
                alt={`${certification.title} certificate`}
                width={200}
                height={100}
                className="object-contain p-4 transition-all duration-500 hover:scale-110"
              />
            </div>
            
            {/* Certificate details */}
            <div className="p-5">
              <h3 className="text-lg font-medium mb-2">{certification.title}</h3>
              <div className="text-gray-600 mb-4">{certification.issuer}</div>
              
              {/* Issued date */}
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Issued: {certification.date}
              </div>
              
              {/* Skills tags with hover effect */}
              <div className="flex flex-wrap gap-2 mb-4">
                {certification.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded transition-colors hover:bg-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Verification link with animation */}
              <a 
                href={certification.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center transition-all hover:translate-x-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Verify Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add this style to hide scrollbar but keep scrolling functionality */}
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