import React from 'react';
import '../../styles/cards.css';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import Card6 from './card6';

function Cards() {
  return (
    <div className="cards-container">
      <h1 className="packages">Attractions and Packages</h1>
      <div className="cards-row">
        <div className="cards-column">
          <Card1 />
        </div>
        <div className="cards-column">
          <Card2 />
        </div>
        <div className="cards-column">
          <Card3 />
        </div>
      </div>
      <div className="cards-row">
        <div className="cards-column">
          <Card4 />
        </div>
        <div className="cards-column">
          <Card5 />
        </div>
        <div className="cards-column">
          <Card6 />
        </div>
      </div>
    </div>
  );
}

export default Cards;
