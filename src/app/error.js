"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="mb-8 inline-block">
          <Image
            src="/logo.png"
            alt="Mejdi Haddad Logo"
            width={60}
            height={60}
            className="rounded-md"
          />
        </div>

        {/* Error message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, an unexpected error has occurred. Please try again or return to
          the homepage.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Try again button */}
          <button
            onClick={() => reset()}
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>

          {/* Return home button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 
                      text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 
                      transition-colors duration-200 shadow-sm"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
