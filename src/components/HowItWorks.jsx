import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const shoeSteps = [
  { n: "01", title: "Kiểm tra và phân loại", desc: "KTV kiểm tra chất liệu (da, da lộn, vải, cao su…) để chọn phương pháp phù hợp" },
  { n: "02", title: "Loại bỏ bụi bẩn", desc: "Làm sạch sơ bộ lớp bụi và vết bẩn bên ngoài trước khi vệ sinh sâu" },
  { n: "03", title: "Vệ sinh chi tiết", desc: "Dung dịch an toàn theo từng chất liệu, bàn chải mềm và máy chuyên nghiệp" },
  { n: "04", title: "Làm khô và khử mùi", desc: "Sấy kiểm soát nhiệt độ, khử mùi diệt khuẩn bằng tia UV hoặc ozone" },
  { n: "05", title: "Kiểm tra và hoàn thiện", desc: "Kiểm tra kỹ lần cuối, đảm bảo sạch sẽ, khô ráo và đạt chuẩn" },
];

const bagSteps = [
  { n: "01", title: "Đánh giá chất liệu", desc: "KTV kiểm tra da, vải, kim loại hoặc chi tiết đặc biệt trên túi" },
  { n: "02", title: "Vệ sinh bề mặt ngoài", desc: "Dung dịch dịu nhẹ, không làm trầy xước hoặc phai màu vật liệu" },
  { n: "03", title: "Làm sạch sâu bên trong", desc: "Làm sạch lót trong, khóa kéo, quai đeo bằng dụng cụ chuyên dụng" },
  { n: "04", title: "Dưỡng và phục hồi", desc: "Dưỡng ẩm da, phục hồi độ bóng hoặc làm mềm sợi vải cao cấp" },
  { n: "05", title: "Sấy khô và đóng gói", desc: "Sấy chế độ kiểm soát nhiệt, kiểm tra tổng thể, đóng gói cẩn thận" },
];

const HowItWorks = () => {
  const [tab, setTab] = useState("shoes");
  const steps = tab === "shoes" ? shoeSteps : bagSteps;

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-3">Quy trình</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">Quy trình làm sạch</h2>
          <p className="text-[#6E6E73] text-base max-w-md mx-auto">5 bước chuẩn đảm bảo sản phẩm sạch đẹp, an toàn và bền lâu</p>
        </div>

        {/* Tab */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#F5F5F7] border border-[#E5E5EA] p-1 rounded-full gap-1">
            {[
              { key: "shoes", label: "Vệ sinh giày" },
              { key: "bags", label: "Vệ sinh túi xách" },
            ].map((t) => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  tab === t.key
                    ? "bg-white text-[#1D1D1F] border border-[#E5E5EA]"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
                style={tab === t.key ? { boxShadow: "0 1px 4px rgba(0,0,0,0.08)" } : {}}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, ease: "easeInOut" }}
                className="bg-[#F5F5F7] rounded-[18px] p-5 border border-[#E5E5EA] flex flex-col gap-3 relative overflow-hidden"
              >
                <span className="absolute top-3 right-4 text-4xl font-bold text-[#1D1D1F]/5 select-none leading-none">
                  {step.n}
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#1D1D1F] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">{step.n}</span>
                </div>
                <h3 className="font-semibold text-[#1D1D1F] text-sm leading-snug">{step.title}</h3>
                <p className="text-[#6E6E73] text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;
