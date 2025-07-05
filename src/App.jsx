import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Matches loader simulation time
    
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Loader 
        isLoading={isLoading} 
        onLoadingComplete={handleLoadingComplete} 
      />
      
      {!isLoading && <RouterProvider router={router} />}
    </>
  );
}

export default App;