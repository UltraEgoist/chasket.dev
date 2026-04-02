// Chasket Bundle - 2026-04-02T12:50:10.375Z
// 1 component(s)

// Deferred registration queue: all classes are defined first,
// then all customElements.define() calls happen at the end.
// This ensures nested components work regardless of file order.
var __chasketDefineQueue = [];

// ── csk-page-playground.csk ──
/* Built with Chasket v0.3.0 — https://chasket.dev */
(() => {
"use strict";

class CskPagePlayground extends HTMLElement {
  static #__css = `[data-chasket-scope="csk-page-playground"] .playground-page{min-height:calc(100vh - 3.75rem);background:var(--c-bg);color:var(--c-text);font-family:var(--font);padding:2rem 2rem 4rem;max-width:1100px;margin:0 auto;}[data-chasket-scope="csk-page-playground"] /* Badge */ .coming-badge{display:inline-block;padding:0.35rem 1rem;background:linear-gradient(135deg, #6C5CE7, #a29bfe);color:#fff;border-radius:20px;font-size:0.8rem;font-weight:600;letter-spacing:0.05em;margin-bottom:1.5rem;}[data-chasket-scope="csk-page-playground"] /* Mock Editor */ .mock-editor{position:relative;border:1px solid var(--c-border, #2a2a3e);border-radius:12px;overflow:hidden;background:var(--c-code-bg, #1a1a2e);}[data-chasket-scope="csk-page-playground"] .editor-toolbar{display:flex;justify-content:space-between;align-items:center;padding:0 1rem;height:42px;background:rgba(255,255,255,0.03);border-bottom:1px solid var(--c-border, #2a2a3e);}[data-chasket-scope="csk-page-playground"] .toolbar-left{display:flex;gap:0;}[data-chasket-scope="csk-page-playground"] .tab{padding:0.5rem 1rem;font-size:0.8rem;color:var(--c-text-muted, #888);cursor:default;}[data-chasket-scope="csk-page-playground"] .tab.active{color:var(--c-primary, #6C5CE7);border-bottom:2px solid var(--c-primary, #6C5CE7);}[data-chasket-scope="csk-page-playground"] .btn-mock{padding:0.3rem 0.8rem;font-size:0.75rem;border:1px solid var(--c-border, #2a2a3e);border-radius:6px;color:var(--c-text-muted, #888);cursor:default;}[data-chasket-scope="csk-page-playground"] .btn-mock.disabled{opacity:0.4;}[data-chasket-scope="csk-page-playground"] /* Panels */ .editor-panels{display:grid;grid-template-columns:1fr 1fr;min-height:340px;}[data-chasket-scope="csk-page-playground"] .panel{overflow:hidden;}[data-chasket-scope="csk-page-playground"] .panel-input{border-right:1px solid var(--c-border, #2a2a3e);}[data-chasket-scope="csk-page-playground"] .panel-header{padding:0.4rem 1rem;font-size:0.7rem;color:var(--c-text-muted, #888);background:rgba(255,255,255,0.02);border-bottom:1px solid rgba(255,255,255,0.04);}[data-chasket-scope="csk-page-playground"] .filename{font-family:var(--font-mono, monospace);}[data-chasket-scope="csk-page-playground"] .panel-code{margin:0;padding:1rem;font-size:0.8rem;line-height:1.6;font-family:var(--font-mono, monospace);color:var(--c-text-muted, #aaa);white-space:pre;overflow:hidden;}[data-chasket-scope="csk-page-playground"] /* Overlay */ .editor-overlay{position:absolute;inset:0;background:rgba(10, 10, 20, 0.75);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:10;}[data-chasket-scope="csk-page-playground"] .overlay-content{text-align:center;max-width:400px;padding:2rem;}[data-chasket-scope="csk-page-playground"] .overlay-icon{margin-bottom:1rem;color:var(--c-primary, #6C5CE7);}[data-chasket-scope="csk-page-playground"] .overlay-content h2{font-size:1.4rem;margin:0 0 0.75rem 0;color:#fff;}[data-chasket-scope="csk-page-playground"] .overlay-content p{font-size:0.95rem;color:rgba(255, 255, 255, 0.65);line-height:1.6;margin:0;}[data-chasket-scope="csk-page-playground"] /* Feature row */ .features-row{display:grid;grid-template-columns:repeat(4, 1fr);gap:1rem;margin-top:2rem;}[data-chasket-scope="csk-page-playground"] .feature-card{display:flex;gap:0.75rem;padding:1rem;background:var(--c-code-bg, #1a1a2e);border:1px solid var(--c-border, #2a2a3e);border-radius:10px;}[data-chasket-scope="csk-page-playground"] .feature-check{flex-shrink:0;width:28px;height:28px;border-radius:50%;background:rgba(108, 92, 231, 0.15);color:var(--c-primary, #6C5CE7);display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:700;}[data-chasket-scope="csk-page-playground"] .feature-text{display:flex;flex-direction:column;gap:0.2rem;}[data-chasket-scope="csk-page-playground"] .feature-text strong{font-size:0.85rem;}[data-chasket-scope="csk-page-playground"] .feature-text span{font-size:0.75rem;color:var(--c-text-muted, #888);line-height:1.4;}@media (max-width:768px){[data-chasket-scope="csk-page-playground"] .editor-panels{grid-template-columns:1fr;min-height:auto;}[data-chasket-scope="csk-page-playground"] .panel-input{border-right:none;border-bottom:1px solid var(--c-border, #2a2a3e);}[data-chasket-scope="csk-page-playground"] .features-row{grid-template-columns:1fr 1fr;}}@media (max-width:480px){[data-chasket-scope="csk-page-playground"] .playground-page{padding:1.5rem 1rem 3rem;}[data-chasket-scope="csk-page-playground"] .features-row{grid-template-columns:1fr;}[data-chasket-scope="csk-page-playground"] .editor-toolbar{padding:0 0.5rem;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskPagePlayground.#__css); return s; } catch(e) { return null; } })();
  static #__sheetRefCount = 0;

  #_mockCode = "&lt;meta&gt;\n  name: my-counter\n  shadow: open\n&lt;/meta&gt;\n\n&lt;script&gt;\n  state count: number = 0\n\n  fn increment(): void {\n    count = count + 1\n  }\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;button @click=\"increment\"&gt;\n    Count: {{ count }}\n  &lt;/button&gt;\n&lt;/template&gt;";
  get #mockCode() { return this.#_mockCode; }
  set #mockCode(v) { this.#_mockCode = v; this.#scheduleUpdate(); }
  #_mockOutput = "class MyCounter extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: 'open' });\n    this._count = 0;\n  }\n\n  increment() {\n    this._count = this._count + 1;\n    this._update();\n  }\n  ...\n}";
  get #mockOutput() { return this.#_mockOutput; }
  set #mockOutput(v) { this.#_mockOutput = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #__sheetAttached = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-playground');
    if (CskPagePlayground.#__sheet && !this.#__sheetAttached) {
      this.#__sheetAttached = true;
      if (CskPagePlayground.#__sheetRefCount++ === 0) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, CskPagePlayground.#__sheet];
      }
    }
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    if (CskPagePlayground.#__sheet && this.#__sheetAttached) {
      this.#__sheetAttached = false;
      if (--CskPagePlayground.#__sheetRefCount === 0) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== CskPagePlayground.#__sheet);
      }
    }
  }

  #tr(k) {
    return window.__t(k)
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskPagePlayground.#__sheet ? '' : '<style>' + CskPagePlayground.#__css + '</style>'}
      <div class="playground-page">
        <!-- Coming Soon badge -->
        <div class="coming-badge">
          ${this.#esc(this.#tr('playground.badge'))}
        </div>
        <!-- Mock editor UI -->
        <div class="mock-editor">
          <!-- Toolbar -->
          <div class="editor-toolbar">
            <div class="toolbar-left"><span class="tab active">.csk</span><span class="tab">${this.#esc(this.#tr('playground.tabs.output'))}</span><span class="tab">${this.#esc(this.#tr('playground.tabs.preview'))}</span></div>
            <div class="toolbar-right">
<span class="btn-mock disabled">${this.#esc(this.#tr('playground.share'))}</span>            </div>
          </div>
          <!-- Editor panels -->
          <div class="editor-panels">
            <div class="panel panel-input">
              <div class="panel-header">
<span class="filename">my-counter.csk</span>              </div>
              <pre class="panel-code"><code>${this.#mockCode}</code></pre>
            </div>
            <div class="panel panel-output">
              <div class="panel-header">
<span class="filename">${this.#esc(this.#tr('playground.compiledOutput'))}</span>              </div>
              <pre class="panel-code"><code>${this.#mockOutput}</code></pre>
            </div>
          </div>
          <!-- Overlay -->
          <div class="editor-overlay">
            <div class="overlay-content">
              <div class="overlay-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <polyline points="4 17 10 11 4 5">
                  </polyline>
                  <line x1="12" y1="19" x2="20" y2="19">
                  </line>
                </svg>
              </div>
              <h2>
                ${this.#esc(this.#tr('playground.overlayTitle'))}
              </h2>
              <p>
                ${this.#esc(this.#tr('playground.overlayDesc'))}
              </p>
            </div>
          </div>
        </div>
        <!-- Feature list -->
        <div class="features-row">
          <div class="feature-card">
            <div class="feature-check">
              1
            </div>
            <div class="feature-text"><strong>${this.#esc(this.#tr('playground.features.editor'))}</strong><span>${this.#esc(this.#tr('playground.features.editorDesc'))}</span></div>
          </div>
          <div class="feature-card">
            <div class="feature-check">
              2
            </div>
            <div class="feature-text"><strong>${this.#esc(this.#tr('playground.features.compile'))}</strong><span>${this.#esc(this.#tr('playground.features.compileDesc'))}</span></div>
          </div>
          <div class="feature-card">
            <div class="feature-check">
              3
            </div>
            <div class="feature-text"><strong>${this.#esc(this.#tr('playground.features.preview'))}</strong><span>${this.#esc(this.#tr('playground.features.previewDesc'))}</span></div>
          </div>
          <div class="feature-card">
            <div class="feature-check">
              4
            </div>
            <div class="feature-text"><strong>${this.#esc(this.#tr('playground.features.share'))}</strong><span>${this.#esc(this.#tr('playground.features.shareDesc'))}</span></div>
          </div>
        </div>
      </div>
    `;
    this.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskPagePlayground.#__sheet ? '' : '<style>' + CskPagePlayground.#__css + '</style>'}
      <div class="playground-page">
        <!-- Coming Soon badge -->
        <div class="coming-badge">
          ${this.#esc(this.#tr('playground.badge'))}
        </div>
        <!-- Mock editor UI -->
        <div class="mock-editor">
          <!-- Toolbar -->
          <div class="editor-toolbar">
            <div class="toolbar-left"><span class="tab active">.csk</span><span class="tab">${this.#esc(this.#tr('playground.tabs.output'))}</span><span class="tab">${this.#esc(this.#tr('playground.tabs.preview'))}</span></div>
            <div class="toolbar-right">
<span class="btn-mock disabled">${this.#esc(this.#tr('playground.share'))}</span>            </div>
          </div>
          <!-- Editor panels -->
          <div class="editor-panels">
            <div class="panel panel-input">
              <div class="panel-header">
<span class="filename">my-counter.csk</span>              </div>
              <pre class="panel-code"><code>${this.#mockCode}</code></pre>
            </div>
            <div class="panel panel-output">
              <div class="panel-header">
<span class="filename">${this.#esc(this.#tr('playground.compiledOutput'))}</span>              </div>
              <pre class="panel-code"><code>${this.#mockOutput}</code></pre>
            </div>
          </div>
          <!-- Overlay -->
          <div class="editor-overlay">
            <div class="overlay-content">
              <div class="overlay-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <polyline points="4 17 10 11 4 5">
                  </polyline>
                  <line x1="12" y1="19" x2="20" y2="19">
                  </line>
                </svg>
              </div>
              <h2>
                ${this.#esc(this.#tr('playground.overlayTitle'))}
              </h2>
              <p>
                ${this.#esc(this.#tr('playground.overlayDesc'))}
              </p>
            </div>
          </div>
        </div>
        <!-- Feature list -->
        <div class="features-row">
          <div class="feature-card">
            <div class="feature-check">
              1
            </div>
            <div class="feature-text"><strong>${this.#esc(this.#tr('playground.features.editor'))}</strong><span>${this.#esc(this.#tr('playground.features.editorDesc'))}</span></div>
          </div>
          <div class="feature-card">
            <div class="feature-check">
              2
            </div>
            <div class="feature-text"><strong>${this.#esc(this.#tr('playground.features.compile'))}</strong><span>${this.#esc(this.#tr('playground.features.compileDesc'))}</span></div>
          </div>
          <div class="feature-card">
            <div class="feature-check">
              3
            </div>
            <div class="feature-text"><strong>${this.#esc(this.#tr('playground.features.preview'))}</strong><span>${this.#esc(this.#tr('playground.features.previewDesc'))}</span></div>
          </div>
          <div class="feature-card">
            <div class="feature-check">
              4
            </div>
            <div class="feature-text"><strong>${this.#esc(this.#tr('playground.features.share'))}</strong><span>${this.#esc(this.#tr('playground.features.shareDesc'))}</span></div>
          </div>
        </div>
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
  __chasketClasses['csk-page-playground'] = CskPagePlayground;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-playground', CskPagePlayground]);
} else if (!customElements.get('csk-page-playground')) {
  customElements.define('csk-page-playground', CskPagePlayground);
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
