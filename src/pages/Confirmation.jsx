import { motion } from 'framer-motion'
import { FiCheckCircle, FiPrinter, FiDownload, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-6xl text-green-500 mb-6 inline-block"
          >
            <FiCheckCircle />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-xl mb-12">
            Thank you for choosing Infinity Airlines. Your flight has been successfully booked.
          </p>
          
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-left mb-12">
            <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-400 mb-2">Booking Reference</h3>
                <p className="text-lg font-bold">INF-789456</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Flight</h3>
                <p className="text-lg font-bold">IN123</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Departure</h3>
                <p className="text-lg">New York (JFK) to San Francisco (SFO)</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Date & Time</h3>
                <p className="text-lg">July 15, 2023 at 08:00 AM</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Passenger</h3>
                <p className="text-lg">John Doe</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Seat</h3>
                <p className="text-lg">12A</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-2">Total Paid</h3>
                <p className="text-2xl font-bold">$349.00</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <button className="bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg font-medium flex items-center">
              <FiPrinter className="mr-2" />
              Print Ticket
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg font-medium flex items-center">
              <FiDownload className="mr-2" />
              Download PDF
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg font-medium flex items-center">
              <FiMail className="mr-2" />
              Email Receipt
            </button>
            <Link to="/">
              <button className="bg-infinity-primary hover:bg-infinity-secondary py-3 px-6 rounded-lg font-medium">
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Confirmation