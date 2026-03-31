// Chasket Bundle - 2026-03-31T13:10:56.074Z
// 1 component(s)

// Deferred registration queue: all classes are defined first,
// then all customElements.define() calls happen at the end.
// This ensures nested components work regardless of file order.
var __chasketDefineQueue = [];

// ── csk-page-why.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskPageWhy extends HTMLElement {
  static #__css = `[data-chasket-scope="csk-page-why"] .why-page{max-width:var(--max-w, 70rem);margin:0 auto;padding:4rem var(--space-page, 1.5rem) 6rem;color:var(--c-text, #e4e4ed);}[data-chasket-scope="csk-page-why"] .why-hero{text-align:center;padding:3rem 0 4rem;}[data-chasket-scope="csk-page-why"] .why-hero h1{font-size:clamp(2rem, 4vw, 3rem);font-weight:800;line-height:1.2;letter-spacing:-0.03em;background:linear-gradient(135deg, #6C5CE7, #00B894);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0 0 1.25rem;}[data-chasket-scope="csk-page-why"] .why-hero-desc{font-size:clamp(1rem, 1.5vw, 1.2rem);color:var(--c-text-dim, #9898ab);max-width:40rem;margin:0 auto;line-height:1.7;}[data-chasket-scope="csk-page-why"] .why-demo{padding:2rem 0 3rem;}[data-chasket-scope="csk-page-why"] .why-demo-grid{display:flex;align-items:center;gap:1.5rem;justify-content:center;}[data-chasket-scope="csk-page-why"] .why-demo-card{background:var(--c-surface, #1a1a26);border:1px solid var(--c-border, #2a2a3a);border-radius:0.75rem;padding:1.5rem;flex:1;max-width:28rem;overflow-x:auto;}[data-chasket-scope="csk-page-why"] .why-demo-label{font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--c-text-dim, #9898ab);margin-bottom:0.75rem;}[data-chasket-scope="csk-page-why"] .why-demo-card pre{margin:0;font-size:0.8rem;line-height:1.6;}[data-chasket-scope="csk-page-why"] .why-demo-card code{font-family:var(--font-mono, 'JetBrains Mono', monospace);color:#dfe6e9;}[data-chasket-scope="csk-page-why"] /* Syntax Highlighting */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-why"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-why"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-why"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-why"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-why"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-why"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-why"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-why"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-why"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-why"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-why"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-why"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-why"] .why-demo-arrow{color:var(--c-text-dim, #9898ab);flex-shrink:0;}[data-chasket-scope="csk-page-why"] .why-sections{display:flex;flex-direction:column;gap:2rem;padding:2rem 0;}[data-chasket-scope="csk-page-why"] .why-card{background:var(--c-surface, #1a1a26);border:1px solid var(--c-border, #2a2a3a);border-radius:0.75rem;padding:2rem 2.5rem;transition:border-color 0.2s;}[data-chasket-scope="csk-page-why"] .why-card:hover{border-color:var(--c-primary, #6C5CE7);}[data-chasket-scope="csk-page-why"] .why-card-future{border-style:dashed;opacity:0.85;}[data-chasket-scope="csk-page-why"] .why-card-icon{margin-bottom:1rem;}[data-chasket-scope="csk-page-why"] .why-card h2{font-size:clamp(1.15rem, 1.8vw, 1.4rem);font-weight:700;margin:0 0 0.75rem;letter-spacing:-0.02em;}[data-chasket-scope="csk-page-why"] .why-card p{color:var(--c-text-dim, #9898ab);line-height:1.7;font-size:clamp(0.9rem, 1.1vw, 1rem);margin:0;}[data-chasket-scope="csk-page-why"] /* --- Comparison Section --- */ .why-comparison, [data-chasket-scope="csk-page-why"] .why-usecases{padding:3rem 0;}[data-chasket-scope="csk-page-why"] .why-section-title{font-size:clamp(1.5rem, 2.5vw, 2rem);font-weight:700;text-align:center;margin:0 0 0.75rem;letter-spacing:-0.02em;}[data-chasket-scope="csk-page-why"] .why-section-desc{text-align:center;color:var(--c-text-dim, #9898ab);font-size:clamp(0.9rem, 1.1vw, 1.05rem);max-width:35rem;margin:0 auto 2.5rem;line-height:1.6;}[data-chasket-scope="csk-page-why"] .why-compare-grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 18rem), 1fr));gap:1.5rem;}[data-chasket-scope="csk-page-why"] .why-compare-card{background:var(--c-surface, #1a1a26);border:1px solid var(--c-border, #2a2a3a);border-radius:0.75rem;padding:2rem;transition:border-color 0.2s;}[data-chasket-scope="csk-page-why"] .why-compare-card:hover{border-color:var(--c-primary, #6C5CE7);}[data-chasket-scope="csk-page-why"] .why-compare-num{font-size:2rem;font-weight:800;background:linear-gradient(135deg, #6C5CE7, #00B894);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:0.75rem;line-height:1;}[data-chasket-scope="csk-page-why"] .why-compare-card h3{font-size:clamp(1rem, 1.3vw, 1.15rem);font-weight:700;margin:0 0 0.75rem;}[data-chasket-scope="csk-page-why"] .why-compare-card p{color:var(--c-text-dim, #9898ab);line-height:1.7;font-size:clamp(0.85rem, 1vw, 0.95rem);margin:0;}[data-chasket-scope="csk-page-why"] /* --- Use Cases Section --- */ .why-usecase-grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 18rem), 1fr));gap:1.5rem;}[data-chasket-scope="csk-page-why"] .why-usecase-card{background:var(--c-surface, #1a1a26);border:1px solid var(--c-border, #2a2a3a);border-radius:0.75rem;padding:2rem;transition:border-color 0.2s;}[data-chasket-scope="csk-page-why"] .why-usecase-card:hover{border-color:var(--c-accent, #00B894);}[data-chasket-scope="csk-page-why"] .why-usecase-icon{width:3rem;height:3rem;border-radius:0.625rem;display:flex;align-items:center;justify-content:center;background:rgba(0,184,148,0.12);color:var(--c-accent-light, #55efc4);margin-bottom:1rem;}[data-chasket-scope="csk-page-why"] .why-usecase-card h3{font-size:clamp(1rem, 1.3vw, 1.15rem);font-weight:700;margin:0 0 0.75rem;}[data-chasket-scope="csk-page-why"] .why-usecase-card p{color:var(--c-text-dim, #9898ab);line-height:1.7;font-size:clamp(0.85rem, 1vw, 0.95rem);margin:0;}[data-chasket-scope="csk-page-why"] .why-cta{text-align:center;padding:4rem 0 2rem;}[data-chasket-scope="csk-page-why"] .why-cta h2{font-size:clamp(1.5rem, 2.5vw, 2rem);font-weight:700;margin:0 0 0.75rem;}[data-chasket-scope="csk-page-why"] .why-cta p{color:var(--c-text-dim, #9898ab);margin:0 0 2rem;font-size:clamp(0.95rem, 1.2vw, 1.1rem);}[data-chasket-scope="csk-page-why"] .why-cta-buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}[data-chasket-scope="csk-page-why"] .why-btn-primary{display:inline-flex;align-items:center;padding:0.75rem 2rem;background:linear-gradient(135deg, #6C5CE7, #00B894);color:#fff;border-radius:0.5rem;text-decoration:none;font-weight:600;font-size:1rem;transition:opacity 0.2s;}[data-chasket-scope="csk-page-why"] .why-btn-primary:hover{opacity:0.9;}[data-chasket-scope="csk-page-why"] .why-btn-secondary{display:inline-flex;align-items:center;padding:0.75rem 2rem;background:var(--c-surface, #1a1a26);color:var(--c-text, #e4e4ed);border:1px solid var(--c-border, #2a2a3a);border-radius:0.5rem;text-decoration:none;font-weight:600;font-size:1rem;transition:border-color 0.2s;}[data-chasket-scope="csk-page-why"] .why-btn-secondary:hover{border-color:var(--c-primary-light, #a29bfe);}[data-chasket-scope="csk-page-why"] .t{color:#7c8aff;}[data-chasket-scope="csk-page-why"] .a{color:#f8a5c2;}[data-chasket-scope="csk-page-why"] .s{color:#55efc4;}[data-chasket-scope="csk-page-why"] .k{color:#fd79a8;}[data-chasket-scope="csk-page-why"] .tp{color:#74b9ff;}[data-chasket-scope="csk-page-why"] .v{color:#dfe6e9;}[data-chasket-scope="csk-page-why"] .f{color:#ffeaa7;}[data-chasket-scope="csk-page-why"] .n{color:#fab1a0;}[data-chasket-scope="csk-page-why"] .i{color:#fdcb6e;}[data-chasket-scope="csk-page-why"] .cm{color:#636e72;}@media (max-width:48rem){[data-chasket-scope="csk-page-why"] .why-demo-grid{flex-direction:column;}[data-chasket-scope="csk-page-why"] .why-demo-card{max-width:100%;}[data-chasket-scope="csk-page-why"] .why-demo-arrow{transform:rotate(90deg);}[data-chasket-scope="csk-page-why"] .why-card{padding:1.5rem;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskPageWhy.#__css); return s; } catch(e) { return null; } })();
  static #__sheetRefCount = 0;

  #_codeExample = "&lt;<span class=t>meta</span>&gt;\n  <span class=a>name</span>: <span class=s>my-counter</span>\n&lt;/<span class=t>meta</span>&gt;\n\n&lt;<span class=t>script</span>&gt;\n  <span class=k>state</span> <span class=v>count</span>: <span class=tp>number</span> = <span class=n>0</span>\n  <span class=k>fn</span> <span class=f>increment</span>() { <span class=v>count</span>++ }\n&lt;/<span class=t>script</span>&gt;\n\n&lt;<span class=t>template</span>&gt;\n  &lt;<span class=t>button</span> <span class=a>@click</span>=<span class=s>\"increment\"</span>&gt;\n    <span class=i>{{ count }}</span>\n  &lt;/<span class=t>button</span>&gt;\n&lt;/<span class=t>template</span>&gt;";
  get #codeExample() { return this.#_codeExample; }
  set #codeExample(v) { this.#_codeExample = v; this.#scheduleUpdate(); }
  #_codeOutput = "<span class=k>class</span> <span class=f>MyCounter</span> <span class=k>extends</span> <span class=tp>HTMLElement</span> {\n  #<span class=v>count</span> = <span class=n>0</span>;\n  <span class=f>connectedCallback</span>() { <span class=cm>/* ... */</span> }\n  #<span class=f>increment</span>() { <span class=k>this</span>.#<span class=v>count</span>++; }\n}\n<span class=f>customElements</span>.<span class=f>define</span>(<span class=s>'my-counter'</span>, <span class=f>MyCounter</span>);";
  get #codeOutput() { return this.#_codeOutput; }
  set #codeOutput(v) { this.#_codeOutput = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #__sheetAttached = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-why');
    if (CskPageWhy.#__sheet && !this.#__sheetAttached) {
      this.#__sheetAttached = true;
      if (CskPageWhy.#__sheetRefCount++ === 0) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, CskPageWhy.#__sheet];
      }
    }
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    if (CskPageWhy.#__sheet && this.#__sheetAttached) {
      this.#__sheetAttached = false;
      if (--CskPageWhy.#__sheetRefCount === 0) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== CskPageWhy.#__sheet);
      }
    }
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskPageWhy.#__sheet ? '' : '<style>' + CskPageWhy.#__css + '</style>'}
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
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E17055" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6">
                </polyline>
                <polyline points="8 6 2 12 8 18">
                </polyline>
                <line x1="14" y1="4" x2="10" y2="20">
                </line>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section6Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section6Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#81ECEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2">
                </rect>
                <path d="M3 9h18">
                </path>
                <path d="M9 21V9">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section7Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section7Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FAB1A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section8Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section8Desc'))}
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
        <section class="why-comparison">
          <h2 class="why-section-title">
            ${this.#esc(this.#tr('why.comparisonTitle'))}
          </h2>
          <p class="why-section-desc">
            ${this.#esc(this.#tr('why.comparisonDesc'))}
          </p>
          <div class="why-compare-grid">
            <div class="why-compare-card">
              <div class="why-compare-num">
                01
              </div>
              <h3>
                ${this.#esc(this.#tr('why.compare1Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.compare1Desc'))}
              </p>
            </div>
            <div class="why-compare-card">
              <div class="why-compare-num">
                02
              </div>
              <h3>
                ${this.#esc(this.#tr('why.compare2Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.compare2Desc'))}
              </p>
            </div>
            <div class="why-compare-card">
              <div class="why-compare-num">
                03
              </div>
              <h3>
                ${this.#esc(this.#tr('why.compare3Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.compare3Desc'))}
              </p>
            </div>
          </div>
        </section>
        <section class="why-usecases">
          <h2 class="why-section-title">
            ${this.#esc(this.#tr('why.usecaseTitle'))}
          </h2>
          <p class="why-section-desc">
            ${this.#esc(this.#tr('why.usecaseDesc'))}
          </p>
          <div class="why-usecase-grid">
            <div class="why-usecase-card">
              <div class="why-usecase-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="7" height="7">
                  </rect>
                  <rect x="14" y="3" width="7" height="7">
                  </rect>
                  <rect x="14" y="14" width="7" height="7">
                  </rect>
                  <rect x="3" y="14" width="7" height="7">
                  </rect>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('why.usecase1Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.usecase1Desc'))}
              </p>
            </div>
            <div class="why-usecase-card">
              <div class="why-usecase-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10">
                  </circle>
                  <line x1="2" y1="12" x2="22" y2="12">
                  </line>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('why.usecase2Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.usecase2Desc'))}
              </p>
            </div>
            <div class="why-usecase-card">
              <div class="why-usecase-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 20V10">
                  </path>
                  <path d="M18 20V4">
                  </path>
                  <path d="M6 20v-4">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('why.usecase3Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.usecase3Desc'))}
              </p>
            </div>
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
      ${CskPageWhy.#__sheet ? '' : '<style>' + CskPageWhy.#__css + '</style>'}
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
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E17055" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6">
                </polyline>
                <polyline points="8 6 2 12 8 18">
                </polyline>
                <line x1="14" y1="4" x2="10" y2="20">
                </line>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section6Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section6Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#81ECEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2">
                </rect>
                <path d="M3 9h18">
                </path>
                <path d="M9 21V9">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section7Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section7Desc'))}
            </p>
          </div>
          <div class="why-card">
            <div class="why-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FAB1A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2">
                </path>
              </svg>
            </div>
            <h2>
              ${this.#esc(this.#tr('why.section8Title'))}
            </h2>
            <p>
              ${this.#esc(this.#tr('why.section8Desc'))}
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
        <section class="why-comparison">
          <h2 class="why-section-title">
            ${this.#esc(this.#tr('why.comparisonTitle'))}
          </h2>
          <p class="why-section-desc">
            ${this.#esc(this.#tr('why.comparisonDesc'))}
          </p>
          <div class="why-compare-grid">
            <div class="why-compare-card">
              <div class="why-compare-num">
                01
              </div>
              <h3>
                ${this.#esc(this.#tr('why.compare1Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.compare1Desc'))}
              </p>
            </div>
            <div class="why-compare-card">
              <div class="why-compare-num">
                02
              </div>
              <h3>
                ${this.#esc(this.#tr('why.compare2Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.compare2Desc'))}
              </p>
            </div>
            <div class="why-compare-card">
              <div class="why-compare-num">
                03
              </div>
              <h3>
                ${this.#esc(this.#tr('why.compare3Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.compare3Desc'))}
              </p>
            </div>
          </div>
        </section>
        <section class="why-usecases">
          <h2 class="why-section-title">
            ${this.#esc(this.#tr('why.usecaseTitle'))}
          </h2>
          <p class="why-section-desc">
            ${this.#esc(this.#tr('why.usecaseDesc'))}
          </p>
          <div class="why-usecase-grid">
            <div class="why-usecase-card">
              <div class="why-usecase-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="7" height="7">
                  </rect>
                  <rect x="14" y="3" width="7" height="7">
                  </rect>
                  <rect x="14" y="14" width="7" height="7">
                  </rect>
                  <rect x="3" y="14" width="7" height="7">
                  </rect>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('why.usecase1Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.usecase1Desc'))}
              </p>
            </div>
            <div class="why-usecase-card">
              <div class="why-usecase-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10">
                  </circle>
                  <line x1="2" y1="12" x2="22" y2="12">
                  </line>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('why.usecase2Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.usecase2Desc'))}
              </p>
            </div>
            <div class="why-usecase-card">
              <div class="why-usecase-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 20V10">
                  </path>
                  <path d="M18 20V4">
                  </path>
                  <path d="M6 20v-4">
                  </path>
                </svg>
              </div>
              <h3>
                ${this.#esc(this.#tr('why.usecase3Title'))}
              </h3>
              <p>
                ${this.#esc(this.#tr('why.usecase3Desc'))}
              </p>
            </div>
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
  __chasketClasses['csk-page-why'] = CskPageWhy;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-why', CskPageWhy]);
} else if (!customElements.get('csk-page-why')) {
  customElements.define('csk-page-why', CskPageWhy);
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
