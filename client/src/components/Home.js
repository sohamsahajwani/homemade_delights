import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <div className="project-info">
        <h1>Welcome to Homemade Delights</h1>
        <h3>Wholesome, Homemade, Heartwarming</h3>
      </div>
      <div className='left-right-half'>
      <div className="left-half">
        <h2>Chef's Portal</h2>
        <h3>Share your culinary creations with our Cook Login</h3>
        <Link to="/cooklogin">
          <button>Cook Login</button>
        </Link>
      </div>
      <div className="right-half">
        <h2>Customer Zone</h2>
        <h3>Discover homemade goodness with our Customer Login</h3>
        <Link to="/foodielogin">
          <button>Foodie Login</button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
