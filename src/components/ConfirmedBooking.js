import React from 'react';
import '../css/ConfirmedBooking.css';
import {Link} from 'react-router-dom';
export default function ConfirmedBooking() {
  return (
    <div class="confirmation">
      <h2 class="confirmed">Booking Confirmed!</h2>
      <Link to="/"><button type="button" id="reserve">Return to Homepage</button></Link>
    </div>
  );
};