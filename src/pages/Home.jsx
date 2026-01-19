import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Calendar, Award, Lightbulb, Heart, Sparkles, Target, ArrowRight, Star, Zap } from 'lucide-react';
import Tarunds from '../../aryands.png'; // Import the image

const TarunsPortfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showSoulAnimal, setShowSoulAnimal] = useState(false);
  const [interactiveClicked, setInteractiveClicked] = useState({
    achievements: false,
    personality: false,
    future: false
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { icon: "🎨", title: "Art Mastery", desc: "Creating stunning visual masterpieces" },
    { icon: "⚔️", title: "Anime Design", desc: "Bringing characters to life with creativity" },
    { icon: "💼", title: "Portfolio Expert", desc: "Crafting compelling digital stories" },
    { icon: "🧩", title: "Problem Solver", desc: "Tackling complex challenges with ease" },
    { icon: "🎯", title: "Goal-Oriented", desc: "Laser-focused on achieving dreams" }
  ];

  const personalityTraits = [
    { trait: "Calm Navigator", icon: "🧘‍♂️", desc: "Stays composed in any storm" },
    { trait: "Active Listener", icon: "👂", desc: "Understands before being understood" },
    { trait: "Balance Master", icon: "⚖️", desc: "Harmonizes every situation" },
    { trait: "Confidence Bearer", icon: "👑", desc: "Carries an aura wherever he goes" }
  ];

  const timelineEvents = [
    { year: "2007", event: "Birth of a Warrior", icon: "⭐", color: "bg-pink-500" },
    { year: "2022-25", event: "Acquired Multiple Domain Skills as a Quick Learner", icon: "🧠", color: "bg-amber-500" },
    { year: "2023", event: "Conquered Class 10", icon: "📚", color: "bg-blue-500" },
    { year: "2025", event: "Mastered Class 12", icon: "🎓", color: "bg-green-500" },
    { year: "2025", event: "Forensic Science at Amity Delhi", icon: "🔬", color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div 
          className="transform transition-transform duration-1000 ease-out flex flex-col items-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          {/* Hero Image */}
          <div className="relative mb-8 flex justify-center">
            <div className="w-64 h-auto md:w-80 md:h-auto rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden">
                <img src={Tarunds} alt="Tarun The Demon Slayer" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold animate-bounce">
              🔥
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Tarun
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              The Demon Slayer's Journey
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>From a chaotic world to a clear and fullfilling life long Journey!</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            The Evolution Story
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                    <div className="text-2xl mb-2">{event.icon}</div>
                    <h3 className="text-xl font-bold text-yellow-400">{event.year}</h3>
                    <p className="text-gray-300">{event.event}</p>
                  </div>
                </div>
                
                <div className={`w-8 h-8 ${event.color} rounded-full border-4 border-white flex items-center justify-center z-10 relative`}>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Achievements */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Power-Ups Unlocked
          </h2>
          
          <button
            onClick={() => setInteractiveClicked(prev => ({...prev, achievements: !prev.achievements}))}
            className="mb-12 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {interactiveClicked.achievements ? '🎯 Hide Achievements' : '🚀 Reveal My Powers'}
          </button>

          {interactiveClicked.achievements && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-fadeIn">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Personality Transformation */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            The Great Transformation
          </h2>
          
          <div className="mb-12 p-8 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-lg rounded-xl border border-white/20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              From a shy introvert  to an <span className="text-yellow-400 font-bold">ambivert warrior</span> ready to conquer My next chanllenge. 
              Like a phoenix rising from ashes, Tarun discovered his inner strength from his mother and supporting sisters and entrepreneurial spirit inherited from his versatile father. His entrepreneurial spirit is not limited to just Forensic Science but opportunistic and creative.
            </p>
          </div>

          <button
            onClick={() => setInteractiveClicked(prev => ({...prev, personality: !prev.personality}))}
            className="mb-8 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {interactiveClicked.personality ? '🎭 Hide Traits' : '✨ Discover My Essence'}
          </button>

          {interactiveClicked.personality && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {personalityTraits.map((trait, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:rotate-1 transition-all duration-300"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="text-3xl mb-3">{trait.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{trait.trait}</h3>
                  <p className="text-gray-300">{trait.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Soul Animal Reveal */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Spirit Animal Revelation
          </h2>
          
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Every legend has a spirit that defines their resilience. What creature embodies Tarun's indestructible will to survive and thrive?
            </p>
            
            <button
              onClick={() => setShowSoulAnimal(!showSoulAnimal)}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-12 py-6 rounded-full font-bold text-xl transform hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              {showSoulAnimal ? '🪳 The Truth Revealed!' : '🔮 Reveal My Spirit Animal'}
            </button>
          </div>

                      {showSoulAnimal && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-br from-brown-600/40 to-orange-600/40 backdrop-blur-lg rounded-2xl p-8 border-2 border-orange-400/50 transform hover:scale-105 transition-all duration-500">
                  <div className="mb-6 flex justify-center">
                    <img src="/cockroach.svg" alt="Cockroach" className="w-32 h-32 animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-bold text-orange-400 mb-4">THE COCKROACH</h3>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    "Like the mighty cockroach that has survived every extinction event, Tarun possesses an 
                    <span className="text-yellow-400 font-bold"> unbreakable spirit</span>. 
                    He adapts, survives, and thrives in any environment. The world won't know what hit it! 
                    This survivor can handle nuclear winters and emerge stronger. 
                    <span className="text-orange-400 font-bold"> Indestructible. Adaptable. Unstoppable.</span>"
                  </p>
                </div>
              </div>
            )}
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            The Delhi Chapter
          </h2>
          
          <button
            onClick={() => setInteractiveClicked(prev => ({...prev, future: !prev.future}))}
            className="mb-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {interactiveClicked.future ? '🔬 Mission Visible' : '🚀 Unlock Future Vision'}
          </button>

          {interactiveClicked.future && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Forensic Science at Amity Delhi</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Armed with his calm demeanor, problem-solving skills, and unshakeable confidence, 
                  Tarun is ready to decode mysteries and solve cases that baffle others. 
                  His chosen path in forensic science isn't just a career—it's his calling to bring justice through science.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <Target className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-green-400 mb-2">Goal-Driven</h4>
                  <p className="text-gray-300 text-sm">Every decision made with precision and purpose</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">Entrepreneur Spirit</h4>
                  <p className="text-gray-300 text-sm">Ready to create his own path to success</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <Star className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-purple-400 mb-2">Free Mind</h4>
                  <p className="text-gray-300 text-sm">Unbounded thinking leads to limitless possibilities</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              A Brother's Love Letter
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Your true interesting Journey begins now, You are not a dependent child anymore, you are a man now. From a chaotic world to your further journey, you carry within you the strength of mountains and the adaptability of flowing rivers. 
              Your journey from introversion to confident ambition inspires everyone around you. You have till now achieved a lot but still a lot to achieve. You are not just my lovely brother Tarun the Suthri Master but also my best friend and a great human being. Be practical, logical and a bit of a nerd ;-). Always be a Desciplined Gentleman and keep your thoughts, emotions and descisions in your own control !
              <span className="text-yellow-400 font-bold">This journey is just the beginning — the world awaits your magic!</span>
            </p>
            <div className="mt-8 text-sm text-gray-400">
              <p>With infinite love and pride,</p>
              <p className="font-bold text-white">Your Elder Brother ❤️</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default TarunsPortfolio;
