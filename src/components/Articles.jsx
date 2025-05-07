// src/components/Articles.jsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { articlesData } from '@/data/Articles';

export default function Articles() {
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
    <section id="articles" className="container mx-auto py-16 px-4">
      {/* Section heading with Medium link */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Medium Articles</h2>
        
        {/* Link to Medium profile */}
        <a 
          href={articlesData.mediumProfileUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex items-center"
        >
          View all on Medium
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      
      {/* Navigation arrows */}
      <div className="flex justify-end gap-2 mb-4">
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
      
      {/* Horizontally scrollable articles container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articlesData.articles.map(article => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex-shrink-0 w-80 border rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
          >
            {/* Article image */}
            <div className="relative h-40 w-full">
              <Image 
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              
              {/* Overlay with read time */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                {article.readTime}
              </div>
            </div>
            
            {/* Article details */}
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-2">{article.date}</div>
              <h3 className="text-lg font-medium group-hover:text-blue-600 transition-colors">{article.title}</h3>
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">{article.description}</p>
            </div>
          </a>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}