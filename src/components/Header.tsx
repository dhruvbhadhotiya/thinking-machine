'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 p-4 flex justify-between items-center backdrop-blur-sm z-10 transition-colors duration-300
        ${darkMode ? 'bg-gray-900/80' : 'bg-gray-100/80'}`}
    >
      <Link href="/">
        <h1 className={`text-3xl font-mono font-bold transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          The Thinking Machine
        </h1>
      </Link>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex items-center space-x-6">
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
        <button 
          className={`p-2 rounded-full transition-colors duration-300
            ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            // Sun icon for light mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
} 