import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ padding: '1em', backgroundColor: '#f8f8f8', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} E-Commerce App</p>
      <div>
        <Link to="/terms" style={{ margin: '0 10px' }}>
          Terms of Service
        </Link>
        <Link to="/contact" style={{ margin: '0 10px' }}>
          Contact Us
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
