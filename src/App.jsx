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
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Router>
        <div className="flex flex-col min-h-screen w-full max-w-full">
          <main className="grow w-full max-w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/launch" element={<LaunchPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/newsletter" element={<NewsletterSignup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;