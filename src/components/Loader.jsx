// src/components/Loader.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ isLoading, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const loaderTexts = [
    "Launching Infinity...",
    "Boarding pass...",
    "Fastening seatbelts...",
    "Connecting runways...",
    "Taking off shortly...",
    "Cleared for takeoff..."
  ];

  // Simulate loading progress
  useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, [isLoading, onLoadingComplete]);

  // Cycle through loading texts
  useEffect(() => {
    if (!isLoading) return;
    
    const textInterval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % loaderTexts.length);
    }, 3000);
    
    return () => clearInterval(textInterval);
  }, [isLoading, loaderTexts.length]);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f19] to-[#0d1117] z-0"></div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-4">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center">
            <motion.span 
              className="text-6xl font-bold text-blue-400"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              ∞
            </motion.span>
            <h1 className="ml-3 text-4xl font-bold text-white tracking-wider">INFINITY</h1>
          </div>
          <p className="mt-2 text-center text-gray-400">Flight Booking Elevated</p>
        </motion.div>
        
        {/* Animated Airplane */}
        <div className="relative w-full h-32 mb-16 overflow-hidden">
          <motion.div
            className="absolute left-0"
            initial={{ x: "-100%" }}
            animate={{ 
              x: "100vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Airplane SVG */}
            <svg 
              className="w-20 h-20 text-blue-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M3 12L7 10L10 6L14 3L18 5L21 9L22 14L18 18L14 21L10 18L7 14L3 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <path 
                d="M10 6L14 3M14 3L18 5M14 3L10 10M18 5L21 9M21 9L22 14M22 14L18 18M18 18L14 21M14 21L10 18M10 18L7 14M7 14L3 12M3 12L7 10M7 10L10 6M10 6L7 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          
          {/* Airplane trail */}
          <motion.div
            className="absolute top-1/2 left-0 w-0 h-1 bg-blue-400 rounded-full"
            style={{ transform: 'translateY(-50%)' }}
            initial={{ width: 0 }}
            animate={{ 
              width: "100vw",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xl font-medium text-gray-300">
            {loaderTexts[currentTextIndex]}
          </p>
        </motion.div>
        
        {/* Runway-style progress indicator */}
        <div className="w-full max-w-md h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full relative"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress indicator light */}
            <motion.div 
              className="absolute top-0 right-0 w-4 h-full bg-white opacity-70 rounded-full"
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity 
              }}
            />
          </motion.div>
        </div>
        
        {/* Clouds */}
        <div className="absolute bottom-10 left-0 w-full">
          <motion.div
            className="absolute -left-20 bottom-0 w-40 h-20 bg-gray-200/10 backdrop-blur-sm rounded-full"
            animate={{ 
              x: ["0%", "100vw"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -left-40 bottom-8 w-32 h-16 bg-gray-200/15 backdrop-blur-sm rounded-full"
            animate={{ 
              x: ["0%", "100vw"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 3
            }}
          />
          <motion.div
            className="absolute -left-20 bottom-16 w-36 h-18 bg-gray-200/20 backdrop-blur-sm rounded-full"
            animate={{ 
              x: ["0%", "100vw"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 7
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;