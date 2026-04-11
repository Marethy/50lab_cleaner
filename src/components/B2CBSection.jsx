import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const B2CBSection = () => {
  return (
    <section id="audience" className="bg-[#F5F5F7] py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-3">Dành cho ai?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-3">
            Dịch vụ dành cho bạn
          </h2>
          <p className="text-[#6E6E73] text-base">50-Lab phục vụ cả khách hàng cá nhân lẫn doanh nghiệp</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* B2C */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-white rounded-[18px] p-8 sm:p-10 flex flex-col gap-6 border border-[#E5E5EA]"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          >
            <div>
              <div className="w-10 h-10 bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl flex items-center justify-center text-xl mb-4">
                👤
              </div>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">Khách hàng cá nhân (B2C)</h3>
              <p className="text-[#6E6E73] text-sm leading-relaxed">Dịch vụ nhanh chóng, tiện lợi cho nhu cầu hằng ngày</p>
            </div>
            <ul className="space-y-2.5">
              {["Giao nhanh trong 2 giờ", "Ship đồng giá 30K hai chiều", "Đặt lịch online dễ dàng", "Bảo hành 14 ngày"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#1D1D1F] text-sm">
                  <span className="text-[#E63946] font-bold text-lg leading-none">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-auto">
              <button className="w-full py-3 bg-[#E63946] text-white font-semibold rounded-full text-sm hover:bg-[#c8313d] transition-colors">
                Đặt lịch ngay
              </button>
            </Link>
          </motion.div>

          {/* B2B */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08, ease: "easeInOut" }}
            className="bg-[#1D1D1F] rounded-[18px] p-8 sm:p-10 flex flex-col gap-6"
          >
            <div>
              <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-xl mb-4">
                🏢
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Doanh nghiệp (B2B)</h3>
              <p className="text-white/50 text-sm leading-relaxed">Giải pháp cho tiệm giặt ủi, cửa hàng, khách sạn</p>
            </div>
            <ul className="space-y-2.5">
              {["Hợp đồng dịch vụ theo tháng", "Chiết khấu theo số lượng", "Giao nhận tận nơi tại TP.HCM"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white text-sm">
                  <span className="text-white/40 font-bold text-lg leading-none">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/lien-he-hop-tac" className="mt-auto">
              <button className="w-full py-3 bg-white text-[#1D1D1F] font-semibold rounded-full text-sm hover:bg-white/90 transition-colors">
                Liên hệ hợp tác
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default B2CBSection;
