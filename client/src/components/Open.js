import React, { useState } from 'react';
import Customer from './Customer'
import Available from './Available'

const Open = () => {

    const [selectedDish, setSelectedDish] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSearch = (dish, date, time) => {
    setSelectedDish(dish);
    setSelectedDate(date);
    setSelectedTime(time);
  };

  return (
    <div>
      <div>
      <Customer onSearch={handleSearch} />
      <Available selectedDish={selectedDish} selectedDate={selectedDate} selectedTime={selectedTime} />
    </div>
    </div>
  )
}

export default Open
