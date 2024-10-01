import React from 'react';
import Icon50Lab from "../assets/images/50lab.jpg"; 
const Footer = () => (
  <footer className="bg-black text-white py-6">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div>
        
        <p>&copy; 2024 ShoeCleaning. All rights reserved.</p>
      </div>
      <div className="space-x-4">
        <a href="#about" className="hover:text-gray-400">About Us</a>
        <a href="#contact" className="hover:text-gray-400">Contact Us</a>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/profile.php?id=100090212237009" className="hover:text-gray-400">Facebook</a>
        <a href="https://www.instagram.com/50lab.official/" className="hover:text-gray-400">Instagram</a>
        <a href="https://zalo.me" className="hover:text-gray-400">Zalo</a>
      </div>
    </div>
  </footer>
);

export default Footer;
