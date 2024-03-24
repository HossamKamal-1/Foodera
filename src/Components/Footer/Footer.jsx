import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faDribbble,
  faYoutube,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/esm/Container';
import './Footer.css';

function Footer() {
  return (
    <footer className="py-5 bg-primary">
      <Container>
        <div className="footer-content text-white">
          <ul className="footer-links-list d-flex align-items-center justify-content-center flex-wrap gap-3 gap-md-5 list-unstyled">
            <li className="footer-item">
              <a
                href="#home"
                className="footer-link text-decoration-none link fs-5"
              >
                Register
              </a>
            </li>
            <li className="footer-item">
              <a
                href="#home"
                className="footer-link text-decoration-none link fs-5"
              >
                Forum
              </a>
            </li>
            <li className="footer-item">
              <a
                href="#home"
                className="footer-link text-decoration-none link fs-5"
              >
                Affiliate
              </a>
            </li>
            <li className="footer-item">
              <a
                href="#home"
                className="footer-link text-decoration-none link fs-5"
              >
                FAQ
              </a>
            </li>
          </ul>
          <ul className="footer-social-list d-flex align-items-center justify-content-center  gap-3 list-unstyled">
            <li className="footer-social-item">
              <a href="#home" className="footer-social-link link facebook">
                <FontAwesomeIcon icon={faFacebookF} size="xl" />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#home" className="footer-social-link link twitter">
                <FontAwesomeIcon icon={faTwitter} size="xl" />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#home" className="footer-social-link link dribbble">
                <FontAwesomeIcon icon={faDribbble} size="xl" />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#home" className="footer-social-link link youtube">
                <FontAwesomeIcon icon={faYoutube} size="xl" />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#home" className="footer-social-link link linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#home" className="footer-social-link link insta">
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
            </li>
          </ul>
          <p className="copyrights text-center">
            &copy; 2021. Foodera. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
