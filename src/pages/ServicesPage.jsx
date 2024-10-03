import React from 'react';
import ServiceDetail from '../components/ServiceDetail';
import services from '../components/services';

const ServicesPage = () => {
  return (
    <div className="py-10 pl-48">
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
      ))}
    </div>
  );
};

export default ServicesPage;
