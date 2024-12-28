// src/layout/Main.tsx

import { useState } from "react";
import PrefList from "../feature/front/PrefList";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

type PopulationData = {
  prefCode: number;
  prefName: string; // 都道府県名を持たせる（表示用）
  data: { year: number; value: number }[];
};

export default function Main() {
  // 選択している都道府県コードの配列
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);
  // 選択された都道府県の人口データ一覧
  const [populationList, setPopulationList] = useState<PopulationData[]>([]);

  return (
    <div>
      <main className="l-main">
        <div className="l-main__inner">
          <div className="l-sectionWrap">
            <section className="l-section">
              <h2 className="c-mainTtl">都道府県</h2>
              {/*
                PrefList にステートとステート更新関数を渡す
                PrefList からはチェックの ON/OFF でこれらを更新してもらう
              */}
              <PrefList
                selectedPrefCodes={selectedPrefCodes}
                setSelectedPrefCodes={setSelectedPrefCodes}
                populationList={populationList}
                setPopulationList={setPopulationList}
              />
            </section>

            <section className="l-section">
              <h2 className="c-mainTtl">グラフ</h2>

              {/* populationList に格納されている都道府県ごとにグラフを描画 */}
              {populationList.map((pop) => (
                <div key={pop.prefCode} style={{ marginBottom: "2rem" }}>
                  <h3>{pop.prefName} の総人口推移</h3>
                  <BarChart width={500} height={300} data={pop.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#82ca9d" />
                  </BarChart>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
