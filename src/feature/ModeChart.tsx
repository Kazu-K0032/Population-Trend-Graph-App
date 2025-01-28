import { Line } from 'react-chartjs-2';
import { getDataset, chartOptions } from '../utils/chartOptions';
import { ChartData } from 'chart.js';

type ModeChartProps = {
  populationList: PopulationData[];
  mode: Mode;
  loading?: boolean;
};

export default function ModeChart({
  populationList,
  mode,
  loading = false,
}: ModeChartProps) {
  const chartData: ChartData<'line'> = getDataset(populationList, mode);

  return (
    <div className={`l-chart${loading ? ' --loading' : ''}`}>
      <Line
        data={chartData}
        options={chartOptions}
        className="l-chart__graph"
      />
      {loading && <p className="l-chart__loadingTxt c-mdTtl">Loading...</p>}
    </div>
  );
}
