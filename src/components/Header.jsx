import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiSun, FiMoon } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [isScrolled, setIsScrolled]     = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location   = useLocation();
  const dropdownRef = useRef(null);

  const { isDarkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(next);
    localStorage.setItem("50lab_lang", next);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const serviceDropdown = [
    { label: t("nav.servicesShoes"),    href: "/services#shoes" },
    { label: t("nav.servicesBags"),     href: "/services#bags" },
    { label: t("nav.servicesBusiness"), href: "/lien-he-hop-tac" },
  ];

  const navLinks = [
    { to: "/policy",          label: t("nav.policy") },
    { to: "/meo-cham-soc-giay", label: t("nav.tips") },
    { to: "/lien-he-hop-tac", label: t("nav.b2b") },
  ];

  const mobileOnlyLinks = [
    { to: "/#audience",          label: t("nav.forWhom") },
    { to: "/services#quy-trinh", label: t("nav.cleaningProcess") },
    { to: "/about-us",           label: t("nav.blog") },
    { to: "/lien-he-hop-tac",    label: t("nav.businessPartners") },
  ];

  const isActive = (path) => location.pathname === path;

  const iconBtn = "p-2 rounded-lg hover:bg-theme-text/5 text-theme-muted hover:text-theme-text transition-colors";
  const langBtn = `px-2.5 py-1 text-xs font-bold rounded-lg hover:bg-theme-text/5 transition-colors ${
    isDarkMode ? "text-theme-muted hover:text-theme-text" : "text-theme-muted hover:text-theme-text"
  }`;

  return (
    <header
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-theme-bg/80 backdrop-blur-[20px] shadow-sm py-2 border-b border-theme-border/30"
          : "bg-theme-bg/60 backdrop-blur-[20px] py-3"
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
                  ? "text-theme-text bg-theme-text/5"
                  : "text-theme-text hover:bg-theme-text/5"
              }`}
            >
              {t("nav.home")}
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/services")
                    ? "text-theme-text bg-theme-text/5"
                    : "text-theme-text hover:bg-theme-text/5"
                }`}
              >
                {t("nav.services")}
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
                    className="absolute top-full left-0 mt-2 w-56 bg-theme-card/95 backdrop-blur-[20px] rounded-2xl shadow-card border border-theme-border/30 overflow-hidden"
                  >
                    {serviceDropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-theme-text hover:bg-theme-text/5 transition-colors duration-150"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive(item.to)
                    ? "text-theme-text bg-theme-text/5"
                    : "text-theme-text hover:bg-theme-text/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* ── Controls ── */}
            <div className="flex items-center gap-1 ml-2 pl-2 border-l border-theme-border/40">
              {/* Language toggle */}
              <button onClick={toggleLang} className={langBtn} aria-label="Switch language">
                {i18n.language === "vi" ? "EN" : "VI"}
              </button>

              {/* Dark mode toggle */}
              <button onClick={toggleTheme} className={iconBtn} aria-label="Toggle theme">
                {isDarkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
              </button>
            </div>

            <Link to="/contact" className="ml-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-[#E63946] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:bg-[#c8313d] hover:shadow-md"
              >
                {t("nav.bookNow")}
              </motion.button>
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-1">
            <button onClick={toggleLang} className={langBtn} aria-label="Switch language">
              {i18n.language === "vi" ? "EN" : "VI"}
            </button>
            <button onClick={toggleTheme} className={iconBtn} aria-label="Toggle theme">
              {isDarkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>
            <Link to="/contact">
              <button className="px-4 py-2 bg-[#E63946] text-white text-sm font-semibold rounded-full">
                {t("nav.book")}
              </button>
            </Link>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg text-theme-text ${iconBtn}`}
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
              className="lg:hidden absolute top-full left-0 right-0 bg-theme-card/95 backdrop-blur-[20px] border-b border-theme-border/30 shadow-lg z-[100]"
            >
              <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
                <Link
                  to="/"
                  className="px-4 py-3 text-base font-medium text-theme-text hover:bg-theme-text/5 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.home")}
                </Link>
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-theme-muted uppercase tracking-wide mb-2">
                    {t("nav.services")}
                  </p>
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block pl-3 py-2 text-base text-theme-text hover:text-[#E63946] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-theme-border/30">
                    <p className="text-sm font-semibold text-theme-muted uppercase tracking-wide mb-1">
                      {t("nav.exploreSection")}
                    </p>
                    {mobileOnlyLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block pl-3 py-2 text-base text-theme-text hover:text-[#E63946] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-4 py-3 text-base font-medium text-theme-text hover:bg-theme-text/5 rounded-xl transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 pb-2">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full py-3 bg-[#E63946] text-white font-semibold rounded-full">
                      {t("nav.bookNow")}
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
