import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-theme-bg pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-theme-surface border border-theme-border rounded-full text-sm text-theme-muted font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {t("hero.badge")}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-theme-text tracking-tight leading-[1.05] mb-5 max-w-4xl"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeInOut" }}
            className="text-lg sm:text-xl text-theme-muted max-w-lg mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row items-center gap-3 mb-16"
          >
            <Link to="/contact">
              <button className="px-8 py-3.5 bg-[#E63946] text-white font-semibold rounded-full text-sm hover:bg-[#c8313d] transition-colors">
                {t("hero.bookNow")}
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-3.5 bg-theme-card text-theme-text font-semibold rounded-full text-sm border border-theme-border hover:bg-theme-surface transition-colors">
                {t("hero.viewServices")}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
