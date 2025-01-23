import CheckItem from "../../components/CheckItem";
import { fetchPopulation } from "../../api/population";
import { setRandomColor } from "../../utils/chartOptions";
import { useEffect, useState } from "react";
import { prefectures } from "../../utils/mock";

export default function PrefList({
  selectedPrefCodes,
  setSelectedPrefCodes,
  setPopulationList,
}: PrefListProps) {
  const [existingColorList, setExistingColorList] = useState<string[]>([]);

  useEffect(() => {
    // デバッグ用
    console.log("existingColorList：", existingColorList);
  }, [existingColorList]);

  // チェック切り替えハンドラ
  const handleChange = async (
    prefCode: number,
    prefName: string,
    checked: boolean
  ) => {
    if (checked) {
      // チェックした場合の処理
      setSelectedPrefCodes((prev: number[]) => [...prev, prefCode]);

      // 人口データを取得してステートに格納
      try {
        const popData = await fetchPopulation(prefCode);
        const color = setRandomColor();
        setExistingColorList((prevColor) => [...prevColor, color]);
        setPopulationList((prev: PopulationData[]) => [
          ...prev,
          {
            prefCode,
            prefName,
            data: popData,
            color: setRandomColor(existingColorList),
          },
        ]);
      } catch (err) {
        console.error("人口データ取得に失敗しました", err);
      }

      // カラー
    } else {
      // チェックが OFF になった
      setSelectedPrefCodes((prev: number[]) =>
        prev.filter((code) => code !== prefCode)
      );
      setPopulationList((prev: PopulationData[]) =>
        prev.filter((p) => p.prefCode !== prefCode)
      );
    }
  };

  // 選択されているかどうかを取得
  const isChecked = (prefCode: number) => selectedPrefCodes.includes(prefCode);

  return (
    <div>
      <ul className="l-prefList">
        {prefectures.map((pref) => (
          <li key={pref.code} className="l-prefList__item">
            <CheckItem
              id={`check-${pref.code}`}
              name={pref.name}
              isChecked={isChecked(pref.code)}
              onChange={(checked) =>
                handleChange(pref.code, pref.name, checked)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
