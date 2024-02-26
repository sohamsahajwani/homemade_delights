import React, { useState } from 'react';
import "./Customer.css"

const Customer = ({ onSearch }) => {
  const [selectedDish, setSelectedDish] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const dishOptions = ['All Dishes', 'Paratha', 'Dal Rice', 'Chole Bhature' , 'Idli Dosa' , 'Paneer Masala', 'Noodles' , 'Biryani' , 'Burger' , 'Pizza' , 'Chicken Masala'];
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split('T')[0];
  const timeOptions = ['7am-10am', '1pm-4pm', '8pm-11pm'];

  const handleSearch = () => {
    onSearch(selectedDish, selectedDate, selectedTime);
  };

  return (
    <div className='customer-new'>
    <h1>Filter Delights</h1>
    <div className='customer'>
      <label>
        Dishes:
        <select value={selectedDish} onChange={(e) => setSelectedDish(e.target.value)}>
        <option value="" disabled>Select Dish</option>
          {dishOptions.map((dish, index) => (
            
            <option key={index} value={dish}>
              {dish}
            </option>
          ))}
        </select>
      </label>
      {/* <br /> */}
      <label>
        Date:
        <input
          type="date"
          min={formattedCurrentDate}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </label>
      {/* <br /> */}
      <label>
        Time:
        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
        <option value="" disabled>Select Time</option>
          {timeOptions.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      {/* <br /> */}
      
    </div>
    <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Customer;

