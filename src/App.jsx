import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';

const HomePage        = lazy(() => import('./pages/HomePage'));
const ServicesPage    = lazy(() => import('./pages/ServicesPage'));
const AboutUsPage     = lazy(() => import('./pages/AboutUsPage'));
const PolicyPage      = lazy(() => import('./pages/PolicyPage'));
const ContactForm     = lazy(() => import('./components/ContactForm'));
const B2BPage         = lazy(() => import('./pages/B2BPage'));
const ShoeCareTipsPage = lazy(() => import('./pages/ShoeCareTipsPage'));
const NotFoundPage    = lazy(() => import('./pages/NotFoundPage'));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white text-[#1D1D1F] font-sans">
          <ScrollToTop />
          <Header />
          <main>
            <Suspense fallback={<div className="min-h-screen" />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/policy" element={<PolicyPage />} />
                <Route path="/contact" element={<div className="pt-16"><ContactForm /></div>} />
                <Route path="/lien-he-hop-tac" element={<B2BPage />} />
                <Route path="/meo-cham-soc-giay" element={<ShoeCareTipsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <ChatBox />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
