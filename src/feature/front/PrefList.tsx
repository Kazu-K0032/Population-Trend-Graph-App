// src/feature/front/PrefList.tsx
import { useState } from "react";
import CheckItem from "../../components/CheckItem";
import { fetchPopulation } from "../../api/population";

type Prefecture = {
  code: number;
  name: string;
};

const prefectures: Prefecture[] = [
  { code: 1, name: "北海道" },
  { code: 2, name: "青森県" },
  // ...
];

// API から取得したデータの型
type PopulationData = {
  prefCode: number;
  data: { year: number; value: number }[];
};

export default function PrefList() {
  // どの都道府県コードが選択中か
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);
  // 選択中の都道府県の人口データ一覧
  const [populationList, setPopulationList] = useState<PopulationData[]>([]);

  // チェック切り替えハンドラ
  const handleChange = async (prefCode: number, checked: boolean) => {
    if (checked) {
      // チェックが ON になった
      setSelectedPrefCodes((prev) => [...prev, prefCode]);

      // 人口データを取得してステートに格納
      try {
        const popData = await fetchPopulation(prefCode);
        // populationListに追加
        setPopulationList((prev) => [
          ...prev,
          {
            prefCode,
            data: popData,
          },
        ]);
      } catch (err) {
        console.error("人口データ取得に失敗しました", err);
      }
    } else {
      // チェックが OFF になった
      setSelectedPrefCodes((prev) => prev.filter((code) => code !== prefCode));
      setPopulationList((prev) => prev.filter((p) => p.prefCode !== prefCode));
    }
  };

  return (
    <div>
      <ul className="l-prefList">
        {prefectures.map((pref) => (
          <li key={pref.code} className="l-prefList__item">
            <CheckItem
              id={`check-${pref.code}`}
              name={pref.name}
              isChecked={false}
              onChange={(checked) => handleChange(pref.code, checked)}
            />
          </li>
        ))}
      </ul>

      <p>選択中の都道府県コード: {selectedPrefCodes.join(", ")}</p>

      {/* 人口データ表示 */}
      <div>
        {populationList.map((pop) => (
          <div key={pop.prefCode}>
            <h4>都道府県コード: {pop.prefCode}</h4>
            <ul>
              {pop.data.map((d) => (
                <li key={d.year}>
                  {d.year} 年: {d.value} 人
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
