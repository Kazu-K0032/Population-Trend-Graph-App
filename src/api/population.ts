import { createRequest } from "../utils/fetcher";

// 都道府県コードを引数にとり、RESAS APIから総人口データを取得する関数
export async function fetchPopulation(prefCode: number) {
  // cityCode = '-' で「すべての市区町村」を指定
  const path = `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;

  // createRequest でリクエストを作成
  const request = createRequest(path, {
    method: "GET",
  });

  // fetch でリクエストを送る
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error("人口データの取得に失敗しました");
  }

  // レスポンス JSON を取得
  const json = await response.json();
  // 総人口データ(label==="総人口")を取り出す
  // json.result.data[] の中から label === "総人口" のものを探して返す
  const populationData = json.result.data.find(
    (d: any) => d.label === "総人口"
  );
  // year, value の配列を返す（例: [{ year: 1980, value: 12817 }, ...]）
  return populationData?.data ?? [];
}
