import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F5F5F7] border border-[#E5E5EA] rounded-full text-sm text-[#6E6E73] font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Đang nhận đặt lịch tại TP.HCM
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1D1D1F] tracking-tight leading-[1.05] mb-5 max-w-4xl"
          >
            Vệ sinh giày, túi xách
            <span className="block">chuyên nghiệp.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeInOut" }}
            className="text-lg sm:text-xl text-[#6E6E73] max-w-lg mb-10 leading-relaxed"
          >
            Giao nhanh trong 2 giờ · Ship đồng giá 30K hai chiều
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row items-center gap-3 mb-16"
          >
            <Link to="/contact">
              <button className="px-8 py-3.5 bg-[#E63946] text-white font-semibold rounded-full text-sm hover:bg-[#c8313d] transition-colors">
                Đặt lịch ngay
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-3.5 bg-white text-[#1D1D1F] font-semibold rounded-full text-sm border border-[#E5E5EA] hover:bg-[#F5F5F7] transition-colors">
                Xem dịch vụ
              </button>
            </Link>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
            className="w-full max-w-3xl mx-auto rounded-[24px] overflow-hidden border border-[#E5E5EA] mb-14"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}
          >
            <img
              src="/50lab.jpg"
              alt="50LAB - Dịch vụ vệ sinh giày túi xách chuyên nghiệp tại TP.HCM"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: "⚡", label: "Giao nhanh 2 giờ" },
              { icon: "🛡️", label: "Bảo hành 14 ngày" },
              { icon: "⭐", label: "Đánh giá 5 sao" },
              { icon: "📦", label: "Ship 2 chiều 30K" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#F5F5F7] border border-[#E5E5EA] rounded-full text-sm text-[#1D1D1F]"
              >
                <span>{badge.icon}</span>
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
