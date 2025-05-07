// src/components/Contact.jsx
'use client';

import { useState, useRef, useEffect } from 'react';

export default function Contact() {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    message: ''
  });
  
  // Form status state (for feedback)
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null
  });

  // Animation on scroll
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setFormStatus({ submitted: true, success: false, error: null });
      
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setFormStatus({ submitted: false, success: true, error: null });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        jobTitle: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, error: null });
      }, 5000);
      
    } catch (error) {
      setFormStatus({ 
        submitted: false, 
        success: false, 
        error: 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <section 
      id="contact" 
      className="container mx-auto py-16 px-4"
      ref={sectionRef}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section heading with animation */}
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-2xl font-bold mb-4">Let's work together!</h2>
          <p className="text-gray-600">
            If you're looking to boost productivity for yourself and your team, don't hesitate to reach out. 
            Drop us a message to kick-start our collaboration.
          </p>
        </div>
        
        {/* Contact form with animation */}
        <form 
          onSubmit={handleSubmit} 
          className={`space-y-4 transition-all duration-700 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name field */}
            <div className="overflow-hidden">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                First name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:shadow-md focus:shadow-md"
                placeholder="Your name"
              />
            </div>
            
            {/* Last name field */}
            <div className="overflow-hidden">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:shadow-md focus:shadow-md"
                placeholder="Your last name"
              />
            </div>
          </div>
          
          {/* Email field */}
          <div className="overflow-hidden">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:shadow-md focus:shadow-md"
              placeholder="Your email address"
            />
          </div>
          
          {/* Job Title field */}
          <div className="overflow-hidden">
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Job title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:shadow-md focus:shadow-md"
              placeholder="Your job title"
            />
          </div>
          
          {/* Message field */}
          <div className="overflow-hidden">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:shadow-md focus:shadow-md"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          
          {/* Submit button with animation */}
          <div className="text-center">
            <button
              type="submit"
              disabled={formStatus.submitted}
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:bg-gray-400 disabled:translate-y-0 disabled:shadow-none"
            >
              {formStatus.submitted ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
          {/* Success message with fade-in animation */}
          {formStatus.success && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center animate-fadeIn">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {/* Error message with attention animation */}
          {formStatus.error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-center animate-pulse">
              {formStatus.error}
            </div>
          )}
        </form>
        
        {/* Optional section: Additional contact info with animation */}
        <div className={`mt-12 text-center text-gray-500 transition-all duration-700 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p>Or reach out directly via:</p>
          <div className="flex justify-center space-x-4 mt-3">
            {/* Email */}
            <a 
              href="mailto:your.email@example.com" 
              className="hover:text-gray-800 transition-transform duration-300 hover:scale-110"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-800 transition-transform duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-800 transition-transform duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Add fade-in animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}