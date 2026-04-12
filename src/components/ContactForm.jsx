import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { EMAILJS } from "../config/emailjs";

const initialFormData = {
  name: "", email: "", phoneNumber: "", orderService: "", address: "", message: "",
};

const useContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus]     = useState("");
  const [loading, setLoading]   = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, formData, EMAILJS.publicKey)
      .then(() => { setStatus("success"); setFormData(initialFormData); })
      .catch((err) => { console.error("[ContactForm] EmailJS error:", err); setStatus("error"); })
      .finally(() => setLoading(false));
  };

  return { formData, handleChange, handleSubmit, status, loading };
};

// ─── Mobile layout ────────────────────────────────────────────────────────────
const MobileContactForm = () => {
  const { t } = useTranslation();
  const { formData, handleChange, handleSubmit, status, loading } = useContactForm();
  const inputCls = "w-full px-4 py-4 bg-theme-surface border border-theme-border rounded-xl text-theme-text text-base placeholder-theme-muted focus:outline-none focus:border-theme-text transition-all";

  return (
    <section id="contact" className="bg-theme-surface py-10">
      <div className="px-4">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold text-theme-muted uppercase tracking-widest mb-2">
            {t("contact.label")}
          </p>
          <h2 className="text-2xl font-bold text-theme-text tracking-tight mb-2">
            {t("contact.titleMobile")}
          </h2>
          <p className="text-theme-muted text-sm">{t("contact.subtitleMobile")}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text"  name="name"         value={formData.name}         onChange={handleChange} placeholder={t("contact.nameMobile")}      className={inputCls} required />
          <input type="email" name="email"        value={formData.email}        onChange={handleChange} placeholder={t("contact.email")}           className={inputCls} required />
          <input type="tel"   name="phoneNumber"  value={formData.phoneNumber}  onChange={handleChange} placeholder={t("contact.phone")}           className={inputCls} required />
          <select name="orderService" value={formData.orderService} onChange={handleChange} className={inputCls} required>
            <option value="">{t("contact.serviceDefault")}</option>
            <option value="vệ sinh giày">{t("contact.service1")}</option>
            <option value="vệ sinh giày cao cấp">{t("contact.service2")}</option>
            <option value="vệ sinh túi/ví">{t("contact.service3")}</option>
            <option value="vệ sinh túi/ví cao cấp">{t("contact.service4")}</option>
          </select>
          <input type="text" name="address" value={formData.address} onChange={handleChange}
            placeholder={t("contact.addressPlaceholder")} className={inputCls} />
          <textarea name="message" value={formData.message} onChange={handleChange}
            rows={3} placeholder={t("contact.notePlaceholder")} className={inputCls + " resize-none"} />

          {status === "success" && (
            <div className="p-4 rounded-2xl bg-green-50 border border-green-100 text-green-700 text-sm text-center font-medium">
              {t("contact.success")}
            </div>
          )}
          {status === "error" && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm text-center">
              {t("contact.error")}
            </div>
          )}

          <div className="sticky bottom-0 -mx-4 bg-theme-bg/95 backdrop-blur-sm border-t border-theme-border/30 px-4 py-3 mt-2">
            <button type="submit" disabled={loading}
              className="w-full py-4 bg-[#E63946] text-white font-bold rounded-full text-base flex items-center justify-center gap-2 active:bg-[#c8313d] transition-colors disabled:opacity-50">
              {loading ? <FaSpinner className="animate-spin" /> : <><FaPaperPlane /><span>{t("contact.sendMobile")}</span></>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// ─── Desktop layout ───────────────────────────────────────────────────────────
const DesktopContactForm = () => {
  const { t } = useTranslation();
  const { formData, handleChange, handleSubmit, status, loading } = useContactForm();
  const inputCls  = "w-full px-4 py-3 bg-theme-surface border border-theme-border rounded-xl text-theme-text text-sm placeholder-theme-muted focus:outline-none focus:bg-theme-card focus:border-theme-text transition-all";
  const labelCls  = "block text-xs font-semibold text-theme-text mb-2 uppercase tracking-wide";

  return (
    <section id="contact" className="bg-theme-surface py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-theme-muted uppercase tracking-widest mb-3">
            {t("contact.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-text tracking-tight mb-3">
            {t("contact.title")}
          </h2>
          <p className="text-theme-muted text-base max-w-md mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="max-w-2xl mx-auto bg-theme-card rounded-[24px] p-8 sm:p-10 border border-theme-border"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>{t("contact.name")}</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder={t("contact.namePlaceholder")} className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>{t("contact.email")}</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="email@example.com" className={inputCls} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>{t("contact.phone")}</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                  placeholder="0xx xxx xxxx" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>{t("contact.service")}</label>
                <select name="orderService" value={formData.orderService} onChange={handleChange}
                  className={inputCls} required>
                  <option value="">{t("contact.serviceDefault")}</option>
                  <option value="vệ sinh giày">{t("contact.service1")}</option>
                  <option value="vệ sinh giày cao cấp">{t("contact.service2")}</option>
                  <option value="vệ sinh túi/ví">{t("contact.service3")}</option>
                  <option value="vệ sinh túi/ví cao cấp">{t("contact.service4")}</option>
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>{t("contact.address")}</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange}
                placeholder={t("contact.addressPlaceholder")} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>{t("contact.note")}</label>
              <textarea name="message" value={formData.message} onChange={handleChange}
                rows={3} placeholder={t("contact.notePlaceholder")}
                className={inputCls + " resize-none"} />
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-[#E63946] text-white font-semibold rounded-full text-sm flex items-center justify-center gap-2 hover:bg-[#c8313d] transition-colors disabled:opacity-50">
              {loading ? <FaSpinner className="animate-spin" /> : <><FaPaperPlane /><span>{t("contact.send")}</span></>}
            </button>

            {status === "success" && (
              <div className="p-4 rounded-2xl bg-green-50 border border-green-100 text-green-700 text-sm text-center font-medium">
                {t("contact.success")}
              </div>
            )}
            {status === "error" && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm text-center">
                {t("contact.error")}
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
    <div className="block md:hidden"><MobileContactForm /></div>
    <div className="hidden md:block"><DesktopContactForm /></div>
  </>
);

export default ContactForm;
