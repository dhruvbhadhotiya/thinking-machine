'use client';

import Link from 'next/link';
import { useTheme } from '../../lib/ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProjectsPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  
  const projects = [
    {
      id: 'project-001',
      title: 'Case #001 – Image Classification with CNNs',
      description: 'A deep dive into convolutional neural networks for image classification tasks',
      tags: ['Computer Vision', 'CNN', 'PyTorch']
    },
    {
      id: 'project-002',
      title: 'Case #002 – Natural Language Processing Pipeline',
      description: 'Building a complete NLP pipeline for text classification and sentiment analysis',
      tags: ['NLP', 'BERT', 'Transformers']
    },
    {
      id: 'project-003',
      title: 'Case #003 – Reinforcement Learning for Game AI',
      description: 'Training an AI agent to play complex games using reinforcement learning techniques',
      tags: ['RL', 'Deep Q-Learning', 'PyTorch']
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
          Project Case Files
        </h1>
        <p className={`mb-12 max-w-4xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Classified AI experiments and detailed case studies exploring various machine learning challenges and their solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`rounded-lg p-6 transition-all hover:transform hover:scale-[1.02] cursor-pointer
                ${darkMode 
                  ? 'bg-gray-800/50 border border-teal-500/20 hover:border-teal-500/40' 
                  : 'bg-white shadow-md hover:shadow-lg border border-teal-500/10 hover:border-teal-500/30'}`}
            >
              <h2 className={`text-xl font-mono font-bold mb-3 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {project.title}
              </h2>
              <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className={`px-2 py-1 text-xs rounded-full transition-colors duration-300
                      ${darkMode 
                        ? 'bg-gray-700/70 text-teal-300' 
                        : 'bg-gray-200 text-teal-700'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer darkMode={darkMode} />
    </main>
  );
} 