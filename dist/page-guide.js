// Chasket Bundle - 2026-03-31T13:10:56.012Z
// 7 component(s)

// Deferred registration queue: all classes are defined first,
// then all customElements.define() calls happen at the end.
// This ensures nested components work regardless of file order.
var __chasketDefineQueue = [];

// ── csk-guide-communication.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
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
  __chasketClasses['csk-guide-communication'] = CskGuideCommunication;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-communication', CskGuideCommunication]);
} else if (!customElements.get('csk-guide-communication')) {
  customElements.define('csk-guide-communication', CskGuideCommunication);
}

})();

// ── csk-guide-file-structure.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskGuideFileStructure extends HTMLElement {
  #_code_fileStructure = "<span class=t>&lt;meta</span><span class=t>&gt;</span>\n  name: component-name\n  shadow: open\n<span class=t>&lt;/meta</span><span class=t>&gt;</span>\n\n<span class=t>&lt;script</span><span class=t>&gt;</span>\n  <span class=k>state</span> count: <span class=tp>number</span> = <span class=n>0</span>\n<span class=t>&lt;/script</span><span class=t>&gt;</span>\n\n<span class=t>&lt;template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ count }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=t>&lt;/template</span><span class=t>&gt;</span>\n\n<span class=t>&lt;style</span><span class=t>&gt;</span>\n  p { color: white; }\n<span class=t>&lt;/style</span><span class=t>&gt;</span>";
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
            <pre><code>shadow: open    <span class=cm>&lt;!-- Shadow DOM (open) --&gt;</span>
shadow: closed  <span class=cm>&lt;!-- Shadow DOM (closed) --&gt;</span>
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
            <pre><code>shadow: open    <span class=cm>&lt;!-- Shadow DOM (open) --&gt;</span>
shadow: closed  <span class=cm>&lt;!-- Shadow DOM (closed) --&gt;</span>
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
  __chasketClasses['csk-guide-file-structure'] = CskGuideFileStructure;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-file-structure', CskGuideFileStructure]);
} else if (!customElements.get('csk-guide-file-structure')) {
  customElements.define('csk-guide-file-structure', CskGuideFileStructure);
}

})();

// ── csk-guide-script.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
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
  __chasketClasses['csk-guide-script'] = CskGuideScript;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-script', CskGuideScript]);
} else if (!customElements.get('csk-guide-script')) {
  customElements.define('csk-guide-script', CskGuideScript);
}

})();

// ── csk-guide-security.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
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
  __chasketClasses['csk-guide-security'] = CskGuideSecurity;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-security', CskGuideSecurity]);
} else if (!customElements.get('csk-guide-security')) {
  customElements.define('csk-guide-security', CskGuideSecurity);
}

})();

// ── csk-guide-style.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
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
  __chasketClasses['csk-guide-style'] = CskGuideStyle;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-style', CskGuideStyle]);
} else if (!customElements.get('csk-guide-style')) {
  customElements.define('csk-guide-style', CskGuideStyle);
}

})();

// ── csk-guide-template.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
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
  #_code_conditional = "<span class=c>&lt;#if condition=\"isLoggedIn\"&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span>Welcome, <span class=i>{{ username }}</span>!<span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=c>&lt;:else-if condition=\"loading\"&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span>Loading...<span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=c>&lt;:else&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span>Please log <span class=k>in</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n&lt;/<span class=cm>#if&gt;</span>";
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
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.events.modifiersLabel'))}:</strong><ul><li><code>|prevent</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.prevent'))}</li><li><code>|stop</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.stop'))}</li><li><code>|enter</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.enter'))}</li><li><code>|esc</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.escape'))}</li></ul></div>
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
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.conditionals.syntaxLabel'))}:</strong><ul><li><code>&lt;#if condition="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s1'))}</li><li><code>&lt;:else-if condition="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s2'))}</li><li><code>&lt;:else&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s3'))}</li><li><code>&lt;/#if&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s4'))}</li></ul></div>
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
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.events.modifiersLabel'))}:</strong><ul><li><code>|prevent</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.prevent'))}</li><li><code>|stop</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.stop'))}</li><li><code>|enter</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.enter'))}</li><li><code>|esc</code> - ${this.#esc(this.#tr('guideContent.template.events.modifiers.escape'))}</li></ul></div>
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
          <div class="note"><strong>${this.#esc(this.#tr('guideContent.template.conditionals.syntaxLabel'))}:</strong><ul><li><code>&lt;#if condition="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s1'))}</li><li><code>&lt;:else-if condition="..."&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s2'))}</li><li><code>&lt;:else&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s3'))}</li><li><code>&lt;/#if&gt;</code> - ${this.#esc(this.#tr('guideContent.template.conditionals.syntax.s4'))}</li></ul></div>
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
  __chasketClasses['csk-guide-template'] = CskGuideTemplate;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-guide-template', CskGuideTemplate]);
} else if (!customElements.get('csk-guide-template')) {
  customElements.define('csk-guide-template', CskGuideTemplate);
}

})();

// ── csk-page-guide.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */

(() => {
"use strict";

class CskPageGuide extends HTMLElement {
  static #__css = `[data-chasket-scope="csk-page-guide"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);line-height:1.6;}[data-chasket-scope="csk-page-guide"] .page-container{display:grid;grid-template-columns:280px 1fr;min-height:100vh;gap:0;}[data-chasket-scope="csk-page-guide"] /* Sidebar */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);overflow-y:auto;position:sticky;top:0;height:100vh;transition:all 0.3s ease;}[data-chasket-scope="csk-page-guide"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;}[data-chasket-scope="csk-page-guide"] .sidebar-header h2{font-size:1.1rem;color:var(--c-primary);font-weight:600;}[data-chasket-scope="csk-page-guide"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0.25rem;transition:color 0.2s ease;}[data-chasket-scope="csk-page-guide"] .sidebar-toggle:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-guide"] .toggle-icon{display:block;}[data-chasket-scope="csk-page-guide"] /* Table of Contents */ .toc{font-size:0.9rem;}[data-chasket-scope="csk-page-guide"] .toc ul{list-style:none;margin-left:0;}[data-chasket-scope="csk-page-guide"] .toc ul ul{margin-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-guide"] .toc li{margin:0.5rem 0;}[data-chasket-scope="csk-page-guide"] .toc a{color:var(--c-text-dim);text-decoration:none;transition:color 0.2s ease;display:block;padding:0.25rem 0;}[data-chasket-scope="csk-page-guide"] .toc a:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-guide"] .toc a:focus{outline:2px solid var(--c-primary);outline-offset:2px;}[data-chasket-scope="csk-page-guide"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;border-radius:0.25rem;}[data-chasket-scope="csk-page-guide"] /* Main Content */ .content{padding:var(--space-page);max-width:var(--max-w);overflow-y:auto;}[data-chasket-scope="csk-page-guide"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:2.5rem;font-weight:700;margin:0 0 0.5rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);margin:0;}[data-chasket-scope="csk-page-guide"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;scroll-margin-top:2rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.8rem;font-weight:700;margin:0 0 1rem 0;color:var(--c-text);padding-bottom:0.5rem;border-bottom:2px solid var(--c-primary);}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1.3rem;font-weight:600;margin:1.5rem 0 0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .doc-section h4{font-size:1rem;font-weight:600;margin:1rem 0 0.5rem 0;color:var(--c-primary);font-family:var(--mono);}[data-chasket-scope="csk-page-guide"] .doc-section p{font-size:0.95rem;line-height:1.6;margin:0.75rem 0;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .subsection{margin:1.5rem 0;padding:0;}[data-chasket-scope="csk-page-guide"] .property{margin:1.5rem 0;padding:1rem;background:rgba(108, 92, 231, 0.05);border-left:3px solid var(--c-primary);border-radius:0.375rem;}[data-chasket-scope="csk-page-guide"] .property h4{margin-top:0;}[data-chasket-scope="csk-page-guide"] .property p{margin:0.5rem 0;}[data-chasket-scope="csk-page-guide"] /* Code Blocks */ pre{background:var(--c-bg-code);border:1px solid var(--c-border);border-radius:0.5rem;padding:1rem;overflow-x:auto;margin:1rem 0;font-family:var(--mono);}[data-chasket-scope="csk-page-guide"] code{font-size:0.85rem;line-height:1.5;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-guide"] pre code{color:#dfe6e9;}[data-chasket-scope="csk-page-guide"] /* Syntax Highlighting — same palette as home */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-guide"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-guide"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-guide"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-guide"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-guide"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-guide"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-guide"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-guide"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-guide"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-guide"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-guide"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-guide"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-guide"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-guide"] .warning, [data-chasket-scope="csk-page-guide"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-guide"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-guide"] .note ul, [data-chasket-scope="csk-page-guide"] .note li{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-guide"] .warning{background:rgba(255, 107, 107, 0.1);border-left:3px solid #ff6b6b;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] .warning strong{color:#ff6b6b;}[data-chasket-scope="csk-page-guide"] .note-text{background:transparent;padding:0.5rem 0;margin:0.5rem 0;border-left:3px solid var(--c-primary);padding-left:0.75rem;color:var(--c-text-dim);font-size:0.9rem;font-style:italic;}[data-chasket-scope="csk-page-guide"] .example-title{font-weight:600;color:var(--c-primary);margin-top:1rem;margin-bottom:0.5rem;font-size:0.9rem;}[data-chasket-scope="csk-page-guide"] /* Mobile sidebar helpers */ .sidebar-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.4);z-index:999;opacity:0;visibility:hidden;transition:opacity 0.3s, visibility 0.3s;pointer-events:none;}[data-chasket-scope="csk-page-guide"] .sidebar-edge{display:none;}/* Responsive Design */ @media (max-width:1024px){[data-chasket-scope="csk-page-guide"] .page-container{grid-template-columns:240px 1fr;}[data-chasket-scope="csk-page-guide"] .sidebar{padding:1rem;}[data-chasket-scope="csk-page-guide"] .content{padding:1.5rem;}}@media (max-width:768px){[data-chasket-scope="csk-page-guide"] .page-container{grid-template-columns:1fr;}[data-chasket-scope="csk-page-guide"] .sidebar{position:fixed;left:0;top:0;width:280px;height:100vh;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);z-index:1000;box-shadow:2px 0 8px rgba(0, 0, 0, 0.3);}[data-chasket-scope="csk-page-guide"] .sidebar.open{transform:translateX(0);}[data-chasket-scope="csk-page-guide"] .sidebar-toggle{display:flex;}[data-chasket-scope="csk-page-guide"] .sidebar-overlay.visible{opacity:1;visibility:visible;pointer-events:auto;}[data-chasket-scope="csk-page-guide"] .sidebar-edge{position:fixed;top:50%;left:0;transform:translateY(-50%);width:28px;height:64px;background:var(--c-surface);border:1px solid var(--c-border);border-left:none;border-radius:0 8px 8px 0;z-index:50;cursor:pointer;display:none;align-items:center;justify-content:center;color:var(--c-text-dim);font-size:1rem;transition:background 0.2s ease, color 0.2s ease;}[data-chasket-scope="csk-page-guide"] .sidebar-edge:hover{background:var(--c-primary);color:#fff;}[data-chasket-scope="csk-page-guide"] .sidebar-edge.visible{display:flex;}[data-chasket-scope="csk-page-guide"] .content{padding:1rem;}[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:1.8rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.4rem;}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1.1rem;}[data-chasket-scope="csk-page-guide"] pre{padding:0.75rem;font-size:0.8rem;}[data-chasket-scope="csk-page-guide"] code{font-size:0.8rem;}}@media (max-width:480px){[data-chasket-scope="csk-page-guide"] .page-header h1{font-size:1.5rem;}[data-chasket-scope="csk-page-guide"] .subtitle{font-size:0.95rem;}[data-chasket-scope="csk-page-guide"] .doc-section h2{font-size:1.25rem;}[data-chasket-scope="csk-page-guide"] .doc-section h3{font-size:1rem;}[data-chasket-scope="csk-page-guide"] .content{padding:0.75rem;}[data-chasket-scope="csk-page-guide"] pre{padding:0.5rem;font-size:0.75rem;}}[data-chasket-scope="csk-page-guide"] /* Scrollbar Styling */:host::-webkit-scrollbar{width:8px;height:8px;}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-track{background:var(--c-bg);}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-thumb{background:var(--c-border);border-radius:4px;}[data-chasket-scope="csk-page-guide"]::-webkit-scrollbar-thumb:hover{background:var(--c-text-dim);}[data-chasket-scope="csk-page-guide"] /* Smooth Scrolling */ html{scroll-behavior:smooth;}[data-chasket-scope="csk-page-guide"] /* Links */ a{color:var(--c-primary);text-decoration:none;transition:color 0.2s ease;}[data-chasket-scope="csk-page-guide"] a:hover{color:var(--c-primary-light);text-decoration:underline;}[data-chasket-scope="csk-page-guide"] /* Typography */ strong{font-weight:600;color:var(--c-text);}[data-chasket-scope="csk-page-guide"] em{font-style:italic;color:var(--c-text-dim);}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskPageGuide.#__css); return s; } catch(e) { return null; } })();
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
    this.setAttribute('data-chasket-scope', 'csk-page-guide');
    if (CskPageGuide.#__sheet && !this.#__sheetAttached) {
      this.#__sheetAttached = true;
      if (CskPageGuide.#__sheetRefCount++ === 0) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, CskPageGuide.#__sheet];
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
          if (window.innerWidth > 768) {
            this.#sidebarOpen = true
          }
        })
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    if (CskPageGuide.#__sheet && this.#__sheetAttached) {
      this.#__sheetAttached = false;
      if (--CskPageGuide.#__sheetRefCount === 0) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== CskPageGuide.#__sheet);
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
      ${CskPageGuide.#__sheet ? '' : '<style>' + CskPageGuide.#__css + '</style>'}
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('guide.toc'))}
            </h2>
            <button data-chasket-id="fl-csk-page-guide-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-csk-page-guide-1" class="toc">
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
        <!-- Sidebar overlay (mobile) -->
        <div data-chasket-id="fl-csk-page-guide-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-overlay ' + (this.#sidebarOpen ? 'visible' : '')))}">
        </div>
        <!-- Sidebar edge tab (mobile) -->
        <div data-chasket-id="fl-csk-page-guide-3" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-edge ' + (this.#sidebarOpen ? '' : 'visible')))}">
<span>≡</span>        </div>
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
      ${CskPageGuide.#__sheet ? '' : '<style>' + CskPageGuide.#__css + '</style>'}
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('guide.toc'))}
            </h2>
            <button data-chasket-id="fl-csk-page-guide-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-csk-page-guide-1" class="toc">
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
        <!-- Sidebar overlay (mobile) -->
        <div data-chasket-id="fl-csk-page-guide-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-overlay ' + (this.#sidebarOpen ? 'visible' : '')))}">
        </div>
        <!-- Sidebar edge tab (mobile) -->
        <div data-chasket-id="fl-csk-page-guide-3" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-edge ' + (this.#sidebarOpen ? '' : 'visible')))}">
<span>≡</span>        </div>
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
      const el = this.querySelector('[data-chasket-id="fl-csk-page-guide-0"]');
      if (el) {
        const fn_click = (e) => { this.#toggleSidebar(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-guide-1"]');
      if (el) {
        const fn_click = (e) => { this.#handleTocClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-guide-2"]');
      if (el) {
        const fn_click = (e) => { this.#handleOverlayClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-guide-3"]');
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
  __chasketClasses['csk-page-guide'] = CskPageGuide;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-guide', CskPageGuide]);
} else if (!customElements.get('csk-page-guide')) {
  customElements.define('csk-page-guide', CskPageGuide);
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
