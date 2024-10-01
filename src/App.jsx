import React from 'react';
import Navbar from './components/Navbar';
import HowItWorks from './components/HowItWorks';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import ChatBox from './components/ChatBox';
function App() {
  return (
    <div>
      <SideBar />
      <Navbar />
      <HowItWorks />
      <ServiceCard />
      <ContactForm />
      <ChatBox></ChatBox>
      <Footer />
    </div>
  );
}

export default App;
