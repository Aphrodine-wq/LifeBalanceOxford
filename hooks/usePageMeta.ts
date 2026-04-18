import { useEffect } from 'react';

type Breadcrumb = { name: string; path: string };

interface PageMeta {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    keywords?: string[];
    breadcrumbs?: Breadcrumb[];
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = 'https://lifebalanceoxford.com';
const DEFAULT_OG_IMAGE = '/logo.png';
const DEFAULT_TITLE = 'Life Balance Psychiatric Services | Oxford, MS';
const MANAGED_SCRIPT_ATTR = 'data-page-jsonld';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
    let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

function clearPageJsonLd() {
    document.querySelectorAll(`script[${MANAGED_SCRIPT_ATTR}]`).forEach((el) => el.remove());
}

function injectJsonLd(data: Record<string, unknown>) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(MANAGED_SCRIPT_ATTR, 'true');
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
}

export function usePageMeta({
    title,
    description,
    path,
    ogImage,
    ogType = 'website',
    keywords,
    breadcrumbs,
    jsonLd,
}: PageMeta) {
    useEffect(() => {
        const suffix = ' | Life Balance Psychiatric Services';
        const fullTitle = title + suffix;
        const pathname = path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
        const canonical = `${SITE_URL}${pathname}`;
        const image = `${SITE_URL}${ogImage ?? DEFAULT_OG_IMAGE}`;

        document.title = fullTitle;

        setMeta('meta[name="description"]', 'name', 'description', description);
        setLink('canonical', canonical);

        if (keywords && keywords.length) {
            setMeta('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
        }

        setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
        setMeta('meta[property="og:description"]', 'property', 'og:description', description);
        setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
        setMeta('meta[property="og:image"]', 'property', 'og:image', image);
        setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
        setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Life Balance Psychiatric Services');
        setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

        setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
        setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
        setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);

        clearPageJsonLd();

        if (breadcrumbs && breadcrumbs.length) {
            injectJsonLd({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: breadcrumbs.map((b, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: b.name,
                    item: `${SITE_URL}${b.path}`,
                })),
            });
        }

        if (jsonLd) {
            const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
            blocks.forEach(injectJsonLd);
        }

        return () => {
            document.title = DEFAULT_TITLE;
            clearPageJsonLd();
        };
    }, [title, description, path, ogImage, ogType, keywords, breadcrumbs, jsonLd]);
}
