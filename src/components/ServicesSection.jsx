import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { EMAILJS } from "../config/emailjs";

// ─── Shared consult form logic ────────────────────────────────────────────────
const useConsultForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e, category, t) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(EMAILJS.serviceId, EMAILJS.templateId, {
        name: form.name,
        phoneNumber: form.phone,
        orderService: form.service,
        message: `Yêu cầu tư vấn – ${category === "shoes" ? "Giày" : "Túi xách"}`,
      }, EMAILJS.publicKey)
      .then(() => { setStatus("success"); setForm({ name: "", phone: "", service: "" }); })
      .catch((err) => {
        console.error("[ConsultForm] EmailJS error:", err);
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  return { form, setForm, status, loading, handleSubmit };
};

// ─── Mobile layouts ───────────────────────────────────────────────────────────
const MobileServiceCard = ({ service }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-theme-card rounded-2xl p-5 border border-theme-border">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h4 className="font-semibold text-theme-text text-base leading-snug">{service.name}</h4>
        <span className="text-xs font-medium px-2.5 py-1 bg-theme-surface text-theme-text rounded-full border border-theme-border flex-shrink-0">
          {service.tag}
        </span>
      </div>
      {service.studentDiscount && (
        <span className="inline-block text-sm font-semibold px-3 py-1.5 bg-[#FFF3CD] text-[#856404] rounded-full border border-[#FFECB5] mb-3">
          {t("services.studentDiscount")}
        </span>
      )}
      <p className="text-theme-muted text-sm leading-relaxed mb-4">{service.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-theme-text text-lg">{service.price}</span>
        <Link to="/contact">
          <button className="px-6 py-3 bg-[#E63946] text-white text-sm font-semibold rounded-full active:bg-[#c8313d] transition-colors">
            {t("services.bookService")}
          </button>
        </Link>
      </div>
    </div>
  );
};

const MobileConsultForm = ({ category, services }) => {
  const { t } = useTranslation();
  const { form, setForm, status, loading, handleSubmit } = useConsultForm();
  const inputCls = "w-full px-4 py-4 bg-theme-surface border border-theme-border rounded-xl text-theme-text text-base placeholder-theme-muted focus:outline-none focus:border-theme-text transition-all";

  return (
    <div className="mt-6 bg-theme-surface rounded-2xl p-5">
      <p className="text-sm font-semibold text-theme-text mb-4">{t("services.consultTitle")}</p>
      <form onSubmit={(e) => handleSubmit(e, category, t)} className="flex flex-col gap-3">
        <input type="text" placeholder={t("services.consultName")} value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} required />
        <input type="tel" placeholder={t("services.consultPhone")} value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} required />
        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={inputCls} required>
          <option value="">{t("services.consultService")}</option>
          {services.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
        </select>
        <button type="submit" disabled={loading}
          className="w-full py-4 bg-[#E63946] text-white text-base font-semibold rounded-full active:bg-[#c8313d] transition-colors disabled:opacity-50 mt-1">
          {loading ? t("services.consultSending") : t("services.consultSend")}
        </button>
      </form>
      {status === "success" && <p className="mt-3 text-green-600 text-sm">{t("services.consultSuccess")}</p>}
      {status === "error"   && <p className="mt-3 text-red-500  text-sm">{t("services.consultError")}</p>}
    </div>
  );
};

// ─── Desktop layouts ──────────────────────────────────────────────────────────
const DesktopServiceCard = ({ service }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="bg-theme-card rounded-[18px] p-6 flex flex-col gap-4 border border-theme-border"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-semibold text-theme-text text-base leading-snug">{service.name}</h4>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className="text-xs font-medium px-2.5 py-1 bg-theme-surface text-theme-text rounded-full border border-theme-border">
            {service.tag}
          </span>
          {service.studentDiscount && (
            <span className="text-xs font-semibold px-2.5 py-1 bg-[#FFF3CD] text-[#856404] rounded-full border border-[#FFECB5]">
              {t("services.studentDiscount")}
            </span>
          )}
        </div>
      </div>
      <p className="text-theme-muted text-sm leading-relaxed flex-1">{service.description}</p>
      <div className="flex items-center justify-between pt-3 border-t border-theme-border">
        <span className="font-bold text-theme-text text-sm">{service.price}</span>
        <Link to="/contact">
          <button className="px-4 py-2 bg-[#E63946] text-white text-xs font-semibold rounded-full hover:bg-[#c8313d] transition-colors">
            {t("services.bookService")}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const DesktopConsultForm = ({ category, services }) => {
  const { t } = useTranslation();
  const { form, setForm, status, loading, handleSubmit } = useConsultForm();
  const inputCls = "w-full px-4 py-3 bg-theme-card border border-theme-border rounded-xl text-theme-text text-sm placeholder-theme-muted focus:outline-none focus:border-theme-text transition-colors";

  return (
    <div className="mt-8 bg-theme-surface rounded-[18px] p-6 border border-theme-border">
      <p className="text-sm font-semibold text-theme-text mb-4">{t("services.consultTitle")}</p>
      <form onSubmit={(e) => handleSubmit(e, category, t)} className="flex flex-col sm:flex-row gap-3">
        <input type="text" placeholder={t("services.consultName")} value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} required />
        <input type="tel" placeholder={t("services.consultPhone")} value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} required />
        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={inputCls} required>
          <option value="">{t("services.consultService")}</option>
          {services.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
        </select>
        <button type="submit" disabled={loading}
          className="px-6 py-3 bg-[#E63946] text-white text-sm font-semibold rounded-full whitespace-nowrap hover:bg-[#c8313d] transition-colors disabled:opacity-50 flex-shrink-0">
          {loading ? t("services.consultSending") : t("services.consultSend")}
        </button>
      </form>
      {status === "success" && <p className="mt-3 text-green-600 text-sm">{t("services.consultSuccess")}</p>}
      {status === "error"   && <p className="mt-3 text-red-500  text-sm">{t("services.consultError")}</p>}
    </div>
  );
};

// ─── Main section ─────────────────────────────────────────────────────────────
const ServicesSection = ({ initialTab = "shoes" }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(initialTab);

  const shoeServices = [
    { id: "shoe-basic",   name: t("services.shoe1Name"), price: t("services.shoe1Price"), tag: t("services.shoe1Tag"), description: t("services.shoe1Desc"), studentDiscount: true },
    { id: "shoe-luxury",  name: t("services.shoe2Name"), price: t("services.shoe2Price"), tag: t("services.shoe2Tag"), description: t("services.shoe2Desc") },
  ];
  const bagServices = [
    { id: "bag-basic",    name: t("services.bag1Name"),  price: t("services.bag1Price"),  tag: t("services.bag1Tag"),  description: t("services.bag1Desc") },
    { id: "bag-luxury",   name: t("services.bag2Name"),  price: t("services.bag2Price"),  tag: t("services.bag2Tag"),  description: t("services.bag2Desc") },
  ];

  const services = activeTab === "shoes" ? shoeServices : bagServices;

  const tabs = [
    { key: "shoes", label: t("services.tabShoes"), id: "shoes" },
    { key: "bags",  label: t("services.tabBags"),  id: "bags" },
  ];

  const tabBtnCls = (key) => `py-3 rounded-full text-sm font-medium transition-all duration-200 ${
    activeTab === key
      ? "bg-theme-card text-theme-text border border-theme-border"
      : "text-theme-muted"
  }`;

  const desktopTabBtnCls = (key) => `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
    activeTab === key
      ? "bg-theme-card text-theme-text border border-theme-border"
      : "text-theme-muted hover:text-theme-text"
  }`;

  return (
    <section className="bg-theme-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs font-semibold text-theme-muted uppercase tracking-widest mb-3">
            {t("services.label")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-text tracking-tight mb-3">
            {t("services.title")}
          </h2>
          <p className="text-theme-muted text-base max-w-xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* ── Mobile UI ── */}
        <div className="block md:hidden">
          <div className="flex bg-theme-surface border border-theme-border p-1 rounded-full gap-1 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                id={tab.id}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 ${tabBtnCls(tab.key)}`}
                style={activeTab === tab.key ? { boxShadow: "0 1px 4px rgba(0,0,0,0.08)" } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col gap-4"
            >
              {services.map((s) => <MobileServiceCard key={s.id} service={s} />)}
              <MobileConsultForm category={activeTab} services={services} />
            </motion.div>
          </AnimatePresence>

          <div className="sticky bottom-0 -mx-4 mt-6 bg-theme-bg/95 backdrop-blur-sm border-t border-theme-border/30 px-4 py-3">
            <Link to="/contact">
              <button className="w-full py-4 bg-[#E63946] text-white font-bold rounded-full text-base active:bg-[#c8313d] transition-colors">
                {t("services.bookNowSticky")}
              </button>
            </Link>
          </div>
        </div>

        {/* ── Desktop UI ── */}
        <div className="hidden md:block">
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-theme-surface border border-theme-border p-1 rounded-full gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  id={tab.id}
                  onClick={() => setActiveTab(tab.key)}
                  className={desktopTabBtnCls(tab.key)}
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
                {services.map((s) => <DesktopServiceCard key={s.id} service={s} />)}
              </div>
              <DesktopConsultForm category={activeTab} services={services} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
