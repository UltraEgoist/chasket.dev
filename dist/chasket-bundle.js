// Chasket Bundle - 2026-03-28T10:36:24.439Z
// 33 component(s)

// Deferred registration queue: all classes are defined first,
// then all customElements.define() calls happen at the end.
// This ensures nested components work regardless of file order.
const __chasketDefineQueue = [];

// ── csk-footer.csk ──
(() => {
"use strict";

class CskFooter extends HTMLElement {
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;}.footer{padding:clamp(1.25rem, 2.5vw, 2rem) 0;border-top:1px solid var(--c-border, #2a2a3a);}.inner{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;}.brand{display:flex;align-items:center;gap:0.5rem;font-weight:600;font-size:clamp(0.8rem, 1vw, 0.9rem);color:var(--c-text, #e4e4ed);}.copy{font-size:clamp(0.7rem, 0.9vw, 0.8rem);color:var(--c-text-dim, #9898ab);}@media (max-width:48rem){.inner{flex-direction:column;text-align:center;}}</style>
      <footer class="footer">
        <div class="inner">
          <div class="brand"><svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="url(#fg)"></rect><path d="M9 22V10h3.2l3.8 7.5L19.8 10H23v12h-2.8v-7.4L17 21.2h-2L11.8 14.6V22H9z" fill="#fff"></path><defs><linearGradient id="fg" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#6C5CE7"></stop><stop offset="1" stop-color="#00B894"></stop></linearGradient></defs></svg><span>Chasket</span></div>
          <p class="copy">
            ${this.#esc(this.#tr('footer.copyright'))}
          </p>
        </div>
      </footer>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;}.footer{padding:clamp(1.25rem, 2.5vw, 2rem) 0;border-top:1px solid var(--c-border, #2a2a3a);}.inner{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;}.brand{display:flex;align-items:center;gap:0.5rem;font-weight:600;font-size:clamp(0.8rem, 1vw, 0.9rem);color:var(--c-text, #e4e4ed);}.copy{font-size:clamp(0.7rem, 0.9vw, 0.8rem);color:var(--c-text-dim, #9898ab);}@media (max-width:48rem){.inner{flex-direction:column;text-align:center;}}</style>
      <footer class="footer">
        <div class="inner">
          <div class="brand"><svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="url(#fg)"></rect><path d="M9 22V10h3.2l3.8 7.5L19.8 10H23v12h-2.8v-7.4L17 21.2h-2L11.8 14.6V22H9z" fill="#fff"></path><defs><linearGradient id="fg" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#6C5CE7"></stop><stop offset="1" stop-color="#00B894"></stop></linearGradient></defs></svg><span>Chasket</span></div>
          <p class="copy">
            ${this.#esc(this.#tr('footer.copyright'))}
          </p>
        </div>
      </footer>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-footer'] = CskFooter;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-footer', CskFooter]);
} else if (!customElements.get('csk-footer')) {
  customElements.define('csk-footer', CskFooter);
}

})();

// ── csk-navbar.csk ──
(() => {
"use strict";

class CskNavbar extends HTMLElement {
  #_menuOpen = false;
  get #menuOpen() { return this.#_menuOpen; }
  set #menuOpen(v) { this.#_menuOpen = v; this.#scheduleUpdate(); }
  #_scrolled = false;
  get #scrolled() { return this.#_scrolled; }
  set #scrolled(v) { this.#_scrolled = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    window.addEventListener("scroll", () => { this.#handleScroll() }, { passive: true })
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #currentLang() {
    return window.__i18n_locale()
  }

  #switchLang() {
    const next = window.__i18n_locale() === 'ja' ? 'en' : 'ja'
        window.__i18n_setLocale(next)
  }

  #toggleMenu() {
    this.#menuOpen = !this.#menuOpen
  }

  #closeMenu() {
    this.#menuOpen = false
  }

  #handleScroll() {
    this.#scrolled = window.scrollY > 40
  }

  #goFeatures() {
    const el = document.getElementById("features")
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
        this.#menuOpen = false
  }

  #goCode() {
    const el = document.getElementById("code")
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
        this.#menuOpen = false
  }

  #goEcosystem() {
    const el = document.getElementById("ecosystem")
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
        this.#menuOpen = false
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;position:fixed;top:0;left:0;right:0;z-index:100;}.nav{background:rgba(10, 10, 15, 0.82);backdrop-filter:blur(1rem) saturate(1.6);-webkit-backdrop-filter:blur(1rem) saturate(1.6);border-bottom:1px solid var(--c-border, #2a2a3a);transition:border-color 0.3s;}.nav.scrolled{border-bottom-color:rgba(42, 42, 58, 1);}.inner{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);display:flex;align-items:center;justify-content:space-between;height:3.75rem;}.logo{display:flex;align-items:center;gap:0.625rem;font-weight:700;font-size:clamp(1.2rem, 1.6vw, 1.5rem);letter-spacing:-0.02em;color:var(--c-text, #e4e4ed);text-decoration:none;transition:color 0.2s;}.logo:hover{color:#fff;}.logo svg{flex-shrink:0;}.links{display:flex;align-items:center;gap:clamp(1rem, 2.5vw, 1.75rem);font-size:clamp(0.8rem, 1vw, 0.9rem);}.links a{color:var(--c-text-dim, #9898ab);text-decoration:none;transition:color 0.2s;white-space:nowrap;}.links a:hover{color:#fff;}.gh-link{display:inline-flex !important;align-items:center;gap:0.375rem;background:var(--c-surface, #1a1a26);padding:0.375rem 0.875rem;border-radius:0.5rem;border:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.75rem, 0.9vw, 0.85rem) !important;}.gh-link:hover{border-color:var(--c-primary-light, #a29bfe);color:#fff !important;}.lang-btn{display:inline-flex;align-items:center;gap:0.375rem;background:var(--c-surface, #1a1a26);padding:0.375rem 0.75rem;border-radius:0.5rem;border:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.75rem, 0.9vw, 0.85rem);color:var(--c-text-dim, #9898ab);cursor:pointer;transition:border-color 0.2s, color 0.2s;font-family:var(--font, sans-serif);font-weight:600;letter-spacing:0.04em;min-height:2.25rem;white-space:nowrap;}.lang-btn:hover{border-color:var(--c-primary-light, #a29bfe);color:#fff;}.lang-btn svg{flex-shrink:0;}.toggle{display:none;background:none;border:none;cursor:pointer;padding:0.5rem;min-width:2.75rem;min-height:2.75rem;justify-content:center;align-items:center;}.toggle span{display:block;width:1.375rem;height:2px;background:var(--c-text, #e4e4ed);margin:0.3125rem 0;border-radius:2px;transition:0.25s;}@media (max-width:48rem){.links{display:none;flex-direction:column;position:absolute;top:3.75rem;left:0;right:0;background:rgba(10, 10, 15, 0.96);padding:1.25rem var(--space-page, 1.5rem);gap:1rem;border-bottom:1px solid var(--c-border, #2a2a3a);backdrop-filter:blur(1rem);}.links.open{display:flex;}.links a{padding:0.5rem 0;font-size:1rem;}.toggle{display:flex;}}</style>
      <nav class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#scrolled ? 'nav scrolled' : 'nav'))}">
        <div class="inner"><a href="/" class="logo"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="url(#ng)"></rect><path d="M9 22V10h3.2l3.8 7.5L19.8 10H23v12h-2.8v-7.4L17 21.2h-2L11.8 14.6V22H9z" fill="#fff"></path><defs><linearGradient id="ng" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#6C5CE7"></stop><stop offset="1" stop-color="#00B894"></stop></linearGradient></defs></svg><span>Chasket</span></a><div class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#menuOpen ? 'links open' : 'links'))}"><a data-chasket-id="fl-0" href="#/why">${this.#esc(this.#tr('nav.why'))}</a><a data-chasket-id="fl-1" href="#/guide">${this.#esc(this.#tr('nav.guide'))}</a><a data-chasket-id="fl-2" href="#/api">${this.#esc(this.#tr('nav.api'))}</a><a data-chasket-id="fl-3" href="#/testing">${this.#esc(this.#tr('nav.testing'))}</a><a data-chasket-id="fl-4" href="#ecosystem">${this.#esc(this.#tr('nav.ecosystem'))}</a><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="gh-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
          GitHub
        </a><button data-chasket-id="fl-5" class="lang-btn" aria-label="${this.#escAttr(this.#tr('nav.switchLang'))}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>${this.#esc(this.#currentLang() === 'ja' ? 'EN' : 'JA')}</button></div><button data-chasket-id="fl-6" class="toggle" aria-label="${this.#escAttr(this.#tr('nav.toggleMenu'))}"><span></span><span></span><span></span></button></div>
      </nav>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;position:fixed;top:0;left:0;right:0;z-index:100;}.nav{background:rgba(10, 10, 15, 0.82);backdrop-filter:blur(1rem) saturate(1.6);-webkit-backdrop-filter:blur(1rem) saturate(1.6);border-bottom:1px solid var(--c-border, #2a2a3a);transition:border-color 0.3s;}.nav.scrolled{border-bottom-color:rgba(42, 42, 58, 1);}.inner{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);display:flex;align-items:center;justify-content:space-between;height:3.75rem;}.logo{display:flex;align-items:center;gap:0.625rem;font-weight:700;font-size:clamp(1.2rem, 1.6vw, 1.5rem);letter-spacing:-0.02em;color:var(--c-text, #e4e4ed);text-decoration:none;transition:color 0.2s;}.logo:hover{color:#fff;}.logo svg{flex-shrink:0;}.links{display:flex;align-items:center;gap:clamp(1rem, 2.5vw, 1.75rem);font-size:clamp(0.8rem, 1vw, 0.9rem);}.links a{color:var(--c-text-dim, #9898ab);text-decoration:none;transition:color 0.2s;white-space:nowrap;}.links a:hover{color:#fff;}.gh-link{display:inline-flex !important;align-items:center;gap:0.375rem;background:var(--c-surface, #1a1a26);padding:0.375rem 0.875rem;border-radius:0.5rem;border:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.75rem, 0.9vw, 0.85rem) !important;}.gh-link:hover{border-color:var(--c-primary-light, #a29bfe);color:#fff !important;}.lang-btn{display:inline-flex;align-items:center;gap:0.375rem;background:var(--c-surface, #1a1a26);padding:0.375rem 0.75rem;border-radius:0.5rem;border:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.75rem, 0.9vw, 0.85rem);color:var(--c-text-dim, #9898ab);cursor:pointer;transition:border-color 0.2s, color 0.2s;font-family:var(--font, sans-serif);font-weight:600;letter-spacing:0.04em;min-height:2.25rem;white-space:nowrap;}.lang-btn:hover{border-color:var(--c-primary-light, #a29bfe);color:#fff;}.lang-btn svg{flex-shrink:0;}.toggle{display:none;background:none;border:none;cursor:pointer;padding:0.5rem;min-width:2.75rem;min-height:2.75rem;justify-content:center;align-items:center;}.toggle span{display:block;width:1.375rem;height:2px;background:var(--c-text, #e4e4ed);margin:0.3125rem 0;border-radius:2px;transition:0.25s;}@media (max-width:48rem){.links{display:none;flex-direction:column;position:absolute;top:3.75rem;left:0;right:0;background:rgba(10, 10, 15, 0.96);padding:1.25rem var(--space-page, 1.5rem);gap:1rem;border-bottom:1px solid var(--c-border, #2a2a3a);backdrop-filter:blur(1rem);}.links.open{display:flex;}.links a{padding:0.5rem 0;font-size:1rem;}.toggle{display:flex;}}</style>
      <nav class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#scrolled ? 'nav scrolled' : 'nav'))}">
        <div class="inner"><a href="/" class="logo"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="url(#ng)"></rect><path d="M9 22V10h3.2l3.8 7.5L19.8 10H23v12h-2.8v-7.4L17 21.2h-2L11.8 14.6V22H9z" fill="#fff"></path><defs><linearGradient id="ng" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#6C5CE7"></stop><stop offset="1" stop-color="#00B894"></stop></linearGradient></defs></svg><span>Chasket</span></a><div class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#menuOpen ? 'links open' : 'links'))}"><a data-chasket-id="fl-0" href="#/why">${this.#esc(this.#tr('nav.why'))}</a><a data-chasket-id="fl-1" href="#/guide">${this.#esc(this.#tr('nav.guide'))}</a><a data-chasket-id="fl-2" href="#/api">${this.#esc(this.#tr('nav.api'))}</a><a data-chasket-id="fl-3" href="#/testing">${this.#esc(this.#tr('nav.testing'))}</a><a data-chasket-id="fl-4" href="#ecosystem">${this.#esc(this.#tr('nav.ecosystem'))}</a><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="gh-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
          GitHub
        </a><button data-chasket-id="fl-5" class="lang-btn" aria-label="${this.#escAttr(this.#tr('nav.switchLang'))}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>${this.#esc(this.#currentLang() === 'ja' ? 'EN' : 'JA')}</button></div><button data-chasket-id="fl-6" class="toggle" aria-label="${this.#escAttr(this.#tr('nav.toggleMenu'))}"><span></span><span></span><span></span></button></div>
      </nav>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-0"]');
      if (el) {
        const fn_click = (e) => { this.#closeMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-1"]');
      if (el) {
        const fn_click = (e) => { this.#closeMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-2"]');
      if (el) {
        const fn_click = (e) => { this.#closeMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-3"]');
      if (el) {
        const fn_click = (e) => { this.#closeMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-4"]');
      if (el) {
        const fn_click = (e) => { e.preventDefault(); this.#goEcosystem(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-5"]');
      if (el) {
        const fn_click = (e) => { this.#switchLang(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-6"]');
      if (el) {
        const fn_click = (e) => { this.#toggleMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-navbar'] = CskNavbar;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-navbar', CskNavbar]);
} else if (!customElements.get('csk-navbar')) {
  customElements.define('csk-navbar', CskNavbar);
}

})();

// ── csk-shell.csk ──

(() => {
"use strict";

class CskShell extends HTMLElement {
  #_currentPage = "";
  get #currentPage() { return this.#_currentPage; }
  set #currentPage(v) { this.#_currentPage = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-shell');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    window.addEventListener("hashchange", () => { this.#onHashChange() })
        // setTimeout(0): 全カスタム要素の定義完了を待ってから初回レンダリング
        setTimeout(() => { this.#currentPage = this.#getPage() || "home" }, 0)
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #getPage() {
    const hash = window.location.hash || "#/"
        if (hash.startsWith("#/why")) return "why"
        if (hash.startsWith("#/guide")) return "guide"
        if (hash.startsWith("#/api")) return "api"
        if (hash.startsWith("#/testing")) return "testing"
        if (hash === "#/" || hash === "#" || hash === "") return "home"
        return ""
  }

  #onHashChange() {
    const next = this.#getPage()
        if (next === "") return
        const changed = (next !== this.#currentPage)
        this.#currentPage = next
        if (changed) window.scrollTo(0, 0)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-shell"] .shell{display:flex;flex-direction:column;min-height:100vh;}[data-chasket-scope="csk-shell"] .shell-main{flex:1;padding-top:3.75rem;}</style>
      <div class="shell">
        <csk-navbar></csk-navbar>
        <main class="shell-main">
          ${this.#currentPage === 'home' ? `
            <csk-page-home></csk-page-home>
          ` : this.#currentPage === 'why' ? `
            <csk-page-why></csk-page-why>
          ` : this.#currentPage === 'guide' ? `
            <csk-page-guide></csk-page-guide>
          ` : this.#currentPage === 'api' ? `
            <csk-page-api></csk-page-api>
          ` : this.#currentPage === 'testing' ? `
            <csk-page-testing></csk-page-testing>
          ` : ''}
        </main>
        <csk-footer></csk-footer>
      </div>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-shell"] .shell{display:flex;flex-direction:column;min-height:100vh;}[data-chasket-scope="csk-shell"] .shell-main{flex:1;padding-top:3.75rem;}</style>
      <div class="shell">
        <csk-navbar></csk-navbar>
        <main class="shell-main">
          ${this.#currentPage === 'home' ? `
            <csk-page-home></csk-page-home>
          ` : this.#currentPage === 'why' ? `
            <csk-page-why></csk-page-why>
          ` : this.#currentPage === 'guide' ? `
            <csk-page-guide></csk-page-guide>
          ` : this.#currentPage === 'api' ? `
            <csk-page-api></csk-page-api>
          ` : this.#currentPage === 'testing' ? `
            <csk-page-testing></csk-page-testing>
          ` : ''}
        </main>
        <csk-footer></csk-footer>
      </div>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-shell'] = CskShell;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-shell', CskShell]);
} else if (!customElements.get('csk-shell')) {
  customElements.define('csk-shell', CskShell);
}

})();

// ── csk-api-cli.csk ──
(() => {
"use strict";

class CskApiCli extends HTMLElement {
  #_code_chasketInit = "chasket init my-project\ncd my-project\nnpm install\nchasket dev";
  get #code_chasketInit() { return this.#_code_chasketInit; }
  set #code_chasketInit(v) { this.#_code_chasketInit = v; this.#scheduleUpdate(); }
  #_code_chasketDev = "chasket dev                    <span class=cm># port 5173 (default)</span>\nchasket dev --port <span class=n>3000</span>      <span class=cm># custom port</span>\nchasket dev --no-hmr         <span class=cm># disable HMR</span>";
  get #code_chasketDev() { return this.#_code_chasketDev; }
  set #code_chasketDev(v) { this.#_code_chasketDev = v; this.#scheduleUpdate(); }
  #_code_chasketBuild = "chasket build                  <span class=cm># src/ → dist/</span>\nchasket build src/pages       <span class=cm># specify directory</span>";
  get #code_chasketBuild() { return this.#_code_chasketBuild; }
  set #code_chasketBuild(v) { this.#_code_chasketBuild = v; this.#scheduleUpdate(); }
  #_code_chasketCheck = "chasket check                  <span class=cm># report type errors (no build)</span>\nchasket check src/pages";
  get #code_chasketCheck() { return this.#_code_chasketCheck; }
  set #code_chasketCheck(v) { this.#_code_chasketCheck = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-api-cli');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- CLI Commands -->
      <section id="cli-commands" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.cli.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.cli.description'))}
        </p>
        <div class="subsection">
          <h3>
            chasket init &lt;name&gt;
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.cli.initDescription'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.purpose'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.cli.initPurpose'))}
            </p>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.example'))}
            </h4>
            <pre><code>${this.#code_chasketInit}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.cli.filesCreated'))}:</strong><ul><li>chasket.config.json - ${this.#esc(this.#tr('apiContent.cli.projectConfig'))}</li><li>package.json - ${this.#esc(this.#tr('apiContent.cli.npmPackage'))}</li><li>src/pages/ - ${this.#esc(this.#tr('apiContent.cli.componentDir'))}</li><li>dist/ - ${this.#esc(this.#tr('apiContent.cli.buildDir'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            chasket dev [--port] [--no-hmr]
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.cli.devDescription'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.purpose'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.cli.devPurpose'))}
            </p>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.example'))}
            </h4>
            <pre><code>${this.#code_chasketDev}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.options'))}
            </h4>
            <ul>
              <li><code>--port &lt;number&gt;</code> - ${this.#esc(this.#tr('apiContent.cli.portOption'))}</li>
              <li><code>--no-hmr</code> - ${this.#esc(this.#tr('apiContent.cli.noHmrOption'))}</li>
              <li><code>--host &lt;host&gt;</code> - ${this.#esc(this.#tr('apiContent.cli.hostOption'))}</li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.cli.features'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.cli.autoFileWatch'))}</li><li>${this.#esc(this.#tr('apiContent.cli.hmr'))}</li><li>${this.#esc(this.#tr('apiContent.cli.sourceMap'))}</li><li>${this.#esc(this.#tr('apiContent.cli.autoReload'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            chasket build [src]
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.cli.buildDescription'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.purpose'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.cli.buildPurpose'))}
            </p>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.example'))}
            </h4>
            <pre><code>${this.#code_chasketBuild}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.output'))}
            </h4>
            <ul>
              <li><code>dist/components/</code> - ${this.#esc(this.#tr('apiContent.cli.compiledComponents'))}</li>
              <li><code>dist/index.js</code> - ${this.#esc(this.#tr('apiContent.cli.mainBundle'))}</li>
              <li><code>dist/index.d.ts</code> - ${this.#esc(this.#tr('apiContent.cli.typeDefinitions'))}</li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.cli.optimizations'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.cli.minification'))}</li><li>${this.#esc(this.#tr('apiContent.cli.treeShaking'))}</li><li>${this.#esc(this.#tr('apiContent.cli.cssBundling'))}</li><li>${this.#esc(this.#tr('apiContent.cli.sourceMapOptional'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            chasket check [src]
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.cli.checkDescription'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.purpose'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.cli.checkPurpose'))}
            </p>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.example'))}
            </h4>
            <pre><code>${this.#code_chasketCheck}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.cli.purpose'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.cli.checkCicdPurpose'))}</li><li>${this.#esc(this.#tr('apiContent.cli.checkErrorOnlyPurpose'))}</li><li>${this.#esc(this.#tr('apiContent.cli.checkFastValidation'))}</li></ul></div>
        </div>
      </section>
      <!-- CLI Options -->
      <section id="cli-options" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.cli.optionsList'))}
        </h2>
        <div class="table-wrapper">
          <table class="api-table">
            <thead>
              <tr>
                <th>
                  ${this.#esc(this.#tr('apiContent.cli.tableOption'))}
                </th>
                <th>
                  ${this.#esc(this.#tr('apiContent.cli.tableCommand'))}
                </th>
                <th>
                  ${this.#esc(this.#tr('apiContent.cli.tableDescription'))}
                </th>
                <th>
                  ${this.#esc(this.#tr('apiContent.cli.tableDefault'))}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
<code>--port</code>                </td>
                <td>
                  dev
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tablePortDesc'))}
                </td>
                <td>
                  5173
                </td>
              </tr>
              <tr>
                <td>
<code>--host</code>                </td>
                <td>
                  dev
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableHostDesc'))}
                </td>
                <td>
                  localhost
                </td>
              </tr>
              <tr>
                <td>
<code>--no-hmr</code>                </td>
                <td>
                  dev
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableNoHmrDesc'))}
                </td>
                <td>
                  enabled
                </td>
              </tr>
              <tr>
                <td>
<code>--watch</code>                </td>
                <td>
                  build, check
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableWatchDesc'))}
                </td>
                <td>
                  disabled
                </td>
              </tr>
              <tr>
                <td>
<code>--sourcemap</code>                </td>
                <td>
                  build
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableSourcemapDesc'))}
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableConfigDependent'))}
                </td>
              </tr>
              <tr>
                <td>
<code>--minify</code>                </td>
                <td>
                  build
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableMinifyDesc'))}
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableProduction'))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- CLI Commands -->
      <section id="cli-commands" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.cli.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.cli.description'))}
        </p>
        <div class="subsection">
          <h3>
            chasket init &lt;name&gt;
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.cli.initDescription'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.purpose'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.cli.initPurpose'))}
            </p>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.example'))}
            </h4>
            <pre><code>${this.#code_chasketInit}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.cli.filesCreated'))}:</strong><ul><li>chasket.config.json - ${this.#esc(this.#tr('apiContent.cli.projectConfig'))}</li><li>package.json - ${this.#esc(this.#tr('apiContent.cli.npmPackage'))}</li><li>src/pages/ - ${this.#esc(this.#tr('apiContent.cli.componentDir'))}</li><li>dist/ - ${this.#esc(this.#tr('apiContent.cli.buildDir'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            chasket dev [--port] [--no-hmr]
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.cli.devDescription'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.purpose'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.cli.devPurpose'))}
            </p>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.example'))}
            </h4>
            <pre><code>${this.#code_chasketDev}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.options'))}
            </h4>
            <ul>
              <li><code>--port &lt;number&gt;</code> - ${this.#esc(this.#tr('apiContent.cli.portOption'))}</li>
              <li><code>--no-hmr</code> - ${this.#esc(this.#tr('apiContent.cli.noHmrOption'))}</li>
              <li><code>--host &lt;host&gt;</code> - ${this.#esc(this.#tr('apiContent.cli.hostOption'))}</li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.cli.features'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.cli.autoFileWatch'))}</li><li>${this.#esc(this.#tr('apiContent.cli.hmr'))}</li><li>${this.#esc(this.#tr('apiContent.cli.sourceMap'))}</li><li>${this.#esc(this.#tr('apiContent.cli.autoReload'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            chasket build [src]
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.cli.buildDescription'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.purpose'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.cli.buildPurpose'))}
            </p>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.example'))}
            </h4>
            <pre><code>${this.#code_chasketBuild}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.output'))}
            </h4>
            <ul>
              <li><code>dist/components/</code> - ${this.#esc(this.#tr('apiContent.cli.compiledComponents'))}</li>
              <li><code>dist/index.js</code> - ${this.#esc(this.#tr('apiContent.cli.mainBundle'))}</li>
              <li><code>dist/index.d.ts</code> - ${this.#esc(this.#tr('apiContent.cli.typeDefinitions'))}</li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.cli.optimizations'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.cli.minification'))}</li><li>${this.#esc(this.#tr('apiContent.cli.treeShaking'))}</li><li>${this.#esc(this.#tr('apiContent.cli.cssBundling'))}</li><li>${this.#esc(this.#tr('apiContent.cli.sourceMapOptional'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            chasket check [src]
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.cli.checkDescription'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.purpose'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.cli.checkPurpose'))}
            </p>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.cli.example'))}
            </h4>
            <pre><code>${this.#code_chasketCheck}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.cli.purpose'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.cli.checkCicdPurpose'))}</li><li>${this.#esc(this.#tr('apiContent.cli.checkErrorOnlyPurpose'))}</li><li>${this.#esc(this.#tr('apiContent.cli.checkFastValidation'))}</li></ul></div>
        </div>
      </section>
      <!-- CLI Options -->
      <section id="cli-options" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.cli.optionsList'))}
        </h2>
        <div class="table-wrapper">
          <table class="api-table">
            <thead>
              <tr>
                <th>
                  ${this.#esc(this.#tr('apiContent.cli.tableOption'))}
                </th>
                <th>
                  ${this.#esc(this.#tr('apiContent.cli.tableCommand'))}
                </th>
                <th>
                  ${this.#esc(this.#tr('apiContent.cli.tableDescription'))}
                </th>
                <th>
                  ${this.#esc(this.#tr('apiContent.cli.tableDefault'))}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
<code>--port</code>                </td>
                <td>
                  dev
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tablePortDesc'))}
                </td>
                <td>
                  5173
                </td>
              </tr>
              <tr>
                <td>
<code>--host</code>                </td>
                <td>
                  dev
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableHostDesc'))}
                </td>
                <td>
                  localhost
                </td>
              </tr>
              <tr>
                <td>
<code>--no-hmr</code>                </td>
                <td>
                  dev
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableNoHmrDesc'))}
                </td>
                <td>
                  enabled
                </td>
              </tr>
              <tr>
                <td>
<code>--watch</code>                </td>
                <td>
                  build, check
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableWatchDesc'))}
                </td>
                <td>
                  disabled
                </td>
              </tr>
              <tr>
                <td>
<code>--sourcemap</code>                </td>
                <td>
                  build
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableSourcemapDesc'))}
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableConfigDependent'))}
                </td>
              </tr>
              <tr>
                <td>
<code>--minify</code>                </td>
                <td>
                  build
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableMinifyDesc'))}
                </td>
                <td>
                  ${this.#esc(this.#tr('apiContent.cli.tableProduction'))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-api-cli'] = CskApiCli;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-cli', CskApiCli]);
} else if (!customElements.get('csk-api-cli')) {
  customElements.define('csk-api-cli', CskApiCli);
}

})();

// ── csk-api-compiler.csk ──
(() => {
"use strict";

class CskApiCompiler extends HTMLElement {
  #_code_compileBasic = "<span class=k>import</span> { compile } <span class=k>from</span> <span class=s>'@aspect/chasket'</span>\n\n<span class=k>const</span> source = <span class=s>`\n&lt;meta&gt;\n  name: my-component\n&lt;/meta&gt;\n&lt;script&gt;\n  state count: number = 0\n&lt;/script&gt;\n&lt;template&gt;\n  &lt;p&gt;{{ count }}&lt;/p&gt;\n&lt;/template&gt;\n`</span>\n\n<span class=k>const</span> result = <span class=f>compile</span>(source, <span class=s>'my-component.csk'</span>, {\n  target: <span class=s>'es2020'</span>\n})\n\n<span class=k>if</span> (result.success) {\n  console.<span class=f>log</span>(result.output)\n}";
  get #code_compileBasic() { return this.#_code_compileBasic; }
  set #code_compileBasic(v) { this.#_code_compileBasic = v; this.#scheduleUpdate(); }
  #_code_compileOptions = "<span class=k>const</span> options = {\n  target: <span class=s>'es2020'</span>,           <span class=cm>// &quot;es2020&quot; | &quot;es2021&quot; | &quot;esnext&quot;</span>\n  bundle: <span class=n>true</span>,               <span class=cm>// embed CSS in JS</span>\n  shadow: <span class=n>false</span>,              <span class=cm>// Shadow DOM or </span>Light DOM\n  sourcemap: <span class=n>true</span>,            <span class=cm>// generate source maps</span>\n  minify: <span class=n>false</span>,              <span class=cm>// enable in production</span>\n  imports: {                  <span class=cm>// external import mapping</span>\n    <span class=s>'lodash'</span>: <span class=s>'./libs/lodash.js'</span>\n  }\n}";
  get #code_compileOptions() { return this.#_code_compileOptions; }
  set #code_compileOptions(v) { this.#_code_compileOptions = v; this.#scheduleUpdate(); }
  #_code_splitBlocks = "<span class=k>import</span> { splitBlocks } <span class=k>from</span> <span class=s>'@aspect/chasket'</span>\n\n<span class=k>const</span> source = <span class=s>`...csk file content...`</span>\n<span class=k>const</span> blocks = <span class=f>splitBlocks</span>(source)\n\nconsole.<span class=f>log</span>(blocks.meta)      <span class=cm>// meta block</span>\nconsole.<span class=f>log</span>(blocks.script)    <span class=cm>// script block</span>\nconsole.<span class=f>log</span>(blocks.template)  <span class=cm>// template block</span>\nconsole.<span class=f>log</span>(blocks.style)     <span class=cm>// style block</span>";
  get #code_splitBlocks() { return this.#_code_splitBlocks; }
  set #code_splitBlocks(v) { this.#_code_splitBlocks = v; this.#scheduleUpdate(); }
  #_code_parseTemplate = "<span class=k>import</span> { parseTemplateNodes } <span class=k>from</span> <span class=s>'@aspect/chasket'</span>\n\n<span class=k>const</span> html = <span class=s>`\n  &lt;div&gt;\n    &lt;p&gt;{{ name }}&lt;/p&gt;\n    &lt;button @click=&quot;handleClick&quot;&gt;Click&lt;/button&gt;\n  &lt;/div&gt;\n`</span>\n\n<span class=k>const</span> ast = <span class=f>parseTemplateNodes</span>(html)\nconsole.<span class=f>log</span>(ast)  <span class=cm>// node syntax tree</span>";
  get #code_parseTemplate() { return this.#_code_parseTemplate; }
  set #code_parseTemplate(v) { this.#_code_parseTemplate = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-api-compiler');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Compiler API -->
      <section id="compiler-api" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.compiler.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.compiler.description'))}
        </p>
        <!-- compile() function -->
        <div id="api-functions" class="subsection">
          <h3 id="compile-fn">
            compile(source, filename, options)
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.compiler.compileFn.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.signature'))}
            </h4>
            <pre><code><span class=f>compile</span>(source: <span class=tp>string</span>, filename: <span class=tp>string</span>, options: CompileOptions): CompileResult</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.parameters'))}
            </h4>
            <ul>
              <li><code>source</code> (string) — ${this.#esc(this.#tr('apiContent.compiler.paramSource'))}</li>
              <li><code>filename</code> (string) — ${this.#esc(this.#tr('apiContent.compiler.paramFilename'))}</li>
              <li><code>options</code> (CompileOptions) — ${this.#esc(this.#tr('apiContent.compiler.paramOptions'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.returnValue'))}
              (CompileResult)
            </h4>
            <ul>
              <li><code>success</code> (boolean) — ${this.#esc(this.#tr('apiContent.compiler.returnSuccess'))}</li>
              <li><code>output</code> (string) — ${this.#esc(this.#tr('apiContent.compiler.returnOutput'))}</li>
              <li><code>dtsOutput</code> (string) — ${this.#esc(this.#tr('apiContent.compiler.returnDts'))}</li>
              <li><code>diagnostics</code> (Diagnostic[]) — ${this.#esc(this.#tr('apiContent.compiler.returnDiagnostics'))}</li>
              <li><code>meta</code> (object) — ${this.#esc(this.#tr('apiContent.compiler.returnMeta'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.example'))}
            </h4>
            <pre><code>${this.#code_compileBasic}</code></pre>
          </div>
        </div>
        <!-- splitBlocks() function -->
        <div class="subsection">
          <h3 id="split-blocks">
            splitBlocks(source)
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.compiler.splitBlocksFn.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.signature'))}
            </h4>
            <pre><code><span class=f>splitBlocks</span>(source: <span class=tp>string</span>): { meta: <span class=tp>string</span>, script: <span class=tp>string</span>, template: <span class=tp>string</span>, style: <span class=tp>string</span> }</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.example'))}
            </h4>
            <pre><code>${this.#code_splitBlocks}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.compiler.purpose'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.compiler.splitBlocksUse1'))}</li><li>${this.#esc(this.#tr('apiContent.compiler.splitBlocksUse2'))}</li><li>${this.#esc(this.#tr('apiContent.compiler.splitBlocksUse3'))}</li></ul></div>
        </div>
        <!-- parseTemplateNodes() function -->
        <div class="subsection">
          <h3 id="parse-template">
            parseTemplateNodes(html)
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.compiler.parseTemplateFn.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.signature'))}
            </h4>
            <pre><code><span class=f>parseTemplateNodes</span>(html: <span class=tp>string</span>): ASTNode[]</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.example'))}
            </h4>
            <pre><code>${this.#code_parseTemplate}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.compiler.astNodeTypes'))}:</strong><ul><li>ElementNode — ${this.#esc(this.#tr('apiContent.compiler.nodeTypeElement'))}</li><li>TextNode — ${this.#esc(this.#tr('apiContent.compiler.nodeTypeText'))}</li><li>CommentNode — ${this.#esc(this.#tr('apiContent.compiler.nodeTypeComment'))}</li><li>DirectiveNode — ${this.#esc(this.#tr('apiContent.compiler.nodeTypeDirective'))}</li></ul></div>
        </div>
        <!-- CompileOptions Object -->
        <div class="subsection">
          <h3>
            CompileOptions
            ${this.#esc(this.#tr('apiContent.compiler.object'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.compiler.compileOptionsDesc'))}
          </p>
          <pre><code>${this.#code_compileOptions}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.compiler.optionDetails'))}:</strong><ul><li><code>target</code> — ${this.#esc(this.#tr('apiContent.compiler.optTarget'))}</li><li><code>bundle</code> — ${this.#esc(this.#tr('apiContent.compiler.optBundle'))}</li><li><code>shadow</code> — ${this.#esc(this.#tr('apiContent.compiler.optShadow'))}</li><li><code>sourcemap</code> — ${this.#esc(this.#tr('apiContent.compiler.optSourcemap'))}</li><li><code>minify</code> — ${this.#esc(this.#tr('apiContent.compiler.optMinify'))}</li><li><code>imports</code> — ${this.#esc(this.#tr('apiContent.compiler.optImports'))}</li></ul></div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Compiler API -->
      <section id="compiler-api" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.compiler.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.compiler.description'))}
        </p>
        <!-- compile() function -->
        <div id="api-functions" class="subsection">
          <h3 id="compile-fn">
            compile(source, filename, options)
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.compiler.compileFn.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.signature'))}
            </h4>
            <pre><code><span class=f>compile</span>(source: <span class=tp>string</span>, filename: <span class=tp>string</span>, options: CompileOptions): CompileResult</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.parameters'))}
            </h4>
            <ul>
              <li><code>source</code> (string) — ${this.#esc(this.#tr('apiContent.compiler.paramSource'))}</li>
              <li><code>filename</code> (string) — ${this.#esc(this.#tr('apiContent.compiler.paramFilename'))}</li>
              <li><code>options</code> (CompileOptions) — ${this.#esc(this.#tr('apiContent.compiler.paramOptions'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.returnValue'))}
              (CompileResult)
            </h4>
            <ul>
              <li><code>success</code> (boolean) — ${this.#esc(this.#tr('apiContent.compiler.returnSuccess'))}</li>
              <li><code>output</code> (string) — ${this.#esc(this.#tr('apiContent.compiler.returnOutput'))}</li>
              <li><code>dtsOutput</code> (string) — ${this.#esc(this.#tr('apiContent.compiler.returnDts'))}</li>
              <li><code>diagnostics</code> (Diagnostic[]) — ${this.#esc(this.#tr('apiContent.compiler.returnDiagnostics'))}</li>
              <li><code>meta</code> (object) — ${this.#esc(this.#tr('apiContent.compiler.returnMeta'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.example'))}
            </h4>
            <pre><code>${this.#code_compileBasic}</code></pre>
          </div>
        </div>
        <!-- splitBlocks() function -->
        <div class="subsection">
          <h3 id="split-blocks">
            splitBlocks(source)
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.compiler.splitBlocksFn.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.signature'))}
            </h4>
            <pre><code><span class=f>splitBlocks</span>(source: <span class=tp>string</span>): { meta: <span class=tp>string</span>, script: <span class=tp>string</span>, template: <span class=tp>string</span>, style: <span class=tp>string</span> }</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.example'))}
            </h4>
            <pre><code>${this.#code_splitBlocks}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.compiler.purpose'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.compiler.splitBlocksUse1'))}</li><li>${this.#esc(this.#tr('apiContent.compiler.splitBlocksUse2'))}</li><li>${this.#esc(this.#tr('apiContent.compiler.splitBlocksUse3'))}</li></ul></div>
        </div>
        <!-- parseTemplateNodes() function -->
        <div class="subsection">
          <h3 id="parse-template">
            parseTemplateNodes(html)
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.compiler.parseTemplateFn.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.signature'))}
            </h4>
            <pre><code><span class=f>parseTemplateNodes</span>(html: <span class=tp>string</span>): ASTNode[]</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.compiler.example'))}
            </h4>
            <pre><code>${this.#code_parseTemplate}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.compiler.astNodeTypes'))}:</strong><ul><li>ElementNode — ${this.#esc(this.#tr('apiContent.compiler.nodeTypeElement'))}</li><li>TextNode — ${this.#esc(this.#tr('apiContent.compiler.nodeTypeText'))}</li><li>CommentNode — ${this.#esc(this.#tr('apiContent.compiler.nodeTypeComment'))}</li><li>DirectiveNode — ${this.#esc(this.#tr('apiContent.compiler.nodeTypeDirective'))}</li></ul></div>
        </div>
        <!-- CompileOptions Object -->
        <div class="subsection">
          <h3>
            CompileOptions
            ${this.#esc(this.#tr('apiContent.compiler.object'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.compiler.compileOptionsDesc'))}
          </p>
          <pre><code>${this.#code_compileOptions}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.compiler.optionDetails'))}:</strong><ul><li><code>target</code> — ${this.#esc(this.#tr('apiContent.compiler.optTarget'))}</li><li><code>bundle</code> — ${this.#esc(this.#tr('apiContent.compiler.optBundle'))}</li><li><code>shadow</code> — ${this.#esc(this.#tr('apiContent.compiler.optShadow'))}</li><li><code>sourcemap</code> — ${this.#esc(this.#tr('apiContent.compiler.optSourcemap'))}</li><li><code>minify</code> — ${this.#esc(this.#tr('apiContent.compiler.optMinify'))}</li><li><code>imports</code> — ${this.#esc(this.#tr('apiContent.compiler.optImports'))}</li></ul></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-api-compiler'] = CskApiCompiler;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-compiler', CskApiCompiler]);
} else if (!customElements.get('csk-api-compiler')) {
  customElements.define('csk-api-compiler', CskApiCompiler);
}

})();

// ── csk-api-config.csk ──
(() => {
"use strict";

class CskApiConfig extends HTMLElement {
  #_code_configBasic = "{\n  <span class=s>&quot;src&quot;</span>: <span class=s>&quot;src&quot;</span>,\n  <span class=s>&quot;outdir&quot;</span>: <span class=s>&quot;dist&quot;</span>,\n  <span class=s>&quot;target&quot;</span>: <span class=s>&quot;es2020&quot;</span>,\n  <span class=s>&quot;bundle&quot;</span>: <span class=n>true</span>,\n  <span class=s>&quot;shadow&quot;</span>: <span class=n>true</span>,\n  <span class=s>&quot;sourcemap&quot;</span>: <span class=n>true</span>,\n  <span class=s>&quot;minify&quot;</span>: <span class=n>true</span>\n}";
  get #code_configBasic() { return this.#_code_configBasic; }
  set #code_configBasic(v) { this.#_code_configBasic = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-api-config');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Config File -->
      <section id="config-file" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.config.title'))}
          (chasket.config.json)
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.config.description'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('apiContent.config.properties'))}
          </h3>
          <div class="property">
            <h4>
<code>src</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.srcDesc'))}
            </p>
            <pre><code><span class=s>"src"</span>: <span class=s>"src"</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>outdir</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.outdirDesc'))}
            </p>
            <pre><code><span class=s>"outdir"</span>: <span class=s>"dist"</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>target</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.targetDesc'))}
            </p>
            <pre><code><span class=s>"target"</span>: <span class=s>"es2020"</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>bundle</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.bundleDesc'))}
            </p>
            <pre><code><span class=s>"bundle"</span>: <span class=n>true</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>shadow</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.shadowDesc'))}
            </p>
            <pre><code><span class=s>"shadow"</span>: <span class=n>true</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>sourcemap</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.sourcemapDesc'))}
            </p>
            <pre><code><span class=s>"sourcemap"</span>: <span class=n>true</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>minify</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.minifyDesc'))}
            </p>
            <pre><code><span class=s>"minify"</span>: <span class=n>true</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>imports</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.importsDesc'))}
            </p>
            <pre><code><span class=s>"imports"</span>: {
  <span class=s>"@"</span>: <span class=s>"./src"</span>,
  <span class=s>"utils"</span>: <span class=s>"./src/utils"</span>
}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.config.exampleTitle'))}
            </h4>
            <pre><code>${this.#code_configBasic}</code></pre>
          </div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Config File -->
      <section id="config-file" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.config.title'))}
          (chasket.config.json)
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.config.description'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('apiContent.config.properties'))}
          </h3>
          <div class="property">
            <h4>
<code>src</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.srcDesc'))}
            </p>
            <pre><code><span class=s>"src"</span>: <span class=s>"src"</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>outdir</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.outdirDesc'))}
            </p>
            <pre><code><span class=s>"outdir"</span>: <span class=s>"dist"</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>target</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.targetDesc'))}
            </p>
            <pre><code><span class=s>"target"</span>: <span class=s>"es2020"</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>bundle</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.bundleDesc'))}
            </p>
            <pre><code><span class=s>"bundle"</span>: <span class=n>true</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>shadow</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.shadowDesc'))}
            </p>
            <pre><code><span class=s>"shadow"</span>: <span class=n>true</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>sourcemap</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.sourcemapDesc'))}
            </p>
            <pre><code><span class=s>"sourcemap"</span>: <span class=n>true</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>minify</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.minifyDesc'))}
            </p>
            <pre><code><span class=s>"minify"</span>: <span class=n>true</span></code></pre>
          </div>
          <div class="property">
            <h4>
<code>imports</code>            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.config.importsDesc'))}
            </p>
            <pre><code><span class=s>"imports"</span>: {
  <span class=s>"@"</span>: <span class=s>"./src"</span>,
  <span class=s>"utils"</span>: <span class=s>"./src/utils"</span>
}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.config.exampleTitle'))}
            </h4>
            <pre><code>${this.#code_configBasic}</code></pre>
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-api-config'] = CskApiConfig;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-config', CskApiConfig]);
} else if (!customElements.get('csk-api-config')) {
  customElements.define('csk-api-config', CskApiConfig);
}

})();

// ── csk-api-diagnostics.csk ──
(() => {
"use strict";

class CskApiDiagnostics extends HTMLElement {
  #_code_diagnostic_e0001 = "<span class=cm>&lt;!-- csk-page-api.csk --&gt;</span>\n<span class=t>&lt;meta</span><span class=t>&gt;</span>\n  name: my-component\n<span class=t>&lt;/meta</span><span class=t>&gt;</span>\n<span class=t>&lt;script</span><span class=t>&gt;</span>\n  <span class=k>state</span> count: <span class=tp>number</span> = <span class=n>0</span>\n<span class=t>&lt;/script</span><span class=t>&gt;</span>\n<span class=cm>&lt;!-- no template block --&gt;</span>\n\n<span class=cm>&lt;!-- fix: add template block --&gt;</span>\n<span class=t>&lt;template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ count }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=t>&lt;/template</span><span class=t>&gt;</span>";
  get #code_diagnostic_e0001() { return this.#_code_diagnostic_e0001; }
  set #code_diagnostic_e0001(v) { this.#_code_diagnostic_e0001 = v; this.#scheduleUpdate(); }
  #_code_diagnostic_e0002 = "<span class=cm>&lt;!-- invalid: no hyphens --&gt;</span>\n<span class=t>&lt;meta</span><span class=t>&gt;</span>\n  name: MyComponent\n<span class=t>&lt;/meta</span><span class=t>&gt;</span>\n\n<span class=cm>&lt;!-- fix: use kebab-case --&gt;</span>\n<span class=t>&lt;meta</span><span class=t>&gt;</span>\n  name: my-component\n<span class=t>&lt;/meta</span><span class=t>&gt;</span>";
  get #code_diagnostic_e0002() { return this.#_code_diagnostic_e0002; }
  set #code_diagnostic_e0002(v) { this.#_code_diagnostic_e0002 = v; this.#scheduleUpdate(); }
  #_code_diagnostic_e0003 = "<span class=k>state</span> count: <span class=tp>number</span> = <span class=n>0</span>\n<span class=k>state</span> result: <span class=tp>string</span> = count + <span class=n>10</span>  <span class=cm>// error: assigning number+number to string</span>\n\n<span class=cm>// fix:</span>\n<span class=k>state</span> result: <span class=tp>number</span> = count + <span class=n>10</span>\n<span class=cm>// or</span>\n<span class=k>state</span> result: <span class=tp>string</span> = (count + <span class=n>10</span>).<span class=f>toString</span>()";
  get #code_diagnostic_e0003() { return this.#_code_diagnostic_e0003; }
  set #code_diagnostic_e0003(v) { this.#_code_diagnostic_e0003 = v; this.#scheduleUpdate(); }
  #_code_diagnostic_w0101 = "<span class=k>state</span> count: <span class=tp>number</span> = <span class=n>0</span>   <span class=cm>// warning: unused</span>\n<span class=k>state</span> name: <span class=tp>string</span> = <span class=s>'John'</span>\n\n<span class=t>&lt;template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ name }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=t>&lt;/template</span><span class=t>&gt;</span>\n\n<span class=cm>// fix: use or remove count</span>";
  get #code_diagnostic_w0101() { return this.#_code_diagnostic_w0101; }
  set #code_diagnostic_w0101(v) { this.#_code_diagnostic_w0101 = v; this.#scheduleUpdate(); }
  #_code_diagnostic_w0201 = "<span class=cm>&lt;!-- dangerous: inserting user input as HTML --&gt;</span>\n<span class=t>&lt;div</span> @html=\"userContent\"<span class=t>&gt;</span><span class=t>&lt;/div</span><span class=t>&gt;</span>\n\n<span class=cm>&lt;!-- safe: auto-escaped --&gt;</span>\n<span class=t>&lt;div</span><span class=t>&gt;</span><span class=i>{{ userContent }}</span><span class=t>&lt;/div</span><span class=t>&gt;</span>\n\n<span class=cm>&lt;!-- fix: use only trusted HTML --&gt;</span>\n<span class=t>&lt;div</span> @html=\"sanitize(userContent)\"<span class=t>&gt;</span><span class=t>&lt;/div</span><span class=t>&gt;</span>";
  get #code_diagnostic_w0201() { return this.#_code_diagnostic_w0201; }
  set #code_diagnostic_w0201(v) { this.#_code_diagnostic_w0201 = v; this.#scheduleUpdate(); }
  #_code_diagnostic_w0202 = "<span class=cm>&lt;!-- dangerous: dynamic URL injection --&gt;</span>\n<span class=t>&lt;a</span> :href=\"'https://' + userInput\"<span class=t>&gt;</span>Link<span class=t>&lt;/a</span><span class=t>&gt;</span>\n\n<span class=cm>&lt;!-- fix: URL validation --&gt;</span>\n<span class=t>&lt;a</span> :href=\"isValidUrl(userInput) ? userInput : '#'\"<span class=t>&gt;</span>Link<span class=t>&lt;/a</span><span class=t>&gt;</span>";
  get #code_diagnostic_w0202() { return this.#_code_diagnostic_w0202; }
  set #code_diagnostic_w0202(v) { this.#_code_diagnostic_w0202 = v; this.#scheduleUpdate(); }
  #_code_diagnostic_w0203 = "<span class=cm>&lt;!-- duplicate ID warning --&gt;</span>\n<span class=t>&lt;div</span> id=\"header\"<span class=t>&gt;</span><span class=t>&lt;/div</span><span class=t>&gt;</span>\n<span class=t>&lt;div</span> id=\"header\"<span class=t>&gt;</span><span class=t>&lt;/div</span><span class=t>&gt;</span>  <span class=cm>&lt;!-- warning --&gt;</span>\n\n<span class=cm>&lt;!-- fix: use unique IDs --&gt;</span>\n<span class=t>&lt;div</span> id=\"header\"<span class=t>&gt;</span><span class=t>&lt;/div</span><span class=t>&gt;</span>\n<span class=t>&lt;div</span> id=\"main\"<span class=t>&gt;</span><span class=t>&lt;/div</span><span class=t>&gt;</span>";
  get #code_diagnostic_w0203() { return this.#_code_diagnostic_w0203; }
  set #code_diagnostic_w0203(v) { this.#_code_diagnostic_w0203 = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-api-diagnostics');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Diagnostic Messages -->
      <section id="diagnostics" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.diagnostics.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.diagnostics.description'))}
        </p>
      </section>
      <!-- Error Codes -->
      <section id="error-codes" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.diagnostics.errorCodes'))}
          (E)
        </h2>
        <div id="e0001" class="subsection">
          <h3>
            E0001:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0001.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0001.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_e0001}</code></pre>
          </div>
        </div>
        <div id="e0002" class="subsection">
          <h3>
            E0002:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0002.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0002.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_e0002}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.kebabCaseConvention'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.kebabRule1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.kebabRule2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.kebabRule3'))}</li></ul></div>
        </div>
        <div id="e0003" class="subsection">
          <h3>
            E0003:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0003.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0003.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_e0003}</code></pre>
          </div>
        </div>
        <div id="e0004" class="subsection">
          <h3>
            E0004:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0004.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0004.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.diagnostics.e0004.fixDescription'))}
            </p>
          </div>
        </div>
        <div id="e0301" class="subsection">
          <h3>
            E0301:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0301.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0301.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.diagnostics.e0301.fixDescription'))}
            </p>
          </div>
        </div>
        <div id="e0302" class="subsection">
          <h3>
            E0302:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0302.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0302.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.diagnostics.e0302.fixDescription'))}
            </p>
          </div>
        </div>
      </section>
      <!-- Warning Codes -->
      <section id="warning-codes" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.diagnostics.warningCodes'))}
          (W)
        </h2>
        <div id="w0101" class="subsection">
          <h3>
            W0101:
            ${this.#esc(this.#tr('apiContent.diagnostics.w0101.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.w0101.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_w0101}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.approaches'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.w0101.approach1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0101.approach2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0101.approach3'))}</li></ul></div>
        </div>
        <div id="w0201" class="subsection">
          <h3>
            W0201:
            ${this.#esc(this.#tr('apiContent.diagnostics.w0201.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.w0201.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_w0201}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.securityMeasures'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.w0201.measure1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0201.measure2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0201.measure3'))}</li></ul></div>
        </div>
        <div id="w0202" class="subsection">
          <h3>
            W0202:
            ${this.#esc(this.#tr('apiContent.diagnostics.w0202.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.w0202.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_w0202}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.countermeasures'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.w0202.measure1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0202.measure2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0202.measure3'))}</li></ul></div>
        </div>
        <div id="w0203" class="subsection">
          <h3>
            W0203:
            ${this.#esc(this.#tr('apiContent.diagnostics.w0203.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.w0203.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_w0203}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.bestPractices'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.w0203.practice1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0203.practice2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0203.practice3'))}</li></ul></div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Diagnostic Messages -->
      <section id="diagnostics" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.diagnostics.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.diagnostics.description'))}
        </p>
      </section>
      <!-- Error Codes -->
      <section id="error-codes" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.diagnostics.errorCodes'))}
          (E)
        </h2>
        <div id="e0001" class="subsection">
          <h3>
            E0001:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0001.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0001.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_e0001}</code></pre>
          </div>
        </div>
        <div id="e0002" class="subsection">
          <h3>
            E0002:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0002.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0002.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_e0002}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.kebabCaseConvention'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.kebabRule1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.kebabRule2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.kebabRule3'))}</li></ul></div>
        </div>
        <div id="e0003" class="subsection">
          <h3>
            E0003:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0003.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0003.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_e0003}</code></pre>
          </div>
        </div>
        <div id="e0004" class="subsection">
          <h3>
            E0004:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0004.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0004.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.diagnostics.e0004.fixDescription'))}
            </p>
          </div>
        </div>
        <div id="e0301" class="subsection">
          <h3>
            E0301:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0301.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0301.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.diagnostics.e0301.fixDescription'))}
            </p>
          </div>
        </div>
        <div id="e0302" class="subsection">
          <h3>
            E0302:
            ${this.#esc(this.#tr('apiContent.diagnostics.e0302.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.e0302.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.diagnostics.e0302.fixDescription'))}
            </p>
          </div>
        </div>
      </section>
      <!-- Warning Codes -->
      <section id="warning-codes" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.diagnostics.warningCodes'))}
          (W)
        </h2>
        <div id="w0101" class="subsection">
          <h3>
            W0101:
            ${this.#esc(this.#tr('apiContent.diagnostics.w0101.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.w0101.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_w0101}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.approaches'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.w0101.approach1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0101.approach2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0101.approach3'))}</li></ul></div>
        </div>
        <div id="w0201" class="subsection">
          <h3>
            W0201:
            ${this.#esc(this.#tr('apiContent.diagnostics.w0201.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.w0201.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_w0201}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.securityMeasures'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.w0201.measure1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0201.measure2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0201.measure3'))}</li></ul></div>
        </div>
        <div id="w0202" class="subsection">
          <h3>
            W0202:
            ${this.#esc(this.#tr('apiContent.diagnostics.w0202.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.w0202.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_w0202}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.countermeasures'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.w0202.measure1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0202.measure2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0202.measure3'))}</li></ul></div>
        </div>
        <div id="w0203" class="subsection">
          <h3>
            W0203:
            ${this.#esc(this.#tr('apiContent.diagnostics.w0203.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.diagnostics.w0203.description'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.diagnostics.fixMethod'))}
            </h4>
            <pre><code>${this.#code_diagnostic_w0203}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.diagnostics.bestPractices'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.diagnostics.w0203.practice1'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0203.practice2'))}</li><li>${this.#esc(this.#tr('apiContent.diagnostics.w0203.practice3'))}</li></ul></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-api-diagnostics'] = CskApiDiagnostics;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-diagnostics', CskApiDiagnostics]);
} else if (!customElements.get('csk-api-diagnostics')) {
  customElements.define('csk-api-diagnostics', CskApiDiagnostics);
}

})();

// ── csk-api-ecosystem.csk ──
(() => {
"use strict";

class CskApiEcosystem extends HTMLElement {
  #_code_router = "<span class=k>import</span> { createRouter } <span class=k>from</span> <span class=s>'@aspect/chasket-router'</span>\n\n<span class=k>const</span> router = <span class=f>createRouter</span>([\n  { path: <span class=s>'/'</span>, component: Home },\n  { path: <span class=s>'/about'</span>, component: About },\n  { path: <span class=s>'/posts/:id'</span>, component: PostDetail }\n])\n\nrouter.<span class=f>push</span>(<span class=s>'/'</span>)      <span class=cm>// navigate</span>\n<span class=k>const</span> route = router.<span class=f>current</span>()  <span class=cm>// current route</span>";
  get #code_router() { return this.#_code_router; }
  set #code_router(v) { this.#_code_router = v; this.#scheduleUpdate(); }
  #_code_store = "<span class=k>import</span> { createStore } <span class=k>from</span> <span class=s>'@aspect/chasket-store'</span>\n\n<span class=k>const</span> store = <span class=f>createStore</span>({\n  <span class=k>state</span>: { count: <span class=n>0</span> },\n  actions: {\n    <span class=f>increment</span>(<span class=k>state</span>) { <span class=k>state</span>.count++ }\n  },\n  getters: {\n    doubled: (<span class=k>state</span>) => <span class=k>state</span>.count * <span class=n>2</span>\n  }\n})\n\nstore.<span class=f>commit</span>(<span class=s>'increment'</span>)\nconsole.<span class=f>log</span>(store.getters.doubled)";
  get #code_store() { return this.#_code_store; }
  set #code_store(v) { this.#_code_store = v; this.#scheduleUpdate(); }
  #_code_ssr = "<span class=k>import</span> { renderToString, renderPage } <span class=k>from</span> <span class=s>'@aspect/chasket-ssr'</span>\n\n<span class=cm>// render component to HTM</span>L string\n<span class=k>const</span> html = <span class=k>await</span> <span class=f>renderToString</span>(MyComponent, { prop1: <span class=s>'value'</span> })\n\n<span class=cm>// render full page (with hydration)</span>\n<span class=k>const</span> pageHtml = <span class=k>await</span> <span class=f>renderPage</span>(App, options)";
  get #code_ssr() { return this.#_code_ssr; }
  set #code_ssr(v) { this.#_code_ssr = v; this.#scheduleUpdate(); }
  #_code_ui_components = "<span class=t>&lt;fl-button</span> variant=\"primary\" @click=\"handleClick\"<span class=t>&gt;</span>\n  Click me\n<span class=t>&lt;/fl-button</span><span class=t>&gt;</span>\n\n<span class=t>&lt;fl-input</span> :bind=\"username\" placeholder=\"Enter username\" <span class=t>/&gt;</span>\n\n<span class=t>&lt;fl-card</span><span class=t>&gt;</span>\n  <span class=t>&lt;fl-card-header</span><span class=t>&gt;</span>Title<span class=t>&lt;/fl-card-header</span><span class=t>&gt;</span>\n  <span class=t>&lt;fl-card-body</span><span class=t>&gt;</span>Content<span class=t>&lt;/fl-card-body</span><span class=t>&gt;</span>\n<span class=t>&lt;/fl-card</span><span class=t>&gt;</span>\n\n<span class=t>&lt;fl-dialog</span> :open=\"showDialog\" @close=\"showDialog = false\"<span class=t>&gt;</span>\n  Dialog content\n<span class=t>&lt;/fl-dialog</span><span class=t>&gt;</span>";
  get #code_ui_components() { return this.#_code_ui_components; }
  set #code_ui_components(v) { this.#_code_ui_components = v; this.#scheduleUpdate(); }
  #_code_compilation_output = "<span class=cm>// class generated by Chasket</span>\n<span class=k>export</span> <span class=k>default</span> <span class=k>class</span> MyComponent <span class=k>extends</span> HTMLElement {\n  <span class=cm>#state = {}</span>\n  <span class=cm>#render() { /* render template */ }</span>\n  <span class=cm>#update() { /* detect changes */ }</span>\n  <span class=cm>#patch() { /* update DOM */ }</span>\n  \n  get <span class=f>count</span>() { <span class=k>return</span> this.<span class=cm>#state.count }</span>\n  set <span class=f>count</span>(value) {\n    this.<span class=cm>#state.count = value</span>\n    this.<span class=cm>#scheduleUpdate()</span>\n  }\n}";
  get #code_compilation_output() { return this.#_code_compilation_output; }
  set #code_compilation_output(v) { this.#_code_compilation_output = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-api-ecosystem');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Ecosystem -->
      <section id="ecosystem" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.ecosystem.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.ecosystem.description'))}
        </p>
      </section>
      <!-- Official Packages -->
      <section id="official-packages" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.ecosystem.officialPackages'))}
        </h2>
        <div id="router" class="subsection">
          <h3>
            @aspect/chasket-router —
            ${this.#esc(this.#tr('apiContent.ecosystem.routerTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.routerDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.mainFeatures'))}
            </h4>
            <ul>
              <li><code>createRouter(routes)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature1'))}</li>
              <li><code>router.push(path)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature2'))}</li>
              <li><code>router.current()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature3'))}</li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature4'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature5'))}
              </li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.usageExample'))}
            </h4>
            <pre><code>${this.#code_router}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-router</code></pre>
</div>
        </div>
        <div id="store" class="subsection">
          <h3>
            @aspect/chasket-store —
            ${this.#esc(this.#tr('apiContent.ecosystem.storeTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.storeDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.mainFeatures'))}
            </h4>
            <ul>
              <li><code>createStore(definition)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature1'))}</li>
              <li><code>state</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature2'))}</li>
              <li><code>actions</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature3'))}</li>
              <li><code>getters</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature4'))}</li>
              <li><code>mutations</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature5'))}</li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature6'))}
              </li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.usageExample'))}
            </h4>
            <pre><code>${this.#code_store}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-store</code></pre>
</div>
        </div>
        <div id="ssr" class="subsection">
          <h3>
            @aspect/chasket-ssr —
            ${this.#esc(this.#tr('apiContent.ecosystem.ssrTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.ssrDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.mainFeatures'))}
            </h4>
            <ul>
              <li><code>renderToString(component, props)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.ssrFeature1'))}</li>
              <li><code>renderPage(app, options)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.ssrFeature2'))}</li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.ssrFeature3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.ssrFeature4'))}
              </li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.usageExample'))}
            </h4>
            <pre><code>${this.#code_ssr}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-ssr</code></pre>
</div>
        </div>
        <div id="ui" class="subsection">
          <h3>
            @aspect/chasket-ui —
            ${this.#esc(this.#tr('apiContent.ecosystem.uiTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.uiDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.providedComponents'))}
            </h4>
            <ul>
              <li><code>&lt;fl-button&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp1'))}</li>
              <li><code>&lt;fl-input&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp2'))}</li>
              <li><code>&lt;fl-select&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp3'))}</li>
              <li><code>&lt;fl-card&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp4'))}</li>
              <li><code>&lt;fl-dialog&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp5'))}</li>
              <li><code>&lt;fl-badge&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp6'))}</li>
              <li><code>&lt;fl-alert&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp7'))}</li>
              <li><code>&lt;fl-tabs&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp8'))}</li>
              <li><code>&lt;fl-spinner&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp9'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.usageExample'))}
            </h4>
            <pre><code>${this.#code_ui_components}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-ui</code></pre>
</div>
        </div>
        <div id="vite" class="subsection">
          <h3>
            vite-plugin-chasket —
            ${this.#esc(this.#tr('apiContent.ecosystem.viteTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.viteDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.features'))}
            </h4>
            <ul>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.viteFeature1'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.viteFeature2'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.viteFeature3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.viteFeature4'))}
              </li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install vite-plugin-chasket</code></pre>
</div>
        </div>
        <div id="lsp" class="subsection">
          <h3>
            @aspect/chasket-lsp —
            ${this.#esc(this.#tr('apiContent.ecosystem.lspTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.lspDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.features'))}
            </h4>
            <ul>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature1'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature2'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature4'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature5'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature6'))}
              </li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-lsp</code></pre>
</div>
        </div>
        <div id="vscode" class="subsection">
          <h3>
            @aspect/chasket-vscode —
            ${this.#esc(this.#tr('apiContent.ecosystem.vscodeTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.vscodeDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.features'))}
            </h4>
            <ul>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature1'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature2'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature4'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature5'))}
              </li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><p>${this.#esc(this.#tr('apiContent.ecosystem.vscodeInstallDesc'))}</p></div>
        </div>
      </section>
      <!-- Compilation Output -->
      <section id="compilation-output" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.ecosystem.compilationOutput'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.ecosystem.compilationOutputDesc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('apiContent.ecosystem.generatedClassStructure'))}
          </h3>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.basicClassStructure'))}
            </h4>
            <pre><code>${this.#code_compilation_output}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.mainMethods'))}
            </h4>
            <ul>
              <li><code>#render()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.methodRender'))}</li>
              <li><code>#update()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.methodUpdate'))}</li>
              <li><code>#patch()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.methodPatch'))}</li>
              <li><code>#scheduleUpdate()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.methodSchedule'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.reactivityImplementation'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.ecosystem.stateChangeFlow'))}
              :
            </p>
            <ol>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep1'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep2'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep4'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep5'))}
              </li>
            </ol>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.eventListenerManagement'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.ecosystem.eventBindingDesc'))}
            </p>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.performanceOptimization'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.ecosystem.optDomDiffing'))}</li><li>${this.#esc(this.#tr('apiContent.ecosystem.optBatchProcessing'))}</li><li>${this.#esc(this.#tr('apiContent.ecosystem.optReduceReflowRepaint'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('apiContent.ecosystem.generatedFiles'))}
          </h3>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.distDirectoryStructure'))}
            </h4>
            <pre><code>dist/
  ├── components/
  │   ├── csk-page-api.js
  │   ├── csk-page-api.js.map
  │   └── ...
  ├── index.js           # ${this.#esc(this.#tr('apiContent.ecosystem.mainBundle'))}
  ├── index.d.ts         # ${this.#esc(this.#tr('apiContent.ecosystem.typeDefinitions'))}
  └── index.js.map       # ${this.#esc(this.#tr('apiContent.ecosystem.sourceMap'))}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.fileDescriptions'))}
            </h4>
            <ul>
              <li><code>*.js</code> — ${this.#esc(this.#tr('apiContent.ecosystem.fileDesc1'))}</li>
              <li><code>*.js.map</code> — ${this.#esc(this.#tr('apiContent.ecosystem.fileDesc2'))}</li>
              <li><code>*.d.ts</code> — ${this.#esc(this.#tr('apiContent.ecosystem.fileDesc3'))}</li>
              <li><code>index.js</code> — ${this.#esc(this.#tr('apiContent.ecosystem.fileDesc4'))}</li>
            </ul>
          </div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Ecosystem -->
      <section id="ecosystem" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.ecosystem.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.ecosystem.description'))}
        </p>
      </section>
      <!-- Official Packages -->
      <section id="official-packages" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.ecosystem.officialPackages'))}
        </h2>
        <div id="router" class="subsection">
          <h3>
            @aspect/chasket-router —
            ${this.#esc(this.#tr('apiContent.ecosystem.routerTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.routerDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.mainFeatures'))}
            </h4>
            <ul>
              <li><code>createRouter(routes)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature1'))}</li>
              <li><code>router.push(path)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature2'))}</li>
              <li><code>router.current()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature3'))}</li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature4'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.routerFeature5'))}
              </li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.usageExample'))}
            </h4>
            <pre><code>${this.#code_router}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-router</code></pre>
</div>
        </div>
        <div id="store" class="subsection">
          <h3>
            @aspect/chasket-store —
            ${this.#esc(this.#tr('apiContent.ecosystem.storeTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.storeDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.mainFeatures'))}
            </h4>
            <ul>
              <li><code>createStore(definition)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature1'))}</li>
              <li><code>state</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature2'))}</li>
              <li><code>actions</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature3'))}</li>
              <li><code>getters</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature4'))}</li>
              <li><code>mutations</code> — ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature5'))}</li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.storeFeature6'))}
              </li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.usageExample'))}
            </h4>
            <pre><code>${this.#code_store}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-store</code></pre>
</div>
        </div>
        <div id="ssr" class="subsection">
          <h3>
            @aspect/chasket-ssr —
            ${this.#esc(this.#tr('apiContent.ecosystem.ssrTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.ssrDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.mainFeatures'))}
            </h4>
            <ul>
              <li><code>renderToString(component, props)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.ssrFeature1'))}</li>
              <li><code>renderPage(app, options)</code> — ${this.#esc(this.#tr('apiContent.ecosystem.ssrFeature2'))}</li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.ssrFeature3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.ssrFeature4'))}
              </li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.usageExample'))}
            </h4>
            <pre><code>${this.#code_ssr}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-ssr</code></pre>
</div>
        </div>
        <div id="ui" class="subsection">
          <h3>
            @aspect/chasket-ui —
            ${this.#esc(this.#tr('apiContent.ecosystem.uiTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.uiDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.providedComponents'))}
            </h4>
            <ul>
              <li><code>&lt;fl-button&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp1'))}</li>
              <li><code>&lt;fl-input&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp2'))}</li>
              <li><code>&lt;fl-select&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp3'))}</li>
              <li><code>&lt;fl-card&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp4'))}</li>
              <li><code>&lt;fl-dialog&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp5'))}</li>
              <li><code>&lt;fl-badge&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp6'))}</li>
              <li><code>&lt;fl-alert&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp7'))}</li>
              <li><code>&lt;fl-tabs&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp8'))}</li>
              <li><code>&lt;fl-spinner&gt;</code> — ${this.#esc(this.#tr('apiContent.ecosystem.uiComp9'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.usageExample'))}
            </h4>
            <pre><code>${this.#code_ui_components}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-ui</code></pre>
</div>
        </div>
        <div id="vite" class="subsection">
          <h3>
            vite-plugin-chasket —
            ${this.#esc(this.#tr('apiContent.ecosystem.viteTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.viteDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.features'))}
            </h4>
            <ul>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.viteFeature1'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.viteFeature2'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.viteFeature3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.viteFeature4'))}
              </li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install vite-plugin-chasket</code></pre>
</div>
        </div>
        <div id="lsp" class="subsection">
          <h3>
            @aspect/chasket-lsp —
            ${this.#esc(this.#tr('apiContent.ecosystem.lspTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.lspDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.features'))}
            </h4>
            <ul>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature1'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature2'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature4'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature5'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.lspFeature6'))}
              </li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @aspect/chasket-lsp</code></pre>
</div>
        </div>
        <div id="vscode" class="subsection">
          <h3>
            @aspect/chasket-vscode —
            ${this.#esc(this.#tr('apiContent.ecosystem.vscodeTitle'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('apiContent.ecosystem.vscodeDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.features'))}
            </h4>
            <ul>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature1'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature2'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature4'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.vscodeFeature5'))}
              </li>
            </ul>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><p>${this.#esc(this.#tr('apiContent.ecosystem.vscodeInstallDesc'))}</p></div>
        </div>
      </section>
      <!-- Compilation Output -->
      <section id="compilation-output" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.ecosystem.compilationOutput'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.ecosystem.compilationOutputDesc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('apiContent.ecosystem.generatedClassStructure'))}
          </h3>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.basicClassStructure'))}
            </h4>
            <pre><code>${this.#code_compilation_output}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.mainMethods'))}
            </h4>
            <ul>
              <li><code>#render()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.methodRender'))}</li>
              <li><code>#update()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.methodUpdate'))}</li>
              <li><code>#patch()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.methodPatch'))}</li>
              <li><code>#scheduleUpdate()</code> — ${this.#esc(this.#tr('apiContent.ecosystem.methodSchedule'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.reactivityImplementation'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.ecosystem.stateChangeFlow'))}
              :
            </p>
            <ol>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep1'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep2'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep3'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep4'))}
              </li>
              <li>
                ${this.#esc(this.#tr('apiContent.ecosystem.flowStep5'))}
              </li>
            </ol>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.eventListenerManagement'))}
            </h4>
            <p>
              ${this.#esc(this.#tr('apiContent.ecosystem.eventBindingDesc'))}
            </p>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.performanceOptimization'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.ecosystem.optDomDiffing'))}</li><li>${this.#esc(this.#tr('apiContent.ecosystem.optBatchProcessing'))}</li><li>${this.#esc(this.#tr('apiContent.ecosystem.optReduceReflowRepaint'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('apiContent.ecosystem.generatedFiles'))}
          </h3>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.distDirectoryStructure'))}
            </h4>
            <pre><code>dist/
  ├── components/
  │   ├── csk-page-api.js
  │   ├── csk-page-api.js.map
  │   └── ...
  ├── index.js           # ${this.#esc(this.#tr('apiContent.ecosystem.mainBundle'))}
  ├── index.d.ts         # ${this.#esc(this.#tr('apiContent.ecosystem.typeDefinitions'))}
  └── index.js.map       # ${this.#esc(this.#tr('apiContent.ecosystem.sourceMap'))}</code></pre>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.ecosystem.fileDescriptions'))}
            </h4>
            <ul>
              <li><code>*.js</code> — ${this.#esc(this.#tr('apiContent.ecosystem.fileDesc1'))}</li>
              <li><code>*.js.map</code> — ${this.#esc(this.#tr('apiContent.ecosystem.fileDesc2'))}</li>
              <li><code>*.d.ts</code> — ${this.#esc(this.#tr('apiContent.ecosystem.fileDesc3'))}</li>
              <li><code>index.js</code> — ${this.#esc(this.#tr('apiContent.ecosystem.fileDesc4'))}</li>
            </ul>
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-api-ecosystem'] = CskApiEcosystem;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-ecosystem', CskApiEcosystem]);
} else if (!customElements.get('csk-api-ecosystem')) {
  customElements.define('csk-api-ecosystem', CskApiEcosystem);
}

})();

// ── csk-api-types.csk ──
(() => {
"use strict";

class CskApiTypes extends HTMLElement {
  #_code_typeExamples = "<span class=cm>// primitive types</span>\n<span class=k>state</span> name: <span class=tp>string</span> = <span class=s>'John'</span>\n<span class=k>state</span> age: <span class=tp>number</span> = <span class=n>30</span>\n<span class=k>state</span> active: <span class=tp>boolean</span> = <span class=n>true</span>\n<span class=k>state</span> nothing: <span class=tp>void</span>\n\n<span class=cm>// array types</span>\n<span class=k>state</span> names: <span class=tp>string</span>[] = [<span class=s>'Alice'</span>, <span class=s>'Bob'</span>]\n<span class=k>state</span> matrix: <span class=tp>number</span>[][] = [[<span class=n>1</span>, <span class=n>2</span>], [<span class=n>3</span>, <span class=n>4</span>]]\n\n<span class=cm>// object type</span>\n<span class=k>state</span> user: { name: <span class=tp>string</span>, age?: <span class=tp>number</span> } = { name: <span class=s>'John'</span> }\n\n<span class=cm>// union type</span>\n<span class=k>state</span> status: <span class=s>'idle'</span> | <span class=s>'loading'</span> | <span class=s>'done'</span> = <span class=s>'idle'</span>\n\n<span class=cm>// literal type</span>\n<span class=k>state</span> priority: <span class=s>'low'</span> | <span class=s>'medium'</span> | <span class=s>'high'</span> = <span class=s>'medium'</span>\n\n<span class=cm>// generics (limited support)</span>\n<span class=k>state</span> items: Array<span class=t>&lt;string</span><span class=t>&gt;</span> = []\n<span class=k>state</span> map: Map&lt;string, number&gt; = <span class=k>new</span> <span class=f>Map</span>()";
  get #code_typeExamples() { return this.#_code_typeExamples; }
  set #code_typeExamples(v) { this.#_code_typeExamples = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-api-types');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Type System -->
      <section id="type-system" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.types.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.types.description'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('apiContent.types.supportedTypes'))}
          </h3>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.types.primitiveTypes'))}
            </h4>
            <ul>
              <li><code>string</code> — ${this.#esc(this.#tr('apiContent.types.typeString'))}</li>
              <li><code>number</code> — ${this.#esc(this.#tr('apiContent.types.typeNumber'))}</li>
              <li><code>boolean</code> — ${this.#esc(this.#tr('apiContent.types.typeBoolean'))}</li>
              <li><code>void</code> — ${this.#esc(this.#tr('apiContent.types.typeVoid'))}</li>
              <li><code>null</code> — ${this.#esc(this.#tr('apiContent.types.typeNull'))}</li>
              <li><code>undefined</code> — ${this.#esc(this.#tr('apiContent.types.typeUndefined'))}</li>
              <li><code>any</code> — ${this.#esc(this.#tr('apiContent.types.typeAny'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.types.compositeTypes'))}
            </h4>
            <ul>
              <li><code>string[]</code>, <code>number[][]</code> — ${this.#esc(this.#tr('apiContent.types.arrayType'))}</li>
              <li><code>{ name: string, age: number }</code> — ${this.#esc(this.#tr('apiContent.types.objectType'))}</li>
              <li><code>"pending" | "loading" | "done"</code> — ${this.#esc(this.#tr('apiContent.types.unionType'))}</li>
              <li><code>"primary" | "secondary"</code> — ${this.#esc(this.#tr('apiContent.types.literalType'))}</li>
              <li><code>Array&lt;T&gt;</code>, <code>Map&lt;K,V&gt;</code> — ${this.#esc(this.#tr('apiContent.types.genericsType'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.types.exampleTitle'))}
            </h4>
            <pre><code>${this.#code_typeExamples}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.types.limitations'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.types.limitFunctionTypes'))}</li><li>${this.#esc(this.#tr('apiContent.types.limitComplexGenerics'))}</li><li>${this.#esc(this.#tr('apiContent.types.limitConditionalTypes'))}</li><li>${this.#esc(this.#tr('apiContent.types.limitMappedTypes'))}</li></ul></div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Type System -->
      <section id="type-system" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('apiContent.types.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('apiContent.types.description'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('apiContent.types.supportedTypes'))}
          </h3>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.types.primitiveTypes'))}
            </h4>
            <ul>
              <li><code>string</code> — ${this.#esc(this.#tr('apiContent.types.typeString'))}</li>
              <li><code>number</code> — ${this.#esc(this.#tr('apiContent.types.typeNumber'))}</li>
              <li><code>boolean</code> — ${this.#esc(this.#tr('apiContent.types.typeBoolean'))}</li>
              <li><code>void</code> — ${this.#esc(this.#tr('apiContent.types.typeVoid'))}</li>
              <li><code>null</code> — ${this.#esc(this.#tr('apiContent.types.typeNull'))}</li>
              <li><code>undefined</code> — ${this.#esc(this.#tr('apiContent.types.typeUndefined'))}</li>
              <li><code>any</code> — ${this.#esc(this.#tr('apiContent.types.typeAny'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.types.compositeTypes'))}
            </h4>
            <ul>
              <li><code>string[]</code>, <code>number[][]</code> — ${this.#esc(this.#tr('apiContent.types.arrayType'))}</li>
              <li><code>{ name: string, age: number }</code> — ${this.#esc(this.#tr('apiContent.types.objectType'))}</li>
              <li><code>"pending" | "loading" | "done"</code> — ${this.#esc(this.#tr('apiContent.types.unionType'))}</li>
              <li><code>"primary" | "secondary"</code> — ${this.#esc(this.#tr('apiContent.types.literalType'))}</li>
              <li><code>Array&lt;T&gt;</code>, <code>Map&lt;K,V&gt;</code> — ${this.#esc(this.#tr('apiContent.types.genericsType'))}</li>
            </ul>
          </div>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('apiContent.types.exampleTitle'))}
            </h4>
            <pre><code>${this.#code_typeExamples}</code></pre>
          </div>
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.types.limitations'))}:</strong><ul><li>${this.#esc(this.#tr('apiContent.types.limitFunctionTypes'))}</li><li>${this.#esc(this.#tr('apiContent.types.limitComplexGenerics'))}</li><li>${this.#esc(this.#tr('apiContent.types.limitConditionalTypes'))}</li><li>${this.#esc(this.#tr('apiContent.types.limitMappedTypes'))}</li></ul></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-api-types'] = CskApiTypes;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-types', CskApiTypes]);
} else if (!customElements.get('csk-api-types')) {
  customElements.define('csk-api-types', CskApiTypes);
}

})();

// ── csk-page-api.csk ──

(() => {
"use strict";

class CskPageApi extends HTMLElement {
  #_sidebarOpen = true;
  get #sidebarOpen() { return this.#_sidebarOpen; }
  set #sidebarOpen(v) { this.#_sidebarOpen = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-api');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    const sections = document.querySelectorAll('.doc-section[id]')
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.#updateActiveLink(entry.target.id)
            }
          }
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 })
        sections.forEach((s) => { observer.observe(s) })
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #toggleSidebar() {
    this.#sidebarOpen = !this.#sidebarOpen
  }

  #handleTocClick(e) {
    const link = e.target.closest('a')
        if (!link) return
        const href = link.getAttribute('href')
        if (href && href.startsWith('#') && !href.startsWith('#/')) {
          e.preventDefault()
          const el = document.getElementById(href.substring(1))
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
  }

  #updateActiveLink(sectionId) {
    const links = document.querySelectorAll('.toc a')
        links.forEach((link) => {
          const href = link.getAttribute('href')
          if (href && href.substring(1) === sectionId) {
            link.classList.add('active')
          } else {
            link.classList.remove('active')
          }
        })
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-api"]:root{--c-bg:#0a0a0f;--c-text:#e4e4ed;--c-text-dim:#9898ab;--c-border:#2a2a3a;--c-bg-code:#0d0d14;--c-surface:#1a1a26;--c-primary:#6C5CE7;--c-primary-light:#a29bfe;--c-accent:#00B894;--c-accent-light:#55efc4;--font:Inter, Noto Sans JP, sans-serif;--mono:JetBrains Mono, monospace;--max-w:70rem;--space-page:1.5rem;}[data-chasket-scope="csk-page-api"] *{margin:0;padding:0;box-sizing:border-box;}[data-chasket-scope="csk-page-api"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);line-height:1.6;}[data-chasket-scope="csk-page-api"] .page-container{display:grid;grid-template-columns:280px 1fr;min-height:100vh;gap:0;}[data-chasket-scope="csk-page-api"] /* Sidebar */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);overflow-y:auto;position:sticky;top:0;height:100vh;transition:all 0.3s ease;}[data-chasket-scope="csk-page-api"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;}[data-chasket-scope="csk-page-api"] .sidebar-header h2{font-size:1.1rem;color:var(--c-primary);font-weight:600;}[data-chasket-scope="csk-page-api"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0.25rem;transition:color 0.2s ease;}[data-chasket-scope="csk-page-api"] .sidebar-toggle:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .toggle-icon{display:block;}[data-chasket-scope="csk-page-api"] /* Table of Contents */ .toc{font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .toc ul{list-style:none;margin-left:0;}[data-chasket-scope="csk-page-api"] .toc ul ul{margin-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-api"] .toc li{margin:0.5rem 0;}[data-chasket-scope="csk-page-api"] .toc a{color:var(--c-text-dim);text-decoration:none;transition:color 0.2s ease;display:block;padding:0.25rem 0;}[data-chasket-scope="csk-page-api"] .toc a:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .toc a:focus{outline:2px solid var(--c-primary);outline-offset:2px;}[data-chasket-scope="csk-page-api"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;border-radius:0.25rem;}[data-chasket-scope="csk-page-api"] /* Main Content */ .content{padding:var(--space-page);max-width:var(--max-w);overflow-y:auto;}[data-chasket-scope="csk-page-api"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-api"] .page-header h1{font-size:2.5rem;font-weight:700;margin-bottom:0.5rem;color:var(--c-text);}[data-chasket-scope="csk-page-api"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);font-weight:400;}[data-chasket-scope="csk-page-api"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.8rem;font-weight:600;margin-bottom:1rem;color:var(--c-primary);padding-top:0.5rem;}[data-chasket-scope="csk-page-api"] .doc-section > p{margin-bottom:1.5rem;color:var(--c-text);font-size:1rem;}[data-chasket-scope="csk-page-api"] .subsection{margin:2rem 0;padding:0;}[data-chasket-scope="csk-page-api"] .subsection h3{font-size:1.3rem;font-weight:600;color:var(--c-accent);margin:1.5rem 0 0.75rem 0;padding-top:0.5rem;}[data-chasket-scope="csk-page-api"] .subsection h4{font-size:1rem;font-weight:600;color:var(--c-text);margin:1rem 0 0.5rem 0;}[data-chasket-scope="csk-page-api"] .subsection > p{margin:0.75rem 0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property{margin:1.25rem 0;padding:0;}[data-chasket-scope="csk-page-api"] .property h4{font-size:0.95rem;font-weight:600;color:var(--c-text);margin:0.75rem 0 0.5rem 0;}[data-chasket-scope="csk-page-api"] .property ul{list-style-position:inside;margin:0.5rem 0;padding-left:0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property ul li{margin:0.5rem 0;padding-left:0;}[data-chasket-scope="csk-page-api"] .property ol{list-style-position:inside;margin:0.5rem 0;padding-left:0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property ol li{margin:0.5rem 0;padding-left:0;}[data-chasket-scope="csk-page-api"] .property p{margin:0.5rem 0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] code{background:var(--c-bg-code);padding:0.2rem 0.4rem;border:1px solid var(--c-border);border-radius:0.25rem;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-api"] pre code{background:transparent;padding:0;color:#dfe6e9;}[data-chasket-scope="csk-page-api"] /* Syntax Highlighting — same palette as home */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-api"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-api"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-api"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-api"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-api"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-api"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-api"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-api"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-api"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-api"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-api"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-api"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-api"] /* Table Styling */ .table-wrapper{overflow-x:auto;margin:1rem 0;border:1px solid var(--c-border);border-radius:0.5rem;}[data-chasket-scope="csk-page-api"] .api-table{width:100%;border-collapse:collapse;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .api-table thead{background:var(--c-surface);border-bottom:2px solid var(--c-border);}[data-chasket-scope="csk-page-api"] .api-table th{padding:0.75rem;text-align:left;font-weight:600;color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .api-table td{padding:0.75rem;border-bottom:1px solid var(--c-border);color:var(--c-text);}[data-chasket-scope="csk-page-api"] .api-table tbody tr:hover{background:rgba(108, 92, 231, 0.05);}[data-chasket-scope="csk-page-api"] .api-table code{background:var(--c-bg-code);padding:0.2rem 0.4rem;}[data-chasket-scope="csk-page-api"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-api"] .warning, [data-chasket-scope="csk-page-api"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-api"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-api"] .note ul, [data-chasket-scope="csk-page-api"] .note li{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-api"] .warning{background:rgba(255, 107, 107, 0.1);border-left:3px solid #ff6b6b;color:var(--c-text);}[data-chasket-scope="csk-page-api"] .warning strong{color:#ff6b6b;}[data-chasket-scope="csk-page-api"] .note-text{background:transparent;padding:0.5rem 0;margin:0.5rem 0;border-left:3px solid var(--c-primary);padding-left:0.75rem;color:var(--c-text-dim);font-size:0.9rem;font-style:italic;}[data-chasket-scope="csk-page-api"] .example-title{font-weight:600;color:var(--c-primary);margin-top:1rem;margin-bottom:0.5rem;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] /* Footer */ .doc-footer{margin-top:4rem;padding-top:2rem;border-top:1px solid var(--c-border);text-align:center;color:var(--c-text-dim);font-size:0.85rem;}[data-chasket-scope="csk-page-api"] .doc-footer p{margin:0.5rem 0;}[data-chasket-scope="csk-page-api"] .footer-text{margin-top:0.75rem;font-style:italic;}[data-chasket-scope="csk-page-api"] /* Responsive Design */ @media (max-width:1024px){.page-container{grid-template-columns:240px 1fr;}.sidebar{padding:1rem;}.content{padding:1.5rem;}}@media (max-width:768px){[data-chasket-scope="csk-page-api"] .page-container{grid-template-columns:1fr;}[data-chasket-scope="csk-page-api"] .sidebar{position:fixed;left:0;top:0;width:280px;height:100vh;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);z-index:1000;box-shadow:2px 0 8px rgba(0, 0, 0, 0.3);}[data-chasket-scope="csk-page-api"] .sidebar.open{transform:translateX(0);}[data-chasket-scope="csk-page-api"] .sidebar-toggle{display:flex;}[data-chasket-scope="csk-page-api"] .content{padding:1rem;}[data-chasket-scope="csk-page-api"] .page-header h1{font-size:1.8rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.4rem;}[data-chasket-scope="csk-page-api"] .doc-section h3{font-size:1.1rem;}[data-chasket-scope="csk-page-api"] pre{padding:0.75rem;font-size:0.8rem;}[data-chasket-scope="csk-page-api"] code{font-size:0.8rem;}}@media (max-width:480px){[data-chasket-scope="csk-page-api"] .page-header h1{font-size:1.5rem;}[data-chasket-scope="csk-page-api"] .subtitle{font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.25rem;}[data-chasket-scope="csk-page-api"] .doc-section h3{font-size:1rem;}[data-chasket-scope="csk-page-api"] .content{padding:0.75rem;}[data-chasket-scope="csk-page-api"] pre{padding:0.5rem;font-size:0.75rem;}}[data-chasket-scope="csk-page-api"] /* Scrollbar Styling */:host::-webkit-scrollbar{width:8px;height:8px;}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-track{background:var(--c-bg);}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-thumb{background:var(--c-border);border-radius:4px;}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-thumb:hover{background:var(--c-text-dim);}[data-chasket-scope="csk-page-api"] /* Smooth Scrolling */ html{scroll-behavior:smooth;}[data-chasket-scope="csk-page-api"] /* Links */ a{color:var(--c-primary);text-decoration:none;transition:color 0.2s ease;}[data-chasket-scope="csk-page-api"] a:hover{color:var(--c-primary-light);text-decoration:underline;}[data-chasket-scope="csk-page-api"] /* Typography */ strong{font-weight:600;color:var(--c-text);}[data-chasket-scope="csk-page-api"] em{font-style:italic;color:var(--c-text-dim);}</style>
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('api.toc'))}
            </h2>
            <button data-chasket-id="fl-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-1" class="toc">
            <ul>
              <li>
<a href="#cli-commands">${this.#esc(this.#tr('api.sections.cliCommands'))}</a>              </li>
              <li>
<a href="#cli-options">${this.#esc(this.#tr('api.sections.cliOptions'))}</a>              </li>
              <li>
<a href="#config-file">${this.#esc(this.#tr('api.sections.configFile'))}</a>              </li>
              <li>
<a href="#compiler-api">${this.#esc(this.#tr('api.sections.compilerApi'))}</a>              </li>
              <li><a href="#api-functions">${this.#esc(this.#tr('api.sections.apiFunctions'))}</a><ul><li><a href="#compile-fn">compile()</a></li><li><a href="#split-blocks">splitBlocks()</a></li><li><a href="#parse-template">parseTemplateNodes()</a></li></ul></li>
              <li>
<a href="#type-system">${this.#esc(this.#tr('api.sections.typeSystem'))}</a>              </li>
              <li>
<a href="#diagnostics">${this.#esc(this.#tr('api.sections.diagnostics'))}</a>              </li>
              <li><a href="#error-codes">${this.#esc(this.#tr('api.sections.errorCodes'))}</a><ul><li><a href="#e0001">E0001: ${this.#esc(this.#tr('api.sections.errors.e0001'))}</a></li><li><a href="#e0002">E0002: ${this.#esc(this.#tr('api.sections.errors.e0002'))}</a></li><li><a href="#e0003">E0003: ${this.#esc(this.#tr('api.sections.errors.e0003'))}</a></li><li><a href="#e0004">E0004: ${this.#esc(this.#tr('api.sections.errors.e0004'))}</a></li><li><a href="#e0301">E0301: ${this.#esc(this.#tr('api.sections.errors.e0301'))}</a></li><li><a href="#e0302">E0302: ${this.#esc(this.#tr('api.sections.errors.e0302'))}</a></li></ul></li>
              <li><a href="#warning-codes">${this.#esc(this.#tr('api.sections.warningCodes'))}</a><ul><li><a href="#w0101">W0101: ${this.#esc(this.#tr('api.sections.warnings.w0101'))}</a></li><li><a href="#w0201">W0201: ${this.#esc(this.#tr('api.sections.warnings.w0201'))}</a></li><li><a href="#w0202">W0202: ${this.#esc(this.#tr('api.sections.warnings.w0202'))}</a></li><li><a href="#w0203">W0203: ${this.#esc(this.#tr('api.sections.warnings.w0203'))}</a></li></ul></li>
              <li>
<a href="#ecosystem">${this.#esc(this.#tr('api.sections.ecosystem'))}</a>              </li>
              <li><a href="#official-packages">${this.#esc(this.#tr('api.sections.officialPackages'))}</a><ul><li><a href="#router">@aspect/chasket-router</a></li><li><a href="#store">@aspect/chasket-store</a></li><li><a href="#ssr">@aspect/chasket-ssr</a></li><li><a href="#ui">@aspect/chasket-ui</a></li><li><a href="#vite">vite-plugin-chasket</a></li><li><a href="#lsp">@aspect/chasket-lsp</a></li><li><a href="#vscode">@aspect/chasket-vscode</a></li></ul></li>
              <li>
<a href="#compilation-output">${this.#esc(this.#tr('api.sections.compilationOutput'))}</a>              </li>
            </ul>
          </nav>
        </aside>
        <!-- Main Content -->
        <main class="content">
          <!-- Header -->
          <div class="page-header">
            <h1>
              ${this.#esc(this.#tr('api.title'))}
            </h1>
            <p class="subtitle">
              ${this.#esc(this.#tr('api.subtitle'))}
            </p>
          </div>
          <!-- Sub-components -->
          <csk-api-cli></csk-api-cli>
          <csk-api-config></csk-api-config>
          <csk-api-compiler></csk-api-compiler>
          <csk-api-types></csk-api-types>
          <csk-api-diagnostics></csk-api-diagnostics>
          <csk-api-ecosystem></csk-api-ecosystem>
          <!-- Footer -->
          <div class="doc-footer">
            <p>
              ${this.#esc(this.#tr('api.lastUpdated'))}
            </p>
            <p class="footer-text">
              ${this.#esc(this.#tr('api.versionNote'))}
            </p>
          </div>
        </main>
      </div>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-api"]:root{--c-bg:#0a0a0f;--c-text:#e4e4ed;--c-text-dim:#9898ab;--c-border:#2a2a3a;--c-bg-code:#0d0d14;--c-surface:#1a1a26;--c-primary:#6C5CE7;--c-primary-light:#a29bfe;--c-accent:#00B894;--c-accent-light:#55efc4;--font:Inter, Noto Sans JP, sans-serif;--mono:JetBrains Mono, monospace;--max-w:70rem;--space-page:1.5rem;}[data-chasket-scope="csk-page-api"] *{margin:0;padding:0;box-sizing:border-box;}[data-chasket-scope="csk-page-api"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);line-height:1.6;}[data-chasket-scope="csk-page-api"] .page-container{display:grid;grid-template-columns:280px 1fr;min-height:100vh;gap:0;}[data-chasket-scope="csk-page-api"] /* Sidebar */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);overflow-y:auto;position:sticky;top:0;height:100vh;transition:all 0.3s ease;}[data-chasket-scope="csk-page-api"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;}[data-chasket-scope="csk-page-api"] .sidebar-header h2{font-size:1.1rem;color:var(--c-primary);font-weight:600;}[data-chasket-scope="csk-page-api"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0.25rem;transition:color 0.2s ease;}[data-chasket-scope="csk-page-api"] .sidebar-toggle:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .toggle-icon{display:block;}[data-chasket-scope="csk-page-api"] /* Table of Contents */ .toc{font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .toc ul{list-style:none;margin-left:0;}[data-chasket-scope="csk-page-api"] .toc ul ul{margin-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-api"] .toc li{margin:0.5rem 0;}[data-chasket-scope="csk-page-api"] .toc a{color:var(--c-text-dim);text-decoration:none;transition:color 0.2s ease;display:block;padding:0.25rem 0;}[data-chasket-scope="csk-page-api"] .toc a:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .toc a:focus{outline:2px solid var(--c-primary);outline-offset:2px;}[data-chasket-scope="csk-page-api"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;border-radius:0.25rem;}[data-chasket-scope="csk-page-api"] /* Main Content */ .content{padding:var(--space-page);max-width:var(--max-w);overflow-y:auto;}[data-chasket-scope="csk-page-api"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-api"] .page-header h1{font-size:2.5rem;font-weight:700;margin-bottom:0.5rem;color:var(--c-text);}[data-chasket-scope="csk-page-api"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);font-weight:400;}[data-chasket-scope="csk-page-api"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.8rem;font-weight:600;margin-bottom:1rem;color:var(--c-primary);padding-top:0.5rem;}[data-chasket-scope="csk-page-api"] .doc-section > p{margin-bottom:1.5rem;color:var(--c-text);font-size:1rem;}[data-chasket-scope="csk-page-api"] .subsection{margin:2rem 0;padding:0;}[data-chasket-scope="csk-page-api"] .subsection h3{font-size:1.3rem;font-weight:600;color:var(--c-accent);margin:1.5rem 0 0.75rem 0;padding-top:0.5rem;}[data-chasket-scope="csk-page-api"] .subsection h4{font-size:1rem;font-weight:600;color:var(--c-text);margin:1rem 0 0.5rem 0;}[data-chasket-scope="csk-page-api"] .subsection > p{margin:0.75rem 0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property{margin:1.25rem 0;padding:0;}[data-chasket-scope="csk-page-api"] .property h4{font-size:0.95rem;font-weight:600;color:var(--c-text);margin:0.75rem 0 0.5rem 0;}[data-chasket-scope="csk-page-api"] .property ul{list-style-position:inside;margin:0.5rem 0;padding-left:0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property ul li{margin:0.5rem 0;padding-left:0;}[data-chasket-scope="csk-page-api"] .property ol{list-style-position:inside;margin:0.5rem 0;padding-left:0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property ol li{margin:0.5rem 0;padding-left:0;}[data-chasket-scope="csk-page-api"] .property p{margin:0.5rem 0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] code{background:var(--c-bg-code);padding:0.2rem 0.4rem;border:1px solid var(--c-border);border-radius:0.25rem;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-api"] pre code{background:transparent;padding:0;color:#dfe6e9;}[data-chasket-scope="csk-page-api"] /* Syntax Highlighting — same palette as home */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-api"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-api"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-api"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-api"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-api"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-api"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-api"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-api"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-api"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-api"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-api"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-api"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-api"] /* Table Styling */ .table-wrapper{overflow-x:auto;margin:1rem 0;border:1px solid var(--c-border);border-radius:0.5rem;}[data-chasket-scope="csk-page-api"] .api-table{width:100%;border-collapse:collapse;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .api-table thead{background:var(--c-surface);border-bottom:2px solid var(--c-border);}[data-chasket-scope="csk-page-api"] .api-table th{padding:0.75rem;text-align:left;font-weight:600;color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .api-table td{padding:0.75rem;border-bottom:1px solid var(--c-border);color:var(--c-text);}[data-chasket-scope="csk-page-api"] .api-table tbody tr:hover{background:rgba(108, 92, 231, 0.05);}[data-chasket-scope="csk-page-api"] .api-table code{background:var(--c-bg-code);padding:0.2rem 0.4rem;}[data-chasket-scope="csk-page-api"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-api"] .warning, [data-chasket-scope="csk-page-api"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-api"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-api"] .note ul, [data-chasket-scope="csk-page-api"] .note li{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-api"] .warning{background:rgba(255, 107, 107, 0.1);border-left:3px solid #ff6b6b;color:var(--c-text);}[data-chasket-scope="csk-page-api"] .warning strong{color:#ff6b6b;}[data-chasket-scope="csk-page-api"] .note-text{background:transparent;padding:0.5rem 0;margin:0.5rem 0;border-left:3px solid var(--c-primary);padding-left:0.75rem;color:var(--c-text-dim);font-size:0.9rem;font-style:italic;}[data-chasket-scope="csk-page-api"] .example-title{font-weight:600;color:var(--c-primary);margin-top:1rem;margin-bottom:0.5rem;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] /* Footer */ .doc-footer{margin-top:4rem;padding-top:2rem;border-top:1px solid var(--c-border);text-align:center;color:var(--c-text-dim);font-size:0.85rem;}[data-chasket-scope="csk-page-api"] .doc-footer p{margin:0.5rem 0;}[data-chasket-scope="csk-page-api"] .footer-text{margin-top:0.75rem;font-style:italic;}[data-chasket-scope="csk-page-api"] /* Responsive Design */ @media (max-width:1024px){.page-container{grid-template-columns:240px 1fr;}.sidebar{padding:1rem;}.content{padding:1.5rem;}}@media (max-width:768px){[data-chasket-scope="csk-page-api"] .page-container{grid-template-columns:1fr;}[data-chasket-scope="csk-page-api"] .sidebar{position:fixed;left:0;top:0;width:280px;height:100vh;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);z-index:1000;box-shadow:2px 0 8px rgba(0, 0, 0, 0.3);}[data-chasket-scope="csk-page-api"] .sidebar.open{transform:translateX(0);}[data-chasket-scope="csk-page-api"] .sidebar-toggle{display:flex;}[data-chasket-scope="csk-page-api"] .content{padding:1rem;}[data-chasket-scope="csk-page-api"] .page-header h1{font-size:1.8rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.4rem;}[data-chasket-scope="csk-page-api"] .doc-section h3{font-size:1.1rem;}[data-chasket-scope="csk-page-api"] pre{padding:0.75rem;font-size:0.8rem;}[data-chasket-scope="csk-page-api"] code{font-size:0.8rem;}}@media (max-width:480px){[data-chasket-scope="csk-page-api"] .page-header h1{font-size:1.5rem;}[data-chasket-scope="csk-page-api"] .subtitle{font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.25rem;}[data-chasket-scope="csk-page-api"] .doc-section h3{font-size:1rem;}[data-chasket-scope="csk-page-api"] .content{padding:0.75rem;}[data-chasket-scope="csk-page-api"] pre{padding:0.5rem;font-size:0.75rem;}}[data-chasket-scope="csk-page-api"] /* Scrollbar Styling */:host::-webkit-scrollbar{width:8px;height:8px;}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-track{background:var(--c-bg);}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-thumb{background:var(--c-border);border-radius:4px;}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-thumb:hover{background:var(--c-text-dim);}[data-chasket-scope="csk-page-api"] /* Smooth Scrolling */ html{scroll-behavior:smooth;}[data-chasket-scope="csk-page-api"] /* Links */ a{color:var(--c-primary);text-decoration:none;transition:color 0.2s ease;}[data-chasket-scope="csk-page-api"] a:hover{color:var(--c-primary-light);text-decoration:underline;}[data-chasket-scope="csk-page-api"] /* Typography */ strong{font-weight:600;color:var(--c-text);}[data-chasket-scope="csk-page-api"] em{font-style:italic;color:var(--c-text-dim);}</style>
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('api.toc'))}
            </h2>
            <button data-chasket-id="fl-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-1" class="toc">
            <ul>
              <li>
<a href="#cli-commands">${this.#esc(this.#tr('api.sections.cliCommands'))}</a>              </li>
              <li>
<a href="#cli-options">${this.#esc(this.#tr('api.sections.cliOptions'))}</a>              </li>
              <li>
<a href="#config-file">${this.#esc(this.#tr('api.sections.configFile'))}</a>              </li>
              <li>
<a href="#compiler-api">${this.#esc(this.#tr('api.sections.compilerApi'))}</a>              </li>
              <li><a href="#api-functions">${this.#esc(this.#tr('api.sections.apiFunctions'))}</a><ul><li><a href="#compile-fn">compile()</a></li><li><a href="#split-blocks">splitBlocks()</a></li><li><a href="#parse-template">parseTemplateNodes()</a></li></ul></li>
              <li>
<a href="#type-system">${this.#esc(this.#tr('api.sections.typeSystem'))}</a>              </li>
              <li>
<a href="#diagnostics">${this.#esc(this.#tr('api.sections.diagnostics'))}</a>              </li>
              <li><a href="#error-codes">${this.#esc(this.#tr('api.sections.errorCodes'))}</a><ul><li><a href="#e0001">E0001: ${this.#esc(this.#tr('api.sections.errors.e0001'))}</a></li><li><a href="#e0002">E0002: ${this.#esc(this.#tr('api.sections.errors.e0002'))}</a></li><li><a href="#e0003">E0003: ${this.#esc(this.#tr('api.sections.errors.e0003'))}</a></li><li><a href="#e0004">E0004: ${this.#esc(this.#tr('api.sections.errors.e0004'))}</a></li><li><a href="#e0301">E0301: ${this.#esc(this.#tr('api.sections.errors.e0301'))}</a></li><li><a href="#e0302">E0302: ${this.#esc(this.#tr('api.sections.errors.e0302'))}</a></li></ul></li>
              <li><a href="#warning-codes">${this.#esc(this.#tr('api.sections.warningCodes'))}</a><ul><li><a href="#w0101">W0101: ${this.#esc(this.#tr('api.sections.warnings.w0101'))}</a></li><li><a href="#w0201">W0201: ${this.#esc(this.#tr('api.sections.warnings.w0201'))}</a></li><li><a href="#w0202">W0202: ${this.#esc(this.#tr('api.sections.warnings.w0202'))}</a></li><li><a href="#w0203">W0203: ${this.#esc(this.#tr('api.sections.warnings.w0203'))}</a></li></ul></li>
              <li>
<a href="#ecosystem">${this.#esc(this.#tr('api.sections.ecosystem'))}</a>              </li>
              <li><a href="#official-packages">${this.#esc(this.#tr('api.sections.officialPackages'))}</a><ul><li><a href="#router">@aspect/chasket-router</a></li><li><a href="#store">@aspect/chasket-store</a></li><li><a href="#ssr">@aspect/chasket-ssr</a></li><li><a href="#ui">@aspect/chasket-ui</a></li><li><a href="#vite">vite-plugin-chasket</a></li><li><a href="#lsp">@aspect/chasket-lsp</a></li><li><a href="#vscode">@aspect/chasket-vscode</a></li></ul></li>
              <li>
<a href="#compilation-output">${this.#esc(this.#tr('api.sections.compilationOutput'))}</a>              </li>
            </ul>
          </nav>
        </aside>
        <!-- Main Content -->
        <main class="content">
          <!-- Header -->
          <div class="page-header">
            <h1>
              ${this.#esc(this.#tr('api.title'))}
            </h1>
            <p class="subtitle">
              ${this.#esc(this.#tr('api.subtitle'))}
            </p>
          </div>
          <!-- Sub-components -->
          <csk-api-cli></csk-api-cli>
          <csk-api-config></csk-api-config>
          <csk-api-compiler></csk-api-compiler>
          <csk-api-types></csk-api-types>
          <csk-api-diagnostics></csk-api-diagnostics>
          <csk-api-ecosystem></csk-api-ecosystem>
          <!-- Footer -->
          <div class="doc-footer">
            <p>
              ${this.#esc(this.#tr('api.lastUpdated'))}
            </p>
            <p class="footer-text">
              ${this.#esc(this.#tr('api.versionNote'))}
            </p>
          </div>
        </main>
      </div>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
    {
      const el = this.querySelector('[data-chasket-id="fl-0"]');
      if (el) {
        const fn_click = (e) => { this.#toggleSidebar(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-1"]');
      if (el) {
        const fn_click = (e) => { this.#handleTocClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-page-api'] = CskPageApi;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-api', CskPageApi]);
} else if (!customElements.get('csk-page-api')) {
  customElements.define('csk-page-api', CskPageApi);
}

})();

// ── csk-guide-communication.csk ──
(() => {
"use strict";

class CskGuideCommunication extends HTMLElement {
  #_code_propsEmit = "<span class=cm>// Parent.csk</span>\n<span class=t>&lt;Counter</span> :initial=\"5\" @change=\"handleCountChange\" <span class=t>/&gt;</span>\n\n<span class=cm>// Counter.csk</span>\n<span class=k>prop</span> initial: <span class=tp>number</span> = <span class=n>0</span>\n<span class=k>state</span> count: <span class=tp>number</span> = initial\n<span class=k>emit</span> change: { value: <span class=tp>number</span> }\n<span class=k>fn</span> <span class=f>increment</span>() {\n  count = count + <span class=n>1</span>\n  <span class=f>change</span>({ value: count })\n}";
  get #code_propsEmit() { return this.#_code_propsEmit; }
  set #code_propsEmit(v) { this.#_code_propsEmit = v; this.#scheduleUpdate(); }
  #_code_provideConsumeEx = "<span class=cm>// App.csk</span>\n<span class=k>provide</span> theme: <span class=tp>string</span> = <span class=s>'dark'</span>\n<span class=t>&lt;Layout</span> <span class=t>/&gt;</span>\n\n<span class=cm>// </span>Layout.csk\n<span class=k>consume</span> theme: <span class=tp>string</span>\n<span class=k>fn</span> <span class=f>toggleTheme</span>() {\n  theme = theme === <span class=s>'dark'</span> ? <span class=s>'light'</span> : <span class=s>'dark'</span>\n}";
  get #code_provideConsumeEx() { return this.#_code_provideConsumeEx; }
  set #code_provideConsumeEx(v) { this.#_code_provideConsumeEx = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-guide-communication');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- コンポーネント間通信 -->
      <section id="component-comm" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.communication.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.communication.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.communication.propsEmit.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.communication.propsEmit.desc'))}
          </p>
          <pre><code>${this.#code_propsEmit}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.communication.propsEmit.patternLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.communication.propsEmit.pattern.p1'))}</li><li>${this.#esc(this.#tr('guideContent.communication.propsEmit.pattern.p2'))}</li><li>${this.#esc(this.#tr('guideContent.communication.propsEmit.pattern.p3'))}</li><li>${this.#esc(this.#tr('guideContent.communication.propsEmit.pattern.p4'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.communication.provideConsume.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.communication.provideConsume.desc'))}
          </p>
          <pre><code>${this.#code_provideConsumeEx}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.communication.provideConsume.usesLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.communication.provideConsume.uses.u1'))}</li><li>${this.#esc(this.#tr('guideContent.communication.provideConsume.uses.u2'))}</li><li>${this.#esc(this.#tr('guideContent.communication.provideConsume.uses.u3'))}</li><li>${this.#esc(this.#tr('guideContent.communication.provideConsume.uses.u4'))}</li></ul></div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- コンポーネント間通信 -->
      <section id="component-comm" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.communication.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.communication.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.communication.propsEmit.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.communication.propsEmit.desc'))}
          </p>
          <pre><code>${this.#code_propsEmit}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.communication.propsEmit.patternLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.communication.propsEmit.pattern.p1'))}</li><li>${this.#esc(this.#tr('guideContent.communication.propsEmit.pattern.p2'))}</li><li>${this.#esc(this.#tr('guideContent.communication.propsEmit.pattern.p3'))}</li><li>${this.#esc(this.#tr('guideContent.communication.propsEmit.pattern.p4'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.communication.provideConsume.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.communication.provideConsume.desc'))}
          </p>
          <pre><code>${this.#code_provideConsumeEx}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.communication.provideConsume.usesLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.communication.provideConsume.uses.u1'))}</li><li>${this.#esc(this.#tr('guideContent.communication.provideConsume.uses.u2'))}</li><li>${this.#esc(this.#tr('guideContent.communication.provideConsume.uses.u3'))}</li><li>${this.#esc(this.#tr('guideContent.communication.provideConsume.uses.u4'))}</li></ul></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-guide-communication'] = CskGuideCommunication;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-communication', CskGuideCommunication]);
} else if (!customElements.get('csk-guide-communication')) {
  customElements.define('csk-guide-communication', CskGuideCommunication);
}

})();

// ── csk-guide-file-structure.csk ──
(() => {
"use strict";

class CskGuideFileStructure extends HTMLElement {
  #_code_fileStructure = "<span class=t>&lt;meta</span><span class=t>&gt;</span>\n  name: component-name\n  shadow: <span class=n>true</span>\n<span class=t>&lt;/meta</span><span class=t>&gt;</span>\n\n<span class=t>&lt;script</span><span class=t>&gt;</span>\n  <span class=k>state</span> count: <span class=tp>number</span> = <span class=n>0</span>\n<span class=t>&lt;/script</span><span class=t>&gt;</span>\n\n<span class=t>&lt;template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ count }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=t>&lt;/template</span><span class=t>&gt;</span>\n\n<span class=t>&lt;style</span><span class=t>&gt;</span>\n  p { color: white; }\n<span class=t>&lt;/style</span><span class=t>&gt;</span>";
  get #code_fileStructure() { return this.#_code_fileStructure; }
  set #code_fileStructure(v) { this.#_code_fileStructure = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-guide-file-structure');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- ファイル構造 -->
      <section id="file-structure" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.fileStructure.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.fileStructure.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.fileStructure.fourBlocks.heading'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.fileStructure.fourBlocks.desc'))}
          </p>
          <pre><code>${this.#code_fileStructure}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.fileStructure.fourBlocks.noteLabel'))}:</strong>${this.#esc(this.#tr('guideContent.fileStructure.fourBlocks.noteText'))}</div>
        </div>
      </section>
      <!-- meta ブロック -->
      <section id="meta-block" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.properties'))}
          </h3>
          <div class="property">
            <h4>
<code>name</code>            </h4>
            <p>
              ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.name.desc'))}
            </p>
            <pre><code>name: my-counter</code></pre>
          </div>
          <div class="property">
            <h4>
<code>shadow</code>            </h4>
            <p>
              ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.shadow.desc'))}
            </p>
            <pre><code>shadow: <span class=n>true</span>    <span class=cm>&lt;!-- Shadow DOM --&gt;</span>
shadow: none    <span class=cm>&lt;!-- Light DOM with scoping --&gt;</span></code></pre>
            <p class="note-text"><strong>${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.shadow.hint'))}:</strong>${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.shadow.hintText'))}</p>
          </div>
          <div class="property">
            <h4>
<code>form</code>            </h4>
            <p>
              ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.form.desc'))}
            </p>
            <pre><code>form: <span class=n>true</span></code></pre>
          </div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- ファイル構造 -->
      <section id="file-structure" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.fileStructure.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.fileStructure.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.fileStructure.fourBlocks.heading'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.fileStructure.fourBlocks.desc'))}
          </p>
          <pre><code>${this.#code_fileStructure}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.fileStructure.fourBlocks.noteLabel'))}:</strong>${this.#esc(this.#tr('guideContent.fileStructure.fourBlocks.noteText'))}</div>
        </div>
      </section>
      <!-- meta ブロック -->
      <section id="meta-block" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.properties'))}
          </h3>
          <div class="property">
            <h4>
<code>name</code>            </h4>
            <p>
              ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.name.desc'))}
            </p>
            <pre><code>name: my-counter</code></pre>
          </div>
          <div class="property">
            <h4>
<code>shadow</code>            </h4>
            <p>
              ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.shadow.desc'))}
            </p>
            <pre><code>shadow: <span class=n>true</span>    <span class=cm>&lt;!-- Shadow DOM --&gt;</span>
shadow: none    <span class=cm>&lt;!-- Light DOM with scoping --&gt;</span></code></pre>
            <p class="note-text"><strong>${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.shadow.hint'))}:</strong>${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.shadow.hintText'))}</p>
          </div>
          <div class="property">
            <h4>
<code>form</code>            </h4>
            <p>
              ${this.#esc(this.#tr('guideContent.fileStructure.metaBlock.form.desc'))}
            </p>
            <pre><code>form: <span class=n>true</span></code></pre>
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-guide-file-structure'] = CskGuideFileStructure;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-file-structure', CskGuideFileStructure]);
} else if (!customElements.get('csk-guide-file-structure')) {
  customElements.define('csk-guide-file-structure', CskGuideFileStructure);
}

})();

// ── csk-guide-script.csk ──
(() => {
"use strict";

class CskGuideScript extends HTMLElement {
  #_code_stateExample = "<span class=k>state</span> count: <span class=tp>number</span> = <span class=n>0</span>\n<span class=k>state</span> name: <span class=tp>string</span> = <span class=s>'John'</span>\n<span class=k>state</span> items: array<span class=t>&lt;string</span><span class=t>&gt;</span> = [<span class=s>'a'</span>, <span class=s>'b'</span>]\n<span class=k>state</span> visible: <span class=tp>boolean</span> = <span class=n>true</span>";
  get #code_stateExample() { return this.#_code_stateExample; }
  set #code_stateExample(v) { this.#_code_stateExample = v; this.#scheduleUpdate(); }
  #_code_propExample = "<span class=k>prop</span> title: <span class=tp>string</span> = <span class=s>'Default Title'</span>\n<span class=k>prop</span> count: <span class=tp>number</span>\n<span class=k>prop</span> items: array<span class=t>&lt;unknown</span><span class=t>&gt;</span>";
  get #code_propExample() { return this.#_code_propExample; }
  set #code_propExample(v) { this.#_code_propExample = v; this.#scheduleUpdate(); }
  #_code_computedExample = "<span class=k>computed</span> doubleCount: <span class=tp>number</span> = count * <span class=n>2</span>\n<span class=k>computed</span> fullName: <span class=tp>string</span> = firstName + <span class=s>' '</span> + lastName";
  get #code_computedExample() { return this.#_code_computedExample; }
  set #code_computedExample(v) { this.#_code_computedExample = v; this.#scheduleUpdate(); }
  #_code_fnExample = "<span class=k>fn</span> <span class=f>increment</span>() {\n  count = count + <span class=n>1</span>\n}\n\n<span class=k>fn</span> <span class=k>async</span> <span class=f>fetchData</span>() {\n  <span class=k>const</span> response = <span class=k>await</span> <span class=f>fetch</span>(<span class=s>'/api/data'</span>)\n  <span class=k>return</span> response.<span class=f>json</span>()\n}";
  get #code_fnExample() { return this.#_code_fnExample; }
  set #code_fnExample(v) { this.#_code_fnExample = v; this.#scheduleUpdate(); }
  #_code_emitExample = "<span class=k>emit</span> click: { x: <span class=tp>number</span>, y: <span class=tp>number</span> }\n<span class=k>emit</span> change|prevent: { value: <span class=tp>string</span> }\n<span class=k>emit</span> submit|stop: { data: unknown }";
  get #code_emitExample() { return this.#_code_emitExample; }
  set #code_emitExample(v) { this.#_code_emitExample = v; this.#scheduleUpdate(); }
  #_code_watchExample = "<span class=k>watch</span> count {\n  console.<span class=f>log</span>(<span class=s>'Count changed to:'</span>, count)\n}\n\n<span class=k>watch</span> [firstName, lastName] {\n  fullName = firstName + <span class=s>' '</span> + lastName\n}";
  get #code_watchExample() { return this.#_code_watchExample; }
  set #code_watchExample(v) { this.#_code_watchExample = v; this.#scheduleUpdate(); }
  #_code_refExample = "ref inputElement: HTMLInputElement\nref containerDiv: HTMLElement\n\n<span class=k>fn</span> <span class=f>focus</span>() {\n  inputElement?.<span class=f>focus</span>()\n}";
  get #code_refExample() { return this.#_code_refExample; }
  set #code_refExample(v) { this.#_code_refExample = v; this.#scheduleUpdate(); }
  #_code_provideExample = "<span class=k>provide</span> theme: <span class=tp>string</span> = <span class=s>'dark'</span>\n<span class=k>provide</span> apiUrl: <span class=tp>string</span> = <span class=s>'https://api.example.com'</span>";
  get #code_provideExample() { return this.#_code_provideExample; }
  set #code_provideExample(v) { this.#_code_provideExample = v; this.#scheduleUpdate(); }
  #_code_consumeExample = "<span class=k>consume</span> theme: <span class=tp>string</span>\n<span class=k>consume</span> apiUrl: <span class=tp>string</span>\n\n<span class=k>fn</span> <span class=f>useApi</span>() {\n  <span class=f>fetch</span>(apiUrl + <span class=s>'/data'</span>)\n}";
  get #code_consumeExample() { return this.#_code_consumeExample; }
  set #code_consumeExample(v) { this.#_code_consumeExample = v; this.#scheduleUpdate(); }
  #_code_typeExample = "type User = {\n  id: <span class=tp>number</span>\n  name: <span class=tp>string</span>\n  email: <span class=tp>string</span>\n}\n\ntype Status = <span class=s>'pending'</span> | <span class=s>'success'</span> | <span class=s>'error'</span>";
  get #code_typeExample() { return this.#_code_typeExample; }
  set #code_typeExample(v) { this.#_code_typeExample = v; this.#scheduleUpdate(); }
  #_code_importExample = "<span class=k>import</span> { someFunction } <span class=k>from</span> <span class=s>'./utils.js'</span>\n<span class=k>import</span> { Button } <span class=k>from</span> <span class=s>'./components/Button.csk'</span>";
  get #code_importExample() { return this.#_code_importExample; }
  set #code_importExample(v) { this.#_code_importExample = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-guide-script');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- script ブロック -->
      <section id="script-block" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.script.scriptBlock.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.script.scriptBlock.desc'))}
        </p>
      </section>
      <!-- script宣言 -->
      <section id="script-declarations" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.script.declarations.title'))}
        </h2>
        <!-- state -->
        <div id="state" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.state.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.state.desc'))}
          </p>
          <pre><code>${this.#code_stateExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.state.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.state.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.state.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.state.features.f3'))}</li><li>${this.#esc(this.#tr('guideContent.script.state.features.f4'))}</li></ul></div>
        </div>
        <!-- prop -->
        <div id="prop" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.prop.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.prop.desc'))}
          </p>
          <pre><code>${this.#code_propExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.prop.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.prop.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.prop.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.prop.features.f3'))}</li></ul></div>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.script.prop.example'))}
            :
          </p>
          <pre><code><span class=t>&lt;MyComponent</span> <span class=d>:title</span>=<span class=s>"'Hello'"</span> <span class=d>:count</span>=<span class=s>"5"</span> <span class=t>/&gt;</span></code></pre>
        </div>
        <!-- computed -->
        <div id="computed" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.computed.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.computed.desc'))}
          </p>
          <pre><code>${this.#code_computedExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.computed.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.computed.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.computed.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.computed.features.f3'))}</li></ul></div>
        </div>
        <!-- fn -->
        <div id="fn" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.fn.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.fn.desc'))}
          </p>
          <pre><code>${this.#code_fnExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.fn.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.fn.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.fn.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.fn.features.f3'))}</li><li>${this.#esc(this.#tr('guideContent.script.fn.features.f4'))}</li></ul></div>
        </div>
        <!-- emit -->
        <div id="emit" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.emit.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.emit.desc'))}
          </p>
          <pre><code>${this.#code_emitExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.emit.modifiersLabel'))}:</strong><ul><li><code>|prevent</code>: ${this.#esc(this.#tr('guideContent.script.emit.modifiers.prevent'))}</li><li><code>|stop</code>: ${this.#esc(this.#tr('guideContent.script.emit.modifiers.stop'))}</li></ul></div>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.script.emit.example'))}
            :
          </p>
          <pre><code><span class=k>fn</span> <span class=f>handleClick</span>(x: <span class=tp>number</span>, y: <span class=tp>number</span>) {
  <span class=f>click</span>({ x, y })
}</code></pre>
        </div>
        <!-- watch -->
        <div id="watch" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.watch.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.watch.desc'))}
          </p>
          <pre><code>${this.#code_watchExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.watch.usesLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.watch.uses.u1'))}</li><li>${this.#esc(this.#tr('guideContent.script.watch.uses.u2'))}</li><li>${this.#esc(this.#tr('guideContent.script.watch.uses.u3'))}</li><li>${this.#esc(this.#tr('guideContent.script.watch.uses.u4'))}</li></ul></div>
        </div>
        <!-- ref -->
        <div id="ref" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.ref.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.ref.desc'))}
          </p>
          <pre><code>${this.#code_refExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.ref.usesLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.ref.uses.u1'))}</li><li>${this.#esc(this.#tr('guideContent.script.ref.uses.u2'))}</li><li>${this.#esc(this.#tr('guideContent.script.ref.uses.u3'))}</li><li>${this.#esc(this.#tr('guideContent.script.ref.uses.u4'))}</li></ul></div>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.script.ref.inTemplate'))}
            :
          </p>
          <pre><code><span class=t>&lt;input</span> <span class=a>ref</span>=<span class=s>"inputElement"</span> <span class=a>type</span>=<span class=s>"text"</span> <span class=t>/&gt;</span></code></pre>
        </div>
        <!-- provide/consume -->
        <div id="provide-consume" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.provideConsume.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.provideConsume.desc'))}
          </p>
          <pre><code>${this.#code_provideExample}</code></pre>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.script.provideConsume.example'))}
            :
          </p>
          <pre><code>${this.#code_consumeExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.provideConsume.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.provideConsume.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.provideConsume.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.provideConsume.features.f3'))}</li></ul></div>
        </div>
        <!-- type -->
        <div id="type" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.type.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.type.desc'))}
          </p>
          <pre><code>${this.#code_typeExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.type.usesLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.type.uses.u1'))}</li><li>${this.#esc(this.#tr('guideContent.script.type.uses.u2'))}</li><li>${this.#esc(this.#tr('guideContent.script.type.uses.u3'))}</li><li>${this.#esc(this.#tr('guideContent.script.type.uses.u4'))}</li></ul></div>
        </div>
        <!-- import -->
        <div id="import" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.import.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.import.desc'))}
          </p>
          <pre><code>${this.#code_importExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.import.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.import.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.import.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.import.features.f3'))}</li><li>${this.#esc(this.#tr('guideContent.script.import.features.f4'))}</li></ul></div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- script ブロック -->
      <section id="script-block" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.script.scriptBlock.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.script.scriptBlock.desc'))}
        </p>
      </section>
      <!-- script宣言 -->
      <section id="script-declarations" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.script.declarations.title'))}
        </h2>
        <!-- state -->
        <div id="state" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.state.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.state.desc'))}
          </p>
          <pre><code>${this.#code_stateExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.state.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.state.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.state.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.state.features.f3'))}</li><li>${this.#esc(this.#tr('guideContent.script.state.features.f4'))}</li></ul></div>
        </div>
        <!-- prop -->
        <div id="prop" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.prop.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.prop.desc'))}
          </p>
          <pre><code>${this.#code_propExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.prop.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.prop.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.prop.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.prop.features.f3'))}</li></ul></div>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.script.prop.example'))}
            :
          </p>
          <pre><code><span class=t>&lt;MyComponent</span> <span class=d>:title</span>=<span class=s>"'Hello'"</span> <span class=d>:count</span>=<span class=s>"5"</span> <span class=t>/&gt;</span></code></pre>
        </div>
        <!-- computed -->
        <div id="computed" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.computed.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.computed.desc'))}
          </p>
          <pre><code>${this.#code_computedExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.computed.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.computed.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.computed.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.computed.features.f3'))}</li></ul></div>
        </div>
        <!-- fn -->
        <div id="fn" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.fn.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.fn.desc'))}
          </p>
          <pre><code>${this.#code_fnExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.fn.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.fn.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.fn.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.fn.features.f3'))}</li><li>${this.#esc(this.#tr('guideContent.script.fn.features.f4'))}</li></ul></div>
        </div>
        <!-- emit -->
        <div id="emit" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.emit.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.emit.desc'))}
          </p>
          <pre><code>${this.#code_emitExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.emit.modifiersLabel'))}:</strong><ul><li><code>|prevent</code>: ${this.#esc(this.#tr('guideContent.script.emit.modifiers.prevent'))}</li><li><code>|stop</code>: ${this.#esc(this.#tr('guideContent.script.emit.modifiers.stop'))}</li></ul></div>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.script.emit.example'))}
            :
          </p>
          <pre><code><span class=k>fn</span> <span class=f>handleClick</span>(x: <span class=tp>number</span>, y: <span class=tp>number</span>) {
  <span class=f>click</span>({ x, y })
}</code></pre>
        </div>
        <!-- watch -->
        <div id="watch" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.watch.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.watch.desc'))}
          </p>
          <pre><code>${this.#code_watchExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.watch.usesLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.watch.uses.u1'))}</li><li>${this.#esc(this.#tr('guideContent.script.watch.uses.u2'))}</li><li>${this.#esc(this.#tr('guideContent.script.watch.uses.u3'))}</li><li>${this.#esc(this.#tr('guideContent.script.watch.uses.u4'))}</li></ul></div>
        </div>
        <!-- ref -->
        <div id="ref" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.ref.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.ref.desc'))}
          </p>
          <pre><code>${this.#code_refExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.ref.usesLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.ref.uses.u1'))}</li><li>${this.#esc(this.#tr('guideContent.script.ref.uses.u2'))}</li><li>${this.#esc(this.#tr('guideContent.script.ref.uses.u3'))}</li><li>${this.#esc(this.#tr('guideContent.script.ref.uses.u4'))}</li></ul></div>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.script.ref.inTemplate'))}
            :
          </p>
          <pre><code><span class=t>&lt;input</span> <span class=a>ref</span>=<span class=s>"inputElement"</span> <span class=a>type</span>=<span class=s>"text"</span> <span class=t>/&gt;</span></code></pre>
        </div>
        <!-- provide/consume -->
        <div id="provide-consume" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.provideConsume.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.provideConsume.desc'))}
          </p>
          <pre><code>${this.#code_provideExample}</code></pre>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.script.provideConsume.example'))}
            :
          </p>
          <pre><code>${this.#code_consumeExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.provideConsume.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.provideConsume.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.provideConsume.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.provideConsume.features.f3'))}</li></ul></div>
        </div>
        <!-- type -->
        <div id="type" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.type.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.type.desc'))}
          </p>
          <pre><code>${this.#code_typeExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.type.usesLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.type.uses.u1'))}</li><li>${this.#esc(this.#tr('guideContent.script.type.uses.u2'))}</li><li>${this.#esc(this.#tr('guideContent.script.type.uses.u3'))}</li><li>${this.#esc(this.#tr('guideContent.script.type.uses.u4'))}</li></ul></div>
        </div>
        <!-- import -->
        <div id="import" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.script.import.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.script.import.desc'))}
          </p>
          <pre><code>${this.#code_importExample}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.script.import.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.script.import.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.script.import.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.script.import.features.f3'))}</li><li>${this.#esc(this.#tr('guideContent.script.import.features.f4'))}</li></ul></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-guide-script'] = CskGuideScript;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-script', CskGuideScript]);
} else if (!customElements.get('csk-guide-script')) {
  customElements.define('csk-guide-script', CskGuideScript);
}

})();

// ── csk-guide-security.csk ──
(() => {
"use strict";

class CskGuideSecurity extends HTMLElement {
  #_code_xssExample = "<span class=cm>&lt;!-- Safe: auto-escaped --&gt;</span>\n<span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ userInput }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n\n<span class=cm>&lt;!-- Dangerous: allows script injection --&gt;</span>\n<span class=t>&lt;div</span> @html=\"userInput\"<span class=t>&gt;</span><span class=t>&lt;/div</span><span class=t>&gt;</span>\n\n<span class=cm>&lt;!-- Safe: URL validation --&gt;</span>\n<span class=t>&lt;a</span> :href=\"isValidUrl(link) ? link : '#'\"<span class=t>&gt;</span>Link<span class=t>&lt;/a</span><span class=t>&gt;</span>";
  get #code_xssExample() { return this.#_code_xssExample; }
  set #code_xssExample(v) { this.#_code_xssExample = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-guide-security');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- セキュリティ -->
      <section id="security" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.security.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.security.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.security.autoEscape.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.security.autoEscape.desc'))}
          </p>
          <pre><code>${this.#code_xssExample}</code></pre>
          <div class="warning"><strong>⚠️ ${this.#esc(this.#tr('guideContent.security.autoEscape.warningLabel'))}:</strong>${this.#esc(this.#tr('guideContent.security.autoEscape.warningText'))}</div>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.security.urlValidation.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.security.urlValidation.desc'))}
          </p>
          <pre><code><span class=k>fn</span> <span class=f>isValidUrl</span>(url: <span class=tp>string</span>): <span class=tp>boolean</span> {
  try {
    <span class=k>const</span> parsed = <span class=k>new</span> <span class=f>URL</span>(url)
    <span class=k>return</span> [<span class=s>'http:'</span>, <span class=s>'https:'</span>].<span class=f>includes</span>(parsed.protocol)
  } catch {
    <span class=k>return</span> <span class=n>false</span>
  }
}</code></pre>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.security.bestPractices.title'))}
          </h3>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.security.bestPractices.label'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i1'))}</li><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i2'))}</li><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i3'))}</li><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i4'))}</li><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i5'))}</li></ul></div>
        </div>
      </section>
      <!-- まとめ -->
      <section id="summary" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.summary.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.summary.desc'))}
        </p>
        <div class="note"><strong>${this.#esc(this.#tr('guideContent.summary.nextStepsLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.summary.nextSteps.s1'))}</li><li>${this.#esc(this.#tr('guideContent.summary.nextSteps.s2'))}</li><li>${this.#esc(this.#tr('guideContent.summary.nextSteps.s3'))}</li><li>${this.#esc(this.#tr('guideContent.summary.nextSteps.s4'))}</li></ul></div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- セキュリティ -->
      <section id="security" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.security.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.security.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.security.autoEscape.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.security.autoEscape.desc'))}
          </p>
          <pre><code>${this.#code_xssExample}</code></pre>
          <div class="warning"><strong>⚠️ ${this.#esc(this.#tr('guideContent.security.autoEscape.warningLabel'))}:</strong>${this.#esc(this.#tr('guideContent.security.autoEscape.warningText'))}</div>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.security.urlValidation.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.security.urlValidation.desc'))}
          </p>
          <pre><code><span class=k>fn</span> <span class=f>isValidUrl</span>(url: <span class=tp>string</span>): <span class=tp>boolean</span> {
  try {
    <span class=k>const</span> parsed = <span class=k>new</span> <span class=f>URL</span>(url)
    <span class=k>return</span> [<span class=s>'http:'</span>, <span class=s>'https:'</span>].<span class=f>includes</span>(parsed.protocol)
  } catch {
    <span class=k>return</span> <span class=n>false</span>
  }
}</code></pre>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.security.bestPractices.title'))}
          </h3>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.security.bestPractices.label'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i1'))}</li><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i2'))}</li><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i3'))}</li><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i4'))}</li><li>${this.#esc(this.#tr('guideContent.security.bestPractices.items.i5'))}</li></ul></div>
        </div>
      </section>
      <!-- まとめ -->
      <section id="summary" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.summary.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.summary.desc'))}
        </p>
        <div class="note"><strong>${this.#esc(this.#tr('guideContent.summary.nextStepsLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.summary.nextSteps.s1'))}</li><li>${this.#esc(this.#tr('guideContent.summary.nextSteps.s2'))}</li><li>${this.#esc(this.#tr('guideContent.summary.nextSteps.s3'))}</li><li>${this.#esc(this.#tr('guideContent.summary.nextSteps.s4'))}</li></ul></div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-guide-security'] = CskGuideSecurity;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-security', CskGuideSecurity]);
} else if (!customElements.get('csk-guide-security')) {
  customElements.define('csk-guide-security', CskGuideSecurity);
}

})();

// ── csk-guide-style.csk ──
(() => {
"use strict";

class CskGuideStyle extends HTMLElement {
  #_code_styling = ":host {\n  display: block;\n  --my-color: <span class=k>var</span>(--c-primary);\n}\n\n:<span class=f>host</span>(.dark) {\n  --my-color: <span class=k>var</span>(--c-accent);\n}\n\np {\n  color: <span class=k>var</span>(--my-color);\n  font-family: <span class=k>var</span>(--font);\n}";
  get #code_styling() { return this.#_code_styling; }
  set #code_styling(v) { this.#_code_styling = v; this.#scheduleUpdate(); }
  #_code_shadowScope = "<span class=cm>/* CSS is automatically scoped */</span>\np { color: white; }";
  get #code_shadowScope() { return this.#_code_shadowScope; }
  set #code_shadowScope(v) { this.#_code_shadowScope = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-guide-style');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- style ブロック -->
      <section id="style-block" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.style.styleBlock.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.style.styleBlock.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.style.scoping.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.style.scoping.desc'))}
          </p>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.style.scoping.shadowDOM'))}
            :
          </p>
          <pre><code>${this.#code_shadowScope}</code></pre>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.style.scoping.lightDOM'))}
            :
          </p>
          <pre><code>${this.#code_styling}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.style.scoping.featuresLabel'))}:</strong><ul><li><code>:host</code> - ${this.#esc(this.#tr('guideContent.style.scoping.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.style.scoping.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.style.scoping.features.f3'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.style.customProps.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.style.customProps.desc'))}
          </p>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.style.customProps.availableLabel'))}:</strong><ul><li><code>--c-bg</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p1'))}</li><li><code>--c-text</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p2'))}</li><li><code>--c-text-dim</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p3'))}</li><li><code>--c-border</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p4'))}</li><li><code>--c-bg-code</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p5'))}</li><li><code>--c-primary</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p6'))}</li><li><code>--c-accent</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p7'))}</li><li><code>--font</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p8'))}</li><li><code>--mono</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p9'))}</li></ul></div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- style ブロック -->
      <section id="style-block" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.style.styleBlock.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.style.styleBlock.desc'))}
        </p>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.style.scoping.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.style.scoping.desc'))}
          </p>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.style.scoping.shadowDOM'))}
            :
          </p>
          <pre><code>${this.#code_shadowScope}</code></pre>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.style.scoping.lightDOM'))}
            :
          </p>
          <pre><code>${this.#code_styling}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.style.scoping.featuresLabel'))}:</strong><ul><li><code>:host</code> - ${this.#esc(this.#tr('guideContent.style.scoping.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.style.scoping.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.style.scoping.features.f3'))}</li></ul></div>
        </div>
        <div class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.style.customProps.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.style.customProps.desc'))}
          </p>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.style.customProps.availableLabel'))}:</strong><ul><li><code>--c-bg</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p1'))}</li><li><code>--c-text</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p2'))}</li><li><code>--c-text-dim</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p3'))}</li><li><code>--c-border</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p4'))}</li><li><code>--c-bg-code</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p5'))}</li><li><code>--c-primary</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p6'))}</li><li><code>--c-accent</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p7'))}</li><li><code>--font</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p8'))}</li><li><code>--mono</code> - ${this.#esc(this.#tr('guideContent.style.customProps.props.p9'))}</li></ul></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-guide-style'] = CskGuideStyle;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-style', CskGuideStyle]);
} else if (!customElements.get('csk-guide-style')) {
  customElements.define('csk-guide-style', CskGuideStyle);
}

})();

// ── csk-guide-template.csk ──
(() => {
"use strict";

class CskGuideTemplate extends HTMLElement {
  #_code_interpolation = "<span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ count }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ firstName + ' ' + lastName }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ formatDate(date) }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>";
  get #code_interpolation() { return this.#_code_interpolation; }
  set #code_interpolation(v) { this.#_code_interpolation = v; this.#scheduleUpdate(); }
  #_code_dynamicAttr = "<span class=t>&lt;div</span> :class=\"isActive ? 'active' : ''\"<span class=t>&gt;</span>\n  <span class=t>&lt;a</span> :href=\"'/posts/' + postId\"<span class=t>&gt;</span>View<span class=t>&lt;/a</span><span class=t>&gt;</span>\n  <span class=t>&lt;img</span> :src=\"imageUrl\" :alt=\"imageName\" <span class=t>/&gt;</span>\n<span class=t>&lt;/div</span><span class=t>&gt;</span>";
  get #code_dynamicAttr() { return this.#_code_dynamicAttr; }
  set #code_dynamicAttr(v) { this.#_code_dynamicAttr = v; this.#scheduleUpdate(); }
  #_code_twoWayBinding = "<span class=t>&lt;input</span> :bind=\"name\" type=\"text\" <span class=t>/&gt;</span>\n<span class=t>&lt;textarea</span> :bind=\"description\"<span class=t>&gt;</span><span class=t>&lt;/textarea</span><span class=t>&gt;</span>\n<span class=cm>&lt;!-- name and description update automatically --&gt;</span>";
  get #code_twoWayBinding() { return this.#_code_twoWayBinding; }
  set #code_twoWayBinding(v) { this.#_code_twoWayBinding = v; this.#scheduleUpdate(); }
  #_code_eventHandling = "<span class=t>&lt;button</span> @click=\"increment\"<span class=t>&gt;</span>Count: <span class=i>{{ count }}</span><span class=t>&lt;/button</span><span class=t>&gt;</span>\n<span class=t>&lt;form</span> @submit|prevent=\"handleSubmit\"<span class=t>&gt;</span>\n  <span class=t>&lt;input</span> @keydown|enter=\"handleEnter\" <span class=t>/&gt;</span>\n  <span class=t>&lt;button</span> @click|stop=\"handleClick\"<span class=t>&gt;</span>Click<span class=t>&lt;/button</span><span class=t>&gt;</span>\n<span class=t>&lt;/form</span><span class=t>&gt;</span>";
  get #code_eventHandling() { return this.#_code_eventHandling; }
  set #code_eventHandling(v) { this.#_code_eventHandling = v; this.#scheduleUpdate(); }
  #_code_conditional = "<span class=c>&lt;#if condition=\"isLoggedIn\"&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span>Welcome, <span class=i>{{ username }}</span>!<span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=c>&lt;#else if condition=\"loading\"&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span>Loading...<span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=c>&lt;#else&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span>Please log <span class=k>in</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n&lt;/<span class=cm>#if&gt;</span>";
  get #code_conditional() { return this.#_code_conditional; }
  set #code_conditional(v) { this.#_code_conditional = v; this.#scheduleUpdate(); }
  #_code_loop = "<span class=c>&lt;#for each=\"item\" of=\"items\" key=\"item.id\"&gt;</span>\n  <span class=t>&lt;div</span><span class=t>&gt;</span>\n    <span class=t>&lt;h3</span><span class=t>&gt;</span><span class=i>{{ item.name }}</span><span class=t>&lt;/h3</span><span class=t>&gt;</span>\n    <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ item.description }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n  <span class=t>&lt;/div</span><span class=t>&gt;</span>\n<span class=c>&lt;#empty&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span>No items found<span class=t>&lt;/p</span><span class=t>&gt;</span>\n&lt;/<span class=cm>#for&gt;</span>";
  get #code_loop() { return this.#_code_loop; }
  set #code_loop(v) { this.#_code_loop = v; this.#scheduleUpdate(); }
  #_code_html = "<span class=t>&lt;div</span> @html=\"richContent\"<span class=t>&gt;</span><span class=t>&lt;/div</span><span class=t>&gt;</span>\n<span class=cm>&lt;!-- Renders: rawHtmlString (use only with trusted content!) --&gt;</span>";
  get #code_html() { return this.#_code_html; }
  set #code_html(v) { this.#_code_html = v; this.#scheduleUpdate(); }
  #_code_slot = "<span class=t>&lt;div</span> class=\"card\"<span class=t>&gt;</span>\n  <span class=t>&lt;slot</span> name=\"header\"<span class=t>&gt;</span><span class=t>&lt;/slot</span><span class=t>&gt;</span>\n  <span class=t>&lt;slot</span><span class=t>&gt;</span><span class=t>&lt;/slot</span><span class=t>&gt;</span>\n  <span class=t>&lt;slot</span> name=\"footer\"<span class=t>&gt;</span><span class=t>&lt;/slot</span><span class=t>&gt;</span>\n<span class=t>&lt;/div</span><span class=t>&gt;</span>";
  get #code_slot() { return this.#_code_slot; }
  set #code_slot(v) { this.#_code_slot = v; this.#scheduleUpdate(); }
  #_code_slotUsage = "<span class=t>&lt;Card</span><span class=t>&gt;</span>\n  <span class=t>&lt;template</span> #header<span class=t>&gt;</span>\n    <span class=t>&lt;h2</span><span class=t>&gt;</span>Title<span class=t>&lt;/h2</span><span class=t>&gt;</span>\n  <span class=t>&lt;/template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span>Main content<span class=t>&lt;/p</span><span class=t>&gt;</span>\n  <span class=t>&lt;template</span> #footer<span class=t>&gt;</span>\n    <span class=t>&lt;button</span><span class=t>&gt;</span>Close<span class=t>&lt;/button</span><span class=t>&gt;</span>\n  <span class=t>&lt;/template</span><span class=t>&gt;</span>\n<span class=t>&lt;/Card</span><span class=t>&gt;</span>";
  get #code_slotUsage() { return this.#_code_slotUsage; }
  set #code_slotUsage(v) { this.#_code_slotUsage = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-guide-template');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- template ブロック -->
      <section id="template-block" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.template.templateBlock.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.template.templateBlock.desc'))}
        </p>
      </section>
      <!-- テンプレート構文 -->
      <section id="template-syntax" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.template.syntax.title'))}
        </h2>
        <!-- 補間 -->
        <div id="interpolation" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.interpolation.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.interpolation.desc'))}
          </p>
          <pre><code>${this.#code_interpolation}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.interpolation.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.template.interpolation.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.template.interpolation.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.template.interpolation.features.f3'))}</li></ul></div>
        </div>
        <!-- 動的属性 -->
        <div id="dynamic-attr" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.dynamicAttr.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.dynamicAttr.desc'))}
          </p>
          <pre><code>${this.#code_dynamicAttr}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.dynamicAttr.commonLabel'))}:</strong><ul><li><code>:class</code> - ${this.#esc(this.#tr('guideContent.template.dynamicAttr.common.c1'))}</li><li><code>:href</code> - ${this.#esc(this.#tr('guideContent.template.dynamicAttr.common.c2'))}</li><li><code>:src</code> - ${this.#esc(this.#tr('guideContent.template.dynamicAttr.common.c3'))}</li><li><code>:disabled</code> - ${this.#esc(this.#tr('guideContent.template.dynamicAttr.common.c4'))}</li></ul></div>
        </div>
        <!-- 双方向バインディング -->
        <div id="two-way" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.twoWay.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.twoWay.desc'))}
          </p>
          <pre><code>${this.#code_twoWayBinding}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.twoWay.supportedLabel'))}:</strong><ul><li>&lt;input type="text"&gt;</li><li>&lt;textarea&gt;</li><li>&lt;select&gt;</li><li>&lt;input type="checkbox"&gt;</li><li>&lt;input type="radio"&gt;</li></ul></div>
        </div>
        <!-- イベントハンドリング -->
        <div id="events" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.events.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.events.desc'))}
          </p>
          <pre><code>${this.#code_eventHandling}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.events.modifiersLabel'))}:</strong><ul><li><code>|prevent</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.prevent'))}</li><li><code>|stop</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.stop'))}</li><li><code>|enter</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.enter'))}</li><li><code>|escape</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.escape'))}</li><li><code>|space</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.space'))}</li></ul></div>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.events.commonLabel'))}:</strong><ul><li><code>@click</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c1'))}</li><li><code>@submit</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c2'))}</li><li><code>@change</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c3'))}</li><li><code>@keydown</code>, <code>@keyup</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c4'))}</li><li><code>@focus</code>, <code>@blur</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c5'))}</li></ul></div>
        </div>
        <!-- 条件分岐 -->
        <div id="conditionals" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.conditionals.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.conditionals.desc'))}
          </p>
          <pre><code>${this.#code_conditional}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.conditionals.syntaxLabel'))}:</strong><ul><li><code>&lt;#if condition="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s1'))}</li><li><code>&lt;#else if condition="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s2'))}</li><li><code>&lt;#else&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s3'))}</li><li><code>&lt;/#if&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s4'))}</li></ul></div>
        </div>
        <!-- ループ -->
        <div id="loops" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.loops.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.loops.desc'))}
          </p>
          <pre><code>${this.#code_loop}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.loops.attributesLabel'))}:</strong><ul><li><code>each="variable"</code> - ${this.#esc(this.#tr('guideContent.template.loops.attributes.a1'))}</li><li><code>of="array"</code> - ${this.#esc(this.#tr('guideContent.template.loops.attributes.a2'))}</li><li><code>key="item.id"</code> - ${this.#esc(this.#tr('guideContent.template.loops.attributes.a3'))}</li><li><code>&lt;#empty&gt;</code> - ${this.#esc(this.#tr('guideContent.template.loops.attributes.a4'))}</li></ul></div>
        </div>
        <!-- HTML出力 -->
        <div id="html-output" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.htmlOutput.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.htmlOutput.desc'))}
          </p>
          <pre><code>${this.#code_html}</code></pre>
          <div class="warning"><strong>⚠️ ${this.#esc(this.#tr('guideContent.template.htmlOutput.warningLabel'))}:</strong>${this.#esc(this.#tr('guideContent.template.htmlOutput.warningText'))}</div>
        </div>
        <!-- スロット -->
        <div id="slots" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.slots.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.slots.desc'))}
          </p>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.template.slots.componentDef'))}
            :
          </p>
          <pre><code>${this.#code_slot}</code></pre>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.template.slots.componentUsage'))}
            :
          </p>
          <pre><code>${this.#code_slotUsage}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.slots.typesLabel'))}:</strong><ul><li><code>&lt;slot&gt;</code> - ${this.#esc(this.#tr('guideContent.template.slots.types.t1'))}</li><li><code>&lt;slot name="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.slots.types.t2'))}</li><li><code>&lt;template #name&gt;</code> - ${this.#esc(this.#tr('guideContent.template.slots.types.t3'))}</li></ul></div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- template ブロック -->
      <section id="template-block" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.template.templateBlock.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('guideContent.template.templateBlock.desc'))}
        </p>
      </section>
      <!-- テンプレート構文 -->
      <section id="template-syntax" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('guideContent.template.syntax.title'))}
        </h2>
        <!-- 補間 -->
        <div id="interpolation" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.interpolation.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.interpolation.desc'))}
          </p>
          <pre><code>${this.#code_interpolation}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.interpolation.featuresLabel'))}:</strong><ul><li>${this.#esc(this.#tr('guideContent.template.interpolation.features.f1'))}</li><li>${this.#esc(this.#tr('guideContent.template.interpolation.features.f2'))}</li><li>${this.#esc(this.#tr('guideContent.template.interpolation.features.f3'))}</li></ul></div>
        </div>
        <!-- 動的属性 -->
        <div id="dynamic-attr" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.dynamicAttr.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.dynamicAttr.desc'))}
          </p>
          <pre><code>${this.#code_dynamicAttr}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.dynamicAttr.commonLabel'))}:</strong><ul><li><code>:class</code> - ${this.#esc(this.#tr('guideContent.template.dynamicAttr.common.c1'))}</li><li><code>:href</code> - ${this.#esc(this.#tr('guideContent.template.dynamicAttr.common.c2'))}</li><li><code>:src</code> - ${this.#esc(this.#tr('guideContent.template.dynamicAttr.common.c3'))}</li><li><code>:disabled</code> - ${this.#esc(this.#tr('guideContent.template.dynamicAttr.common.c4'))}</li></ul></div>
        </div>
        <!-- 双方向バインディング -->
        <div id="two-way" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.twoWay.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.twoWay.desc'))}
          </p>
          <pre><code>${this.#code_twoWayBinding}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.twoWay.supportedLabel'))}:</strong><ul><li>&lt;input type="text"&gt;</li><li>&lt;textarea&gt;</li><li>&lt;select&gt;</li><li>&lt;input type="checkbox"&gt;</li><li>&lt;input type="radio"&gt;</li></ul></div>
        </div>
        <!-- イベントハンドリング -->
        <div id="events" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.events.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.events.desc'))}
          </p>
          <pre><code>${this.#code_eventHandling}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.events.modifiersLabel'))}:</strong><ul><li><code>|prevent</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.prevent'))}</li><li><code>|stop</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.stop'))}</li><li><code>|enter</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.enter'))}</li><li><code>|escape</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.escape'))}</li><li><code>|space</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.space'))}</li></ul></div>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.events.commonLabel'))}:</strong><ul><li><code>@click</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c1'))}</li><li><code>@submit</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c2'))}</li><li><code>@change</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c3'))}</li><li><code>@keydown</code>, <code>@keyup</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c4'))}</li><li><code>@focus</code>, <code>@blur</code> - ${this.#esc(this.#tr('guideContent.template.events.common.c5'))}</li></ul></div>
        </div>
        <!-- 条件分岐 -->
        <div id="conditionals" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.conditionals.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.conditionals.desc'))}
          </p>
          <pre><code>${this.#code_conditional}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.conditionals.syntaxLabel'))}:</strong><ul><li><code>&lt;#if condition="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s1'))}</li><li><code>&lt;#else if condition="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s2'))}</li><li><code>&lt;#else&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s3'))}</li><li><code>&lt;/#if&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s4'))}</li></ul></div>
        </div>
        <!-- ループ -->
        <div id="loops" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.loops.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.loops.desc'))}
          </p>
          <pre><code>${this.#code_loop}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.loops.attributesLabel'))}:</strong><ul><li><code>each="variable"</code> - ${this.#esc(this.#tr('guideContent.template.loops.attributes.a1'))}</li><li><code>of="array"</code> - ${this.#esc(this.#tr('guideContent.template.loops.attributes.a2'))}</li><li><code>key="item.id"</code> - ${this.#esc(this.#tr('guideContent.template.loops.attributes.a3'))}</li><li><code>&lt;#empty&gt;</code> - ${this.#esc(this.#tr('guideContent.template.loops.attributes.a4'))}</li></ul></div>
        </div>
        <!-- HTML出力 -->
        <div id="html-output" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.htmlOutput.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.htmlOutput.desc'))}
          </p>
          <pre><code>${this.#code_html}</code></pre>
          <div class="warning"><strong>⚠️ ${this.#esc(this.#tr('guideContent.template.htmlOutput.warningLabel'))}:</strong>${this.#esc(this.#tr('guideContent.template.htmlOutput.warningText'))}</div>
        </div>
        <!-- スロット -->
        <div id="slots" class="subsection">
          <h3>
            ${this.#esc(this.#tr('guideContent.template.slots.title'))}
          </h3>
          <p>
            ${this.#esc(this.#tr('guideContent.template.slots.desc'))}
          </p>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.template.slots.componentDef'))}
            :
          </p>
          <pre><code>${this.#code_slot}</code></pre>
          <p class="example-title">
            ${this.#esc(this.#tr('guideContent.template.slots.componentUsage'))}
            :
          </p>
          <pre><code>${this.#code_slotUsage}</code></pre>
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.slots.typesLabel'))}:</strong><ul><li><code>&lt;slot&gt;</code> - ${this.#esc(this.#tr('guideContent.template.slots.types.t1'))}</li><li><code>&lt;slot name="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.slots.types.t2'))}</li><li><code>&lt;template #name&gt;</code> - ${this.#esc(this.#tr('guideContent.template.slots.types.t3'))}</li></ul></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-guide-template'] = CskGuideTemplate;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-template', CskGuideTemplate]);
} else if (!customElements.get('csk-guide-template')) {
  customElements.define('csk-guide-template', CskGuideTemplate);
}

})();

// ── csk-page-guide.csk ──

(() => {
"use strict";

class CskPageGuide extends HTMLElement {
  #_sidebarOpen = true;
  get #sidebarOpen() { return this.#_sidebarOpen; }
  set #sidebarOpen(v) { this.#_sidebarOpen = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-guide');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    const sections = document.querySelectorAll('.doc-section[id]')
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.#updateActiveLink(entry.target.id)
            }
          }
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 })
        sections.forEach((s) => { observer.observe(s) })
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #toggleSidebar() {
    this.#sidebarOpen = !this.#sidebarOpen
  }

  #handleTocClick(e) {
    const link = e.target.closest('a')
        if (!link) return
        const href = link.getAttribute('href')
        if (href && href.startsWith('#') && !href.startsWith('#/')) {
          e.preventDefault()
          const el = document.getElementById(href.substring(1))
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
  }

  #updateActiveLink(sectionId) {
    const links = document.querySelectorAll('.toc a')
        links.forEach((link) => {
          const href = link.getAttribute('href')
          if (href && href.substring(1) === sectionId) {
            link.classList.add('active')
          } else {
            link.classList.remove('active')
          }
        })
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-guide"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);min-height:100vh;}[data-chasket-scope="csk-page-guide"] .page-container{display:grid;grid-template-columns:280px 1fr;gap:0;max-width:var(--max-w);margin:0 auto;}[data-chasket-scope="csk-page-guide"] /* Sidebar Navigation */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);height:100vh;position:sticky;top:0;overflow-y:auto;overscroll-behavior:contain;}[data-chasket-scope="csk-page-guide"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-guide"] .sidebar-header h2{font-size:1rem;font-weight:600;margin:0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0;width:2rem;height:2rem;align-items:center;justify-content:center;}[data-chasket-scope="csk-page-guide"] .toc ul{list-style:none;padding:0;margin:0;}[data-chasket-scope="csk-page-guide"] .toc > ul > li{margin:0.25rem 0;}[data-chasket-scope="csk-page-guide"] .toc a{color:var(--c-text-dim);text-decoration:none;display:block;padding:0.5rem 0.75rem;border-radius:0.375rem;font-size:0.9rem;transition:all 0.2s ease;}[data-chasket-scope="csk-page-guide"] .toc a:hover{color:var(--c-primary);background:rgba(108, 92, 231, 0.1);}[data-chasket-scope="csk-page-guide"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;}[data-chasket-scope="csk-page-guide"] .toc ul ul{padding-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-guide"] .toc ul ul li{margin:0.125rem 0;}[data-chasket-scope="csk-page-guide"] .toc ul ul a{font-size:0.85rem;color:var(--c-text-dim);padding:0.375rem 0.5rem;}[data-chasket-scope="csk-page-guide"] /* Main Content */ .content{padding:var(--space-page) 2rem;overflow-y:auto;}[data-chasket-scope="csk-page-guide"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:2px solid var(--c-border);}[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:2.5rem;font-weight:700;margin:0 0 0.5rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);margin:0;}[data-chasket-scope="csk-page-guide"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;scroll-margin-top:2rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.8rem;font-weight:700;margin:0 0 1rem 0;color:var(--c-text);padding-bottom:0.5rem;border-bottom:2px solid var(--c-primary);}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1.3rem;font-weight:600;margin:1.5rem 0 0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .doc-section h4{font-size:1rem;font-weight:600;margin:1rem 0 0.5rem 0;color:var(--c-primary);font-family:var(--mono);}[data-chasket-scope="csk-page-guide"] .doc-section p{font-size:0.95rem;line-height:1.6;margin:0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .subsection{margin:1.5rem 0;padding:0;}[data-chasket-scope="csk-page-guide"] .property{margin:1.5rem 0;padding:1rem;background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-primary);border-radius:0.375rem;}[data-chasket-scope="csk-page-guide"] .property h4{margin-top:0;}[data-chasket-scope="csk-page-guide"] .property p{margin:0.5rem 0;}[data-chasket-scope="csk-page-guide"] /* Code Blocks */ pre{background:var(--c-bg-code);border:1px solid var(--c-border);border-radius:0.5rem;padding:1rem;overflow-x:auto;margin:1rem 0;font-family:var(--mono);}[data-chasket-scope="csk-page-guide"] code{font-size:0.85rem;line-height:1.5;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-guide"] pre code{color:#dfe6e9;}[data-chasket-scope="csk-page-guide"] /* Syntax Highlighting — same palette as home */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-guide"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-guide"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-guide"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-guide"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-guide"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-guide"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-guide"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-guide"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-guide"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-guide"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-guide"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-guide"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-guide"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-guide"] .warning, [data-chasket-scope="csk-page-guide"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-guide"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-guide"] .note ul, [data-chasket-scope="csk-page-guide"] .note li{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-guide"] .warning{background:rgba(255, 107, 107, 0.1);border-left:3px solid #ff6b6b;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .warning strong{color:#ff6b6b;}[data-chasket-scope="csk-page-guide"] .note-text{background:transparent;padding:0.5rem 0;margin:0.5rem 0;border-left:3px solid var(--c-primary);padding-left:0.75rem;color:var(--c-text-dim);font-size:0.9rem;font-style:italic;}[data-chasket-scope="csk-page-guide"] .example-title{font-weight:600;color:var(--c-primary);margin-top:1rem;margin-bottom:0.5rem;font-size:0.9rem;}[data-chasket-scope="csk-page-guide"] /* Responsive Design */ @media (max-width:1024px){.page-container{grid-template-columns:240px 1fr;}.sidebar{padding:1rem;}.content{padding:1.5rem;}}@media (max-width:768px){[data-chasket-scope="csk-page-guide"] .page-container{grid-template-columns:1fr;}[data-chasket-scope="csk-page-guide"] .sidebar{position:fixed;left:0;top:0;width:280px;height:100vh;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);z-index:1000;box-shadow:2px 0 8px rgba(0, 0, 0, 0.3);}[data-chasket-scope="csk-page-guide"] .sidebar.open{transform:translateX(0);}[data-chasket-scope="csk-page-guide"] .sidebar-toggle{display:flex;}[data-chasket-scope="csk-page-guide"] .content{padding:1rem;}[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:1.8rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.4rem;}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1.1rem;}[data-chasket-scope="csk-page-guide"] pre{padding:0.75rem;font-size:0.8rem;}[data-chasket-scope="csk-page-guide"] code{font-size:0.8rem;}}@media (max-width:480px){[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:1.5rem;}[data-chasket-scope="csk-page-guide"] .subtitle{font-size:0.95rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.25rem;}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1rem;}[data-chasket-scope="csk-page-guide"] .content{padding:0.75rem;}[data-chasket-scope="csk-page-guide"] pre{padding:0.5rem;font-size:0.75rem;}}[data-chasket-scope="csk-page-guide"] /* Scrollbar Styling */:host::-webkit-scrollbar{width:8px;height:8px;}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-track{background:var(--c-bg);}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-thumb{background:var(--c-border);border-radius:4px;}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-thumb:hover{background:var(--c-text-dim);}[data-chasket-scope="csk-page-guide"] /* Smooth Scrolling */ html{scroll-behavior:smooth;}[data-chasket-scope="csk-page-guide"] /* Links */ a{color:var(--c-primary);text-decoration:none;transition:color 0.2s ease;}[data-chasket-scope="csk-page-guide"] a:hover{color:var(--c-primary-light);text-decoration:underline;}[data-chasket-scope="csk-page-guide"] /* Typography */ strong{font-weight:600;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] em{font-style:italic;color:var(--c-text-dim);}</style>
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('guide.toc'))}
            </h2>
            <button data-chasket-id="fl-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-1" class="toc">
            <ul>
              <li>
<a href="#file-structure">${this.#esc(this.#tr('guide.sections.fileStructure'))}</a>              </li>
              <li>
<a href="#meta-block">${this.#esc(this.#tr('guide.sections.metaBlock'))}</a>              </li>
              <li>
<a href="#script-block">${this.#esc(this.#tr('guide.sections.scriptBlock'))}</a>              </li>
              <li><a href="#script-declarations">${this.#esc(this.#tr('guide.sections.scriptDeclarations'))}</a><ul><li><a href="#state">${this.#esc(this.#tr('guide.toc_items.state'))}</a></li><li><a href="#prop">${this.#esc(this.#tr('guide.toc_items.prop'))}</a></li><li><a href="#computed">${this.#esc(this.#tr('guide.toc_items.computed'))}</a></li><li><a href="#fn">${this.#esc(this.#tr('guide.toc_items.fn'))}</a></li><li><a href="#emit">${this.#esc(this.#tr('guide.toc_items.emit'))}</a></li><li><a href="#watch">${this.#esc(this.#tr('guide.toc_items.watch'))}</a></li><li><a href="#ref">${this.#esc(this.#tr('guide.toc_items.ref'))}</a></li><li><a href="#provide-consume">${this.#esc(this.#tr('guide.toc_items.provideConsume'))}</a></li><li><a href="#type">${this.#esc(this.#tr('guide.toc_items.type'))}</a></li><li><a href="#import">${this.#esc(this.#tr('guide.toc_items.import'))}</a></li></ul></li>
              <li>
<a href="#template-block">${this.#esc(this.#tr('guide.sections.templateBlock'))}</a>              </li>
              <li><a href="#template-syntax">${this.#esc(this.#tr('guide.sections.templateSyntax'))}</a><ul><li><a href="#interpolation">${this.#esc(this.#tr('guide.toc_items.interpolation'))}</a></li><li><a href="#dynamic-attr">${this.#esc(this.#tr('guide.toc_items.dynamicAttr'))}</a></li><li><a href="#two-way">${this.#esc(this.#tr('guide.toc_items.twoWay'))}</a></li><li><a href="#events">${this.#esc(this.#tr('guide.toc_items.events'))}</a></li><li><a href="#conditionals">${this.#esc(this.#tr('guide.toc_items.conditionals'))}</a></li><li><a href="#loops">${this.#esc(this.#tr('guide.toc_items.loops'))}</a></li><li><a href="#html-output">${this.#esc(this.#tr('guide.toc_items.htmlOutput'))}</a></li><li><a href="#slots">${this.#esc(this.#tr('guide.toc_items.slots'))}</a></li></ul></li>
              <li>
<a href="#style-block">${this.#esc(this.#tr('guide.sections.styleBlock'))}</a>              </li>
              <li>
<a href="#component-comm">${this.#esc(this.#tr('guide.sections.componentComm'))}</a>              </li>
              <li>
<a href="#security">${this.#esc(this.#tr('guide.sections.security'))}</a>              </li>
            </ul>
          </nav>
        </aside>
        <!-- Main Content -->
        <main class="content">
          <!-- Header -->
          <div class="page-header">
            <h1>
              ${this.#esc(this.#tr('guide.title'))}
            </h1>
            <p class="subtitle">
              ${this.#esc(this.#tr('guide.subtitle'))}
            </p>
          </div>
          <!-- Sub-components -->
          <csk-guide-file-structure></csk-guide-file-structure>
          <csk-guide-script></csk-guide-script>
          <csk-guide-template></csk-guide-template>
          <csk-guide-style></csk-guide-style>
          <csk-guide-communication></csk-guide-communication>
          <csk-guide-security></csk-guide-security>
        </main>
      </div>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-guide"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);min-height:100vh;}[data-chasket-scope="csk-page-guide"] .page-container{display:grid;grid-template-columns:280px 1fr;gap:0;max-width:var(--max-w);margin:0 auto;}[data-chasket-scope="csk-page-guide"] /* Sidebar Navigation */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);height:100vh;position:sticky;top:0;overflow-y:auto;overscroll-behavior:contain;}[data-chasket-scope="csk-page-guide"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-guide"] .sidebar-header h2{font-size:1rem;font-weight:600;margin:0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0;width:2rem;height:2rem;align-items:center;justify-content:center;}[data-chasket-scope="csk-page-guide"] .toc ul{list-style:none;padding:0;margin:0;}[data-chasket-scope="csk-page-guide"] .toc > ul > li{margin:0.25rem 0;}[data-chasket-scope="csk-page-guide"] .toc a{color:var(--c-text-dim);text-decoration:none;display:block;padding:0.5rem 0.75rem;border-radius:0.375rem;font-size:0.9rem;transition:all 0.2s ease;}[data-chasket-scope="csk-page-guide"] .toc a:hover{color:var(--c-primary);background:rgba(108, 92, 231, 0.1);}[data-chasket-scope="csk-page-guide"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;}[data-chasket-scope="csk-page-guide"] .toc ul ul{padding-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-guide"] .toc ul ul li{margin:0.125rem 0;}[data-chasket-scope="csk-page-guide"] .toc ul ul a{font-size:0.85rem;color:var(--c-text-dim);padding:0.375rem 0.5rem;}[data-chasket-scope="csk-page-guide"] /* Main Content */ .content{padding:var(--space-page) 2rem;overflow-y:auto;}[data-chasket-scope="csk-page-guide"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:2px solid var(--c-border);}[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:2.5rem;font-weight:700;margin:0 0 0.5rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);margin:0;}[data-chasket-scope="csk-page-guide"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;scroll-margin-top:2rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.8rem;font-weight:700;margin:0 0 1rem 0;color:var(--c-text);padding-bottom:0.5rem;border-bottom:2px solid var(--c-primary);}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1.3rem;font-weight:600;margin:1.5rem 0 0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .doc-section h4{font-size:1rem;font-weight:600;margin:1rem 0 0.5rem 0;color:var(--c-primary);font-family:var(--mono);}[data-chasket-scope="csk-page-guide"] .doc-section p{font-size:0.95rem;line-height:1.6;margin:0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .subsection{margin:1.5rem 0;padding:0;}[data-chasket-scope="csk-page-guide"] .property{margin:1.5rem 0;padding:1rem;background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-primary);border-radius:0.375rem;}[data-chasket-scope="csk-page-guide"] .property h4{margin-top:0;}[data-chasket-scope="csk-page-guide"] .property p{margin:0.5rem 0;}[data-chasket-scope="csk-page-guide"] /* Code Blocks */ pre{background:var(--c-bg-code);border:1px solid var(--c-border);border-radius:0.5rem;padding:1rem;overflow-x:auto;margin:1rem 0;font-family:var(--mono);}[data-chasket-scope="csk-page-guide"] code{font-size:0.85rem;line-height:1.5;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-guide"] pre code{color:#dfe6e9;}[data-chasket-scope="csk-page-guide"] /* Syntax Highlighting — same palette as home */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-guide"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-guide"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-guide"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-guide"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-guide"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-guide"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-guide"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-guide"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-guide"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-guide"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-guide"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-guide"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-guide"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-guide"] .warning, [data-chasket-scope="csk-page-guide"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-guide"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-guide"] .note ul, [data-chasket-scope="csk-page-guide"] .note li{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-guide"] .warning{background:rgba(255, 107, 107, 0.1);border-left:3px solid #ff6b6b;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .warning strong{color:#ff6b6b;}[data-chasket-scope="csk-page-guide"] .note-text{background:transparent;padding:0.5rem 0;margin:0.5rem 0;border-left:3px solid var(--c-primary);padding-left:0.75rem;color:var(--c-text-dim);font-size:0.9rem;font-style:italic;}[data-chasket-scope="csk-page-guide"] .example-title{font-weight:600;color:var(--c-primary);margin-top:1rem;margin-bottom:0.5rem;font-size:0.9rem;}[data-chasket-scope="csk-page-guide"] /* Responsive Design */ @media (max-width:1024px){.page-container{grid-template-columns:240px 1fr;}.sidebar{padding:1rem;}.content{padding:1.5rem;}}@media (max-width:768px){[data-chasket-scope="csk-page-guide"] .page-container{grid-template-columns:1fr;}[data-chasket-scope="csk-page-guide"] .sidebar{position:fixed;left:0;top:0;width:280px;height:100vh;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);z-index:1000;box-shadow:2px 0 8px rgba(0, 0, 0, 0.3);}[data-chasket-scope="csk-page-guide"] .sidebar.open{transform:translateX(0);}[data-chasket-scope="csk-page-guide"] .sidebar-toggle{display:flex;}[data-chasket-scope="csk-page-guide"] .content{padding:1rem;}[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:1.8rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.4rem;}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1.1rem;}[data-chasket-scope="csk-page-guide"] pre{padding:0.75rem;font-size:0.8rem;}[data-chasket-scope="csk-page-guide"] code{font-size:0.8rem;}}@media (max-width:480px){[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:1.5rem;}[data-chasket-scope="csk-page-guide"] .subtitle{font-size:0.95rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.25rem;}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1rem;}[data-chasket-scope="csk-page-guide"] .content{padding:0.75rem;}[data-chasket-scope="csk-page-guide"] pre{padding:0.5rem;font-size:0.75rem;}}[data-chasket-scope="csk-page-guide"] /* Scrollbar Styling */:host::-webkit-scrollbar{width:8px;height:8px;}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-track{background:var(--c-bg);}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-thumb{background:var(--c-border);border-radius:4px;}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-thumb:hover{background:var(--c-text-dim);}[data-chasket-scope="csk-page-guide"] /* Smooth Scrolling */ html{scroll-behavior:smooth;}[data-chasket-scope="csk-page-guide"] /* Links */ a{color:var(--c-primary);text-decoration:none;transition:color 0.2s ease;}[data-chasket-scope="csk-page-guide"] a:hover{color:var(--c-primary-light);text-decoration:underline;}[data-chasket-scope="csk-page-guide"] /* Typography */ strong{font-weight:600;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] em{font-style:italic;color:var(--c-text-dim);}</style>
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('guide.toc'))}
            </h2>
            <button data-chasket-id="fl-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-1" class="toc">
            <ul>
              <li>
<a href="#file-structure">${this.#esc(this.#tr('guide.sections.fileStructure'))}</a>              </li>
              <li>
<a href="#meta-block">${this.#esc(this.#tr('guide.sections.metaBlock'))}</a>              </li>
              <li>
<a href="#script-block">${this.#esc(this.#tr('guide.sections.scriptBlock'))}</a>              </li>
              <li><a href="#script-declarations">${this.#esc(this.#tr('guide.sections.scriptDeclarations'))}</a><ul><li><a href="#state">${this.#esc(this.#tr('guide.toc_items.state'))}</a></li><li><a href="#prop">${this.#esc(this.#tr('guide.toc_items.prop'))}</a></li><li><a href="#computed">${this.#esc(this.#tr('guide.toc_items.computed'))}</a></li><li><a href="#fn">${this.#esc(this.#tr('guide.toc_items.fn'))}</a></li><li><a href="#emit">${this.#esc(this.#tr('guide.toc_items.emit'))}</a></li><li><a href="#watch">${this.#esc(this.#tr('guide.toc_items.watch'))}</a></li><li><a href="#ref">${this.#esc(this.#tr('guide.toc_items.ref'))}</a></li><li><a href="#provide-consume">${this.#esc(this.#tr('guide.toc_items.provideConsume'))}</a></li><li><a href="#type">${this.#esc(this.#tr('guide.toc_items.type'))}</a></li><li><a href="#import">${this.#esc(this.#tr('guide.toc_items.import'))}</a></li></ul></li>
              <li>
<a href="#template-block">${this.#esc(this.#tr('guide.sections.templateBlock'))}</a>              </li>
              <li><a href="#template-syntax">${this.#esc(this.#tr('guide.sections.templateSyntax'))}</a><ul><li><a href="#interpolation">${this.#esc(this.#tr('guide.toc_items.interpolation'))}</a></li><li><a href="#dynamic-attr">${this.#esc(this.#tr('guide.toc_items.dynamicAttr'))}</a></li><li><a href="#two-way">${this.#esc(this.#tr('guide.toc_items.twoWay'))}</a></li><li><a href="#events">${this.#esc(this.#tr('guide.toc_items.events'))}</a></li><li><a href="#conditionals">${this.#esc(this.#tr('guide.toc_items.conditionals'))}</a></li><li><a href="#loops">${this.#esc(this.#tr('guide.toc_items.loops'))}</a></li><li><a href="#html-output">${this.#esc(this.#tr('guide.toc_items.htmlOutput'))}</a></li><li><a href="#slots">${this.#esc(this.#tr('guide.toc_items.slots'))}</a></li></ul></li>
              <li>
<a href="#style-block">${this.#esc(this.#tr('guide.sections.styleBlock'))}</a>              </li>
              <li>
<a href="#component-comm">${this.#esc(this.#tr('guide.sections.componentComm'))}</a>              </li>
              <li>
<a href="#security">${this.#esc(this.#tr('guide.sections.security'))}</a>              </li>
            </ul>
          </nav>
        </aside>
        <!-- Main Content -->
        <main class="content">
          <!-- Header -->
          <div class="page-header">
            <h1>
              ${this.#esc(this.#tr('guide.title'))}
            </h1>
            <p class="subtitle">
              ${this.#esc(this.#tr('guide.subtitle'))}
            </p>
          </div>
          <!-- Sub-components -->
          <csk-guide-file-structure></csk-guide-file-structure>
          <csk-guide-script></csk-guide-script>
          <csk-guide-template></csk-guide-template>
          <csk-guide-style></csk-guide-style>
          <csk-guide-communication></csk-guide-communication>
          <csk-guide-security></csk-guide-security>
        </main>
      </div>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
    {
      const el = this.querySelector('[data-chasket-id="fl-0"]');
      if (el) {
        const fn_click = (e) => { this.#toggleSidebar(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-1"]');
      if (el) {
        const fn_click = (e) => { this.#handleTocClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-page-guide'] = CskPageGuide;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-guide', CskPageGuide]);
} else if (!customElements.get('csk-page-guide')) {
  customElements.define('csk-page-guide', CskPageGuide);
}

})();

// ── csk-code-demo.csk ──
(() => {
"use strict";

class CskCodeDemo extends HTMLElement {
  #_activeTab = "counter";
  get #activeTab() { return this.#_activeTab; }
  set #activeTab(v) { this.#_activeTab = v; this.#scheduleUpdate(); }
  #_demoCount = 0;
  get #demoCount() { return this.#_demoCount; }
  set #demoCount(v) { this.#_demoCount = v; this.#scheduleUpdate(); }
  #_todoItems = [];
  get #todoItems() { return this.#_todoItems; }
  set #todoItems(v) { this.#_todoItems = v; this.#scheduleUpdate(); }
  #_todoText = "";
  get #todoText() { return this.#_todoText; }
  set #todoText(v) { this.#_todoText = v; this.#scheduleUpdate(); }
  #_codeCounter = "<span class=t>&lt;meta&gt;</span>\n  <span class=a>name</span>: <span class=s>&quot;x-counter&quot;</span>\n  <span class=a>shadow</span>: <span class=s>open</span>\n<span class=t>&lt;/meta&gt;</span>\n\n<span class=t>&lt;script&gt;</span>\n  <span class=k>state</span> <span class=v>count</span>: <span class=tp>number</span> = <span class=n>0</span>\n\n  <span class=k>fn</span> <span class=f>increment</span>() { count += <span class=n>1</span> }\n  <span class=k>fn</span> <span class=f>decrement</span>() { count -= <span class=n>1</span> }\n<span class=t>&lt;/script&gt;</span>\n\n<span class=t>&lt;template&gt;</span>\n  <span class=t>&lt;div</span> <span class=a>class</span>=<span class=s>&quot;counter&quot;</span><span class=t>&gt;</span>\n    <span class=t>&lt;button</span> <span class=d>@click</span>=<span class=s>&quot;decrement&quot;</span><span class=t>&gt;</span>-<span class=t>&lt;/button&gt;</span>\n    <span class=t>&lt;span&gt;</span><span class=i>{{ count }}</span><span class=t>&lt;/span&gt;</span>\n    <span class=t>&lt;button</span> <span class=d>@click</span>=<span class=s>&quot;increment&quot;</span><span class=t>&gt;</span>+<span class=t>&lt;/button&gt;</span>\n  <span class=t>&lt;/div&gt;</span>\n<span class=t>&lt;/template&gt;</span>\n\n<span class=t>&lt;style&gt;</span>\n  <span class=cs>.counter</span> { <span class=a>display</span>: flex; <span class=a>gap</span>: 12px; }\n  <span class=cs>button</span>  { <span class=a>width</span>: 36px; <span class=a>border-radius</span>: 8px; }\n  <span class=cs>span</span>    { <span class=a>font-size</span>: 1.5rem; }\n<span class=t>&lt;/style&gt;</span>";
  get #codeCounter() { return this.#_codeCounter; }
  set #codeCounter(v) { this.#_codeCounter = v; this.#scheduleUpdate(); }
  #_codeTodo = "<span class=t>&lt;meta&gt;</span>\n  <span class=a>name</span>: <span class=s>&quot;x-todo&quot;</span>\n<span class=t>&lt;/meta&gt;</span>\n\n<span class=t>&lt;script&gt;</span>\n  <span class=k>state</span> <span class=v>items</span>: <span class=tp>string[]</span> = []\n  <span class=k>state</span> <span class=v>text</span>: <span class=tp>string</span> = <span class=s>&quot;&quot;</span>\n\n  <span class=k>fn</span> <span class=f>add</span>() {\n    <span class=k>if</span> (text.trim() === <span class=s>&quot;&quot;</span>) <span class=k>return</span>\n    items = [...items, text.trim()]\n    text = <span class=s>&quot;&quot;</span>\n  }\n\n  <span class=k>fn</span> <span class=f>remove</span>(<span class=v>index</span>: <span class=tp>number</span>) {\n    items = items.filter((<span class=v>_</span>, <span class=v>i</span>) =&gt; i !== index)\n  }\n<span class=t>&lt;/script&gt;</span>\n\n<span class=t>&lt;template&gt;</span>\n  <span class=t>&lt;input</span> <span class=d>:bind</span>=<span class=s>&quot;text&quot;</span> <span class=d>@keydown|enter</span>=<span class=s>&quot;add&quot;</span> <span class=t>/&gt;</span>\n  <span class=t>&lt;button</span> <span class=d>@click</span>=<span class=s>&quot;add&quot;</span><span class=t>&gt;</span>Add<span class=t>&lt;/button&gt;</span>\n  <span class=t>&lt;ul&gt;</span>\n    <span class=c>&lt;#for</span> <span class=a>each</span>=<span class=s>&quot;item, index&quot;</span> <span class=a>of</span>=<span class=s>&quot;items&quot;</span><span class=c>&gt;</span>\n      <span class=t>&lt;li&gt;</span><span class=i>{{ item }}</span>\n        <span class=t>&lt;button</span> <span class=d>@click</span>=<span class=s>&quot;remove(index)&quot;</span><span class=t>&gt;</span>x<span class=t>&lt;/button&gt;</span>\n      <span class=t>&lt;/li&gt;</span>\n      <span class=c>&lt;:empty&gt;&lt;</span><span class=t>li&gt;</span>No items<span class=t>&lt;/li&gt;</span><span class=c>&lt;/:empty&gt;</span>\n    <span class=c>&lt;/#for&gt;</span>\n  <span class=t>&lt;/ul&gt;</span>\n<span class=t>&lt;/template&gt;</span>";
  get #codeTodo() { return this.#_codeTodo; }
  set #codeTodo(v) { this.#_codeTodo = v; this.#scheduleUpdate(); }
  #_codeFetch = "<span class=t>&lt;script&gt;</span>\n  <span class=k>prop</span> <span class=v>userId</span>: <span class=tp>number</span> = <span class=n>1</span>\n  <span class=k>state</span> <span class=v>user</span>: <span class=tp>object | null</span> = <span class=n>null</span>\n  <span class=k>state</span> <span class=v>loading</span>: <span class=tp>boolean</span> = <span class=n>true</span>\n\n  <span class=k>fn</span> <span class=k>async</span> <span class=f>fetchUser</span>() {\n    loading = <span class=n>true</span>\n    <span class=k>const</span> res = <span class=k>await</span> fetch(\n      <span class=s>`/api/users/${userId}`</span>\n    )\n    user = <span class=k>await</span> res.json()\n    loading = <span class=n>false</span>\n  }\n\n  <span class=k>on</span> <span class=f>mount</span> { fetchUser() }\n  <span class=k>watch</span>(userId) { fetchUser() }\n<span class=t>&lt;/script&gt;</span>\n\n<span class=t>&lt;template&gt;</span>\n  <span class=c>&lt;#if</span> <span class=a>condition</span>=<span class=s>&quot;loading&quot;</span><span class=c>&gt;</span>\n    <span class=t>&lt;div&gt;</span>Loading...<span class=t>&lt;/div&gt;</span>\n  <span class=c>&lt;:else&gt;</span>\n    <span class=t>&lt;div</span> <span class=a>class</span>=<span class=s>&quot;card&quot;</span><span class=t>&gt;</span>\n      <span class=t>&lt;img</span> <span class=d>:src</span>=<span class=s>&quot;user.avatar&quot;</span> <span class=t>/&gt;</span>\n      <span class=t>&lt;h3&gt;</span><span class=i>{{ user.name }}</span><span class=t>&lt;/h3&gt;</span>\n      <span class=t>&lt;p&gt;</span><span class=i>{{ user.email }}</span><span class=t>&lt;/p&gt;</span>\n    <span class=t>&lt;/div&gt;</span>\n  <span class=c>&lt;/#if&gt;</span>\n<span class=t>&lt;/template&gt;</span>";
  get #codeFetch() { return this.#_codeFetch; }
  set #codeFetch(v) { this.#_codeFetch = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #setCounter() {
    this.#activeTab = "counter"; this.#cleanPre()
  }

  #setTodo() {
    this.#activeTab = "todo"; this.#cleanPre()
  }

  #setFetch() {
    this.#activeTab = "fetch"; this.#cleanPre()
  }

  #inc() {
    this.#demoCount += 1
  }

  #dec() {
    this.#demoCount -= 1
  }

  #addTodo() {
    if (this.#todoText.trim() === "") return
        this.#todoItems = [...todoItems, this.#todoText.trim()]
        this.#todoText = ""
  }

  #removeTodo(index) {
    this.#todoItems = this.#todoItems.filter((_, i) => i !== index)
  }

  #cleanPre() {
    requestAnimationFrame(() => {
          this.shadowRoot.querySelectorAll('pre').forEach((el) => {
            for (let i = el.childNodes.length - 1; i >= 0; i--) {
              const n = el.childNodes[i]
              if (n.nodeType === 3 && !n.textContent.trim()) n.remove()
            }
          })
        })
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.header{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.header h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.header p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.tabs{display:flex;gap:0.25rem;background:var(--c-surface, #1a1a26);border-radius:0.625rem 0.625rem 0 0;padding:0.375rem 0.375rem 0;border:1px solid var(--c-border, #2a2a3a);border-bottom:none;width:fit-content;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;}.tab{padding:0.5rem 1.25rem;border:none;background:none;cursor:pointer;color:var(--c-text-dim, #9898ab);font-size:clamp(0.75rem, 0.95vw, 0.85rem);font-weight:500;border-radius:0.5rem 0.5rem 0 0;transition:0.2s;font-family:inherit;white-space:nowrap;min-height:2.5rem;}.tab.active{background:var(--c-bg-code, #0d0d14);color:#fff;}.tab:hover:not(.active){color:var(--c-text, #e4e4ed);}.panels{border:1px solid var(--c-border, #2a2a3a);border-radius:0 var(--radius, 0.75rem) var(--radius, 0.75rem) var(--radius, 0.75rem);overflow:hidden;background:var(--c-bg-code, #0d0d14);}.layout{display:grid;grid-template-columns:1fr clamp(14rem, 25%, 18.75rem);}.code{overflow-x:auto;-webkit-overflow-scrolling:touch;}.file{padding:0.625rem 1.25rem;border-bottom:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.7rem, 0.85vw, 0.8rem);color:var(--c-text-dim, #9898ab);font-family:var(--mono, monospace);}pre{margin:0;padding:1.25rem;font-family:var(--mono, 'JetBrains Mono', monospace);font-size:clamp(0.7rem, 0.85vw, 0.82rem);line-height:1.7;color:#c8c8d8;white-space:pre;overflow-x:auto;-webkit-overflow-scrolling:touch;}code{font-family:inherit;font-size:inherit;}.t{color:#7c8aff;}.a{color:#f8a5c2;}.s{color:#55efc4;}.k{color:#fd79a8;}.tp{color:#74b9ff;}.v{color:#dfe6e9;}.f{color:#ffeaa7;}.n{color:#fab1a0;}.i{color:#fdcb6e;}.c{color:#e17055;}.d{color:#a29bfe;}.cs{color:#81ecec;}.preview{border-left:1px solid var(--c-border, #2a2a3a);display:flex;flex-direction:column;}.preview-label{padding:0.625rem 1.25rem;border-bottom:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.7rem, 0.85vw, 0.8rem);color:var(--c-text-dim, #9898ab);font-weight:500;}.preview-body{flex:1;display:flex;align-items:center;justify-content:center;padding:clamp(1rem, 2.5vw, 2rem) 1.25rem;background:#fff;color:#1a1a2e;font-family:system-ui, sans-serif;}.demo-counter{display:flex;gap:0.75rem;align-items:center;}.dcount{font-size:1.5rem;font-weight:700;min-width:2ch;text-align:center;}.dbtn{min-width:2.75rem;min-height:2.75rem;border-radius:0.5rem;border:1px solid #d1d5db;background:#f9fafb;cursor:pointer;font-size:0.875rem;font-weight:600;display:flex;align-items:center;justify-content:center;transition:background 0.15s;padding:0 0.5rem;font-family:inherit;}.dbtn:hover{background:#f3f4f6;}.demo-todo{width:100%;}.demo-row{display:flex;gap:0.5rem;margin-bottom:0.75rem;}.dinput{flex:1;padding:0.625rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.875rem;font-family:inherit;outline:none;min-width:0;min-height:2.75rem;}.dinput:focus{border-color:#6C5CE7;}.dlist{list-style:none;padding:0;margin:0;}.ditem{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid #f3f4f6;font-size:0.875rem;}.dremove{background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.875rem;padding:0.25rem 0.5rem;min-width:2rem;min-height:2rem;}.dempty{color:#9ca3af;font-size:0.875rem;padding:0.5rem 0;list-style:none;}.demo-user{text-align:center;}.davatar{width:3.5rem;height:3.5rem;border-radius:50%;background:linear-gradient(135deg, #6C5CE7, #00B894);margin:0 auto 0.75rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.25rem;}.dname{margin:0 0 0.25rem;font-size:1rem;font-weight:600;color:#1a1a2e;}.demail{margin:0;font-size:0.875rem;color:#6b7280;}@media (max-width:48rem){.layout{grid-template-columns:1fr;}.preview{border-left:none;border-top:1px solid var(--c-border, #2a2a3a);}}</style>
      <section class="section">
        <div class="container">
          <div class="header">
            <h2>
              ${this.#esc(this.#tr('codeDemo.title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('codeDemo.subtitle'))}
            </p>
          </div>
          <div class="tabs">
            <button data-chasket-id="fl-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'counter' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.counter'))}
            </button>
            <button data-chasket-id="fl-1" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'todo' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.todo'))}
            </button>
            <button data-chasket-id="fl-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'fetch' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.fetch'))}
            </button>
          </div>
          <div class="panels">
            ${this.#activeTab === 'counter' ? `
              <div class="layout">
                <div class="code">
                  <div class="file">
                    counter.csk
                  </div>
                  <pre><code>${this.#codeCounter}</code></pre>
                </div>
                <div class="preview">
                  <div class="preview-label">
                    ${this.#esc(this.#tr('codeDemo.preview'))}
                  </div>
                  <div class="preview-body">
                    <div class="demo-counter"><button data-chasket-id="fl-3" class="dbtn">-</button><span class="dcount">${this.#esc(this.#demoCount)}</span><button data-chasket-id="fl-4" class="dbtn">+</button></div>
                  </div>
                </div>
              </div>
            ` : ''}
            ${this.#activeTab === 'todo' ? `
              <div class="layout">
                <div class="code">
                  <div class="file">
                    todo.csk
                  </div>
                  <pre><code>${this.#codeTodo}</code></pre>
                </div>
                <div class="preview">
                  <div class="preview-label">
                    ${this.#esc(this.#tr('codeDemo.preview'))}
                  </div>
                  <div class="preview-body">
                    <div class="demo-todo">
                      <div class="demo-row">
                        <input data-chasket-id="fl-5" class="dinput" value="${this.#escAttr(this.#todoText)}" placeholder="${this.#escAttr(this.#tr('codeDemo.todoPlaceholder'))}" />
                        <button data-chasket-id="fl-6" class="dbtn">
                          ${this.#esc(this.#tr('codeDemo.todoAdd'))}
                        </button>
                      </div>
                      <ul class="dlist">
                        ${this.#todoItems.length > 0 ? this.#todoItems.map((item, index) => `
                          <li class="ditem"><span>${this.#esc(item)}</span><button data-chasket-id="fl-7-${index}" class="dremove">x</button></li>
                        `).join('') : `
                          <li class="dempty">
                            ${this.#esc(this.#tr('codeDemo.todoEmpty'))}
                          </li>
                        `}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ` : ''}
            ${this.#activeTab === 'fetch' ? `
              <div class="layout">
                <div class="code">
                  <div class="file">
                    user-card.csk
                  </div>
                  <pre><code>${this.#codeFetch}</code></pre>
                </div>
                <div class="preview">
                  <div class="preview-label">
                    ${this.#esc(this.#tr('codeDemo.preview'))}
                  </div>
                  <div class="preview-body">
                    <div class="demo-user">
                      <div class="davatar">
                        J
                      </div>
                      <h3 class="dname">
                        Jane Doe
                      </h3>
                      <p class="demail">
                        jane@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </section>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.header{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.header h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.header p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.tabs{display:flex;gap:0.25rem;background:var(--c-surface, #1a1a26);border-radius:0.625rem 0.625rem 0 0;padding:0.375rem 0.375rem 0;border:1px solid var(--c-border, #2a2a3a);border-bottom:none;width:fit-content;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;}.tab{padding:0.5rem 1.25rem;border:none;background:none;cursor:pointer;color:var(--c-text-dim, #9898ab);font-size:clamp(0.75rem, 0.95vw, 0.85rem);font-weight:500;border-radius:0.5rem 0.5rem 0 0;transition:0.2s;font-family:inherit;white-space:nowrap;min-height:2.5rem;}.tab.active{background:var(--c-bg-code, #0d0d14);color:#fff;}.tab:hover:not(.active){color:var(--c-text, #e4e4ed);}.panels{border:1px solid var(--c-border, #2a2a3a);border-radius:0 var(--radius, 0.75rem) var(--radius, 0.75rem) var(--radius, 0.75rem);overflow:hidden;background:var(--c-bg-code, #0d0d14);}.layout{display:grid;grid-template-columns:1fr clamp(14rem, 25%, 18.75rem);}.code{overflow-x:auto;-webkit-overflow-scrolling:touch;}.file{padding:0.625rem 1.25rem;border-bottom:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.7rem, 0.85vw, 0.8rem);color:var(--c-text-dim, #9898ab);font-family:var(--mono, monospace);}pre{margin:0;padding:1.25rem;font-family:var(--mono, 'JetBrains Mono', monospace);font-size:clamp(0.7rem, 0.85vw, 0.82rem);line-height:1.7;color:#c8c8d8;white-space:pre;overflow-x:auto;-webkit-overflow-scrolling:touch;}code{font-family:inherit;font-size:inherit;}.t{color:#7c8aff;}.a{color:#f8a5c2;}.s{color:#55efc4;}.k{color:#fd79a8;}.tp{color:#74b9ff;}.v{color:#dfe6e9;}.f{color:#ffeaa7;}.n{color:#fab1a0;}.i{color:#fdcb6e;}.c{color:#e17055;}.d{color:#a29bfe;}.cs{color:#81ecec;}.preview{border-left:1px solid var(--c-border, #2a2a3a);display:flex;flex-direction:column;}.preview-label{padding:0.625rem 1.25rem;border-bottom:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.7rem, 0.85vw, 0.8rem);color:var(--c-text-dim, #9898ab);font-weight:500;}.preview-body{flex:1;display:flex;align-items:center;justify-content:center;padding:clamp(1rem, 2.5vw, 2rem) 1.25rem;background:#fff;color:#1a1a2e;font-family:system-ui, sans-serif;}.demo-counter{display:flex;gap:0.75rem;align-items:center;}.dcount{font-size:1.5rem;font-weight:700;min-width:2ch;text-align:center;}.dbtn{min-width:2.75rem;min-height:2.75rem;border-radius:0.5rem;border:1px solid #d1d5db;background:#f9fafb;cursor:pointer;font-size:0.875rem;font-weight:600;display:flex;align-items:center;justify-content:center;transition:background 0.15s;padding:0 0.5rem;font-family:inherit;}.dbtn:hover{background:#f3f4f6;}.demo-todo{width:100%;}.demo-row{display:flex;gap:0.5rem;margin-bottom:0.75rem;}.dinput{flex:1;padding:0.625rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.875rem;font-family:inherit;outline:none;min-width:0;min-height:2.75rem;}.dinput:focus{border-color:#6C5CE7;}.dlist{list-style:none;padding:0;margin:0;}.ditem{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid #f3f4f6;font-size:0.875rem;}.dremove{background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.875rem;padding:0.25rem 0.5rem;min-width:2rem;min-height:2rem;}.dempty{color:#9ca3af;font-size:0.875rem;padding:0.5rem 0;list-style:none;}.demo-user{text-align:center;}.davatar{width:3.5rem;height:3.5rem;border-radius:50%;background:linear-gradient(135deg, #6C5CE7, #00B894);margin:0 auto 0.75rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.25rem;}.dname{margin:0 0 0.25rem;font-size:1rem;font-weight:600;color:#1a1a2e;}.demail{margin:0;font-size:0.875rem;color:#6b7280;}@media (max-width:48rem){.layout{grid-template-columns:1fr;}.preview{border-left:none;border-top:1px solid var(--c-border, #2a2a3a);}}</style>
      <section class="section">
        <div class="container">
          <div class="header">
            <h2>
              ${this.#esc(this.#tr('codeDemo.title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('codeDemo.subtitle'))}
            </p>
          </div>
          <div class="tabs">
            <button data-chasket-id="fl-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'counter' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.counter'))}
            </button>
            <button data-chasket-id="fl-1" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'todo' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.todo'))}
            </button>
            <button data-chasket-id="fl-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'fetch' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.fetch'))}
            </button>
          </div>
          <div class="panels">
            ${this.#activeTab === 'counter' ? `
              <div class="layout">
                <div class="code">
                  <div class="file">
                    counter.csk
                  </div>
                  <pre><code>${this.#codeCounter}</code></pre>
                </div>
                <div class="preview">
                  <div class="preview-label">
                    ${this.#esc(this.#tr('codeDemo.preview'))}
                  </div>
                  <div class="preview-body">
                    <div class="demo-counter"><button data-chasket-id="fl-3" class="dbtn">-</button><span class="dcount">${this.#esc(this.#demoCount)}</span><button data-chasket-id="fl-4" class="dbtn">+</button></div>
                  </div>
                </div>
              </div>
            ` : ''}
            ${this.#activeTab === 'todo' ? `
              <div class="layout">
                <div class="code">
                  <div class="file">
                    todo.csk
                  </div>
                  <pre><code>${this.#codeTodo}</code></pre>
                </div>
                <div class="preview">
                  <div class="preview-label">
                    ${this.#esc(this.#tr('codeDemo.preview'))}
                  </div>
                  <div class="preview-body">
                    <div class="demo-todo">
                      <div class="demo-row">
                        <input data-chasket-id="fl-5" class="dinput" value="${this.#escAttr(this.#todoText)}" placeholder="${this.#escAttr(this.#tr('codeDemo.todoPlaceholder'))}" />
                        <button data-chasket-id="fl-6" class="dbtn">
                          ${this.#esc(this.#tr('codeDemo.todoAdd'))}
                        </button>
                      </div>
                      <ul class="dlist">
                        ${this.#todoItems.length > 0 ? this.#todoItems.map((item, index) => `
                          <li class="ditem"><span>${this.#esc(item)}</span><button data-chasket-id="fl-7-${index}" class="dremove">x</button></li>
                        `).join('') : `
                          <li class="dempty">
                            ${this.#esc(this.#tr('codeDemo.todoEmpty'))}
                          </li>
                        `}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ` : ''}
            ${this.#activeTab === 'fetch' ? `
              <div class="layout">
                <div class="code">
                  <div class="file">
                    user-card.csk
                  </div>
                  <pre><code>${this.#codeFetch}</code></pre>
                </div>
                <div class="preview">
                  <div class="preview-label">
                    ${this.#esc(this.#tr('codeDemo.preview'))}
                  </div>
                  <div class="preview-body">
                    <div class="demo-user">
                      <div class="davatar">
                        J
                      </div>
                      <h3 class="dname">
                        Jane Doe
                      </h3>
                      <p class="demail">
                        jane@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-0"]');
      if (el) {
        const fn_click = (e) => { this.#setCounter(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-1"]');
      if (el) {
        const fn_click = (e) => { this.#setTodo(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-2"]');
      if (el) {
        const fn_click = (e) => { this.#setFetch(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-3"]');
      if (el) {
        const fn_click = (e) => { this.#dec(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-4"]');
      if (el) {
        const fn_click = (e) => { this.#inc(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-5"]');
      if (el) {
        const fn_keydown = (e) => { if (e.key !== 'Enter') return; this.#addTodo(e); this.#scheduleUpdate(); };
        el.addEventListener('keydown', fn_keydown);
        this.#listeners.push([el, 'keydown', fn_keydown]);
        const fn_input = (e) => { this.#todoText = e.target.value; this.#updateKeepFocus(el); };
        el.addEventListener('input', fn_input);
        this.#listeners.push([el, 'input', fn_input]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-6"]');
      if (el) {
        const fn_click = (e) => { this.#addTodo(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    // Loop event binding: fl-7
    this.#shadow.querySelectorAll('[data-chasket-id^="fl-7-"]').forEach(el => {
      const __idx = parseInt(el.getAttribute('data-chasket-id').split('-').pop(), 10);
      const fn_click = (e) => { this.#removeTodo(__idx); this.#scheduleUpdate(); };
      el.addEventListener('click', fn_click);
      this.#listeners.push([el, 'click', fn_click]);
    });
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-code-demo'] = CskCodeDemo;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-code-demo', CskCodeDemo]);
} else if (!customElements.get('csk-code-demo')) {
  customElements.define('csk-code-demo', CskCodeDemo);
}

})();

// ── csk-comparison.csk ──
(() => {
"use strict";

class CskComparison extends HTMLElement {
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:var(--radius-lg, 1rem);background:linear-gradient(90deg, var(--c-bg-card, #12121a) 30%, transparent), linear-gradient(90deg, transparent, var(--c-bg-card, #12121a) 70%) 100% 0, linear-gradient(90deg, rgba(0,0,0,0.2), transparent 15px), linear-gradient(90deg, transparent, rgba(0,0,0,0.2)) 100% 0;background-repeat:no-repeat;background-size:2rem 100%, 2rem 100%, 1rem 100%, 1rem 100%;background-attachment:local, local, scroll, scroll;}table{width:100%;border-collapse:collapse;font-size:clamp(0.75rem, 0.95vw, 0.88rem);background:var(--c-bg-card, #12121a);border-radius:var(--radius-lg, 1rem);overflow:hidden;border:1px solid var(--c-border, #2a2a3a);min-width:36rem;}th, td{padding:clamp(0.625rem, 1.2vw, 0.875rem) clamp(0.75rem, 1.5vw, 1.25rem);text-align:center;border-bottom:1px solid var(--c-border, #2a2a3a);}th{font-weight:600;color:var(--c-text-dim, #9898ab);font-size:clamp(0.7rem, 0.85vw, 0.82rem);text-transform:uppercase;letter-spacing:0.04em;}.label{text-align:left;font-weight:500;color:var(--c-text, #e4e4ed);white-space:nowrap;}tbody tr:last-child td{border-bottom:none;}tbody tr:hover{background:rgba(108,92,231,0.04);}.hl{background:rgba(108,92,231,0.08);color:var(--c-primary-light, #a29bfe);}thead .hl{font-size:clamp(0.75rem, 0.95vw, 0.88rem);}</style>
      <section class="section">
        <div class="container">
          <div class="hd">
            <h2>
              ${this.#esc(this.#tr('comparison.title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('comparison.subtitle'))}
            </p>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>
                  </th>
                  <th class="hl">
                    Chasket
                  </th>
                  <th>
                    React
                  </th>
                  <th>
                    Vue
                  </th>
                  <th>
                    Svelte
                  </th>
                  <th>
                    Lit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.runtimeSize'))}
                  </td>
                  <td class="hl">
<strong>0 KB</strong>                  </td>
                  <td>
                    ~40 KB
                  </td>
                  <td>
                    ~33 KB
                  </td>
                  <td>
                    ~2 KB
                  </td>
                  <td>
                    ~5 KB
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.webComponents'))}
                  </td>
                  <td class="hl">
                    ${this.#esc(this.#tr('comparison.native'))}
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    ${this.#esc(this.#tr('comparison.partial'))}
                  </td>
                  <td>
                    ${this.#esc(this.#tr('comparison.partial'))}
                  </td>
                  <td>
                    ${this.#esc(this.#tr('comparison.native'))}
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.singleFile'))}
                  </td>
                  <td class="hl">
                    Yes
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    -
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.builtInTypes'))}
                  </td>
                  <td class="hl">
                    Yes
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    -
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.xssAutoEscape'))}
                  </td>
                  <td class="hl">
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.scopedCss'))}
                  </td>
                  <td class="hl">
                    Shadow DOM
                  </td>
                  <td>
                    CSS Modules
                  </td>
                  <td>
                    Scoped
                  </td>
                  <td>
                    Scoped
                  </td>
                  <td>
                    Shadow DOM
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.ssr'))}
                  </td>
                  <td class="hl">
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:var(--radius-lg, 1rem);background:linear-gradient(90deg, var(--c-bg-card, #12121a) 30%, transparent), linear-gradient(90deg, transparent, var(--c-bg-card, #12121a) 70%) 100% 0, linear-gradient(90deg, rgba(0,0,0,0.2), transparent 15px), linear-gradient(90deg, transparent, rgba(0,0,0,0.2)) 100% 0;background-repeat:no-repeat;background-size:2rem 100%, 2rem 100%, 1rem 100%, 1rem 100%;background-attachment:local, local, scroll, scroll;}table{width:100%;border-collapse:collapse;font-size:clamp(0.75rem, 0.95vw, 0.88rem);background:var(--c-bg-card, #12121a);border-radius:var(--radius-lg, 1rem);overflow:hidden;border:1px solid var(--c-border, #2a2a3a);min-width:36rem;}th, td{padding:clamp(0.625rem, 1.2vw, 0.875rem) clamp(0.75rem, 1.5vw, 1.25rem);text-align:center;border-bottom:1px solid var(--c-border, #2a2a3a);}th{font-weight:600;color:var(--c-text-dim, #9898ab);font-size:clamp(0.7rem, 0.85vw, 0.82rem);text-transform:uppercase;letter-spacing:0.04em;}.label{text-align:left;font-weight:500;color:var(--c-text, #e4e4ed);white-space:nowrap;}tbody tr:last-child td{border-bottom:none;}tbody tr:hover{background:rgba(108,92,231,0.04);}.hl{background:rgba(108,92,231,0.08);color:var(--c-primary-light, #a29bfe);}thead .hl{font-size:clamp(0.75rem, 0.95vw, 0.88rem);}</style>
      <section class="section">
        <div class="container">
          <div class="hd">
            <h2>
              ${this.#esc(this.#tr('comparison.title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('comparison.subtitle'))}
            </p>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>
                  </th>
                  <th class="hl">
                    Chasket
                  </th>
                  <th>
                    React
                  </th>
                  <th>
                    Vue
                  </th>
                  <th>
                    Svelte
                  </th>
                  <th>
                    Lit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.runtimeSize'))}
                  </td>
                  <td class="hl">
<strong>0 KB</strong>                  </td>
                  <td>
                    ~40 KB
                  </td>
                  <td>
                    ~33 KB
                  </td>
                  <td>
                    ~2 KB
                  </td>
                  <td>
                    ~5 KB
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.webComponents'))}
                  </td>
                  <td class="hl">
                    ${this.#esc(this.#tr('comparison.native'))}
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    ${this.#esc(this.#tr('comparison.partial'))}
                  </td>
                  <td>
                    ${this.#esc(this.#tr('comparison.partial'))}
                  </td>
                  <td>
                    ${this.#esc(this.#tr('comparison.native'))}
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.singleFile'))}
                  </td>
                  <td class="hl">
                    Yes
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    -
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.builtInTypes'))}
                  </td>
                  <td class="hl">
                    Yes
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    -
                  </td>
                  <td>
                    -
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.xssAutoEscape'))}
                  </td>
                  <td class="hl">
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.scopedCss'))}
                  </td>
                  <td class="hl">
                    Shadow DOM
                  </td>
                  <td>
                    CSS Modules
                  </td>
                  <td>
                    Scoped
                  </td>
                  <td>
                    Scoped
                  </td>
                  <td>
                    Shadow DOM
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    ${this.#esc(this.#tr('comparison.ssr'))}
                  </td>
                  <td class="hl">
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                  <td>
                    Yes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-comparison'] = CskComparison;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-comparison', CskComparison]);
} else if (!customElements.get('csk-comparison')) {
  customElements.define('csk-comparison', CskComparison);
}

})();

// ── csk-cta.csk ──
(() => {
"use strict";

class CskCta extends HTMLElement {
  #_copied = false;
  get #copied() { return this.#_copied; }
  set #copied(v) { this.#_copied = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #copyCmd() {
    if (navigator.clipboard) {
          navigator.clipboard.writeText("npx chasket init my-app")
          this.#copied = true
        }
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;}.cta{padding:var(--space-section, 5rem) 0 clamp(3rem, 6vw, 5rem);text-align:center;background:linear-gradient(180deg, transparent 0%, rgba(108,92,231,0.06) 100%);}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);word-break:keep-all;overflow-wrap:break-word;}p{color:var(--c-text-dim, #9898ab);font-size:clamp(0.9rem, 1.1vw, 1.05rem);margin-bottom:1.5rem;}.install{display:inline-flex;align-items:center;gap:0.75rem;background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.625rem;padding:0.75rem 1.125rem;font-size:clamp(0.8rem, 1vw, 0.9rem);color:var(--c-accent-light, #55efc4);margin-bottom:1.75rem;max-width:100%;}.install code{font-family:var(--mono, monospace);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.copy{background:none;border:none;color:var(--c-text-dim, #9898ab);cursor:pointer;padding:0.25rem;border-radius:0.25rem;transition:color 0.2s;display:flex;align-items:center;min-width:2.25rem;min-height:2.25rem;justify-content:center;flex-shrink:0;}.copy:hover{color:#fff;}.copy.copied{color:var(--c-accent, #00B894);}.links{font-size:clamp(0.8rem, 0.95vw, 0.9rem);}.links a{color:var(--c-primary-light, #a29bfe);text-decoration:none;transition:color 0.2s;}.links a:hover{color:#fff;text-decoration:underline;}.sep{color:var(--c-border, #2a2a3a);margin:0 0.625rem;}@media (max-width:30rem){.links{display:flex;flex-direction:column;gap:0.5rem;align-items:center;}.sep{display:none;}.links a{padding:0.25rem 0;}}</style>
      <section class="cta">
        <div class="container">
          <h2>
            ${this.#esc(this.#tr('cta.title'))}
          </h2>
          <p>
            ${this.#esc(this.#tr('cta.subtitle'))}
          </p>
          <div class="install"><code>npx chasket init my-app</code><button data-chasket-id="fl-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'copy copied' : 'copy'))}" aria-label="${this.#escAttr(this.#tr('cta.copyLabel'))}">${this.#copied ? `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12">
    </polyline>
  </svg>
` : `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="9" y="9" width="13" height="13" rx="2">
    </rect>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1">
    </path>
  </svg>
`}
</button></div>
          <div class="links"><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer">${this.#esc(this.#tr('cta.github'))}</a><span class="sep">·</span><a href="https://github.com/UltraEgoist/chasket/tree/main/docs" target="_blank" rel="noopener noreferrer">${this.#esc(this.#tr('cta.docs'))}</a><span class="sep">·</span><a href="https://github.com/UltraEgoist/chasket/tree/main/examples" target="_blank" rel="noopener noreferrer">${this.#esc(this.#tr('cta.examples'))}</a></div>
        </div>
      </section>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;}.cta{padding:var(--space-section, 5rem) 0 clamp(3rem, 6vw, 5rem);text-align:center;background:linear-gradient(180deg, transparent 0%, rgba(108,92,231,0.06) 100%);}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);word-break:keep-all;overflow-wrap:break-word;}p{color:var(--c-text-dim, #9898ab);font-size:clamp(0.9rem, 1.1vw, 1.05rem);margin-bottom:1.5rem;}.install{display:inline-flex;align-items:center;gap:0.75rem;background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.625rem;padding:0.75rem 1.125rem;font-size:clamp(0.8rem, 1vw, 0.9rem);color:var(--c-accent-light, #55efc4);margin-bottom:1.75rem;max-width:100%;}.install code{font-family:var(--mono, monospace);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.copy{background:none;border:none;color:var(--c-text-dim, #9898ab);cursor:pointer;padding:0.25rem;border-radius:0.25rem;transition:color 0.2s;display:flex;align-items:center;min-width:2.25rem;min-height:2.25rem;justify-content:center;flex-shrink:0;}.copy:hover{color:#fff;}.copy.copied{color:var(--c-accent, #00B894);}.links{font-size:clamp(0.8rem, 0.95vw, 0.9rem);}.links a{color:var(--c-primary-light, #a29bfe);text-decoration:none;transition:color 0.2s;}.links a:hover{color:#fff;text-decoration:underline;}.sep{color:var(--c-border, #2a2a3a);margin:0 0.625rem;}@media (max-width:30rem){.links{display:flex;flex-direction:column;gap:0.5rem;align-items:center;}.sep{display:none;}.links a{padding:0.25rem 0;}}</style>
      <section class="cta">
        <div class="container">
          <h2>
            ${this.#esc(this.#tr('cta.title'))}
          </h2>
          <p>
            ${this.#esc(this.#tr('cta.subtitle'))}
          </p>
          <div class="install"><code>npx chasket init my-app</code><button data-chasket-id="fl-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'copy copied' : 'copy'))}" aria-label="${this.#escAttr(this.#tr('cta.copyLabel'))}">${this.#copied ? `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12">
    </polyline>
  </svg>
` : `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="9" y="9" width="13" height="13" rx="2">
    </rect>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1">
    </path>
  </svg>
`}
</button></div>
          <div class="links"><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer">${this.#esc(this.#tr('cta.github'))}</a><span class="sep">·</span><a href="https://github.com/UltraEgoist/chasket/tree/main/docs" target="_blank" rel="noopener noreferrer">${this.#esc(this.#tr('cta.docs'))}</a><span class="sep">·</span><a href="https://github.com/UltraEgoist/chasket/tree/main/examples" target="_blank" rel="noopener noreferrer">${this.#esc(this.#tr('cta.examples'))}</a></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-0"]');
      if (el) {
        const fn_click = (e) => { this.#copyCmd(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-cta'] = CskCta;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-cta', CskCta]);
} else if (!customElements.get('csk-cta')) {
  customElements.define('csk-cta', CskCta);
}

})();

// ── csk-ecosystem.csk ──
(() => {
"use strict";

class CskEcosystem extends HTMLElement {
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 14rem), 1fr));gap:clamp(0.75rem, 1.5vw, 1.25rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius, 0.75rem);padding:clamp(1.25rem, 2vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-accent, #00B894);transform:translateY(-2px);}.icon{width:2.75rem;height:2.75rem;border-radius:0.625rem;display:flex;align-items:center;justify-content:center;background:rgba(0,184,148,0.12);color:var(--c-accent-light, #55efc4);margin-bottom:clamp(0.75rem, 1.2vw, 1rem);}h3{font-size:clamp(0.85rem, 1vw, 0.95rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);font-family:var(--mono, monospace);}p{font-size:clamp(0.75rem, 0.9vw, 0.83rem);color:var(--c-text-dim, #9898ab);line-height:1.5;margin-bottom:0.875rem;}.install{display:block;font-family:var(--mono, monospace);font-size:clamp(0.68rem, 0.82vw, 0.78rem);color:var(--c-accent, #00B894);background:rgba(0,184,148,0.08);padding:0.375rem 0.625rem;border-radius:0.375rem;border:1px solid rgba(0,184,148,0.2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.install.vs{font-size:clamp(0.65rem, 0.75vw, 0.72rem);}@media (max-width:30rem){.grid{grid-template-columns:1fr 1fr;}}@media (max-width:20rem){.grid{grid-template-columns:1fr;}}</style>
      <section class="section">
        <div class="container">
          <div class="hd">
            <h2>
              ${this.#esc(this.#tr('ecosystem.title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('ecosystem.subtitle'))}
            </p>
          </div>
          <div class="grid">
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"></path></svg></div><h3>chasket-cli</h3><p>${this.#esc(this.#tr('ecosystem.cli'))}</p><code class="install">npm i @aspect/chasket</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg></div><h3>chasket-router</h3><p>${this.#esc(this.#tr('ecosystem.router'))}</p><code class="install">npm i @aspect/chasket-router</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div><h3>chasket-store</h3><p>${this.#esc(this.#tr('ecosystem.store'))}</p><code class="install">npm i @aspect/chasket-store</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div><h3>chasket-ssr</h3><p>${this.#esc(this.#tr('ecosystem.ssr'))}</p><code class="install">npm i @aspect/chasket-ssr</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div><h3>chasket-ui</h3><p>${this.#esc(this.#tr('ecosystem.ui'))}</p><code class="install">npm i @aspect/chasket-ui</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg></div><h3>vite-plugin-chasket</h3><p>${this.#esc(this.#tr('ecosystem.vite'))}</p><code class="install">npm i vite-plugin-chasket</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path></svg></div><h3>chasket-lsp</h3><p>${this.#esc(this.#tr('ecosystem.lsp'))}</p><code class="install">npm i @aspect/chasket-lsp</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"></path></svg></div><h3>chasket-vscode</h3><p>${this.#esc(this.#tr('ecosystem.vscode'))}</p><span class="install vs">VS Code Marketplace</span></div>
          </div>
        </div>
      </section>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 14rem), 1fr));gap:clamp(0.75rem, 1.5vw, 1.25rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius, 0.75rem);padding:clamp(1.25rem, 2vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-accent, #00B894);transform:translateY(-2px);}.icon{width:2.75rem;height:2.75rem;border-radius:0.625rem;display:flex;align-items:center;justify-content:center;background:rgba(0,184,148,0.12);color:var(--c-accent-light, #55efc4);margin-bottom:clamp(0.75rem, 1.2vw, 1rem);}h3{font-size:clamp(0.85rem, 1vw, 0.95rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);font-family:var(--mono, monospace);}p{font-size:clamp(0.75rem, 0.9vw, 0.83rem);color:var(--c-text-dim, #9898ab);line-height:1.5;margin-bottom:0.875rem;}.install{display:block;font-family:var(--mono, monospace);font-size:clamp(0.68rem, 0.82vw, 0.78rem);color:var(--c-accent, #00B894);background:rgba(0,184,148,0.08);padding:0.375rem 0.625rem;border-radius:0.375rem;border:1px solid rgba(0,184,148,0.2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.install.vs{font-size:clamp(0.65rem, 0.75vw, 0.72rem);}@media (max-width:30rem){.grid{grid-template-columns:1fr 1fr;}}@media (max-width:20rem){.grid{grid-template-columns:1fr;}}</style>
      <section class="section">
        <div class="container">
          <div class="hd">
            <h2>
              ${this.#esc(this.#tr('ecosystem.title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('ecosystem.subtitle'))}
            </p>
          </div>
          <div class="grid">
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"></path></svg></div><h3>chasket-cli</h3><p>${this.#esc(this.#tr('ecosystem.cli'))}</p><code class="install">npm i @aspect/chasket</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg></div><h3>chasket-router</h3><p>${this.#esc(this.#tr('ecosystem.router'))}</p><code class="install">npm i @aspect/chasket-router</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div><h3>chasket-store</h3><p>${this.#esc(this.#tr('ecosystem.store'))}</p><code class="install">npm i @aspect/chasket-store</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div><h3>chasket-ssr</h3><p>${this.#esc(this.#tr('ecosystem.ssr'))}</p><code class="install">npm i @aspect/chasket-ssr</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div><h3>chasket-ui</h3><p>${this.#esc(this.#tr('ecosystem.ui'))}</p><code class="install">npm i @aspect/chasket-ui</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg></div><h3>vite-plugin-chasket</h3><p>${this.#esc(this.#tr('ecosystem.vite'))}</p><code class="install">npm i vite-plugin-chasket</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path></svg></div><h3>chasket-lsp</h3><p>${this.#esc(this.#tr('ecosystem.lsp'))}</p><code class="install">npm i @aspect/chasket-lsp</code></div>
            <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"></path></svg></div><h3>chasket-vscode</h3><p>${this.#esc(this.#tr('ecosystem.vscode'))}</p><span class="install vs">VS Code Marketplace</span></div>
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-ecosystem'] = CskEcosystem;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-ecosystem', CskEcosystem]);
} else if (!customElements.get('csk-ecosystem')) {
  customElements.define('csk-ecosystem', CskEcosystem);
}

})();

// ── csk-features.csk ──
(() => {
"use strict";

class CskFeatures extends HTMLElement {
  #_codeReactivity = "<span class=k>state</span> <span class=v>count</span>: <span class=tp>number</span> = <span class=n>0</span>\n<span class=k>fn</span> <span class=f>inc</span>() { count += <span class=n>1</span> }\n<span class=cm>// DOM updates — done.</span>";
  get #codeReactivity() { return this.#_codeReactivity; }
  set #codeReactivity(v) { this.#_codeReactivity = v; this.#scheduleUpdate(); }
  #_codeTemplate = "<span class=c>&lt;#for</span> <span class=a>each</span>=<span class=s>&quot;item&quot;</span> <span class=a>of</span>=<span class=s>&quot;items&quot;</span><span class=c>&gt;</span>\n  <span class=t>&lt;li&gt;</span><span class=i>{{ item.name }}</span><span class=t>&lt;/li&gt;</span>\n  <span class=c>&lt;:empty&gt;</span>No results<span class=c>&lt;/:empty&gt;</span>\n<span class=c>&lt;/#for&gt;</span>";
  get #codeTemplate() { return this.#_codeTemplate; }
  set #codeTemplate(v) { this.#_codeTemplate = v; this.#scheduleUpdate(); }
  #_codeCompile = "<span class=cm>// Compiler output:</span>\n<span class=er>error: Undefined 'coutn'</span>\n<span class=er>error: Expected number, got string</span>";
  get #codeCompile() { return this.#_codeCompile; }
  set #codeCompile(v) { this.#_codeCompile = v; this.#scheduleUpdate(); }
  #_codeXss = "<span class=i>{{ userInput }}</span>  <span class=cm>&lt;!-- escaped --&gt;</span>\n<span class=d>@html</span>=<span class=s>&quot;trusted&quot;</span> <span class=cm>&lt;!-- opt-in --&gt;</span>";
  get #codeXss() { return this.#_codeXss; }
  set #codeXss(v) { this.#_codeXss = v; this.#scheduleUpdate(); }
  #_codeScoped = "<span class=t>&lt;style&gt;</span>\n  <span class=cs>button</span> { <span class=a>color</span>: <span class=s>blue</span>; }\n  <span class=cm>/* Only THIS component */</span>\n<span class=t>&lt;/style&gt;</span>";
  get #codeScoped() { return this.#_codeScoped; }
  set #codeScoped(v) { this.#_codeScoped = v; this.#scheduleUpdate(); }
  #_codeEvents = "<span class=k>emit</span> <span class=v>close</span>: { <span class=v>reason</span>: <span class=tp>string</span> }\n<span class=k>emit</span>(<span class=a>local</span>) <span class=v>internal</span>: <span class=tp>void</span>";
  get #codeEvents() { return this.#_codeEvents; }
  set #codeEvents(v) { this.#_codeEvents = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #cleanPre() {
    requestAnimationFrame(() => {
          this.shadowRoot.querySelectorAll('pre').forEach((el) => {
            for (let i = el.childNodes.length - 1; i >= 0; i--) {
              const n = el.childNodes[i]
              if (n.nodeType === 3 && !n.textContent.trim()) n.remove()
            }
          })
        })
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 18rem), 1fr));gap:clamp(1rem, 2vw, 1.5rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius-lg, 1rem);padding:clamp(1.5rem, 2.5vw, 2rem) clamp(1.25rem, 2vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-primary, #6C5CE7);transform:translateY(-2px);}.icon{width:3.25rem;height:3.25rem;border-radius:0.75rem;display:flex;align-items:center;justify-content:center;margin-bottom:clamp(0.875rem, 1.5vw, 1.25rem);}.i-react{background:rgba(108,92,231,0.15);color:#a29bfe;}.i-tpl{background:rgba(0,184,148,0.15);color:#55efc4;}.i-type{background:rgba(116,185,255,0.15);color:#74b9ff;}.i-xss{background:rgba(253,121,168,0.15);color:#fd79a8;}.i-lock{background:rgba(253,203,110,0.15);color:#ffeaa7;}.i-event{background:rgba(129,236,236,0.15);color:#81ecec;}.card h3{font-size:clamp(0.95rem, 1.1vw, 1.1rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);}.card p{font-size:clamp(0.8rem, 0.95vw, 0.88rem);color:var(--c-text-dim, #9898ab);line-height:1.55;margin-bottom:1rem;}.snippet{background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.5rem;overflow:hidden;}.snippet pre{margin:0;padding:0.875rem 1rem;font-family:var(--mono, monospace);font-size:clamp(0.68rem, 0.82vw, 0.78rem);line-height:1.65;color:#c8c8d8;overflow-x:auto;-webkit-overflow-scrolling:touch;}.snippet code{font-family:inherit;font-size:inherit;}.t{color:#7c8aff;}.a{color:#f8a5c2;}.s{color:#55efc4;}.k{color:#fd79a8;}.tp{color:#74b9ff;}.v{color:#dfe6e9;}.f{color:#ffeaa7;}.n{color:#fab1a0;}.i{color:#fdcb6e;}.c{color:#e17055;}.d{color:#a29bfe;}.cs{color:#81ecec;}.cm{color:#636e72;font-style:italic;}.er{color:#ff7675;}@media (max-width:30rem){.grid{grid-template-columns:1fr;}}</style>
      <section class="section">
        <div class="container">
          <div class="hd">
            <h2>
              ${this.#esc(this.#tr('features.title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('features.subtitle'))}
            </p>
          </div>
          <div class="grid">
            <div class="card">
              <div class="icon i-react">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M9.17 14.83l-4.24 4.24M12 2v4M12 18v4M2 12h4M18 12h4">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.reactivity.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.reactivity.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeReactivity}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-tpl">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6">
                  </polyline>
                  <polyline points="8 6 2 12 8 18">
                  </polyline>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.templates.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.templates.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeTemplate}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-type">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.compileCheck.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.compileCheck.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeCompile}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-xss">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                  </path>
                  <path d="M9 12l2 2 4-4">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.xss.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.xss.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeXss}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-lock">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2">
                  </rect>
                  <path d="M7 11V7a5 5 0 0110 0v4">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.scopedStyles.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.scopedStyles.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeScoped}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-event">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.customEvents.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.customEvents.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeEvents}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 18rem), 1fr));gap:clamp(1rem, 2vw, 1.5rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius-lg, 1rem);padding:clamp(1.5rem, 2.5vw, 2rem) clamp(1.25rem, 2vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-primary, #6C5CE7);transform:translateY(-2px);}.icon{width:3.25rem;height:3.25rem;border-radius:0.75rem;display:flex;align-items:center;justify-content:center;margin-bottom:clamp(0.875rem, 1.5vw, 1.25rem);}.i-react{background:rgba(108,92,231,0.15);color:#a29bfe;}.i-tpl{background:rgba(0,184,148,0.15);color:#55efc4;}.i-type{background:rgba(116,185,255,0.15);color:#74b9ff;}.i-xss{background:rgba(253,121,168,0.15);color:#fd79a8;}.i-lock{background:rgba(253,203,110,0.15);color:#ffeaa7;}.i-event{background:rgba(129,236,236,0.15);color:#81ecec;}.card h3{font-size:clamp(0.95rem, 1.1vw, 1.1rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);}.card p{font-size:clamp(0.8rem, 0.95vw, 0.88rem);color:var(--c-text-dim, #9898ab);line-height:1.55;margin-bottom:1rem;}.snippet{background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.5rem;overflow:hidden;}.snippet pre{margin:0;padding:0.875rem 1rem;font-family:var(--mono, monospace);font-size:clamp(0.68rem, 0.82vw, 0.78rem);line-height:1.65;color:#c8c8d8;overflow-x:auto;-webkit-overflow-scrolling:touch;}.snippet code{font-family:inherit;font-size:inherit;}.t{color:#7c8aff;}.a{color:#f8a5c2;}.s{color:#55efc4;}.k{color:#fd79a8;}.tp{color:#74b9ff;}.v{color:#dfe6e9;}.f{color:#ffeaa7;}.n{color:#fab1a0;}.i{color:#fdcb6e;}.c{color:#e17055;}.d{color:#a29bfe;}.cs{color:#81ecec;}.cm{color:#636e72;font-style:italic;}.er{color:#ff7675;}@media (max-width:30rem){.grid{grid-template-columns:1fr;}}</style>
      <section class="section">
        <div class="container">
          <div class="hd">
            <h2>
              ${this.#esc(this.#tr('features.title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('features.subtitle'))}
            </p>
          </div>
          <div class="grid">
            <div class="card">
              <div class="icon i-react">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M9.17 14.83l-4.24 4.24M12 2v4M12 18v4M2 12h4M18 12h4">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.reactivity.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.reactivity.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeReactivity}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-tpl">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6">
                  </polyline>
                  <polyline points="8 6 2 12 8 18">
                  </polyline>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.templates.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.templates.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeTemplate}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-type">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.compileCheck.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.compileCheck.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeCompile}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-xss">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                  </path>
                  <path d="M9 12l2 2 4-4">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.xss.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.xss.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeXss}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-lock">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2">
                  </rect>
                  <path d="M7 11V7a5 5 0 0110 0v4">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.scopedStyles.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.scopedStyles.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeScoped}</code></pre>
              </div>
            </div>
            <div class="card">
              <div class="icon i-event">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('features.customEvents.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('features.customEvents.desc'))}
              </p>
              <div class="snippet">
                <pre><code>${this.#codeEvents}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-features'] = CskFeatures;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-features', CskFeatures]);
} else if (!customElements.get('csk-features')) {
  customElements.define('csk-features', CskFeatures);
}

})();

// ── csk-hero.csk ──
(() => {
"use strict";

class CskHero extends HTMLElement {
  #_copied = false;
  get #copied() { return this.#_copied; }
  set #copied(v) { this.#_copied = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #copyCmd() {
    if (navigator.clipboard) {
          navigator.clipboard.writeText("npx chasket init my-app")
          this.#copied = true
        }
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;}.hero{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:max(70vh, 28rem);padding:clamp(6rem, 12vw, 8rem) var(--space-page, 1.5rem) clamp(3rem, 6vw, 5rem);text-align:center;}.grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(108,92,231,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,0.06) 1px, transparent 1px);background-size:4rem 4rem;mask-image:radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 100%);-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 100%);}.content{position:relative;max-width:45rem;width:100%;}.badge{display:inline-block;font-size:clamp(0.7rem, 0.9vw, 0.8rem);font-weight:500;padding:0.375rem 1rem;border-radius:999px;background:rgba(108,92,231,0.15);color:var(--c-primary-light, #a29bfe);border:1px solid rgba(108,92,231,0.3);margin-bottom:clamp(1.25rem, 2.5vw, 1.75rem);}h1{font-size:clamp(1.75rem, 5vw, 3.5rem);font-weight:800;line-height:1.15;letter-spacing:-0.03em;margin-bottom:clamp(0.75rem, 1.5vw, 1.25rem);color:var(--c-text, #e4e4ed);word-break:keep-all;overflow-wrap:break-word;}.gradient{background:linear-gradient(135deg, var(--c-primary-light, #a29bfe), var(--c-accent-light, #55efc4));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.subtitle{font-size:clamp(0.875rem, 1.2vw, 1.1rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto clamp(1.5rem, 3vw, 2.25rem);line-height:1.65;}.actions{display:flex;gap:0.75rem;justify-content:center;margin-bottom:clamp(1.5rem, 3vw, 2rem);flex-wrap:wrap;}.btn-primary, .btn-secondary{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.75rem;border-radius:0.625rem;font-weight:600;font-size:clamp(0.85rem, 1vw, 0.95rem);transition:transform 0.15s, box-shadow 0.2s;cursor:pointer;border:none;text-decoration:none;font-family:inherit;min-height:2.75rem;}.btn-primary:hover, .btn-secondary:hover{transform:translateY(-1px);}.btn-primary{background:linear-gradient(135deg, var(--c-primary, #6C5CE7), #5a4bd1);color:#fff;box-shadow:0 0.25rem 1.25rem rgba(108,92,231,0.35);}.btn-primary:hover{box-shadow:0 0.375rem 1.75rem rgba(108,92,231,0.5);}.btn-secondary{background:var(--c-surface, #1a1a26);color:var(--c-text, #e4e4ed);border:1px solid var(--c-border, #2a2a3a);gap:0.375rem;}.btn-secondary:hover{border-color:var(--c-primary-light, #a29bfe);}.install{display:inline-flex;align-items:center;gap:0.75rem;background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.625rem;padding:0.75rem 1.125rem;font-size:clamp(0.75rem, 1vw, 0.9rem);color:var(--c-accent-light, #55efc4);max-width:100%;}.install code{font-family:var(--mono, 'JetBrains Mono', monospace);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.copy{background:none;border:none;color:var(--c-text-dim, #9898ab);cursor:pointer;padding:0.375rem;border-radius:0.25rem;transition:color 0.2s;display:flex;align-items:center;flex-shrink:0;min-width:2.25rem;min-height:2.25rem;justify-content:center;}.copy:hover{color:#fff;}.copy.copied{color:var(--c-accent, #00B894);}@media (max-width:30rem){.hero{min-height:auto;padding-top:clamp(5rem, 10vw, 7rem);}.actions{flex-direction:column;align-items:center;}.btn-primary, .btn-secondary{width:100%;max-width:16rem;}}</style>
      <section class="hero">
        <div class="grid-bg">
        </div>
        <div class="content">
          <div class="badge">
            ${this.#esc(this.#tr('hero.badge'))}
          </div>
          <h1>${this.#esc(this.#tr('hero.titleLine1'))}<br />
<span class="gradient">${this.#esc(this.#tr('hero.titleHighlight'))}</span>${this.#esc(this.#tr('hero.titleLine2Suffix'))}</h1>
          <p class="subtitle">
            ${this.#esc(this.#tr('hero.subtitle'))}
          </p>
          <div class="actions"><a href="#code" class="btn-primary">${this.#esc(this.#tr('hero.getStarted'))}</a><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="btn-secondary"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
          GitHub
        </a></div>
          <div class="install"><code>npx chasket init my-app</code><button data-chasket-id="fl-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'copy copied' : 'copy'))}" aria-label="${this.#escAttr(this.#tr('hero.copyLabel'))}">${this.#copied ? `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12">
    </polyline>
  </svg>
` : `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="9" y="9" width="13" height="13" rx="2">
    </rect>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1">
    </path>
  </svg>
`}
</button></div>
        </div>
      </section>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;}.hero{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:max(70vh, 28rem);padding:clamp(6rem, 12vw, 8rem) var(--space-page, 1.5rem) clamp(3rem, 6vw, 5rem);text-align:center;}.grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(108,92,231,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,0.06) 1px, transparent 1px);background-size:4rem 4rem;mask-image:radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 100%);-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 100%);}.content{position:relative;max-width:45rem;width:100%;}.badge{display:inline-block;font-size:clamp(0.7rem, 0.9vw, 0.8rem);font-weight:500;padding:0.375rem 1rem;border-radius:999px;background:rgba(108,92,231,0.15);color:var(--c-primary-light, #a29bfe);border:1px solid rgba(108,92,231,0.3);margin-bottom:clamp(1.25rem, 2.5vw, 1.75rem);}h1{font-size:clamp(1.75rem, 5vw, 3.5rem);font-weight:800;line-height:1.15;letter-spacing:-0.03em;margin-bottom:clamp(0.75rem, 1.5vw, 1.25rem);color:var(--c-text, #e4e4ed);word-break:keep-all;overflow-wrap:break-word;}.gradient{background:linear-gradient(135deg, var(--c-primary-light, #a29bfe), var(--c-accent-light, #55efc4));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.subtitle{font-size:clamp(0.875rem, 1.2vw, 1.1rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto clamp(1.5rem, 3vw, 2.25rem);line-height:1.65;}.actions{display:flex;gap:0.75rem;justify-content:center;margin-bottom:clamp(1.5rem, 3vw, 2rem);flex-wrap:wrap;}.btn-primary, .btn-secondary{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.75rem;border-radius:0.625rem;font-weight:600;font-size:clamp(0.85rem, 1vw, 0.95rem);transition:transform 0.15s, box-shadow 0.2s;cursor:pointer;border:none;text-decoration:none;font-family:inherit;min-height:2.75rem;}.btn-primary:hover, .btn-secondary:hover{transform:translateY(-1px);}.btn-primary{background:linear-gradient(135deg, var(--c-primary, #6C5CE7), #5a4bd1);color:#fff;box-shadow:0 0.25rem 1.25rem rgba(108,92,231,0.35);}.btn-primary:hover{box-shadow:0 0.375rem 1.75rem rgba(108,92,231,0.5);}.btn-secondary{background:var(--c-surface, #1a1a26);color:var(--c-text, #e4e4ed);border:1px solid var(--c-border, #2a2a3a);gap:0.375rem;}.btn-secondary:hover{border-color:var(--c-primary-light, #a29bfe);}.install{display:inline-flex;align-items:center;gap:0.75rem;background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.625rem;padding:0.75rem 1.125rem;font-size:clamp(0.75rem, 1vw, 0.9rem);color:var(--c-accent-light, #55efc4);max-width:100%;}.install code{font-family:var(--mono, 'JetBrains Mono', monospace);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.copy{background:none;border:none;color:var(--c-text-dim, #9898ab);cursor:pointer;padding:0.375rem;border-radius:0.25rem;transition:color 0.2s;display:flex;align-items:center;flex-shrink:0;min-width:2.25rem;min-height:2.25rem;justify-content:center;}.copy:hover{color:#fff;}.copy.copied{color:var(--c-accent, #00B894);}@media (max-width:30rem){.hero{min-height:auto;padding-top:clamp(5rem, 10vw, 7rem);}.actions{flex-direction:column;align-items:center;}.btn-primary, .btn-secondary{width:100%;max-width:16rem;}}</style>
      <section class="hero">
        <div class="grid-bg">
        </div>
        <div class="content">
          <div class="badge">
            ${this.#esc(this.#tr('hero.badge'))}
          </div>
          <h1>${this.#esc(this.#tr('hero.titleLine1'))}<br />
<span class="gradient">${this.#esc(this.#tr('hero.titleHighlight'))}</span>${this.#esc(this.#tr('hero.titleLine2Suffix'))}</h1>
          <p class="subtitle">
            ${this.#esc(this.#tr('hero.subtitle'))}
          </p>
          <div class="actions"><a href="#code" class="btn-primary">${this.#esc(this.#tr('hero.getStarted'))}</a><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="btn-secondary"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
          GitHub
        </a></div>
          <div class="install"><code>npx chasket init my-app</code><button data-chasket-id="fl-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'copy copied' : 'copy'))}" aria-label="${this.#escAttr(this.#tr('hero.copyLabel'))}">${this.#copied ? `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12">
    </polyline>
  </svg>
` : `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="9" y="9" width="13" height="13" rx="2">
    </rect>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1">
    </path>
  </svg>
`}
</button></div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-0"]');
      if (el) {
        const fn_click = (e) => { this.#copyCmd(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-hero'] = CskHero;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-hero', CskHero]);
} else if (!customElements.get('csk-hero')) {
  customElements.define('csk-hero', CskHero);
}

})();

// ── csk-highlights.csk ──
(() => {
"use strict";

class CskHighlights extends HTMLElement {
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:0 0 var(--space-section, 5rem);}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 14rem), 1fr));gap:clamp(0.75rem, 1.5vw, 1.25rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius, 0.75rem);padding:clamp(1.25rem, 2.5vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-primary, #6C5CE7);transform:translateY(-2px);}.icon{width:2.75rem;height:2.75rem;border-radius:0.625rem;display:flex;align-items:center;justify-content:center;margin-bottom:clamp(0.75rem, 1.5vw, 1rem);}.i-bolt{background:rgba(108,92,231,0.12);color:#a29bfe;}.i-shield{background:rgba(253,121,168,0.12);color:#fd79a8;}.i-layout{background:rgba(0,184,148,0.12);color:#55efc4;}.i-globe{background:rgba(116,185,255,0.12);color:#74b9ff;}h3{font-size:clamp(0.875rem, 1.1vw, 1rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);}p{font-size:clamp(0.8rem, 0.95vw, 0.875rem);color:var(--c-text-dim, #9898ab);line-height:1.55;}@media (max-width:30rem){.grid{grid-template-columns:1fr;}}</style>
      <section class="hl">
        <div class="container">
          <div class="grid">
            <div class="card">
              <div class="icon i-bolt">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('highlights.zeroRuntime.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('highlights.zeroRuntime.desc'))}
              </p>
            </div>
            <div class="card">
              <div class="icon i-shield">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('highlights.typeSafe.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('highlights.typeSafe.desc'))}
              </p>
            </div>
            <div class="card">
              <div class="icon i-layout">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2">
                  </rect>
                  <path d="M3 9h18M9 21V9">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('highlights.singleFile.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('highlights.singleFile.desc'))}
              </p>
            </div>
            <div class="card">
              <div class="icon i-globe">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10">
                  </circle>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('highlights.frameworkAgnostic.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('highlights.frameworkAgnostic.desc'))}
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:block;padding:0 0 var(--space-section, 5rem);}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 14rem), 1fr));gap:clamp(0.75rem, 1.5vw, 1.25rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius, 0.75rem);padding:clamp(1.25rem, 2.5vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-primary, #6C5CE7);transform:translateY(-2px);}.icon{width:2.75rem;height:2.75rem;border-radius:0.625rem;display:flex;align-items:center;justify-content:center;margin-bottom:clamp(0.75rem, 1.5vw, 1rem);}.i-bolt{background:rgba(108,92,231,0.12);color:#a29bfe;}.i-shield{background:rgba(253,121,168,0.12);color:#fd79a8;}.i-layout{background:rgba(0,184,148,0.12);color:#55efc4;}.i-globe{background:rgba(116,185,255,0.12);color:#74b9ff;}h3{font-size:clamp(0.875rem, 1.1vw, 1rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);}p{font-size:clamp(0.8rem, 0.95vw, 0.875rem);color:var(--c-text-dim, #9898ab);line-height:1.55;}@media (max-width:30rem){.grid{grid-template-columns:1fr;}}</style>
      <section class="hl">
        <div class="container">
          <div class="grid">
            <div class="card">
              <div class="icon i-bolt">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('highlights.zeroRuntime.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('highlights.zeroRuntime.desc'))}
              </p>
            </div>
            <div class="card">
              <div class="icon i-shield">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('highlights.typeSafe.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('highlights.typeSafe.desc'))}
              </p>
            </div>
            <div class="card">
              <div class="icon i-layout">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2">
                  </rect>
                  <path d="M3 9h18M9 21V9">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('highlights.singleFile.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('highlights.singleFile.desc'))}
              </p>
            </div>
            <div class="card">
              <div class="icon i-globe">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10">
                  </circle>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('highlights.frameworkAgnostic.title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('highlights.frameworkAgnostic.desc'))}
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-highlights'] = CskHighlights;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-highlights', CskHighlights]);
} else if (!customElements.get('csk-highlights')) {
  customElements.define('csk-highlights', CskHighlights);
}

})();

// ── csk-page-home.csk ──

(() => {
"use strict";

class CskPageHome extends HTMLElement {
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-home');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-home"] .page-home{display:flex;flex-direction:column;}</style>
      <div class="page-home">
        <csk-hero></csk-hero>
        <csk-highlights></csk-highlights>
        <csk-code-demo id="code"></csk-code-demo>
        <csk-features id="features"></csk-features>
        <csk-ecosystem id="ecosystem"></csk-ecosystem>
        <csk-comparison></csk-comparison>
        <csk-cta></csk-cta>
      </div>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-home"] .page-home{display:flex;flex-direction:column;}</style>
      <div class="page-home">
        <csk-hero></csk-hero>
        <csk-highlights></csk-highlights>
        <csk-code-demo id="code"></csk-code-demo>
        <csk-features id="features"></csk-features>
        <csk-ecosystem id="ecosystem"></csk-ecosystem>
        <csk-comparison></csk-comparison>
        <csk-cta></csk-cta>
      </div>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-page-home'] = CskPageHome;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-home', CskPageHome]);
} else if (!customElements.get('csk-page-home')) {
  customElements.define('csk-page-home', CskPageHome);
}

})();

// ── csk-page-testing.csk ──

(() => {
"use strict";

class CskPageTesting extends HTMLElement {
  #_sidebarOpen = true;
  get #sidebarOpen() { return this.#_sidebarOpen; }
  set #sidebarOpen(v) { this.#_sidebarOpen = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-testing');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    const sections = document.querySelectorAll('.doc-section[id]')
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.#updateActiveLink(entry.target.id)
            }
          }
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 })
        sections.forEach((s) => { observer.observe(s) })
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #toggleSidebar() {
    this.#sidebarOpen = !this.#sidebarOpen
  }

  #handleTocClick(e) {
    const link = e.target.closest('a')
        if (!link) return
        const href = link.getAttribute('href')
        if (href && href.startsWith('#') && !href.startsWith('#/')) {
          e.preventDefault()
          const el = document.getElementById(href.substring(1))
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
  }

  #updateActiveLink(sectionId) {
    const links = document.querySelectorAll('.toc a')
        links.forEach((link) => {
          const href = link.getAttribute('href')
          if (href && href.substring(1) === sectionId) {
            link.classList.add('active')
          } else {
            link.classList.remove('active')
          }
        })
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-testing"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);min-height:100vh;}[data-chasket-scope="csk-page-testing"] .page-container{display:grid;grid-template-columns:280px 1fr;gap:0;max-width:var(--max-w);margin:0 auto;}[data-chasket-scope="csk-page-testing"] /* Sidebar Navigation */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);height:100vh;position:sticky;top:0;overflow-y:auto;overscroll-behavior:contain;}[data-chasket-scope="csk-page-testing"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-testing"] .sidebar-header h2{font-size:1rem;font-weight:600;margin:0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0;width:2rem;height:2rem;align-items:center;justify-content:center;}[data-chasket-scope="csk-page-testing"] .toc ul{list-style:none;padding:0;margin:0;}[data-chasket-scope="csk-page-testing"] .toc > ul > li{margin:0.25rem 0;}[data-chasket-scope="csk-page-testing"] .toc a{color:var(--c-text-dim);text-decoration:none;display:block;padding:0.5rem 0.75rem;border-radius:0.375rem;font-size:0.9rem;transition:all 0.2s ease;}[data-chasket-scope="csk-page-testing"] .toc a:hover{color:var(--c-primary);background:rgba(108, 92, 231, 0.1);}[data-chasket-scope="csk-page-testing"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;}[data-chasket-scope="csk-page-testing"] .toc ul ul{padding-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-testing"] .toc ul ul li{margin:0.125rem 0;}[data-chasket-scope="csk-page-testing"] .toc ul ul a{font-size:0.85rem;color:var(--c-text-dim);padding:0.375rem 0.5rem;}[data-chasket-scope="csk-page-testing"] /* Main Content */ .content{padding:var(--space-page) 2rem;overflow-y:auto;}[data-chasket-scope="csk-page-testing"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:2px solid var(--c-border);}[data-chasket-scope="csk-page-testing"] .page-header h1{font-size:2.5rem;font-weight:700;margin:0 0 0.5rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);margin:0;}[data-chasket-scope="csk-page-testing"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;scroll-margin-top:2rem;}[data-chasket-scope="csk-page-testing"] .doc-section h2{font-size:1.8rem;font-weight:700;margin:0 0 1rem 0;color:var(--c-text);padding-bottom:0.5rem;border-bottom:2px solid var(--c-primary);}[data-chasket-scope="csk-page-testing"] .doc-section h3{font-size:1.3rem;font-weight:600;margin:1.5rem 0 0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .doc-section h4{font-size:1rem;font-weight:600;margin:1rem 0 0.5rem 0;color:var(--c-primary);font-family:var(--mono);}[data-chasket-scope="csk-page-testing"] .doc-section p{font-size:0.95rem;line-height:1.6;margin:0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .doc-section ul{margin:1rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-testing"] .doc-section li{margin:0.5rem 0;line-height:1.6;}[data-chasket-scope="csk-page-testing"] .subsection{margin:1.5rem 0;padding:0;}[data-chasket-scope="csk-page-testing"] .property{margin:1.5rem 0;padding:1rem;background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-primary);border-radius:0.375rem;}[data-chasket-scope="csk-page-testing"] .property h4{margin-top:0;}[data-chasket-scope="csk-page-testing"] .property p{margin:0.5rem 0;}[data-chasket-scope="csk-page-testing"] .property ul{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-testing"] .property li{margin:0.25rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-testing"] /* Code Blocks */ pre{background:var(--c-bg-code);border:1px solid var(--c-border);border-radius:0.5rem;padding:1rem;overflow-x:auto;margin:1rem 0;font-family:var(--mono);}[data-chasket-scope="csk-page-testing"] code{font-size:0.85rem;line-height:1.5;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-testing"] pre code{color:#dfe6e9;}[data-chasket-scope="csk-page-testing"] pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-testing"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-testing"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-testing"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-testing"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-testing"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-testing"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-testing"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-testing"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-testing"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-testing"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-testing"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-testing"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-testing"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-testing"] .warning, [data-chasket-scope="csk-page-testing"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-testing"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-testing"] .note ul, [data-chasket-scope="csk-page-testing"] .note li{margin:0.5rem 0;}[data-chasket-scope="csk-page-testing"] .note-text{background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-text-dim);color:var(--c-text-dim);}[data-chasket-scope="csk-page-testing"] .warning{background:rgba(253, 203, 110, 0.1);border-left:3px solid #fdcb6e;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .example-title{font-size:0.85rem;font-weight:600;color:var(--c-text-dim);margin:1rem 0 0.5rem 0;text-transform:uppercase;letter-spacing:0.05em;}[data-chasket-scope="csk-page-testing"] /* Responsive */ @media (max-width:768px){.page-container{grid-template-columns:1fr;}.sidebar{display:none;position:fixed;top:3.75rem;left:0;width:280px;height:calc(100vh - 3.75rem);z-index:100;}.sidebar.open{display:block;}.sidebar-toggle{display:flex;}.content{padding:var(--space-page) 1rem;}}</style>
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('testing.toc'))}
            </h2>
            <button data-chasket-id="fl-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-1" class="toc">
            <ul>
              <li>
<a href="#overview">${this.#esc(this.#tr('testing.sections.overview'))}</a>              </li>
              <li>
<a href="#install">${this.#esc(this.#tr('testing.sections.install'))}</a>              </li>
              <li>
<a href="#quickstart">${this.#esc(this.#tr('testing.sections.quickstart'))}</a>              </li>
              <li><a href="#api-reference">${this.#esc(this.#tr('testing.sections.apiReference'))}</a><ul><li><a href="#api-suite">${this.#esc(this.#tr('testing.toc_items.suite'))}</a></li><li><a href="#api-test">${this.#esc(this.#tr('testing.toc_items.test'))}</a></li><li><a href="#api-lifecycle">${this.#esc(this.#tr('testing.toc_items.lifecycle'))}</a></li></ul></li>
              <li><a href="#compile-helpers">${this.#esc(this.#tr('testing.sections.compileHelpers'))}</a><ul><li><a href="#compile-ok-fail">${this.#esc(this.#tr('testing.toc_items.compileOkFail'))}</a></li><li><a href="#csk-helper">${this.#esc(this.#tr('testing.toc_items.cskHelper'))}</a></li></ul></li>
              <li><a href="#assertions">${this.#esc(this.#tr('testing.sections.assertions'))}</a><ul><li><a href="#assert-basic">${this.#esc(this.#tr('testing.toc_items.basic'))}</a></li><li><a href="#assert-compile">${this.#esc(this.#tr('testing.toc_items.compile'))}</a></li><li><a href="#assert-output">${this.#esc(this.#tr('testing.toc_items.output'))}</a></li><li><a href="#assert-template">${this.#esc(this.#tr('testing.toc_items.template'))}</a></li><li><a href="#assert-state">${this.#esc(this.#tr('testing.toc_items.state'))}</a></li><li><a href="#assert-diag">${this.#esc(this.#tr('testing.toc_items.diagnostics'))}</a></li></ul></li>
              <li>
<a href="#full-example">${this.#esc(this.#tr('testing.sections.fullExample'))}</a>              </li>
            </ul>
          </nav>
        </aside>
        <!-- Main Content -->
        <main class="content">
          <!-- Header -->
          <div class="page-header">
            <h1>
              ${this.#esc(this.#tr('testing.title'))}
            </h1>
            <p class="subtitle">
              ${this.#esc(this.#tr('testing.subtitle'))}
            </p>
          </div>
          <!-- Sub-components -->
          <csk-test-overview></csk-test-overview>
          <csk-test-api></csk-test-api>
          <csk-test-compile></csk-test-compile>
          <csk-test-assertions></csk-test-assertions>
          <csk-test-example></csk-test-example>
        </main>
      </div>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-testing"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);min-height:100vh;}[data-chasket-scope="csk-page-testing"] .page-container{display:grid;grid-template-columns:280px 1fr;gap:0;max-width:var(--max-w);margin:0 auto;}[data-chasket-scope="csk-page-testing"] /* Sidebar Navigation */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);height:100vh;position:sticky;top:0;overflow-y:auto;overscroll-behavior:contain;}[data-chasket-scope="csk-page-testing"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-testing"] .sidebar-header h2{font-size:1rem;font-weight:600;margin:0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0;width:2rem;height:2rem;align-items:center;justify-content:center;}[data-chasket-scope="csk-page-testing"] .toc ul{list-style:none;padding:0;margin:0;}[data-chasket-scope="csk-page-testing"] .toc > ul > li{margin:0.25rem 0;}[data-chasket-scope="csk-page-testing"] .toc a{color:var(--c-text-dim);text-decoration:none;display:block;padding:0.5rem 0.75rem;border-radius:0.375rem;font-size:0.9rem;transition:all 0.2s ease;}[data-chasket-scope="csk-page-testing"] .toc a:hover{color:var(--c-primary);background:rgba(108, 92, 231, 0.1);}[data-chasket-scope="csk-page-testing"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;}[data-chasket-scope="csk-page-testing"] .toc ul ul{padding-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-testing"] .toc ul ul li{margin:0.125rem 0;}[data-chasket-scope="csk-page-testing"] .toc ul ul a{font-size:0.85rem;color:var(--c-text-dim);padding:0.375rem 0.5rem;}[data-chasket-scope="csk-page-testing"] /* Main Content */ .content{padding:var(--space-page) 2rem;overflow-y:auto;}[data-chasket-scope="csk-page-testing"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:2px solid var(--c-border);}[data-chasket-scope="csk-page-testing"] .page-header h1{font-size:2.5rem;font-weight:700;margin:0 0 0.5rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);margin:0;}[data-chasket-scope="csk-page-testing"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;scroll-margin-top:2rem;}[data-chasket-scope="csk-page-testing"] .doc-section h2{font-size:1.8rem;font-weight:700;margin:0 0 1rem 0;color:var(--c-text);padding-bottom:0.5rem;border-bottom:2px solid var(--c-primary);}[data-chasket-scope="csk-page-testing"] .doc-section h3{font-size:1.3rem;font-weight:600;margin:1.5rem 0 0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .doc-section h4{font-size:1rem;font-weight:600;margin:1rem 0 0.5rem 0;color:var(--c-primary);font-family:var(--mono);}[data-chasket-scope="csk-page-testing"] .doc-section p{font-size:0.95rem;line-height:1.6;margin:0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .doc-section ul{margin:1rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-testing"] .doc-section li{margin:0.5rem 0;line-height:1.6;}[data-chasket-scope="csk-page-testing"] .subsection{margin:1.5rem 0;padding:0;}[data-chasket-scope="csk-page-testing"] .property{margin:1.5rem 0;padding:1rem;background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-primary);border-radius:0.375rem;}[data-chasket-scope="csk-page-testing"] .property h4{margin-top:0;}[data-chasket-scope="csk-page-testing"] .property p{margin:0.5rem 0;}[data-chasket-scope="csk-page-testing"] .property ul{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-testing"] .property li{margin:0.25rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-testing"] /* Code Blocks */ pre{background:var(--c-bg-code);border:1px solid var(--c-border);border-radius:0.5rem;padding:1rem;overflow-x:auto;margin:1rem 0;font-family:var(--mono);}[data-chasket-scope="csk-page-testing"] code{font-size:0.85rem;line-height:1.5;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-testing"] pre code{color:#dfe6e9;}[data-chasket-scope="csk-page-testing"] pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-testing"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-testing"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-testing"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-testing"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-testing"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-testing"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-testing"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-testing"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-testing"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-testing"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-testing"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-testing"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-testing"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-testing"] .warning, [data-chasket-scope="csk-page-testing"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-testing"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-testing"] .note ul, [data-chasket-scope="csk-page-testing"] .note li{margin:0.5rem 0;}[data-chasket-scope="csk-page-testing"] .note-text{background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-text-dim);color:var(--c-text-dim);}[data-chasket-scope="csk-page-testing"] .warning{background:rgba(253, 203, 110, 0.1);border-left:3px solid #fdcb6e;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .example-title{font-size:0.85rem;font-weight:600;color:var(--c-text-dim);margin:1rem 0 0.5rem 0;text-transform:uppercase;letter-spacing:0.05em;}[data-chasket-scope="csk-page-testing"] /* Responsive */ @media (max-width:768px){.page-container{grid-template-columns:1fr;}.sidebar{display:none;position:fixed;top:3.75rem;left:0;width:280px;height:calc(100vh - 3.75rem);z-index:100;}.sidebar.open{display:block;}.sidebar-toggle{display:flex;}.content{padding:var(--space-page) 1rem;}}</style>
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('testing.toc'))}
            </h2>
            <button data-chasket-id="fl-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-1" class="toc">
            <ul>
              <li>
<a href="#overview">${this.#esc(this.#tr('testing.sections.overview'))}</a>              </li>
              <li>
<a href="#install">${this.#esc(this.#tr('testing.sections.install'))}</a>              </li>
              <li>
<a href="#quickstart">${this.#esc(this.#tr('testing.sections.quickstart'))}</a>              </li>
              <li><a href="#api-reference">${this.#esc(this.#tr('testing.sections.apiReference'))}</a><ul><li><a href="#api-suite">${this.#esc(this.#tr('testing.toc_items.suite'))}</a></li><li><a href="#api-test">${this.#esc(this.#tr('testing.toc_items.test'))}</a></li><li><a href="#api-lifecycle">${this.#esc(this.#tr('testing.toc_items.lifecycle'))}</a></li></ul></li>
              <li><a href="#compile-helpers">${this.#esc(this.#tr('testing.sections.compileHelpers'))}</a><ul><li><a href="#compile-ok-fail">${this.#esc(this.#tr('testing.toc_items.compileOkFail'))}</a></li><li><a href="#csk-helper">${this.#esc(this.#tr('testing.toc_items.cskHelper'))}</a></li></ul></li>
              <li><a href="#assertions">${this.#esc(this.#tr('testing.sections.assertions'))}</a><ul><li><a href="#assert-basic">${this.#esc(this.#tr('testing.toc_items.basic'))}</a></li><li><a href="#assert-compile">${this.#esc(this.#tr('testing.toc_items.compile'))}</a></li><li><a href="#assert-output">${this.#esc(this.#tr('testing.toc_items.output'))}</a></li><li><a href="#assert-template">${this.#esc(this.#tr('testing.toc_items.template'))}</a></li><li><a href="#assert-state">${this.#esc(this.#tr('testing.toc_items.state'))}</a></li><li><a href="#assert-diag">${this.#esc(this.#tr('testing.toc_items.diagnostics'))}</a></li></ul></li>
              <li>
<a href="#full-example">${this.#esc(this.#tr('testing.sections.fullExample'))}</a>              </li>
            </ul>
          </nav>
        </aside>
        <!-- Main Content -->
        <main class="content">
          <!-- Header -->
          <div class="page-header">
            <h1>
              ${this.#esc(this.#tr('testing.title'))}
            </h1>
            <p class="subtitle">
              ${this.#esc(this.#tr('testing.subtitle'))}
            </p>
          </div>
          <!-- Sub-components -->
          <csk-test-overview></csk-test-overview>
          <csk-test-api></csk-test-api>
          <csk-test-compile></csk-test-compile>
          <csk-test-assertions></csk-test-assertions>
          <csk-test-example></csk-test-example>
        </main>
      </div>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
    {
      const el = this.querySelector('[data-chasket-id="fl-0"]');
      if (el) {
        const fn_click = (e) => { this.#toggleSidebar(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-1"]');
      if (el) {
        const fn_click = (e) => { this.#handleTocClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-page-testing'] = CskPageTesting;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-testing', CskPageTesting]);
} else if (!customElements.get('csk-page-testing')) {
  customElements.define('csk-page-testing', CskPageTesting);
}

})();

// ── csk-test-api.csk ──
(() => {
"use strict";

class CskTestApi extends HTMLElement {
  #_exampleAPI = "<span class=k>const</span> { suite, compileOk, csk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'API Usage'</span>, t => {\n  t.<span class=f>beforeEach</span>(() => {\n    console.<span class=f>log</span>(<span class=s>'setup'</span>);\n  });\n\n  t.<span class=f>test</span>(<span class=s>'test 1'</span>, () => {\n    <span class=k>const</span> r = <span class=f>compileOk</span>(<span class=s>'&lt;meta&gt;name: &quot;x&quot;&lt;/meta&gt;&lt;template&gt;&lt;p&gt;&lt;/p&gt;&lt;/template&gt;'</span>);\n    t.<span class=f>compileSuccess</span>(r);\n  });\n\n  t.<span class=f>xtest</span>(<span class=s>'skipped test'</span>, () => {\n    <span class=cm>// This test is skipped</span>\n  });\n\n  t.<span class=f>afterEach</span>(() => {\n    console.<span class=f>log</span>(<span class=s>'teardown'</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleAPI() { return this.#_exampleAPI; }
  set #exampleAPI(v) { this.#_exampleAPI = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-test-api');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- API Reference -->
      <section id="api-reference" class="doc-section">
        <h2>
          API リファレンス
        </h2>
        <div class="subsection">
          <h3 id="api-suite">
            suite(name, setupFn)
          </h3>
          <p>テストスイートを定義します。<code>setupFn</code> はテストコンテキストを受け取り、テストを登録します。</p>
          <div class="property">
            <h4>
              suite.run(opts?)
            </h4>
            <p>
              すべての登録済みスイートを実行し、結果をコンソール出力します。
            </p>
            <p>
<strong>オプション:</strong>            </p>
            <ul>
              <li><code>filter</code> (string): スイート名またはテスト名に一致するもののみ実行</li>
              <li><code>verbose</code> (boolean): 詳細出力（デフォルト: true）</li>
            </ul>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleAPI}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="api-test">
            test(name, fn) / xtest(name, fn)
          </h3>
          <p><code>test()</code> は実行するテストを登録します。<code>xtest()</code> は同じですがテストをスキップします。</p>
          <p>
            各テスト関数はテストコンテキストで利用可能なアサーションにアクセスできます。
          </p>
        </div>
        <div class="subsection">
          <h3 id="api-lifecycle">
            beforeEach(fn) / afterEach(fn)
          </h3>
          <p>
            各テスト前後に実行するセットアップ / クリーンアップ関数を登録します。
          </p>
          <pre><code>t.<span class=f>beforeEach</span>(() => <span class=i>{{ /* setup */ }}</span>);
t.<span class=f>afterEach</span>(() => <span class=i>{{ /* cleanup */ }}</span>);</code></pre>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- API Reference -->
      <section id="api-reference" class="doc-section">
        <h2>
          API リファレンス
        </h2>
        <div class="subsection">
          <h3 id="api-suite">
            suite(name, setupFn)
          </h3>
          <p>テストスイートを定義します。<code>setupFn</code> はテストコンテキストを受け取り、テストを登録します。</p>
          <div class="property">
            <h4>
              suite.run(opts?)
            </h4>
            <p>
              すべての登録済みスイートを実行し、結果をコンソール出力します。
            </p>
            <p>
<strong>オプション:</strong>            </p>
            <ul>
              <li><code>filter</code> (string): スイート名またはテスト名に一致するもののみ実行</li>
              <li><code>verbose</code> (boolean): 詳細出力（デフォルト: true）</li>
            </ul>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleAPI}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="api-test">
            test(name, fn) / xtest(name, fn)
          </h3>
          <p><code>test()</code> は実行するテストを登録します。<code>xtest()</code> は同じですがテストをスキップします。</p>
          <p>
            各テスト関数はテストコンテキストで利用可能なアサーションにアクセスできます。
          </p>
        </div>
        <div class="subsection">
          <h3 id="api-lifecycle">
            beforeEach(fn) / afterEach(fn)
          </h3>
          <p>
            各テスト前後に実行するセットアップ / クリーンアップ関数を登録します。
          </p>
          <pre><code>t.<span class=f>beforeEach</span>(() => <span class=i>{{ /* setup */ }}</span>);
t.<span class=f>afterEach</span>(() => <span class=i>{{ /* cleanup */ }}</span>);</code></pre>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-test-api'] = CskTestApi;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-api', CskTestApi]);
} else if (!customElements.get('csk-test-api')) {
  customElements.define('csk-test-api', CskTestApi);
}

})();

// ── csk-test-assertions.csk ──
(() => {
"use strict";

class CskTestAssertions extends HTMLElement {
  #_exampleAssert = "<span class=k>const</span> { suite, compileOk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'Assertions'</span>, t => {\n  t.<span class=f>test</span>(<span class=s>'basic assertions'</span>, () => {\n    t.<span class=f>assert</span>(<span class=n>true</span>, <span class=s>'is truthy'</span>);\n    t.<span class=f>eq</span>(<span class=n>5</span>, <span class=n>5</span>, <span class=s>'values equal'</span>);\n    t.<span class=f>deepEq</span>({ a: <span class=n>1</span> }, { a: <span class=n>1</span> }, <span class=s>'deep equal'</span>);\n    t.<span class=f>includes</span>(<span class=s>'hello world'</span>, <span class=s>'world'</span>, <span class=s>'includes substring'</span>);\n    t.<span class=f>notIncludes</span>(<span class=s>'hello'</span>, <span class=s>'xyz'</span>, <span class=s>'excludes substring'</span>);\n    t.<span class=f>matches</span>(<span class=s>'test123'</span>, /\\\\d+/, <span class=s>'matches regex'</span>);\n    t.<span class=f>throws</span>(() => { throw <span class=k>new</span> <span class=f>Error</span>(<span class=s>'oops'</span>); }, <span class=s>'function throws'</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleAssert() { return this.#_exampleAssert; }
  set #exampleAssert(v) { this.#_exampleAssert = v; this.#scheduleUpdate(); }
  #_exampleOutput = "<span class=k>const</span> { suite, compileOk, csk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'Output Assertions'</span>, t => {\n  t.<span class=f>test</span>(<span class=s>'verify output'</span>, () => {\n    <span class=k>const</span> src = <span class=f>csk</span>({\n      name: <span class=s>'my-comp'</span>,\n      script: <span class=s>'state msg: string = &quot;hello&quot;'</span>,\n      template: <span class=s>'&lt;p&gt;{{ msg }}&lt;/p&gt;'</span>\n    });\n    <span class=k>const</span> r = <span class=f>compileOk</span>(src);\n\n    t.<span class=f>compileSuccess</span>(r);\n    t.<span class=f>validJS</span>(r);\n    t.<span class=f>outputIncludes</span>(r, <span class=s>'hello'</span>);\n    t.<span class=f>outputNotIncludes</span>(r, <span class=s>'world'</span>);\n    t.<span class=f>hasInterpolation</span>(r, <span class=s>'msg'</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleOutput() { return this.#_exampleOutput; }
  set #exampleOutput(v) { this.#_exampleOutput = v; this.#scheduleUpdate(); }
  #_exampleTemplate = "<span class=k>const</span> { suite, compileOk, csk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'Template Assertions'</span>, t => {\n  t.<span class=f>test</span>(<span class=s>'check template output'</span>, () => {\n    <span class=k>const</span> src = <span class=f>csk</span>({\n      name: <span class=s>'my-list'</span>,\n      template: <span class=s>'&lt;ul&gt;&lt;#for item of items&gt;&lt;li&gt;{{ item }}&lt;/li&gt;&lt;/#for&gt;&lt;/ul&gt;'</span>\n    });\n    <span class=k>const</span> r = <span class=f>compileOk</span>(src);\n\n    <span class=k>const</span> tpl = t.<span class=f>getTemplate</span>(r);\n    console.<span class=f>log</span>(tpl);  <span class=cm>// the extracted template string</span>\n\n    t.<span class=f>templateIncludes</span>(r, <span class=s>'&lt;ul&gt;'</span>);\n    t.<span class=f>templateNotIncludes</span>(r, <span class=s>'invalid'</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleTemplate() { return this.#_exampleTemplate; }
  set #exampleTemplate(v) { this.#_exampleTemplate = v; this.#scheduleUpdate(); }
  #_exampleState = "<span class=k>const</span> { suite, compileOk, csk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'Lifecycle & State'</span>, t => {\n  t.<span class=f>test</span>(<span class=s>'state and lifecycle'</span>, () => {\n    <span class=k>const</span> src = <span class=f>csk</span>({\n      name: <span class=s>'my-comp'</span>,\n      script: <span class=s>'\n        state count: number = 0\n        watch count { console.log(&apos;changed&apos;); }\n        fn increment() { count++; }\n        on mount { console.log(&apos;mounted&apos;); }\n        on unmount { console.log(&apos;unmounted&apos;); }\n      '</span>\n    });\n    <span class=k>const</span> r = <span class=f>compileOk</span>(src);\n\n    t.<span class=f>hasState</span>(r, <span class=s>'count'</span>);\n    t.<span class=f>hasWatch</span>(r, <span class=s>'count'</span>);\n    t.<span class=f>hasOnMount</span>(r, <span class=s>'console.log'</span>);\n    t.<span class=f>hasOnUnmount</span>(r, <span class=s>'console.log'</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleState() { return this.#_exampleState; }
  set #exampleState(v) { this.#_exampleState = v; this.#scheduleUpdate(); }
  #_exampleDiag = "<span class=k>const</span> { suite, compileFail } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'Diagnostics'</span>, t => {\n  t.<span class=f>test</span>(<span class=s>'diagnostic checks'</span>, () => {\n    <span class=k>const</span> src = <span class=s>'&lt;meta&gt;name: &quot;x&quot;&lt;/meta&gt;&lt;template&gt;&lt;p&gt;{{ unknown }}&lt;/p&gt;&lt;/template&gt;'</span>;\n    <span class=k>const</span> r = <span class=f>compileFail</span>(src);\n\n    t.<span class=f>compileFails</span>(r);\n    t.<span class=f>hasDiag</span>(r, <span class=s>'E0301'</span>);  <span class=cm>// undefined variable</span>\n    t.<span class=f>hasDiag</span>(r, <span class=s>'E0301'</span>, <span class=s>'error'</span>);  <span class=cm>// with level</span>\n    t.<span class=f>noDiag</span>(r, <span class=s>'E0302'</span>);\n    t.<span class=f>diagCount</span>(r, <span class=s>'error'</span>, <span class=n>1</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleDiag() { return this.#_exampleDiag; }
  set #exampleDiag(v) { this.#_exampleDiag = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-test-assertions');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Assertions -->
      <section id="assertions" class="doc-section">
        <h2>
          アサーション
        </h2>
        <div class="subsection">
          <h3 id="assert-basic">
            基本的なアサーション
          </h3>
          <div class="property">
            <h4>
              assert(condition, msg)
            </h4>
            <p>
              条件が真であることを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              eq(actual, expected, msg)
            </h4>
            <p>
              厳密等価性（===）を検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              deepEq(actual, expected, msg)
            </h4>
            <p>
              深い等価性（JSON ベース）を検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              includes(str, sub, msg)
            </h4>
            <p>
              文字列が部分文字列を含むことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              notIncludes(str, sub, msg)
            </h4>
            <p>
              文字列が部分文字列を含まないことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              matches(str, regex, msg)
            </h4>
            <p>
              文字列が正規表現に一致することを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              throws(fn, msg)
            </h4>
            <p>
              関数が例外をスローすることを検証します。
            </p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleAssert}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-compile">
            コンパイル関連のアサーション
          </h3>
          <div class="property">
            <h4>
              compileSuccess(result, msg)
            </h4>
            <p>
              コンパイルが成功したことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              compileFails(result, msg)
            </h4>
            <p>
              コンパイルが失敗したことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              validJS(result, msg)
            </h4>
            <p>出力が有効な JavaScript であることを検証します（<code>new Function()</code> で検証）。</p>
          </div>
        </div>
        <div class="subsection">
          <h3 id="assert-output">
            出力関連のアサーション
          </h3>
          <div class="property">
            <h4>
              outputIncludes(result, sub, msg)
            </h4>
            <p>
              生成されたコードが指定文字列を含むことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              outputNotIncludes(result, sub, msg)
            </h4>
            <p>
              生成されたコードが指定文字列を含まないことを検証します。
            </p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleOutput}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-template">
            テンプレート関連のアサーション
          </h3>
          <div class="property">
            <h4>
              getTemplate(result)
            </h4>
            <p>
              生成されたコードからテンプレート文字列を抽出し、返します。
            </p>
          </div>
          <div class="property">
            <h4>
              templateIncludes(result, sub, msg)
            </h4>
            <p>
              抽出されたテンプレートが指定文字列を含むことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              templateNotIncludes(result, sub, msg)
            </h4>
            <p>
              抽出されたテンプレートが指定文字列を含まないことを検証します。
            </p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleTemplate}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-state">
            state・ライフサイクル関連のアサーション
          </h3>
          <div class="property">
            <h4>
              hasState(result, name, msg)
            </h4>
            <p>
              指定名の state ゲッター / セッターペアが生成されたことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              hasWatch(result, deps, msg)
            </h4>
            <p>
              watch ハンドラが生成されたことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              hasOnMount(result, bodySubstring, msg)
            </h4>
            <p><code>connectedCallback()</code> が指定部分文字列を含むことを検証します。</p>
          </div>
          <div class="property">
            <h4>
              hasOnUnmount(result, bodySubstring, msg)
            </h4>
            <p><code>disconnectedCallback()</code> が指定部分文字列を含むことを検証します。</p>
          </div>
          <div class="property">
            <h4>
              hasInterpolation(result, varName, msg)
            </h4>
            <p>変数が補間される（<code>this.#esc(this.#varName)</code> パターン）ことを検証します。</p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleState}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-diag">
            診断情報関連のアサーション
          </h3>
          <div class="property">
            <h4>
              hasDiag(result, code, level?, msg)
            </h4>
            <p>指定コード（例: 'E0301'）の診断が存在することを検証します。オプションで <code>level</code>（'error', 'warning', 'info'）でフィルタリング可能です。</p>
          </div>
          <div class="property">
            <h4>
              noDiag(result, code, msg)
            </h4>
            <p>
              指定コードの診断が存在しないことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              diagCount(result, level, expected, msg)
            </h4>
            <p>
              指定レベル（'error', 'warning', 'info'）の診断数が期待値であることを検証します。
            </p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleDiag}</code></pre>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Assertions -->
      <section id="assertions" class="doc-section">
        <h2>
          アサーション
        </h2>
        <div class="subsection">
          <h3 id="assert-basic">
            基本的なアサーション
          </h3>
          <div class="property">
            <h4>
              assert(condition, msg)
            </h4>
            <p>
              条件が真であることを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              eq(actual, expected, msg)
            </h4>
            <p>
              厳密等価性（===）を検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              deepEq(actual, expected, msg)
            </h4>
            <p>
              深い等価性（JSON ベース）を検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              includes(str, sub, msg)
            </h4>
            <p>
              文字列が部分文字列を含むことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              notIncludes(str, sub, msg)
            </h4>
            <p>
              文字列が部分文字列を含まないことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              matches(str, regex, msg)
            </h4>
            <p>
              文字列が正規表現に一致することを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              throws(fn, msg)
            </h4>
            <p>
              関数が例外をスローすることを検証します。
            </p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleAssert}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-compile">
            コンパイル関連のアサーション
          </h3>
          <div class="property">
            <h4>
              compileSuccess(result, msg)
            </h4>
            <p>
              コンパイルが成功したことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              compileFails(result, msg)
            </h4>
            <p>
              コンパイルが失敗したことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              validJS(result, msg)
            </h4>
            <p>出力が有効な JavaScript であることを検証します（<code>new Function()</code> で検証）。</p>
          </div>
        </div>
        <div class="subsection">
          <h3 id="assert-output">
            出力関連のアサーション
          </h3>
          <div class="property">
            <h4>
              outputIncludes(result, sub, msg)
            </h4>
            <p>
              生成されたコードが指定文字列を含むことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              outputNotIncludes(result, sub, msg)
            </h4>
            <p>
              生成されたコードが指定文字列を含まないことを検証します。
            </p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleOutput}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-template">
            テンプレート関連のアサーション
          </h3>
          <div class="property">
            <h4>
              getTemplate(result)
            </h4>
            <p>
              生成されたコードからテンプレート文字列を抽出し、返します。
            </p>
          </div>
          <div class="property">
            <h4>
              templateIncludes(result, sub, msg)
            </h4>
            <p>
              抽出されたテンプレートが指定文字列を含むことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              templateNotIncludes(result, sub, msg)
            </h4>
            <p>
              抽出されたテンプレートが指定文字列を含まないことを検証します。
            </p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleTemplate}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-state">
            state・ライフサイクル関連のアサーション
          </h3>
          <div class="property">
            <h4>
              hasState(result, name, msg)
            </h4>
            <p>
              指定名の state ゲッター / セッターペアが生成されたことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              hasWatch(result, deps, msg)
            </h4>
            <p>
              watch ハンドラが生成されたことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              hasOnMount(result, bodySubstring, msg)
            </h4>
            <p><code>connectedCallback()</code> が指定部分文字列を含むことを検証します。</p>
          </div>
          <div class="property">
            <h4>
              hasOnUnmount(result, bodySubstring, msg)
            </h4>
            <p><code>disconnectedCallback()</code> が指定部分文字列を含むことを検証します。</p>
          </div>
          <div class="property">
            <h4>
              hasInterpolation(result, varName, msg)
            </h4>
            <p>変数が補間される（<code>this.#esc(this.#varName)</code> パターン）ことを検証します。</p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleState}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-diag">
            診断情報関連のアサーション
          </h3>
          <div class="property">
            <h4>
              hasDiag(result, code, level?, msg)
            </h4>
            <p>指定コード（例: 'E0301'）の診断が存在することを検証します。オプションで <code>level</code>（'error', 'warning', 'info'）でフィルタリング可能です。</p>
          </div>
          <div class="property">
            <h4>
              noDiag(result, code, msg)
            </h4>
            <p>
              指定コードの診断が存在しないことを検証します。
            </p>
          </div>
          <div class="property">
            <h4>
              diagCount(result, level, expected, msg)
            </h4>
            <p>
              指定レベル（'error', 'warning', 'info'）の診断数が期待値であることを検証します。
            </p>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleDiag}</code></pre>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-test-assertions'] = CskTestAssertions;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-assertions', CskTestAssertions]);
} else if (!customElements.get('csk-test-assertions')) {
  customElements.define('csk-test-assertions', CskTestAssertions);
}

})();

// ── csk-test-compile.csk ──
(() => {
"use strict";

class CskTestCompile extends HTMLElement {
  #_exampleCompile = "<span class=k>const</span> { compileOk, compileFail, csk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=cm>// Success</span>\n<span class=k>const</span> ok = <span class=f>compileOk</span>(<span class=s>'&lt;meta&gt;name: &quot;x&quot;&lt;/meta&gt;&lt;template&gt;&lt;p&gt;hi&lt;/p&gt;&lt;/template&gt;'</span>);\nconsole.<span class=f>log</span>(ok.success);  <span class=cm>// true</span>\nconsole.<span class=f>log</span>(ok.output);   <span class=cm>// JavaScript code</span>\n\n<span class=cm>// With file name</span>\n<span class=k>const</span> r1 = <span class=f>compileOk</span>(src, <span class=s>'my-component.csk'</span>);\n\n<span class=cm>// With options</span>\n<span class=k>const</span> r2 = <span class=f>compileOk</span>(src, <span class=s>'test.csk'</span>, { strict: <span class=n>true</span> });\n\n<span class=cm>// Failure</span>\n<span class=k>const</span> fail = <span class=f>compileFail</span>(<span class=s>'&lt;meta name=&quot;x&quot;&lt;/meta&gt;'</span>);  <span class=cm>// bad syntax</span>\nconsole.<span class=f>log</span>(fail.success);  <span class=cm>// false</span>\nconsole.<span class=f>log</span>(fail.diagnostics);  <span class=cm>// [{ code, level, message, ... }]</span>\n\n<span class=cm>// Helper</span>\n<span class=k>const</span> src = <span class=f>csk</span>({\n  name: <span class=s>'my-btn'</span>,\n  script: <span class=s>'state disabled: boolean = false'</span>,\n  template: <span class=s>'&lt;button :disabled=&quot;disabled&quot;&gt;Click&lt;/button&gt;'</span>,\n  style: <span class=s>'button { cursor: pointer; }'</span>,\n  meta: <span class=s>'shadow: open'</span>\n});\n<span class=k>const</span> r3 = <span class=f>compileOk</span>(src);";
  get #exampleCompile() { return this.#_exampleCompile; }
  set #exampleCompile(v) { this.#_exampleCompile = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-test-compile');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Compile Helpers -->
      <section id="compile-helpers" class="doc-section">
        <h2>
          コンパイルヘルパー
        </h2>
        <div class="subsection">
          <h3 id="compile-ok-fail">
            compileOk(src, fileName?, opts?) / compileFail(src, fileName?, opts?)
          </h3>
          <p>
            Chasket ソースをコンパイルし、結果オブジェクトを返します。
          </p>
          <div class="property">
            <h4>
              戻り値
            </h4>
            <pre><code><span class=i>{{
  success: boolean,
  output?: string,      // 生成されたJavaScriptコード
  diagnostics: Array    // エラー、警告、情報
}}</span></code></pre>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleCompile}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="csk-helper">
            csk(opts)
          </h3>
          <p>
            最小限の有効な Chasket ソースを生成するヘルパー関数です。
          </p>
          <div class="property">
            <h4>
              オプション
            </h4>
            <ul>
              <li><code>name</code> (string, 必須): コンポーネント名</li>
              <li><code>script</code> (string, デフォルト: ''): スクリプトブロック内容</li>
              <li><code>template</code> (string, デフォルト: '&lt;div&gt;test&lt;/div&gt;'): テンプレート</li>
              <li><code>style</code> (string, デフォルト: ''): スタイルブロック内容</li>
              <li><code>meta</code> (string, デフォルト: ''): 追加メタフィールド</li>
            </ul>
          </div>
        </div>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Compile Helpers -->
      <section id="compile-helpers" class="doc-section">
        <h2>
          コンパイルヘルパー
        </h2>
        <div class="subsection">
          <h3 id="compile-ok-fail">
            compileOk(src, fileName?, opts?) / compileFail(src, fileName?, opts?)
          </h3>
          <p>
            Chasket ソースをコンパイルし、結果オブジェクトを返します。
          </p>
          <div class="property">
            <h4>
              戻り値
            </h4>
            <pre><code><span class=i>{{
  success: boolean,
  output?: string,      // 生成されたJavaScriptコード
  diagnostics: Array    // エラー、警告、情報
}}</span></code></pre>
          </div>
          <div class="example-title">
            使用例
          </div>
          <pre><code>${this.#exampleCompile}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="csk-helper">
            csk(opts)
          </h3>
          <p>
            最小限の有効な Chasket ソースを生成するヘルパー関数です。
          </p>
          <div class="property">
            <h4>
              オプション
            </h4>
            <ul>
              <li><code>name</code> (string, 必須): コンポーネント名</li>
              <li><code>script</code> (string, デフォルト: ''): スクリプトブロック内容</li>
              <li><code>template</code> (string, デフォルト: '&lt;div&gt;test&lt;/div&gt;'): テンプレート</li>
              <li><code>style</code> (string, デフォルト: ''): スタイルブロック内容</li>
              <li><code>meta</code> (string, デフォルト: ''): 追加メタフィールド</li>
            </ul>
          </div>
        </div>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-test-compile'] = CskTestCompile;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-compile', CskTestCompile]);
} else if (!customElements.get('csk-test-compile')) {
  customElements.define('csk-test-compile', CskTestCompile);
}

})();

// ── csk-test-example.csk ──
(() => {
"use strict";

class CskTestExample extends HTMLElement {
  #_exampleFull = "<span class=k>const</span> { suite, compileOk, csk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'Counter Component'</span>, t => {\n  <span class=k>let</span> src;\n\n  t.<span class=f>beforeEach</span>(() => {\n    src = <span class=f>csk</span>({\n      name: <span class=s>'my-counter'</span>,\n      script: <span class=s>'\n        state count: number = 0\n        fn increment() { count++; }\n        fn decrement() { count--; }\n      '</span>,\n      template: <span class=s>'\n        &lt;div&gt;\n          &lt;p&gt;Count: {{ count }}&lt;/p&gt;\n          &lt;button @click=&quot;increment&quot;&gt;+&lt;/button&gt;\n          &lt;button @click=&quot;decrement&quot;&gt;-&lt;/button&gt;\n        &lt;/div&gt;\n      '</span>\n    });\n  });\n\n  t.<span class=f>test</span>(<span class=s>'compiles successfully'</span>, () => {\n    <span class=k>const</span> r = <span class=f>compileOk</span>(src);\n    t.<span class=f>compileSuccess</span>(r);\n    t.<span class=f>validJS</span>(r);\n  });\n\n  t.<span class=f>test</span>(<span class=s>'has state and methods'</span>, () => {\n    <span class=k>const</span> r = <span class=f>compileOk</span>(src);\n    t.<span class=f>hasState</span>(r, <span class=s>'count'</span>);\n    t.<span class=f>outputIncludes</span>(r, <span class=s>'increment'</span>);\n    t.<span class=f>outputIncludes</span>(r, <span class=s>'decrement'</span>);\n  });\n\n  t.<span class=f>test</span>(<span class=s>'template includes buttons'</span>, () => {\n    <span class=k>const</span> r = <span class=f>compileOk</span>(src);\n    t.<span class=f>templateIncludes</span>(r, <span class=s>'&lt;button'</span>);\n    t.<span class=f>templateIncludes</span>(r, <span class=s>'Count:'</span>);\n  });\n\n  t.<span class=f>test</span>(<span class=s>'interpolates count'</span>, () => {\n    <span class=k>const</span> r = <span class=f>compileOk</span>(src);\n    t.<span class=f>hasInterpolation</span>(r, <span class=s>'count'</span>);\n  });\n\n  t.<span class=f>afterEach</span>(() => {\n    console.<span class=f>log</span>(<span class=s>'test complete'</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleFull() { return this.#_exampleFull; }
  set #exampleFull(v) { this.#_exampleFull = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-test-example');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Full Example -->
      <section id="full-example" class="doc-section">
        <h2>
          完全なテスト例
        </h2>
        <p>
          以下は複数のアサーションを組み合わせた実践的なテスト例です。Counter コンポーネントの各側面をテストしています。
        </p>
        <div class="example-title">
          完全なテスト例
        </div>
        <pre><code>${this.#exampleFull}</code></pre>
        <p>
          このテストは:
        </p>
        <ul>
          <li>
            コンポーネントがコンパイルされることを確認
          </li>
          <li>
            生成される JavaScript が有効であることを確認
          </li>
          <li>
            state と関数が含まれていることを確認
          </li>
          <li>
            テンプレート構造を確認
          </li>
          <li>
            補間が正しく処理されていることを確認
          </li>
          <li>
            beforeEach / afterEach でセットアップ / クリーンアップを実行
          </li>
        </ul>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Full Example -->
      <section id="full-example" class="doc-section">
        <h2>
          完全なテスト例
        </h2>
        <p>
          以下は複数のアサーションを組み合わせた実践的なテスト例です。Counter コンポーネントの各側面をテストしています。
        </p>
        <div class="example-title">
          完全なテスト例
        </div>
        <pre><code>${this.#exampleFull}</code></pre>
        <p>
          このテストは:
        </p>
        <ul>
          <li>
            コンポーネントがコンパイルされることを確認
          </li>
          <li>
            生成される JavaScript が有効であることを確認
          </li>
          <li>
            state と関数が含まれていることを確認
          </li>
          <li>
            テンプレート構造を確認
          </li>
          <li>
            補間が正しく処理されていることを確認
          </li>
          <li>
            beforeEach / afterEach でセットアップ / クリーンアップを実行
          </li>
        </ul>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-test-example'] = CskTestExample;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-example', CskTestExample]);
} else if (!customElements.get('csk-test-example')) {
  customElements.define('csk-test-example', CskTestExample);
}

})();

// ── csk-test-overview.csk ──
(() => {
"use strict";

class CskTestOverview extends HTMLElement {
  #_exampleOverview = "<span class=k>const</span> { suite, compileOk, assert } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'My Component Tests'</span>, t => {\n  t.<span class=f>test</span>(<span class=s>'basic compile'</span>, () => {\n    <span class=k>const</span> r = <span class=f>compileOk</span>(<span class=s>'&lt;meta&gt;name: &quot;x&quot;&lt;/meta&gt;&lt;template&gt;&lt;p&gt;hi&lt;/p&gt;&lt;/template&gt;'</span>);\n    t.<span class=f>assert</span>(r.success, <span class=s>'compiles'</span>);\n    t.<span class=f>outputIncludes</span>(r, <span class=s>'hi'</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleOverview() { return this.#_exampleOverview; }
  set #exampleOverview(v) { this.#_exampleOverview = v; this.#scheduleUpdate(); }
  #_exampleSetup = "<span class=k>const</span> { suite, compileOk, compileFail, csk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=cm>// Simple compile check</span>\n<span class=k>const</span> src = <span class=s>'&lt;meta&gt;name: &quot;test&quot;&lt;/meta&gt;&lt;template&gt;&lt;div&gt;content&lt;/div&gt;&lt;/template&gt;'</span>;\n<span class=k>const</span> result = <span class=f>compileOk</span>(src);\nconsole.<span class=f>log</span>(result.success);  <span class=cm>// true</span>\nconsole.<span class=f>log</span>(result.output);   <span class=cm>// generated JS code</span>\nconsole.<span class=f>log</span>(result.diagnostics);  <span class=cm>// [ ]</span>";
  get #exampleSetup() { return this.#_exampleSetup; }
  set #exampleSetup(v) { this.#_exampleSetup = v; this.#scheduleUpdate(); }
  #_exampleQuick = "<span class=k>const</span> { suite, compileOk, csk } = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);\n\n<span class=f>suite</span>(<span class=s>'Counter Component'</span>, t => {\n  t.<span class=f>test</span>(<span class=s>'compiles with state'</span>, () => {\n    <span class=k>const</span> src = <span class=f>csk</span>({\n      name: <span class=s>'my-counter'</span>,\n      script: <span class=s>'state count: number = 0'</span>,\n      template: <span class=s>'&lt;button @click=&quot;count++&quot;&gt;{{ count }}&lt;/button&gt;'</span>\n    });\n    <span class=k>const</span> r = <span class=f>compileOk</span>(src);\n    t.<span class=f>compileSuccess</span>(r);\n    t.<span class=f>hasState</span>(r, <span class=s>'count'</span>);\n    t.<span class=f>outputIncludes</span>(r, <span class=s>'count++'</span>);\n  });\n});\n\nsuite.<span class=f>run</span>();";
  get #exampleQuick() { return this.#_exampleQuick; }
  set #exampleQuick(v) { this.#_exampleQuick = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-test-overview');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Overview -->
      <section id="overview" class="doc-section">
        <h2>
          概要
        </h2>
        <p>
          chasket-test は Chasket コンパイラの出力検証を簡潔に記述するための、ゼロ依存のテストユーティリティライブラリです。Node.js 標準機能のみを使用しており、外部パッケージに依存していません。
        </p>
        <p>
          テストランナーと充実したアサーション群により、コンポーネントの以下をテストできます:
        </p>
        <ul>
          <li>
            コンパイルの成功 / 失敗
          </li>
          <li>
            生成される JavaScript コードの検証
          </li>
          <li>
            テンプレート出力の確認
          </li>
          <li>
            state、watch、ライフサイクルフック
          </li>
          <li>
            診断情報（エラー、警告）
          </li>
          <li>
            補間と属性バインディング
          </li>
        </ul>
        <div class="example-title">
          概要
        </div>
        <pre><code>${this.#exampleOverview}</code></pre>
      </section>
      <!-- Installation / Setup -->
      <section id="install" class="doc-section">
        <h2>
          セットアップ
        </h2>
        <p>
          chasket-test は Chasket リポジトリに含まれています。以下の方法でアクセスできます:
        </p>
        <div class="property">
          <h4>
            ローカル開発
          </h4>
          <p>
            テストファイルから以下の形式でインポートします:
          </p>
          <pre><code><span class=k>const</span> <span class=i>{{ suite, compileOk, compileFail, csk }}</span> = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);</code></pre>
        </div>
        <p class="note-text">
          chasket-test はコンパイラの場所を自動検出し、相対パスの候補から探索します。
        </p>
        <div class="example-title">
          セットアップ例
        </div>
        <pre><code>${this.#exampleSetup}</code></pre>
      </section>
      <!-- Quick Start -->
      <section id="quickstart" class="doc-section">
        <h2>
          クイックスタート
        </h2>
        <p>
          最小限のテストを実行する例:
        </p>
        <div class="example-title">
          基本的な使用方法
        </div>
        <pre><code>${this.#exampleQuick}</code></pre>
        <p>
          この例では:
        </p>
        <ul>
          <li><code>suite()</code> でテストスイートを定義</li>
          <li><code>csk()</code> でコンポーネントソースを構築</li>
          <li><code>compileOk()</code> でコンパイル</li>
          <li>
            アサーション群で出力を検証
          </li>
          <li><code>suite.run()</code> でテストを実行</li>
        </ul>
      </section>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Overview -->
      <section id="overview" class="doc-section">
        <h2>
          概要
        </h2>
        <p>
          chasket-test は Chasket コンパイラの出力検証を簡潔に記述するための、ゼロ依存のテストユーティリティライブラリです。Node.js 標準機能のみを使用しており、外部パッケージに依存していません。
        </p>
        <p>
          テストランナーと充実したアサーション群により、コンポーネントの以下をテストできます:
        </p>
        <ul>
          <li>
            コンパイルの成功 / 失敗
          </li>
          <li>
            生成される JavaScript コードの検証
          </li>
          <li>
            テンプレート出力の確認
          </li>
          <li>
            state、watch、ライフサイクルフック
          </li>
          <li>
            診断情報（エラー、警告）
          </li>
          <li>
            補間と属性バインディング
          </li>
        </ul>
        <div class="example-title">
          概要
        </div>
        <pre><code>${this.#exampleOverview}</code></pre>
      </section>
      <!-- Installation / Setup -->
      <section id="install" class="doc-section">
        <h2>
          セットアップ
        </h2>
        <p>
          chasket-test は Chasket リポジトリに含まれています。以下の方法でアクセスできます:
        </p>
        <div class="property">
          <h4>
            ローカル開発
          </h4>
          <p>
            テストファイルから以下の形式でインポートします:
          </p>
          <pre><code><span class=k>const</span> <span class=i>{{ suite, compileOk, compileFail, csk }}</span> = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);</code></pre>
        </div>
        <p class="note-text">
          chasket-test はコンパイラの場所を自動検出し、相対パスの候補から探索します。
        </p>
        <div class="example-title">
          セットアップ例
        </div>
        <pre><code>${this.#exampleSetup}</code></pre>
      </section>
      <!-- Quick Start -->
      <section id="quickstart" class="doc-section">
        <h2>
          クイックスタート
        </h2>
        <p>
          最小限のテストを実行する例:
        </p>
        <div class="example-title">
          基本的な使用方法
        </div>
        <pre><code>${this.#exampleQuick}</code></pre>
        <p>
          この例では:
        </p>
        <ul>
          <li><code>suite()</code> でテストスイートを定義</li>
          <li><code>csk()</code> でコンポーネントソースを構築</li>
          <li><code>compileOk()</code> でコンパイル</li>
          <li>
            アサーション群で出力を検証
          </li>
          <li><code>suite.run()</code> でテストを実行</li>
        </ul>
      </section>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-test-overview'] = CskTestOverview;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-overview', CskTestOverview]);
} else if (!customElements.get('csk-test-overview')) {
  customElements.define('csk-test-overview', CskTestOverview);
}

})();

// ── csk-page-why.csk ──
(() => {
"use strict";

class CskPageWhy extends HTMLElement {
  #_codeExample = "&lt;<span class=t>meta</span>&gt;\n  <span class=a>name</span>: <span class=s>my-counter</span>\n&lt;/<span class=t>meta</span>&gt;\n\n&lt;<span class=t>script</span>&gt;\n  <span class=k>state</span> <span class=v>count</span>: <span class=tp>number</span> = <span class=n>0</span>\n  <span class=k>fn</span> <span class=f>increment</span>() { <span class=v>count</span>++ }\n&lt;/<span class=t>script</span>&gt;\n\n&lt;<span class=t>template</span>&gt;\n  &lt;<span class=t>button</span> <span class=a>@click</span>=<span class=s>\"increment\"</span>&gt;\n    <span class=i>{{ count }}</span>\n  &lt;/<span class=t>button</span>&gt;\n&lt;/<span class=t>template</span>&gt;";
  get #codeExample() { return this.#_codeExample; }
  set #codeExample(v) { this.#_codeExample = v; this.#scheduleUpdate(); }
  #_codeOutput = "<span class=k>class</span> <span class=f>MyCounter</span> <span class=k>extends</span> <span class=tp>HTMLElement</span> {\n  #<span class=v>count</span> = <span class=n>0</span>;\n  <span class=f>connectedCallback</span>() { <span class=cm>/* ... */</span> }\n  #<span class=f>increment</span>() { <span class=k>this</span>.#<span class=v>count</span>++; }\n}\n<span class=f>customElements</span>.<span class=f>define</span>(<span class=s>'my-counter'</span>, <span class=f>MyCounter</span>);";
  get #codeOutput() { return this.#_codeOutput; }
  set #codeOutput(v) { this.#_codeOutput = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-why');
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-why"] .why-page{max-width:var(--max-w, 70rem);margin:0 auto;padding:4rem var(--space-page, 1.5rem) 6rem;color:var(--c-text, #e4e4ed);}[data-chasket-scope="csk-page-why"] .why-hero{text-align:center;padding:3rem 0 4rem;}[data-chasket-scope="csk-page-why"] .why-hero h1{font-size:clamp(2rem, 4vw, 3rem);font-weight:800;line-height:1.2;letter-spacing:-0.03em;background:linear-gradient(135deg, #6C5CE7, #00B894);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0 0 1.25rem;}[data-chasket-scope="csk-page-why"] .why-hero-desc{font-size:clamp(1rem, 1.5vw, 1.2rem);color:var(--c-text-dim, #9898ab);max-width:40rem;margin:0 auto;line-height:1.7;}[data-chasket-scope="csk-page-why"] .why-demo{padding:2rem 0 3rem;}[data-chasket-scope="csk-page-why"] .why-demo-grid{display:flex;align-items:center;gap:1.5rem;justify-content:center;}[data-chasket-scope="csk-page-why"] .why-demo-card{background:var(--c-surface, #1a1a26);border:1px solid var(--c-border, #2a2a3a);border-radius:0.75rem;padding:1.5rem;flex:1;max-width:28rem;overflow-x:auto;}[data-chasket-scope="csk-page-why"] .why-demo-label{font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--c-text-dim, #9898ab);margin-bottom:0.75rem;}[data-chasket-scope="csk-page-why"] .why-demo-card pre{margin:0;font-size:0.8rem;line-height:1.6;}[data-chasket-scope="csk-page-why"] .why-demo-card code{font-family:var(--font-mono, 'JetBrains Mono', monospace);color:#dfe6e9;}[data-chasket-scope="csk-page-why"] /* Syntax Highlighting */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-why"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-why"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-why"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-why"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-why"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-why"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-why"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-why"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-why"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-why"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-why"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-why"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-why"] .why-demo-arrow{color:var(--c-text-dim, #9898ab);flex-shrink:0;}[data-chasket-scope="csk-page-why"] .why-sections{display:flex;flex-direction:column;gap:2rem;padding:2rem 0;}[data-chasket-scope="csk-page-why"] .why-card{background:var(--c-surface, #1a1a26);border:1px solid var(--c-border, #2a2a3a);border-radius:0.75rem;padding:2rem 2.5rem;transition:border-color 0.2s;}[data-chasket-scope="csk-page-why"] .why-card:hover{border-color:var(--c-primary, #6C5CE7);}[data-chasket-scope="csk-page-why"] .why-card-future{border-style:dashed;opacity:0.85;}[data-chasket-scope="csk-page-why"] .why-card-icon{margin-bottom:1rem;}[data-chasket-scope="csk-page-why"] .why-card h2{font-size:clamp(1.15rem, 1.8vw, 1.4rem);font-weight:700;margin:0 0 0.75rem;letter-spacing:-0.02em;}[data-chasket-scope="csk-page-why"] .why-card p{color:var(--c-text-dim, #9898ab);line-height:1.7;font-size:clamp(0.9rem, 1.1vw, 1rem);margin:0;}[data-chasket-scope="csk-page-why"] .why-cta{text-align:center;padding:4rem 0 2rem;}[data-chasket-scope="csk-page-why"] .why-cta h2{font-size:clamp(1.5rem, 2.5vw, 2rem);font-weight:700;margin:0 0 0.75rem;}[data-chasket-scope="csk-page-why"] .why-cta p{color:var(--c-text-dim, #9898ab);margin:0 0 2rem;font-size:clamp(0.95rem, 1.2vw, 1.1rem);}[data-chasket-scope="csk-page-why"] .why-cta-buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}[data-chasket-scope="csk-page-why"] .why-btn-primary{display:inline-flex;align-items:center;padding:0.75rem 2rem;background:linear-gradient(135deg, #6C5CE7, #00B894);color:#fff;border-radius:0.5rem;text-decoration:none;font-weight:600;font-size:1rem;transition:opacity 0.2s;}[data-chasket-scope="csk-page-why"] .why-btn-primary:hover{opacity:0.9;}[data-chasket-scope="csk-page-why"] .why-btn-secondary{display:inline-flex;align-items:center;padding:0.75rem 2rem;background:var(--c-surface, #1a1a26);color:var(--c-text, #e4e4ed);border:1px solid var(--c-border, #2a2a3a);border-radius:0.5rem;text-decoration:none;font-weight:600;font-size:1rem;transition:border-color 0.2s;}[data-chasket-scope="csk-page-why"] .why-btn-secondary:hover{border-color:var(--c-primary-light, #a29bfe);}[data-chasket-scope="csk-page-why"] .t{color:#7c8aff;}[data-chasket-scope="csk-page-why"] .a{color:#f8a5c2;}[data-chasket-scope="csk-page-why"] .s{color:#55efc4;}[data-chasket-scope="csk-page-why"] .k{color:#fd79a8;}[data-chasket-scope="csk-page-why"] .tp{color:#74b9ff;}[data-chasket-scope="csk-page-why"] .v{color:#dfe6e9;}[data-chasket-scope="csk-page-why"] .f{color:#ffeaa7;}[data-chasket-scope="csk-page-why"] .n{color:#fab1a0;}[data-chasket-scope="csk-page-why"] .i{color:#fdcb6e;}[data-chasket-scope="csk-page-why"] .cm{color:#636e72;}@media (max-width:48rem){[data-chasket-scope="csk-page-why"] .why-demo-grid{flex-direction:column;}[data-chasket-scope="csk-page-why"] .why-demo-card{max-width:100%;}[data-chasket-scope="csk-page-why"] .why-demo-arrow{transform:rotate(90deg);}[data-chasket-scope="csk-page-why"] .why-card{padding:1.5rem;}}</style>
      <div class="why-page">
        <section class="why-hero">
          <h1>
            ${this.#esc(this.#tr('why.heroHeadline'))}
          </h1>
          <p class="why-hero-desc">
            ${this.#esc(this.#tr('why.heroDesc'))}
          </p>
        </section>
        <section class="why-demo">
          <div class="why-demo-grid">
            <div class="why-demo-card">
              <div class="why-demo-label">
                Chasket (.csk)
              </div>
              <pre><code>${this.#codeExample}</code></pre>
            </div>
            <div class="why-demo-arrow">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12">
                </line>
                <polyline points="12 5 19 12 12 19">
                </polyline>
              </svg>
            </div>
            <div class="why-demo-card">
              <div class="why-demo-label">
                Output (vanilla JS)
              </div>
              <pre><code>${this.#codeOutput}</code></pre>
            </div>
          </div>
        </section>
        <section class="why-sections">
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary, #6C5CE7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section1Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section1Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-success, #00B894)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z">
                </path>
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section2Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section2Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-warning, #FDCB6E)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section3Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section3Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-info, #74B9FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2">
                </rect>
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section4Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section4Desc'))}
            </p>
          </div>
          <div class="why-card why-card-future">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary-light, #A29BFE)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10">
                </circle>
                <polyline points="12 6 12 12 16 14">
                </polyline>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section5Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section5Desc'))}
            </p>
          </div>
        </section>
        <section class="why-cta">
          <h2>
            ${this.#esc(this.#tr('why.ctaTitle'))}
          </h2>
          <p>
            ${this.#esc(this.#tr('why.ctaDesc'))}
          </p>
          <div class="why-cta-buttons"><a href="#/guide" class="why-btn-primary">${this.#esc(this.#tr('hero.getStarted'))}</a><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="why-btn-secondary">GitHub</a></div>
        </section>
      </div>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>[data-chasket-scope="csk-page-why"] .why-page{max-width:var(--max-w, 70rem);margin:0 auto;padding:4rem var(--space-page, 1.5rem) 6rem;color:var(--c-text, #e4e4ed);}[data-chasket-scope="csk-page-why"] .why-hero{text-align:center;padding:3rem 0 4rem;}[data-chasket-scope="csk-page-why"] .why-hero h1{font-size:clamp(2rem, 4vw, 3rem);font-weight:800;line-height:1.2;letter-spacing:-0.03em;background:linear-gradient(135deg, #6C5CE7, #00B894);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0 0 1.25rem;}[data-chasket-scope="csk-page-why"] .why-hero-desc{font-size:clamp(1rem, 1.5vw, 1.2rem);color:var(--c-text-dim, #9898ab);max-width:40rem;margin:0 auto;line-height:1.7;}[data-chasket-scope="csk-page-why"] .why-demo{padding:2rem 0 3rem;}[data-chasket-scope="csk-page-why"] .why-demo-grid{display:flex;align-items:center;gap:1.5rem;justify-content:center;}[data-chasket-scope="csk-page-why"] .why-demo-card{background:var(--c-surface, #1a1a26);border:1px solid var(--c-border, #2a2a3a);border-radius:0.75rem;padding:1.5rem;flex:1;max-width:28rem;overflow-x:auto;}[data-chasket-scope="csk-page-why"] .why-demo-label{font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--c-text-dim, #9898ab);margin-bottom:0.75rem;}[data-chasket-scope="csk-page-why"] .why-demo-card pre{margin:0;font-size:0.8rem;line-height:1.6;}[data-chasket-scope="csk-page-why"] .why-demo-card code{font-family:var(--font-mono, 'JetBrains Mono', monospace);color:#dfe6e9;}[data-chasket-scope="csk-page-why"] /* Syntax Highlighting */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-why"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-why"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-why"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-why"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-why"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-why"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-why"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-why"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-why"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-why"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-why"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-why"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-why"] .why-demo-arrow{color:var(--c-text-dim, #9898ab);flex-shrink:0;}[data-chasket-scope="csk-page-why"] .why-sections{display:flex;flex-direction:column;gap:2rem;padding:2rem 0;}[data-chasket-scope="csk-page-why"] .why-card{background:var(--c-surface, #1a1a26);border:1px solid var(--c-border, #2a2a3a);border-radius:0.75rem;padding:2rem 2.5rem;transition:border-color 0.2s;}[data-chasket-scope="csk-page-why"] .why-card:hover{border-color:var(--c-primary, #6C5CE7);}[data-chasket-scope="csk-page-why"] .why-card-future{border-style:dashed;opacity:0.85;}[data-chasket-scope="csk-page-why"] .why-card-icon{margin-bottom:1rem;}[data-chasket-scope="csk-page-why"] .why-card h2{font-size:clamp(1.15rem, 1.8vw, 1.4rem);font-weight:700;margin:0 0 0.75rem;letter-spacing:-0.02em;}[data-chasket-scope="csk-page-why"] .why-card p{color:var(--c-text-dim, #9898ab);line-height:1.7;font-size:clamp(0.9rem, 1.1vw, 1rem);margin:0;}[data-chasket-scope="csk-page-why"] .why-cta{text-align:center;padding:4rem 0 2rem;}[data-chasket-scope="csk-page-why"] .why-cta h2{font-size:clamp(1.5rem, 2.5vw, 2rem);font-weight:700;margin:0 0 0.75rem;}[data-chasket-scope="csk-page-why"] .why-cta p{color:var(--c-text-dim, #9898ab);margin:0 0 2rem;font-size:clamp(0.95rem, 1.2vw, 1.1rem);}[data-chasket-scope="csk-page-why"] .why-cta-buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}[data-chasket-scope="csk-page-why"] .why-btn-primary{display:inline-flex;align-items:center;padding:0.75rem 2rem;background:linear-gradient(135deg, #6C5CE7, #00B894);color:#fff;border-radius:0.5rem;text-decoration:none;font-weight:600;font-size:1rem;transition:opacity 0.2s;}[data-chasket-scope="csk-page-why"] .why-btn-primary:hover{opacity:0.9;}[data-chasket-scope="csk-page-why"] .why-btn-secondary{display:inline-flex;align-items:center;padding:0.75rem 2rem;background:var(--c-surface, #1a1a26);color:var(--c-text, #e4e4ed);border:1px solid var(--c-border, #2a2a3a);border-radius:0.5rem;text-decoration:none;font-weight:600;font-size:1rem;transition:border-color 0.2s;}[data-chasket-scope="csk-page-why"] .why-btn-secondary:hover{border-color:var(--c-primary-light, #a29bfe);}[data-chasket-scope="csk-page-why"] .t{color:#7c8aff;}[data-chasket-scope="csk-page-why"] .a{color:#f8a5c2;}[data-chasket-scope="csk-page-why"] .s{color:#55efc4;}[data-chasket-scope="csk-page-why"] .k{color:#fd79a8;}[data-chasket-scope="csk-page-why"] .tp{color:#74b9ff;}[data-chasket-scope="csk-page-why"] .v{color:#dfe6e9;}[data-chasket-scope="csk-page-why"] .f{color:#ffeaa7;}[data-chasket-scope="csk-page-why"] .n{color:#fab1a0;}[data-chasket-scope="csk-page-why"] .i{color:#fdcb6e;}[data-chasket-scope="csk-page-why"] .cm{color:#636e72;}@media (max-width:48rem){[data-chasket-scope="csk-page-why"] .why-demo-grid{flex-direction:column;}[data-chasket-scope="csk-page-why"] .why-demo-card{max-width:100%;}[data-chasket-scope="csk-page-why"] .why-demo-arrow{transform:rotate(90deg);}[data-chasket-scope="csk-page-why"] .why-card{padding:1.5rem;}}</style>
      <div class="why-page">
        <section class="why-hero">
          <h1>
            ${this.#esc(this.#tr('why.heroHeadline'))}
          </h1>
          <p class="why-hero-desc">
            ${this.#esc(this.#tr('why.heroDesc'))}
          </p>
        </section>
        <section class="why-demo">
          <div class="why-demo-grid">
            <div class="why-demo-card">
              <div class="why-demo-label">
                Chasket (.csk)
              </div>
              <pre><code>${this.#codeExample}</code></pre>
            </div>
            <div class="why-demo-arrow">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12">
                </line>
                <polyline points="12 5 19 12 12 19">
                </polyline>
              </svg>
            </div>
            <div class="why-demo-card">
              <div class="why-demo-label">
                Output (vanilla JS)
              </div>
              <pre><code>${this.#codeOutput}</code></pre>
            </div>
          </div>
        </section>
        <section class="why-sections">
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary, #6C5CE7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section1Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section1Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-success, #00B894)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z">
                </path>
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section2Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section2Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-warning, #FDCB6E)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section3Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section3Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-info, #74B9FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2">
                </rect>
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section4Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section4Desc'))}
            </p>
          </div>
          <div class="why-card why-card-future">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary-light, #A29BFE)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10">
                </circle>
                <polyline points="12 6 12 12 16 14">
                </polyline>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section5Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section5Desc'))}
            </p>
          </div>
        </section>
        <section class="why-cta">
          <h2>
            ${this.#esc(this.#tr('why.ctaTitle'))}
          </h2>
          <p>
            ${this.#esc(this.#tr('why.ctaDesc'))}
          </p>
          <div class="why-cta-buttons"><a href="#/guide" class="why-btn-primary">${this.#esc(this.#tr('hero.getStarted'))}</a><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="why-btn-secondary">GitHub</a></div>
        </section>
      </div>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-page-why'] = CskPageWhy;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-why', CskPageWhy]);
} else if (!customElements.get('csk-page-why')) {
  customElements.define('csk-page-why', CskPageWhy);
}

})();

// ── csk-copy-btn.csk ──
(() => {
"use strict";

class CskCopyBtn extends HTMLElement {
  #_copied = false;
  get #copied() { return this.#_copied; }
  set #copied(v) { this.#_copied = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  static get observedAttributes() {
    return ['text'];
  }

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    { const v = this.getAttribute('text'); if (v !== null) this.#prop_text = v || ""; }
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal) return;
    if (name === 'text') { this.#prop_text = newVal || ''; this.#scheduleUpdate(); }
  }

  #prop_text = "";
  get text() { return this.#prop_text; }

  #copy() {
    if (navigator.clipboard && this.#prop_text !== "") {
          navigator.clipboard.writeText(this.#prop_text)
          this.#copied = true
          setTimeout(() => { this.#copied = false }, 2000)
        }
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:inline-flex;}.btn{background:none;border:none;color:var(--c-text-dim, #9898ab);cursor:pointer;padding:0.25rem;border-radius:0.25rem;transition:color 0.2s;display:flex;align-items:center;justify-content:center;}.btn:hover{color:#fff;}.btn.copied{color:var(--c-accent, #00B894);}</style>
      <button data-chasket-id="fl-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'btn copied' : 'btn'))}" aria-label="Copy to clipboard">
        ${this.#copied ? `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12">
            </polyline>
          </svg>
        ` : `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2">
            </rect>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1">
            </path>
          </svg>
        `}
      </button>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>:host{display:inline-flex;}.btn{background:none;border:none;color:var(--c-text-dim, #9898ab);cursor:pointer;padding:0.25rem;border-radius:0.25rem;transition:color 0.2s;display:flex;align-items:center;justify-content:center;}.btn:hover{color:#fff;}.btn.copied{color:var(--c-accent, #00B894);}</style>
      <button data-chasket-id="fl-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'btn copied' : 'btn'))}" aria-label="Copy to clipboard">
        ${this.#copied ? `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12">
            </polyline>
          </svg>
        ` : `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2">
            </rect>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1">
            </path>
          </svg>
        `}
      </button>
    `;
    return tpl.content;
  }

  #patch(parent, newContent) {
    const newNodes = Array.from(newContent.childNodes);
    const oldNodes = Array.from(parent.childNodes);
    const max = Math.max(oldNodes.length, newNodes.length);
    for (let i = 0; i < max; i++) {
      const o = oldNodes[i], n = newNodes[i];
      if (!n) { parent.removeChild(o); continue; }
      if (!o) { parent.appendChild(n.cloneNode(true)); continue; }
      if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) {
        parent.replaceChild(n.cloneNode(true), o); continue;
      }
      if (o.nodeType === 3) {
        if (o.textContent !== n.textContent) o.textContent = n.textContent;
        continue;
      }
      if (o.nodeType === 1) {
        const oA = o.attributes, nA = n.attributes;
        for (let j = nA.length - 1; j >= 0; j--) {
          const a = nA[j];
          if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
        }
        for (let j = oA.length - 1; j >= 0; j--) {
          if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
        }
        if (o.tagName === 'STYLE') {
          if (o.textContent !== n.textContent) o.textContent = n.textContent;
          continue;
        }
        if (o.tagName.includes('-')) {
          for (let j = nA.length - 1; j >= 0; j--) {
            const a = nA[j];
            if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
          }
          for (let j = oA.length - 1; j >= 0; j--) {
            if (!n.hasAttribute(oA[j].name)) o.removeAttribute(oA[j].name);
          }
          continue;
        }
        this.#patch(o, n);
      }
    }
  }

  #bindEvents() {
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-0"]');
      if (el) {
        const fn_click = (e) => { this.#copy(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
  }

  #bindRefs() {
  }

  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    queueMicrotask(() => {
      this.#updateScheduled = false;
      this.#update();
    });
  }

  #update() {
    this.#updateScheduled = false;
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    this.#patch(this.#shadow, this.#getNewTree());
    this.#bindEvents();
    this.#bindRefs();
  }

  #updateKeepFocus(focusedEl) {
    this.#update();
  }

  #esc(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"']/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  #escAttr(val) {
    if (val == null) return '';
    const s = String(val);
    if (!/[&<>"'`\n\r]/.test(s)) return s;
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;').replace(/\n/g,'&#10;').replace(/\r/g,'&#13;');
  }

  #escUrl(val) {
    if (val == null) return '';
    const s = String(val).trim();
    let decoded = s;
    for (let i = 0; i < 5; i++) {
      try {
        const next = decodeURIComponent(decoded);
        if (next === decoded) break;
        decoded = next;
      } catch(e) { break; }
    }
    const normalized = decoded.replace(/[\s\x00-\x1F]/g, '');
    if (/(javascript|data|vbscript|blob|file)\s*:/i.test(normalized)) return 'about:blank';
    return this.#escAttr(normalized);
  }
}

if (typeof __chasketClasses !== 'undefined') {
  __chasketClasses['csk-copy-btn'] = CskCopyBtn;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-copy-btn', CskCopyBtn]);
} else if (!customElements.get('csk-copy-btn')) {
  customElements.define('csk-copy-btn', CskCopyBtn);
}

})();

// Register components in dependency order (children before parents)
(function() {
  const tags = new Set(__chasketDefineQueue.map(([t]) => t));
  const tagIdx = new Map(__chasketDefineQueue.map(([t], i) => [t, i]));
  // Detect child custom elements from class source code
  const deps = __chasketDefineQueue.map(([tag, cls]) => {
    const src = cls.toString();
    const children = [];
    tags.forEach(t => { if (t !== tag && src.includes('<' + t)) children.push(t); });
    return children;
  });
  // Topological sort (Kahn's algorithm): children defined before parents
  const deg = deps.map(d => d.filter(t => tagIdx.has(t)).length);
  const q = []; deg.forEach((d, i) => { if (d === 0) q.push(i); });
  const order = [];
  while (q.length) {
    const i = q.shift(); order.push(i);
    const myTag = __chasketDefineQueue[i][0];
    deps.forEach((d, j) => { if (d.includes(myTag) && --deg[j] === 0) q.push(j); });
  }
  // Append any remaining (cyclic) in original order
  for (let i = 0; i < __chasketDefineQueue.length; i++) if (!order.includes(i)) order.push(i);
  order.forEach(i => {
    const [tag, cls] = __chasketDefineQueue[i];
    if (!customElements.get(tag)) customElements.define(tag, cls);
  });
})();
