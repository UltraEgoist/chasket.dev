# Contributing — chasket.dev 開発ガイド

## ブランチ戦略

```
main                          ← Cloudflare Pages デプロイ対象（安定版）
├── develop                   ← 開発統合ブランチ
│   ├── feat/xxx              ← 新ページ・新セクション追加
│   ├── fix/xxx               ← 表示バグ・ビルドエラー修正
│   ├── refactor/xxx          ← コンポーネント再構成
│   ├── style/xxx             ← デザイン変更
│   ├── i18n/xxx              ← 翻訳追加・修正
│   └── docs/xxx              ← サイト内コンテンツ更新
└── release/vX.Y.Z            ← リリース準備（develop → main のバッファ）
```

### フロー

1. `develop` から作業ブランチを作成
2. 作業完了後 `develop` にマージ
3. リリース時に `release/vX.Y.Z` ブランチを作成、最終確認
4. `main` にマージ → Cloudflare Pages が自動デプロイ

### ブランチ命名規則

| パターン | 用途 | 例 |
|---|---|---|
| `feat/{ページ名}` | 新ページ・セクション追加 | `feat/examples-page` |
| `fix/{対象}` | バグ修正 | `fix/navbar-scroll` |
| `refactor/{対象}` | コンポーネント再構成 | `refactor/page-layout` |
| `style/{対象}` | デザイン・CSS 変更 | `style/dark-theme` |
| `i18n/{言語}` | 翻訳追加・修正 | `i18n/en-guide` |
| `docs/{対象}` | コンテンツ更新 | `docs/api-update` |
| `release/v{X.Y.Z}` | リリース準備 | `release/v1.1.0` |

## コミットメッセージ規則

[Conventional Commits](https://www.conventionalcommits.org/) に準拠。

```
{type}({scope}): {概要}

{本文（任意）}

{フッター（任意）}
```

### type

| type | 用途 |
|---|---|
| `feat` | 新ページ・新コンポーネント追加 |
| `fix` | バグ修正 |
| `refactor` | リファクタリング（動作変更なし） |
| `style` | デザイン・CSS のみの変更 |
| `i18n` | 翻訳追加・修正 |
| `docs` | サイトコンテンツの更新 |
| `build` | ビルド・デプロイ設定変更 |
| `chore` | その他（依存更新、設定変更など） |

### scope

| scope | 対象 |
|---|---|
| `home` | ホームページ |
| `guide` | ガイドページ |
| `api` | API リファレンスページ |
| `testing` | テストページ |
| `why` | Why Chasket ページ |
| `layout` | ナビバー・フッター・シェル |
| `i18n` | i18n システム・翻訳ファイル |
| `postbuild` | postbuild スクリプト |
| (省略) | 複数ページにまたがる場合 |

### 例

```
feat(guide): テンプレート構文セクションを追加
fix(layout): ナビバーのスクロール位置を修正
style(home): ヒーローセクションのレスポンシブ対応
i18n(api): API リファレンスの英語翻訳を完了
build: Cloudflare Pages のキャッシュヘッダーを最適化
refactor(testing): テストセクションをサブコンポーネントに分割
```

## バージョニング

[Semantic Versioning 2.0.0](https://semver.org/) に準拠。

- `1.0.0`: 初回公開リリース
- `1.1.0`: 新ページ追加
- `1.0.1`: バグ修正・翻訳修正

## 実装ルール

### コンポーネント命名規則

- すべて `csk-` プレフィックス
- ページコンポーネント: `csk-page-{ページ名}` (例: `csk-page-guide`)
- セクションコンポーネント: `csk-{ページ名}-{セクション名}` (例: `csk-guide-template`)
- レイアウトコンポーネント: `csk-{機能名}` (例: `csk-navbar`, `csk-footer`)
- 共有コンポーネント: `csk-{機能名}` (例: `csk-copy-btn`)

### ディレクトリ構造

```
src/
├── layout/              ← サイト共通レイアウト
│   ├── csk-navbar.csk
│   ├── csk-footer.csk
│   └── csk-shell.csk
├── pages/               ← ページごとにディレクトリ分割
│   ├── home/
│   ├── guide/
│   ├── api/
│   ├── testing/
│   └── why/
└── shared/              ← 共有コンポーネント
    └── csk-copy-btn.csk
```

### i18n

- 翻訳関数: `window.__t(key)` でキー参照
- ロケール切替: `window.__i18n_setLocale(locale)`
- 翻訳ファイル: `i18n/{locale}.js`
- 対応言語: `ja` (デフォルト), `en`

### ビルド・デプロイ

- ビルド: `npm run build` → `chasket build` + `postbuild.js`
- デプロイ方式: プリビルド（ローカルでビルド → `dist/chasket-bundle.js` をコミット → CF Pages が静的配信）
- postbuild: シンタックスハイライト注入、テーマパッチ等

## 開発環境

- Node.js 18+
- Chasket CLI (`@aspect/chasket`)
- 外部ランタイム依存なし

### ローカルの chasket リポを使う場合

chasket コンパイラをローカルで開発中の場合、npm のオーバーライドで切り替えられます。

```bash
# package.json を直接編集せず、npm link を使用
cd ../chasket/chasket-cli && npm link
cd ../chasket.dev && npm link @aspect/chasket
```

`package.json` の `devDependencies` は GitHub リポ参照のままにしてください。`file:` パスはコミットしないでください。
