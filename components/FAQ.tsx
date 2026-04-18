import React, { useEffect, useId, useState } from 'react';

export type FAQItem = {
  q: string;
  a: React.ReactNode;
  /** Plain-text answer used for JSON-LD. Falls back to an empty string if omitted. */
  aText?: string;
};

type FAQProps = {
  items: FAQItem[];
  title?: string;
  eyebrow?: string;
  theme?: 'dark' | 'light';
  /** When true, the first item opens by default. */
  defaultOpenFirst?: boolean;
};

const MANAGED_ATTR = 'data-faq-jsonld';

const FAQ: React.FC<FAQProps> = ({
  items,
  title = 'Frequently Asked Questions',
  eyebrow,
  theme = 'light',
  defaultOpenFirst = true,
}) => {
  const scopeId = useId();
  const [open, setOpen] = useState<Record<number, boolean>>(
    defaultOpenFirst ? { 0: true } : {},
  );

  useEffect(() => {
    const prior = document.querySelectorAll(`script[${MANAGED_ATTR}="${scopeId}"]`);
    prior.forEach((el) => el.remove());

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(MANAGED_ATTR, scopeId);
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.aText ?? (typeof item.a === 'string' ? item.a : ''),
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.querySelectorAll(`script[${MANAGED_ATTR}="${scopeId}"]`).forEach((el) => el.remove());
    };
  }, [items, scopeId]);

  const isDark = theme === 'dark';
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <section className={isDark ? 'py-20 bg-dark-green' : 'py-20 bg-white'} aria-labelledby={`${scopeId}-heading`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className={`text-sm tracking-widest uppercase mb-3 ${isDark ? 'text-gold-accent' : 'text-teal-700'}`}>
            {eyebrow}
          </p>
        )}
        <h2
          id={`${scopeId}-heading`}
          className={`font-serif text-3xl md:text-4xl font-bold mb-10 leading-tight ${isDark ? 'text-white' : 'text-slate-900'
            }`}
        >
          {title}
        </h2>

        <dl className={`divide-y ${isDark ? 'divide-white/15' : 'divide-slate-200'}`}>
          {items.map((item, i) => {
            const isOpen = !!open[i];
            return (
              <div key={i} className="py-5">
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`${scopeId}-panel-${i}`}
                    className={`flex items-start justify-between w-full text-left gap-6 group ${isDark ? 'text-white' : 'text-slate-900'
                      }`}
                  >
                    <span className="font-serif text-lg md:text-xl font-semibold">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={`mt-1 flex-shrink-0 text-xl font-light transition-transform duration-200 ${isOpen ? 'rotate-45' : ''
                        } ${isDark ? 'text-gold-accent' : 'text-teal-700'}`}
                    >
                      +
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd
                    id={`${scopeId}-panel-${i}`}
                    className={`pt-3 pr-10 text-base leading-relaxed ${isDark ? 'text-cream' : 'text-slate-700'
                      }`}
                  >
                    {item.a}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
