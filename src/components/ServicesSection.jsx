import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const shoeServices = [
  {
    id: "shoe-basic",
    name: "Vệ sinh giày",
    price: "100.000đ",
    tag: "Phổ biến",
    description: "Loại bỏ bụi bẩn, vết ố và mùi hôi cho mọi loại giày thông thường. An toàn với tất cả chất liệu.",
    studentDiscount: true,
  },
  {
    id: "shoe-luxury",
    name: "Vệ sinh giày Luxury",
    price: "150.000đ",
    tag: "Cao cấp",
    description: "Vệ sinh chuyên sâu cho giày cao cấp (trên 10 triệu đồng). Dưỡng da, phục hồi màu sắc bền lâu.",
  },
];

const bagServices = [
  {
    id: "bag-basic",
    name: "Vệ sinh túi xách",
    price: "100.000đ",
    tag: "Phổ biến",
    description: "Loại bỏ vết bẩn, khử mùi và bảo vệ bề mặt túi xách, ví da và vải các loại.",
  },
  {
    id: "bag-luxury",
    name: "Vệ sinh túi Luxury",
    price: "200.000 – 400.000đ",
    tag: "Cao cấp",
    description: "Vệ sinh chuyên sâu cho túi xách cao cấp (trên 10 triệu đồng). Dưỡng ẩm, phục hồi độ bóng.",
  },
];

const ConsultForm = ({ category }) => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_xzvm2db", "template_i25gn75", {
        name: form.name,
        phoneNumber: form.phone,
        orderService: form.service,
        message: `Yêu cầu tư vấn – ${category === "shoes" ? "Giày" : "Túi xách"}`,
      }, "uX5HE9XX3c98LTqzw")
      .then(() => { setStatus("success"); setForm({ name: "", phone: "", service: "" }); })
      .catch(() => setStatus("error"))
      .finally(() => setLoading(false));
  };

  const inputCls = "w-full px-4 py-3 bg-white border border-[#E5E5EA] rounded-xl text-[#1D1D1F] text-sm placeholder-[#6E6E73] focus:outline-none focus:border-[#1D1D1F] transition-colors";

  return (
    <div className="mt-8 bg-[#F5F5F7] rounded-[18px] p-6 border border-[#E5E5EA]">
      <p className="text-sm font-semibold text-[#1D1D1F] mb-4">Gửi yêu cầu tư vấn</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input type="text" placeholder="Họ tên" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} required />
        <input type="tel" placeholder="Số điện thoại" value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} required />
        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={inputCls} required>
          <option value="">Chọn dịch vụ</option>
          {(category === "shoes" ? shoeServices : bagServices).map((s) => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
        </select>
        <button type="submit" disabled={loading}
          className="px-6 py-3 bg-[#E63946] text-white text-sm font-semibold rounded-full whitespace-nowrap hover:bg-[#c8313d] transition-colors disabled:opacity-50 flex-shrink-0">
          {loading ? "Đang gửi..." : "Gửi"}
        </button>
      </form>
      {status === "success" && <p className="mt-3 text-green-600 text-sm">✓ Đã gửi! Chúng tôi sẽ liên hệ sớm.</p>}
      {status === "error" && <p className="mt-3 text-red-500 text-sm">Không thể gửi, vui lòng thử lại.</p>}
    </div>
  );
};

const ServiceCard = ({ service }) => (
  <motion.div
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    className="bg-white rounded-[18px] p-6 flex flex-col gap-4 border border-[#E5E5EA]"
    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
  >
    <div className="flex items-start justify-between gap-2">
      <h4 className="font-semibold text-[#1D1D1F] text-base leading-snug">{service.name}</h4>
      <div className="flex flex-col items-end gap-1 flex-shrink-0">
        <span className="text-xs font-medium px-2.5 py-1 bg-[#F5F5F7] text-[#1D1D1F] rounded-full border border-[#E5E5EA]">
          {service.tag}
        </span>
        {service.studentDiscount && (
          <span className="text-xs font-semibold px-2.5 py-1 bg-[#FFF3CD] text-[#856404] rounded-full border border-[#FFECB5]">
            🎓 Sinh viên giảm 50%
          </span>
        )}
      </div>
    </div>
    <p className="text-[#6E6E73] text-sm leading-relaxed flex-1">{service.description}</p>
    <div className="flex items-center justify-between pt-3 border-t border-[#F5F5F7]">
      <span className="font-bold text-[#1D1D1F] text-sm">{service.price}</span>
      <Link to="/contact">
        <button className="px-4 py-2 bg-[#E63946] text-white text-xs font-semibold rounded-full hover:bg-[#c8313d] transition-colors">
          Đặt dịch vụ
        </button>
      </Link>
    </div>
  </motion.div>
);

const ServicesSection = ({ initialTab = "shoes" }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-3">Dịch vụ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
            Dịch vụ tại 50-Lab
          </h2>
          <p className="text-[#6E6E73] text-lg max-w-xl mx-auto">
            Chuyên vệ sinh và chăm sóc giày, túi xách — quy trình chuẩn, an toàn mọi chất liệu
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#F5F5F7] border border-[#E5E5EA] p-1 rounded-full gap-1">
            {[
              { key: "shoes", label: "Vệ sinh giày", id: "shoes" },
              { key: "bags", label: "Vệ sinh túi xách", id: "bags" },
            ].map((tab) => (
              <button
                key={tab.key}
                id={tab.id}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-white text-[#1D1D1F] border border-[#E5E5EA]"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
                style={activeTab === tab.key ? { boxShadow: "0 1px 4px rgba(0,0,0,0.08)" } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(activeTab === "shoes" ? shoeServices : bagServices).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <ConsultForm category={activeTab} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
