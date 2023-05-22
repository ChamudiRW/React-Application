import '../../styles/home/how.css';
import item1 from '../../assets/how/1.png';
import item2 from '../../assets/how/2.png';
import item3 from '../../assets/how/3.png';
import item4 from '../../assets/how/4.png';
import item5 from '../../assets/how/5.png';
function How() {
  return (
    <div className="how-container full-width mb-50">
      <h1 className="how-heading h1 mb-50">How It Works</h1>
      <div className="how-items">
        <div className="item-p">
          <img src={item1} alt="item" className="item" />
          <h3 className="h3">Enquire now</h3>
        </div>
        <div className="item-p">
          <img src={item2} alt="item" className="item" />
          <h3 className="h3">Consultation</h3>
        </div>
        <div className="item-p">
          <img src={item3} alt="item" className="item" />
          <h3 className="h3">Customization</h3>
        </div>
        <div className="item-p">
          <img src={item4} alt="item" className="item" />
          <h3 className="h3">Booking and Payment</h3>
        </div>
        <div className="item-p">
          <img src={item5} alt="item" className="item" />
          <h3 className="h3">Travel and Support</h3>
        </div>
      </div>
    </div>
  );
}

export default How;
