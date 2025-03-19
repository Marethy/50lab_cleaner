import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import AboutUsPage from './pages/AboutUsPage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import HomePage from './pages/HomePage';
import PolicyPage from './pages/PolicyPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen">
          <div className="fixed inset-0 transition-colors duration-300 dark:bg-gray-900 bg-white -z-10" />
          <Header />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/policy" element={<PolicyPage />} />
            </Routes>
          </main>
          <ChatBox />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
