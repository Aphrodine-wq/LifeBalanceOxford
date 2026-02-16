import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { name: 'About', href: '/team' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed w-full z-50 bg-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img src="/logo.png" alt="Life Balance" className="h-14 w-auto object-contain" />
            <div>
              <span className="font-semibold text-lg text-white leading-none block">Life Balance</span>
              <span className="text-xs text-gray-300 font-medium block mt-0.5">Casey Hester, PMHNP-BC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium transition-colors ${isActive(link.href)
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:block">
            <a href="tel:6626404004" className="text-base font-semibold transition-colors text-gold-accent">
              (662) 640-4004
            </a>
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
        className={`md:hidden fixed inset-0 top-[80px] z-40 transition-all duration-300 ease-in-out bg-dark-green ${isMenuOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block px-4 py-4 rounded-lg text-xl font-medium transition-all duration-300 ${isActive(link.href)
                ? 'text-white bg-white/10'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              style={{ transitionDelay: isMenuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 mt-4 border-t border-white/20 space-y-3">
            <a
              href="tel:6626404004"
              className="flex items-center gap-3 px-4 py-4 text-xl font-semibold text-gold-accent"
            >
              (662) 640-4004
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;