import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-infinity-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <motion.button 
            className="bg-infinity-primary hover:bg-infinity-secondary py-3 px-8 rounded-lg font-medium text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Return to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;