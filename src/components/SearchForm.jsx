import { FiSearch, FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchForm = () => {
  const [tripType, setTripType] = useState('round-trip')
  const [passengers, setPassengers] = useState(1)
  const [cabinClass, setCabinClass] = useState('economy')
  
  return (
    <motion.div 
      className="bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-800"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex space-x-4 mb-6">
        {['round-trip', 'one-way', 'multi-city'].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-lg transition-colors ${
              tripType === type
                ? 'bg-infinity-primary text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
            onClick={() => setTripType(type)}
          >
            {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="From"
              className="w-full bg-gray-800 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="relative">
            <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="To"
              className="w-full bg-gray-800 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
            />
          </div>
        </div>
        
        <div>
          <div className="relative">
            <FiCalendar className="absolute left-4 top-3.5 text-gray-400" />
            <input 
              type="date" 
              className="w-full bg-gray-800 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
            />
          </div>
        </div>
        
        <div>
          <div className="relative">
            <FiCalendar className="absolute left-4 top-3.5 text-gray-400" />
            <input 
              type="date" 
              className="w-full bg-gray-800 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
            />
          </div>
        </div>
        
        <div className="relative">
          <FiUser className="absolute left-4 top-3.5 text-gray-400" />
          <select 
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
            className="w-full bg-gray-800 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Passenger' : 'Passengers'}
              </option>
            ))}
          </select>
        </div>
        
        <div className="relative">
          <FiUser className="absolute left-4 top-3.5 text-gray-400" />
          <select 
            value={cabinClass}
            onChange={(e) => setCabinClass(e.target.value)}
            className="w-full bg-gray-800 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
          >
            {['Economy', 'Premium Economy', 'Business', 'First Class'].map(cls => (
              <option key={cls} value={cls.toLowerCase()}>
                {cls}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Link to="/search">
          <motion.button 
            className="bg-infinity-primary hover:bg-infinity-secondary flex items-center justify-center rounded-lg py-3 px-8 font-medium transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Search Flights
            <FiArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default SearchForm