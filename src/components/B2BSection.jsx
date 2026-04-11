import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import chinLabLogo   from "../assets/images/partners/chin-lab.jpg";
import sojiLogo      from "../assets/images/partners/soji.svg";
import saveTheLoveLogo from "../assets/images/partners/save-the-love.jpg";

const benefits = [
  { icon: "🔄", title: "Quy trình chuẩn", desc: "5 bước vệ sinh & đóng gói đồng nhất" },
  { icon: "🚚", title: "Giao – nhận tận nơi", desc: "Thu nhận và trả hàng trong TP.HCM" },
  { icon: "💰", title: "Chiết khấu hấp dẫn", desc: "Ưu đãi theo số lượng, hợp đồng dài hạn" },
  { icon: "🏷️", title: "Đồng thương hiệu", desc: "Hỗ trợ in tem, bao bì riêng cho đối tác" },
  { icon: "📞", title: "Hỗ trợ chuyên trách", desc: "Đội ngũ B2B riêng, phản hồi nhanh chóng" },
];

const partners = [
  { name: "Chin Lab",                 logo: chinLabLogo,    type: "image" },
  { name: "Soji",                     logo: sojiLogo,       type: "svg"   },
  { name: "Save - The love a little more", logo: saveTheLoveLogo, type: "image" },
];

const B2BSection = () => (
  <section className="bg-[#F5F5F7] py-24">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-3">Đối tác</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">Đối tác của 50-Lab</h2>
        <p className="text-[#6E6E73] text-base max-w-2xl mx-auto">
          50-Lab là đối tác tin cậy của nhiều tiệm giặt ủi, cửa hàng chăm sóc đồ da và các đơn vị liên quan tại TP.HCM.
        </p>
      </div>

      {/* Partner logos */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {partners.map((partner, i) => (
          <motion.div key={partner.name}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="h-16 px-4 bg-white border border-[#E5E5EA] rounded-2xl flex items-center justify-center"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", minWidth: "120px" }}>
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-10 max-w-[140px] w-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
        {benefits.map((b, i) => (
          <motion.div key={b.title}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.07, ease: "easeInOut" }}
            className="bg-white rounded-[18px] p-5 border border-[#E5E5EA] flex flex-col gap-2"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <span className="text-xl">{b.icon}</span>
            <h4 className="font-semibold text-[#1D1D1F] text-sm">{b.title}</h4>
            <p className="text-[#6E6E73] text-xs leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#1D1D1F] rounded-[24px] p-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Bạn muốn hợp tác với 50-Lab?</h3>
        <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
          Liên hệ để nhận tư vấn về gói hợp tác và mức chiết khấu phù hợp cho doanh nghiệp của bạn.
        </p>
        <Link to="/lien-he-hop-tac">
          <button className="px-8 py-3 bg-white text-[#1D1D1F] font-semibold rounded-full text-sm hover:bg-white/90 transition-colors">
            Liên hệ hợp tác ngay →
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default B2BSection;
