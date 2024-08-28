// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex absolute gap-1 bottom-4 left-[50%] translate-x-[-50%] text-sm text-center">
      <a href="Disclaimer.html" className="text-gray-50">Disclaimer</a>
      <span className="text-gray-50">|</span>
      <a href="Privacy.html" className="text-gray-50">Privacy</a>
      <span className="text-gray-50">|</span>
      <a href="Help.html" className="text-gray-50">Help</a>
      <span className="text-gray-50">|</span>
      <a href="Contact.html" className="text-gray-50">Contact</a>
      <span className="text-gray-50">|</span>
      <a href="index.html" className="text-gray-50">2024 IPTV</a>
    </footer>
  );
};

export default Footer;
