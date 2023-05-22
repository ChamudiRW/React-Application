import React from 'react';
import hero from '../assets/hero.png';
import '../styles/heropage.css';

const Hero = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="hero-wrapper">
        <img src={hero} alt="hero" className="hero" />
        <button className="hero-button">Plan your trip</button>
      </div>
    </div>
  );
};

export default Hero;
