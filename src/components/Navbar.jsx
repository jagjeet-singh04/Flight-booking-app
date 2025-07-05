import { useState } from 'react'
import { FiMenu, FiX, FiSearch, FiUser, FiChevronDown } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
     { name: 'My Bookings', path: '/bookings' }, // Updated path
    { name: 'Support', path: '/support' } // Updated path
  ]

  return (
    <>
      <motion.nav 
        className="flex justify-between items-center p-6 border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <div className="bg-infinity-primary w-8 h-8 rounded-full flex items-center justify-center">
            <span className="font-bold text-white">∞</span>
          </div>
          <span className="text-xl font-bold">Infinity</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`hover:text-infinity-primary transition-colors ${
                location.pathname === item.path ? 'text-infinity-primary font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-infinity-primary">
            <FiUser size={18} />
            <span>Account</span>
            <FiChevronDown size={18} />
          </button>
        </div>
        
        <button 
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      </motion.nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-infinity-darker z-50 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="bg-infinity-primary w-8 h-8 rounded-full flex items-center justify-center">
                <span className="font-bold text-white">∞</span>
              </div>
              <span className="text-xl font-bold">Infinity</span>
            </div>
            <button 
              className="text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiX size={24} />
            </button>
          </div>
          
          <div className="flex flex-col p-6 space-y-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`text-2xl ${
                  location.pathname === item.path 
                    ? 'text-infinity-primary font-medium' 
                    : 'hover:text-infinity-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <button className="flex items-center space-x-2 text-infinity-primary text-xl">
                <FiUser size={20} />
                <span>Account</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar