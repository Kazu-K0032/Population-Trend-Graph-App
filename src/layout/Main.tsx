import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import PrefList from "../feature/front/PrefList";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.jsのコンポーネントを登録（コンポーネント外で実行）
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Main() {
  // 選択している都道府県コードの配列
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);
  // 選択された都道府県の人口データ一覧
  const [populationList, setPopulationList] = useState<PopulationData[]>([]);

  // グラフデータ
  const data = {
    labels: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ], // X軸ラベル
    datasets: [
      {
        label: "北海道",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 12],
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
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
                <h1>React + TypeScript Chart.js Example</h1>
                <Bar data={data} options={options} />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
