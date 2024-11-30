/* global submitAPI */
import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof submitAPI !== "function") {
      alert("submitAPI is not defined.");
      return;
    }

    const formData = { date, time, guests, occasion };
    const success = submitAPI(formData);
    if (success) {
      alert("Reservation successfully made!");
    } else {
      alert("Failed to make a reservation. Please try again.");
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "update", payload: { date: selectedDate } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reservation Form</h2>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
      <br />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />
      <br />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option value="" disabled>
          Select an occasion
        </option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <br />
      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
