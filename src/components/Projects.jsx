// src/components/Projects.jsx
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { projectsData } from '@/data/Projects';

export default function Projects() {
  // State to track which category is selected
  const [activeCategory, setActiveCategory] = useState('featured');
  
  // Reference to the scroll container
  const scrollContainerRef = useRef(null);
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'all' 
    ? projectsData.projects 
    : projectsData.projects.filter(project => project.category === activeCategory);
  
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
    <section id="projects" className="container mx-auto py-16 px-4">
      {/* Section heading */}
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      
      {/* Category filters and navigation arrows in the same row */}
      <div className="flex justify-between items-center mb-8">
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
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Horizontally scrollable projects container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="flex-shrink-0 w-80 border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Project image */}
            <div className="relative h-48 w-full">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Project details */}
            <div className="p-4">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              
              {/* Project tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-100 py-1 px-2 rounded">
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