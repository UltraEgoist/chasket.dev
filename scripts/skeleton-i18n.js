// 英語ユーザー向けにスケルトンテキストを即座に差し替え
if (document.documentElement.lang === 'en') {
  var sk = document.getElementById('csk-skeleton');
  if (sk) {
    sk.querySelector('.skeleton-badge').textContent = 'v0.3.0 \u2014 Now on VSCode Marketplace';
    sk.querySelector('.skeleton-h1').innerHTML = 'Template-First<br><span class="skeleton-gradient">Web Components</span> Language';
    sk.querySelector('.skeleton-sub').textContent = 'Write single-file components with built-in reactivity, type checking, and scoped CSS. Compiles to native HTMLElement classes with zero runtime.';
  }
}
