import React from "react";
import { motion } from "framer-motion";
import GocChiaSe from "../components/GocChiaSe";

const AboutUsPage = () => (
  <div className="min-h-screen bg-white">
    <section className="bg-[#F5F5F7] pt-28 pb-16 border-b border-[#E5E5EA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
          <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-4">Về chúng tôi</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-4">Góc chia sẻ 50LAB</h1>
          <p className="text-[#6E6E73] text-lg max-w-xl mx-auto">
            Câu chuyện từ khách hàng, cộng đồng và đội ngũ 50LAB
          </p>
        </motion.div>
      </div>
    </section>
    <GocChiaSe />
  </div>
);

export default AboutUsPage;
