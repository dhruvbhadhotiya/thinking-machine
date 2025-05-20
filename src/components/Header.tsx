'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 p-2 sm:p-4 flex justify-between items-center backdrop-blur-sm z-10 transition-colors duration-300
        ${darkMode ? 'bg-gray-900/80' : 'bg-gray-100/80'}`}
    >
      <Link href="/">
        <h1 className={`text-xl sm:text-2xl md:text-3xl font-mono font-bold transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          The Thinking Machine
        </h1>
      </Link>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <nav className="hidden md:flex items-center space-x-3 sm:space-x-6">
          <Link 
            href="/projects" 
            className={`transition-colors duration-300 hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
          >
            Projects
          </Link>
          <Link 
            href="/math" 
            className={`transition-colors duration-300 hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
          >
            Math
          </Link>
          <Link 
            href="/lab" 
            className={`transition-colors duration-300 hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
          >
            Lab
          </Link>
          <Link 
            href="/logs" 
            className={`transition-colors duration-300 hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
          >
            Logs
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors duration-300 hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            toggleMobileMenu();
          }}
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <button 
          className={`p-2 rounded-full transition-colors duration-300
            ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            // Sun icon for light mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className={`absolute top-full left-0 right-0 mt-1 py-2 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-b-lg md:hidden transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col space-y-3">
            <Link 
              href="/projects" 
              className={`py-2 px-3 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/math" 
              className={`py-2 px-3 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Math
            </Link>
            <Link 
              href="/lab" 
              className={`py-2 px-3 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Lab
            </Link>
            <Link 
              href="/logs" 
              className={`py-2 px-3 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Logs
            </Link>
            <Link 
              href="/about" 
              className={`py-2 px-3 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 