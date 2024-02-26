import './App.css';
// import Available from './components/Available';
import Cook from './components/Cook';
// import Customer from './components/Customer';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Open from './components/Open';
import CookLogin from './components/CookLogin';
import CookRegister from './components/CookRegister';
import Home from './components/Home';
import CustomerLogin from './components/FoodieLogin';
import CustomerRegister from './components/FoodieRegister';
// import Try from './components/Try';

const App = () => {
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
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cooklogin" element={<CookLogin/>} />
        <Route path="/cookregister" element={<CookRegister/>} />
        <Route path="/foodielogin" element={<CustomerLogin/>} />
        <Route path="/foodieregister" element={<CustomerRegister/>} />
        <Route path="/customer" element={<Open/>} />
        <Route path="/cook" element={<Cook />} />
        {/* <Route path="/try" element={<Try />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;



{/* <div>
      <Customer onSearch={handleSearch} />

      <Available selectedDish={selectedDish} selectedDate={selectedDate} selectedTime={selectedTime} />
    </div>
    <Cook/> */}
