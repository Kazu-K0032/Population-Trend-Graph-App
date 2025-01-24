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
import { chartOptions, getDataset } from "../utils/chartOptions";
import SelectItem from "../components/SelectItem";

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
  // グラフ化するために必要なデータセット
  const dataset = getDataset(populationList);

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
                addClass="--homePage"
              />
            </section>

            {selectedPrefCodes.length > 0 ? (
              <section className="l-section">
                <h2 className="c-mainTtl">グラフ</h2>
                <SelectItem
                  name="mode"
                  optionList={[
                    { value: "total-population", name: "総人口" },
                    { value: "juvenile-population", name: "年少人口" },
                    { value: "working-age-population", name: "生産年齢人口" },
                    { value: "elderly-population", name: "老年人口" },
                  ]}
                  initOption={{ value: "total-population", name: "総人口" }}
                />
                <div>
                  <SelectItem
                    name="mode"
                    optionList={[
                      { value: "total-population", name: "総人口" },
                      { value: "juvenile-population", name: "年少人口" },
                      { value: "working-age-population", name: "生産年齢人口" },
                      { value: "elderly-population", name: "老年人口" },
                    ]}
                    initOption={{ value: "total-population", name: "総人口" }}
                  />
                  <Line
                    data={dataset}
                    options={chartOptions}
                    className="l-chart"
                  />
                </div>
              </section>
            ) : (
              <section className="l-section">
                <h2 className="c-mainTtl">都道府県を選択してください</h2>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
