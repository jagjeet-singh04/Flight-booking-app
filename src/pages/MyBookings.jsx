import { motion } from 'framer-motion';

const MyBookings = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">My Bookings</h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            View and manage your upcoming flights
          </p>
          
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Upcoming Flights</h2>
              <button className="bg-infinity-primary hover:bg-infinity-secondary py-2 px-6 rounded-lg">
                Filter
              </button>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">New York (JFK) → San Francisco (SFO)</h3>
                  <p className="text-gray-500">July 15, 2023 • 08:00 AM - 11:30 AM</p>
                  <p className="mt-2">Booking Reference: <span className="font-bold">INF-789456</span></p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg">
                    View Details
                  </button>
                  <button className="bg-infinity-primary hover:bg-infinity-secondary py-2 px-4 rounded-lg">
                    Manage
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-center py-8">
              <p className="text-gray-500">No more upcoming flights</p>
              <button className="mt-4 text-infinity-primary hover:text-infinity-secondary">
                View past bookings
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyBookings;