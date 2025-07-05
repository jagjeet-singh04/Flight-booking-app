import { FiClock, FiMapPin, FiDollarSign } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FlightCard = ({ flight }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg mb-6 card-hover"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div className="bg-gray-800 p-2 rounded-lg mr-4">
              <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{flight.airline}</h3>
              <p className="text-gray-500">{flight.flightNumber}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <FiMapPin className="text-infinity-primary mr-2" />
              <div>
                <p className="font-bold">{flight.departureTime}</p>
                <p className="text-gray-500">{flight.origin}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-infinity-primary mr-2" />
              <div>
                <p className="font-bold">{flight.arrivalTime}</p>
                <p className="text-gray-500">{flight.destination}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <FiClock className="text-infinity-primary mr-2" />
            <p>{flight.duration}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end justify-between mt-4 md:mt-0">
          <div className="text-2xl font-bold mb-4">
            ${flight.price}
          </div>
          <Link to={`/flight/${flight.id}`}>
            <motion.button 
              className="bg-infinity-primary hover:bg-infinity-secondary py-2 px-6 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Select
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default FlightCard