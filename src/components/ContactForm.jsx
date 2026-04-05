import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phoneNumber: "", orderService: "",
    shoeType: "", address: "", preferredTime: "", message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", phoneNumber: "", orderService: "", shoeType: "", address: "", preferredTime: "", message: "" });
      })
      .catch(() => setStatus("error"))
      .finally(() => setLoading(false));
  };

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
            Để lại thông tin để đội ngũ 50LAB liên hệ xác nhận trong thời gian sớm nhất.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  <option value="vệ sinh giày">Vệ sinh giày</option>
                  <option value="vệ sinh giày cao cấp">Vệ sinh giày cao cấp</option>
                  <option value="vệ sinh túi/ví">Vệ sinh túi/ví</option>
                  <option value="vệ sinh túi/ví cao cấp">Vệ sinh túi/ví cao cấp</option>
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Loại giày / túi</label>
              <input type="text" name="shoeType" value={formData.shoeType} onChange={handleChange}
                placeholder="VD: Giày da nam, túi Chanel, sneaker Nike..." className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Địa chỉ nhận – giao</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange}
                placeholder="Số nhà, đường, phường, quận, TP.HCM" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Thời gian mong muốn</label>
              <input type="text" name="preferredTime" value={formData.preferredTime} onChange={handleChange}
                placeholder="VD: Sáng thứ 2, 8–10h..." className={inputCls} />
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

export default ContactForm;
