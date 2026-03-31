# chasket.dev

> **[🌐 サイトを見る](https://chasket.dev)** · **[Chasket CLI ライブラリ](https://github.com/UltraEgoist/chasket)**

[English version](./README.md)

[Chasket](https://github.com/UltraEgoist/chasket) の公式ドキュメントサイトです。Chasket はランタイムゼロで、ネイティブ Web Components にコンパイルされるテンプレートファースト言語です。

このサイト自体も Chasket で構築されており、Cloudflare Pages でホスティングしています。

## 特徴

- **ハッシュルーティングの SPA** — フレームワーク不要のクライアントサイドナビゲーション
- **日英バイリンガル対応** — ランタイムでの言語切り替えに完全対応
- **ページ単位のバンドル分割** — コアレイアウトを即座に読み込み、ページバンドルはナビゲーション時にオンデマンドでロード
- **ビルド時シンタックスハイライト** — postbuild スクリプトで適用（ランタイムのハイライトライブラリ不要）
- **SEO 対応** — OGP / Twitter Card メタタグ、`robots.txt`、`sitemap.xml`、canonical URL

## ページ構成

| ルート | 内容 |
|---|---|
| `#/` | ホーム — ヒーロー、機能紹介、ライブコードデモ、比較、エコシステム概要 |
| `#/why` | なぜ Chasket か — 設計思想、コンパイル出力の例 |
| `#/guide` | ガイド — ファイル構造、テンプレート構文、スクリプト API、スタイリング、セキュリティ |
| `#/api` | API リファレンス — CLI コマンド、コンパイラ API、設定、診断、型定義 |
| `#/testing` | テスト — テストランナー、アサーション、コンパイルテスト、実例 |

## ディレクトリ構成

```
chasket.dev/
├── src/
│   ├── layout/          # シェル、ナビバー、フッター（core-layout バンドル）
│   ├── shared/          # コピーボタン等の共有コンポーネント（core-shared バンドル）
│   └── pages/
│       ├── home/        # page-home バンドル
│       ├── why/         # page-why バンドル
│       ├── guide/       # page-guide バンドル
│       ├── api/         # page-api バンドル
│       └── testing/     # page-testing バンドル
├── i18n/                # 翻訳ファイル（ja.js / en.js）
├── scripts/             # postbuild パッチ（シンタックスハイライト、const→var 修正等）
├── dist/                # ビルド済み JS バンドル（Cloudflare Pages 用にコミット）
├── test/                # コンポーネントテスト
├── index.html           # エントリーポイント
├── chasket.config.json  # Chasket ビルド設定（ディレクトリ別エントリー）
├── _headers             # Cloudflare Pages キャッシュ・セキュリティヘッダー
├── robots.txt           # 検索エンジン向けディレクティブ
└── sitemap.xml          # SPA ハッシュルート用サイトマップ
```

## バンドルアーキテクチャ

単一のモノリシックバンドルではなく、Chasket の `config.entries` による**エントリーベースの分割**を採用しています。

- **`core-layout.js`** — ナビバー、フッター、シェル（全ページで読み込み）
- **`core-shared.js`** — コピーボタン等の再利用コンポーネント
- **`page-*.js`** — 各ページのコンポーネント群（ナビゲーション時に動的ロード）

これにより初期ロードが約 574 KB → 約 180 KB に削減（69% 削減）され、CLS とインタラクティブ化までの時間が改善されています。

## ローカル開発

```bash
npm install
npm run dev     # 開発サーバー起動
npm run build   # 本番ビルド（コンパイル + postbuild）
```

ビルド後、`dist/` ディレクトリにデプロイ用の最終バンドルが生成されます。

## デプロイ

**プリビルド方式**を採用しています。

1. ローカルで `npm run build` を実行
2. `dist/` ディレクトリをコミット
3. `main` にプッシュ — Cloudflare Pages が静的ファイルとしてそのまま配信

Cloudflare 上でビルドは実行されません。コミットされた成果物がそのままデプロイされます。

## 関連リンク

- **[Chasket](https://github.com/UltraEgoist/chasket)** — CLI / コンパイラ ライブラリ
- **[chasket.dev](https://chasket.dev)** — このドキュメントサイト（公開中）

## ライセンス

[MIT](./LICENSE)
