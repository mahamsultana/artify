import React from "react";
import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Artify</h4>
          <p>Discover and support talented artists from around the world with Artify.</p>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>www.artify.com</p>
          <p>Email: artify@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: Block 13 Karachi, Pakistan</p>
        </div>
         <div className="footer-column">
          <h1>STATISTICS</h1>
          <div className="users">
        <h2>100k+</h2>
        <h3>Total Users</h3>
      </div>

      <div className="users">
        <h2>10k+</h2>
        <h3>Active Artist</h3>
      </div>

      <div className="users">
        <h2>1k+</h2>
        <h3>Top Selling Artists</h3>
      </div>

      <div className="users">
        <h2>900K+</h2>
        <h3>Total Views</h3>
      </div>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <p>Stay updated on our latest news and events.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100081500791046"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://twitter.com/maham_162"> <FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/mahamm.__.xx/"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Artify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
