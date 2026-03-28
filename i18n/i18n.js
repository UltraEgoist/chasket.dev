/**
 * Chasket.dev — 最小限の i18n システム
 *
 * 読み込み順序（index.html で厳守）:
 *   1. このスクリプト（i18n.js）を最初に読み込む
 *   2. ロケールファイル（ja.js, en.js …）が __i18n_register() で翻訳を登録
 *   3. <html lang="ja"> がアクティブロケールを決定
 *   4. .csk コンポーネント内で window.__t('section.key') を呼び出し
 *
 * コンポーネントでの使い方:
 *   fn tr(k: string) { return window.__t(k) }
 *   テンプレート: {{ tr('hero.title') }}
 *   → コンパイラが ${this.#esc(this.#tr('hero.title'))} に変換（XSS 安全）
 *
 * 言語追加手順:
 *   1. en.js をコピーし全値を翻訳、i18n/xx.js として保存
 *   2. index.html に <script src="/i18n/xx.js"></script> を追加
 *   3. csk-navbar.csk の switchLang() に新言語トグルを追加
 *
 * グローバル API:
 *   window.__t(key)                — 翻訳を取得（キーが見つからない場合はキー自体を返す）
 *   window.__i18n_locale()         — 現在のロケール文字列を取得
 *   window.__i18n_locales()        — 登録済みロケール一覧を取得
 *   window.__i18n_setLocale(code)  — ロケールを切り替え（localStorage に保存しリロード）
 *   window.__i18n_register(code, data) — ロケールファイルが翻訳マップを登録
 */
;(function () {
  'use strict'

  var locales = {}

  // Restore persisted locale immediately — before any component renders.
  try {
    var savedLang = localStorage.getItem('chasket_lang')
    if (savedLang) document.documentElement.lang = savedLang
  } catch (e) { /* noop */ }

  /** Register a locale's translation map. */
  window.__i18n_register = function (locale, data) {
    locales[locale] = data
  }

  /**
   * Look up a dot-separated key in the active locale.
   * Falls back to the key itself if not found.
   *
   * @param  {string} key  e.g. "hero.titleLine1"
   * @return {string}
   */
  window.__t = function (key) {
    var lang = document.documentElement.lang || 'ja'
    var parts = key.split('.')
    var val = locales[lang]
    for (var i = 0; i < parts.length; i++) {
      if (val == null) return key
      val = val[parts[i]]
    }
    return val != null ? val : key
  }

  /** Helper: get the active locale string. */
  window.__i18n_locale = function () {
    return document.documentElement.lang || 'ja'
  }

  /** List registered locale codes. */
  window.__i18n_locales = function () {
    return Object.keys(locales)
  }

  /**
   * Switch active locale, persist to localStorage, and reload.
   * @param {string} locale  e.g. "en"
   */
  window.__i18n_setLocale = function (locale) {
    if (!locales[locale]) return
    try { localStorage.setItem('chasket_lang', locale) } catch (e) { /* noop */ }
    document.documentElement.lang = locale
    location.reload()
  }

})()
