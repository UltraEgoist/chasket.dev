# chasket.dev

[Chasket](https://github.com/UltraEgoist/chasket) 公式ドキュメントサイトのソースコード。
Chasket 自身で構築された SPA で、Cloudflare Pages にデプロイされています。

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

プリビルド方式を採用。ローカルで `npm run build` → `dist/chasket-bundle.js` をコミット → Cloudflare Pages が静的配信。

## ライセンス

[MIT](./LICENSE)
