'use client';

import Link from 'next/link';
import { useTheme } from '../../lib/ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <main className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <section className="flex-1 p-4 md:p-8 mt-20">
        <Link href="/" className={`hover:underline mb-8 inline-block transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
          ← Back to Neural Network
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            About Me
          </h1>
          <p className={`mb-12 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My journey through the fascinating world of AI and machine learning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <div className={`rounded-lg p-6 flex flex-col items-center mb-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <div className={`w-48 h-48 rounded-full mb-4 flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-200'}`}>
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <h2 className={`text-xl font-mono font-bold mb-1 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Dhruv Bhadhotiya
                </h2>
                <p className={`text-center transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  AI & ML Learner
                </p>
              </div>
              
              <div className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h3 className={`text-lg font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Key Skills
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Python</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Java</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>UI/UX Design</span>
                  </li>
                </ul>
                
                <h3 className={`text-lg font-mono font-bold mt-8 mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Interests
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Photography</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Hiking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Exploring new tech trends</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <section className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Origin Function
                </h2>
                <p className={`mb-3 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  My journey into AI and mathematics began during my undergraduate studies when I first encountered neural networks in a computational neuroscience class. I was fascinated by how mathematical principles could be applied to create systems that learn from data.
                </p>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  What started as academic curiosity quickly evolved into a passion as I began implementing basic algorithms and seeing them learn patterns that would be difficult to program explicitly.
                </p>
              </section>
              
              <section className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Losses & Gains
                </h2>
                <p className={`mb-3 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Like any learning process, my path has been filled with challenges. I've spent countless hours debugging models that wouldn't converge, wrestling with mathematical concepts beyond my comfort zone, and sometimes questioning if I was on the right track.
                </p>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  But each failure brought valuable insights. I learned that understanding the mathematical foundations is crucial, that visualization tools are invaluable for debugging, and most importantly, that persistence is often the defining factor between failure and breakthrough.
                </p>
              </section>
              
              <section className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Current Weights
                </h2>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Currently, I'm focused on deep diving into reinforcement learning algorithms and exploring their applications in complex decision-making systems. I'm also cultivating my knowledge of differential geometry to better understand the optimization landscapes of neural networks.
                </p>
              </section>
              
              <section className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Future Epochs
                </h2>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Looking ahead, I aim to contribute to research at the intersection of neuroscience and machine learning, exploring how insights from one field can inform advances in the other. I'm particularly interested in developing more efficient learning algorithms inspired by the human brain's architecture.
                </p>
              </section>
              
              <div className="flex gap-4">
                <a href="#" className={`flex-1 py-3 rounded-md text-center transition-colors ${
                  darkMode
                    ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'
                    : 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-600'
                }`}>
                  View Resume
                </a>
                <a href="#" className={`flex-1 py-3 rounded-md text-center transition-colors ${
                  darkMode
                    ? 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-400'
                    : 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-600'
                }`}>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          <div className={`pt-8 transition-colors duration-300 ${darkMode ? 'border-t border-gray-700' : 'border-t border-gray-300'}`}>
            <h2 className={`text-2xl font-mono font-bold mb-6 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Notable Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`rounded-lg p-6 border transition-all hover:transform hover:scale-[1.01] ${
                darkMode
                  ? 'bg-gray-800/50 border-teal-500/10 hover:border-teal-500/30'
                  : 'bg-white shadow-md border-teal-500/10 hover:border-teal-500/30'
              }`}>
                <h3 className={`text-xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Portfolio Pro
                </h3>
                <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  A customizable portfolio template for creatives, built with React and Tailwind CSS.
                </p>
                <a href="#" className={`transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                  View Project →
                </a>
              </div>
              <div className={`rounded-lg p-6 border transition-all hover:transform hover:scale-[1.01] ${
                darkMode
                  ? 'bg-gray-800/50 border-teal-500/10 hover:border-teal-500/30'
                  : 'bg-white shadow-md border-teal-500/10 hover:border-teal-500/30'
              }`}>
                <h3 className={`text-xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  TaskMaster
                </h3>
                <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  A task management app with real-time collaboration features, developed using Node.js and Socket.io.
                </p>
                <a href="#" className={`transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer darkMode={darkMode} />
    </main>
  );
} 