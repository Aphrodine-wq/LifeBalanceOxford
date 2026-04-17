import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services'; // Re-purposed as Services Page
import MatProgram from './components/MatProgram'; // Re-purposed as MAT Page
import Team from './components/Team'; // Re-purposed as Team Page
import Contact from './components/Contact'; // Re-purposed as Contact Page
import PrivacyPolicy from './components/PrivacyPolicy';
import AddictionTreatment from './components/AddictionTreatment';
import SuboxoneDoctor from './components/SuboxoneDoctor';
import AdminPage from './components/admin/AdminPage';
import Footer from './components/Footer';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PublicSite: React.FC = () => (
  <div className="min-h-screen bg-white font-sans flex flex-col">
    <Header />
    <main className="flex-grow pt-[80px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mat-program" element={<MatProgram />} />
        <Route path="/addiction-treatment-oxford-ms" element={<AddictionTreatment />} />
        <Route path="/suboxone-doctor-oxford-ms" element={<SuboxoneDoctor />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<PublicSite />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
