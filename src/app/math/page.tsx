'use client';

import Link from 'next/link';
import { useTheme } from '../../lib/ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MathNotebooksPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  
  const notebooks = [
    {
      id: 'math-001',
      title: 'Understanding the Jacobian and Its Role in Backpropagation',
      description: 'A mathematical exploration of the Jacobian matrix and how it enables gradient flow in neural networks.',
      date: 'May 15, 2025',
      complexity: 'Advanced'
    },
    {
      id: 'math-002',
      title: 'From Linear Algebra to PCA: A Step-by-Step Derivation',
      description: 'Deriving Principal Component Analysis from first principles using linear algebra.',
      date: 'April 28, 2025',
      complexity: 'Intermediate'
    },
    {
      id: 'math-003',
      title: 'Explaining KL Divergence with Real World Examples',
      description: 'Breaking down Kullback-Leibler divergence with intuitive explanations and practical applications.',
      date: 'April 10, 2025',
      complexity: 'Intermediate'
    },
    {
      id: 'math-004',
      title: 'Proof of the Universal Approximation Theorem, Simplified',
      description: 'A more accessible proof of why neural networks can approximate any continuous function.',
      date: 'March 22, 2025',
      complexity: 'Advanced'
    }
  ];

  return (
    <main className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <section className="flex-1 p-4 md:p-8 mt-20">
        <Link href="/" className={`hover:underline mb-8 inline-block transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
          ← Back to Neural Network
        </Link>
        
        <h1 className={`text-4xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
          Math Notebooks
        </h1>
        <p className={`mb-12 max-w-4xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Deep dives into the mathematical foundations behind machine learning and AI concepts.
        </p>
        
        <div className="space-y-8 max-w-4xl">
          {notebooks.map(notebook => (
            <div 
              key={notebook.id} 
              className={`rounded-lg p-6 transition-all hover:transform hover:scale-[1.01] cursor-pointer ${
                darkMode 
                  ? 'bg-gray-800/50 border border-blue-500/20 hover:border-blue-500/40' 
                  : 'bg-white shadow-md hover:shadow-lg border border-blue-500/10 hover:border-blue-500/30'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className={`text-xl font-mono font-bold transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {notebook.title}
                </h2>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  notebook.complexity === 'Advanced' 
                    ? (darkMode ? 'bg-crimson/20 text-crimson-light' : 'bg-crimson/20 text-crimson-dark')
                    : (darkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-500/20 text-teal-700')
                }`}>
                  {notebook.complexity}
                </span>
              </div>
              <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {notebook.description}
              </p>
              <div className="flex justify-between items-center">
                <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {notebook.date}
                </span>
                <button className={`px-4 py-2 rounded-md transition-colors ${
                  darkMode
                    ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'
                    : 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-600'
                }`}>
                  Read Notebook →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer darkMode={darkMode} />
    </main>
  );
} 