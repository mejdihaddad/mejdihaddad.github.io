// src/components/Projects.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { projectsData } from '@/data/Projects';

export default function Projects() {
  // Animation and UI states
  const [activeCategory, setActiveCategory] = useState('featured');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'all' 
    ? projectsData.projects 
    : projectsData.projects.filter(project => project.category === activeCategory);
  
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
      id="projects" 
      className="container mx-auto py-16 px-4"
      ref={sectionRef}
    >
      {/* Section heading with animation */}
      <h2 className={`text-2xl font-bold mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Projects
      </h2>
      
      {/* Category filters and navigation arrows with animation */}
      <div className={`flex justify-between items-center mb-8 transition-all duration-700 delay-100 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          <button 
            className={`text-sm py-1 px-3 rounded-full transition-colors ${
              activeCategory === 'featured' ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('featured')}
          >
            Featured
          </button>
          <button 
            className={`text-sm py-1 px-3 rounded-full transition-colors ${
              activeCategory === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Projects
          </button>
        </div>
        
        {/* Navigation arrows */}
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="bg-white hover:bg-gray-200 p-2 rounded-full transition-transform hover:scale-110"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white hover:bg-gray-200 p-2 rounded-full transition-transform hover:scale-110"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Horizontally scrollable projects container with animation */}
      <div 
        ref={scrollContainerRef}
        className={`flex overflow-x-auto gap-6 pb-6 hide-scrollbar transition-all duration-700 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            style={{
              transitionDelay: `${200 + index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {/* Project image with hover zoom effect */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            {/* Project details */}
            <div className="p-5">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              {/* Project tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-100 py-1 px-2 rounded hover:bg-gray-200 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
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