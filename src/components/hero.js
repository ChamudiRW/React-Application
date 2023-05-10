import '../styles/hero.css';
import cover from '../assets/hero.png';
function Hero() {
  return (
    <div className="full-width hero-container">
      <img src={cover} alt="cover" className="cover" />
      <button className="button hero-button">Plan your trip</button>
    </div>
  );
}

export default Hero;
