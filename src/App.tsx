import React, { useState, useEffect } from 'react';
import { Code2, Container, Moon, Sun, Github, Terminal, Save, Play, Box, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const screenshots = [
    {
      src: "/languageSelect.png",
      title: "Language Selection Dashboard",
      description: "Choose from a variety of programming languages to start coding instantly"
    },
    {
      src: "/goEditor.png",
      title: "Code Editor Interface",
      description: "Modern code editor with syntax highlighting and file management"
    },
    {
      src: "/rustEditor.png",
      title: "Terminal Integration",
      description: "Full-featured terminal access for running and testing your code"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-lg' : 'bg-white/50 backdrop-blur-lg'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>CodeBox</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <a
              href="https://github.com/AyushGlitch/codebox-docker"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Start Coding Instantly,<br />No Setup Required
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Try any programming language right on your machine without the hassle of downloads, 
              configurations, or environment setup. Perfect for beginners and experienced developers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Carousel */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            See CodeBox in Action
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`aspect-[16/9] relative ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <img
                        src={screenshot.src}
                        alt={screenshot.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className={`text-center mt-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <h3 className="text-xl font-semibold">{screenshot.title}</h3>
                      <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' 
                  : 'bg-white/80 hover:bg-gray-100/80 text-gray-900'
              } backdrop-blur-sm`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' 
                  : 'bg-white/80 hover:bg-gray-100/80 text-gray-900'
              } backdrop-blur-sm`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? isDarkMode 
                        ? 'bg-blue-400 w-4' 
                        : 'bg-blue-600 w-4'
                      : isDarkMode
                        ? 'bg-gray-600'
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Choose Your Language",
                description: "Select from popular languages like Python, JavaScript, Rust, Go, and more"
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Start Coding",
                description: "Your development environment launches instantly with all dependencies pre-configured"
              },
              {
                icon: <Save className="w-8 h-8" />,
                title: "Auto-Save & Resume",
                description: "Your progress is automatically saved locally - pick up right where you left off"
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50 shadow-lg'
                }`}
              >
                <div className={`mb-4 inline-block ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {step.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-opacity-10">
        <div className="container mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Choose CodeBox?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Box className="w-8 h-8" />,
                title: "Zero Installation",
                description: "No need to download SDKs, compilers, or configure PATH variables"
              },
              {
                icon: <Container className="w-8 h-8" />,
                title: "Isolated Environments",
                description: "Each language runs in its own Docker container, keeping your system clean"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Beginner Friendly",
                description: "Perfect for learning new languages without complex setup procedures"
              },
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Full Terminal Access",
                description: "Complete access to a real development environment for each language"
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Modern Editor",
                description: "Feature-rich code editor with syntax highlighting and auto-completion"
              },
              {
                icon: <Save className="w-8 h-8" />,
                title: "Local Storage",
                description: "All your code and files are stored safely on your machine"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50 shadow-lg'
                }`}
              >
                <div className={`mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className={`container mx-auto text-center p-12 rounded-2xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-900 to-purple-900' 
            : 'bg-gradient-to-r from-blue-100 to-purple-100'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Start Exploring New Languages Today
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            No more wasting time on environment setup. Get straight to coding and learning with CodeBox's instant development environments.
          </p>
          <a
            href="https://github.com/AyushGlitch/codebox-docker"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;