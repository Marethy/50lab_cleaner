import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiClock, FiDollarSign, FiInfo, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { serviceImages } from "../config/images";

const Service = ({
  name,
  price,
  icon: Icon,
  serviceInfo,
  time,
  procedure,
  discount,
  beforeImage,
  afterImage,
}) => {
  const [currentImage, setCurrentImage] = useState('before');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const autoPlayRef = useRef(null);
  const { isDarkMode } = useTheme();

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImage(prev => prev === 'before' ? 'after' : 'before');
      }, 3000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    if (!isAutoPlaying) {
      setIsAutoPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(false);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl ${
        isDarkMode 
          ? "bg-slate-800/50 hover:bg-slate-800/80 backdrop-blur-sm" 
          : "bg-white hover:bg-gray-50"
      } shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {/* Image Section */}
      <div
        className="relative aspect-[16/9] cursor-pointer overflow-hidden rounded-t-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Before Image */}
        <motion.div
          animate={{ opacity: currentImage === 'before' ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={beforeImage || serviceImages.default}
            alt="Before"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* After Image */}
        <motion.div
          animate={{ opacity: currentImage === 'after' ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={afterImage || serviceImages.default}
            alt="After"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-4">
          <button
            onClick={() => setCurrentImage('before')}
            className={`p-2 rounded-full ${
              currentImage === 'before'
                ? 'bg-white text-gray-900'
                : 'bg-gray-900/50 text-white'
            } transition-all duration-300`}
          >
            Before
          </button>
          <button
            onClick={() => setCurrentImage('after')}
            className={`p-2 rounded-full ${
              currentImage === 'after'
                ? 'bg-white text-gray-900'
                : 'bg-gray-900/50 text-white'
            } transition-all duration-300`}
          >
            After
          </button>
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={() => setCurrentImage('before')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentImage('after')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 pointer-events-none" />

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold font-heading">{name}</h3>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiDollarSign className="w-5 h-5" />
              <span className="text-lg font-semibold">{price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Info Section */}
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {Icon && (
              <div className={`p-3 rounded-xl ${
                isDarkMode 
                  ? "bg-slate-700/50" 
                  : "bg-gray-100"
              }`}>
                <Icon className="w-6 h-6 text-primary-500" />
              </div>
            )}
            <div className="flex items-center space-x-2">
              <FiClock className={`w-5 h-5 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`} />
              <span className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>{time}</span>
            </div>
          </div>
          {discount && (
            <div className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-full">
              {discount.amount} {discount.type === 'student' ? 'Sinh viên' : 'OFF'}
            </div>
          )}
        </div>

        <p className={`${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        } leading-relaxed`}>{serviceInfo}</p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className={`w-full flex items-center justify-between px-6 py-3 rounded-xl border ${
            isDarkMode
              ? "border-slate-700 hover:bg-slate-700/50 text-white"
              : "border-gray-200 hover:bg-gray-50 text-gray-700"
          } transition-all duration-300`}
        >
          <div className="flex items-center space-x-2">
            <FiInfo className="w-5 h-5" />
            <span className="font-medium">Chi tiết dịch vụ</span>
          </div>
          <FiChevronRight className={`w-5 h-5 transition-transform duration-300 ${
            showDetails ? "rotate-90" : ""
          }`} />
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`pt-4 space-y-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                <h4 className="font-medium text-lg">Quy trình thực hiện:</h4>
                <ul className="space-y-2">
                  {procedure.map((step, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <FiCheck className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                      <span>{step}.</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

Service.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  serviceInfo: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  procedure: PropTypes.arrayOf(PropTypes.string).isRequired,
  discount: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  beforeImage: PropTypes.string,
  afterImage: PropTypes.string,
};

const ServiceCard = ({ services }) => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 ${isDarkMode ? "bg-slate-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className={`text-4xl font-bold font-heading ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className={`text-xl ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Khám phá các dịch vụ chuyên nghiệp của chúng tôi
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

ServiceCard.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      serviceInfo: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      procedure: PropTypes.arrayOf(PropTypes.string).isRequired,
      discount: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
      beforeImage: PropTypes.string,
      afterImage: PropTypes.string,
    })
  ).isRequired,
};

export default ServiceCard;
