import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-6 bg-black text-white z-50">
    <ul className="flex space-x-8 ml-auto">
      <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
      <li><Link to="/how-it-works" className="hover:text-gray-400">How it Works</Link></li>
      <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
      <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
      <li><Link to ="policy" className= "hover:text-gray-400"> Policy</Link> </li>
    </ul>
  </nav>
);

export default Navbar;
