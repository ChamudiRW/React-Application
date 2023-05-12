import '../../../styles/home/cards.css';
import CardImage from '../../../assets/cards/card-image4.png';

function Card4() {
  return (
    <div className="card">
      <img src={CardImage} alt="Card Image" className="card-image" />
      <div className="mobile">
        <h2 className="card-heading h2">City Breaks</h2>

        <p className="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          imperdiet risus velit, eget facilisis ex sodales at.
        </p>
        <div className="card-price h5">$800 to $5000 per person</div>
        <button className="card-button button h3">See More</button>
      </div>
    </div>
  );
}

export default Card4;
