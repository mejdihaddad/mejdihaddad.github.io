// src/components/Projects.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { projectsData } from '@/data/Projects';
import Link from 'next/link';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  
  const projects = projectsData.projects;
  
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
      id="projects" 
      className="container mx-auto py-16 px-4"
      ref={sectionRef}
      aria-label="Projects Section"
    >
      <div className={`flex justify-between items-center mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-2xl font-bold">Projects</h2>
        
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm transition-transform hover:scale-110"
            aria-label="Scroll projects to the left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm transition-transform hover:scale-110"
            aria-label="Scroll projects to the right"
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
        aria-label="Project list - scroll horizontally to see more"
      >
        {projects.map((project, index) => (
          <Link 
            key={project.id}
            href={project.githubUrl || "#"} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group"
            style={{
              transitionDelay: `${200 + index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
            aria-label={`${project.title}: ${project.description}`}
          >
            <div className="relative h-48 w-full overflow-hidden bg-[#0d1117] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="white" 
                   className="transition-transform duration-700 group-hover:scale-110"
                   aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              
              <div className="absolute bottom-2 right-2 bg-white bg-opacity-20 rounded-full p-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
            
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-100 py-1 px-2 rounded hover:bg-gray-200 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
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