import '../styles/ratings.css';
import rate from '../assets/rate.png';
import star from '../assets/stars.png';

function Ratings() {
  return (
    <div className="rate-container">
      {' '}
      <h1 className="rate-heading">Ratings and Reviews</h1>
      <div className="cont">
        <div className="image-rate">
          <img src={rate} alt="rate" className="rate" />
        </div>

        <div className="feedback-card">
          <img src={star} alt="star" className="star" />
          <h2 className="name">John Doe</h2>
          <p className="message">
            I had an incredible time with Pink Flamingo Travels in Sri Lanka!
            Their attention to detail and personalized itinerary made the trip
            truly unforgettable.
          </p>
        </div>

        <div className="feedback-card">
          <img src={star} alt="star" className="star" />
          <h2 className="name">John Doe</h2>
          <p className="message">
            I had an incredible time with Pink Flamingo Travels in Sri Lanka!
            Their attention to detail and personalized itinerary made the trip
            truly unforgettable.
          </p>
        </div>
        <div className="feedback-card">
          <img src={star} alt="star" className="star" />
          <h2 className="name">John Doe</h2>
          <p className="message">
            I had an incredible time with Pink Flamingo Travels in Sri Lanka!
            Their attention to detail and personalized itinerary made the trip
            truly unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
