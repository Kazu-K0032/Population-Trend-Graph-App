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
  // 選択された都道府県コードの配列
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);
  // 選択された都道府県の人口データ一覧
  const [populationList, setPopulationList] = useState<PopulationData[]>([]);

  /**
   * グラフデータ
   * @see - https://www.chartjs.org/docs/latest/general/colors.html#per-dataset-color-settings
   */
  const dataset = populationList.map((dataset) => {
    return {
      label: dataset.prefName,
      data: dataset.data.map((item) => item.value),
      backgroundColor: dataset.color,
      borderColor: dataset.color,
      borderWidth: 2,
    };
  });
  const data = {
    labels: populationList[0]?.data?.map((item) => item.year),
    datasets: dataset,
  };

  /**
   * グラフオプションの設定
   * @see - https://www.chartjs.org/docs/latest/api/interfaces/CoreChartOptions.html
   */
  const options = {
    responsive: true, // レスポンシブ対応
    animation: {
      duration: 500, // アニメーション時間(ms)
      easing: "easeInOutQuad",
      loop: false, // アニメーションをループしない
    },
    hover: {
      mode: "nearest", // マウスカーソルに最も近いデータポイントをハイライト
      intersect: false, // マウスオーバー付近のデータをハイライト
      animationDuration: 300, // アニメーション時間(ms)
    },
    scales: {
      y: {
        beginAtZero: true, // Y軸の最小値[true=0]
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
