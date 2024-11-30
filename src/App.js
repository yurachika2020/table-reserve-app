/* global fetchAPI */
import './App.css';
import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const fetchAPI = (date) => {
  // Mock implementation
  return ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"];
};

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};


const updateTimes = (state, action) => {
  if (action.type === "update") {
    return typeof fetchAPI === "function" ? fetchAPI(new Date(action.payload.date)) : [];
  }
  return state;
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="App">
      <h1>Make a Reservation</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default App;
