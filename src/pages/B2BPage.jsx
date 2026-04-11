import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { EMAILJS } from "../config/emailjs";

const benefits = [
  { icon: "🔄", title: "Quy trình chuẩn chuyên nghiệp", description: "5 bước vệ sinh & đóng gói đồng nhất" },
  { icon: "🚚", title: "Giao – nhận tận nơi", description: "Thu nhận và trả hàng tận nơi trong TP.HCM" },
  { icon: "💰", title: "Chiết khấu hấp dẫn", description: "Ưu đãi theo số lượng, hợp đồng dài hạn" },
  { icon: "🏷️", title: "Đồng thương hiệu", description: "Hỗ trợ in tem, bao bì riêng cho đối tác" },
  { icon: "📞", title: "Tư vấn & hỗ trợ riêng", description: "Đội ngũ B2B chuyên trách, phản hồi nhanh" },
];

const B2BPage = () => {
  const [form, setForm] = useState({
    businessName: "",
    phoneNumber: "",
    businessType: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(EMAILJS.serviceId, EMAILJS.templateId, {
        name: form.businessName,
        phoneNumber: form.phoneNumber,
        orderService: `B2B - ${form.businessType}`,
        message: form.message || "Yêu cầu hợp tác doanh nghiệp",
      }, EMAILJS.publicKey)
      .then(() => {
        setStatus("success");
        setForm({ businessName: "", phoneNumber: "", businessType: "", message: "" });
      })
      .catch((err) => {
        console.error("[B2BPage] EmailJS error:", err);
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-black/10 text-[#1D1D1F] text-sm placeholder-[#6E6E73] focus:outline-none focus:border-[#0A1628]/40 focus:ring-2 focus:ring-[#0A1628]/10 transition-all bg-white";

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-6">
              Dành cho doanh nghiệp
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-[-0.02em] leading-tight mb-6 max-w-3xl mx-auto">
              Giải pháp hợp tác cùng 50-Lab dành cho doanh nghiệp
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              50-Lab cung cấp dịch vụ vệ sinh giày và túi chuyên nghiệp cho đối tác tại TP.HCM –
              giúp tối ưu quy trình, tiết kiệm chi phí và nâng cao chất lượng dịch vụ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1D1D1F] tracking-[-0.02em]">
              Lợi ích khi hợp tác
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-card flex flex-col gap-3 transition-all duration-200"
              >
                <span className="text-2xl">{b.icon}</span>
                <h4 className="font-semibold text-[#1D1D1F] text-sm leading-snug">{b.title}</h4>
                <p className="text-[#6E6E73] text-xs leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1D1D1F] tracking-[-0.02em] mb-3">
              Liên hệ hợp tác
            </h2>
            <p className="text-[#6E6E73] text-base">
              Điền thông tin để đội ngũ B2B 50-Lab liên hệ tư vấn cho bạn
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-black/5"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-2 uppercase tracking-wide">
                  Tên doanh nghiệp / cửa hàng
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="Cửa hàng ABC..."
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-2 uppercase tracking-wide">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="0xx xxx xxxx"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-2 uppercase tracking-wide">
                  Loại hình kinh doanh
                </label>
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">-- Chọn loại hình --</option>
                  <option value="Giặt ủi">Giặt ủi</option>
                  <option value="Cửa hàng">Cửa hàng</option>
                  <option value="Khách sạn">Khách sạn</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-2 uppercase tracking-wide">
                  Ghi chú thêm
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Thông tin thêm về nhu cầu hợp tác..."
                  className={inputClass + " resize-none"}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-[#0A1628] text-white font-bold rounded-full text-sm flex items-center justify-center gap-2 hover:bg-[#1a2940] transition-colors disabled:opacity-50"
              >
                {loading ? <FaSpinner className="animate-spin" /> : <><FaPaperPlane /> Gửi yêu cầu hợp tác</>}
              </motion.button>

              {status === "success" && (
                <p className="text-center text-green-600 text-sm font-medium">
                  ✓ Yêu cầu đã gửi! Đội ngũ B2B sẽ liên hệ bạn sớm.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-500 text-sm">Không thể gửi, vui lòng thử lại.</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default B2BPage;
