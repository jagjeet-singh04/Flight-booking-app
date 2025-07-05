import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ParticlesBackground from '../components/StarfieldBackground.jsx';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen infinity-gradient">
      <ParticlesBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout