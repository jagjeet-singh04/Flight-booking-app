import { createContext, useState, useContext } from 'react';

const FlightContext = createContext();
export const useFlightContext = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: 1,
    cabinClass: 'economy'
  });

  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookings, setBookings] = useState([]);

  const updateSearchParams = (params) => {
    setSearchParams(prev => ({ ...prev, ...params }));
  };

  const addBooking = (booking) => {
    setBookings(prev => [...prev, booking]);
  };

  const value = {
    searchParams,
    updateSearchParams,
    flights,
    setFlights,
    selectedFlight,
    setSelectedFlight,
    bookings,
    addBooking
  };

  return (
    <FlightContext.Provider value={value}>
      {children}
    </FlightContext.Provider>
  );
};