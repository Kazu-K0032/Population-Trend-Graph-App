import CheckItem from "../../components/CheckItem";
import { fetchPopulation } from "../../api/population";
import { setRandomColor } from "../../utils/setRandomColor";
import { useEffect, useState } from "react";
import { prefectures as mockPrefectures } from "../../utils/mock";
import { fetchPrefectures } from "../../api/prefectures";

export default function PrefList({
  selectedPrefCodes,
  setSelectedPrefCodes,
  setPopulationList,
  addClass = "",
}: PrefListProps) {
  const [existingColorList, setExistingColorList] = useState<string[]>([]);
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  addClass = addClass !== "" ? " " + addClass : "";

  useEffect(() => {
    // 都道府県リストの取得
    const fetchData = async () => {
      try {
        const data = await fetchPrefectures();
        setPrefectures(data);
      } catch (error: any) {
        console.error("fetchエラー", error.message);
        setPrefectures(mockPrefectures);
      }
    };
    fetchData();
  }, []);

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
    <ul className={`l-prefList${addClass}`}>
      {prefectures.map((pref) => (
        <li key={pref.prefCode} className="l-prefList__item">
          <CheckItem
            id={`check-${pref.prefCode}`}
            name={pref.prefName}
            isChecked={isChecked(pref.prefCode)}
            addClass="l-prefList__checkBox"
            onChange={(checked) =>
              handleChange(pref.prefCode, pref.prefName, checked)
            }
          />
        </li>
      ))}
    </ul>
  );
}
