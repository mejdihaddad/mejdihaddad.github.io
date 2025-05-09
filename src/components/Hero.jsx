'use client';

// src/components/Hero.jsx
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center">
        
        <div className={`w-full md:w-2/5 flex justify-center transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 blur-sm animate-pulse"></div>
            
            <div className="relative z-10 p-1 rounded-full bg-white shadow-lg">
              <div className="overflow-hidden rounded-full border-2 border-white shadow-inner">
                <Image 
                  src="/mejdi.png" 
                  alt="Mejdi Haddad - Data Scientist & AI Engineer from Tunisia" 
                  width={250}
                  height={250}
                  className="object-cover transition-transform duration-500 hover:scale-110 rounded-full"
                  priority
                  loading="eager"
                />
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-100 opacity-60"></div>
            <div className="absolute -z-10 -top-4 -left-4 w-16 h-16 rounded-full bg-purple-100 opacity-60"></div>
          </div>
        </div>
        
        <div className={`w-full md:w-3/5 space-y-5 transition-all duration-1000 ease-in-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl font-bold">Hi there, I'm Mejdi Haddad.</h1>
          
          <p className="text-gray-700 text-lg">
             A Data Scientist & Full-Stack Developer driven by a passion for AI and innovative web solutions. I craft scalable apps using FastAPI, React, LangChain, and more.
          </p>
          
          <p className="text-gray-700">
            I enjoy building useful apps powered by data and AI.
          </p>
          
          <div className="flex space-x-4 pt-2">
            <a href="https://github.com/mejdihaddad" target="_blank" rel="noopener noreferrer" 
               className="text-gray-700 hover:text-black transition-colors"
               aria-label="Visit Mejdi's GitHub profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/mejdihaddad/" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-blue-600 transition-colors"
               aria-label="Connect with Mejdi on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            <a href="mailto:mejdihaddadpro@gmail.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-red-500 transition-colors"
               aria-label="Email Mejdi Haddad">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </a>
            
            <a href="https://x.com/mejdi_haddad" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-blue-400 transition-colors"
               aria-label="Follow Mejdi on X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>

            <a href="/CvMejdiHaddad.pdf" 
               download
               className="text-gray-700 hover:text-purple-500 transition-colors group relative"
               aria-label="Download Mejdi's CV">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
                <path d="M10 14h4v-2h-4v2zm0-4h4v-2h-4v2z" className="group-hover:opacity-0 transition-opacity"/>
                <g className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <path d="M12 16l-3-3h2v-3h2v3h2z"/>
                </g>
              </svg>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Resume</span>
            </a>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}