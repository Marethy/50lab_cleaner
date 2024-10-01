import React from 'react';

const ServiceCard = () => (
  <section id="services" className="py-12 text-white bg-black">
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold">SHOEPERIOR</h2>
      <p className="text-lg mt-4 text-center">
        Keep your shoes in top shape with our gentle, yet effective cleaning solution.
      </p>
      <button className="mt-8 bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-400">Shop Now</button>
    </div>
  </section>
);

export default ServiceCard;
