import React from 'react';
import ServiceDetail from '../components/ServiceDetail';
import services from '../components/services';

const ServicesPage = () => {
  return (
    <div className='mx-auto px-4 md:px-24 bg-gray-200 py-20'>
      {services.map(service => (
        <ServiceDetail
          key={service.id}
          id={service.id}
          name={service.name}
          serviceInfo={service.serviceInfo}
          time={service.time}
          procedure={service.procedure}
          rating={service.rating}
        />
      ))
      }
    </div>
  );
};

export default ServicesPage;
