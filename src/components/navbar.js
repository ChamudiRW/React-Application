import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo-styles">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="contact-styles">
          {' '}
          <ul className="ul-items-1">
            <li>
              {' '}
              Phone:
              <br /> 123-456-7890
            </li>
            <li>
              {' '}
              Email:
              <br /> info@example.com
            </li>
            <li>
              Language:
              <br /> Eng
            </li>
          </ul>
        </div>
        {/* <div className="item2">
          <ul className="ul-items-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/packages">Packages</a>
            </li>
            <li>
              <a href="/attractions">Attractions</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/Contact">Contact Us</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
