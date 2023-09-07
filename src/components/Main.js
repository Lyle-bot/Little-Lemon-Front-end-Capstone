import HomePage from './HomePage';
import { Routes, Route } from "react-router-dom";
import About from './About';
import BookingPage from './BookingPage';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import React, { useReducer } from 'react';
import ConfirmedBooking from './ConfirmedBooking';

function fetchAPI(date) {
  const numberOfTimes = Math.floor(Math.random() * 6) + 5;
  const times = [];
  for (let i = 0; i < numberOfTimes; i++) {
    const randomHour = Math.floor(Math.random() * (23 - 17 + 1) + 17); 
    const randomMinute = Math.floor(Math.random() * 60);
    const hourString = randomHour.toString().padStart(2, '0');
    const minuteString = randomMinute.toString().padStart(2, '0');
    const timeString = `${hourString}:${minuteString}`;
    if (!times.includes(timeString)) {
      times.push(timeString);
    }
  }

  times.sort();
  return times;
};



const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    const selectedDate = fetchAPI(action.date) ; 
    return selectedDate
  }
  return state;
};


const initializeTimes = () => {
  return [];
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  
  return (
    <main>
        <Routes> 
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/order-online" element={<OrderOnline />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/confirmation-booking" element={<ConfirmedBooking />}></Route>
          <Route path="/booking-page" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
