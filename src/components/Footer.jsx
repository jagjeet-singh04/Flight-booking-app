import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-infinity-primary w-6 h-6 rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-xs">∞</span>
              </div>
              <span className="font-bold text-lg">Infinity</span>
            </div>
            <p className="text-gray-500 mb-4">
              Experience seamless flight booking with our next-gen platform
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-500 mb-4">
              Subscribe to receive updates and flight deals
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-900 rounded-l-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-infinity-primary"
              />
              <button className="bg-infinity-primary hover:bg-infinity-secondary rounded-r-lg px-4 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2023 Infinity Airlines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer