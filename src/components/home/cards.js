import '../../styles/home/cards.css';
import Card1 from './cards/card1';
import Card2 from './cards/card2';
import Card3 from './cards/card3';
import Card4 from './cards/card4';
import Card5 from './cards/card5';
import Card6 from './cards/card6';

function Cards() {
  return (
    <div className="full-width mb-50 card-container">
      <h1 className="h1 heading mb-50">Attractions and Packages</h1>

      {/* Div for all cards */}
      <div className="card-container">
        {/* Div for first 3 cards */}
        <div className="card123">
          {/* Card1 */}
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="card123">
          <Card4 />
          <Card5 />
          <Card6 />
        </div>
      </div>
    </div>
  );
}

export default Cards;
