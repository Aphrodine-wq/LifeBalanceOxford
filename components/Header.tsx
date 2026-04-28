import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);
  const [isMobileTreatmentOpen, setIsMobileTreatmentOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsTreatmentOpen(false);
    setIsMobileTreatmentOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const treatmentGroups = [
    {
      section: 'Programs',
      items: [
        { name: 'All Services', href: '/services' },
        { name: 'Addiction Treatment', href: '/addiction-treatment-oxford-ms' },
        { name: 'MAT Program', href: '/mat-program' },
        { name: 'Suboxone Treatment', href: '/suboxone-doctor-oxford-ms' },
        { name: 'Same-Day Suboxone', href: '/same-day-suboxone-oxford-ms' },
        { name: 'Telehealth (Mississippi)', href: '/suboxone-telehealth-mississippi' },
      ],
    },
    {
      section: 'Specialty & Coverage',
      items: [
        { name: 'Fentanyl Recovery', href: '/fentanyl-addiction-treatment-mississippi' },
        { name: 'Stimulant & ADHD Care', href: '/adderall-addiction-treatment-oxford-ms' },
        { name: 'Ole Miss & North MS', href: '/ole-miss-suboxone-doctor' },
        { name: 'BCBS Coverage', href: '/blue-cross-suboxone-mississippi' },
      ],
    },
  ];

  const treatmentPaths = treatmentGroups.flatMap((g) => g.items.map((i) => i.href));

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const isTreatmentActive = treatmentPaths.some((p) => location.pathname === p);

  const openTreatment = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsTreatmentOpen(true);
  };

  const scheduleCloseTreatment = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setIsTreatmentOpen(false), 120);
  };

  return (
    <header className="fixed w-full z-50 bg-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img src="/logo.png" alt="Life Balance" className="h-20 w-auto object-contain" />
            <div>
              <span className="font-semibold text-lg text-white leading-none block">Life Balance</span>
              <span className="text-xs text-gray-300 font-medium block mt-0.5">Casey Hester, PMHNP-BC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className={`text-base font-medium transition-colors ${isActive('/')
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
                }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openTreatment}
              onMouseLeave={scheduleCloseTreatment}
            >
              <button
                type="button"
                onClick={() => setIsTreatmentOpen((v) => !v)}
                aria-expanded={isTreatmentOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 text-base font-medium transition-colors ${isTreatmentActive
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isTreatmentOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isTreatmentOpen && (
                <div
                  className="absolute right-0 top-full pt-3"
                  onMouseEnter={openTreatment}
                  onMouseLeave={scheduleCloseTreatment}
                >
                  <div className="w-[520px] bg-white rounded-lg shadow-xl border border-neutral-200 p-5 grid grid-cols-2 gap-x-6 gap-y-1">
                    {treatmentGroups.map((group) => (
                      <div key={group.section}>
                        <h5 className="text-[11px] uppercase tracking-wider font-semibold text-neutral-500 px-3 pb-2 pt-1">
                          {group.section}
                        </h5>
                        <ul className="space-y-0.5">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                onClick={() => setIsTreatmentOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm transition-colors ${location.pathname === item.href
                                  ? 'bg-neutral-100 text-neutral-900 font-medium'
                                  : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                                  }`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/referrals"
              className={`text-base font-medium transition-colors ${isActive('/referrals')
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
                }`}
            >
              Referrals
            </Link>
            <Link
              to="/team"
              className={`text-base font-medium transition-colors ${isActive('/team')
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
                }`}
            >
              About
            </Link>
          </nav>

          {/* Phone + Fax */}
          <div className="hidden md:flex flex-col items-end leading-tight">
            <a href="tel:6626404004" className="text-base font-semibold transition-colors text-gold-accent">
              (662) 640-4004
            </a>
            <span className="text-xs text-gray-300 mt-0.5">
              Fax (662) 238-4122
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full screen overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[80px] z-40 transition-[opacity,transform] duration-300 ease-in-out bg-dark-green ${isMenuOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
      >
        <div className="px-6 py-6 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)] pb-12">
          <Link
            to="/"
            className={`block px-4 py-4 rounded-lg text-xl font-medium transition-colors ${isActive('/')
              ? 'text-white bg-white/10'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            Home
          </Link>

          {/* Mobile Services collapsible */}
          <div>
            <button
              type="button"
              onClick={() => setIsMobileTreatmentOpen((v) => !v)}
              aria-expanded={isMobileTreatmentOpen}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-lg text-xl font-medium transition-colors ${isTreatmentActive
                ? 'text-white bg-white/10'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
            >
              <span>Services</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${isMobileTreatmentOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isMobileTreatmentOpen && (
              <div className="mt-1 ml-2 pl-3 border-l border-white/15 space-y-3 py-2">
                {treatmentGroups.map((group) => (
                  <div key={group.section}>
                    <h5 className="px-3 text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-1">
                      {group.section}
                    </h5>
                    <ul className="space-y-0.5">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            className={`block px-3 py-2.5 rounded-md text-base transition-colors ${location.pathname === item.href
                              ? 'text-white bg-white/10'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                              }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/referrals"
            className={`block px-4 py-4 rounded-lg text-xl font-medium transition-colors ${isActive('/referrals')
              ? 'text-white bg-white/10'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            Referrals
          </Link>
          <Link
            to="/team"
            className={`block px-4 py-4 rounded-lg text-xl font-medium transition-colors ${isActive('/team')
              ? 'text-white bg-white/10'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            About
          </Link>

          <div className="pt-6 mt-4 border-t border-white/20 space-y-1">
            <a
              href="tel:6626404004"
              className="flex items-center gap-3 px-4 py-3 text-xl font-semibold text-gold-accent"
            >
              (662) 640-4004
            </a>
            <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300">
              Fax (662) 238-4122
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;