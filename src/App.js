import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {useReducer, useState} from 'react';
import { fetchAPI, submitAPI } from './api';
const updateTimes = (state, action) => {
  if (action.type === 'SET_AVAILABLE_TIMES') {
    const selectedDate = action.payload;
    const availableTimes = fetchAPI(selectedDate);
    return availableTimes; // Return the updated state with new availableTimes array
  }
  return state;
};
const initializeTimes = () => {
  return fetchAPI(new Date());
};

export {initializeTimes, updateTimes};

function App() {
  const navigate = useNavigate();
  const submitForm = (formData) => {
    try {
      const response =  submitAPI(formData);
      if (response === true) {
        navigate('/confirmation');
      } else {
        console.log('Booking submission failed.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [formData, setFormData] = useState({
    date: '',
    time: '- Choose -',
    guests: '',
    occasion: '- Choose -',
});

  return(
    <ChakraProvider>
      <div class="body">
        <Header></Header>
        <Routes> 
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<BookingPage submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} formData={formData} setFormData={setFormData}/>}></Route>
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
