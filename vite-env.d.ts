/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_API_KEY: string;
  // 他の環境変数を追加する場合はここに記載
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
