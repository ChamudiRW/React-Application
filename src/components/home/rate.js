import '../../styles/home/rate.css';
import Feed from './feed';
import rate from '../../assets/rate/rate.png';

function Rate() {
  return (
    <div className="gallery-container full-width mb-50">
      <h1 className="gallery-heading h1 mb-50">Ratings and Reviews</h1>
      <div className="ratings">
        <div className="rate">
          <img src={rate} alt="rate" className="rate" />
        </div>
        <div className="scroll">
          <Feed />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Rate;
