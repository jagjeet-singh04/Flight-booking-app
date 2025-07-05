// Fallback StarfieldBackground.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const StarfieldBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 200, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 0.5, max: 3 }, random: true },
          move: { 
            enable: true, 
            speed: 0.2, 
            outModes: "out" 
          },
          links: {
            enable: true,
            distance: 100,
            color: "#3b82f6",
            opacity: 0.1,
            width: 1
          }
        },
        detectRetina: true
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default StarfieldBackground;