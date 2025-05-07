// src/components/Certifications.jsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { certificationsData } from '@/data/Certifications';

export default function Certifications() {
  // Reference to the scroll container
  const scrollContainerRef = useRef(null);
  
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
    <section id="certifications" className="container mx-auto py-16 px-4 bg-gray-50">
      {/* Section heading with title */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Certifications</h2>
        
        {/* Navigation arrows */}
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Horizontally scrollable certifications container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {certificationsData.certifications.map(certification => (
          <div
            key={certification.id}
            className="flex-shrink-0 w-80 bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Certificate image/logo */}
            <div className="relative h-36 w-full bg-gray-100 flex items-center justify-center">
              <Image 
                src={certification.image}
                alt={`${certification.title} certificate`}
                width={200}
                height={100}
                className="object-contain p-4"
              />
            </div>
            
            {/* Certificate details */}
            <div className="p-4">
              <h3 className="text-lg font-medium">{certification.title}</h3>
              <div className="text-gray-600 mb-4">{certification.issuer}</div>
              
              {/* Issued date */}
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Issued: {certification.date}
              </div>
              
              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {certification.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Verification link */}
              <a 
                href={certification.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
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