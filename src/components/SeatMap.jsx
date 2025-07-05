import { motion } from 'framer-motion'
import { useState } from 'react'

const SeatMap = () => {
  const [selectedSeats, setSelectedSeats] = useState([])
  
  const toggleSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId))
    } else {
      setSelectedSeats([...selectedSeats, seatId])
    }
  }
  
  const renderSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F']
    const seats = []
    
    for (let row = 0; row < rows.length; row++) {
      const rowSeats = []
      for (let num = 1; num <= 12; num++) {
        const seatId = `${rows[row]}${num}`
        const isSelected = selectedSeats.includes(seatId)
        const isEmergencyExit = (num === 4 || num === 5) && (row === 2 || row === 3)
        const isUnavailable = num === 6 && row === 1
        
        rowSeats.push(
          <motion.div
            key={seatId}
            className={`w-10 h-10 rounded-lg flex items-center justify-center m-1 cursor-pointer
              ${isSelected 
                ? 'bg-infinity-primary text-white' 
                : isUnavailable
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : isEmergencyExit
                    ? 'bg-yellow-500/20 text-yellow-500'
                    : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => !isUnavailable && toggleSeat(seatId)}
            whileHover={{ scale: isUnavailable ? 1 : 1.1 }}
            whileTap={{ scale: isUnavailable ? 1 : 0.95 }}
          >
            {seatId}
          </motion.div>
        )
      }
      seats.push(
        <div key={row} className="flex justify-center">
          {rowSeats}
        </div>
      )
    }
    
    return seats
  }
  
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Select Your Seats</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded bg-gray-800 mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded bg-infinity-primary mr-2"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded bg-yellow-500/20 mr-2"></div>
            <span>Exit Row</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        {/* Cockpit */}
        <div className="w-24 h-24 bg-gray-800 rounded-t-lg mx-auto mb-4 flex items-center justify-center">
          <span className="text-gray-500">Cockpit</span>
        </div>
        
        {/* Seats */}
        <div className="mb-8">
          {renderSeats()}
        </div>
        
        {/* Back of plane */}
        <div className="w-24 h-8 bg-gray-800 rounded-b-lg mx-auto mt-4 flex items-center justify-center">
          <span className="text-gray-500">Rear</span>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Selected Seats</h4>
        <div className="flex flex-wrap gap-2">
          {selectedSeats.map(seat => (
            <div 
              key={seat} 
              className="bg-infinity-primary px-4 py-2 rounded-lg"
            >
              {seat}
            </div>
          ))}
          {selectedSeats.length === 0 && (
            <p className="text-gray-500">No seats selected</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SeatMap