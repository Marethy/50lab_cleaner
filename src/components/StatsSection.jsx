import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { end: 5, suffix: "+", label: "Năm kinh nghiệm" },
  { end: 3000, suffix: "+", label: "Đôi giày & túi được làm sạch" },
  { end: 2, suffix: " giờ", label: "Giao nhanh nhất" },
];

const useCountUp = (end, duration, start, decimals = 0) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (end) * eased;
      setCount(decimals ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, end, duration, decimals]);

  return count;
};

const StatItem = ({ stat, started }) => {
  const count = useCountUp(stat.end, 1000, started, stat.decimals);
  return (
    <div className="flex items-center justify-center gap-1.5 px-4">
      <span className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tabular-nums">
        {count}{stat.suffix}
      </span>
      <span className="text-[#6E6E73] text-xs sm:text-sm font-medium">{stat.label}</span>
    </div>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="bg-[#F5F5F7] border-y border-[#E5E5EA] py-4" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-2 divide-x divide-[#E5E5EA]">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
