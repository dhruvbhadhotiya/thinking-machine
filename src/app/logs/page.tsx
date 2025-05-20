'use client';

import Link from 'next/link';
import { useTheme } from '../../lib/ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ThoughtLogsPage() {
  const { darkMode, toggleDarkMode } = useTheme();

  const logs = [
    {
      id: 'log-001',
      title: 'Log #001 – Why Loss Functions Matter',
      date: 'May 18, 2025',
      excerpt: "I've been thinking about loss functions lately. The choice of loss function dramatically impacts what your model learns to prioritize. For instance, Mean Squared Error (MSE) heavily penalizes outliers, while Mean Absolute Error (MAE) treats all errors equally in terms of scale...",
      mood: 'Contemplative'
    },
    {
      id: 'log-002',
      title: 'Log #002 – The Curious Case of Overfitting',
      date: 'May 12, 2025',
      excerpt: "Today I built a model that achieved 99.8% accuracy on the training set but performed terribly on validation. It's a classic case of overfitting, but it got me thinking about the philosophical aspects of generalization...",
      mood: 'Analytical'
    },
    {
      id: 'log-003',
      title: 'Log #003 – Mathematical Beauty in Neural Architecture',
      date: 'May 5, 2025',
      excerpt: "There's something inherently beautiful about well-designed neural network architectures. The symmetry in ResNet, the elegant simplicity of transformers' self-attention mechanism...",
      mood: 'Inspired'
    },
    {
      id: 'log-004',
      title: 'Log #004 – On the Ethics of AI Development',
      date: 'April 29, 2025',
      excerpt: "As I was training a language model today, I started contemplating the ethical implications of my work. Every design choice, every hyperparameter setting carries ethical weight...",
      mood: 'Reflective'
    }
  ];

  return (
    <main className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <section className="flex-1 p-4 md:p-8 mt-20">
        <Link href="/" className={`hover:underline mb-8 inline-block transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
          ← Back to Neural Network
        </Link>
        
        <div className="mb-12">
          <h1 className={`text-4xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            Thought Logs
          </h1>
          <p className={`max-w-4xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A personal research journal capturing raw thoughts, ideas, and musings about AI, math, and technology.
          </p>
        </div>
        
        <div className="space-y-12 max-w-3xl mx-auto">
          {logs.map(log => (
            <div 
              key={log.id} 
              className={`border-l-4 pl-6 transition-colors duration-300 ${darkMode ? 'border-blue-500/50' : 'border-blue-500/30'}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {log.date}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs transition-colors duration-300 ${
                  darkMode ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-500/10 text-blue-600'
                }`}>
                  {log.mood}
                </span>
              </div>
              <h2 className={`text-2xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {log.title}
              </h2>
              <p className={`mb-4 font-serif italic transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {log.excerpt}
              </p>
              <button className={`font-mono transition-colors ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-500'}`}>
                Continue Reading →
              </button>
              
              <div className={`mt-6 pt-6 flex items-center justify-between text-sm transition-colors duration-300 ${darkMode ? 'border-t border-gray-700' : 'border-t border-gray-300'}`}>
                <div className="flex items-center gap-4">
                  <span className={`cursor-pointer transition-colors ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                    ♥ Like
                  </span>
                  <span className={`cursor-pointer transition-colors ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                    💬 Comment
                  </span>
                </div>
                <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  #mathematics #neural-networks #philosophy
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer darkMode={darkMode} />
    </main>
  );
} 