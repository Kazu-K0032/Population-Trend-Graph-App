import { useEffect, useState } from "react";
import PrefList from "../feature/front/PrefList";
import ModeChart from "../feature/ModeChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchPopulation } from "../api/population";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartPopulationProps = {
  mode: Mode;
};

export default function ChartPopulation({ mode }: ChartPopulationProps) {
  // 選択された都道府県コードの配列
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);
  // 選択された都道府県の人口データ一覧
  const [populationList, setPopulationList] = useState<PopulationData[]>([]);

  useEffect(() => {
    if (selectedPrefCodes.length === 0) return;

    const updatePopulationByMode = async () => {
      try {
        // 既存都道府県は維持しつつ、fetchで取得されるデータのみ更新する
        const updateList = await Promise.all(
          populationList.map(async (item) => {
            const data = await fetchPopulation(item.prefCode, mode);
            return {
              ...item,
              data: data,
            };
          })
        );
        setPopulationList(updateList);
      } catch (err) {
        console.error("モードを切り替えた時の再取得に失敗しました。", err);
      }
    };
    updatePopulationByMode();
  }, [mode]);

  return (
    <>
      <section className="l-section">
        <h2 className="c-mainTtl">都道府県</h2>
        <PrefList
          selectedPrefCodes={selectedPrefCodes}
          setSelectedPrefCodes={setSelectedPrefCodes}
          setPopulationList={setPopulationList}
          addClass="--homePage"
          mode={mode}
        />
      </section>

      {selectedPrefCodes.length > 0 && populationList.length > 0 ? (
        <section className="l-section">
          <h2 className="c-mainTtl">グラフ（{mode}）</h2>
          <div>
            <ModeChart populationList={populationList} mode={mode} />
          </div>
        </section>
      ) : (
        <section className="l-section">
          <h2 className="c-mainTtl">都道府県を選択してください</h2>
        </section>
      )}
    </>
  );
}
