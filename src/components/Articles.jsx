// src/components/Articles.jsx
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { articlesData } from '@/data/Articles';

export default function Articles() {
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
      const scrollAmount = 400; 
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
      id="articles" 
      className="container mx-auto py-16 px-4"
      ref={sectionRef}
      aria-label="Published Articles"
    >
      <div className={`flex justify-between items-center mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-2xl font-bold">Articles</h2>
      
        <div className="flex justify-end gap-2 mb-4">
          <button 
            onClick={() => scroll('left')}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm transition-transform hover:scale-110"
            aria-label="Scroll articles to the left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm transition-transform hover:scale-110"
            aria-label="Scroll articles to the right"
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
        aria-label="Article list - scroll horizontally to see more"
      >
        {articlesData.articles.map((article, index) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col"
            style={{
              transitionDelay: `${200 + index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
            aria-label={`Read article: ${article.title}`}
          >
            {/* Article image with hover effect */}
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src={article.image}
                alt={`Cover image for article: ${article.title}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              {/* Overlay with read time - animated */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded group-hover:bg-opacity-90 transition-all">
                {article.readTime}
              </div>
            </div>
            
            <div className="p-5">
              <div className="text-sm text-gray-500 mb-2">{article.date}</div>
              <h3 className="text-lg font-medium group-hover:text-blue-600 transition-colors mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{article.description}</p>
              
              <div className="mt-4 overflow-hidden h-6">
                <span className="text-blue-600 text-sm font-medium transition-transform translate-y-8 inline-block group-hover:translate-y-0 flex items-center">
                  Read article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className={`text-center mt-8 transition-all duration-700 delay-400 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <a 
          href={articlesData.mediumProfileUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
          aria-label="Visit Mejdi Haddad's Medium profile for more articles"
        >
          <svg viewBox="0 0 1043.63 592.71" className="h-5 w-5 mr-2">
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" fill="currentColor"></path>
              </g>
            </g>
          </svg>
          Read more articles on Medium
        </a>
      </div>
      
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