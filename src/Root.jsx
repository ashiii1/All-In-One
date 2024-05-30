// src/Main.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';  // Assuming you have your styles here

const Main = () => {
  return (
    <div className="main-container">
      <div className="box">
        <Link to="/food">Food</Link>
      </div>
      <div className="box">
        <Link to="/movie">Movie</Link>
      </div>
      <div className="box">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="box">
        <Link to="/exchange">Exchange</Link>
      </div>
    </div>
  );
};

export default Main;
