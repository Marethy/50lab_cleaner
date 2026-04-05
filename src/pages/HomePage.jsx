import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import B2CBSection from '../components/B2CBSection';
import BrandIntro from '../components/BrandIntro';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import B2BSection from '../components/B2BSection';
import GocChiaSe from '../components/GocChiaSe';
import ContactForm from '../components/ContactForm';

const HomePage = () => (
  <div>
    <HeroSection />
    <StatsSection />
    <B2CBSection />
    <BrandIntro />
    <ServicesSection />
    <HowItWorks />
    <B2BSection />
    <GocChiaSe />
    <ContactForm />
  </div>
);

export default HomePage;
