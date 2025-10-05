# Population-Trend-Graph-App

[English](./docs/lang/en.md) | 日本語

都道府県別の人口推移グラフ表示アプリ

## RESAS API のサービス終了に関して

RESAS API の新規作成は**2024 年 10 月 31 日**までになります。

**2025 年 3 月 24 日**をもって、RESAS API のすべてのサービスの提供が終了します

参考：[RESAS API の提供終了・新規利用申し込み停止について](https://opendata.resas-portal.go.jp/docs/api/v1/index.html)

**2025 年 10 月 5 日**に、RESAS API の代替 API として e-Stat API を使用しました。

※システムを正常に動かすことを優先したため、AI エージェントを使用しています。何か不具合があるかもしれません。

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
VITE_APP_ESTAT_APP_ID=あなたのe-StatアプリケーションID

# APIサービス終了時のフォールバック（オプション）
VITE_APP_USE_MOCK_DATA=false

# API URL（開発環境ではプロキシ、本番環境では直接アクセス）
VITE_APP_API_URL=/api/estat
```

**e-Stat API のアプリケーション ID 取得方法:**

1. [e-Stat API 機能ページ](https://www.e-stat.go.jp/api/api-dev/)にアクセス
2. ユーザー登録・ログイン
3. マイページ内の「API 機能（アプリケーション ID 発行）」からアプリケーション ID を取得

### 起動方法

```bash
pnpm dev
# または
npm run dev
```
