import { prefectures } from '../utils/mock';

/**
 * e-Stat APIでは都道府県データを直接取得できないため、静的なデータを使用
 * @returns 都道府県データ
 */
export async function fetchPrefectures() {
  // e-Stat APIでは都道府県一覧を直接取得できないため、静的なデータを返す
  return prefectures;
}
