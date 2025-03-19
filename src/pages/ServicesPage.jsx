import React from 'react';
import ServiceCard from '../components/ServiceCard';
import services from '../components/services';
import { useTheme } from '../components/ThemeProvider';

const ServicesPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen w-full pt-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <ServiceCard services={services} />
    </div>
  );
};

export default ServicesPage;
