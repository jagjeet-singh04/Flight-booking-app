// src/components/DestinationBanner.jsx
import React, { useState, useEffect, useRef , useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const DestinationBanner = () => {
  const destinations = [
    { id: 1, name: "Bali, Indonesia", price: "$589", image: "bali.png" },
    { id: 2, name: "Santorini, Greece", price: "$720", image: "santorini.png" },
    { id: 3, name: "Kyoto, Japan", price: "$845", image: "kyoto.png" },
    { id: 4, name: "Paris, France", price: "$650", image: "paris.png" },
    { id: 5, name: "New York, USA", price: "$780", image: "new-york.png" },
    { id: 6, name: "Sydney, Australia", price: "$920", image: "sydney.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const timerRef = useRef(null);

  // Handle auto-scroll
  useEffect(() => {
    if (autoScroll) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 2000);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, autoScroll]);

 const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  }, [destinations.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  }, [destinations.length]);
   useEffect(() => {
    if (autoScroll) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 2000);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, autoScroll, nextSlide]); // Added nextSlide to dependencies

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl h-80 md:h-96"
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
    >
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2 text-white transition-all duration-300"
      >
        <FiChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2 text-white transition-all duration-300"
      >
        <FiChevronRight size={24} />
      </button>
      
      {/* Slides Container */}
      <div className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {destinations.map((destination) => (
          <div key={destination.id} className="w-full flex-shrink-0 relative">
            {/* Placeholder for image - in real app replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-0"></div>
            <img 
              src={`/destinations/${destination.image}`} 
              alt={destination.name}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              {/* ADDED DESTINATION NAME AND DETAILS */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl">
              <motion.h3 
                className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {destination.name}
              </motion.h3>
              
              <motion.p 
                  className="text-2xl md:text-3xl font-semibold text-white mb-8 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Starting from {destination.price}
              </motion.p>
              
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Book Now
              </motion.button>
            </div>
          </div>
          </div>

        ))}
      </div>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationBanner;