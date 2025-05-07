// src/components/Hero.jsx
import Image from 'next/image'; // Next.js Image component for optimized images

export default function Hero() {
  return (
    <section id="home" className="container mx-auto py-16 px-4">
      {/* Main content container with responsive padding */}
      <div className="flex flex-col md:flex-row items-center">
        
        {/* Left side: Text content (takes full width on mobile, 3/5 on desktop) */}
        <div className="w-full md:w-3/5 space-y-4">
          {/* Main heading with name */}
          <div className="flex items-center mb-4">
            {/* User avatar - small circle like in template */}
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <h1 className="text-xl font-medium">Portfolio</h1>
          </div>
          
          {/* Introduction paragraph similar to template */}
          <h2 className="text-2xl font-medium">Hi there, I'm Mejdi Haddad.</h2>
          <p className="text-gray-700">
            With my expertise in Data Science, I specialize in streamlining 
            organization and boosting productivity for individuals like yourself.
          </p>
          
          {/* Experience paragraph like in template */}
          <p className="text-gray-700">
            My focus lies in [key skills]. I strive to eliminate distractions and prioritize 
            your tasks. Within 3 months, my services have supported 
            a wide range of clients, totaling over 27,000 satisfied
            users, spanning students, freelancers, and entrepreneurs.
          </p>
          
          {/* Call-to-action button (black button like in template) */}
          <button className="bg-black text-white px-6 py-2 rounded mt-4 hover:bg-gray-800">
            Schedule a call
          </button>
        </div>
        
        {/* Right side: Illustration (takes full width on mobile, 2/5 on desktop) */}
        <div className="w-full md:w-2/5 mt-8 md:mt-0 flex justify-center">
          {/* Placeholder for the illustration from template */}
          <div className="relative w-64 h-64">
            <Image 
              src="/mejdi.png" 
              alt="Person with laptop illustration" 
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}