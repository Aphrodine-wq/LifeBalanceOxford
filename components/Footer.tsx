import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* Google Map */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="aspect-[16/5] rounded-xl overflow-hidden bg-slate-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.434458564253!2d-89.5663673236086!3d34.36437597305952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88807b1a2f96303d%3A0x6a0a0a0a0a0a0a0a!2s405%20Galleria%20Dr%20Ste%20E%2C%20Oxford%2C%20MS%2038655!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Life Balance Psychiatric Services location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand / About */}
          <div className="lg:col-span-1">
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
                  (662) 640-4004
                </a>
              </li>
              <li>
                <a href="mailto:kim@lifebalanceoxford.com" className="flex items-start gap-2.5 hover:text-white transition-colors">
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  kim@lifebalanceoxford.com
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
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday</span>
                <span className="text-slate-300">8:00am – 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span className="text-slate-300">8:00am – 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span className="text-slate-300">8:00am – 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span className="text-slate-300">8:00am – 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-slate-300">8:00am – 12:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sat – Sun</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/mat-program" className="hover:text-white transition-colors">Addiction Medicine</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Location & Contact</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Life Balance Psychiatric Services. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Oxford, Mississippi
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;