// NPM import
import React from 'react';

// Local import

// Styles
import './footer.scss';

// Code
const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = () => (
  <footer className="footer">
    <p className="footer__text">&copy; {getYear()} Denis Guimaraes.</p>
    <ul>
      <li className="footer__link">Mentions légales</li>
      <li className="footer__link">Contact</li>
    </ul>
  </footer>
);

// Export
export default Footer;
