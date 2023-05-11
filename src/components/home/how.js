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
        <img src={item1} alt="item" className="item" />
        <img src={item2} alt="item" className="item" />
        <img src={item3} alt="item" className="item" />
        <img src={item4} alt="item" className="item" />
        <img src={item5} alt="item" className="item" />
      </div>
    </div>
  );
}

export default How;
