import { motion } from 'framer-motion'
import { FiClock, FiMapPin, FiDollarSign, FiUser, FiInfo } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const FlightDetails = () => {
  const flight = {
    id: 'FL123',
    airline: 'Infinity Airlines',
    flightNumber: 'IN123',
    departureTime: '08:00 AM',
    arrivalTime: '11:30 AM',
    origin: 'New York (JFK)',
    destination: 'San Francisco (SFO)',
    duration: '5h 30m',
    price: 349,
    date: 'July 15, 2023',
    aircraft: 'Boeing 787 Dreamliner',
    baggage: '2 checked bags included'
  }
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
            <h1 className="text-3xl font-bold mb-6">Flight Details</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <FiMapPin className="text-infinity-primary mr-4 text-2xl" />
                <div>
                  <h2 className="text-xl font-bold">Departure</h2>
                  <p className="text-gray-400">{flight.origin}</p>
                  <p className="text-2xl font-bold mt-1">{flight.departureTime}</p>
                  <p className="text-gray-400">{flight.date}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiMapPin className="text-infinity-primary mr-4 text-2xl" />
                <div>
                  <h2 className="text-xl font-bold">Arrival</h2>
                  <p className="text-gray-400">{flight.destination}</p>
                  <p className="text-2xl font-bold mt-1">{flight.arrivalTime}</p>
                  <p className="text-gray-400">{flight.date}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiClock className="text-infinity-primary mr-4 text-2xl" />
                <div>
                  <h2 className="text-xl font-bold">Duration</h2>
                  <p>{flight.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiDollarSign className="text-infinity-primary mr-4 text-2xl" />
                <div>
                  <h2 className="text-xl font-bold">Price</h2>
                  <p className="text-2xl font-bold">${flight.price}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiUser className="text-infinity-primary mr-4 text-2xl" />
                <div>
                  <h2 className="text-xl font-bold">Aircraft</h2>
                  <p>{flight.aircraft}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiInfo className="text-infinity-primary mr-4 text-2xl" />
                <div>
                  <h2 className="text-xl font-bold">Baggage</h2>
                  <p>{flight.baggage}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold mb-6">Flight Itinerary</h2>
            
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-infinity-primary rounded-full"></div>
                <div className="w-1 h-32 bg-infinity-primary my-1"></div>
                <div className="w-4 h-4 bg-infinity-primary rounded-full"></div>
              </div>
              
              <div className="flex-1">
                <div className="mb-10">
                  <h3 className="text-xl font-bold">{flight.origin}</h3>
                  <p className="text-gray-500">{flight.departureTime} • {flight.date}</p>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex-1 h-0.5 bg-gray-800"></div>
                  <div className="mx-4 text-gray-500">{flight.duration}</div>
                  <div className="flex-1 h-0.5 bg-gray-800"></div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">{flight.destination}</h3>
                  <p className="text-gray-500">{flight.arrivalTime} • {flight.date}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Link to="/booking">
              <motion.button 
                className="bg-infinity-primary hover:bg-infinity-secondary py-3 px-8 rounded-lg font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue to Booking
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FlightDetails