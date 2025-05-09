// src/components/Contact.jsx
'use client';

import { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setFormStatus({ submitted: true, success: false, error: null });
      
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'c664db96-3e7e-4802-984b-e8b0e50f21d2');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject || 'Contact form submission');
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_domain', window.location.hostname);
      formDataToSend.append('from_name', 'Portfolio Website Contact');
      const subjectPrefix = '【Portfolio】';
      formDataToSend.append('subject', `${subjectPrefix} ${formData.subject || 'New contact message'}`);
      formDataToSend.append('reply_to', formData.email);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormStatus({ submitted: false, success: true, error: null });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setFormStatus({ submitted: false, success: false, error: null });
        }, 5000);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
      
    } catch (error) {
      setFormStatus({ 
        submitted: false, 
        success: false, 
        error: error.message || 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <section 
      id="contact" 
      className="container mx-auto py-20 px-4"
      ref={sectionRef}
    >
      <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Let's Connect</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? Drop me a message, and I'll get back to you soon.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-100"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-100"
                  placeholder="Your email address"
                />
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-100"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div className="mt-6 space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-100 resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <div className="mt-8">
              <button
                type="submit"
                disabled={formStatus.submitted}
                className="group relative w-full py-3.5 text-center text-white font-medium rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:shadow-none"
                style={{
                  background: 'linear-gradient(90deg, #000000 0%, #1a1a1a 100%)'
                }}
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-100" 
                     style={{ 
                       background: 'linear-gradient(90deg, #121212 0%, #2d2d2d 100%)', 
                       transform: 'translateY(100%)', 
                       animation: 'group-hover:translate-y-0',
                     }}>
                </div>
                
                <span className="relative flex items-center justify-center">
                  {formStatus.submitted ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : 'Send Message'}
                </span>
              </button>
            </div>
            
            {formStatus.success && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg flex items-center animate-fade-in">
                <div className="p-2 bg-green-100 rounded-full">
                  <svg className="h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            )}
            
            {formStatus.error && (
              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg flex items-center animate-fade-in">
                <div className="p-2 bg-red-100 rounded-full">
                  <svg className="h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    {formStatus.error}
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        /* Button hover effect */
        .group:hover .group-hover\\:translate-y-0 {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}