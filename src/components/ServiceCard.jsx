import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiClock, FiDollarSign, FiInfo, FiChevronRight } from "react-icons/fi";
import { useImageComparison } from "../utils/imageComparison";
import { useTheme } from "./ThemeProvider";

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
  const containerRef = useRef(null);
  const { isDarkMode, theme } = useTheme();

  const { comparePosition, isDragging, setIsComparing } =
    useImageComparison(containerRef);

  const [showDetails, setShowDetails] = React.useState(false);

  const defaultImage = "./src/assets/images/default-service.jpg";

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
      {/* Image Comparison Section */}
      <div
        ref={containerRef}
        className="relative aspect-[16/9] cursor-pointer overflow-hidden rounded-t-2xl"
        onMouseEnter={() => setIsComparing(true)}
        onMouseLeave={() => !isDragging && setIsComparing(false)}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={beforeImage || defaultImage}
            alt="Before"
            className="w-full h-full object-cover"
          />
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 0 0 ${100 - comparePosition}%)`,
          }}
        >
          <img
            src={afterImage || defaultImage}
            alt="After"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Comparison Slider */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white cursor-ew-resize"
          style={{ right: `${100 - comparePosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500" />
          </div>
        </div>

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
            <span className="font-medium">{showDetails ? "Ẩn chi tiết" : "Xem chi tiết"}</span>
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
              <div className="pt-4 space-y-4">
                <h4 className={`text-xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  Quy trình thực hiện:
                </h4>
                {procedure.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start space-x-3 p-3 rounded-lg ${
                      isDarkMode 
                        ? "bg-slate-700/30" 
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="p-1 rounded-full bg-success-light/10">
                      <FiCheck className={`w-4 h-4 ${
                        isDarkMode ? "text-success-light" : "text-success-dark"
                      }`} />
                    </div>
                    <p className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>{step}</p>
                  </motion.div>
                ))}
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
