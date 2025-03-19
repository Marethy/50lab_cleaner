import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { to: "/", label: "Trang chủ" },
    { to: "/services", label: "Dịch vụ" },
    { to: "/policy", label: "Chính sách" },
    { to: "/about-us", label: "Về chúng tôi" },
    { to: "/contact", label: "Liên hệ" },
  ];

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    exit: { y: -100 }
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? `${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md shadow-lg py-2`
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-16 w-auto"
              src="/50lab.jpg"
              alt="50 Lab Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-3 py-2 text-lg font-medium transition-colors duration-200
                  ${
                    location.pathname === item.to
                      ? isDarkMode ? "text-blue-400" : "text-blue-600"
                      : isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {item.label}
                {location.pathname === item.to && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                    initial={false}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-800 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`lg:hidden fixed inset-y-0 right-0 w-full sm:w-80 ${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            } shadow-2xl`}
          >
            <div className="flex flex-col h-full">
              <div className={`flex items-center justify-between p-4 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              } border-b`}>
                <img
                  className="h-12 w-auto"
                  src="/50lab.jpg"
                  alt="50 Lab Logo"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-2 rounded-md ${
                    isDarkMode 
                      ? 'hover:bg-gray-800 text-gray-300' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <FiX className="h-6 w-6" />
                </motion.button>
              </div>
              
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.to}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-3 px-4 text-lg rounded-lg transition-colors
                          ${
                            location.pathname === item.to
                              ? isDarkMode 
                                ? "bg-gray-800 text-blue-400 font-medium"
                                : "bg-blue-50 text-blue-600 font-medium"
                              : isDarkMode
                                ? "text-gray-300 hover:bg-gray-800"
                                : "text-gray-600 hover:bg-gray-50"
                          }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className={`p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-t`}>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-center`}>
                  © 2024 50Lab. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderMenu;
