// Build-time prerender: clones dist/index.html for every route in pageMeta,
// injecting unique <title>, meta description, canonical, OG/Twitter tags,
// breadcrumb JSON-LD, and page JSON-LD. Each URL gets its own static HTML
// file so crawlers see real per-page meta before JS ever runs.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pageMeta, SITE_URL, TITLE_SUFFIX } from '../seo/pages.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const shellPath = path.join(distDir, 'index.html');

if (!fs.existsSync(shellPath)) {
    console.error(`[prerender] dist/index.html not found — run vite build first.`);
    process.exit(1);
}

const shell = fs.readFileSync(shellPath, 'utf8');

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildBreadcrumbJsonLd(breadcrumbs) {
    if (!breadcrumbs || !breadcrumbs.length) return null;
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            item: `${SITE_URL}${b.path}`,
        })),
    };
}

function renderPage(meta) {
    const fullTitle = meta.title + TITLE_SUFFIX;
    const canonical = `${SITE_URL}${meta.path}`;
    const ogImage = `${SITE_URL}${meta.ogImage ?? '/logo.png'}`;

    let html = shell;

    // Title
    html = html.replace(
        /<title>[\s\S]*?<\/title>/,
        `<title>${escapeHtml(fullTitle)}</title>`,
    );

    // Description
    html = html.replace(
        /<meta name="description"[^>]*?content="[^"]*"[^>]*?>/,
        `<meta name="description" content="${escapeHtml(meta.description)}">`,
    );

    // Canonical
    html = html.replace(
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${canonical}">`,
    );

    // OG + Twitter
    html = html.replace(
        /<meta property="og:title"[^>]*>/,
        `<meta property="og:title" content="${escapeHtml(fullTitle)}">`,
    );
    html = html.replace(
        /<meta property="og:description"[^>]*>/,
        `<meta property="og:description" content="${escapeHtml(meta.description)}">`,
    );
    html = html.replace(
        /<meta property="og:url"[^>]*>/,
        `<meta property="og:url" content="${canonical}">`,
    );
    html = html.replace(
        /<meta property="og:image"[^>]*>/,
        `<meta property="og:image" content="${ogImage}">`,
    );
    html = html.replace(
        /<meta name="twitter:title"[^>]*>/,
        `<meta name="twitter:title" content="${escapeHtml(fullTitle)}">`,
    );
    html = html.replace(
        /<meta name="twitter:description"[^>]*>/,
        `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`,
    );
    html = html.replace(
        /<meta name="twitter:image"[^>]*>/,
        `<meta name="twitter:image" content="${ogImage}">`,
    );

    // Keywords (insert or replace)
    if (meta.keywords && meta.keywords.length) {
        const kwTag = `<meta name="keywords" content="${escapeHtml(meta.keywords.join(', '))}">`;
        if (/<meta name="keywords"[^>]*>/.test(html)) {
            html = html.replace(/<meta name="keywords"[^>]*>/, kwTag);
        } else {
            html = html.replace(/<meta name="author"[^>]*>/, (m) => `${m}\n  ${kwTag}`);
        }
    }

    // Page-level JSON-LD blocks (breadcrumb + page schema) — marked so the
    // runtime usePageMeta hook can clean+replace on client-side navigation.
    const blocks = [];
    const crumb = buildBreadcrumbJsonLd(meta.breadcrumbs);
    if (crumb) blocks.push(crumb);
    if (meta.jsonLd) {
        if (Array.isArray(meta.jsonLd)) blocks.push(...meta.jsonLd);
        else blocks.push(meta.jsonLd);
    }

    if (blocks.length) {
        const scripts = blocks
            .map(
                (b) =>
                    `<script type="application/ld+json" data-page-jsonld="true">${JSON.stringify(b)}</script>`,
            )
            .join('\n  ');
        // Inject immediately before </head>
        html = html.replace(/<\/head>/, `  ${scripts}\n</head>`);
    }

    return html;
}

const results = [];

for (const [route, meta] of Object.entries(pageMeta)) {
    if (route === '/') continue; // homepage already has correct meta in index.html

    const outPath = path.join(distDir, `${route.slice(1)}.html`);
    const outDir = path.dirname(outPath);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const html = renderPage(meta);
    fs.writeFileSync(outPath, html);
    results.push({ route, file: path.relative(distDir, outPath), bytes: html.length });
}

console.log(`[prerender] generated ${results.length} static pages:`);
for (const r of results) {
    console.log(`  ${r.route.padEnd(40)} -> dist/${r.file}  (${r.bytes}b)`);
}
