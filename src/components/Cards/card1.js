import '../../styles/cards.css';
import CardImage from '../../assets/card-image1.png';

const Card1 = () => {
  return (
    <div className="card">
      <img src={CardImage} alt="Card Image" className="card-image" />

      <h2 className="card-heading">Package</h2>
      <p className="card-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet
        risus velit, eget facilisis ex sodales at.
      </p>
      <div className="card-price">
        Price: <span className="card-price-amount">300$</span> per person
      </div>
      <button className="card-button">See More</button>
    </div>
  );
};

export default Card1;
