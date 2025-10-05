# Population-Trend-Graph-App

[English](./docs/lang/en.md) | 日本語

都道府県別の人口推移グラフ表示アプリ

## RESAS API のサービス終了に関して

RESAS API の新規作成は**2024 年 10 月 31 日**までになります。

**2025 年 3 月 24 日**をもって、RESAS API のすべてのサービスの提供が終了します

参考：[RESAS API の提供終了・新規利用申し込み停止について](https://opendata.resas-portal.go.jp/docs/api/v1/index.html)

## デプロイ

https://population-trend-graph-app.vercel.app/

## 導入方法

```bash
git clone <repository>
cd Population-Trend-Graph-App
```

## 依存関係のインストール

```bash
pnpm install

# または
npm install
```

### 環境変数の設定

`.env.local` を作成してください。

```bash
# .env.local
VITE_APP_API_URL=https://opendata.resas-portal.go.jp
VITE_APP_API_KEY=上記URLにて、ご自分で作成したRESASのapikeyを設定してください。
```

### 起動方法

```bash
pnpm dev
# または
npm run dev
```
