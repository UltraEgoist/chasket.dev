// Chasket Bundle - 2026-03-31T13:10:56.050Z
// 7 component(s)

// Deferred registration queue: all classes are defined first,
// then all customElements.define() calls happen at the end.
// This ensures nested components work regardless of file order.
var __chasketDefineQueue = [];

// ── csk-api-cli.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
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
  __chasketClasses['csk-api-cli'] = CskApiCli;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-cli', CskApiCli]);
} else if (!customElements.get('csk-api-cli')) {
  customElements.define('csk-api-cli', CskApiCli);
}

})();

// ── csk-api-compiler.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskApiCompiler extends HTMLElement {
  #_code_compileBasic = "<span class=k>import</span> { compile } <span class=k>from</span> <span class=s>'@chasket/chasket'</span>\n\n<span class=k>const</span> source = <span class=s>`\n&lt;meta&gt;\n  name: my-component\n&lt;/meta&gt;\n&lt;script&gt;\n  state count: number = 0\n&lt;/script&gt;\n&lt;template&gt;\n  &lt;p&gt;{{ count }}&lt;/p&gt;\n&lt;/template&gt;\n`</span>\n\n<span class=k>const</span> result = <span class=f>compile</span>(source, <span class=s>'my-component.csk'</span>, {\n  target: <span class=s>'es2020'</span>\n})\n\n<span class=k>if</span> (result.success) {\n  console.<span class=f>log</span>(result.output)\n}";
  get #code_compileBasic() { return this.#_code_compileBasic; }
  set #code_compileBasic(v) { this.#_code_compileBasic = v; this.#scheduleUpdate(); }
  #_code_compileOptions = "<span class=k>const</span> options = {\n  target: <span class=s>'es2020'</span>,           <span class=cm>// &quot;es2020&quot; | &quot;es2021&quot; | &quot;esnext&quot;</span>\n  bundle: <span class=n>true</span>,               <span class=cm>// embed CSS in JS</span>\n  shadow: <span class=s>'open'</span>,             <span class=cm>// &quot;open&quot; | &quot;closed&quot; | &quot;none&quot;</span>\n  sourcemap: <span class=n>true</span>,            <span class=cm>// generate source maps</span>\n  minify: <span class=n>false</span>,              <span class=cm>// enable in production</span>\n  imports: {                  <span class=cm>// external import mapping</span>\n    <span class=s>'lodash'</span>: <span class=s>'./libs/lodash.js'</span>\n  }\n}";
  get #code_compileOptions() { return this.#_code_compileOptions; }
  set #code_compileOptions(v) { this.#_code_compileOptions = v; this.#scheduleUpdate(); }
  #_code_splitBlocks = "<span class=k>import</span> { splitBlocks } <span class=k>from</span> <span class=s>'@chasket/chasket'</span>\n\n<span class=k>const</span> source = <span class=s>`...csk file content...`</span>\n<span class=k>const</span> blocks = <span class=f>splitBlocks</span>(source)\n\nconsole.<span class=f>log</span>(blocks.meta)      <span class=cm>// meta block</span>\nconsole.<span class=f>log</span>(blocks.script)    <span class=cm>// script block</span>\nconsole.<span class=f>log</span>(blocks.template)  <span class=cm>// template block</span>\nconsole.<span class=f>log</span>(blocks.style)     <span class=cm>// style block</span>";
  get #code_splitBlocks() { return this.#_code_splitBlocks; }
  set #code_splitBlocks(v) { this.#_code_splitBlocks = v; this.#scheduleUpdate(); }
  #_code_parseTemplate = "<span class=k>import</span> { parseTemplateNodes } <span class=k>from</span> <span class=s>'@chasket/chasket'</span>\n\n<span class=k>const</span> html = <span class=s>`\n  &lt;div&gt;\n    &lt;p&gt;{{ name }}&lt;/p&gt;\n    &lt;button @click=&quot;handleClick&quot;&gt;Click&lt;/button&gt;\n  &lt;/div&gt;\n`</span>\n\n<span class=k>const</span> ast = <span class=f>parseTemplateNodes</span>(html)\nconsole.<span class=f>log</span>(ast)  <span class=cm>// node syntax tree</span>";
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
  __chasketClasses['csk-api-compiler'] = CskApiCompiler;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-compiler', CskApiCompiler]);
} else if (!customElements.get('csk-api-compiler')) {
  customElements.define('csk-api-compiler', CskApiCompiler);
}

})();

// ── csk-api-config.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskApiConfig extends HTMLElement {
  #_code_configBasic = "{\n  <span class=s>&quot;src&quot;</span>: <span class=s>&quot;src&quot;</span>,\n  <span class=s>&quot;outdir&quot;</span>: <span class=s>&quot;dist&quot;</span>,\n  <span class=s>&quot;target&quot;</span>: <span class=s>&quot;es2020&quot;</span>,\n  <span class=s>&quot;bundle&quot;</span>: <span class=n>true</span>,\n  <span class=s>&quot;shadow&quot;</span>: <span class=s>&quot;open&quot;</span>,\n  <span class=s>&quot;sourcemap&quot;</span>: <span class=n>true</span>,\n  <span class=s>&quot;minify&quot;</span>: <span class=n>true</span>\n}";
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
            <pre><code><span class=s>"shadow"</span>: <span class=s>"open"</span></code></pre>
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
            <pre><code><span class=s>"shadow"</span>: <span class=s>"open"</span></code></pre>
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
  __chasketClasses['csk-api-config'] = CskApiConfig;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-config', CskApiConfig]);
} else if (!customElements.get('csk-api-config')) {
  customElements.define('csk-api-config', CskApiConfig);
}

})();

// ── csk-api-diagnostics.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
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
  #_code_diagnostic_e0004 = "<span class=cm>// error: unknown identifier 'countr'</span>\n<span class=k>fn</span> <span class=f>increment</span>() {\n  countr++   <span class=cm>// typo</span>\n}\n\n<span class=cm>// fix: use declared variable</span>\n<span class=k>state</span> count: <span class=tp>number</span> = <span class=n>0</span>\n<span class=k>fn</span> <span class=f>increment</span>() {\n  count++\n}";
  get #code_diagnostic_e0004() { return this.#_code_diagnostic_e0004; }
  set #code_diagnostic_e0004(v) { this.#_code_diagnostic_e0004 = v; this.#scheduleUpdate(); }
  #_code_diagnostic_e0301 = "<span class=t>&lt;template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ userName }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>  <span class=cm>&lt;!-- error: userName not defined --&gt;</span>\n<span class=t>&lt;/template</span><span class=t>&gt;</span>\n\n<span class=cm>&lt;!-- fix: declare in script --&gt;</span>\n<span class=t>&lt;script</span><span class=t>&gt;</span>\n  <span class=k>state</span> userName: <span class=tp>string</span> = <span class=s>'Alice'</span>\n<span class=t>&lt;/script</span><span class=t>&gt;</span>\n<span class=t>&lt;template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ userName }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=t>&lt;/template</span><span class=t>&gt;</span>";
  get #code_diagnostic_e0301() { return this.#_code_diagnostic_e0301; }
  set #code_diagnostic_e0301(v) { this.#_code_diagnostic_e0301 = v; this.#scheduleUpdate(); }
  #_code_diagnostic_e0302 = "<span class=t>&lt;template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ count + 'px' }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>  <span class=cm>&lt;!-- error: number + string --&gt;</span>\n<span class=t>&lt;/template</span><span class=t>&gt;</span>\n\n<span class=cm>&lt;!-- fix: explicit conversion --&gt;</span>\n<span class=t>&lt;template</span><span class=t>&gt;</span>\n  <span class=t>&lt;p</span><span class=t>&gt;</span><span class=i>{{ count.toString() + 'px' }}</span><span class=t>&lt;/p</span><span class=t>&gt;</span>\n<span class=t>&lt;/template</span><span class=t>&gt;</span>";
  get #code_diagnostic_e0302() { return this.#_code_diagnostic_e0302; }
  set #code_diagnostic_e0302(v) { this.#_code_diagnostic_e0302 = v; this.#scheduleUpdate(); }
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
            <pre><code>${this.#code_diagnostic_e0004}</code></pre>
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
            <pre><code>${this.#code_diagnostic_e0301}</code></pre>
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
            <pre><code>${this.#code_diagnostic_e0302}</code></pre>
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
            <pre><code>${this.#code_diagnostic_e0004}</code></pre>
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
            <pre><code>${this.#code_diagnostic_e0301}</code></pre>
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
            <pre><code>${this.#code_diagnostic_e0302}</code></pre>
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
  __chasketClasses['csk-api-diagnostics'] = CskApiDiagnostics;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-diagnostics', CskApiDiagnostics]);
} else if (!customElements.get('csk-api-diagnostics')) {
  customElements.define('csk-api-diagnostics', CskApiDiagnostics);
}

})();

// ── csk-api-ecosystem.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskApiEcosystem extends HTMLElement {
  #_code_router = "<span class=k>import</span> { createRouter } <span class=k>from</span> <span class=s>'@chasket/chasket-router'</span>\n\n<span class=k>const</span> router = <span class=f>createRouter</span>([\n  { path: <span class=s>'/'</span>, component: Home },\n  { path: <span class=s>'/about'</span>, component: About },\n  { path: <span class=s>'/posts/:id'</span>, component: PostDetail }\n])\n\nrouter.<span class=f>push</span>(<span class=s>'/'</span>)      <span class=cm>// navigate</span>\n<span class=k>const</span> route = router.<span class=f>current</span>()  <span class=cm>// current route</span>";
  get #code_router() { return this.#_code_router; }
  set #code_router(v) { this.#_code_router = v; this.#scheduleUpdate(); }
  #_code_store = "<span class=k>import</span> { createStore } <span class=k>from</span> <span class=s>'@chasket/chasket-store'</span>\n\n<span class=k>const</span> store = <span class=f>createStore</span>({\n  <span class=k>state</span>: { count: <span class=n>0</span> },\n  actions: {\n    <span class=f>increment</span>(<span class=k>state</span>) { <span class=k>state</span>.count++ }\n  },\n  getters: {\n    doubled: (<span class=k>state</span>) => <span class=k>state</span>.count * <span class=n>2</span>\n  }\n})\n\nstore.<span class=f>commit</span>(<span class=s>'increment'</span>)\nconsole.<span class=f>log</span>(store.getters.doubled)";
  get #code_store() { return this.#_code_store; }
  set #code_store(v) { this.#_code_store = v; this.#scheduleUpdate(); }
  #_code_ssr = "<span class=k>import</span> { renderToString, renderPage } <span class=k>from</span> <span class=s>'@chasket/chasket-ssr'</span>\n\n<span class=cm>// render component to HTM</span>L string\n<span class=k>const</span> html = <span class=k>await</span> <span class=f>renderToString</span>(MyComponent, { prop1: <span class=s>'value'</span> })\n\n<span class=cm>// render full page (with hydration)</span>\n<span class=k>const</span> pageHtml = <span class=k>await</span> <span class=f>renderPage</span>(App, options)";
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
            @chasket/chasket-router —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-router</code></pre>
</div>
        </div>
        <div id="store" class="subsection">
          <h3>
            @chasket/chasket-store —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-store</code></pre>
</div>
        </div>
        <div id="ssr" class="subsection">
          <h3>
            @chasket/chasket-ssr —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-ssr</code></pre>
</div>
        </div>
        <div id="ui" class="subsection">
          <h3>
            @chasket/chasket-ui —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-ui</code></pre>
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/vite-plugin-chasket</code></pre>
</div>
        </div>
        <div id="lsp" class="subsection">
          <h3>
            @chasket/chasket-lsp —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-lsp</code></pre>
</div>
        </div>
        <div id="vscode" class="subsection">
          <h3>
            @chasket/chasket-vscode —
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
            @chasket/chasket-router —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-router</code></pre>
</div>
        </div>
        <div id="store" class="subsection">
          <h3>
            @chasket/chasket-store —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-store</code></pre>
</div>
        </div>
        <div id="ssr" class="subsection">
          <h3>
            @chasket/chasket-ssr —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-ssr</code></pre>
</div>
        </div>
        <div id="ui" class="subsection">
          <h3>
            @chasket/chasket-ui —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-ui</code></pre>
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/vite-plugin-chasket</code></pre>
</div>
        </div>
        <div id="lsp" class="subsection">
          <h3>
            @chasket/chasket-lsp —
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
          <div class="note"><strong>${this.#esc(this.#tr('apiContent.ecosystem.installation'))}:</strong><pre><code>npm install @chasket/chasket-lsp</code></pre>
</div>
        </div>
        <div id="vscode" class="subsection">
          <h3>
            @chasket/chasket-vscode —
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
  __chasketClasses['csk-api-ecosystem'] = CskApiEcosystem;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-ecosystem', CskApiEcosystem]);
} else if (!customElements.get('csk-api-ecosystem')) {
  customElements.define('csk-api-ecosystem', CskApiEcosystem);
}

})();

// ── csk-api-types.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
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
  __chasketClasses['csk-api-types'] = CskApiTypes;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-api-types', CskApiTypes]);
} else if (!customElements.get('csk-api-types')) {
  customElements.define('csk-api-types', CskApiTypes);
}

})();

// ── csk-page-api.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */

(() => {
"use strict";

class CskPageApi extends HTMLElement {
  static #__css = `[data-chasket-scope="csk-page-api"]:root{--c-bg:#0a0a0f;--c-text:#e4e4ed;--c-text-dim:#9898ab;--c-border:#2a2a3a;--c-bg-code:#0d0d14;--c-surface:#1a1a26;--c-primary:#6C5CE7;--c-primary-light:#a29bfe;--c-accent:#00B894;--c-accent-light:#55efc4;--font:Inter, Noto Sans JP, sans-serif;--mono:JetBrains Mono, monospace;--max-w:70rem;--space-page:1.5rem;}[data-chasket-scope="csk-page-api"] *{margin:0;padding:0;box-sizing:border-box;}[data-chasket-scope="csk-page-api"]{display:block;background:var(--c-bg);color:var(--c-text);font-family:var(--font);line-height:1.6;}[data-chasket-scope="csk-page-api"] .page-container{display:grid;grid-template-columns:280px 1fr;min-height:100vh;gap:0;}[data-chasket-scope="csk-page-api"] /* Sidebar */ .sidebar{background:var(--c-surface);border-right:1px solid var(--c-border);padding:var(--space-page);overflow-y:auto;position:sticky;top:0;height:100vh;transition:all 0.3s ease;}[data-chasket-scope="csk-page-api"] .sidebar-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;}[data-chasket-scope="csk-page-api"] .sidebar-header h2{font-size:1.1rem;color:var(--c-primary);font-weight:600;}[data-chasket-scope="csk-page-api"] .sidebar-toggle{display:none;background:transparent;border:none;color:var(--c-text);font-size:1.5rem;cursor:pointer;padding:0.25rem;transition:color 0.2s ease;}[data-chasket-scope="csk-page-api"] .sidebar-toggle:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .toggle-icon{display:block;}[data-chasket-scope="csk-page-api"] /* Table of Contents */ .toc{font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .toc ul{list-style:none;margin-left:0;}[data-chasket-scope="csk-page-api"] .toc ul ul{margin-left:1rem;margin-top:0.25rem;}[data-chasket-scope="csk-page-api"] .toc li{margin:0.5rem 0;}[data-chasket-scope="csk-page-api"] .toc a{color:var(--c-text-dim);text-decoration:none;transition:color 0.2s ease;display:block;padding:0.25rem 0;}[data-chasket-scope="csk-page-api"] .toc a:hover{color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .toc a:focus{outline:2px solid var(--c-primary);outline-offset:2px;}[data-chasket-scope="csk-page-api"] .toc a.active{color:var(--c-primary);background:rgba(108, 92, 231, 0.15);font-weight:600;border-radius:0.25rem;}[data-chasket-scope="csk-page-api"] /* Main Content */ .content{padding:var(--space-page);max-width:var(--max-w);overflow-y:auto;}[data-chasket-scope="csk-page-api"] .page-header{margin-bottom:3rem;padding-bottom:2rem;border-bottom:1px solid var(--c-border);}[data-chasket-scope="csk-page-api"] .page-header h1{font-size:2.5rem;font-weight:700;margin-bottom:0.5rem;color:var(--c-text);}[data-chasket-scope="csk-page-api"] .subtitle{font-size:1.1rem;color:var(--c-text-dim);font-weight:400;}[data-chasket-scope="csk-page-api"] /* Documentation Sections */ .doc-section{margin-bottom:3rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.8rem;font-weight:600;margin-bottom:1rem;color:var(--c-primary);padding-top:0.5rem;}[data-chasket-scope="csk-page-api"] .doc-section > p{margin-bottom:1.5rem;color:var(--c-text);font-size:1rem;}[data-chasket-scope="csk-page-api"] .subsection{margin:2rem 0;padding:0;}[data-chasket-scope="csk-page-api"] .subsection h3{font-size:1.3rem;font-weight:600;color:var(--c-accent);margin:1.5rem 0 0.75rem 0;padding-top:0.5rem;}[data-chasket-scope="csk-page-api"] .subsection h4{font-size:1rem;font-weight:600;color:var(--c-text);margin:1rem 0 0.5rem 0;}[data-chasket-scope="csk-page-api"] .subsection > p{margin:0.75rem 0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property{margin:1.25rem 0;padding:0;}[data-chasket-scope="csk-page-api"] .property h4{font-size:0.95rem;font-weight:600;color:var(--c-text);margin:0.75rem 0 0.5rem 0;}[data-chasket-scope="csk-page-api"] .property ul{list-style-position:inside;margin:0.5rem 0;padding-left:0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property ul li{margin:0.5rem 0;padding-left:0;}[data-chasket-scope="csk-page-api"] .property ol{list-style-position:inside;margin:0.5rem 0;padding-left:0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .property ol li{margin:0.5rem 0;padding-left:0;}[data-chasket-scope="csk-page-api"] .property p{margin:0.5rem 0;color:var(--c-text);font-size:0.95rem;}[data-chasket-scope="csk-page-api"] code{background:var(--c-bg-code);padding:0.2rem 0.4rem;border:1px solid var(--c-border);border-radius:0.25rem;color:var(--c-accent);word-break:break-word;}[data-chasket-scope="csk-page-api"] pre code{background:transparent;padding:0;color:#dfe6e9;}[data-chasket-scope="csk-page-api"] /* Syntax Highlighting — same palette as home */ pre code .t{color:#7c8aff;}[data-chasket-scope="csk-page-api"] pre code .a{color:#f8a5c2;}[data-chasket-scope="csk-page-api"] pre code .s{color:#55efc4;}[data-chasket-scope="csk-page-api"] pre code .k{color:#fd79a8;}[data-chasket-scope="csk-page-api"] pre code .tp{color:#74b9ff;}[data-chasket-scope="csk-page-api"] pre code .v{color:#dfe6e9;}[data-chasket-scope="csk-page-api"] pre code .f{color:#ffeaa7;}[data-chasket-scope="csk-page-api"] pre code .n{color:#fab1a0;}[data-chasket-scope="csk-page-api"] pre code .i{color:#fdcb6e;}[data-chasket-scope="csk-page-api"] pre code .c{color:#e17055;}[data-chasket-scope="csk-page-api"] pre code .d{color:#a29bfe;}[data-chasket-scope="csk-page-api"] pre code .cm{color:#636e72;}[data-chasket-scope="csk-page-api"] pre code .cs{color:#81ecec;}[data-chasket-scope="csk-page-api"] /* Table Styling */ .table-wrapper{overflow-x:auto;margin:1rem 0;border:1px solid var(--c-border);border-radius:0.5rem;}[data-chasket-scope="csk-page-api"] .api-table{width:100%;border-collapse:collapse;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .api-table thead{background:var(--c-surface);border-bottom:2px solid var(--c-border);}[data-chasket-scope="csk-page-api"] .api-table th{padding:0.75rem;text-align:left;font-weight:600;color:var(--c-primary);}[data-chasket-scope="csk-page-api"] .api-table td{padding:0.75rem;border-bottom:1px solid var(--c-border);color:var(--c-text);}[data-chasket-scope="csk-page-api"] .api-table tbody tr:hover{background:rgba(108, 92, 231, 0.05);}[data-chasket-scope="csk-page-api"] .api-table code{background:var(--c-bg-code);padding:0.2rem 0.4rem;}[data-chasket-scope="csk-page-api"] /* Notes and Warnings */ .note, [data-chasket-scope="csk-page-api"] .warning, [data-chasket-scope="csk-page-api"] .note-text{padding:1rem;border-radius:0.5rem;margin:1rem 0;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] .note{background:rgba(0, 184, 148, 0.1);border-left:3px solid var(--c-accent);color:var(--c-text);}[data-chasket-scope="csk-page-api"] .note strong{color:var(--c-accent);}[data-chasket-scope="csk-page-api"] .note ul, [data-chasket-scope="csk-page-api"] .note li{margin:0.5rem 0;padding-left:1.5rem;}[data-chasket-scope="csk-page-api"] .warning{background:rgba(255, 107, 107, 0.1);border-left:3px solid #ff6b6b;color:var(--c-text);}[data-chasket-scope="csk-page-api"] .warning strong{color:#ff6b6b;}[data-chasket-scope="csk-page-api"] .note-text{background:transparent;padding:0.5rem 0;margin:0.5rem 0;border-left:3px solid var(--c-primary);padding-left:0.75rem;color:var(--c-text-dim);font-size:0.9rem;font-style:italic;}[data-chasket-scope="csk-page-api"] .example-title{font-weight:600;color:var(--c-primary);margin-top:1rem;margin-bottom:0.5rem;font-size:0.9rem;}[data-chasket-scope="csk-page-api"] /* Footer */ .doc-footer{margin-top:4rem;padding-top:2rem;border-top:1px solid var(--c-border);text-align:center;color:var(--c-text-dim);font-size:0.85rem;}[data-chasket-scope="csk-page-api"] .doc-footer p{margin:0.5rem 0;}[data-chasket-scope="csk-page-api"] .footer-text{margin-top:0.75rem;font-style:italic;}[data-chasket-scope="csk-page-api"] /* Mobile sidebar helpers */ .sidebar-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.4);z-index:999;opacity:0;visibility:hidden;transition:opacity 0.3s, visibility 0.3s;pointer-events:none;}[data-chasket-scope="csk-page-api"] .sidebar-edge{display:none;}/* Responsive Design */ @media (max-width:1024px){[data-chasket-scope="csk-page-api"] .page-container{grid-template-columns:240px 1fr;}[data-chasket-scope="csk-page-api"] .sidebar{padding:1rem;}[data-chasket-scope="csk-page-api"] .content{padding:1.5rem;}}@media (max-width:768px){[data-chasket-scope="csk-page-api"] .page-container{grid-template-columns:1fr;}[data-chasket-scope="csk-page-api"] .sidebar{position:fixed;left:0;top:0;width:280px;height:100vh;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);z-index:1000;box-shadow:2px 0 8px rgba(0, 0, 0, 0.3);}[data-chasket-scope="csk-page-api"] .sidebar.open{transform:translateX(0);}[data-chasket-scope="csk-page-api"] .sidebar-toggle{display:flex;}[data-chasket-scope="csk-page-api"] .sidebar-overlay.visible{opacity:1;visibility:visible;pointer-events:auto;}[data-chasket-scope="csk-page-api"] .sidebar-edge{position:fixed;top:50%;left:0;transform:translateY(-50%);width:28px;height:64px;background:var(--c-surface);border:1px solid var(--c-border);border-left:none;border-radius:0 8px 8px 0;z-index:50;cursor:pointer;display:none;align-items:center;justify-content:center;color:var(--c-text-dim);font-size:1rem;transition:background 0.2s ease, color 0.2s ease;}[data-chasket-scope="csk-page-api"] .sidebar-edge:hover{background:var(--c-primary);color:#fff;}[data-chasket-scope="csk-page-api"] .sidebar-edge.visible{display:flex;}[data-chasket-scope="csk-page-api"] .content{padding:1rem;}[data-chasket-scope="csk-page-api"] .page-header h1{font-size:1.8rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.4rem;}[data-chasket-scope="csk-page-api"] .doc-section h3{font-size:1.1rem;}[data-chasket-scope="csk-page-api"] pre{padding:0.75rem;font-size:0.8rem;}[data-chasket-scope="csk-page-api"] code{font-size:0.8rem;}}@media (max-width:480px){[data-chasket-scope="csk-page-api"] .page-header h1{font-size:1.5rem;}[data-chasket-scope="csk-page-api"] .subtitle{font-size:0.95rem;}[data-chasket-scope="csk-page-api"] .doc-section h2{font-size:1.25rem;}[data-chasket-scope="csk-page-api"] .doc-section h3{font-size:1rem;}[data-chasket-scope="csk-page-api"] .content{padding:0.75rem;}[data-chasket-scope="csk-page-api"] pre{padding:0.5rem;font-size:0.75rem;}}[data-chasket-scope="csk-page-api"] /* Scrollbar Styling */:host::-webkit-scrollbar{width:8px;height:8px;}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-track{background:var(--c-bg);}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-thumb{background:var(--c-border);border-radius:4px;}[data-chasket-scope="csk-page-api"]::-webkit-scrollbar-thumb:hover{background:var(--c-text-dim);}[data-chasket-scope="csk-page-api"] /* Smooth Scrolling */ html{scroll-behavior:smooth;}[data-chasket-scope="csk-page-api"] /* Links */ a{color:var(--c-primary);text-decoration:none;transition:color 0.2s ease;}[data-chasket-scope="csk-page-api"] a:hover{color:var(--c-primary-light);text-decoration:underline;}[data-chasket-scope="csk-page-api"] /* Typography */ strong{font-weight:600;color:var(--c-text);}[data-chasket-scope="csk-page-api"] em{font-style:italic;color:var(--c-text-dim);}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskPageApi.#__css); return s; } catch(e) { return null; } })();
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
    this.setAttribute('data-chasket-scope', 'csk-page-api');
    if (CskPageApi.#__sheet && !this.#__sheetAttached) {
      this.#__sheetAttached = true;
      if (CskPageApi.#__sheetRefCount++ === 0) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, CskPageApi.#__sheet];
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
    if (CskPageApi.#__sheet && this.#__sheetAttached) {
      this.#__sheetAttached = false;
      if (--CskPageApi.#__sheetRefCount === 0) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== CskPageApi.#__sheet);
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
      ${CskPageApi.#__sheet ? '' : '<style>' + CskPageApi.#__css + '</style>'}
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('api.toc'))}
            </h2>
            <button data-chasket-id="fl-csk-page-api-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-csk-page-api-1" class="toc">
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
              <li><a href="#official-packages">${this.#esc(this.#tr('api.sections.officialPackages'))}</a><ul><li><a href="#router">@chasket/chasket-router</a></li><li><a href="#store">@chasket/chasket-store</a></li><li><a href="#ssr">@chasket/chasket-ssr</a></li><li><a href="#ui">@chasket/chasket-ui</a></li><li><a href="#vite">vite-plugin-chasket</a></li><li><a href="#lsp">@chasket/chasket-lsp</a></li><li><a href="#vscode">@chasket/chasket-vscode</a></li></ul></li>
              <li>
<a href="#compilation-output">${this.#esc(this.#tr('api.sections.compilationOutput'))}</a>              </li>
            </ul>
          </nav>
        </aside>
        <!-- Sidebar overlay (mobile) -->
        <div data-chasket-id="fl-csk-page-api-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-overlay ' + (this.#sidebarOpen ? 'visible' : '')))}">
        </div>
        <!-- Sidebar edge tab (mobile) -->
        <div data-chasket-id="fl-csk-page-api-3" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-edge ' + (this.#sidebarOpen ? '' : 'visible')))}">
<span>≡</span>        </div>
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
      ${CskPageApi.#__sheet ? '' : '<style>' + CskPageApi.#__css + '</style>'}
      <div class="page-container">
        <!-- Sidebar Navigation -->
        <aside class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar ' + (this.#sidebarOpen ? 'open' : 'closed')))}">
          <div class="sidebar-header">
            <h2>
              ${this.#esc(this.#tr('api.toc'))}
            </h2>
            <button data-chasket-id="fl-csk-page-api-0" class="sidebar-toggle">
<span class="toggle-icon">≡</span>            </button>
          </div>
          <nav data-chasket-id="fl-csk-page-api-1" class="toc">
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
              <li><a href="#official-packages">${this.#esc(this.#tr('api.sections.officialPackages'))}</a><ul><li><a href="#router">@chasket/chasket-router</a></li><li><a href="#store">@chasket/chasket-store</a></li><li><a href="#ssr">@chasket/chasket-ssr</a></li><li><a href="#ui">@chasket/chasket-ui</a></li><li><a href="#vite">vite-plugin-chasket</a></li><li><a href="#lsp">@chasket/chasket-lsp</a></li><li><a href="#vscode">@chasket/chasket-vscode</a></li></ul></li>
              <li>
<a href="#compilation-output">${this.#esc(this.#tr('api.sections.compilationOutput'))}</a>              </li>
            </ul>
          </nav>
        </aside>
        <!-- Sidebar overlay (mobile) -->
        <div data-chasket-id="fl-csk-page-api-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-overlay ' + (this.#sidebarOpen ? 'visible' : '')))}">
        </div>
        <!-- Sidebar edge tab (mobile) -->
        <div data-chasket-id="fl-csk-page-api-3" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))('sidebar-edge ' + (this.#sidebarOpen ? '' : 'visible')))}">
<span>≡</span>        </div>
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
      const el = this.querySelector('[data-chasket-id="fl-csk-page-api-0"]');
      if (el) {
        const fn_click = (e) => { this.#toggleSidebar(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-api-1"]');
      if (el) {
        const fn_click = (e) => { this.#handleTocClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-api-2"]');
      if (el) {
        const fn_click = (e) => { this.#handleOverlayClick(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.querySelector('[data-chasket-id="fl-csk-page-api-3"]');
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
  __chasketClasses['csk-page-api'] = CskPageApi;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-api', CskPageApi]);
} else if (!customElements.get('csk-page-api')) {
  customElements.define('csk-page-api', CskPageApi);
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
