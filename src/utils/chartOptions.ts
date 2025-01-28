import { ChartData, ChartOptions } from "chart.js";

// RESAS API で提供されているモード
export const modeList: Mode[] = [
  "総人口",
  "年少人口",
  "生産年齢人口",
  "老年人口",
];

/**
 * グラフオプションの設定
 * @see https://www.chartjs.org/docs/latest/api/interfaces/CoreChartOptions.html
 * @see https://www.chartjs.org/docs/latest/general/options.html - optionの型
 */
export const chartOptions: ChartOptions<"line"> = {
  responsive: true, // レスポンシブ対応
  maintainAspectRatio: false, //表の幅を親要素に合わせる
  aspectRatio: 2,
  scales: {
    y: {
      // y軸の設定
      title: {
        display: true,
        text: "人口数（人）",
        color: "#000",
        font: {
          // タイトル
          size: 16,
          weight: 500,
        },
        align: "center",
      },
      ticks: {
        // y軸の各値の設定
        callback: (value) => {
          // ミリオン(m)にする
          const numValue = Number(value);
          return numValue / 1_000_000 + "m";
        },
        color: "#000",
      },
    },
    x: {
      // x軸の設定
      position: "bottom",
      title: {
        display: true,
        text: "年度（年）",
        color: "#000",
        font: {
          size: 18,
        },
        padding: {
          top: 2,
        },
      },
      ticks: {
        // x軸の各値の設定
        font: {
          size: 12,
        },
        color: "#000",
      },
    },
  },
  plugins: {
    legend: {
      // ラベルの設定
      position: "bottom",
      labels: {
        font: {
          size: 12,
        },
        color: "#000",
      },
    },
    tooltip: {
      // データポイントホバー時のポップアップのスタイル設定
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#fff",
      borderWidth: 1,
      cornerRadius: 6, // 角丸
      displayColors: false, // カラーボックスを非表示
      titleFont: {
        size: 14,
        weight: "bold",
      },
      bodyFont: {
        size: 12,
      },
    },
  },
  animation: {
    // 表に値が追加される際のアニメーション設定
    duration: 500,
    easing: "easeInOutQuad",
  },
  hover: {
    // 表の値ホバー時の設定
    mode: "point",
    intersect: false,
  },
  transitions: {
    active: {
      // 特定データポイントにカーソルを当てた時の設定
      animation: {
        duration: 200,
        easing: "easeInOutQuad",
      },
    },
  },
};

/**
 * グラフデータ
 * @see - https://www.chartjs.org/docs/latest/general/colors.html#per-dataset-color-settings
 */
export function getDataset(
  populationList: PopulationData[],
  mode: Mode
): ChartData<"line"> {
  return {
    labels: populationList[0]?.data?.map((item) => item.year),
    datasets: populationList.map((dataset) => {
      return {
        label: dataset.prefName,
        data: dataset.data.map((item) => item.value),
        backgroundColor: dataset.color,
        borderColor: dataset.color,
        borderWidth: 2,
      };
    }),
  };
}
