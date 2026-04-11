import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BrandIntro = () => (
  <section className="bg-white py-20">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-4">Về 50-Lab</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight leading-tight mb-5">
            50-Lab — Dịch vụ vệ sinh giày, túi xách chuyên nghiệp tại TP.HCM
          </h2>
          <p className="text-[#6E6E73] text-base leading-relaxed mb-6">
            50-Lab là đơn vị chuyên cung cấp dịch vụ vệ sinh và chăm sóc giày, túi xách tại TP.HCM.
            Với đội ngũ kỹ thuật viên giàu kinh nghiệm cùng quy trình xử lý đạt chuẩn, chúng tôi mang đến
            dịch vụ làm sạch hiệu quả, an toàn cho mọi chất liệu.
          </p>
          <p className="text-[#6E6E73] text-base leading-relaxed mb-8">
            50-Lab phục vụ cả{" "}
            <Link to="/contact" className="text-[#1D1D1F] font-semibold underline underline-offset-2 hover:text-[#E63946] transition-colors">
              khách hàng cá nhân (B2C)
            </Link>{" "}
            và{" "}
            <Link to="/lien-he-hop-tac" className="text-[#1D1D1F] font-semibold underline underline-offset-2 hover:text-[#E63946] transition-colors">
              đối tác doanh nghiệp (B2B)
            </Link>{" "}
            như cửa hàng thời trang, chuỗi bán lẻ, tiệm giặt ủi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08, ease: "easeInOut" }}
          className="grid grid-cols-1 gap-4"
        >
          {[
            { value: "5+", label: "Năm kinh nghiệm", sub: "Trong lĩnh vực chăm sóc giày túi cao cấp" },
            { value: "3000+", label: "Đôi giày & túi được làm sạch", sub: "Phản hồi tích cực trên Facebook & Zalo" },
            { value: "5 bước", label: "Quy trình chuẩn", sub: "Được kiểm định và áp dụng nhất quán" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, ease: "easeInOut" }}
              className="bg-[#F5F5F7] rounded-[18px] px-6 py-5 border border-[#E5E5EA] flex items-center gap-5"
            >
              <div className="flex-shrink-0">
                <p className="text-3xl font-bold text-[#1D1D1F] tracking-tight">{stat.value}</p>
              </div>
              <div className="border-l border-[#E5E5EA] pl-5">
                <p className="font-semibold text-[#1D1D1F] text-sm">{stat.label}</p>
                <p className="text-[#6E6E73] text-xs mt-0.5">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default BrandIntro;
