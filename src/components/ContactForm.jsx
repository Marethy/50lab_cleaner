import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderService: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState(''); // For displaying status messages
  const [loading, setLoading] = useState(false); // Loading state to prevent multiple submissions

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation for email format and required fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setStatusMessage('');

    emailjs.send('service_123456', 'template_566mlih', formData, 'nun00yqEVWR0-HrNo')
      .then((result) => {
        setStatusMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          orderService: '',
          message: '',
        });
      })
      .catch((error) => {
        setStatusMessage('Failed to send message, please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-12 bg-black text-white">
      <div className="text-center text-2xl font-bold mb-6">ĐẶT LỊCH NGAY</div>
      <form onSubmit={handleSubmit} className="max-w-lg bg-white mx-auto rounded p-6 shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name"
            aria-label="Name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded"
            placeholder="Email"
            aria-label="Email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="orderService"
            value={formData.orderService}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Order Service"
            aria-label="Order Service"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
            placeholder="Type your message"
            aria-label="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-2 rounded-full hover:bg-yellow-500 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
        {statusMessage && <p className="mt-4 text-center text-red-500">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
