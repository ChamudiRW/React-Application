import '../styles/navbar.css';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <navbar>
      <div className="full-width contacts">
        <ul className="contact-items h6">
          <li>
            Phone:
            <br /> 123-456-7890
          </li>
          <li>
            Email:
            <br /> info@example.com
          </li>
          <li>
            Language:
            <br /> Eng
          </li>
        </ul>
      </div>
      <div className="full-width">
        <div className="navs">
          <img src={logo} alt="Logo" className="logo" />
          <div className="bars">
            <i className="fa fa-bars"></i>
          </div>
          <ul className="links h4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/packages">Packages</a>
            </li>
            <li>
              <a href="/attractions">Attractions</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
          </ul>
          <button className="button contact-button h5">Contact Us</button>
        </div>
      </div>
    </navbar>
  );
}

export default Navbar;
