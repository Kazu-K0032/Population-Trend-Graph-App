import { useState } from "react";
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
import { Line } from "react-chartjs-2";
import PrefList from "../feature/front/PrefList";

// Chart.jsのコンポーネントを登録（コンポーネント外で実行）
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Main() {
  // 選択している都道府県コードの配列
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);
  // 選択された都道府県の人口データ一覧
  const [populationList, setPopulationList] = useState<PopulationData[]>([]);
  // グラフデータ
  const [chartDatasets, setChartDatasets] = useState<PopulationData[]>([]);

  console.log("選択されたコード", selectedPrefCodes);
  console.log("総人口：", populationList);

  const sampleDatasets = [
    {
      label: "北海道",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 12],
      backgroundColor: "red",
      borderColor: "black",
      borderWidth: 1,
    },
  ];

  const enphance = populationList.map((dataset) => {
    return {
      label: dataset.prefName,
      data: dataset.data.map((item) => item.value),
      backgroundColor: "red",
      borderColor: "black",
      borderWidth: 1,
    };
  });

  // グラフデータ
  const data = {
    labels: populationList ? populationList[0]?.data?.map((item) => item.year) : ["1", "2"], // X軸ラベル
    datasets: enphance,
  };

  // グラフオプション
  const options = {
    responsive: true, // レスポンシブ対応
    plugins: {
      legend: {
        display: true, // 凡例を表示
        position: "top" as const,
      },
      tooltip: {
        enabled: true, // ツールチップを有効化
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y軸の最小値を0に設定
      },
    },
  };

  return (
    <div>
      <main className="l-main">
        <div className="l-main__inner">
          <div className="l-sectionWrap">
            <section className="l-section">
              <h2 className="c-mainTtl">都道府県</h2>
              <PrefList
                selectedPrefCodes={selectedPrefCodes}
                setSelectedPrefCodes={setSelectedPrefCodes}
                populationList={populationList}
                setPopulationList={setPopulationList}
              />
            </section>

            <section className="l-section">
              <h2 className="c-mainTtl">グラフ</h2>
              <div>
                <Line data={data} options={options} />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
