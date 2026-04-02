// Chasket Bundle - 2026-04-02T12:50:10.363Z
// 6 component(s)

// Deferred registration queue: all classes are defined first,
// then all customElements.define() calls happen at the end.
// This ensures nested components work regardless of file order.
var __chasketDefineQueue = [];

// ── csk-page-testing.csk ──
/* Built with Chasket v0.3.0 — https://chasket.dev */


class CskPageTesting extends HTMLElement {
  static #__css = `[data-chasket-scope="csk-page-testing"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);line-height:1.6;}[data-chasket-scope="csk-page-testing"] .page-container{display:grid;grid-template-columns:280px 1fr;min-height:100vh;gap:0;}[data-chasket-scope="csk-page-testing"] /* Sidebar */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);overflow-y:auto;position:sticky;top:0;height:100vh;transition:all 0.3s ease;}[data-chasket-scope="csk-page-testing"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;}[data-chasket-scope="csk-page-testing"] .sidebar-header h2{font-size:1.1rem;color:var(--c-primary);font-weight:600;}[data-chasket-scope="csk-page-testing"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0.25rem;transition:color 0.2s ease;}[data-chasket-scope="csk-page-testing"] .sidebar-toggle:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-testing"] .toggle-icon{display:block;}[data-chasket-scope="csk-page-testing"] /* Table of Contents */ .toc{font-size:0.9rem;}[data-chasket-scope="csk-page-testing"] .toc ul{list-style:none;margin-left:0;}[data-chasket-scope="csk-page-testing"] .toc ul ul{margin-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-testing"] .toc li{margin:0.5rem 0;}[data-chasket-scope="csk-page-testing"] .toc a{color:var(--c-text-dim);text-decoration:none;transition:color 0.2s ease;display:block;padding:0.25rem 0;}[data-chasket-scope="csk-page-testing"] .toc a:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-testing"] .toc a:focus{outline:2px solid var(--c-primary);outline-offset:2px;}[data-chasket-scope="csk-page-testing"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;border-radius:0.25rem;}[data-chasket-scope="csk-page-testing"] /* Main Content */ .content{padding:var(--space-page);max-width:var(--max-w);overflow-y:auto;}[data-chasket-scope="csk-page-testing"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-testing"] .page-header h1{font-size:2.5rem;font-weight:700;margin:0 0 0.5rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);margin:0;}[data-chasket-scope="csk-page-testing"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;scroll-margin-top:2rem;}[data-chasket-scope="csk-page-testing"] .doc-section h2{font-size:1.8rem;font-weight:700;margin:0 0 1rem 0;color:var(--c-text);padding-bottom:0.5rem;border-bottom:2px solid var(--c-primary);}[data-chasket-scope="csk-page-testing"] .doc-section h3{font-size:1.3rem;font-weight:600;margin:1.5rem 0 0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .doc-section h4{font-size:1rem;font-weight:600;margin:1rem 0 0.5rem 0;color:var(--c-primary);font-family:var(--mono);}[data-chasket-scope="csk-page-testing"] .doc-section p{font-size:0.95rem;line-height:1.6;margin:0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .doc-section ul{margin:1rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-testing"] .doc-section li{margin:0.5rem 0;line-height:1.6;}[data-chasket-scope="csk-page-testing"] .subsection{margin:1.5rem 0;padding:0;}[data-chasket-scope="csk-page-testing"] .property{margin:1.5rem 0;padding:1rem;background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-primary);border-radius:0.375rem;}[data-chasket-scope="csk-page-testing"] .property h4{margin-top:0;}[data-chasket-scope="csk-page-testing"] .property p{margin:0.5rem 0;}[data-chasket-scope="csk-page-testing"] .property ul{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-testing"] .property li{margin:0.25rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-testing"] /* Code Blocks */ pre{background:var(--c-bg-code);border:1px solid var(--c-border);border-radius:0.5rem;padding:1rem;overflow-x:auto;margin:1rem 0;font-family:var(--mono);}[data-chasket-scope="csk-page-testing"] code{font-size:0.85rem;line-height:1.5;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-testing"] pre code{color:#dfe6e9;}[data-chasket-scope="csk-page-testing"] pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-testing"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-testing"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-testing"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-testing"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-testing"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-testing"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-testing"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-testing"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-testing"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-testing"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-testing"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-testing"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-testing"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-testing"] .warning, [data-chasket-scope="csk-page-testing"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-testing"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-testing"] .note ul, [data-chasket-scope="csk-page-testing"] .note li{margin:0.5rem 0;}[data-chasket-scope="csk-page-testing"] .note-text{background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-text-dim);color:var(--c-text-dim);}[data-chasket-scope="csk-page-testing"] .warning{background:rgba(253, 203, 110, 0.1);border-left:3px solid #fdcb6e;color:var(--c-text);}[data-chasket-scope="csk-page-testing"] .example-title{font-size:0.85rem;font-weight:600;color:var(--c-text-dim);margin:1rem 0 0.5rem 0;text-transform:uppercase;letter-spacing:0.05em;}[data-chasket-scope="csk-page-testing"] /* Mobile sidebar helpers */ .sidebar-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.4);z-index:999;opacity:0;visibility:hidden;transition:opacity 0.3s, visibility 0.3s;pointer-events:none;}[data-chasket-scope="csk-page-testing"] .sidebar-edge{display:none;}@media (max-width:1024px){[data-chasket-scope="csk-page-testing"] .page-container{grid-template-columns:240px 1fr;}[data-chasket-scope="csk-page-testing"] .sidebar{padding:1rem;}[data-chasket-scope="csk-page-testing"] .content{padding:1.5rem;}}@media (max-width:768px){[data-chasket-scope="csk-page-testing"] .page-container{grid-template-columns:1fr;}[data-chasket-scope="csk-page-testing"] .sidebar{position:fixed;left:0;top:0;width:280px;height:100vh;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);z-index:1000;box-shadow:2px 0 8px rgba(0, 0, 0, 0.3);}[data-chasket-scope="csk-page-testing"] .sidebar.open{transform:translateX(0);}[data-chasket-scope="csk-page-testing"] .sidebar-toggle{display:flex;}[data-chasket-scope="csk-page-testing"] .sidebar-overlay.visible{opacity:1;visibility:visible;pointer-events:auto;}[data-chasket-scope="csk-page-testing"] .sidebar-edge{position:fixed;top:50%;left:0;transform:translateY(-50%);width:28px;height:64px;background:var(--c-surface);border:1px solid var(--c-border);border-left:none;border-radius:0 8px 8px 0;z-index:50;cursor:pointer;display:none;align-items:center;justify-content:center;color:var(--c-text-dim);font-size:1rem;transition:background 0.2s ease, color 0.2s ease;}[data-chasket-scope="csk-page-testing"] .sidebar-edge:hover{background:var(--c-primary);color:#fff;}[data-chasket-scope="csk-page-testing"] .sidebar-edge.visible{display:flex;}[data-chasket-scope="csk-page-testing"] .content{padding:1rem;}[data-chasket-scope="csk-page-testing"] .page-header h1{font-size:1.8rem;}[data-chasket-scope="csk-page-testing"] .doc-section h2{font-size:1.4rem;}[data-chasket-scope="csk-page-testing"] .doc-section h3{font-size:1.1rem;}[data-chasket-scope="csk-page-testing"] pre{padding:0.75rem;font-size:0.8rem;}[data-chasket-scope="csk-page-testing"] code{font-size:0.8rem;}}@media (max-width:480px){[data-chasket-scope="csk-page-testing"] .page-header h1{font-size:1.5rem;}[data-chasket-scope="csk-page-testing"] .subtitle{font-size:0.95rem;}[data-chasket-scope="csk-page-testing"] .doc-section h2{font-size:1.25rem;}[data-chasket-scope="csk-page-testing"] .doc-section h3{font-size:1rem;}[data-chasket-scope="csk-page-testing"] .content{padding:0.75rem;}[data-chasket-scope="csk-page-testing"] pre{padding:0.5rem;font-size:0.75rem;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskPageTesting.#__css); return s; } catch(e) { return null; } })();
  static #__sheetRefCount = 0;

  #_sidebarOpen = false;
  get #sidebarOpen() { return this.#_sidebarOpen; }
  set #sidebarOpen(v) { this.#_sidebarOpen = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #__sheetAttached = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-testing');
    if (CskPageTesting.#__sheet && !this.#__sheetAttached) {
      this.#__sheetAttached = true;
      if (CskPageTesting.#__sheetRefCount++ === 0) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, CskPageTesting.#__sheet];
      }
    }
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
    if (window.innerWidth > 768) this.#sidebarOpen = true
    
        const sections = document.querySelectorAll('.doc-section[id]')
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.#updateActiveLink(entry.target.id)
            }
          }
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 })
        sections.forEach((s) => { observer.observe(s) })
    
        window.addEventListener('resize', () => {
          if (window.innerWidth > 768) this.#sidebarOpen = true
        })
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    if (CskPageTesting.#__sheet && this.#__sheetAttached) {
      this.#__sheetAttached = false;
      if (--CskPageTesting.#__sheetRefCount === 0) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== CskPageTesting.#__sheet);
      }
    }
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
          if (window.innerWidth <= 768) this.#sidebarOpen = false
        }
  }

  #handleOverlayClick() {
    this.#sidebarOpen = false
  }

  #handleEdgeClick() {
    this.#sidebarOpen = true
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
      ${CskPageTesting.#__sheet ? '' : '<style>' + CskPageTesting.#__css + '</style>'}
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('testing.toc'))}
            </h2>
            <button data-chasket-id="fl-csk-page-testing-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-csk-page-testing-1" class="toc">
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
        <!-- Sidebar overlay (mobile) -->
        <div data-chasket-id="fl-csk-page-testing-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-overlay ' + (this.#sidebarOpen ? 'visible' : '')))}">
        </div>
        <!-- Sidebar edge tab (mobile) -->
        <div data-chasket-id="fl-csk-page-testing-3" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-edge ' + (this.#sidebarOpen ? '' : 'visible')))}">
<span>≡</span>        </div>
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
      ${CskPageTesting.#__sheet ? '' : '<style>' + CskPageTesting.#__css + '</style>'}
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('testing.toc'))}
            </h2>
            <button data-chasket-id="fl-csk-page-testing-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-csk-page-testing-1" class="toc">
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
        <!-- Sidebar overlay (mobile) -->
        <div data-chasket-id="fl-csk-page-testing-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-overlay ' + (this.#sidebarOpen ? 'visible' : '')))}">
        </div>
        <!-- Sidebar edge tab (mobile) -->
        <div data-chasket-id="fl-csk-page-testing-3" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-edge ' + (this.#sidebarOpen ? '' : 'visible')))}">
<span>≡</span>        </div>
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
      const el = this.querySelector('[data-chasket-id="fl-csk-page-testing-0"]');
      if (el) {
        const fn_click = (e) => { this.#toggleSidebar(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-testing-1"]');
      if (el) {
        const fn_click = (e) => { this.#handleTocClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-testing-2"]');
      if (el) {
        const fn_click = (e) => { this.#handleOverlayClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-testing-3"]');
      if (el) {
        const fn_click = (e) => { this.#handleEdgeClick(e); this.#scheduleUpdate(); };
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


// ── csk-test-api.csk ──
/* Built with Chasket v0.3.0 — https://chasket.dev */
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

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- API Reference -->
      <section id="api-reference" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.api.title'))}
        </h2>
        <div class="subsection">
          <h3 id="api-suite">
            suite(name, setupFn)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.api.suiteDesc'))}
          </p>
          <div class="property">
            <h4>
              suite.run(opts?)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.api.suiteRunDesc'))}
            </p>
            <p>
<strong>${this.#esc(this.#tr('testContent.api.options'))}</strong>            </p>
            <ul>
              <li><code>filter</code> (string): ${this.#esc(this.#tr('testContent.api.filterOption'))}</li>
              <li><code>verbose</code> (boolean): ${this.#esc(this.#tr('testContent.api.verboseOption'))}</li>
            </ul>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.api.usageExample'))}
          </div>
          <pre><code>${this.#exampleAPI}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="api-test">
            test(name, fn) / xtest(name, fn)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.api.testDesc'))}
          </p>
          <p>
            ${this.#esc(this.#tr('testContent.api.testFuncDesc'))}
          </p>
        </div>
        <div class="subsection">
          <h3 id="api-lifecycle">
            beforeEach(fn) / afterEach(fn)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.api.lifecycleDesc'))}
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
          ${this.#esc(this.#tr('testContent.api.title'))}
        </h2>
        <div class="subsection">
          <h3 id="api-suite">
            suite(name, setupFn)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.api.suiteDesc'))}
          </p>
          <div class="property">
            <h4>
              suite.run(opts?)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.api.suiteRunDesc'))}
            </p>
            <p>
<strong>${this.#esc(this.#tr('testContent.api.options'))}</strong>            </p>
            <ul>
              <li><code>filter</code> (string): ${this.#esc(this.#tr('testContent.api.filterOption'))}</li>
              <li><code>verbose</code> (boolean): ${this.#esc(this.#tr('testContent.api.verboseOption'))}</li>
            </ul>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.api.usageExample'))}
          </div>
          <pre><code>${this.#exampleAPI}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="api-test">
            test(name, fn) / xtest(name, fn)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.api.testDesc'))}
          </p>
          <p>
            ${this.#esc(this.#tr('testContent.api.testFuncDesc'))}
          </p>
        </div>
        <div class="subsection">
          <h3 id="api-lifecycle">
            beforeEach(fn) / afterEach(fn)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.api.lifecycleDesc'))}
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
  __chasketClasses['csk-test-api'] = CskTestApi;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-api', CskTestApi]);
} else if (!customElements.get('csk-test-api')) {
  customElements.define('csk-test-api', CskTestApi);
}

})();

// ── csk-test-assertions.csk ──
/* Built with Chasket v0.3.0 — https://chasket.dev */
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

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Assertions -->
      <section id="assertions" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.assertions.title'))}
        </h2>
        <div class="subsection">
          <h3 id="assert-basic">
            ${this.#esc(this.#tr('testContent.assertions.basicTitle'))}
          </h3>
          <div class="property">
            <h4>
              assert(condition, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.assertDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              eq(actual, expected, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.eqDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              deepEq(actual, expected, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.deepEqDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              includes(str, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.includesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              notIncludes(str, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.notIncludesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              matches(str, regex, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.matchesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              throws(fn, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.throwsDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
          </div>
          <pre><code>${this.#exampleAssert}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-compile">
            ${this.#esc(this.#tr('testContent.assertions.compileTitle'))}
          </h3>
          <div class="property">
            <h4>
              compileSuccess(result, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.compileSuccessDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              compileFails(result, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.compileFailsDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              validJS(result, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.validJSDesc'))}
            </p>
          </div>
        </div>
        <div class="subsection">
          <h3 id="assert-output">
            ${this.#esc(this.#tr('testContent.assertions.outputTitle'))}
          </h3>
          <div class="property">
            <h4>
              outputIncludes(result, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.outputIncludesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              outputNotIncludes(result, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.outputNotIncludesDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
          </div>
          <pre><code>${this.#exampleOutput}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-template">
            ${this.#esc(this.#tr('testContent.assertions.templateTitle'))}
          </h3>
          <div class="property">
            <h4>
              getTemplate(result)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.getTemplateDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              templateIncludes(result, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.templateIncludesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              templateNotIncludes(result, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.templateNotIncludesDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
          </div>
          <pre><code>${this.#exampleTemplate}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-state">
            ${this.#esc(this.#tr('testContent.assertions.stateTitle'))}
          </h3>
          <div class="property">
            <h4>
              hasState(result, name, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasStateDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              hasWatch(result, deps, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasWatchDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              hasOnMount(result, bodySubstring, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasOnMountDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              hasOnUnmount(result, bodySubstring, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasOnUnmountDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              hasInterpolation(result, varName, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasInterpolationDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
          </div>
          <pre><code>${this.#exampleState}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-diag">
            ${this.#esc(this.#tr('testContent.assertions.diagTitle'))}
          </h3>
          <div class="property">
            <h4>
              hasDiag(result, code, level?, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasDiagDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              noDiag(result, code, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.noDiagDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              diagCount(result, level, expected, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.diagCountDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
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
          ${this.#esc(this.#tr('testContent.assertions.title'))}
        </h2>
        <div class="subsection">
          <h3 id="assert-basic">
            ${this.#esc(this.#tr('testContent.assertions.basicTitle'))}
          </h3>
          <div class="property">
            <h4>
              assert(condition, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.assertDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              eq(actual, expected, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.eqDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              deepEq(actual, expected, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.deepEqDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              includes(str, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.includesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              notIncludes(str, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.notIncludesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              matches(str, regex, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.matchesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              throws(fn, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.throwsDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
          </div>
          <pre><code>${this.#exampleAssert}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-compile">
            ${this.#esc(this.#tr('testContent.assertions.compileTitle'))}
          </h3>
          <div class="property">
            <h4>
              compileSuccess(result, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.compileSuccessDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              compileFails(result, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.compileFailsDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              validJS(result, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.validJSDesc'))}
            </p>
          </div>
        </div>
        <div class="subsection">
          <h3 id="assert-output">
            ${this.#esc(this.#tr('testContent.assertions.outputTitle'))}
          </h3>
          <div class="property">
            <h4>
              outputIncludes(result, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.outputIncludesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              outputNotIncludes(result, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.outputNotIncludesDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
          </div>
          <pre><code>${this.#exampleOutput}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-template">
            ${this.#esc(this.#tr('testContent.assertions.templateTitle'))}
          </h3>
          <div class="property">
            <h4>
              getTemplate(result)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.getTemplateDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              templateIncludes(result, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.templateIncludesDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              templateNotIncludes(result, sub, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.templateNotIncludesDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
          </div>
          <pre><code>${this.#exampleTemplate}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-state">
            ${this.#esc(this.#tr('testContent.assertions.stateTitle'))}
          </h3>
          <div class="property">
            <h4>
              hasState(result, name, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasStateDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              hasWatch(result, deps, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasWatchDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              hasOnMount(result, bodySubstring, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasOnMountDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              hasOnUnmount(result, bodySubstring, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasOnUnmountDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              hasInterpolation(result, varName, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasInterpolationDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
          </div>
          <pre><code>${this.#exampleState}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="assert-diag">
            ${this.#esc(this.#tr('testContent.assertions.diagTitle'))}
          </h3>
          <div class="property">
            <h4>
              hasDiag(result, code, level?, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.hasDiagDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              noDiag(result, code, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.noDiagDesc'))}
            </p>
          </div>
          <div class="property">
            <h4>
              diagCount(result, level, expected, msg)
            </h4>
            <p>
              ${this.#esc(this.#tr('testContent.assertions.diagCountDesc'))}
            </p>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.assertions.usageExample'))}
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
  __chasketClasses['csk-test-assertions'] = CskTestAssertions;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-assertions', CskTestAssertions]);
} else if (!customElements.get('csk-test-assertions')) {
  customElements.define('csk-test-assertions', CskTestAssertions);
}

})();

// ── csk-test-compile.csk ──
/* Built with Chasket v0.3.0 — https://chasket.dev */
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

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Compile Helpers -->
      <section id="compile-helpers" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.compile.title'))}
        </h2>
        <div class="subsection">
          <h3 id="compile-ok-fail">
            compileOk(src, fileName?, opts?) / compileFail(src, fileName?, opts?)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.compile.compileDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('testContent.compile.returnValue'))}
            </h4>
            <pre><code>{{
  success: boolean,
  output?: string,      // {{ tr('testContent.compile.generatedJS') }}
  diagnostics: Array    // ${this.#esc(this.#tr('testContent.compile.errorWarnInfo'))}
}}</code></pre>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.compile.usageExample'))}
          </div>
          <pre><code>${this.#exampleCompile}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="csk-helper">
            csk(opts)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.compile.cskHelperDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('testContent.compile.options'))}
            </h4>
            <ul>
              <li><code>name</code> (string, ${this.#esc(this.#tr('testContent.compile.nameOption'))})</li>
              <li><code>script</code> (string, ${this.#esc(this.#tr('testContent.compile.scriptOption'))})</li>
              <li><code>template</code> (string, ${this.#esc(this.#tr('testContent.compile.templateOption'))})</li>
              <li><code>style</code> (string, ${this.#esc(this.#tr('testContent.compile.styleOption'))})</li>
              <li><code>meta</code> (string, ${this.#esc(this.#tr('testContent.compile.metaOption'))})</li>
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
          ${this.#esc(this.#tr('testContent.compile.title'))}
        </h2>
        <div class="subsection">
          <h3 id="compile-ok-fail">
            compileOk(src, fileName?, opts?) / compileFail(src, fileName?, opts?)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.compile.compileDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('testContent.compile.returnValue'))}
            </h4>
            <pre><code>{{
  success: boolean,
  output?: string,      // {{ tr('testContent.compile.generatedJS') }}
  diagnostics: Array    // ${this.#esc(this.#tr('testContent.compile.errorWarnInfo'))}
}}</code></pre>
          </div>
          <div class="example-title">
            ${this.#esc(this.#tr('testContent.compile.usageExample'))}
          </div>
          <pre><code>${this.#exampleCompile}</code></pre>
        </div>
        <div class="subsection">
          <h3 id="csk-helper">
            csk(opts)
          </h3>
          <p>
            ${this.#esc(this.#tr('testContent.compile.cskHelperDesc'))}
          </p>
          <div class="property">
            <h4>
              ${this.#esc(this.#tr('testContent.compile.options'))}
            </h4>
            <ul>
              <li><code>name</code> (string, ${this.#esc(this.#tr('testContent.compile.nameOption'))})</li>
              <li><code>script</code> (string, ${this.#esc(this.#tr('testContent.compile.scriptOption'))})</li>
              <li><code>template</code> (string, ${this.#esc(this.#tr('testContent.compile.templateOption'))})</li>
              <li><code>style</code> (string, ${this.#esc(this.#tr('testContent.compile.styleOption'))})</li>
              <li><code>meta</code> (string, ${this.#esc(this.#tr('testContent.compile.metaOption'))})</li>
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
  __chasketClasses['csk-test-compile'] = CskTestCompile;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-compile', CskTestCompile]);
} else if (!customElements.get('csk-test-compile')) {
  customElements.define('csk-test-compile', CskTestCompile);
}

})();

// ── csk-test-example.csk ──
/* Built with Chasket v0.3.0 — https://chasket.dev */
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

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Full Example -->
      <section id="full-example" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.example.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('testContent.example.desc'))}
        </p>
        <div class="example-title">
          ${this.#esc(this.#tr('testContent.example.fullExampleTitle'))}
        </div>
        <pre><code>${this.#exampleFull}</code></pre>
        <p>
          ${this.#esc(this.#tr('testContent.example.thisTestVerifies'))}
        </p>
        <ul>
          <li>
            ${this.#esc(this.#tr('testContent.example.item1'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item2'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item3'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item4'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item5'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item6'))}
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
          ${this.#esc(this.#tr('testContent.example.title'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('testContent.example.desc'))}
        </p>
        <div class="example-title">
          ${this.#esc(this.#tr('testContent.example.fullExampleTitle'))}
        </div>
        <pre><code>${this.#exampleFull}</code></pre>
        <p>
          ${this.#esc(this.#tr('testContent.example.thisTestVerifies'))}
        </p>
        <ul>
          <li>
            ${this.#esc(this.#tr('testContent.example.item1'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item2'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item3'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item4'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item5'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.example.item6'))}
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
  __chasketClasses['csk-test-example'] = CskTestExample;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-example', CskTestExample]);
} else if (!customElements.get('csk-test-example')) {
  customElements.define('csk-test-example', CskTestExample);
}

})();

// ── csk-test-overview.csk ──
/* Built with Chasket v0.3.0 — https://chasket.dev */
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

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <!-- Overview -->
      <section id="overview" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.overview.exampleTitle'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('testContent.overview.desc1'))}
        </p>
        <p>
          ${this.#esc(this.#tr('testContent.overview.desc2'))}
        </p>
        <ul>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item1'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item2'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item3'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item4'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item5'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item6'))}
          </li>
        </ul>
        <div class="example-title">
          ${this.#esc(this.#tr('testContent.overview.exampleTitle'))}
        </div>
        <pre><code>${this.#exampleOverview}</code></pre>
      </section>
      <!-- Installation / Setup -->
      <section id="install" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.overview.setupTitle'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('testContent.overview.setupDesc'))}
        </p>
        <div class="property">
          <h4>
            ${this.#esc(this.#tr('testContent.overview.localDev'))}
          </h4>
          <p>
            ${this.#esc(this.#tr('testContent.overview.importDesc'))}
          </p>
          <pre><code><span class=k>const</span> <span class=i>{{ suite, compileOk, compileFail, csk }}</span> = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);</code></pre>
        </div>
        <p class="note-text">
          ${this.#esc(this.#tr('testContent.overview.autoDetect'))}
        </p>
        <div class="example-title">
          ${this.#esc(this.#tr('testContent.overview.setupExampleTitle'))}
        </div>
        <pre><code>${this.#exampleSetup}</code></pre>
      </section>
      <!-- Quick Start -->
      <section id="quickstart" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.overview.quickstartTitle'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('testContent.overview.quickstartDesc'))}
        </p>
        <div class="example-title">
          ${this.#esc(this.#tr('testContent.overview.basicUsageTitle'))}
        </div>
        <pre><code>${this.#exampleQuick}</code></pre>
        <p>
          ${this.#esc(this.#tr('testContent.overview.exampleInThisCase'))}
        </p>
        <ul>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item7'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item8'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item9'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item10'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item11'))}
          </li>
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
          ${this.#esc(this.#tr('testContent.overview.exampleTitle'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('testContent.overview.desc1'))}
        </p>
        <p>
          ${this.#esc(this.#tr('testContent.overview.desc2'))}
        </p>
        <ul>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item1'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item2'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item3'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item4'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item5'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item6'))}
          </li>
        </ul>
        <div class="example-title">
          ${this.#esc(this.#tr('testContent.overview.exampleTitle'))}
        </div>
        <pre><code>${this.#exampleOverview}</code></pre>
      </section>
      <!-- Installation / Setup -->
      <section id="install" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.overview.setupTitle'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('testContent.overview.setupDesc'))}
        </p>
        <div class="property">
          <h4>
            ${this.#esc(this.#tr('testContent.overview.localDev'))}
          </h4>
          <p>
            ${this.#esc(this.#tr('testContent.overview.importDesc'))}
          </p>
          <pre><code><span class=k>const</span> <span class=i>{{ suite, compileOk, compileFail, csk }}</span> = <span class=f>require</span>(<span class=s>'./lib/chasket-test'</span>);</code></pre>
        </div>
        <p class="note-text">
          ${this.#esc(this.#tr('testContent.overview.autoDetect'))}
        </p>
        <div class="example-title">
          ${this.#esc(this.#tr('testContent.overview.setupExampleTitle'))}
        </div>
        <pre><code>${this.#exampleSetup}</code></pre>
      </section>
      <!-- Quick Start -->
      <section id="quickstart" class="doc-section">
        <h2>
          ${this.#esc(this.#tr('testContent.overview.quickstartTitle'))}
        </h2>
        <p>
          ${this.#esc(this.#tr('testContent.overview.quickstartDesc'))}
        </p>
        <div class="example-title">
          ${this.#esc(this.#tr('testContent.overview.basicUsageTitle'))}
        </div>
        <pre><code>${this.#exampleQuick}</code></pre>
        <p>
          ${this.#esc(this.#tr('testContent.overview.exampleInThisCase'))}
        </p>
        <ul>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item7'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item8'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item9'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item10'))}
          </li>
          <li>
            ${this.#esc(this.#tr('testContent.overview.item11'))}
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
  __chasketClasses['csk-test-overview'] = CskTestOverview;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-test-overview', CskTestOverview]);
} else if (!customElements.get('csk-test-overview')) {
  customElements.define('csk-test-overview', CskTestOverview);
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
