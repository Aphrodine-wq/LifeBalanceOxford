import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Printer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-400">



      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">

          {/* Brand / About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-1 font-serif">Life Balance</h3>
            <p className="text-sm mb-4">Psychiatric Services</p>
            <p className="text-sm leading-relaxed">
              Oxford's elite psychiatric practice, providing care that puts people first. We've been at it since the beginning — and we're not going anywhere.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:6626404004" className="flex items-start gap-2.5 hover:text-white transition-colors">
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  <span>(662) 640-4004</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Printer size={15} className="mt-0.5 flex-shrink-0" />
                <span>Fax: (662) 238-4122</span>
              </li>
              <li>
                <a href="mailto:kim@lifebalanceoxford.com" className="flex items-start gap-2.5 hover:text-white transition-colors break-all">
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  <span>kim@lifebalanceoxford.com</span>
                </a>
              </li>
              <li>
                <a href="mailto:casey@lifebalanceoxford.com" className="flex items-start gap-2.5 hover:text-white transition-colors break-all">
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  <span>casey@lifebalanceoxford.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                <span>
                  405 Galleria Drive, Suite E<br />
                  Oxford, MS 38655
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Office Hours</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-neutral-500 text-xs uppercase tracking-wider">Mon – Thu</div>
                <div className="text-neutral-300">8:00am – 5:00pm</div>
              </li>
              <li>
                <div className="text-neutral-500 text-xs uppercase tracking-wider">Friday</div>
                <div className="text-neutral-300">8:00am – 12:00pm</div>
              </li>
              <li>
                <div className="text-neutral-500 text-xs uppercase tracking-wider">Sat – Sun</div>
                <div className="text-red-400">Closed</div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/suboxone-doctor-oxford-ms" className="hover:text-white transition-colors">Suboxone Treatment</Link></li>
              <li><Link to="/mat-program" className="hover:text-white transition-colors">MAT Program</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Location & Contact</Link></li>
              <li><Link to="/referrals" className="hover:text-white transition-colors">Provider Referrals</Link></li>
            </ul>
          </div>

        </div>

        {/* Service Areas — Mississippi (full-width strip) */}
        <div className="mt-12 pt-10 border-t border-neutral-700/60">
          <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Service Areas — Mississippi</h4>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3 text-sm">
            <li><Link to="/suboxone-doctor-batesville-ms" className="hover:text-white transition-colors">Batesville</Link></li>
            <li><Link to="/suboxone-doctor-booneville-ms" className="hover:text-white transition-colors">Booneville</Link></li>
            <li><Link to="/suboxone-doctor-bruce-ms" className="hover:text-white transition-colors">Bruce</Link></li>
            <li><Link to="/suboxone-doctor-byhalia-ms" className="hover:text-white transition-colors">Byhalia</Link></li>
            <li><Link to="/suboxone-doctor-clarksdale-ms" className="hover:text-white transition-colors">Clarksdale</Link></li>
            <li><Link to="/suboxone-doctor-corinth-ms" className="hover:text-white transition-colors">Corinth</Link></li>
            <li><Link to="/suboxone-doctor-grenada-ms" className="hover:text-white transition-colors">Grenada</Link></li>
            <li><Link to="/suboxone-doctor-hernando-ms" className="hover:text-white transition-colors">Hernando</Link></li>
            <li><Link to="/suboxone-doctor-holly-springs-ms" className="hover:text-white transition-colors">Holly Springs</Link></li>
            <li><Link to="/suboxone-doctor-horn-lake-ms" className="hover:text-white transition-colors">Horn Lake</Link></li>
            <li><Link to="/suboxone-doctor-new-albany-ms" className="hover:text-white transition-colors">New Albany</Link></li>
            <li><Link to="/suboxone-doctor-olive-branch-ms" className="hover:text-white transition-colors">Olive Branch</Link></li>
            <li><Link to="/suboxone-doctor-pontotoc-ms" className="hover:text-white transition-colors">Pontotoc</Link></li>
            <li><Link to="/suboxone-doctor-ripley-ms" className="hover:text-white transition-colors">Ripley</Link></li>
            <li><Link to="/suboxone-doctor-saltillo-ms" className="hover:text-white transition-colors">Saltillo</Link></li>
            <li><Link to="/suboxone-doctor-sardis-ms" className="hover:text-white transition-colors">Sardis</Link></li>
            <li><Link to="/suboxone-doctor-senatobia-ms" className="hover:text-white transition-colors">Senatobia</Link></li>
            <li><Link to="/suboxone-doctor-southaven-ms" className="hover:text-white transition-colors">Southaven</Link></li>
            <li><Link to="/suboxone-doctor-tupelo-ms" className="hover:text-white transition-colors">Tupelo</Link></li>
            <li><Link to="/suboxone-doctor-water-valley-ms" className="hover:text-white transition-colors">Water Valley</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Life Balance Psychiatric Services. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <Link to="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Practices</Link>
            <span>·</span>
            <span>Oxford, Mississippi</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;