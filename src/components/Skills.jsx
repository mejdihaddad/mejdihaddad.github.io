// src/components/Skills.jsx
'use client'; // This enables client-side functionality like useState

import { useState } from 'react';
import { skillsData } from '@/data/Skills';

export default function Skills() {
  // State to track which category is selected
  const [activeCategory, setActiveCategory] = useState(skillsData.categories[0].id);
  
  // Get the skills for the currently selected category
  const activeSkills = skillsData.categories.find(
    category => category.id === activeCategory
  )?.skills || [];
  
  return (
    <section id="skills" className="container mx-auto py-16 px-4">
      {/* Section heading */}
      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      
      {/* Skills categories with tabs/buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {/* Map through categories to create tabs */}
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
        
        {/* All skills button */}
        <button 
          className={`text-sm py-1 px-3 rounded-full transition-colors ${
            activeCategory === 'all' 
              ? 'bg-gray-800 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setActiveCategory('all')}
        >
          <span className="mr-1">🧩</span> All Skills
        </button>
      </div>
      
      {/* Skills grid - displays skills based on selected category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* If "All Skills" is selected, show all skills, otherwise show only the active category */}
        {(activeCategory === 'all' 
          ? skillsData.categories.flatMap(cat => cat.skills) 
          : activeSkills
        ).map((skill, index) => (
          <div key={index} className="border rounded-md p-4 hover:shadow-md transition-shadow">
            <div className="font-medium">{skill.name}</div>
            <div className="text-sm text-gray-500">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}