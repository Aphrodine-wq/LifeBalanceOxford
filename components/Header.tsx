import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'MAT Program', href: '/mat-program' },
    { name: 'Team', href: '/team' },
    { name: 'Location', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed w-full bg-white z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img src="/logo.png" alt="Life Balance" className="h-12 w-auto object-contain" />
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-slate-900 leading-none block">Life Balance</span>
              <span className="text-xs text-slate-500 font-medium block mt-0.5">Psychiatric Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href)
                  ? 'text-teal-700 bg-teal-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="tel:6626404004" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors">
              <Phone size={15} />
              (662) 640-4004
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full screen overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ease-in-out ${isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-300 ${isActive(link.href)
                ? 'bg-teal-50 text-teal-700'
                : 'text-slate-700 hover:bg-slate-50'
                }`}
              style={{ transitionDelay: isMenuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
            <a
              href="tel:6626404004"
              className="flex items-center gap-3 px-4 py-4 text-lg font-semibold text-teal-700"
            >
              <Phone size={20} />
              (662) 640-4004
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;