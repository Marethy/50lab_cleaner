import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "/", label: "Trang chủ", isExternal: false },
    { to: "/services/", label: "Dịch vụ", isExternal: false },
    { to: "/policy", label: "Chính sách", isExternal: false },
    { to: "/about", label: "Về chúng tôi", isExternal: false },
    { to: "/contact", label: "Liên hệ", isExternal: false },
  ];

  return (
    <div
      id="header-menu"
      className="flex justify-between py-2.5 lg:py-4 lg:justify-start lg:items-center lg:space-x-48 relative "
    >
      <div className="flex items-center lg:justify-start ">
        <a href="/">
          <img
            className="ml-10 w-20 h-20  "
            src="50lab.jpg"
            alt="50 Lab Logo"
          />
        </a>
      </div>

      <nav className="hidden lg:flex items-center justify-between">
        <ul className="main-menu flex space-x-24 h-full ">
          <Link
            to="/"
            className="text-base font-medium hover:text-gray-900 text-primary"
          >
            Trang chủ
          </Link>
          <Link
            to="/services"
            className="text-base font-medium hover:text-gray-900 text-primary"
          >
            Dịch vụ
          </Link>

          <Link
            to="/contact"
            className="text-base font-medium text-third hover:text-gray-900"
          >
            Liên hệ
          </Link>
          <Link
            to="/policy"
            className="text-base font-medium text-third hover:text-gray-900"
          >
            Chính sách
          </Link>
          <Link
            to="/about-us"
            className="text-base font-medium text-third hover:text-gray-900"
          >
            Về chúng tôi
          </Link>
        </ul>
      </nav>

      <div className="flex  items-center justify-end mx-8">
        <button
          id="nav-toggle"
          type="button"
          className="bg-white rounded-md p-2 pr-0  focus:outline-none "
          onClick={toggleMenu}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#1E417B"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 bg-white shadow-lg z-50 pt-5 pb-6 px-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="w-auto h-20"
                  src="50lab.jpg"
                  alt="Sneaker Logo"
                />
              </a>
            </div>
            <div>
              <button
                id="close-nav"
                type="button"
                className="bg-white rounded-md inline-flex items-center justify-center text-primary-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <img
                  src="https://sneakervitamin.net/wp-content/themes/sneaker-vitamin/images/close-menu-mobile.svg"
                  alt="Close menu"
                />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <nav id="menu-mobile">
              <ul className="main-menu flex flex-col">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`pt-4 ${index === 0 ? "item-active" : ""}`}
                  >
                    {item.isExternal ? (
                      <a href={item.href} className="text-lg px-5 py-2">
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.to} className="text-lg px-5 py-2">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
