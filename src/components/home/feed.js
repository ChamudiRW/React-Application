import '../../styles/home/feed.css';
import star from '../../assets/rate/star1.png';

function Feed() {
  return (
    <div className="feedback">
      <img src={star} alt="star" className="star" />
      <h2 className="name">John Doe</h2>
      <p className="message">
        I had an incredible time with Pink Flamingo Travels in Sri Lanka! Their
        attention to detail and personalized itinerary made the trip truly
        unforgettable.
      </p>
    </div>
  );
}

export default Feed;
