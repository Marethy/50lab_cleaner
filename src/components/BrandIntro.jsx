import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const BrandIntro = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t("brand.stat1Value"), label: t("brand.stat1Label"), sub: t("brand.stat1Sub") },
    { value: t("brand.stat2Value"), label: t("brand.stat2Label"), sub: t("brand.stat2Sub") },
    { value: t("brand.stat3Value"), label: t("brand.stat3Label"), sub: t("brand.stat3Sub") },
  ];

  return (
    <section className="bg-theme-bg py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="text-xs font-semibold text-theme-muted uppercase tracking-widest mb-4">
              {t("brand.label")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text tracking-tight leading-tight mb-5">
              {t("brand.title")}
            </h2>
            <p className="text-theme-muted text-base leading-relaxed mb-6">
              {t("brand.desc1")}
            </p>
            <p className="text-theme-muted text-base leading-relaxed mb-8">
              <Trans
                i18nKey="brand.desc2"
                components={{
                  b2c: (
                    <Link
                      to="/contact"
                      className="text-theme-text font-semibold underline underline-offset-2 hover:text-[#E63946] transition-colors"
                    />
                  ),
                  b2b: (
                    <Link
                      to="/lien-he-hop-tac"
                      className="text-theme-text font-semibold underline underline-offset-2 hover:text-[#E63946] transition-colors"
                    />
                  ),
                }}
              />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeInOut" }}
            className="grid grid-cols-1 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, ease: "easeInOut" }}
                className="bg-theme-surface rounded-[18px] px-6 py-5 border border-theme-border flex items-center gap-5"
              >
                <div className="flex-shrink-0">
                  <p className="text-3xl font-bold text-theme-text tracking-tight">{stat.value}</p>
                </div>
                <div className="border-l border-theme-border pl-5">
                  <p className="font-semibold text-theme-text text-sm">{stat.label}</p>
                  <p className="text-theme-muted text-xs mt-0.5">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
