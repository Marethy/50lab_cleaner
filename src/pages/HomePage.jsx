import React from 'react';
import HeroSection from '../components/HeroSection';
import BrandIntro from '../components/BrandIntro';
import StatsSection from '../components/StatsSection';
import B2CBSection from '../components/B2CBSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import B2BSection from '../components/B2BSection';
import GocChiaSe from '../components/GocChiaSe';
import ContactForm from '../components/ContactForm';

const HomePage = () => (
  <div>
    <HeroSection />
    <BrandIntro />
    <StatsSection />
    <ServicesSection />
    {/* Sections below are desktop-only; on mobile use the menu */}
    <div className="hidden md:block">
      <B2CBSection />
    </div>
    <B2BSection />
    <div className="hidden md:block">
      <HowItWorks />
      <GocChiaSe />
    </div>
    <ContactForm />
  </div>
);

export default HomePage;
