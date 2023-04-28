import React from 'react';
import '../styles/nav.css';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <div className="navbar">
      <div className="grid-container">
        <div className="first">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
        <div className="second">
          <div className="row1">
            <p>
              Phone:
              <br /> 123-456-7890
            </p>
            <p>
              Email:
              <br /> info@example.com
            </p>
            <p>
              Language:
              <br /> Eng
            </p>
          </div>
          <div className="row2">
            {' '}
            <a href="/">Home</a>
            <a href="/packages">Packages</a>
            <a href="/attractions">Attractions</a>
            <a href="/news">News</a>
            <a href="/Contact">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
