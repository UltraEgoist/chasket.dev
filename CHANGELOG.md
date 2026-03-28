# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2026-03-28

Initial public release of the Chasket documentation site, built entirely with Chasket components.

### Pages

- **Home**: ヒーロー、特徴一覧、フレームワーク比較、コードデモ、エコシステム紹介
- **Guide**: ファイル構造、テンプレート構文、スクリプト、スタイル、セキュリティ、コンポーネント通信
- **API Reference**: Compiler API、CLI、Config、Diagnostics、Types、エコシステムパッケージ
- **Testing**: テスト概要、アサーション、コンパイル、テンプレート、フルテスト例
- **Why Chasket**: 設計思想、他フレームワークとの比較

### Features

- **i18n**: 日本語・英語の切り替え対応（`window.__t()` / `window.__i18n_setLocale()`）
- **Syntax Highlighting**: postbuild によるコードブロック自動ハイライト（11 カラークラス）
- **Responsive**: モバイル対応レイアウト
- **Copy Button**: コードブロックのワンクリックコピー

### Deployment

- Cloudflare Pages プリビルド方式（ビルド済みバンドルをコミット）
- セキュリティヘッダー設定（CSP、X-Frame-Options 等）
- カスタム 404 ページ
