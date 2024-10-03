import React from 'react';
import Navbar from './components/Navbar';
import HowItWorks from './components/HowItWorks';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import ChatBox from './components/ChatBox'; 
import HomePage from './pages/HomePage';
import PolicyPage from './pages/PolicyPage'; // Import trang PolicyPage
import Header from './components/Header'; // Import Header
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes và Route
import Services from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <Header/>
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route cho trang chính */}
        <Route path="/policy" element={<PolicyPage />} /> {/* Route cho trang Policy */}
        <Route path="services" element={<Services />} /> {/* Route cho trang ServiceCard */}
        <Route path="/contact" element={<ContactForm />} /> {/* Route cho trang ContactForm */}
      </Routes>
      <ChatBox />
      <Footer />
    </Router>
  );
}   

export default App;
