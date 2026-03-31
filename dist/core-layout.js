// Chasket Bundle - 2026-03-31T13:10:55.957Z
// 3 component(s)

// Deferred registration queue: all classes are defined first,
// then all customElements.define() calls happen at the end.
// This ensures nested components work regardless of file order.
var __chasketDefineQueue = [];

// ── csk-footer.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskFooter extends HTMLElement {
  static #__css = `:host{display:block;}.footer{padding:clamp(1.25rem, 2.5vw, 2rem) 0;border-top:1px solid var(--c-border, #2a2a3a);}.inner{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;}.brand{display:flex;align-items:center;gap:0.5rem;font-weight:600;font-size:clamp(0.8rem, 1vw, 0.9rem);color:var(--c-text, #e4e4ed);}.links{display:flex;align-items:center;gap:0.625rem;}.footer-link{display:inline-flex;align-items:center;gap:0.375rem;font-size:clamp(0.75rem, 0.9vw, 0.85rem);color:var(--c-text-dim, #9898ab);text-decoration:none;transition:color 0.2s;}.footer-link:hover{color:#fff;}.footer-link svg{flex-shrink:0;opacity:0.7;}.footer-link:hover svg{opacity:1;}.sep{color:var(--c-border, #2a2a3a);font-size:0.75rem;}.oss-note{width:100%;text-align:center;font-size:clamp(0.7rem, 0.85vw, 0.78rem);color:var(--c-text-dim, #9898ab);opacity:0.7;padding-top:0.75rem;border-top:1px solid var(--c-border, #2a2a3a);margin-top:0.25rem;}.copy{font-size:clamp(0.7rem, 0.9vw, 0.8rem);color:var(--c-text-dim, #9898ab);}@media (max-width:48rem){.inner{flex-direction:column;text-align:center;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskFooter.#__css); return s; } catch(e) { return null; } })();

  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    if (CskFooter.#__sheet) this.#shadow.adoptedStyleSheets = [CskFooter.#__sheet];
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
      ${CskFooter.#__sheet ? '' : '<style>' + CskFooter.#__css + '</style>'}
      <footer class="footer">
        <div class="inner">
          <div class="brand"><svg width="22" height="22" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="fg" x1="4" y1="6" x2="48" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#2EBCB0"></stop><stop offset="1" stop-color="#FF7170"></stop></linearGradient></defs><rect x="4" y="6" width="42" height="50" rx="8" fill="url(#fg)" fill-opacity="0.9" stroke="url(#fg)" stroke-width="3.5"></rect><rect x="12" y="24" width="20" height="14" rx="4" stroke="#fff" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="3 3"></rect><line x1="34" y1="40" x2="54" y2="12" stroke="#E8A243" stroke-width="5.5" stroke-linecap="round"></line></svg><span>Chasket</span></div>
          <div class="links"><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="footer-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>${this.#esc(this.#tr('footer.source'))}</a><span class="sep">·</span><a href="https://github.com/UltraEgoist/chasket.dev" target="_blank" rel="noopener noreferrer" class="footer-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>${this.#esc(this.#tr('footer.docsRepo'))}</a></div>
          <p class="oss-note">
            ${this.#esc(this.#tr('footer.ossNote'))}
          </p>
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
      ${CskFooter.#__sheet ? '' : '<style>' + CskFooter.#__css + '</style>'}
      <footer class="footer">
        <div class="inner">
          <div class="brand"><svg width="22" height="22" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="fg" x1="4" y1="6" x2="48" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#2EBCB0"></stop><stop offset="1" stop-color="#FF7170"></stop></linearGradient></defs><rect x="4" y="6" width="42" height="50" rx="8" fill="url(#fg)" fill-opacity="0.9" stroke="url(#fg)" stroke-width="3.5"></rect><rect x="12" y="24" width="20" height="14" rx="4" stroke="#fff" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="3 3"></rect><line x1="34" y1="40" x2="54" y2="12" stroke="#E8A243" stroke-width="5.5" stroke-linecap="round"></line></svg><span>Chasket</span></div>
          <div class="links"><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="footer-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>${this.#esc(this.#tr('footer.source'))}</a><span class="sep">·</span><a href="https://github.com/UltraEgoist/chasket.dev" target="_blank" rel="noopener noreferrer" class="footer-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>${this.#esc(this.#tr('footer.docsRepo'))}</a></div>
          <p class="oss-note">
            ${this.#esc(this.#tr('footer.ossNote'))}
          </p>
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
          if (a.name === 'value' && (o.tagName === 'INPUT' || o.tagName === 'TEXTAREA' || o.tagName === 'SELECT')) {
            if (o.value !== a.value) o.value = a.value;
          } else if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
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
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskNavbar extends HTMLElement {
  static #__css = `:host{display:block;position:fixed;top:0;left:0;right:0;z-index:100;}.nav{background:rgba(10, 10, 15, 0.82);backdrop-filter:blur(1rem) saturate(1.6);-webkit-backdrop-filter:blur(1rem) saturate(1.6);border-bottom:1px solid var(--c-border, #2a2a3a);transition:border-color 0.3s;}.nav.scrolled{border-bottom-color:rgba(42, 42, 58, 1);}.inner{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);display:flex;align-items:center;justify-content:space-between;height:3.75rem;}.logo{display:flex;align-items:center;gap:0.625rem;font-weight:700;font-size:clamp(1.2rem, 1.6vw, 1.5rem);letter-spacing:-0.02em;color:var(--c-text, #e4e4ed);text-decoration:none;transition:color 0.2s;}.logo:hover{color:#fff;}.logo svg{flex-shrink:0;}.links{display:flex;align-items:center;gap:clamp(1rem, 2.5vw, 1.75rem);font-size:clamp(0.8rem, 1vw, 0.9rem);}.links a{color:var(--c-text-dim, #9898ab);text-decoration:none;transition:color 0.2s;white-space:nowrap;}.links a:hover{color:#fff;}.links a.active{color:#fff;position:relative;}.links a.active::after{content:'';position:absolute;bottom:-0.25rem;left:0;right:0;height:2px;background:var(--c-accent, #2EBCB0);border-radius:1px;}.gh-link{display:inline-flex !important;align-items:center;gap:0.375rem;background:var(--c-surface, #1a1a26);padding:0.375rem 0.875rem;border-radius:0.5rem;border:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.75rem, 0.9vw, 0.85rem) !important;}.gh-link:hover{border-color:var(--c-primary-light, #a29bfe);color:#fff !important;}.lang-btn{display:inline-flex;align-items:center;gap:0.375rem;background:var(--c-surface, #1a1a26);padding:0.375rem 0.75rem;border-radius:0.5rem;border:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.75rem, 0.9vw, 0.85rem);color:var(--c-text-dim, #9898ab);cursor:pointer;transition:border-color 0.2s, color 0.2s;font-family:var(--font, sans-serif);font-weight:600;letter-spacing:0.04em;min-height:2.25rem;white-space:nowrap;}.lang-btn:hover{border-color:var(--c-primary-light, #a29bfe);color:#fff;}.lang-btn svg{flex-shrink:0;}.toggle{display:none;flex-direction:column;background:none;border:none;cursor:pointer;padding:0.5rem;min-width:2.75rem;min-height:2.75rem;justify-content:center;align-items:center;border-radius:0.375rem;transition:background 0.2s;}.toggle:hover{background:rgba(255, 255, 255, 0.08);}.toggle span{display:block;width:1.375rem;height:2px;background:var(--c-text, #e4e4ed);margin:0.3125rem 0;border-radius:2px;transition:0.25s;}/* Tablet:shrink spacing to prevent cramped layout */ @media (max-width:56rem){.links{gap:0.625rem;}.links a{font-size:0.78rem;}.links a.gh-link{padding:0.375rem 0.625rem;font-size:0.75rem !important;}.lang-btn{padding:0.375rem 0.625rem;font-size:0.75rem;min-height:1.875rem;}}@media (max-width:48rem){.links{display:none;flex-direction:column;align-items:center;position:absolute;top:3.75rem;left:0;right:0;background:rgba(10, 10, 15, 0.96);padding:1.25rem var(--space-page, 1.5rem);gap:0.5rem;border-bottom:1px solid var(--c-border, #2a2a3a);backdrop-filter:blur(1rem);}.links.open{display:flex;}.links a{padding:0.5rem 0;font-size:1rem;}.links a.gh-link, .lang-btn{padding:0.5rem 1.25rem;font-size:0.875rem !important;margin-top:0.25rem;}.toggle{display:flex;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskNavbar.#__css); return s; } catch(e) { return null; } })();

  #_menuOpen = false;
  get #menuOpen() { return this.#_menuOpen; }
  set #menuOpen(v) { this.#_menuOpen = v; this.#scheduleUpdate(); }
  #_scrolled = false;
  get #scrolled() { return this.#_scrolled; }
  set #scrolled(v) { this.#_scrolled = v; this.#scheduleUpdate(); }
  #_currentHash = "";
  get #currentHash() { return this.#_currentHash; }
  set #currentHash(v) { this.#_currentHash = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    if (CskNavbar.#__sheet) this.#shadow.adoptedStyleSheets = [CskNavbar.#__sheet];
  }

  connectedCallback() {
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    window.addEventListener("scroll", () => { this.#handleScroll() }, { passive: true })
        window.addEventListener("hashchange", () => { this.#updateHash() })
        this.#updateHash()
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

  #updateHash() {
    this.#currentHash = window.location.hash
  }

  #isActive(path) {
    if (path === '/') return this.#currentHash === '' || this.#currentHash === '#' || this.#currentHash === '#/'
        return this.#currentHash === '#' + path || this.#currentHash.startsWith('#' + path + '/')
  }

  #goEcosystem() {
    if (window.location.hash.startsWith('#/')) {
          window.location.hash = '/'
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const el = document.getElementById("ecosystem")
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
            })
          })
        } else {
          const el = document.getElementById("ecosystem")
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        this.#menuOpen = false
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskNavbar.#__sheet ? '' : '<style>' + CskNavbar.#__css + '</style>'}
      <nav class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#scrolled ? 'nav scrolled' : 'nav'))}">
        <div class="inner"><a href="/" class="logo"><svg width="28" height="28" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="ng" x1="4" y1="6" x2="48" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#2EBCB0"></stop><stop offset="1" stop-color="#FF7170"></stop></linearGradient></defs><rect x="4" y="6" width="42" height="50" rx="8" fill="url(#ng)" fill-opacity="0.9" stroke="url(#ng)" stroke-width="3.5"></rect><rect x="12" y="24" width="20" height="14" rx="4" stroke="#fff" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="3 3"></rect><line x1="34" y1="40" x2="54" y2="12" stroke="#E8A243" stroke-width="5.5" stroke-linecap="round"></line></svg><span>Chasket</span></a><div class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#menuOpen ? 'links open' : 'links'))}"><a data-chasket-id="fl-csk-navbar-0" href="#/why" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/why') ? 'active' : ''))}">${this.#esc(this.#tr('nav.why'))}</a><a data-chasket-id="fl-csk-navbar-1" href="#/guide" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/guide') ? 'active' : ''))}">${this.#esc(this.#tr('nav.guide'))}</a><a data-chasket-id="fl-csk-navbar-2" href="#/api" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/api') ? 'active' : ''))}">${this.#esc(this.#tr('nav.api'))}</a><a data-chasket-id="fl-csk-navbar-3" href="#/testing" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/testing') ? 'active' : ''))}">${this.#esc(this.#tr('nav.testing'))}</a><a data-chasket-id="fl-csk-navbar-4" href="#ecosystem" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/') ? '' : ''))}">${this.#esc(this.#tr('nav.ecosystem'))}</a><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="gh-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
          GitHub
        </a><button data-chasket-id="fl-csk-navbar-5" class="lang-btn" aria-label="${this.#escAttr(this.#tr('nav.switchLang'))}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>${this.#esc(this.#currentLang() === 'ja' ? 'EN' : 'JA')}</button></div><button data-chasket-id="fl-csk-navbar-6" class="toggle" aria-label="${this.#escAttr(this.#tr('nav.toggleMenu'))}"><span></span><span></span><span></span></button></div>
      </nav>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskNavbar.#__sheet ? '' : '<style>' + CskNavbar.#__css + '</style>'}
      <nav class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#scrolled ? 'nav scrolled' : 'nav'))}">
        <div class="inner"><a href="/" class="logo"><svg width="28" height="28" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="ng" x1="4" y1="6" x2="48" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#2EBCB0"></stop><stop offset="1" stop-color="#FF7170"></stop></linearGradient></defs><rect x="4" y="6" width="42" height="50" rx="8" fill="url(#ng)" fill-opacity="0.9" stroke="url(#ng)" stroke-width="3.5"></rect><rect x="12" y="24" width="20" height="14" rx="4" stroke="#fff" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="3 3"></rect><line x1="34" y1="40" x2="54" y2="12" stroke="#E8A243" stroke-width="5.5" stroke-linecap="round"></line></svg><span>Chasket</span></a><div class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#menuOpen ? 'links open' : 'links'))}"><a data-chasket-id="fl-csk-navbar-0" href="#/why" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/why') ? 'active' : ''))}">${this.#esc(this.#tr('nav.why'))}</a><a data-chasket-id="fl-csk-navbar-1" href="#/guide" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/guide') ? 'active' : ''))}">${this.#esc(this.#tr('nav.guide'))}</a><a data-chasket-id="fl-csk-navbar-2" href="#/api" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/api') ? 'active' : ''))}">${this.#esc(this.#tr('nav.api'))}</a><a data-chasket-id="fl-csk-navbar-3" href="#/testing" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/testing') ? 'active' : ''))}">${this.#esc(this.#tr('nav.testing'))}</a><a data-chasket-id="fl-csk-navbar-4" href="#ecosystem" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#isActive('/') ? '' : ''))}">${this.#esc(this.#tr('nav.ecosystem'))}</a><a href="https://github.com/UltraEgoist/chasket" target="_blank" rel="noopener noreferrer" class="gh-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
          GitHub
        </a><button data-chasket-id="fl-csk-navbar-5" class="lang-btn" aria-label="${this.#escAttr(this.#tr('nav.switchLang'))}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>${this.#esc(this.#currentLang() === 'ja' ? 'EN' : 'JA')}</button></div><button data-chasket-id="fl-csk-navbar-6" class="toggle" aria-label="${this.#escAttr(this.#tr('nav.toggleMenu'))}"><span></span><span></span><span></span></button></div>
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
          if (a.name === 'value' && (o.tagName === 'INPUT' || o.tagName === 'TEXTAREA' || o.tagName === 'SELECT')) {
            if (o.value !== a.value) o.value = a.value;
          } else if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
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
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-navbar-0"]');
      if (el) {
        const fn_click = (e) => { this.#closeMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-navbar-1"]');
      if (el) {
        const fn_click = (e) => { this.#closeMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-navbar-2"]');
      if (el) {
        const fn_click = (e) => { this.#closeMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-navbar-3"]');
      if (el) {
        const fn_click = (e) => { this.#closeMenu(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-navbar-4"]');
      if (el) {
        const fn_click = (e) => { e.preventDefault(); this.#goEcosystem(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-navbar-5"]');
      if (el) {
        const fn_click = (e) => { this.#switchLang(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-navbar-6"]');
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
/* Built with Chasket v0.2.2 — https://chasket.dev */

(() => {
"use strict";

class CskShell extends HTMLElement {
  static #__css = `[data-chasket-scope="csk-shell"] .shell{display:flex;flex-direction:column;min-height:100vh;}[data-chasket-scope="csk-shell"] .shell-main{flex:1;padding-top:3.75rem;}[data-chasket-scope="csk-shell"] .back-to-top{position:fixed;bottom:2rem;right:2rem;width:44px;height:44px;border-radius:50%;background:var(--c-primary, #6C5CE7);color:#fff;border:none;font-size:1.25rem;cursor:pointer;z-index:900;opacity:0;visibility:hidden;transition:opacity 0.3s ease, visibility 0.3s ease, background 0.2s ease;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0, 0, 0, 0.3);}[data-chasket-scope="csk-shell"] .back-to-top.visible{opacity:1;visibility:visible;}[data-chasket-scope="csk-shell"] .back-to-top:hover{background:var(--c-primary-light, #a29bfe);}@media (max-width:480px){[data-chasket-scope="csk-shell"] .back-to-top{bottom:1rem;right:1rem;width:40px;height:40px;font-size:1.1rem;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskShell.#__css); return s; } catch(e) { return null; } })();
  static #__sheetRefCount = 0;

  #_currentPage = "";
  get #currentPage() { return this.#_currentPage; }
  set #currentPage(v) { this.#_currentPage = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #__sheetAttached = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-shell');
    if (CskShell.#__sheet && !this.#__sheetAttached) {
      this.#__sheetAttached = true;
      if (CskShell.#__sheetRefCount++ === 0) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, CskShell.#__sheet];
      }
    }
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    window.addEventListener("hashchange", () => { this.#onHashChange() })
        window.addEventListener("scroll", () => { this.#updateBackToTop() })
        // back-to-top ボタンのクリックハンドラを直接バインド
        // （shadow: none の fl-0 ID 衝突を回避するため @click を使わない）
        const backBtn = document.querySelector('.back-to-top')
        if (backBtn) backBtn.addEventListener('click', () => { this.#scrollToTop() })
        // 初回ロード: ページバンドルをロードしてからレンダリング。
        // setTimeout(0) で定義キュー完了を待ち、その後バンドルロード。
        setTimeout(() => {
          const page = this.#getPage() || "home"
          this.#loadPageBundle(page).then(() => { this.#currentPage = page })
        }, 0)
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    if (CskShell.#__sheet && this.#__sheetAttached) {
      this.#__sheetAttached = false;
      if (--CskShell.#__sheetRefCount === 0) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== CskShell.#__sheet);
      }
    }
  }

  #loadPageBundle(page) {
    const bundleMap = {
          home: '/dist/page-home.js',
          why: '/dist/page-why.js',
          guide: '/dist/page-guide.js',
          api: '/dist/page-api.js',
          testing: '/dist/page-testing.js'
        }
        const src = bundleMap[page]
        if (!src) return Promise.resolve()
        // 既にロード済み（script タグが存在する）ならスキップ
        if (document.querySelector('script[src="' + src + '"]')) return Promise.resolve()
        return new Promise((resolve, reject) => {
          const script = document.createElement('script')
          script.src = src
          script.onload = resolve
          script.onerror = reject
          document.head.appendChild(script)
        })
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
        this.#loadPageBundle(next).then(() => {
          this.#currentPage = next
          if (changed) window.scrollTo(0, 0)
        })
  }

  #scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  #updateBackToTop() {
    const btn = document.querySelector('.back-to-top')
        if (!btn) return
        if (window.scrollY > 500) {
          btn.classList.add('visible')
        } else {
          btn.classList.remove('visible')
        }
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskShell.#__sheet ? '' : '<style>' + CskShell.#__css + '</style>'}
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
        <button class="back-to-top" aria-label="Back to top">
          ↑
        </button>
      </div>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskShell.#__sheet ? '' : '<style>' + CskShell.#__css + '</style>'}
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
        <button class="back-to-top" aria-label="Back to top">
          ↑
        </button>
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
          if (a.name === 'value' && (o.tagName === 'INPUT' || o.tagName === 'TEXTAREA' || o.tagName === 'SELECT')) {
            if (o.value !== a.value) o.value = a.value;
          } else if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
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
