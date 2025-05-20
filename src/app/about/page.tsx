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
      
      <section className="flex-1 p-3 sm:p-4 md:p-8 mt-16 sm:mt-20">
        <Link href="/" className={`hover:underline mb-4 sm:mb-8 inline-block transition-colors duration-300 text-sm sm:text-base ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
          ← Back to Neural Network
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-3xl sm:text-4xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            About Me
          </h1>
          <p className={`mb-6 sm:mb-12 text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            B.Tech (Hons.) CSE Student at GLA University | Passionate about AI, ML, and Mathematics
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <div className="md:col-span-1">
              <div className={`rounded-lg p-4 sm:p-6 flex flex-col items-center mb-4 sm:mb-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <div className={`w-32 h-32 sm:w-48 sm:h-48 rounded-full mb-4 flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-200'}`}>
                  <span className="text-4xl sm:text-6xl">👨‍💻</span>
                </div>
                <h2 className={`text-lg sm:text-xl font-mono font-bold mb-1 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Dhruv Bhadhotiya
                </h2>
                <p className={`text-center text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  CSE Student & AI Enthusiast
                </p>
                <div className="flex mt-4 space-x-3">
                  <a href="https://www.linkedin.com/in/dhruv-bhadhotiya" target="_blank" rel="noopener noreferrer" 
                     className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-100 hover:bg-blue-200'}`}
                     aria-label="LinkedIn Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`${darkMode ? 'text-blue-300' : 'text-blue-700'}`} viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/dhruvbhadhotiya" target="_blank" rel="noopener noreferrer" 
                     className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                     aria-label="GitHub Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className={`rounded-lg p-4 sm:p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h3 className={`text-base sm:text-lg font-mono font-bold mb-3 sm:mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Education
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2"></span>
                      <div>
                        <p className={`font-medium text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>GLA University</p>
                        <p className={`text-xs sm:text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Bachelor of Technology - BTech</p>
                        <p className={`text-xs sm:text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Artificial Intelligence</p>
                        <p className={`text-xs transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Aug 2024 - 2028</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2"></span>
                      <div>
                        <p className={`font-medium text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Colonel's Brightland Public School</p>
                        <p className={`text-xs transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2022 - 2023</p>
                      </div>
                    </div>
                  </li>
                </ul>
                
                <h3 className={`text-base sm:text-lg font-mono font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Certifications
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      <div>
                        <p className={`font-medium text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>DBMS Course</p>
                        <p className={`text-xs sm:text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Scaler</p>
                        <p className={`text-xs transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Issued Apr 2025</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      <div>
                        <p className={`font-medium text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>AI AND ML WITH DATA SCIENCE</p>
                        <p className={`text-xs sm:text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Indian Institute of Technology, Roorkee</p>
                        <p className={`text-xs transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Issued Mar 2025</p>
                      </div>
                    </div>
                  </li>
                </ul>
                
                <h3 className={`text-base sm:text-lg font-mono font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Technical Skills
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Database Management System (DBMS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Machine Learning Algorithms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Python (NumPy, Pandas, TensorFlow)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>JavaScript/TypeScript (React, Next.js)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Java</span>
                  </li>
                </ul>
                
                <h3 className={`text-base sm:text-lg font-mono font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Interests
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>AI & Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mathematics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Open Source Contribution</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4 sm:space-y-8">
              <section className={`rounded-lg p-4 sm:p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-lg sm:text-xl font-mono font-bold mb-3 sm:mb-4 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  About Me
                </h2>
                <p className={`mb-3 text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm a B.Tech (Hons.) CSE Student at GLA University, specializing in Artificial Intelligence. My academic journey is driven by a deep passion for AI, Machine Learning, and Mathematics. I thrive on exploring complex algorithms and understanding the mathematical principles that make AI systems work.
                </p>
                <p className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Recently, I've expanded my knowledge through specialized courses in Database Management Systems from Scaler and attended a comprehensive workshop on AI and ML with Data Science at IIT Roorkee, which has enriched my understanding of these cutting-edge technologies.
                </p>
              </section>
              
              <section className={`rounded-lg p-4 sm:p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-lg sm:text-xl font-mono font-bold mb-3 sm:mb-4 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Academic Journey
                </h2>
                <p className={`mb-3 text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  My journey into AI and computational thinking began during my schooling at Colonel's Brightland Public School, where I developed a strong foundation in mathematics and computer science. Now at GLA University, I'm focused on advanced courses in artificial intelligence, machine learning algorithms, and database management systems.
                </p>
                <p className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  The workshop at IIT Roorkee was particularly transformative, providing me with hands-on experience in building and analyzing AI models. This experience has inspired me to pursue more practical applications of these technologies in real-world scenarios.
                </p>
              </section>
              
              <section className={`rounded-lg p-4 sm:p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-lg sm:text-xl font-mono font-bold mb-3 sm:mb-4 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Current Focus
                </h2>
                <p className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Currently, I'm diving deeper into machine learning algorithms and their applications in solving complex problems. I'm also exploring database management systems to understand how to efficiently store and analyze large datasets. My side projects include experimenting with neural networks and contributing to open source projects that align with my interests in AI and data science.
                </p>
              </section>
              
              <section className={`rounded-lg p-4 sm:p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'}`}>
                <h2 className={`text-lg sm:text-xl font-mono font-bold mb-3 sm:mb-4 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Future Aspirations
                </h2>
                <p className={`text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Looking ahead, I aim to contribute to cutting-edge research in artificial intelligence and machine learning. I'm particularly interested in exploring the intersection of AI with mathematics to develop more efficient algorithms that can tackle increasingly complex challenges. I also hope to continue sharing my knowledge through open source contributions and collaborative projects.
                </p>
              </section>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://www.linkedin.com/in/dhruv-bhadhotiya" target="_blank" rel="noopener noreferrer" className={`py-3 px-4 rounded-md text-center text-sm sm:text-base transition-colors ${
                  darkMode
                    ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'
                    : 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-600'
                } sm:flex-1`}>
                  LinkedIn Profile
                </a>
                <a href="mailto:dhruvbhadhotiya@gmail.com" className={`py-3 px-4 rounded-md text-center text-sm sm:text-base transition-colors ${
                  darkMode
                    ? 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-400'
                    : 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-600'
                } sm:flex-1`}>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          <div className={`pt-6 sm:pt-8 transition-colors duration-300 ${darkMode ? 'border-t border-gray-700' : 'border-t border-gray-300'}`}>
            <h2 className={`text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Notable Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className={`rounded-lg p-4 sm:p-6 border transition-all hover:transform hover:scale-[1.01] ${
                darkMode
                  ? 'bg-gray-800/50 border-teal-500/10 hover:border-teal-500/30'
                  : 'bg-white shadow-md border-teal-500/10 hover:border-teal-500/30'
              }`}>
                <h3 className={`text-lg sm:text-xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  The Thinking Machine
                </h3>
                <p className={`mb-4 text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  A neural network-inspired portfolio website showcasing my projects and research in AI and machine learning.
                </p>
                <a href="https://github.com/dhruvbhadhotiya/thinking-machine" target="_blank" rel="noopener noreferrer" className={`text-sm sm:text-base transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                  View on GitHub →
                </a>
              </div>
              <div className={`rounded-lg p-4 sm:p-6 border transition-all hover:transform hover:scale-[1.01] ${
                darkMode
                  ? 'bg-gray-800/50 border-teal-500/10 hover:border-teal-500/30'
                  : 'bg-white shadow-md border-teal-500/10 hover:border-teal-500/30'
              }`}>
                <h3 className={`text-lg sm:text-xl font-mono font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  Neural Network Visualizer
                </h3>
                <p className={`mb-4 text-sm sm:text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  An interactive tool for visualizing and understanding neural network architectures and their training process.
                </p>
                <a href="#" className={`text-sm sm:text-base transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                  Coming Soon →
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