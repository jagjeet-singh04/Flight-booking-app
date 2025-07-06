import { motion, useAnimation, useScroll } from 'framer-motion';

import SearchForm from '../components/SearchForm';
import { FiAward, FiClock, FiGlobe, FiShield, FiChevronDown } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';

import DestinationBanner from '../components/DestinationBanner';
import { Link } from 'react-router-dom';
import ParallaxBackground from '../components/ParallaxBackground';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  

  // Floating element configurations
  const floatingElements = [
    {
      className: "top-1/4 left-1/4 w-8 h-8 bg-blue-500/20",
      animation: {
        y: [0, -30, 0],
        x: [0, 20, 0],
      },
      transition: {
        duration: 8,
        delay: 0
      }
    },
    {
      className: "top-1/3 right-1/4 w-6 h-6 bg-purple-500/20",
      animation: {
        y: [0, 40, 0],
        x: [0, -30, 0],
      },
      transition: {
        duration: 10,
        delay: 1
      }
    },
    {
      className: "bottom-1/4 left-1/3 w-10 h-10 bg-green-500/20",
      animation: {
        y: [0, -50, 0],
        x: [0, 40, 0],
      },
      transition: {
        duration: 12,
        delay: 2
      }
    },
    {
      className: "top-1/5 right-1/5 w-7 h-7 bg-yellow-500/20",
      animation: {
        y: [0, -40, 0],
        x: [0, -20, 0],
      },
      transition: {
        duration: 9,
        delay: 0.5
      }
    },
    {
      className: "bottom-1/3 left-1/5 w-9 h-9 bg-pink-500/20",
      animation: {
        y: [0, 30, 0],
        x: [0, 25, 0],
      },
      transition: {
        duration: 11,
        delay: 1.5
      }
    },
    {
      className: "top-2/3 right-1/5 w-5 h-5 bg-teal-500/20",
      animation: {
        y: [0, -35, 0],
        x: [0, -25, 0],
      },
      transition: {
        duration: 7,
        delay: 2.5
      }
    },
    {
      className: "bottom-1/5 right-1/3 w-8 h-8 bg-orange-500/20",
      animation: {
        y: [0, 45, 0],
        x: [0, 15, 0],
      },
      transition: {
        duration: 13,
        delay: 3
      }
    },
    {
      className: "top-1/2 left-1/10 w-6 h-6 bg-indigo-500/20",
      animation: {
        y: [0, -25, 0],
        x: [0, 30, 0],
      },
      transition: {
        duration: 14,
        delay: 0.8
      }
    }
  ];
  // At the top of your return statement


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Layers */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(45deg, #0d1117, #161b22, #0d1117)',
            'linear-gradient(45deg, #0d1117, #1a1f28, #0d1117)',
            'linear-gradient(45deg, #0d1117, #161b22, #0d1117)'
          ]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Moving particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 z-1"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Floating Elements */}
        {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full z-2 ${element.className}`}
          animate={element.animation}
          transition={{
            ...element.transition,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="max-w-6xl mx-auto text-center pt-32 pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative mb-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Fly Beyond Infinity
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience seamless flight booking with our next-generation platform designed for speed, simplicity, and elegance.
          </motion.p>
          
          <motion.div 
            className="relative z-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <SearchForm />
          </motion.div>
          
          <motion.div
            className="mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiChevronDown className="text-blue-500 mx-auto text-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="py-8 md:py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <DestinationBanner />
        </motion.div>


        {/* Features Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          {[
            {
              title: 'Lightning Fast',
              description: 'Book flights in seconds with our optimized platform',
              icon: <FiClock className="text-blue-500" size={32} />,
              color: 'bg-blue-900/20'
            },
            {
              title: 'Global Coverage',
              description: 'Access to over 10,000 destinations worldwide',
              icon: <FiGlobe className="text-green-500" size={32} />,
              color: 'bg-green-900/20'
            },
            {
              title: 'Best Prices',
              description: 'Guaranteed lowest prices or we\'ll match the difference',
              icon: <FiAward className="text-yellow-500" size={32} />,
              color: 'bg-yellow-900/20'
            },
            {
              title: 'Secure Booking',
              description: 'Your data is protected with bank-level security',
              icon: <FiShield className="text-purple-500" size={32} />,
              color: 'bg-purple-900/20'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-6 backdrop-blur-sm border border-gray-800 ${feature.color}`}
              whileHover={{ y: -10, scale: 1.03 }}
              animate={{ 
                y: [0, -5, 0],
                transition: { 
                  duration: 3, 
                  repeat: Infinity,
                  delay: index * 0.3
                } 
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        



        {/* Stats Section */}
       {/* Stats Section */}
<motion.div 
  className="py-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { value: '10,000+', label: 'Destinations' },
      { value: '500M+', label: 'Passengers' },
      { value: '99.8%', label: 'Uptime' },
      { value: '24/7', label: 'Support' }
    ].map((stat, index) => (
      <motion.div
        key={index}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      >
        <div className="text-3xl font-bold text-blue-400 mb-2">
          <AnimatedCounter value={stat.value} />
          {stat.value.includes('%') ? '%' : '+'}
        </div>
        <div className="text-gray-400">{stat.label}</div>
      </motion.div>
    ))}
  </div>
</motion.div>
        {/* Testimonials */}
<motion.div 
  className="py-16"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4 }}
>
  <motion.div 
    className="text-center mb-12"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold mb-4">Trusted by Travelers Worldwide</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Join thousands of satisfied customers who have transformed their travel experience
    </p>
  </motion.div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        quote: "Infinity made booking my international trip effortless. The interface is beautiful and intuitive!",
        author: "Sarah Johnson",
        role: "Frequent Traveler",
        image: "/peoples/sarah.png"  // Added image path
      },
      {
        quote: "I've never seen flight prices this low. Saved 40% on my business trip to Tokyo!",
        author: "Michael Chen",
        role: "Business Executive",
        image: "/peoples/michael.png"  // Added image path
      },
      {
        quote: "The seat selection feature is revolutionary. Finally got the perfect window seat every time!",
        author: "Emily Rodriguez",
        role: "Travel Blogger",
        image: "/peoples/emily.png"  // Added image path
      }
    ].map((testimonial, index) => (
      <motion.div 
        key={index}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
      >
        <div className="text-yellow-400 mb-4 text-2xl">★★★★★</div>
        <p className="italic mb-6 text-gray-200">"{testimonial.quote}"</p>
        <div className="flex items-center">
          {/* Profile image */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img 
              src={testimonial.image} 
              alt={testimonial.author}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            {/* Fallback avatar */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 hidden items-center justify-center">
              <span className="font-bold text-white text-sm">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white">{testimonial.author}</h4>
            <p className="text-gray-400">{testimonial.role}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* How It Works Section */}
        <motion.div className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}>
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple steps to book your perfect flight
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Search", desc: "Enter your travel details" },
              { step: 2, title: "Select", desc: "Choose your perfect flight" },
              { step: 3, title: "Customize", desc: "Add extras & preferences" },
              { step: 4, title: "Fly", desc: "Enjoy your journey" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800"
                whileHover={{ scale: 1.05 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xl font-bold text-blue-400">{item.step}</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
        {/* Trending Destinations */}
        <motion.div className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}>
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Trending Destinations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Most popular places travelers are visiting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Bali, Indonesia", 
                price: "$589",
                image: "/destinations/bali.png" 
              },
              { 
                name: "Santorini, Greece", 
                price: "$720",
                image: "/destinations/santorini.png" 
              },
              { 
                name: "Kyoto, Japan", 
                price: "$845",
                image: "/destinations/kyoto.png" 
              }
            ].map((dest, index) => (
              // Add to your Trending Destinations section
<motion.div 
  key={index}
  className="relative rounded-xl overflow-hidden h-64 group perspective"
  whileHover={{ y: -10 }}
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
>
  <motion.div 
    className="relative w-full h-full preserve-3d group-hover:rotate-x-15 group-hover:rotate-y-15 transition-all duration-500 ease-out"
    whileHover={{ rotateX: 10, rotateY: 10 }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 backface-hidden"></div>
    <img 
      src={dest.image} 
      alt={dest.name}
      className="absolute inset-0 w-full h-full object-cover backface-hidden"
      loading="lazy"
    />
    
    <motion.div 
      className="absolute bottom-0 left-0 right-0 p-6 z-20 backface-hidden"
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-xl font-bold text-white">{dest.name}</h3>
      <p className="text-blue-300 mt-1">From {dest.price}</p>
      
      <motion.button
        className="mt-4 px-4 py-2 bg-blue-600 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Details
      </motion.button>
    </motion.div>
  </motion.div>
</motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* REMOVED Interactive Globe and Flight Paths sections */}
        
      {/* MODIFIED CTA SECTION */}
        <motion.div 
          className="py-16 text-center relative overflow-hidden rounded-3xl my-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              animate={{ 
                background: [
                  'linear-gradient(45deg, #3a86ff, #8b5cf6)',
                  'linear-gradient(45deg, #8b5cf6, #ec4899)',
                  'linear-gradient(45deg, #ec4899, #3a86ff)',
                  'linear-gradient(45deg, #3a86ff, #8b5cf6)'
                ],
                backgroundSize: ['300%', '300%'],
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Ready for Your Next Adventure?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              animate={{ 
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            >
              Join millions of travelers who trust us for their journey beyond infinity
            </motion.p>
            
            <Link to="/search">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-bold shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Book Your Flight Now</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0"
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    x: ['-100%', '100%']
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;