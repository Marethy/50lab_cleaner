import React from 'react';
import services from './services';
const ServiceDetail = ({ id, name, serviceInfo, time, procedure }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>{serviceInfo}</p>
      <p><strong>Thời gian: </strong>{time}</p>
      <p><strong>Quy trình: </strong>{procedure}</p>
    </div>
  );
};

export default ServiceDetail;
