import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Available.css'; // Import your CSS file

const Available = ({ selectedDish, selectedDate, selectedTime }) => {
  const [availableData, setAvailableData] = useState([]);


  useEffect(() => {
    Axios.get(`http://localhost:3001/getAvailableData?dish=${selectedDish}&date=${selectedDate}&time=${selectedTime}`)
      .then((response) => {
        console.log('Received data from backend:', response.data);
        setAvailableData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedDish, selectedDate, selectedTime]);
  


  return (
    <div className="available-container">
      <h1>Available Delights</h1>
      <div className="results-container">
        {availableData.map((item, index) => (
          <div className='soh'>
          <div className={`result-item ${item.Dish}`} key={index}>
            
            <div className="top-section">
              <strong>Name:</strong> {item.Name} <br />
              <strong>Delivery:</strong> {item.Delivery} <br />
              <strong>Plates:</strong> {item.Plates} <br />
              <strong>Time:</strong> {item.Time} <br />
              <strong>Dish:</strong> {item.Dish} <br />
            </div>
            <div className="middle-section" style={{ backgroundImage: `url('./images/${item.Dish}.jpg')` }} />
            <div className="bottom-section">
              <strong>Email:</strong> {item.Email_id} <br />
              <strong>Phone:</strong> {item.Phone} <br />
              <strong>Experience (years):</strong> {item.Experience} <br />
              <strong>Specialty:</strong> {item.Specialty} <br />
              <strong>Address:</strong> {item.Address} <br />
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Available;
