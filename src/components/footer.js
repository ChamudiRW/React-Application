import React from 'react';
import '../styles/footer.css';
import logo2 from '../assets/logo2.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="column logo-column">
        <div className="logo2-wrapper">
          <img src={logo2} alt="Logo2" className="logo2" />
        </div>
      </div>
      <div className="column contact-column">
        <h3 className="contact-heading">Contact Us</h3>
        <p className="contact-info">
          123 Main Street
          <br />
          New York, NY 10001
          <br />
          Phone: 123-456-7890
          <br />
          Email:{' '}
          <a href="mailto:info@example.com" className="contact-link">
            info@example.com
          </a>
        </p>
      </div>
      <div className="column social-column">
        <h3 className="social-heading">Follow Us</h3>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
