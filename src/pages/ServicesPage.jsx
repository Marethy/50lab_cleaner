import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import services from '../components/services';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Small delay so components mount first
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const initialTab = location.hash === '#bags' ? 'bags' : 'shoes';

  return (
    <div className="min-h-screen bg-white pt-16">
      <ServicesSection initialTab={initialTab} />
      <HowItWorks />
      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#6E6E73] uppercase tracking-widest mb-3">Chi tiết dịch vụ</p>
            <h2 className="text-3xl font-bold text-[#1D1D1F] tracking-tight">Xem kết quả thực tế</h2>
          </div>
          <ServiceCard services={services} />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
