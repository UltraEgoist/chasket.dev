#!/usr/bin/env node
/**
 * postbuild.js — コンパイラ出力のポストプロセッサ
 *
 * chasket build で生成されたバンドルに対し、以下のパッチを順番に適用する:
 *
 * 1. import 文除去
 *    バンドル内の import 行を削除。<script> タグで読み込むため不要。
 *
 * 2. on mount 注入（現在は空リスト — コンパイラがネイティブ対応済み）
 *    mountPatches に指定されたメソッドを connectedCallback に注入。
 *
 * 3. <pre><code>{{ }} 補間修正
 *    コンパイラが <pre> 内の {{ }} を処理しないため、
 *    リテラル {{ varName }} を ${this.#varName} に変換。
 *
 * 4. #esc() 除去（<pre><code> 内）
 *    state 値には事前エンコード済み HTML（&lt; 等）が含まれるため、
 *    #esc() が & → &amp; に二重変換するのを防止。
 *
 * 5. #patch() カスタム要素スキップガード（コンパイラ v0.2.5 でネイティブ対応済み）
 *    shadow: none サブコンポーネントの DOM 破壊を防ぐ。
 *    正規表現がマッチしなくなったが、互換性のため残存。
 *
 * 6. 空 #esc() 除去
 *    \{{ }} エスケープ記法の残骸 ${this.#esc()} を除去。
 *
 * 実行: npm run build（chasket build && node scripts/postbuild.js）
 */
'use strict';

const fs = require('fs');
const path = require('path');

// 複数バンドル対応: dist/ 内のすべてのバンドルファイルを処理する。
// entries 方式で分割された core-layout.js, core-shared.js, page-*.js に対応。
// 後方互換: chasket-bundle.js が存在する場合はそれも処理する。
const distDir = path.resolve(__dirname, '..', 'dist');
const bundleFiles = fs.readdirSync(distDir)
  .filter(f => f.endsWith('.js') && !f.endsWith('.min.js') && !f.endsWith('.map'))
  .filter(f => f.startsWith('core-') || f.startsWith('page-') || f === 'chasket-bundle.js')
  .map(f => path.join(distDir, f));

if (bundleFiles.length === 0) {
  console.error('No bundle files found in:', distDir);
  process.exit(1);
}

console.log(`Processing ${bundleFiles.length} bundle(s)...`);

for (const bundlePath of bundleFiles) {
  console.log(`\n▸ ${path.basename(bundlePath)}`);

let code = fs.readFileSync(bundlePath, 'utf-8');
const before = code.length;

// [パッチ0] __chasketDefineQueue の const 重複宣言を防止
// entries 方式で複数バンドルを <script> タグで読み込む場合、
// グローバルスコープで const が2回宣言されると SyntaxError になる。
// "const" → "var" に変更し、各バンドルが独立して定義キューを初期化・処理可能にする。
let queueFixCount = 0;
code = code.replace(
  /const __chasketDefineQueue = \[\];/g,
  () => {
    queueFixCount++;
    return 'var __chasketDefineQueue = [];';
  }
);
if (queueFixCount > 0) {
  console.log(`  Patched __chasketDefineQueue const→var (${queueFixCount})`);
}

// [パッチ1] import 文除去
// バンドル内の import 行を削除。テンプレート HTML 内の "import" で始まる行も
// コンパイラが誤って抽出するため、広めのパターンで除去する。
code = code.replace(/^import\s.*\n/gm, '');

// [パッチ2] on mount 注入（現在は空 — コンパイラ v0.2.5 でネイティブ対応済み）
// 以前は fn onMountInit() 等を connectedCallback に手動注入していた。
// mountPatches にメソッド名を追加すると、該当 IIFE の connectedCallback 末尾に注入される。
const mountPatches = [];

code = code.replace(
  /\(\(\)\s*=>\s*\{[\s\S]*?\}\)\(\);/g,
  (iifeBlock) => {
    let patched = iifeBlock;
    for (const method of mountPatches) {
      const methodRegex = new RegExp(method.replace('#', '#') + '\\(\\)\\s*\\{');
      if (!methodRegex.test(patched)) continue;
      patched = patched.replace(
        /(connectedCallback\(\)\s*\{)([\s\S]*?)(this\.#bindRefs\(\);)\s*\n(\s*\})/,
        '$1$2$3\n    this.' + method + '();\n$4'
      );
    }
    return patched;
  }
);

// [パッチ3] <pre><code> 内の {{ }} 補間修正
// コンパイラは <pre><code>{{ varName }}</code></pre> をテンプレートリテラルに変換しない。
// リテラル {{ varName }} → ${this.#varName} に置換する（#esc() は付けない）。
let preFixCount = 0;
code = code.replace(
  /(<pre><code>)\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}(<\/code><\/pre>)/g,
  (match, pre, varName, post) => {
    preFixCount++;
    return pre + '${this.#' + varName + '}' + post;
  }
);
if (preFixCount > 0) {
  console.log(`  Fixed ${preFixCount} uncompiled interpolations in <pre> blocks`);
}

// [パッチ4] #esc() 除去（<pre><code> 内の state 補間）
// state 値にはシンタックスハイライト用の HTML（<span class=k>）と
// 事前エンコード済みエンティティ（&lt; &gt; &quot;）が含まれる。
// #esc() が & → &amp; に二重変換するのを防止するため、ラッパーを除去する。
// 例: ${this.#esc(this.#codeCounter)} → ${this.#codeCounter}
let escFixCount = 0;
code = code.replace(
  /<pre><code>\$\{this\.#esc\(this\.#([a-zA-Z_][a-zA-Z0-9_]*)\)\}<\/code>/g,
  (match, varName) => {
    escFixCount++;
    return `<pre><code>\${this.#${varName}}</code>`;
  }
);
if (escFixCount > 0) {
  console.log(`  Removed #esc() from ${escFixCount} <pre><code> interpolations`);
}

// [パッチ5] #patch() カスタム要素スキップガード
// #patch() は shadow: none サブコンポーネントに再帰し、親テンプレートが空タグのため
// 子の描画済み DOM を破壊する。tagName にハイフンが含まれる要素への再帰をスキップ。
// ※ コンパイラ v0.2.5 でネイティブ対応済み。正規表現がマッチしなくなったが互換性のため残存。
let patchFixCount = 0;
code = code.replace(
  /if \(o\.tagName === 'STYLE'\) \{\s*if \(o\.textContent !== n\.textContent\) o\.textContent = n\.textContent;\s*continue;\s*\}\s*this\.#patch\(o, n\);/g,
  (match) => {
    patchFixCount++;
    return match.replace(
      'this.#patch(o, n);',
      'if (o.tagName.includes(\'-\')) continue;\n        this.#patch(o, n);'
    );
  }
);
if (patchFixCount > 0) {
  console.log(`  Patched ${patchFixCount} #patch() methods to skip custom elements`);
}

// [パッチ6] 空 #esc() 除去
// テンプレート内の \{{ }} エスケープ記法を使うと、コンパイラが
// ${this.#esc()} という空の呼び出しを出力する。これを除去する。
code = code.replace(/\$\{this\.#esc\(\)\}\s*/g, '');

// [パッチ7] <pre><code> 内のシンタックスハイライト
// state 変数のプレーンテキストコード例に、ホームページと同じ配色の
// <span class=XX> をインラインで挿入し、全ページで統一的なハイライトを実現する。
// 既にハイライト済み（<span が存在する）ブロックはスキップする。
let hlCount = 0;
code = code.replace(
  /<pre><code>([\s\S]*?)<\/code><\/pre>/g,
  (match, inner) => {
    // 既にハイライト済みならスキップ
    if (inner.includes('<span ')) return match;
    // テンプレートリテラル変数（${this.#...}）はスキップ
    if (inner.includes('${this.#')) return match;
    hlCount++;
    return '<pre><code>' + highlightCode(inner) + '</code></pre>';
  }
);
if (hlCount > 0) {
  console.log(`  Applied syntax highlighting to ${hlCount} <pre><code> blocks`);
}

// [パッチ8] state 変数の文字列値にシンタックスハイライトを適用
// <pre><code>${this.#varName}</code></pre> パターンで参照される state 変数を特定し、
// その初期値文字列（JS 文字列リテラル）の中身にハイライトを適用する。
// JS 文字列内の \n はブラウザで改行として解釈されるため、
// 行単位でトークナイズしてハイライトする。
const preCodeVarNames = new Set();
code.replace(/<pre><code>\$\{this\.#(\w+)\}<\/code>/g, (m, name) => {
  preCodeVarNames.add(name);
});

let stateHlCount = 0;
for (const varName of preCodeVarNames) {
  // state 初期値: this.#_varName = "..."; のパターンを探す
  // Chasket コンパイラが state 変数に _ プレフィクスを付けるため #_varName で検索
  // 文字列の中身は \" でエスケープされた " を含む可能性がある
  const assignRe = new RegExp(
    '(#_' + varName + '\\s*=\\s*)"((?:[^"\\\\]|\\\\.)*)";',
    'g'
  );
  code = code.replace(assignRe, (match, prefix, strContent) => {
    // 既にハイライト済みならスキップ
    if (strContent.includes('<span ')) return match;
    stateHlCount++;
    const highlighted = highlightJsString(strContent);
    return prefix + '"' + highlighted + '";';
  });
}
if (stateHlCount > 0) {
  console.log(`  Applied syntax highlighting to ${stateHlCount} state variable strings`);
}

/**
 * highlightJsString — JS 文字列リテラルの中身にシンタックスハイライトを適用。
 * \n を改行として扱い、行単位でトークナイズする。
 * 文字列内では &lt; ではなく \\n, \\" 等の JS エスケープが使われる。
 * ただし一部の state 値は &lt; &gt; &quot; エンコード済みの場合もある。
 */
function highlightJsString(str) {
  // \\n → 改行プレースホルダに一時変換（トークナイザが行単位で処理できるように）
  // ただしハイライト後に \\n に戻す
  const NL = '\x00NL\x00';
  let work = str.replace(/\\n/g, NL);

  // highlightCode を再利用（HTML エンコード済みコンテンツ向け）
  // ただし JS 文字列内は &lt; ではなく生テキストの場合もあるので、
  // 両方のパターンに対応するため直接トークナイズする
  work = highlightCodeForJsString(work);

  // プレースホルダを \\n に戻す
  work = work.replace(/\x00NL\x00/g, '\\n');
  return work;
}

/**
 * highlightCodeForJsString — JS 文字列リテラル内のコードをハイライト。
 * highlightCode と同様のトークナイザだが、改行プレースホルダ対応。
 */
function highlightCodeForJsString(src) {
  const NL = '\x00NL\x00';
  const rules = [
    // HTML コメント（&lt; エンコード済み）
    { re: /&lt;!--[\s\S]*?--&gt;/, cls: 'cm' },
    // JS ブロックコメント
    { re: /\/\*[^]*?\*\//, cls: 'cm' },
    // JS 行コメント（改行プレースホルダまで）
    { re: new RegExp('//[^' + NL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ']*'), cls: 'cm' },
    // シェルコメント（行頭の # のみ — CSS セレクタ等と区別）
    { re: new RegExp('(?:^|' + NL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')#[^' + NL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ']*'), fn: (m) => {
      if (m.startsWith(NL)) return NL + '<span class=cm>' + m.slice(NL.length) + '</span>';
      return '<span class=cm>' + m + '</span>';
    }},

    // Chasket 制御タグ（&lt; エンコード済み）
    { re: /&lt;[/#:](?:if|for|else|else-if|empty)(?:\s[^&]*?)?&gt;/, cls: 'c' },
    // Chasket 補間
    { re: /\{\{[^}]*?\}\}/, cls: 'i' },

    // HTML タグ全体（&lt; エンコード済み）
    { re: /&lt;\/?\s*[a-zA-Z][\w-]*(?:\s(?:&quot;[^&]*?&quot;|"[^"]*"|[^&]|&(?!gt;))*?)?\/?\s*&gt;/, fn: highlightTag },

    // エンコード済み文字列: &quot;...&quot;
    { re: /&quot;(?:[^&]|&(?!quot;))*?&quot;/, cls: 's' },
    // 通常の文字列（JS エスケープ \\\" に注意）
    { re: /\\"(?:[^\\"]|\\.)*?\\"/, cls: 's' },
    // シングルクォート文字列
    { re: /'[^'\\]*(?:\\.[^'\\]*)*'/, cls: 's' },
    // テンプレートリテラル
    { re: /`[^`]*?`/, cls: 's' },

    // 型注釈
    { re: /:\s*(?:string\[\]|number\[\]|boolean\[\]|string|number|boolean|void|object|any|null)\b/, fn: (m) => {
      return m.replace(/(string\[\]|number\[\]|boolean\[\]|string|number|boolean|void|object|any|null)/, '<span class=tp>$1</span>');
    }},

    // Chasket/JS キーワード
    { re: /\b(?:state|prop|computed|fn|emit|watch|provide|consume|import|from|export|default|extends|class|new|const|let|var|if|else|return|await|async|for|of|in|on mount|on unmount)\b/, cls: 'k' },
    // 真偽・null
    { re: /\b(?:true|false|null|undefined)\b/, cls: 'n' },

    // 関数呼び出し
    { re: /\b[a-zA-Z_]\w*(?=\()/, cls: 'f' },
    // 数値
    { re: /\b\d+(?:\.\d+)?\b/, cls: 'n' },

    // 改行プレースホルダ
    { re: new RegExp(NL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) },
    // 識別子
    { re: /[a-zA-Z_$][\w$]*/ },
    // &entity;
    { re: /&\w+;/ },
    // その他
    { re: /[\s\S]/ },
  ];

  let out = '';
  let safety = 0;
  const maxIter = src.length * 3;

  while (src.length > 0 && safety++ < maxIter) {
    let matched = false;
    for (const rule of rules) {
      const m = src.match(new RegExp('^(?:' + rule.re.source + ')'));
      if (!m) continue;
      const tok = m[0];
      if (rule.fn) {
        out += rule.fn(tok);
      } else if (rule.cls) {
        out += '<span class=' + rule.cls + '>' + tok + '</span>';
      } else {
        out += tok;
      }
      src = src.slice(tok.length);
      matched = true;
      break;
    }
    if (!matched) {
      out += src[0];
      src = src.slice(1);
    }
  }
  return out;
}

/**
 * highlightCode — 事前エンコード済み HTML コード文字列にシンタックスハイライトを適用。
 *
 * トークナイザ方式: 入力を先頭から順にトークンとして切り出し、
 * 各トークンに対応する <span class=XX> で囲む。
 * 一度マッチしたテキストは再処理されないため、class=t が属性に混入する
 * 二重置換バグが発生しない。
 *
 * ホームページ（csk-code-demo）と同じクラス名体系:
 *   .t  = tag           #7c8aff  (blue-purple)
 *   .a  = attribute      #f8a5c2  (pink)
 *   .s  = string         #55efc4  (green)
 *   .k  = keyword        #fd79a8  (hot-pink)
 *   .tp = type           #74b9ff  (light-blue)
 *   .f  = function       #ffeaa7  (yellow)
 *   .n  = number/bool    #fab1a0  (salmon)
 *   .cm = comment        #636e72  (gray)
 *   .c  = chasket ctrl   #e17055  (orange)
 *   .d  = directive      #a29bfe  (purple)
 *   .i  = interpolation  #fdcb6e  (gold)
 */
function highlightCode(src) {
  // トークンルール — 優先度順。先にマッチしたものが勝つ。
  // src はコンパイラ出力内のエンコード済み文字列（&lt; &gt; &quot; 等）。
  const rules = [
    // HTML コメント: &lt;!-- ... --&gt;
    { re: /&lt;!--[\s\S]*?--&gt;/, cls: 'cm' },
    // JS ブロックコメント
    { re: /\/\*[\s\S]*?\*\//, cls: 'cm' },
    // JS 行コメント
    { re: /\/\/[^\n]*/, cls: 'cm' },
    // シェルコメント（行頭の # のみ — CSS セレクタ等と区別）
    { re: /(?:^|\n)#[^\n]*/, fn: (m) => {
      if (m.startsWith('\n')) return '\n<span class=cm>' + m.slice(1) + '</span>';
      return '<span class=cm>' + m + '</span>';
    }},

    // Chasket 制御タグ: &lt;#if ...&gt;, &lt;:else&gt;, &lt;/#for&gt; 等
    { re: /&lt;[/#:](?:if|for|else|else-if|empty)(?:\s[^&]*?)?&gt;/, cls: 'c' },

    // Chasket 補間: {{ expr }}
    { re: /\{\{[^}]*?\}\}/, cls: 'i' },

    // HTML タグ全体: &lt;tag attr="val" ...&gt; — 内部を再帰的にハイライト
    // 属性値の " や &quot; 内の &gt; に騙されないよう、値部分をスキップ
    { re: /&lt;\/?\s*[a-zA-Z][\w-]*(?:\s(?:&quot;[^&]*?&quot;|"[^"]*"|[^&]|&(?!gt;))*?)?\/?\s*&gt;/, fn: highlightTag },

    // エンコード済み文字列: &quot;...&quot;
    { re: /&quot;(?:[^&]|&(?!quot;))*?&quot;/, cls: 's' },
    // 通常のダブルクォート文字列: "..."
    { re: /"[^"]*?"/, cls: 's' },
    // 通常の文字列: '...'
    { re: /'[^'\\]*(?:\\.[^'\\]*)*'/, cls: 's' },
    // テンプレートリテラル: `...`
    { re: /`[^`]*?`/, cls: 's' },

    // 型注釈: ": type" パターン
    { re: /:\s*(?:string\[\]|number\[\]|boolean\[\]|string|number|boolean|void|object|any|null)\b/, fn: (m) => {
      return m.replace(/(string\[\]|number\[\]|boolean\[\]|string|number|boolean|void|object|any|null)/, '<span class=tp>$1</span>');
    }},

    // Chasket/JS キーワード
    { re: /\b(?:state|prop|computed|fn|emit|watch|provide|consume|import|from|export|default|extends|class|new|const|let|var|if|else|return|await|async|for|of|in|on\s+mount|on\s+unmount)\b/, cls: 'k' },
    // 真偽・null
    { re: /\b(?:true|false|null|undefined)\b/, cls: 'n' },

    // 関数呼び出し: name(
    { re: /\b[a-zA-Z_]\w*(?=\()/, cls: 'f' },

    // 数値リテラル
    { re: /\b\d+(?:\.\d+)?\b/, cls: 'n' },

    // 識別子（ハイライトしない — デフォルトテキスト色で表示）
    { re: /[a-zA-Z_$][\w$]*/ },

    // その他の文字（1文字ずつ消費して無限ループ防止）
    { re: /[\s\S]/ },
  ];

  let out = '';
  let safety = 0;
  const maxIter = src.length * 3; // 安全弁

  while (src.length > 0 && safety++ < maxIter) {
    let matched = false;
    for (const rule of rules) {
      const m = src.match(new RegExp('^(?:' + rule.re.source + ')'));
      if (!m) continue;
      const tok = m[0];
      if (rule.fn) {
        out += rule.fn(tok);
      } else if (rule.cls) {
        out += '<span class=' + rule.cls + '>' + tok + '</span>';
      } else {
        out += tok; // ハイライトなし
      }
      src = src.slice(tok.length);
      matched = true;
      break;
    }
    if (!matched) {
      // どのルールにもマッチしない場合（通常起きない）— 1文字消費
      out += src[0];
      src = src.slice(1);
    }
  }
  return out;
}

/**
 * highlightTag — 1つの HTML タグ全体をハイライト。
 * タグ名を .t、属性名を .a、属性値を .s、ディレクティブを .d で囲む。
 *
 * 入力例: &lt;input :bind=&quot;text&quot; @click=&quot;add&quot; class=&quot;btn&quot;&gt;
 */
function highlightTag(tag) {
  // 開始タグ名: &lt; or &lt;/ + tagName
  let out = tag.replace(
    /^(&lt;\/?\s*)([a-zA-Z][\w-]*)/,
    '<span class=t>$1$2</span>'
  );

  // 属性部分をハイライト
  // 属性値は &quot;...&quot; または "..." の両形式がある
  const valPat = '(?:&quot;(?:[^&]|&(?!quot;))*?&quot;|"[^"]*?")';

  // Chasket ディレクティブ: @event=... or :attr=...
  out = out.replace(
    new RegExp('([@:][\\w|.-]+)\\s*=\\s*(' + valPat + ')', 'g'),
    '<span class=d>$1</span>=<span class=s>$2</span>'
  );

  // 通常の HTML 属性: name=&quot;val&quot; or name="val"
  out = out.replace(
    new RegExp('\\b([a-zA-Z_][\\w-]*)\\s*=\\s*(' + valPat + ')', 'g'),
    (m, name, val) => {
      // 既にハイライト済みならスキップ
      if (m.includes('<span')) return m;
      return '<span class=a>' + name + '</span>=<span class=s>' + val + '</span>';
    }
  );

  // 閉じ括弧: /&gt; or &gt;
  out = out.replace(/(\/?\s*&gt;)$/, '<span class=t>$1</span>');

  return out;
}

fs.writeFileSync(bundlePath, code);

const removed = before - code.length;
if (removed > 0) {
  console.log(`  Stripped import statements from bundle (${removed} bytes)`);
}

} // end of bundleFiles loop
