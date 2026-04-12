import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const serviceDropdown = [
  { label: "Vệ sinh giày", href: "/services#shoes" },
  { label: "Vệ sinh túi xách", href: "/services#bags" },
  { label: "Dịch vụ cho doanh nghiệp", href: "/lien-he-hop-tac" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/policy", label: "Chính sách" },
    { to: "/meo-cham-soc-giay", label: "Mẹo chăm sóc giày" },
    { to: "/lien-he-hop-tac", label: "Liên hệ hợp tác" },
  ];

  // Extra items shown only in mobile hamburger menu (sections hidden on mobile homepage)
  const mobileOnlyLinks = [
    { to: "/#audience", label: "Dịch vụ dành cho ai?" },
    { to: "/services#quy-trinh", label: "Quy trình làm sạch" },
    { to: "/about-us", label: "Góc chia sẻ" },
    { to: "/lien-he-hop-tac", label: "Đối tác doanh nghiệp" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-[20px] shadow-sm py-2 border-b border-black/5"
          : "bg-white/60 backdrop-blur-[20px] py-3"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="h-14 w-auto"
              src="/logo.svg"
              alt="50-Lab Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive("/")
                  ? "text-[#0A1628] bg-black/5"
                  : "text-[#1D1D1F] hover:text-[#0A1628] hover:bg-black/5"
              }`}
            >
              Trang chủ
            </Link>

            {/* Dịch vụ dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/services")
                    ? "text-[#0A1628] bg-black/5"
                    : "text-[#1D1D1F] hover:text-[#0A1628] hover:bg-black/5"
                }`}
              >
                Dịch vụ
                <motion.span
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-[20px] rounded-2xl shadow-card border border-black/5 overflow-hidden"
                  >
                    {serviceDropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-[#1D1D1F] hover:bg-black/5 hover:text-[#0A1628] transition-colors duration-150"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive(item.to)
                    ? "text-[#0A1628] bg-black/5"
                    : "text-[#1D1D1F] hover:text-[#0A1628] hover:bg-black/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="ml-2 px-5 py-2.5 bg-[#E63946] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:bg-[#c8313d] hover:shadow-md"
              >
                Đặt lịch ngay
              </motion.button>
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <Link to="/contact">
              <button className="px-4 py-2 bg-[#E63946] text-white text-sm font-semibold rounded-full">
                Đặt lịch
              </button>
            </Link>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-black/5 text-[#1D1D1F]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[99] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-[20px] border-b border-black/5 shadow-lg z-[100]"
            >
              <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
                <Link
                  to="/"
                  className="px-4 py-3 text-base font-medium text-[#1D1D1F] hover:bg-black/5 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trang chủ
                </Link>
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-[#6E6E73] uppercase tracking-wide mb-2">Dịch vụ</p>
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block pl-3 py-2 text-base text-[#1D1D1F] hover:text-[#0A1628] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-black/5">
                    <p className="text-sm font-semibold text-[#6E6E73] uppercase tracking-wide mb-1">Khám phá</p>
                    {mobileOnlyLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block pl-3 py-2 text-base text-[#1D1D1F] hover:text-[#0A1628] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {navLinks.slice(1).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-4 py-3 text-base font-medium text-[#1D1D1F] hover:bg-black/5 rounded-xl transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 pb-2">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full py-3 bg-[#E63946] text-white font-semibold rounded-full">
                      Đặt lịch ngay
                    </button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
