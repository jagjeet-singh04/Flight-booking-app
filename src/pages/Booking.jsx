import BookingStepper from '../components/BookingStepper'
import SeatMap from '../components/SeatMap'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(2)
  const [passengerInfo, setPassengerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPassengerInfo(prev => ({ ...prev, [name]: value }))
  }
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <BookingStepper currentStep={currentStep} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-xl p-8 border border-gray-800"
        >
          <h1 className="text-3xl font-bold mb-8">
            {currentStep === 1 ? 'Flight Selection' : 
             currentStep === 2 ? 'Passenger Details' : 
             currentStep === 3 ? 'Payment Information' : 
             'Confirmation'}
          </h1>
          
          {currentStep === 1 && (
            <div>
              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Selected Flight</h2>
                  <span className="text-infinity-primary">$349</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                  <div>
                    <h3 className="text-lg">Infinity Airlines • IN123</h3>
                    <p className="text-gray-500">New York (JFK) → San Francisco (SFO)</p>
                    <p>08:00 AM - 11:30 AM • 5h 30m</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <button 
                  className="bg-infinity-primary hover:bg-infinity-secondary py-3 px-8 rounded-lg font-medium"
                  onClick={() => setCurrentStep(2)}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-6">Passenger Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={passengerInfo.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={passengerInfo.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={passengerInfo.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={passengerInfo.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-6">Seat Selection</h2>
                <SeatMap />
              </div>
              
              <div className="flex justify-between">
                <button 
                  className="bg-gray-800 hover:bg-gray-700 py-3 px-8 rounded-lg font-medium"
                  onClick={() => setCurrentStep(1)}
                >
                  Back
                </button>
                <button 
                  className="bg-infinity-primary hover:bg-infinity-secondary py-3 px-8 rounded-lg font-medium"
                  onClick={() => setCurrentStep(3)}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-6">Payment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <label className="block text-gray-400 mb-2">Card Number</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Expiration Date</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">CVV</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
                      placeholder="123"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-400 mb-2">Cardholder Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-infinity-primary focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">Total Amount</h3>
                    <span className="text-2xl font-bold">$349.00</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Includes all taxes and fees
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  className="bg-gray-800 hover:bg-gray-700 py-3 px-8 rounded-lg font-medium"
                  onClick={() => setCurrentStep(2)}
                >
                  Back
                </button>
                <button 
                  className="bg-infinity-primary hover:bg-infinity-secondary py-3 px-8 rounded-lg font-medium"
                  onClick={() => setCurrentStep(4)}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 4 && (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-6xl text-green-500 mb-6"
              >
                ✓
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Thank you for choosing Infinity Airlines. Your flight from New York to San Francisco has been successfully booked.
              </p>
              <div className="bg-gray-800 rounded-xl p-6 max-w-xl mx-auto mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Booking Reference</h3>
                    <p>INF-789456</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Total Paid</h3>
                    <p>$349.00</p>
                  </div>
                </div>
                <div className="h-0.5 bg-gray-700 my-4"></div>
                <div className="text-left">
                  <h3 className="font-bold mb-2">Flight Details</h3>
                  <p>Infinity Airlines • IN123</p>
                  <p>New York (JFK) → San Francisco (SFO)</p>
                  <p>July 15, 2023 • 08:00 AM - 11:30 AM</p>
                  <p className="mt-2">Passenger: John Doe</p>
                  <p>Seat: 12A</p>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg font-medium">
                  View Booking
                </button>
                <button className="bg-infinity-primary hover:bg-infinity-secondary py-3 px-6 rounded-lg font-medium">
                  Download Ticket
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Booking