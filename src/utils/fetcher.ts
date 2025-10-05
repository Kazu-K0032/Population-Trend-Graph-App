const BASE_URL = 'https://api.e-stat.go.jp/rest/2.0/app/json';

if (!import.meta.env.VITE_APP_ESTAT_APP_ID) {
  throw new Error('VITE_APP_ESTAT_APP_ID がセットされていません');
}

export const createRequest = (
  resource: RequestInfo,
  init: RequestInit = {}
): Request => {
  // URLの生成
  const input = BASE_URL.match(/^https?:\/\//i)
    ? `${BASE_URL}${resource}`
    : resource;

  // ヘッダーの作成とマージ
  const headers = new Headers(
    init.headers instanceof Headers ? [...init.headers] : init.headers
  );
  headers.append('content-type', 'application/json');

  // リクエストの作成
  const request = new Request(input, { ...init, headers });

  return request;
};
