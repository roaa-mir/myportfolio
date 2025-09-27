import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {/* Large floating orb */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        
        {/* Medium floating orb */}
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-purple-700/15 rounded-full blur-2xl animate-pulse" style={{animationDuration: '4s'}}></div>
        
        {/* Small floating orb */}
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-400/18 to-purple-600/18 rounded-full blur-xl animate-bounce" style={{animationDuration: '8s'}}></div>
        
        {/* Additional small orbs */}
        <div className="absolute top-1/6 right-1/6 w-24 h-24 bg-gradient-to-r from-purple-300/12 to-purple-500/12 rounded-full blur-xl animate-pulse" style={{animationDuration: '5s'}}></div>
        
        <div className="absolute bottom-1/4 left-1/6 w-36 h-36 bg-gradient-to-r from-purple-500/16 to-purple-700/16 rounded-full blur-2xl animate-bounce" style={{animationDuration: '7s'}}></div>
      </div>
      
      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(139, 92, 246, 0.08)"
            className="animate-pulse"
            style={{animationDuration: '3s'}}
          ></path>
        </svg>
        <svg
          className="relative block w-full h-24 -mt-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="rgba(139, 92, 246, 0.06)"
            className="animate-bounce"
            style={{animationDuration: '4s'}}
          ></path>
        </svg>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating triangles */}
        <div className="absolute top-1/3 left-3/4 w-8 h-8 border-2 border-purple-400/20 rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
        <div className="absolute top-2/3 left-1/5 w-6 h-6 border-2 border-purple-500/25 rotate-45 animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
        
        {/* Floating diamonds */}
        <div className="absolute top-1/5 right-2/5 w-4 h-4 bg-purple-400/15 rotate-45 animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-5 h-5 bg-purple-500/18 rotate-45 animate-pulse" style={{animationDuration: '4s'}}></div>
      </div>
    </div>
  );
};
export default AnimatedBackground;