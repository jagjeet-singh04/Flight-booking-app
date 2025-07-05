import { motion } from 'framer-motion'
import FlightCard from '../components/FlightCard'
import { FiFilter, FiArrowDown, FiArrowUp } from 'react-icons/fi'
import { useState } from 'react'

const SearchResults = () => {
  const [sortOption, setSortOption] = useState('price')
  const [sortDirection, setSortDirection] = useState('asc')
  
  const flights = [
    {
      id: '1',
      airline: 'Infinity Airlines',
      flightNumber: 'IN123',
      departureTime: '08:00 AM',
      arrivalTime: '11:30 AM',
      origin: 'New York (JFK)',
      destination: 'San Francisco (SFO)',
      duration: '5h 30m',
      price: 349
    },
    {
      id: '2',
      airline: 'Sky High Airlines',
      flightNumber: 'SH456',
      departureTime: '10:15 AM',
      arrivalTime: '02:45 PM',
      origin: 'New York (JFK)',
      destination: 'San Francisco (SFO)',
      duration: '6h 30m',
      price: 299
    },
    {
      id: '3',
      airline: 'Oceanic Airlines',
      flightNumber: 'OA789',
      departureTime: '01:20 PM',
      arrivalTime: '06:50 PM',
      origin: 'New York (JFK)',
      destination: 'San Francisco (SFO)',
      duration: '5h 30m',
      price: 399
    }
  ]
  
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
  }
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Available Flights</h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                <FiFilter className="mr-2" />
                Filters
              </button>
              <div className="flex items-center">
                <span className="mr-2">Sort by:</span>
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-gray-800 rounded-lg py-2 px-4 focus:outline-none"
                >
                  <option value="price">Price</option>
                  <option value="duration">Duration</option>
                  <option value="departure">Departure Time</option>
                </select>
                <button 
                  className="ml-2 bg-gray-800 p-2 rounded-lg"
                  onClick={toggleSortDirection}
                >
                  {sortDirection === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 sticky top-6">
                <h2 className="text-xl font-bold mb-4">Filter Results</h2>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Price Range</h3>
                  <input type="range" min="0" max="1000" className="w-full" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Airlines</h3>
                  <div className="space-y-2">
                    {['Infinity Airlines', 'Sky High Airlines', 'Oceanic Airlines'].map(airline => (
                      <div key={airline} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={airline} 
                          className="mr-2" 
                          defaultChecked
                        />
                        <label htmlFor={airline}>{airline}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Stops</h3>
                  <div className="space-y-2">
                    {['Nonstop', '1 Stop', '2+ Stops'].map(stop => (
                      <div key={stop} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={stop} 
                          className="mr-2" 
                          defaultChecked
                        />
                        <label htmlFor={stop}>{stop}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              {flights.map((flight, index) => (
                <motion.div
                  key={flight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FlightCard flight={flight} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SearchResults