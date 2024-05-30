import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333; /* Change color to your preference */
  }

  .navigation ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .navigation li {
    margin-right: 1rem;
  }

  .navigation a {
    text-decoration: none;
    color: #555; /* Change color to your preference */
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .navigation a:hover {
    color: #000; /* Change color to your preference */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="brand">My Brand</div>
      <nav className="navigation">
      <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
