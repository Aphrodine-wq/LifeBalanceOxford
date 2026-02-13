import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

const Contact: React.FC = () => {
  usePageMeta({
    title: 'Location & Contact',
    description: 'Life Balance Psychiatric Services is located at 405 Galleria Drive, Suite E, Oxford, MS 38655. Mon–Thu 8am–5pm, Fri 8am–12pm. Call (662) 640-4004.',
  });
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-teal-700 font-medium tracking-wide mb-3">Find Us</p>
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4">Location & Contact</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            We're in the Galleria shopping center off Jackson Avenue in Oxford.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">Address</h3>
              <p className="text-lg text-slate-800 leading-relaxed">
                405 Galleria Drive, Suite E<br />
                Oxford, MS 38655
              </p>
            </div>

            <div>
              <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">Phone</h3>
              <a href="tel:6626404004" className="text-lg text-slate-800 font-semibold hover:text-teal-700 transition-colors">
                (662) 640-4004
              </a>
            </div>

            <div>
              <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">Email</h3>
              <a href="mailto:kim@lifebalanceoxford.com" className="text-lg text-slate-800 hover:text-teal-700 transition-colors break-all">
                kim@lifebalanceoxford.com
              </a>
            </div>

            <div>
              <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">Office Hours</h3>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between max-w-[200px]">
                  <span>Mon – Thu</span>
                  <span className="font-medium">8am – 5pm</span>
                </div>
                <div className="flex justify-between max-w-[200px]">
                  <span>Friday</span>
                  <span className="font-medium">8am – 12pm</span>
                </div>
                <div className="flex justify-between max-w-[200px]">
                  <span>Sat – Sun</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="tel:6626404004"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
              >
                Call to Schedule
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden bg-slate-100">
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
      </div>
    </div>
  );
};

export default Contact;