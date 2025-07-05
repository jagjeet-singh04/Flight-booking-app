import { motion } from 'framer-motion';
import { FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';

const Support = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Support Center</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We're here to help with any questions or issues you might have
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Contact Us',
                description: 'Reach out to our support team directly',
                icon: <FiMail size={36} />,
                button: 'Send Message'
              },
              {
                title: 'FAQs',
                description: 'Find answers to common questions',
                icon: <FiHelpCircle size={36} />,
                button: 'Browse FAQs'
              },
              {
                title: 'Live Chat',
                description: 'Chat with a support agent in real-time',
                icon: <FiMessageSquare size={36} />,
                button: 'Start Chat'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center"
                whileHover={{ y: -10 }}
              >
                <div className="text-infinity-primary mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-6">{item.description}</p>
                <button className="bg-infinity-primary hover:bg-infinity-secondary py-2 px-6 rounded-lg">
                  {item.button}
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                "How do I change or cancel my flight?",
                "What is your baggage policy?",
                "How can I select my seat?",
                "What COVID-19 safety measures are in place?",
                "How do I request a refund?",
                "Can I change the name on my ticket?"
              ].map((question, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <h3 className="font-medium">{question}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;