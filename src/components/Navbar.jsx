// src/components/Navbar.jsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link 
          href="/" 
          className="font-bold text-xl flex items-center"
          aria-label="Mejdi Haddad - Home"
        >
          <Image 
            src="/logo.png" 
            alt="Mejdi Haddad Logo" 
            width={40} 
            height={40} 
            className="rounded-md"
            priority
          />
          <span className="ml-2 hidden md:inline">Mejdi Haddad</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-gray-500 transition-colors">Home</Link>
          <Link href="#skills" className="hover:text-gray-500 transition-colors">Skills</Link>
          <Link href="#experience" className="hover:text-gray-500 transition-colors">Experience</Link>
          <Link href="#certifications" className="hover:text-gray-500 transition-colors">Certifications</Link>
          <Link href="#projects" className="hover:text-gray-500 transition-colors">Projects</Link>
          <Link href="#articles" className="hover:text-gray-500 transition-colors">Articles</Link>
          <Link href="#contact" className="hover:text-gray-500 transition-colors">Contact</Link>
        </div>
        
        <button 
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      <div 
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-screen opacity-100 visible bg-white shadow-lg' 
            : 'max-h-0 opacity-0 invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-3 py-3">
            <Link 
              href="#home" 
              className="hover:text-gray-500 transition-colors py-2 px-4 rounded hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#skills" 
              className="hover:text-gray-500 transition-colors py-2 px-4 rounded hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="#experience" 
              className="hover:text-gray-500 transition-colors py-2 px-4 rounded hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="#certifications" 
              className="hover:text-gray-500 transition-colors py-2 px-4 rounded hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              href="#projects" 
              className="hover:text-gray-500 transition-colors py-2 px-4 rounded hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#articles" 
              className="hover:text-gray-500 transition-colors py-2 px-4 rounded hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-gray-500 transition-colors py-2 px-4 rounded hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}