import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import LaunchPage from './components/LaunchPage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/term';
import NewsletterSignup from './components/newsletter';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <LaunchPage />
              <NewsletterSignup />
              <Footer />
              <LaunchPage />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;