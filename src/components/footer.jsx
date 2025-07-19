import React from 'react';
import './footer.css'; // Ensure CSS file name is correct

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Apple News</h4>
          <p>Your go-to app for the latest news and trends. Stay informed with our curated articles, tailored just for you.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Apple News. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
