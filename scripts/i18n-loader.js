// アクティブ言語のみ同期ロード、もう一方は defer で遅延ロード
// document.write は CSP や遅延コンテキストで問題になるため createElement を使用
(function() {
  var lang = document.documentElement.lang || 'ja';
  var active = lang === 'en' ? '/i18n/en.js' : '/i18n/ja.js';
  var deferred = lang === 'en' ? '/i18n/ja.js' : '/i18n/en.js';

  // アクティブ言語を同期的にロード（async=false で実行順序を保証）
  var a = document.createElement('script');
  a.src = active;
  a.async = false;
  document.head.appendChild(a);

  // 非アクティブ言語は遅延ロード
  var d = document.createElement('script');
  d.src = deferred;
  d.defer = true;
  document.head.appendChild(d);
})();
