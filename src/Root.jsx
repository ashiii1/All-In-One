import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  return (
    <RootComponent>
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
    </RootComponent>
  );
};

const RootComponent= styled.div`


  .main-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background-color:aqua
  }
  
  .box {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    background-color: white;
    text-align: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .box:hover {
    background-color: #ccc;
  }
  
}

`

export default Main;
