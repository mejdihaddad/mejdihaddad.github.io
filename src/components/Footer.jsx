// src/components/Footer.jsx
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-800 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  }