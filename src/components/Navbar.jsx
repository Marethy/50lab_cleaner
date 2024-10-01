import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-6 bg-black text-white">
    <div className="text-3xl font-bold">👑</div>
    <ul className="flex space-x-8">
      <li><a href="#home" className="hover:text-gray-400">Home</a></li>
      <li><a href="#how-it-works" className="hover:text-gray-400">How it Works</a></li>
      <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
      <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
    </ul>
  </nav>
);

export default Navbar;
