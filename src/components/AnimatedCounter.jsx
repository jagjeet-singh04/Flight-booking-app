// src/components/AnimatedCounter.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, ''));
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  // Format number with commas
  const formattedCount = count.toLocaleString();
  
  return (
    <motion.span 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {formattedCount}
    </motion.span>
  );
};

export default AnimatedCounter;