// src/app/not-found.js
"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function NotFound() {
  useEffect(() => {
    console.log("404 error page viewed");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="text-center max-w-md">
        <div className="mb-8 inline-block">
          <Image
            src="/logo.png"
            alt="Mejdi Haddad Logo"
            width={60}
            height={60}
            className="rounded-md"
          />
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                    transition-colors duration-200 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
