import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { end: 500, suffix: "+", label: "Khách hàng hài lòng" },
  { end: 1000, suffix: "+", label: "Đôi giày được làm sạch" },
  { end: 4.8, suffix: "★", label: "Đánh giá trung bình", decimals: 1 },
  { end: 2, suffix: " giờ", label: "Thời gian giao hàng nhanh nhất" },
];

const useCountUp = (end, duration, start, decimals = 0) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const startVal = 0;

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (end - startVal) * eased;
      setCount(decimals ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, end, duration, decimals]);

  return count;
};

const StatCard = ({ stat, started }) => {
  const count = useCountUp(stat.end, 1200, started, stat.decimals);

  return (
    <div className="flex flex-col items-center text-center py-8 px-6">
      <span className="text-5xl sm:text-6xl font-bold text-[#1D1D1F] tracking-tight tabular-nums">
        {count}{stat.suffix}
      </span>
      <span className="mt-3 text-[#6E6E73] text-sm font-medium">{stat.label}</span>
    </div>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="bg-[#F5F5F7] border-y border-[#E5E5EA]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-[#E5E5EA] lg:divide-y-0">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
