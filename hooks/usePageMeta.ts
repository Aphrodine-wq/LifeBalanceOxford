import { useEffect } from 'react';

interface PageMeta {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
}

const SITE_URL = 'https://lifebalanceoxford.com';
const DEFAULT_OG_IMAGE = '/logo.png';
const DEFAULT_TITLE = 'Life Balance Psychiatric Services | Oxford, MS';

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

export function usePageMeta({ title, description, path, ogImage, ogType = 'website' }: PageMeta) {
    useEffect(() => {
        const suffix = ' | Life Balance Psychiatric Services';
        const fullTitle = title + suffix;
        const pathname = path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
        const canonical = `${SITE_URL}${pathname}`;
        const image = `${SITE_URL}${ogImage ?? DEFAULT_OG_IMAGE}`;

        document.title = fullTitle;

        setMeta('meta[name="description"]', 'name', 'description', description);
        setLink('canonical', canonical);

        setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
        setMeta('meta[property="og:description"]', 'property', 'og:description', description);
        setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
        setMeta('meta[property="og:image"]', 'property', 'og:image', image);
        setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
        setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Life Balance Psychiatric Services');

        setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
        setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
        setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);

        return () => {
            document.title = DEFAULT_TITLE;
        };
    }, [title, description, path, ogImage, ogType]);
}
