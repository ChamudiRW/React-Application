import '../../styles/home/hero.css';
import cover from '../../assets/hero.png';
function Hero() {
  return (
    <div className="full-width hero-container mb-50">
      <img src={cover} alt="cover" className="cover" />
      <button className="button hero-button h2">Plan your trip</button>
    </div>
  );
}

export default Hero;
