# chasket.dev

[Chasket](https://github.com/UltraEgoist/chasket) の公式ドキュメントサイトです。
Chasket で構築された SPA として動作し、Cloudflare Pages で公開しています。

## 構成

| ディレクトリ | 内容 |
|---|---|
| `src/` | `.csk` コンポーネントソース |
| `scripts/` | postbuild スクリプト（シンタックスハイライト等） |
| `i18n/` | 多言語対応ファイル (ja / en) |
| `dist/` | ビルド成果物（`chasket-bundle.js`） |
| `test/` | コンポーネントテスト |

## ローカル開発

```bash
npm install
npm run dev     # 開発サーバー起動
npm run build   # 本番ビルド
```

## デプロイ

プリビルド方式を採用しています。ローカルで `npm run build` を実行し、`dist/chasket-bundle.js` をコミットすると、Cloudflare Pages が静的ファイルとして配信します。

## ライセンス

[MIT](./LICENSE)
