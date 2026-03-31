# chasket.dev

> **[🌐 Live Site](https://chasket.dev)** · **[Chasket CLI Library](https://github.com/UltraEgoist/chasket)**

[日本語版はこちら](./README.ja.md)

The official documentation site for [Chasket](https://github.com/UltraEgoist/chasket) — a zero-runtime, template-first language that compiles to native Web Components.

This site is itself built entirely with Chasket and deployed on Cloudflare Pages.

## Features

- **SPA with hash routing** — client-side navigation with no framework overhead
- **Bilingual (ja / en)** — full Japanese and English support with runtime language switching
- **Per-page bundle splitting** — core layout loads immediately; page bundles are loaded on demand for fast initial paint
- **Syntax-highlighted code blocks** — applied at build time via postbuild scripts (no runtime highlighting library)
- **SEO-ready** — OGP / Twitter Card meta tags, `robots.txt`, `sitemap.xml`, canonical URL

## Pages

| Route | Content |
|---|---|
| `#/` | Home — hero, features, live code demo, comparison, ecosystem overview |
| `#/why` | Why Chasket — motivation, design philosophy, compiled output examples |
| `#/guide` | Guide — file structure, template syntax, script API, styling, security |
| `#/api` | API Reference — CLI commands, compiler API, config, diagnostics, types |
| `#/testing` | Testing — test runner, assertions, compile testing, full examples |

## Project Structure

```
chasket.dev/
├── src/
│   ├── layout/          # Shell, navbar, footer (core-layout bundle)
│   ├── shared/          # Shared components like copy button (core-shared bundle)
│   └── pages/
│       ├── home/        # page-home bundle
│       ├── why/         # page-why bundle
│       ├── guide/       # page-guide bundle
│       ├── api/         # page-api bundle
│       └── testing/     # page-testing bundle
├── i18n/                # Translation files (ja.js / en.js)
├── scripts/             # Postbuild patches (syntax highlighting, const→var fix, etc.)
├── dist/                # Built JS bundles (committed for Cloudflare Pages)
├── test/                # Component tests
├── index.html           # Entry point
├── chasket.config.json  # Chasket build configuration with per-directory entries
├── _headers             # Cloudflare Pages cache / security headers
├── robots.txt           # Search engine directives
└── sitemap.xml          # Sitemap for SPA hash routes
```

## Bundle Architecture

Instead of a single monolithic bundle, the site uses **entry-based splitting** via Chasket's `config.entries`:

- **`core-layout.js`** — navbar, footer, shell (loaded on every page)
- **`core-shared.js`** — reusable components like copy button
- **`page-*.js`** — each page's components, loaded dynamically when the user navigates

This reduces the initial load from ~574 KB to ~180 KB (69% reduction), improving CLS and time-to-interactive.

## Local Development

```bash
npm install
npm run dev     # Start dev server
npm run build   # Production build (compile + postbuild)
```

After building, the `dist/` directory contains the final bundles ready for deployment.

## Deployment

This project uses a **pre-built deployment** model:

1. Run `npm run build` locally
2. Commit the `dist/` directory
3. Push to `main` — Cloudflare Pages serves the static files directly

No build step runs on Cloudflare; the committed artifacts are the deployment.

## Related

- **[Chasket](https://github.com/UltraEgoist/chasket)** — the CLI / compiler library
- **[chasket.dev](https://chasket.dev)** — this documentation site (live)

## License

[MIT](./LICENSE)
