import '../styles/howitworks.css';
import how from '../assets/how.svg';
function How() {
  return (
    <div className="how-container">
      {' '}
      <h1 className="how-heading">How it Works</h1>
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <div className="how-wrapper">
        <img src={how} alt="how" className="how" />
      </div>
      <br /> <br />
      <br /> <br />
    </div>
  );
}

export default How;
