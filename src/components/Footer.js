import React from 'react';
import '../components/css/Footer.css'; // Import your custom CSS for styling
import Logo from '../assets/lg-koti-circle.png'; // Import your logo image

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-container">
        <img src={Logo} alt="Kopi Koti Logo" />
        <span className="logo-caption">Kopi Koti</span>
      </div>
      <div className="copyright-container">
        <span className="copyright-caption">©2023 Kopi Koti. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;