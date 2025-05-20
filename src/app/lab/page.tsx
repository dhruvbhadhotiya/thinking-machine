'use client';

import Link from 'next/link';
import { useTheme } from '../../lib/ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ExperimentsLabPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  
  const experiments = [
    {
      id: 'exp-001',
      title: 'Gradient Descent Sandbox',
      description: 'Visualize gradient descent with adjustable learning rates and loss surfaces.',
      imageUrl: '/images/gradient-descent.png',
      status: 'Live'
    },
    {
      id: 'exp-002',
      title: 'Reinforcement Learning Arena',
      description: 'Watch an RL agent learn tasks like navigating a grid or balancing a pole in real-time.',
      imageUrl: '/images/reinforcement-learning.png',
      status: 'Live'
    },
    {
      id: 'exp-003',
      title: 'Dimensionality Reduction Explorer',
      description: 'Interactive 3D plots of PCA, t-SNE, or UMAP on datasets like MNIST or Iris.',
      imageUrl: '/images/dimensionality-reduction.png',
      status: 'Coming Soon'
    },
    {
      id: 'exp-004',
      title: 'Fourier Transform in Action',
      description: 'Upload audio to see frequency components extracted in real-time with visualization.',
      imageUrl: '/images/fourier-transform.png',
      status: 'Live'
    },
    {
      id: 'exp-005',
      title: 'Bayesian Updating Visualized',
      description: 'Simulate Bayesian inference with dynamic prior, likelihood, and posterior updates.',
      imageUrl: '/images/bayesian-updating.png',
      status: 'Coming Soon'
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
            Experiments Lab
          </h1>
          <p className={`max-w-4xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A virtual laboratory for interactive AI and mathematics demos that showcase concepts in action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiments.map(experiment => (
            <div 
              key={experiment.id} 
              className={`rounded-lg overflow-hidden transition-all border ${
                darkMode 
                  ? 'bg-gray-800/30 border-teal-500/10 hover:border-teal-500/30' 
                  : 'bg-white shadow-md border-teal-500/10 hover:border-teal-500/30'
              }`}
            >
              <div className={`h-48 flex items-center justify-center ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                <div className={`font-mono text-xl ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  [Experiment Visualization]
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className={`text-xl font-mono font-bold transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {experiment.title}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    experiment.status === 'Live' 
                      ? (darkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-500/20 text-teal-700')
                      : (darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-500/20 text-blue-600')
                  }`}>
                    {experiment.status}
                  </span>
                </div>
                <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {experiment.description}
                </p>
                <button 
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    experiment.status === 'Live' 
                      ? (darkMode 
                          ? 'bg-teal-500/20 text-teal-300 hover:bg-teal-500/30' 
                          : 'bg-teal-500/20 text-teal-700 hover:bg-teal-500/30')
                      : (darkMode
                          ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed')
                  }`}
                  disabled={experiment.status !== 'Live'}
                >
                  {experiment.status === 'Live' ? 'Launch Experiment' : 'Coming Soon'}
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