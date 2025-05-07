// src/components/Footer.jsx
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © {currentYear}  All rights reserved.
          </p>
        </div>
      </footer>
    );
  }