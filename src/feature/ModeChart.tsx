import { Line } from "react-chartjs-2";
import { getDataset, chartOptions } from "../utils/chartOptions";
import { ChartData } from "chart.js";

type ModeChartProps = {
  populationList: PopulationData[];
  mode: Mode;
};

export default function ModeChart({ populationList, mode }: ModeChartProps) {
  const chartData: ChartData<"line"> = getDataset(populationList, mode);

  return (
    <div>
      <Line data={chartData} options={chartOptions} className="l-chart" />
    </div>
  );
}
