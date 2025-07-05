import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={ref} className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"
        style={{ 
          y: scrollYProgress,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;