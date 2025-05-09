// src/components/Skills.jsx
'use client'; 

import { useState, useEffect, useRef } from 'react';
import { skillsData } from '@/data/Skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData.categories[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const activeSkills = skillsData.categories.find(
    category => category.id === activeCategory
  )?.skills || [];
  
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
  
  return (
    <section 
      id="skills" 
      className="container mx-auto py-16 px-4"
      ref={sectionRef}
    >
      <h2 className={`text-2xl font-bold mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Skills
      </h2>
      
      <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {skillsData.categories.map(category => (
          <button
            key={category.id}
            className={`text-sm py-1 px-3 rounded-full transition-colors ${
              activeCategory === category.id 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="mr-1">{category.icon}</span> {category.name}
          </button>
        ))}
        

      </div>
      
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {(activeCategory === 'all' 
          ? skillsData.categories.flatMap(cat => cat.skills) 
          : activeSkills
        ).map((skill, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            style={{
              transitionDelay: `${200 + index * 50}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="p-5">
              <div className="font-medium text-lg mb-2">{skill.name}</div>
              <div className="text-sm text-gray-500">{skill.level}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}