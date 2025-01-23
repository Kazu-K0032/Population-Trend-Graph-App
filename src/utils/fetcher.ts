const BASE_URL = import.meta.env.VITE_APP_API_URL ?? "";

if (!BASE_URL) {
  throw new Error("VITE_APP_API_URL がセットされていません");
}

if (!import.meta.env.VITE_APP_API_KEY) {
  throw new Error("VITE_APP_API_KEY がセットされていません");
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
  headers.append("content-type", "application/json");

  if (!import.meta.env.VITE_APP_API_KEY) {
    throw new Error("VITE_APP_API_KEY がセットされていません。");
  }
  headers.append("X-API-KEY", import.meta.env.VITE_APP_API_KEY);

  // リクエストの作成
  const request = new Request(input, { ...init, headers });

  return request;
};
