## RESAS APIのサービス終了に関して
RESAS APIの新規作成は**2024年10月31日**までになります。

**2025年3月24日**をもって、RESAS APIのすべてのサービスの提供が終了します

参考：[RESAS APIの提供終了・新規利用申し込み停止について](https://opendata.resas-portal.go.jp/docs/api/v1/index.html)

## デプロイ
https://population-trend-graph-app.vercel.app/


## 導入方法

```bash
git clone https://github.com/kujiKazuaki/population-trend-graph-app.git
cd population-trend-graph-app
npm ci # または npm install
```

### 環境変数の設定

`.env.local` を作成してください。

```bash
# .env.local
REACT_APP_API_URL=https://opendata.resas-portal.go.jp
REACT_APP_API_KEY=上記URLにて、ご自分で作成したRESASのapikeyを設定してください。
```

### 起動方法

```bash
npm run dev
```
