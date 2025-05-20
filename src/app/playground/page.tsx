'use client';

import Link from 'next/link';
import { useTheme } from '../../lib/ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PlaygroundPage() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <main className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <section className="flex-1 p-4 md:p-8 mt-20">
        <Link href="/" className={`hover:underline mb-8 inline-block transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
          ← Back to Neural Network
        </Link>
        
        <div className="max-w-6xl mx-auto">
          <h1 className={`text-4xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            AI Playground
          </h1>
          <p className={`mb-12 max-w-4xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Build and train your own AI models with a user-friendly interface. Learn about machine learning components as you create.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Build Your Model
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block mb-2 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Dataset
                    </label>
                    <select className={`w-full rounded-md p-2 transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-700/50 border border-blue-500/20 text-gray-300' 
                        : 'bg-gray-100 border border-blue-500/20 text-gray-700'
                    }`}>
                      <option>Iris Classification</option>
                      <option>MNIST Digits</option>
                      <option>XOR Problem</option>
                    </select>
                    <span className={`text-xs mt-1 block transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Tip: Iris is best for beginners
                    </span>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Model Architecture
                    </label>
                    <select className={`w-full rounded-md p-2 transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-700/50 border border-blue-500/20 text-gray-300' 
                        : 'bg-gray-100 border border-blue-500/20 text-gray-700'
                    }`}>
                      <option>Linear Model</option>
                      <option>Multi-Layer Perceptron</option>
                      <option>Convolutional Neural Network</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Hidden Layers
                    </label>
                    <div className="flex">
                      <button className={`px-3 py-1 rounded-l-md transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}>-</button>
                      <input 
                        type="number" 
                        className={`w-full border-y text-center transition-colors ${
                          darkMode 
                            ? 'bg-gray-700/50 border-blue-500/20 text-gray-300' 
                            : 'bg-gray-100 border-blue-500/20 text-gray-700'
                        }`} 
                        value="2" 
                        readOnly 
                      />
                      <button className={`px-3 py-1 rounded-r-md transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}>+</button>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Loss Function
                    </label>
                    <select className={`w-full rounded-md p-2 transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-700/50 border border-blue-500/20 text-gray-300' 
                        : 'bg-gray-100 border border-blue-500/20 text-gray-700'
                    }`}>
                      <option>Mean Squared Error</option>
                      <option>Cross Entropy</option>
                      <option>Binary Cross Entropy</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Optimizer
                    </label>
                    <select className={`w-full rounded-md p-2 transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-700/50 border border-blue-500/20 text-gray-300' 
                        : 'bg-gray-100 border border-blue-500/20 text-gray-700'
                    }`}>
                      <option>SGD</option>
                      <option>Adam</option>
                      <option>RMSprop</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Learning Rate
                    </label>
                    <input 
                      type="range" 
                      min="0.0001" 
                      max="0.1" 
                      step="0.0001" 
                      className="w-full" 
                      defaultValue="0.01"
                    />
                    <div className={`flex justify-between text-xs transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span>0.0001</span>
                      <span>0.01</span>
                      <span>0.1</span>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 rounded-md font-mono transition-colors ${
                    darkMode 
                      ? 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-300' 
                      : 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-700'
                  }`}>
                    Build & Train Model
                  </button>
                </div>
              </div>
              
              <div className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Model Summary
                </h2>
                <div className={`font-mono text-sm p-3 rounded-md transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  <pre className="whitespace-pre-wrap">
{`Model: Sequential
_____________________
Layer 0: Input Layer
   Units: 4
   Activation: None
_____________________
Layer 1: Dense
   Units: 16
   Activation: ReLU
_____________________
Layer 2: Dense
   Units: 8
   Activation: ReLU
_____________________
Layer 3: Dense
   Units: 3
   Activation: Softmax
_____________________
Optimizer: Adam(lr=0.01)
Loss: Categorical Cross Entropy
`}
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Training Progress
                </h2>
                
                <div className={`h-64 rounded-md flex items-center justify-center mb-4 transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className="text-center">
                    <div className={`font-mono mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                      Training Visualization
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Start training to see accuracy and loss metrics here
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className={`p-4 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className={`font-mono text-sm mb-1 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Accuracy
                    </div>
                    <div className={`font-mono text-2xl transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                      ---%
                    </div>
                  </div>
                  <div className={`p-4 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className={`font-mono text-sm mb-1 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Loss
                    </div>
                    <div className={`font-mono text-2xl ${darkMode ? 'text-crimson' : 'text-crimson-dark'}`}>
                      ---
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className={`flex-1 py-2 rounded-md font-mono transition-colors ${
                    darkMode 
                      ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-300' 
                      : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-600'
                  }`}>
                    Pause
                  </button>
                  <button className={`flex-1 py-2 rounded-md font-mono transition-colors ${
                    darkMode 
                      ? 'bg-crimson/20 hover:bg-crimson/30 text-crimson' 
                      : 'bg-crimson/20 hover:bg-crimson/30 text-crimson-dark'
                  }`}>
                    Reset
                  </button>
                </div>
              </div>
              
              <div className={`rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Model Results
                </h2>
                
                <div className={`p-4 rounded-md mb-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h3 className={`font-mono mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Confusion Matrix
                  </h3>
                  <div className="h-48 flex items-center justify-center">
                    <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Complete training to see results
                    </p>
                  </div>
                </div>
                
                <div className={`p-4 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h3 className={`font-mono mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Test Your Model
                  </h3>
                  <p className={`text-sm mb-4 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Input values to test your trained model
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={`block text-sm mb-1 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Feature 1
                      </label>
                      <input 
                        type="number" 
                        className={`w-full rounded-md p-2 transition-colors duration-300 ${
                          darkMode 
                            ? 'bg-gray-700/50 border border-blue-500/20 text-gray-300' 
                            : 'bg-white border border-blue-500/20 text-gray-700'
                        }`} 
                      />
                    </div>
                    <div>
                      <label className={`block text-sm mb-1 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Feature 2
                      </label>
                      <input 
                        type="number" 
                        className={`w-full rounded-md p-2 transition-colors duration-300 ${
                          darkMode 
                            ? 'bg-gray-700/50 border border-blue-500/20 text-gray-300' 
                            : 'bg-white border border-blue-500/20 text-gray-700'
                        }`} 
                      />
                    </div>
                    <div>
                      <label className={`block text-sm mb-1 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Feature 3
                      </label>
                      <input 
                        type="number" 
                        className={`w-full rounded-md p-2 transition-colors duration-300 ${
                          darkMode 
                            ? 'bg-gray-700/50 border border-blue-500/20 text-gray-300' 
                            : 'bg-white border border-blue-500/20 text-gray-700'
                        }`} 
                      />
                    </div>
                    <div>
                      <label className={`block text-sm mb-1 font-mono transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Feature 4
                      </label>
                      <input 
                        type="number" 
                        className={`w-full rounded-md p-2 transition-colors duration-300 ${
                          darkMode 
                            ? 'bg-gray-700/50 border border-blue-500/20 text-gray-300' 
                            : 'bg-white border border-blue-500/20 text-gray-700'
                        }`} 
                      />
                    </div>
                  </div>
                  
                  <button className={`w-full py-2 rounded-md font-mono transition-colors ${
                    darkMode 
                      ? 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-300' 
                      : 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-700'
                  }`}>
                    Predict
                  </button>
                  
                  <div className={`mt-4 p-3 rounded-md text-center font-mono transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-gray-700/50 text-teal-400' 
                      : 'bg-gray-200 text-teal-600'
                  }`}>
                    <div className={`text-xs mb-1 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Prediction
                    </div>
                    <div>Waiting for input...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-12 rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
            <h2 className={`text-xl font-mono font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Learning Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-4 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`font-mono mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Understanding Loss Functions
                </h3>
                <p className={`text-sm mb-3 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Learn how different loss functions affect model training and when to use each one.
                </p>
                <a href="#" className={`text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                  Read Article →
                </a>
              </div>
              <div className={`p-4 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`font-mono mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Optimizer Deep Dive
                </h3>
                <p className={`text-sm mb-3 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Explore how different optimizers work and their effects on convergence speed and stability.
                </p>
                <a href="#" className={`text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                  Read Article →
                </a>
              </div>
              <div className={`p-4 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`font-mono mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Hyperparameter Tuning
                </h3>
                <p className={`text-sm mb-3 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Master the art of fine-tuning your model's hyperparameters for optimal performance.
                </p>
                <a href="#" className={`text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                  Read Article →
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