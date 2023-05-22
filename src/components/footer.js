import '../styles/footer.css';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="full-width footer-container">
      <img src={logo} alt="Logo" className="flogo" />

      <ul className="flinks h4">
        <p className="topic">Pink Flamingo Travels</p>
        <li>
          <a href="/" className="fli">
            Home
          </a>
        </li>
        <li>
          <a href="/packages" className="fli">
            Packages
          </a>
        </li>
        <li>
          <a href="/attractions" className="fli">
            Attractions
          </a>
        </li>
        <li>
          <a href="/news" className="fli">
            News
          </a>
        </li>
      </ul>

      <ul className="fcontact h4">
        <li className="fli">
          Phone:
          <br /> 123-456-7890
        </li>
        <li className="fli">
          Email:
          <br /> info@example.com
        </li>
        <li className="fli">
          Language:
          <br /> Eng
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
