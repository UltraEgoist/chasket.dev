// 現在のルートに対応するページバンドルを先読み
(function() {
  var h = location.hash || '#/';
  var p = 'page-home.js';
  if (h.indexOf('#/guide') === 0) p = 'page-guide.js';
  else if (h.indexOf('#/api') === 0) p = 'page-api.js';
  else if (h.indexOf('#/testing') === 0) p = 'page-testing.js';
  else if (h.indexOf('#/why') === 0) p = 'page-why.js';
  else if (h.indexOf('#/playground') === 0) p = 'page-playground.js';
  var link = document.createElement('link');
  link.rel = 'preload'; link.as = 'script'; link.href = '/dist/' + p;
  document.head.appendChild(link);
})();
