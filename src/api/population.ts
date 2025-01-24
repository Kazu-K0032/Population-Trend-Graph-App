import { createRequest } from "../utils/fetcher";

/**
 * 都道府県コードから、総人口データを取得する関数
 * @returns 都道府県データ
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html - RESAS API_人口構成
 */
export async function fetchPopulation(prefCode: number) {
  const path = `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
  const response = await fetch(
    createRequest(path, {
      method: "GET",
    })
  );
  if (!response.ok) {
    throw new Error("人口データの取得に失敗しました");
  }
  const json = await response.json();
  const populationData = json.result.data.find(
    (d: any) => d.label === "総人口"
  );
  return populationData?.data ?? [];
}
