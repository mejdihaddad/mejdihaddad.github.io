// src/components/Navbar.jsx
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full p-4">
      {/* Container to center content and set max width */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name - Using Image component for better performance */}
        <div className="font-bold text-xl flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="rounded-md"
          />
        </div>
        
        {/* Navigation items - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex space-x-6">
          {/* Navigation links with hover effect */}
          <a href="#home" className="hover:text-gray-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-gray-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-500 transition-colors">Contact</a>
        </div>
        
        {/* We'll add a mobile menu button later */}
      </div>
    </nav>
  );
}