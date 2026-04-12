import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { EMAILJS } from "../config/emailjs";

const useB2BForm = () => {
  const [form, setForm]     = useState({ businessName: "", phoneNumber: "", businessType: "", message: "" });
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
      .catch((err) => { console.error("[B2BPage] EmailJS error:", err); setStatus("error"); })
      .finally(() => setLoading(false));
  };

  return { form, handleChange, handleSubmit, status, loading };
};

// ─── Mobile layout ────────────────────────────────────────────────────────────
const MobileB2BPage = () => {
  const { t } = useTranslation();
  const { form, handleChange, handleSubmit, status, loading } = useB2BForm();
  const inputCls = "w-full px-4 py-4 bg-theme-surface border border-theme-border rounded-xl text-theme-text text-base placeholder-theme-muted focus:outline-none focus:border-theme-text transition-all";

  const benefits = [
    { icon: t("b2b.benefit1Icon"), title: t("b2b.benefit1Title"), desc: t("b2b.benefit1Desc") },
    { icon: t("b2b.benefit2Icon"), title: t("b2b.benefit2Title"), desc: t("b2b.benefit2Desc") },
    { icon: t("b2b.benefit3Icon"), title: t("b2b.benefit3Title"), desc: t("b2b.benefit3Desc") },
    { icon: t("b2b.benefit4Icon"), title: t("b2b.benefit4Title"), desc: t("b2b.benefit4Desc") },
    { icon: t("b2b.benefit5Icon"), title: t("b2b.benefit5Title"), desc: t("b2b.benefit5Desc") },
  ];

  return (
    <div className="min-h-screen bg-theme-bg">
      {/* Banner */}
      <section className="bg-[#0A1628] pt-24 pb-10 px-4">
        <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full mb-4">
          {t("b2b.badge")}
        </span>
        <h1 className="text-2xl font-bold text-white leading-tight mb-3">{t("b2b.title")}</h1>
        <p className="text-white/60 text-sm leading-relaxed">{t("b2b.subtitleMobile")}</p>
      </section>

      {/* Benefits — compact list */}
      <section className="bg-theme-surface py-8 px-4">
        <h2 className="text-lg font-bold text-theme-text mb-5">{t("b2b.benefitsTitle")}</h2>
        <ul className="flex flex-col gap-4">
          {benefits.map((b) => (
            <li key={b.title} className="flex items-start gap-4 bg-theme-card rounded-2xl p-4 border border-theme-border">
              <span className="text-2xl flex-shrink-0">{b.icon}</span>
              <div>
                <p className="font-semibold text-theme-text text-sm">{b.title}</p>
                <p className="text-theme-muted text-xs mt-0.5">{b.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact form */}
      <section className="bg-theme-bg py-8 px-4">
        <h2 className="text-xl font-bold text-theme-text mb-2">{t("b2b.formTitle")}</h2>
        <p className="text-theme-muted text-sm mb-6">{t("b2b.formSubtitleMobile")}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text"  name="businessName"  value={form.businessName}  onChange={handleChange} placeholder={t("b2b.businessNamePlaceholder")} className={inputCls} required />
          <input type="tel"   name="phoneNumber"   value={form.phoneNumber}   onChange={handleChange} placeholder={t("b2b.phone")} className={inputCls} required />
          <select name="businessType" value={form.businessType} onChange={handleChange} className={inputCls} required>
            <option value="">{t("b2b.businessTypeDefault")}</option>
            <option value="Giặt ủi">{t("b2b.type1")}</option>
            <option value="Cửa hàng">{t("b2b.type2")}</option>
            <option value="Khách sạn">{t("b2b.type3")}</option>
            <option value="Khác">{t("b2b.type4")}</option>
          </select>
          <textarea name="message" value={form.message} onChange={handleChange}
            rows={3} placeholder={t("b2b.notePlaceholder")} className={inputCls + " resize-none"} />

          {status === "success" && <p className="text-center text-green-600 text-sm font-medium py-2">{t("b2b.success")}</p>}
          {status === "error"   && <p className="text-center text-red-500  text-sm          py-2">{t("b2b.error")}</p>}

          <div className="sticky bottom-0 -mx-4 bg-theme-bg/95 backdrop-blur-sm border-t border-theme-border/30 px-4 py-3 mt-2">
            <button type="submit" disabled={loading}
              className="w-full py-4 bg-[#0A1628] text-white font-bold rounded-full text-base flex items-center justify-center gap-2 active:bg-[#1a2940] transition-colors disabled:opacity-50">
              {loading ? <FaSpinner className="animate-spin" /> : <><FaPaperPlane /> {t("b2b.send")}</>}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

// ─── Desktop layout ───────────────────────────────────────────────────────────
const DesktopB2BPage = () => {
  const { t } = useTranslation();
  const { form, handleChange, handleSubmit, status, loading } = useB2BForm();
  const inputCls = "w-full px-4 py-3.5 rounded-xl border border-theme-border text-theme-text text-sm placeholder-theme-muted focus:outline-none focus:border-theme-text focus:ring-2 focus:ring-theme-text/10 transition-all bg-theme-card";

  const benefits = [
    { icon: t("b2b.benefit1Icon"), title: t("b2b.benefit1Title"), desc: t("b2b.benefit1Desc") },
    { icon: t("b2b.benefit2Icon"), title: t("b2b.benefit2Title"), desc: t("b2b.benefit2Desc") },
    { icon: t("b2b.benefit3Icon"), title: t("b2b.benefit3Title"), desc: t("b2b.benefit3Desc") },
    { icon: t("b2b.benefit4Icon"), title: t("b2b.benefit4Title"), desc: t("b2b.benefit4Desc") },
    { icon: t("b2b.benefit5Icon"), title: t("b2b.benefit5Title"), desc: t("b2b.benefit5Desc") },
  ];

  return (
    <div className="min-h-screen bg-theme-bg">
      {/* Banner */}
      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-6">
              {t("b2b.badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-[-0.02em] leading-tight mb-6 max-w-3xl mx-auto">
              {t("b2b.title")}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("b2b.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits — card grid */}
      <section className="bg-theme-surface py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-theme-text tracking-[-0.02em]">{t("b2b.benefitsTitle")}</h2>
          </motion.div>
          <div className="grid grid-cols-5 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-theme-card rounded-2xl p-6 shadow-card flex flex-col gap-3 transition-all duration-200 border border-theme-border"
              >
                <span className="text-2xl">{b.icon}</span>
                <h4 className="font-semibold text-theme-text text-sm leading-snug">{b.title}</h4>
                <p className="text-theme-muted text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-theme-bg py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-theme-text tracking-[-0.02em] mb-3">{t("b2b.formTitle")}</h2>
            <p className="text-theme-muted text-base">{t("b2b.formSubtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto bg-theme-card rounded-3xl p-8 sm:p-10 shadow-card border border-theme-border"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-theme-text mb-2 uppercase tracking-wide">{t("b2b.businessName")}</label>
                <input type="text" name="businessName" value={form.businessName} onChange={handleChange}
                  placeholder={t("b2b.businessNamePlaceholder")} className={inputCls} required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-theme-text mb-2 uppercase tracking-wide">{t("b2b.phone")}</label>
                <input type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange}
                  placeholder="0xx xxx xxxx" className={inputCls} required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-theme-text mb-2 uppercase tracking-wide">{t("b2b.businessType")}</label>
                <select name="businessType" value={form.businessType} onChange={handleChange} className={inputCls} required>
                  <option value="">{t("b2b.businessTypeDesktop")}</option>
                  <option value="Giặt ủi">{t("b2b.type1")}</option>
                  <option value="Cửa hàng">{t("b2b.type2")}</option>
                  <option value="Khách sạn">{t("b2b.type3")}</option>
                  <option value="Khác">{t("b2b.type4")}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-theme-text mb-2 uppercase tracking-wide">{t("b2b.note")}</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  rows={4} placeholder={t("b2b.notePlaceholder")} className={inputCls + " resize-none"} />
              </div>

              <motion.button
                type="submit" disabled={loading}
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-[#0A1628] text-white font-bold rounded-full text-sm flex items-center justify-center gap-2 hover:bg-[#1a2940] transition-colors disabled:opacity-50"
              >
                {loading ? <FaSpinner className="animate-spin" /> : <><FaPaperPlane /> {t("b2b.send")}</>}
              </motion.button>

              {status === "success" && <p className="text-center text-green-600 text-sm font-medium">{t("b2b.success")}</p>}
              {status === "error"   && <p className="text-center text-red-500  text-sm">{t("b2b.error")}</p>}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// ─── Exported component ───────────────────────────────────────────────────────
const B2BPage = () => (
  <>
    <div className="block md:hidden"><MobileB2BPage /></div>
    <div className="hidden md:block"><DesktopB2BPage /></div>
  </>
);

export default B2BPage;
