import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const useCountUp = (end, duration, start) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, end, duration]);

  return count;
};

const StatItem = ({ end, suffix, label }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const count = useCountUp(end, 1000, inView);

  return (
    <div ref={ref} className="flex items-center justify-center gap-1.5 px-4">
      <span className="text-2xl sm:text-3xl font-bold text-theme-text tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-theme-muted text-xs sm:text-sm font-medium">{label}</span>
    </div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { end: 5,    suffix: "+",          label: t("stats.experience") },
    { end: 3000, suffix: "+",          label: t("stats.cleaned") },
    { end: 2,    suffix: t("stats.hour"), label: t("stats.delivery") },
  ];

  return (
    <section className="bg-theme-surface border-y border-theme-border py-4" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-2 divide-x divide-theme-border">
          {stats.map((stat) => (
            <StatItem key={stat.label} end={stat.end} suffix={stat.suffix} label={stat.label} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
