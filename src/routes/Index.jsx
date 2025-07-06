import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import SearchResults from '../pages/SearchResults.jsx';
import FlightDetails from '../pages/FlightDetails.jsx';
import Booking from '../pages/Booking.jsx';
import Confirmation from '../pages/Confirmation.jsx';
import MyBookings from '../pages/MyBookings.jsx';
import Support from '../pages/Support.jsx'; // Consistent casing
import NotFound from '../pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'search',
        element: <SearchResults />
      },
      {
        path: 'flight/:id',
        element: <FlightDetails />
      },
      {
        path: 'booking',
        element: <Booking />
      },
      {
        path: 'confirmation',
        element: <Confirmation />
      },
      {
        path: 'bookings',
        element: <MyBookings />
      },
      {
        path: 'support',
        element: <Support />
      },
      // REMOVED DUPLICATE SEARCH ROUTE
    ]
  }
]);

// Add at the end of src/routes/index.jsx
export { router as default };