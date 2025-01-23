import { createRequest } from "../utils/fetcher";

/**
 * RESAS API で提供している都道府県データを取得する関数
 * @returns 都道府県データ
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html - RESAS API_都道府県一覧
 */
export async function fetchPrefectures() {
  const path = "/api/v1/prefectures";

  const response = await fetch(
    createRequest(path, {
      method: "GET",
    })
  );
  if (!response.ok) {
    throw new Error("都道府県データの取得に失敗しました");
  }
  const json = await response.json();
  return json.result;
}
