## デプロイ（DB 管理を含めない）

https://dckk0302.github.io/yumemi-frontend-coding-test/

## 導入方法

```bash
git clone https://github.com/dcKK0302/yumemi-frontend-coding-test.git
cd yumemi-frontend-coding-test
npm ci
```

### 環境変数の設定

`.env.local` を作成してください。

```bash
# .env.local
REACT_APP_API_URL=https://opendata.resas-portal.go.jp
REACT_APP_API_KEY=上記URLにて,ご自分で作成したRESASAPIのapikeyを設定してください。
```

### 起動方法

```bash
npm start
```
