/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ESTAT_APP_ID: string;
  readonly VITE_APP_USE_MOCK_DATA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
