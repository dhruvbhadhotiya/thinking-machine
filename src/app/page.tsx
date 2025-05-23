'use client';

import { useTheme } from '../lib/ThemeContext';
import NeuralNetwork from '../components/NeuralNetwork';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="w-full flex-1 flex flex-col items-center justify-center p-4">
        <div className="mb-4 md:mb-8 text-center">
          <p className={`text-base md:text-xl font-mono mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            Exploring the Intersection of Math, AI, and Creativity
          </p>
        </div>
        
        {/* Neural Network Navigation Component */}
        <div className={`w-full max-w-4xl ${isMobile ? 'h-[50vh]' : 'h-[60vh]'} relative`}>
          <NeuralNetwork darkMode={darkMode} />
        </div>
        
        <div className="mt-4 md:mt-8 text-center px-2">
          <p className={`text-sm md:text-lg font-mono typewriter transition-colors duration-300 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
            Welcome to my mind—a fusion of math, AI, and creativity
          </p>
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </main>
  );
} 