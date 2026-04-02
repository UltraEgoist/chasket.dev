#!/usr/bin/env node
/**
 * update-version.js
 *
 * GitHub Actions から呼び出され、リリース情報をサイトに反映する。
 * 環境変数: VERSION, DATE, HIGHLIGHTS_JA, HIGHLIGHTS_EN
 *
 * 更新対象:
 *   - version.json        (バージョン番号、日付、ハイライト)
 *   - i18n/en.js          (hero.badge, guideContent.versionNote)
 *   - i18n/ja.js          (hero.badge, guideContent.versionNote)
 */

const fs = require('fs');
const path = require('path');

const VERSION = process.env.VERSION;
const DATE = process.env.DATE;
const HIGHLIGHTS_JA = process.env.HIGHLIGHTS_JA;
const HIGHLIGHTS_EN = process.env.HIGHLIGHTS_EN;

if (!VERSION) {
  console.error('ERROR: VERSION environment variable is required');
  process.exit(1);
}

const root = path.resolve(__dirname, '..');

// ── 1. version.json ──
const versionPath = path.join(root, 'version.json');
const versionData = {
  version: VERSION,
  date: DATE || new Date().toISOString().slice(0, 10),
  changelog: 'https://github.com/UltraEgoist/chasket/blob/main/CHANGELOG.md',
  highlights: {
    ja: HIGHLIGHTS_JA || '',
    en: HIGHLIGHTS_EN || ''
  }
};
fs.writeFileSync(versionPath, JSON.stringify(versionData, null, 2) + '\n');
console.log('Updated:', versionPath);

// ── 2. i18n ファイル ──
function updateI18n(filePath, lang) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const oldBadge = content;

  // hero.badge: 'v0.3.0 — ...' のバージョン番号を置換
  // badge の — 以降のテキストはそのまま維持
  content = content.replace(
    /(badge:\s*')v[\d.]+/,
    `$1v${VERSION}`
  );

  // guideContent.versionNote のバージョン番号を置換
  // v0.3.0 → v0.4.0 のようにバージョン番号だけ差し替え
  content = content.replace(
    /v\d+\.\d+\.\d+/g,
    `v${VERSION}`
  );

  if (content !== oldBadge) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated:', filePath);
  } else {
    console.log('No changes needed:', filePath);
  }
}

updateI18n(path.join(root, 'i18n', 'en.js'), 'en');
updateI18n(path.join(root, 'i18n', 'ja.js'), 'ja');

console.log(`\nSite version updated to v${VERSION}`);
