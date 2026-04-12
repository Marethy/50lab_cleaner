import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { EMAILJS } from "../config/emailjs";

const initialFormData = {
  name: "", email: "", phoneNumber: "", orderService: "", address: "", message: "",
};

const serviceOptions = [
  { value: "vệ sinh giày", label: "Vệ sinh giày" },
  { value: "vệ sinh giày cao cấp", label: "Vệ sinh giày cao cấp" },
  { value: "vệ sinh túi/ví", label: "Vệ sinh túi/ví" },
  { value: "vệ sinh túi/ví cao cấp", label: "Vệ sinh túi/ví cao cấp" },
];

const useContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, formData, EMAILJS.publicKey)
      .then(() => {
        setStatus("success");
        setFormData(initialFormData);
      })
      .catch((err) => {
        console.error("[ContactForm] EmailJS error:", err);
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  return { formData, handleChange, handleSubmit, status, loading };
};

// ─── Mobile layout ────────────────────────────────────────────────────────────
const MobileContactForm = () => {
  const { formData, handleChange, handleSubmit, status, loading } = useContactForm();
  const inputCls = "w-full px-4 py-4 bg-[#F5F5F7] border border-[#E5E5EA] rounded-xl text-[#1D1D1F] text-base placeholder-[#6E6E73] focus:outline-none focus:bg-white focus:border-[#1D1D1F] transition-all";

  return (
    <section id="contact" className="bg-[#F5F5F7] py-10">
      <div className="px-4">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-2">Đặt lịch</p>
          <h2 className="text-2xl font-bold text-[#1D1D1F] tracking-tight mb-2">
            Đặt lịch ngay hôm nay
          </h2>
          <p className="text-[#6E6E73] text-sm">
            Để lại thông tin — 50-Lab sẽ liên hệ sớm nhất.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="Họ và tên" className={inputCls} required />
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="Email" className={inputCls} required />
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
            placeholder="Số điện thoại" className={inputCls} required />
          <select name="orderService" value={formData.orderService} onChange={handleChange}
            className={inputCls} required>
            <option value="">-- Chọn dịch vụ --</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <input type="text" name="address" value={formData.address} onChange={handleChange}
            placeholder="Địa chỉ nhận – giao" className={inputCls} />
          <textarea name="message" value={formData.message} onChange={handleChange}
            rows={3} placeholder="Tình trạng sản phẩm, yêu cầu đặc biệt..."
            className={inputCls + " resize-none"} />

          {status === "success" && (
            <div className="p-4 rounded-2xl bg-green-50 border border-green-100 text-green-700 text-sm text-center font-medium">
              ✨ Đặt lịch thành công! Chúng tôi sẽ liên lạc sớm nhất có thể.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm text-center">
              Không thể gửi, vui lòng thử lại sau.
            </div>
          )}

          {/* Sticky submit */}
          <div className="sticky bottom-0 -mx-4 bg-white/95 backdrop-blur-sm border-t border-[#E5E5EA] px-4 py-3 mt-2">
            <button type="submit" disabled={loading}
              className="w-full py-4 bg-[#E63946] text-white font-bold rounded-full text-base flex items-center justify-center gap-2 active:bg-[#c8313d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <FaSpinner className="animate-spin" /> : <><FaPaperPlane /><span>Gửi yêu cầu đặt lịch</span></>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// ─── Desktop layout ───────────────────────────────────────────────────────────
const DesktopContactForm = () => {
  const { formData, handleChange, handleSubmit, status, loading } = useContactForm();
  const inputCls = "w-full px-4 py-3 bg-[#F5F5F7] border border-[#E5E5EA] rounded-xl text-[#1D1D1F] text-sm placeholder-[#6E6E73] focus:outline-none focus:bg-white focus:border-[#1D1D1F] transition-all";
  const labelCls = "block text-xs font-semibold text-[#1D1D1F] mb-2 uppercase tracking-wide";

  return (
    <section id="contact" className="bg-[#F5F5F7] py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-3">Đặt lịch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-3">
            Đặt lịch vệ sinh ngay hôm nay
          </h2>
          <p className="text-[#6E6E73] text-base max-w-md mx-auto">
            Để lại thông tin để đội ngũ 50-Lab liên hệ xác nhận trong thời gian sớm nhất.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="max-w-2xl mx-auto bg-white rounded-[24px] p-8 sm:p-10 border border-[#E5E5EA]"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Tên</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Nguyễn Văn A" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="email@example.com" className={inputCls} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Số điện thoại</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                  placeholder="0xx xxx xxxx" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Chọn dịch vụ</label>
                <select name="orderService" value={formData.orderService} onChange={handleChange}
                  className={inputCls} required>
                  <option value="">-- Chọn dịch vụ --</option>
                  {serviceOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Địa chỉ nhận – giao</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange}
                placeholder="Số nhà, đường, phường, quận, TP.HCM" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Ghi chú thêm</label>
              <textarea name="message" value={formData.message} onChange={handleChange}
                rows={3} placeholder="Tình trạng sản phẩm, yêu cầu đặc biệt..."
                className={inputCls + " resize-none"} />
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-[#E63946] text-white font-semibold rounded-full text-sm flex items-center justify-center gap-2 hover:bg-[#c8313d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <FaSpinner className="animate-spin" /> : <><FaPaperPlane /><span>Gửi yêu cầu</span></>}
            </button>

            {status === "success" && (
              <div className="p-4 rounded-2xl bg-green-50 border border-green-100 text-green-700 text-sm text-center font-medium">
                ✨ Đặt lịch thành công! Chúng tôi sẽ liên lạc sớm nhất có thể.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm text-center">
                Không thể gửi, vui lòng thử lại sau.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Exported component ───────────────────────────────────────────────────────
const ContactForm = () => (
  <>
    {/* Mobile UI */}
    <div className="block md:hidden">
      <MobileContactForm />
    </div>
    {/* Desktop UI */}
    <div className="hidden md:block">
      <DesktopContactForm />
    </div>
  </>
);

export default ContactForm;
