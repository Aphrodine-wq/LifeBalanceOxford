import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const Services = lazy(() => import('./components/Services'));
const MatProgram = lazy(() => import('./components/MatProgram'));
const Team = lazy(() => import('./components/Team'));
const Contact = lazy(() => import('./components/Contact'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const AddictionTreatment = lazy(() => import('./components/AddictionTreatment'));
const SuboxoneDoctor = lazy(() => import('./components/SuboxoneDoctor'));
const Referrals = lazy(() => import('./components/Referrals'));
const AdminPage = lazy(() => import('./components/admin/AdminPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-pulse text-slate-400 text-sm">Loading…</div>
  </div>
);

const PublicSite: React.FC = () => (
  <div className="min-h-screen bg-white font-sans flex flex-col">
    <Header />
    <main className="flex-grow pt-[80px]">
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mat-program" element={<MatProgram />} />
          <Route path="/addiction-treatment-oxford-ms" element={<AddictionTreatment />} />
          <Route path="/suboxone-doctor-oxford-ms" element={<SuboxoneDoctor />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<PublicSite />} />
        </Routes>
      </Suspense>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
