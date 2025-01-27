import { useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type TotalPopulationProps = {
  mode: Mode;
};

export default function TotalPopulation({ mode }: TotalPopulationProps) {
  // 選択された都道府県コードの配列
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);
  // 選択された都道府県の人口データ一覧
  const [populationList, setPopulationList] = useState<PopulationData[]>([]);
  return (
    <>
      <section className="l-section">
        <h2 className="c-mainTtl">都道府県</h2>
        <PrefList
          selectedPrefCodes={selectedPrefCodes}
          setSelectedPrefCodes={setSelectedPrefCodes}
          setPopulationList={setPopulationList}
          addClass="--homePage"
        />
      </section>

      {selectedPrefCodes.length > 0 && populationList.length > 0 ? (
        <section className="l-section">
          <h2 className="c-mainTtl">グラフ</h2>
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
