import { Line } from "react-chartjs-2";
import { chartOptions, getDataset } from "../utils/chartOptions";

type ModeChartProps = {
  populationList: PopulationData[];
};

export default function ModeChart({
  populationList,
}: ModeChartProps) {
  const chartData = getDataset(populationList);

  return (
    <div>
      <Line data={chartData} options={chartOptions} className="l-chart" />
    </div>
  );
}
