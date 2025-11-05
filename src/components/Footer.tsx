import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg'; // Import the logo image

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer-custom">
      <div className="container text-center">
        <img 
          src={logo} 
          alt="Restaurant Logo" 
          className="footer-logo" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          style={{ cursor: 'pointer' }} /* Add cursor style to indicate clickability */
        /> {/* Add the logo here */}
        <p className="copyright-text">&copy; {currentYear}, FAT CHEF. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;