import React from 'react';
import HowItWorks from '../components/HowItWorks';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import services from '/src/components/services.tsx';

const HomePage = () => {
  return (
    <div className="pt-16">
      <ServiceCard services={services} />
      <HowItWorks />
      <ContactForm />
    </div>
  );
}

export default HomePage;
