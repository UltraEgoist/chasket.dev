// Chasket Bundle - 2026-03-31T13:10:55.983Z
// 8 component(s)

// Deferred registration queue: all classes are defined first,
// then all customElements.define() calls happen at the end.
// This ensures nested components work regardless of file order.
var __chasketDefineQueue = [];

// ── csk-code-demo.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskCodeDemo extends HTMLElement {
  static #__css = `:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.header{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.header h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.header p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.tabs{display:flex;gap:0.25rem;background:var(--c-surface, #1a1a26);border-radius:0.625rem 0.625rem 0 0;padding:0.375rem 0.375rem 0;border:1px solid var(--c-border, #2a2a3a);border-bottom:none;width:fit-content;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;}.tab{padding:0.5rem 1.25rem;border:none;background:none;cursor:pointer;color:var(--c-text-dim, #9898ab);font-size:clamp(0.75rem, 0.95vw, 0.85rem);font-weight:500;border-radius:0.5rem 0.5rem 0 0;transition:0.2s;font-family:inherit;white-space:nowrap;min-height:2.5rem;}.tab.active{background:var(--c-bg-code, #0d0d14);color:#fff;}.tab:hover:not(.active){color:var(--c-text, #e4e4ed);}.panels{border:1px solid var(--c-border, #2a2a3a);border-radius:0 var(--radius, 0.75rem) var(--radius, 0.75rem) var(--radius, 0.75rem);overflow:hidden;background:var(--c-bg-code, #0d0d14);}.layout{display:grid;grid-template-columns:1fr clamp(14rem, 25%, 18.75rem);}.code{overflow-x:auto;-webkit-overflow-scrolling:touch;}.file{padding:0.625rem 1.25rem;border-bottom:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.7rem, 0.85vw, 0.8rem);color:var(--c-text-dim, #9898ab);font-family:var(--mono, monospace);}pre{margin:0;padding:1.25rem;font-family:var(--mono, 'JetBrains Mono', monospace);font-size:clamp(0.7rem, 0.85vw, 0.82rem);line-height:1.7;color:#c8c8d8;white-space:pre;overflow-x:auto;-webkit-overflow-scrolling:touch;}code{font-family:inherit;font-size:inherit;}.t{color:#7c8aff;}.a{color:#f8a5c2;}.s{color:#55efc4;}.k{color:#fd79a8;}.tp{color:#74b9ff;}.v{color:#dfe6e9;}.f{color:#ffeaa7;}.n{color:#fab1a0;}.i{color:#fdcb6e;}.c{color:#e17055;}.d{color:#a29bfe;}.cs{color:#81ecec;}.preview{border-left:1px solid var(--c-border, #2a2a3a);display:flex;flex-direction:column;}.preview-label{padding:0.625rem 1.25rem;border-bottom:1px solid var(--c-border, #2a2a3a);font-size:clamp(0.7rem, 0.85vw, 0.8rem);color:var(--c-text-dim, #9898ab);font-weight:500;}.preview-body{flex:1;display:flex;align-items:center;justify-content:center;padding:clamp(1rem, 2.5vw, 2rem) 1.25rem;background:#fff;color:#1a1a2e;font-family:system-ui, sans-serif;}.demo-counter{display:flex;gap:0.75rem;align-items:center;}.dcount{font-size:1.5rem;font-weight:700;min-width:2ch;text-align:center;}.dbtn{min-width:2.75rem;min-height:2.75rem;border-radius:0.5rem;border:1px solid #d1d5db;background:#f9fafb;cursor:pointer;font-size:0.875rem;font-weight:600;display:flex;align-items:center;justify-content:center;transition:background 0.15s;padding:0 0.5rem;font-family:inherit;}.dbtn:hover{background:#f3f4f6;}.demo-todo{width:100%;}.demo-row{display:flex;gap:0.5rem;margin-bottom:0.75rem;}.dinput{flex:1;padding:0.625rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.875rem;font-family:inherit;outline:none;min-width:0;min-height:2.75rem;}.dinput:focus{border-color:#6C5CE7;}.dlist{list-style:none;padding:0;margin:0;}.ditem{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid #f3f4f6;font-size:0.875rem;}.dremove{background:none;border:none;color:#ef4444;cursor:pointer;font-size:0.875rem;padding:0.25rem 0.5rem;min-width:2rem;min-height:2rem;}.dempty{color:#9ca3af;font-size:0.875rem;padding:0.5rem 0;list-style:none;}.demo-user{text-align:center;}.davatar{width:3.5rem;height:3.5rem;border-radius:50%;background:linear-gradient(135deg, #6C5CE7, #00B894);margin:0 auto 0.75rem;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.25rem;}.dname{margin:0 0 0.25rem;font-size:1rem;font-weight:600;color:#1a1a2e;}.demail{margin:0;font-size:0.875rem;color:#6b7280;}@media (max-width:48rem){.layout{grid-template-columns:1fr;}.preview{border-left:none;border-top:1px solid var(--c-border, #2a2a3a);}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskCodeDemo.#__css); return s; } catch(e) { return null; } })();

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
    if (CskCodeDemo.#__sheet) this.#shadow.adoptedStyleSheets = [CskCodeDemo.#__sheet];
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
        this.#todoItems = [...this.#todoItems, this.#todoText.trim()]
        this.#todoText = ""
  }

  #removeTodo(index) {
    this.#todoItems = this.#todoItems.filter((_, i) => i !== index)
  }

  #cleanPre() {
    // 同期的に実行してCLSを回避する（rAF内だと描画後のシフトが発生する）
        queueMicrotask(() => {
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
      ${CskCodeDemo.#__sheet ? '' : '<style>' + CskCodeDemo.#__css + '</style>'}
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
            <button data-chasket-id="fl-csk-code-demo-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'counter' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.counter'))}
            </button>
            <button data-chasket-id="fl-csk-code-demo-1" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'todo' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.todo'))}
            </button>
            <button data-chasket-id="fl-csk-code-demo-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'fetch' ? 'tab active' : 'tab'))}">
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
                    <div class="demo-counter"><button data-chasket-id="fl-csk-code-demo-3" class="dbtn">-</button><span class="dcount">${this.#esc(this.#demoCount)}</span><button data-chasket-id="fl-csk-code-demo-4" class="dbtn">+</button></div>
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
                        <input data-chasket-id="fl-csk-code-demo-5" class="dinput" value="${this.#escAttr(this.#todoText)}" placeholder="${this.#escAttr(this.#tr('codeDemo.todoPlaceholder'))}" />
                        <button data-chasket-id="fl-csk-code-demo-6" class="dbtn">
                          ${this.#esc(this.#tr('codeDemo.todoAdd'))}
                        </button>
                      </div>
                      <ul class="dlist">
                        ${this.#todoItems.length > 0 ? this.#todoItems.map((item, index) => `
                          <li class="ditem"><span>${this.#esc(item)}</span><button data-chasket-id="fl-csk-code-demo-7-${index}" class="dremove">x</button></li>
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
      ${CskCodeDemo.#__sheet ? '' : '<style>' + CskCodeDemo.#__css + '</style>'}
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
            <button data-chasket-id="fl-csk-code-demo-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'counter' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.counter'))}
            </button>
            <button data-chasket-id="fl-csk-code-demo-1" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'todo' ? 'tab active' : 'tab'))}">
              ${this.#esc(this.#tr('codeDemo.tabs.todo'))}
            </button>
            <button data-chasket-id="fl-csk-code-demo-2" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#activeTab === 'fetch' ? 'tab active' : 'tab'))}">
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
                    <div class="demo-counter"><button data-chasket-id="fl-csk-code-demo-3" class="dbtn">-</button><span class="dcount">${this.#esc(this.#demoCount)}</span><button data-chasket-id="fl-csk-code-demo-4" class="dbtn">+</button></div>
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
                        <input data-chasket-id="fl-csk-code-demo-5" class="dinput" value="${this.#escAttr(this.#todoText)}" placeholder="${this.#escAttr(this.#tr('codeDemo.todoPlaceholder'))}" />
                        <button data-chasket-id="fl-csk-code-demo-6" class="dbtn">
                          ${this.#esc(this.#tr('codeDemo.todoAdd'))}
                        </button>
                      </div>
                      <ul class="dlist">
                        ${this.#todoItems.length > 0 ? this.#todoItems.map((item, index) => `
                          <li class="ditem"><span>${this.#esc(item)}</span><button data-chasket-id="fl-csk-code-demo-7-${index}" class="dremove">x</button></li>
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
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-code-demo-0"]');
      if (el) {
        const fn_click = (e) => { this.#setCounter(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-code-demo-1"]');
      if (el) {
        const fn_click = (e) => { this.#setTodo(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-code-demo-2"]');
      if (el) {
        const fn_click = (e) => { this.#setFetch(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-code-demo-3"]');
      if (el) {
        const fn_click = (e) => { this.#dec(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-code-demo-4"]');
      if (el) {
        const fn_click = (e) => { this.#inc(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    {
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-code-demo-5"]');
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
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-code-demo-6"]');
      if (el) {
        const fn_click = (e) => { this.#addTodo(e); this.#scheduleUpdate(); };
        el.addEventListener('click', fn_click);
        this.#listeners.push([el, 'click', fn_click]);
      }
    }
    // Loop event binding: fl-csk-code-demo-7
    this.#shadow.querySelectorAll('[data-chasket-id^="fl-csk-code-demo-7-"]').forEach(el => {
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
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskComparison extends HTMLElement {
  static #__css = `:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:var(--radius-lg, 1rem);background:linear-gradient(90deg, var(--c-bg-card, #12121a) 30%, transparent), linear-gradient(90deg, transparent, var(--c-bg-card, #12121a) 70%) 100% 0, linear-gradient(90deg, rgba(0,0,0,0.2), transparent 15px), linear-gradient(90deg, transparent, rgba(0,0,0,0.2)) 100% 0;background-repeat:no-repeat;background-size:2rem 100%, 2rem 100%, 1rem 100%, 1rem 100%;background-attachment:local, local, scroll, scroll;}table{width:100%;border-collapse:collapse;font-size:clamp(0.75rem, 0.95vw, 0.88rem);background:var(--c-bg-card, #12121a);border-radius:var(--radius-lg, 1rem);overflow:hidden;border:1px solid var(--c-border, #2a2a3a);min-width:36rem;}th, td{padding:clamp(0.625rem, 1.2vw, 0.875rem) clamp(0.75rem, 1.5vw, 1.25rem);text-align:center;border-bottom:1px solid var(--c-border, #2a2a3a);}th{font-weight:600;color:var(--c-text-dim, #9898ab);font-size:clamp(0.7rem, 0.85vw, 0.82rem);text-transform:uppercase;letter-spacing:0.04em;}.label{text-align:left;font-weight:500;color:var(--c-text, #e4e4ed);white-space:nowrap;}tbody tr:last-child td{border-bottom:none;}tbody tr:hover{background:rgba(108,92,231,0.04);}.hl{background:rgba(108,92,231,0.08);color:var(--c-primary-light, #a29bfe);}thead .hl{font-size:clamp(0.75rem, 0.95vw, 0.88rem);}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskComparison.#__css); return s; } catch(e) { return null; } })();

  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    if (CskComparison.#__sheet) this.#shadow.adoptedStyleSheets = [CskComparison.#__sheet];
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
      ${CskComparison.#__sheet ? '' : '<style>' + CskComparison.#__css + '</style>'}
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
      ${CskComparison.#__sheet ? '' : '<style>' + CskComparison.#__css + '</style>'}
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
  __chasketClasses['csk-comparison'] = CskComparison;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-comparison', CskComparison]);
} else if (!customElements.get('csk-comparison')) {
  customElements.define('csk-comparison', CskComparison);
}

})();

// ── csk-cta.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskCta extends HTMLElement {
  static #__css = `:host{display:block;}.cta{padding:var(--space-section, 5rem) 0 clamp(3rem, 6vw, 5rem);text-align:center;background:linear-gradient(180deg, transparent 0%, rgba(108,92,231,0.06) 100%);}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);word-break:keep-all;overflow-wrap:break-word;}p{color:var(--c-text-dim, #9898ab);font-size:clamp(0.9rem, 1.1vw, 1.05rem);margin-bottom:1.5rem;}.install{display:inline-flex;align-items:center;gap:0.75rem;background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.625rem;padding:0.75rem 1.125rem;font-size:clamp(0.8rem, 1vw, 0.9rem);color:var(--c-accent-light, #55efc4);margin-bottom:1.75rem;max-width:100%;}.install code{font-family:var(--mono, monospace);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.copy{background:none;border:none;color:var(--c-text-dim, #9898ab);cursor:pointer;padding:0.25rem;border-radius:0.25rem;transition:color 0.2s;display:flex;align-items:center;min-width:2.25rem;min-height:2.25rem;justify-content:center;flex-shrink:0;}.copy:hover{color:#fff;}.copy.copied{color:var(--c-accent, #00B894);}.links{font-size:clamp(0.8rem, 0.95vw, 0.9rem);}.links a{color:var(--c-primary-light, #a29bfe);text-decoration:none;transition:color 0.2s;}.links a:hover{color:#fff;text-decoration:underline;}.sep{color:var(--c-border, #2a2a3a);margin:0 0.625rem;}@media (max-width:30rem){.links{display:flex;flex-direction:column;gap:0.5rem;align-items:center;}.sep{display:none;}.links a{padding:0.25rem 0;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskCta.#__css); return s; } catch(e) { return null; } })();

  #_copied = false;
  get #copied() { return this.#_copied; }
  set #copied(v) { this.#_copied = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    if (CskCta.#__sheet) this.#shadow.adoptedStyleSheets = [CskCta.#__sheet];
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
          navigator.clipboard.writeText("npx @chasket/chasket init my-app")
          this.#copied = true
        }
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskCta.#__sheet ? '' : '<style>' + CskCta.#__css + '</style>'}
      <section class="cta">
        <div class="container">
          <h2>
            ${this.#esc(this.#tr('cta.title'))}
          </h2>
          <p>
            ${this.#esc(this.#tr('cta.subtitle'))}
          </p>
          <div class="install"><code>npx @chasket/chasket init my-app</code><button data-chasket-id="fl-csk-cta-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'copy copied' : 'copy'))}" aria-label="${this.#escAttr(this.#tr('cta.copyLabel'))}">${this.#copied ? `
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
      ${CskCta.#__sheet ? '' : '<style>' + CskCta.#__css + '</style>'}
      <section class="cta">
        <div class="container">
          <h2>
            ${this.#esc(this.#tr('cta.title'))}
          </h2>
          <p>
            ${this.#esc(this.#tr('cta.subtitle'))}
          </p>
          <div class="install"><code>npx @chasket/chasket init my-app</code><button data-chasket-id="fl-csk-cta-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'copy copied' : 'copy'))}" aria-label="${this.#escAttr(this.#tr('cta.copyLabel'))}">${this.#copied ? `
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
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-cta-0"]');
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
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskEcosystem extends HTMLElement {
  static #__css = `:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 14rem), 1fr));gap:clamp(0.75rem, 1.5vw, 1.25rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius, 0.75rem);padding:clamp(1.25rem, 2vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-accent, #00B894);transform:translateY(-2px);}.card-head{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:clamp(0.75rem, 1.2vw, 1rem);}.icon{width:2.75rem;height:2.75rem;border-radius:0.625rem;display:flex;align-items:center;justify-content:center;background:rgba(0,184,148,0.12);color:#55efc4;margin-bottom:0;}.badge{font-size:0.65rem;font-weight:600;padding:0.2rem 0.5rem;border-radius:1rem;white-space:nowrap;line-height:1.4;letter-spacing:0.02em;}.badge.available{background:rgba(0,184,148,0.15);color:#55efc4;border:1px solid rgba(0,184,148,0.3);}.badge.soon{background:rgba(255,190,70,0.12);color:#f0c060;border:1px solid rgba(255,190,70,0.25);}/* — per-card color variants — */ .clr-teal .icon{background:rgba(46,188,176,0.12);color:#5de8d8;}.clr-teal:hover{border-color:#2EBCB0;}.clr-teal .badge.available{background:rgba(46,188,176,0.15);color:#5de8d8;border-color:rgba(46,188,176,0.3);}.clr-teal .install{color:#2EBCB0;background:rgba(46,188,176,0.08);border-color:rgba(46,188,176,0.2);}.clr-blue .icon{background:rgba(59,130,246,0.12);color:#7daafd;}.clr-blue:hover{border-color:#3B82F6;}.clr-blue .badge.available{background:rgba(59,130,246,0.15);color:#7daafd;border-color:rgba(59,130,246,0.3);}.clr-blue .install{color:#3B82F6;background:rgba(59,130,246,0.08);border-color:rgba(59,130,246,0.2);}.clr-purple .icon{background:rgba(139,92,246,0.12);color:#b49afc;}.clr-purple:hover{border-color:#8B5CF6;}.clr-purple .badge.available{background:rgba(139,92,246,0.15);color:#b49afc;border-color:rgba(139,92,246,0.3);}.clr-purple .install{color:#8B5CF6;background:rgba(139,92,246,0.08);border-color:rgba(139,92,246,0.2);}.clr-coral .icon{background:rgba(255,113,112,0.12);color:#ff9b9a;}.clr-coral:hover{border-color:#FF7170;}.clr-coral .badge.available{background:rgba(255,113,112,0.15);color:#ff9b9a;border-color:rgba(255,113,112,0.3);}.clr-coral .install{color:#FF7170;background:rgba(255,113,112,0.08);border-color:rgba(255,113,112,0.2);}.clr-pink .icon{background:rgba(236,72,153,0.12);color:#f298c8;}.clr-pink:hover{border-color:#EC4899;}.clr-pink .badge.available{background:rgba(236,72,153,0.15);color:#f298c8;border-color:rgba(236,72,153,0.3);}.clr-pink .install{color:#EC4899;background:rgba(236,72,153,0.08);border-color:rgba(236,72,153,0.2);}.clr-amber .icon{background:rgba(234,179,8,0.12);color:#f0cc50;}.clr-amber:hover{border-color:#EAB308;}.clr-amber .badge.available{background:rgba(234,179,8,0.15);color:#f0cc50;border-color:rgba(234,179,8,0.3);}.clr-amber .install{color:#EAB308;background:rgba(234,179,8,0.08);border-color:rgba(234,179,8,0.2);}.clr-cyan .icon{background:rgba(6,182,212,0.12);color:#5cd6ec;}.clr-cyan:hover{border-color:#06B6D4;}.clr-cyan .badge.available{background:rgba(6,182,212,0.15);color:#5cd6ec;border-color:rgba(6,182,212,0.3);}.clr-cyan .install{color:#06B6D4;background:rgba(6,182,212,0.08);border-color:rgba(6,182,212,0.2);}.card.coming{opacity:0.45;cursor:not-allowed;user-select:none;}.card.coming:hover{border-color:var(--c-border, #2a2a3a);transform:none;opacity:0.55;}.card.coming .icon{background:rgba(255,255,255,0.06);color:var(--c-text-dim, #9898ab);}.install.muted{position:relative;color:var(--c-text-dim, #5a5a6a);background:rgba(255,255,255,0.02);border-color:rgba(255,255,255,0.06);text-decoration:line-through;text-decoration-color:rgba(255,255,255,0.2);overflow:hidden;}.install.muted::after{content:'';position:absolute;inset:0;background:repeating-linear-gradient( -45deg, transparent, transparent 4px, rgba(255,255,255,0.04) 4px, rgba(255,255,255,0.04) 5px );pointer-events:none;}h3{font-size:clamp(0.85rem, 1vw, 0.95rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);font-family:var(--mono, monospace);}p{font-size:clamp(0.75rem, 0.9vw, 0.83rem);color:var(--c-text-dim, #9898ab);line-height:1.5;margin-bottom:0.875rem;}.install{display:block;font-family:var(--mono, monospace);font-size:clamp(0.68rem, 0.82vw, 0.78rem);color:var(--c-accent, #00B894);background:rgba(0,184,148,0.08);padding:0.375rem 0.625rem;border-radius:0.375rem;border:1px solid rgba(0,184,148,0.2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.install.vs{font-size:clamp(0.65rem, 0.75vw, 0.72rem);}.caution{display:block;margin-top:0.4rem;font-size:clamp(0.6rem, 0.72vw, 0.68rem);color:var(--c-text-dim, #6a6a7a);line-height:1.3;font-style:italic;}@media (max-width:30rem){.grid{grid-template-columns:1fr;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskEcosystem.#__css); return s; } catch(e) { return null; } })();

  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    if (CskEcosystem.#__sheet) this.#shadow.adoptedStyleSheets = [CskEcosystem.#__sheet];
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
      ${CskEcosystem.#__sheet ? '' : '<style>' + CskEcosystem.#__css + '</style>'}
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
            <div class="card clr-teal"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"></path></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-cli</h3><p>${this.#esc(this.#tr('ecosystem.cli'))}</p><code class="install">npm i @chasket/chasket</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-blue"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-router</h3><p>${this.#esc(this.#tr('ecosystem.router'))}</p><code class="install">npm i @chasket/chasket-router</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-purple"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-store</h3><p>${this.#esc(this.#tr('ecosystem.store'))}</p><code class="install">npm i @chasket/chasket-store</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-coral"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-ssr</h3><p>${this.#esc(this.#tr('ecosystem.ssr'))}</p><code class="install">npm i @chasket/chasket-ssr</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-pink"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-ui</h3><p>${this.#esc(this.#tr('ecosystem.ui'))}</p><code class="install">npm i @chasket/chasket-ui</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-amber"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>vite-plugin-chasket</h3><p>${this.#esc(this.#tr('ecosystem.vite'))}</p><code class="install">npm i @chasket/vite-plugin-chasket</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-cyan"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-lsp</h3><p>${this.#esc(this.#tr('ecosystem.lsp'))}</p><code class="install">npm i @chasket/chasket-lsp</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card coming"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"></path></svg></div><span class="badge soon">${this.#esc(this.#tr('ecosystem.comingSoon'))}</span></div><h3>chasket-vscode</h3><p>${this.#esc(this.#tr('ecosystem.vscode'))}</p><span class="install muted vs">VS Code Marketplace</span></div>
          </div>
        </div>
      </section>
    `;
    this.#shadow.replaceChildren(tpl.content.cloneNode(true));
  }

  #getNewTree() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskEcosystem.#__sheet ? '' : '<style>' + CskEcosystem.#__css + '</style>'}
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
            <div class="card clr-teal"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"></path></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-cli</h3><p>${this.#esc(this.#tr('ecosystem.cli'))}</p><code class="install">npm i @chasket/chasket</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-blue"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-router</h3><p>${this.#esc(this.#tr('ecosystem.router'))}</p><code class="install">npm i @chasket/chasket-router</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-purple"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-store</h3><p>${this.#esc(this.#tr('ecosystem.store'))}</p><code class="install">npm i @chasket/chasket-store</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-coral"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-ssr</h3><p>${this.#esc(this.#tr('ecosystem.ssr'))}</p><code class="install">npm i @chasket/chasket-ssr</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-pink"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-ui</h3><p>${this.#esc(this.#tr('ecosystem.ui'))}</p><code class="install">npm i @chasket/chasket-ui</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-amber"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>vite-plugin-chasket</h3><p>${this.#esc(this.#tr('ecosystem.vite'))}</p><code class="install">npm i @chasket/vite-plugin-chasket</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card clr-cyan"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path></svg></div><span class="badge available">${this.#esc(this.#tr('ecosystem.available'))}</span></div><h3>chasket-lsp</h3><p>${this.#esc(this.#tr('ecosystem.lsp'))}</p><code class="install">npm i @chasket/chasket-lsp</code><span class="caution">${this.#esc(this.#tr('ecosystem.experimental'))}</span></div>
            <div class="card coming"><div class="card-head"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"></path></svg></div><span class="badge soon">${this.#esc(this.#tr('ecosystem.comingSoon'))}</span></div><h3>chasket-vscode</h3><p>${this.#esc(this.#tr('ecosystem.vscode'))}</p><span class="install muted vs">VS Code Marketplace</span></div>
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
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskFeatures extends HTMLElement {
  static #__css = `:host{display:block;padding:var(--space-section, 5rem) 0;}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.hd{text-align:center;margin-bottom:clamp(2rem, 4vw, 3.5rem);}.hd h2{font-size:clamp(1.4rem, 2.8vw, 2.2rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:0.75rem;color:var(--c-text, #e4e4ed);}.hd p{font-size:clamp(0.9rem, 1.1vw, 1.05rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto;}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 18rem), 1fr));gap:clamp(1rem, 2vw, 1.5rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius-lg, 1rem);padding:clamp(1.5rem, 2.5vw, 2rem) clamp(1.25rem, 2vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-primary, #6C5CE7);transform:translateY(-2px);}.icon{width:3.25rem;height:3.25rem;border-radius:0.75rem;display:flex;align-items:center;justify-content:center;margin-bottom:clamp(0.875rem, 1.5vw, 1.25rem);}.i-react{background:rgba(108,92,231,0.15);color:#a29bfe;}.i-tpl{background:rgba(0,184,148,0.15);color:#55efc4;}.i-type{background:rgba(116,185,255,0.15);color:#74b9ff;}.i-xss{background:rgba(253,121,168,0.15);color:#fd79a8;}.i-lock{background:rgba(253,203,110,0.15);color:#ffeaa7;}.i-event{background:rgba(129,236,236,0.15);color:#81ecec;}.card h3{font-size:clamp(0.95rem, 1.1vw, 1.1rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);}.card p{font-size:clamp(0.8rem, 0.95vw, 0.88rem);color:var(--c-text-dim, #9898ab);line-height:1.55;margin-bottom:1rem;}.snippet{background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.5rem;overflow:hidden;}.snippet pre{margin:0;padding:0.875rem 1rem;font-family:var(--mono, monospace);font-size:clamp(0.68rem, 0.82vw, 0.78rem);line-height:1.65;color:#c8c8d8;overflow-x:auto;-webkit-overflow-scrolling:touch;}.snippet code{font-family:inherit;font-size:inherit;}.t{color:#7c8aff;}.a{color:#f8a5c2;}.s{color:#55efc4;}.k{color:#fd79a8;}.tp{color:#74b9ff;}.v{color:#dfe6e9;}.f{color:#ffeaa7;}.n{color:#fab1a0;}.i{color:#fdcb6e;}.c{color:#e17055;}.d{color:#a29bfe;}.cs{color:#81ecec;}.cm{color:#636e72;font-style:italic;}.er{color:#ff7675;}@media (max-width:30rem){.grid{grid-template-columns:1fr;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskFeatures.#__css); return s; } catch(e) { return null; } })();

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
    if (CskFeatures.#__sheet) this.#shadow.adoptedStyleSheets = [CskFeatures.#__sheet];
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
      ${CskFeatures.#__sheet ? '' : '<style>' + CskFeatures.#__css + '</style>'}
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
      ${CskFeatures.#__sheet ? '' : '<style>' + CskFeatures.#__css + '</style>'}
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
  __chasketClasses['csk-features'] = CskFeatures;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-features', CskFeatures]);
} else if (!customElements.get('csk-features')) {
  customElements.define('csk-features', CskFeatures);
}

})();

// ── csk-hero.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskHero extends HTMLElement {
  static #__css = `:host{display:block;}.hero{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:max(70vh, 28rem);padding:clamp(6rem, 12vw, 8rem) var(--space-page, 1.5rem) clamp(3rem, 6vw, 5rem);text-align:center;}.grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(108,92,231,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,0.06) 1px, transparent 1px);background-size:4rem 4rem;mask-image:radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 100%);-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 100%);}.content{position:relative;max-width:45rem;width:100%;}.badge{display:inline-block;font-size:clamp(0.7rem, 0.9vw, 0.8rem);font-weight:500;padding:0.375rem 1rem;border-radius:999px;background:rgba(108,92,231,0.15);color:var(--c-primary-light, #a29bfe);border:1px solid rgba(108,92,231,0.3);margin-bottom:clamp(1.25rem, 2.5vw, 1.75rem);}h1{font-size:clamp(1.75rem, 5vw, 3.5rem);font-weight:800;line-height:1.15;letter-spacing:-0.03em;margin-bottom:clamp(0.75rem, 1.5vw, 1.25rem);color:var(--c-text, #e4e4ed);word-break:keep-all;overflow-wrap:break-word;}.gradient{background:linear-gradient(135deg, var(--c-primary-light, #a29bfe), var(--c-accent-light, #55efc4));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.subtitle{font-size:clamp(0.875rem, 1.2vw, 1.1rem);color:var(--c-text-dim, #9898ab);max-width:35rem;margin:0 auto clamp(1.5rem, 3vw, 2.25rem);line-height:1.65;}.actions{display:flex;gap:0.75rem;justify-content:center;margin-bottom:clamp(1.5rem, 3vw, 2rem);flex-wrap:wrap;}.btn-primary, .btn-secondary{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.75rem;border-radius:0.625rem;font-weight:600;font-size:clamp(0.85rem, 1vw, 0.95rem);transition:transform 0.15s, box-shadow 0.2s;cursor:pointer;border:none;text-decoration:none;font-family:inherit;min-height:2.75rem;}.btn-primary:hover, .btn-secondary:hover{transform:translateY(-1px);}.btn-primary{background:linear-gradient(135deg, var(--c-primary, #6C5CE7), #5a4bd1);color:#fff;box-shadow:0 0.25rem 1.25rem rgba(108,92,231,0.35);}.btn-primary:hover{box-shadow:0 0.375rem 1.75rem rgba(108,92,231,0.5);}.btn-secondary{background:var(--c-surface, #1a1a26);color:var(--c-text, #e4e4ed);border:1px solid var(--c-border, #2a2a3a);gap:0.375rem;}.btn-secondary:hover{border-color:var(--c-primary-light, #a29bfe);}.install{display:inline-flex;align-items:center;gap:0.75rem;background:var(--c-bg-code, #0d0d14);border:1px solid var(--c-border, #2a2a3a);border-radius:0.625rem;padding:0.75rem 1.125rem;font-size:clamp(0.75rem, 1vw, 0.9rem);color:var(--c-accent-light, #55efc4);max-width:100%;}.install code{font-family:var(--mono, 'JetBrains Mono', monospace);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.copy{background:none;border:none;color:var(--c-text-dim, #9898ab);cursor:pointer;padding:0.375rem;border-radius:0.25rem;transition:color 0.2s;display:flex;align-items:center;flex-shrink:0;min-width:2.25rem;min-height:2.25rem;justify-content:center;}.copy:hover{color:#fff;}.copy.copied{color:var(--c-accent, #00B894);}@media (max-width:30rem){.hero{min-height:auto;padding-top:clamp(5rem, 10vw, 7rem);}.actions{flex-direction:column;align-items:center;}.btn-primary, .btn-secondary{width:100%;max-width:16rem;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskHero.#__css); return s; } catch(e) { return null; } })();

  #_copied = false;
  get #copied() { return this.#_copied; }
  set #copied(v) { this.#_copied = v; this.#scheduleUpdate(); }
  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    if (CskHero.#__sheet) this.#shadow.adoptedStyleSheets = [CskHero.#__sheet];
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
          navigator.clipboard.writeText("npx @chasket/chasket init my-app")
          this.#copied = true
        }
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskHero.#__sheet ? '' : '<style>' + CskHero.#__css + '</style>'}
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
          <div class="install"><code>npx @chasket/chasket init my-app</code><button data-chasket-id="fl-csk-hero-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'copy copied' : 'copy'))}" aria-label="${this.#escAttr(this.#tr('hero.copyLabel'))}">${this.#copied ? `
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
      ${CskHero.#__sheet ? '' : '<style>' + CskHero.#__css + '</style>'}
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
          <div class="install"><code>npx @chasket/chasket init my-app</code><button data-chasket-id="fl-csk-hero-0" class="${this.#escAttr(((v) => Array.isArray(v) ? v.filter(Boolean).join(' ') : typeof v === 'object' && v !== null ? Object.entries(v).filter(([,b])=>b).map(([k])=>k).join(' ') : String(v || ''))(this.#copied ? 'copy copied' : 'copy'))}" aria-label="${this.#escAttr(this.#tr('hero.copyLabel'))}">${this.#copied ? `
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
      const el = this.#shadow.querySelector('[data-chasket-id="fl-csk-hero-0"]');
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
/* Built with Chasket v0.2.2 — https://chasket.dev */
(() => {
"use strict";

class CskHighlights extends HTMLElement {
  static #__css = `:host{display:block;padding:0 0 var(--space-section, 5rem);}.container{max-width:var(--max-w, 70rem);margin:0 auto;padding:0 var(--space-page, 1.5rem);}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 14rem), 1fr));gap:clamp(0.75rem, 1.5vw, 1.25rem);}.card{background:var(--c-bg-card, #12121a);border:1px solid var(--c-border, #2a2a3a);border-radius:var(--radius, 0.75rem);padding:clamp(1.25rem, 2.5vw, 1.75rem);transition:border-color 0.25s, transform 0.2s;}.card:hover{border-color:var(--c-primary, #6C5CE7);transform:translateY(-2px);}.icon{width:2.75rem;height:2.75rem;border-radius:0.625rem;display:flex;align-items:center;justify-content:center;margin-bottom:clamp(0.75rem, 1.5vw, 1rem);}.i-bolt{background:rgba(108,92,231,0.12);color:#a29bfe;}.i-shield{background:rgba(253,121,168,0.12);color:#fd79a8;}.i-layout{background:rgba(0,184,148,0.12);color:#55efc4;}.i-globe{background:rgba(116,185,255,0.12);color:#74b9ff;}h3{font-size:clamp(0.875rem, 1.1vw, 1rem);font-weight:600;margin-bottom:0.5rem;color:var(--c-text, #e4e4ed);}p{font-size:clamp(0.8rem, 0.95vw, 0.875rem);color:var(--c-text-dim, #9898ab);line-height:1.55;}@media (max-width:30rem){.grid{grid-template-columns:1fr;}}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskHighlights.#__css); return s; } catch(e) { return null; } })();

  #updateScheduled = false;
  #shadow;
  #listeners = [];

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    if (CskHighlights.#__sheet) this.#shadow.adoptedStyleSheets = [CskHighlights.#__sheet];
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
      ${CskHighlights.#__sheet ? '' : '<style>' + CskHighlights.#__css + '</style>'}
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
      ${CskHighlights.#__sheet ? '' : '<style>' + CskHighlights.#__css + '</style>'}
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
  __chasketClasses['csk-highlights'] = CskHighlights;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-highlights', CskHighlights]);
} else if (!customElements.get('csk-highlights')) {
  customElements.define('csk-highlights', CskHighlights);
}

})();

// ── csk-page-home.csk ──
/* Built with Chasket v0.2.2 — https://chasket.dev */

(() => {
"use strict";

class CskPageHome extends HTMLElement {
  static #__css = `[data-chasket-scope="csk-page-home"] .page-home{display:flex;flex-direction:column;}`;
  static #__sheet = (() => { try { const s = new CSSStyleSheet(); s.replaceSync(CskPageHome.#__css); return s; } catch(e) { return null; } })();
  static #__sheetRefCount = 0;

  #updateScheduled = false;
  #__sheetAttached = false;
  #listeners = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('data-chasket-scope', 'csk-page-home');
    if (CskPageHome.#__sheet && !this.#__sheetAttached) {
      this.#__sheetAttached = true;
      if (CskPageHome.#__sheetRefCount++ === 0) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, CskPageHome.#__sheet];
      }
    }
    this.#render();
    this.#bindEvents();
    this.#bindRefs();
  }

  disconnectedCallback() {
    this.#listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
    this.#listeners = [];
    if (CskPageHome.#__sheet && this.#__sheetAttached) {
      this.#__sheetAttached = false;
      if (--CskPageHome.#__sheetRefCount === 0) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== CskPageHome.#__sheet);
      }
    }
  }

  #render() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      ${CskPageHome.#__sheet ? '' : '<style>' + CskPageHome.#__css + '</style>'}
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
      ${CskPageHome.#__sheet ? '' : '<style>' + CskPageHome.#__css + '</style>'}
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
  __chasketClasses['csk-page-home'] = CskPageHome;
}
if (typeof __chasketDefineQueue !== 'undefined') {
  __chasketDefineQueue.push(['csk-page-home', CskPageHome]);
} else if (!customElements.get('csk-page-home')) {
  customElements.define('csk-page-home', CskPageHome);
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
