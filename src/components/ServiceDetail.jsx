import React from 'react';
import services from './services';
const ServiceDetail = ({ id, name, serviceInfo, time, procedure }) => {
  return (
    <div className="border p-10  bg-white mb-10">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>{serviceInfo}</p>
      <p><strong>Thời gian: </strong>{time}</p>
    </div>
  );
};

export default ServiceDetail;
