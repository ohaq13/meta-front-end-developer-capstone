import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,faLocationDot,faPhone} from '@fortawesome/free-solid-svg-icons';
import '../footer.css';

export default function Footer() {

    return (
      <footer>
        <img src="/images/footer.png" alt="little lemon"/>
        <div className="footer-content">
            <div className="footer-nav">
                <p className="footer-head">Navigtion</p>
                <Link to="/" className="footer-item">Home</Link>
                <a href="#" className="footer-item">About</a>
                <a href="#" className="footer-item">Menu</a>
                <Link to="/booking" className="footer-item">Reservations</Link>
                <a href="#" className="footer-item">Order Online</a>
                <a href="#" className="footer-item">Login</a>
            </div>
            <div className="footer-contact">
                <p className="footer-head">Contact</p>
                <a href="#" className="footer-item"> 678 Pisa Ave, Chicago, IL 60611</a>
                <a href="#" className="footer-item"> (312) 593-2744</a>
                <a href="#" className="footer-item">customer@littlelemon.com</a>
            </div>
            <div className="footer-social">
                <p className="footer-head">Social Media</p>    
                <div className="footer-social-row">
                  <a href="https://www.facebook.com"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                  <a href="https://www.twitter.com"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                  <a href="https://www.instagram.com"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                  <a href="https://www.youtube.com"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                </div>
            </div>
        </div>
      </footer>
    )
  }
