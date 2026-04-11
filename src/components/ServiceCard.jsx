import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiClock, FiChevronDown } from "react-icons/fi";

const Service = ({ name, price, icon: Icon, serviceInfo, time, procedure, discount, beforeImage, afterImage }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="bg-white rounded-[18px] overflow-hidden border border-[#E5E5EA]"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
    >
      {/* Before / After side-by-side */}
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex-1 aspect-video sm:aspect-auto sm:h-44 overflow-hidden bg-[#F5F5F7]">
          <img src={beforeImage} alt="Before" className="w-full h-full object-cover" loading="lazy" />
          <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#1D1D1F]/70 text-white text-[10px] font-semibold rounded-full">
            TRƯỚC
          </span>
        </div>
        <div className="w-px bg-[#E5E5EA] hidden sm:block" />
        <div className="h-px bg-[#E5E5EA] sm:hidden" />
        <div className="relative flex-1 aspect-video sm:aspect-auto sm:h-44 overflow-hidden bg-[#F5F5F7]">
          <img src={afterImage} alt="After" className="w-full h-full object-cover" loading="lazy" />
          <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#E63946]/80 text-white text-[10px] font-semibold rounded-full">
            SAU
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-[#1D1D1F] leading-snug">{name}</h3>
          {discount && (
            <span className="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-600 border border-rose-100 rounded-full flex-shrink-0">
              -{discount.amount}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-[#1D1D1F] text-sm">{price}</span>
          <div className="flex items-center gap-1.5 text-[#6E6E73] text-xs">
            <FiClock className="w-3.5 h-3.5" />
            {time}
          </div>
        </div>

        <p className="text-[#6E6E73] text-sm leading-relaxed">{serviceInfo}</p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-[#E5E5EA] text-[#1D1D1F] text-sm font-medium hover:bg-[#F5F5F7] transition-colors"
        >
          <span>Xem quy trình</span>
          <motion.span animate={{ rotate: showDetails ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <FiChevronDown className="w-4 h-4" />
          </motion.span>
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="pt-2 space-y-2">
                {procedure.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6E6E73]">
                    <FiCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                    {step}
                  </li>
                ))}
              </ul>
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
    type: PropTypes.string,
    amount: PropTypes.string,
    description: PropTypes.string,
  }),
  beforeImage: PropTypes.string,
  afterImage: PropTypes.string,
};

const ServiceCard = ({ services }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {services?.filter((s) => s.id <= 4).map((service) => (
      <Service key={service.id} {...service} />
    ))}
  </div>
);

ServiceCard.propTypes = {
  services: PropTypes.array.isRequired,
};

export default ServiceCard;
