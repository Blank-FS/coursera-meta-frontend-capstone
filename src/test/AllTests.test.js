import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from "../App";
import React from 'react';
test('Renders the BookingForm Reserve button', () => {
    render(<BookingForm availableTimes={[
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ]}
      formData = {{
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
      }}
      />);
    const headingElement = screen.getByText("Reserve");
    expect(headingElement).toBeInTheDocument();
})
test('Test for initializeTimes', () => {
    const availableTimes = initializeTimes();
    expect(Array.isArray(availableTimes)).toBe(true);
    expect(availableTimes.length).toBeGreaterThan(0);
})
test('Test for updateTimes', () => {
  const availableTimes = updateTimes(['18:00', '19:00', '20:00'],{type: 'SET_AVAILABLE_TIMES', payload: new Date()});
  expect(Array.isArray(availableTimes)).toBe(true);
  expect(availableTimes.length).toBeGreaterThan(0);
})
//
test('HTML5 validation attributes are applied to input fields', () => {
  render(<BookingForm formData={{}} setFormData={() => {}} dispatch={() => {}} availableTimes={[]} submitForm={() => {}} />);
  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Time');
  const guestsInput = screen.getByLabelText('Number of Guests');
  const occasionSelect = screen.getByLabelText('Occasion');
  expect(dateInput).toBeRequired();
  expect(timeSelect).toBeRequired();
  expect(guestsInput).toBeRequired();
  expect(occasionSelect).toBeRequired();
});
test('Validation works correctly for valid input', () => {
  render(<BookingForm formData={{ date: '2023-07-28', time: '17:00', guests: '5', occasion: 'Birthday' }} setFormData={() => {}} dispatch={() => {}} availableTimes={['17:00', '18:00']} submitForm={() => {}} />);
  expect(screen.queryByText('*Please Choose a Date.')).not.toBeInTheDocument();
  expect(screen.queryByText('*Please Choose a Time.')).not.toBeInTheDocument();
  expect(screen.queryByText('*Please Enter Valid Number of Guests.')).not.toBeInTheDocument();
  expect(screen.queryByText('*Please Select an Occassion.')).not.toBeInTheDocument();
});
test('Validation works correctly for invalid input', () => {
  render(<BookingForm formData={{ date: '', time: '- Choose -', guests: '0', occasion: '- Choose -' }} setFormData={() => {}} dispatch={() => {}} availableTimes={['17:00', '18:00']} submitForm={() => {}} />);
  const reserveButton = screen.getByText('Reserve');
  fireEvent.click(reserveButton);
  expect(screen.getByText('*Please Choose a Date.')).toBeInTheDocument();
  expect(screen.getByText('*Please Choose a Time.')).toBeInTheDocument();
  expect(screen.getByText('*Please Enter Valid Number of Guests.')).toBeInTheDocument();
  expect(screen.getByText('*Please Select an Occassion.')).toBeInTheDocument();
});
