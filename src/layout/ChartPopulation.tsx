import { useEffect, useState } from 'react';
import PrefList from '../feature/PrefList';
import ModeChart from '../feature/ModeChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { fetchPopulation } from '../api/population';
import CustomSelector from '../feature/CustomSelector';
import { modeList } from '../utils/chartOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function ChartPopulation() {
  // 選択された都道府県コードの配列
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([]);
  // 選択された都道府県の人口データ一覧
  const [populationList, setPopulationList] = useState<PopulationData[]>([]);
  // グラフモードの管理
  const [mode, setMode] = useState<Mode>('総人口');

  // モードハンドリング
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Mode;
    // console.log("graphMode", value);
    setMode(value);
  };

  useEffect(() => {
    if (selectedPrefCodes.length === 0) return;

    const updatePopulationByMode = async () => {
      try {
        // 既存都道府県は維持しつつ、fetchで取得されるデータのみ更新する
        const updateList = await Promise.all(
          populationList.map(async (item) => {
            const data = await fetchPopulation(item.prefCode, mode);
            return {
              ...item,
              data: data,
            };
          }),
        );
        setPopulationList(updateList);
      } catch (err) {
        console.error('モードを切り替えた時の再取得に失敗しました。', err);
      }
    };
    updatePopulationByMode();
  }, [mode]);

  return (
    <>
      <section className="l-section">
        <h2 className="c-lgTtl">都道府県</h2>
        <PrefList
          selectedPrefCodes={selectedPrefCodes}
          setSelectedPrefCodes={setSelectedPrefCodes}
          setPopulationList={setPopulationList}
          addClass="--homePage"
          mode={mode}
        />
      </section>

      {selectedPrefCodes.length > 0 && populationList.length > 0 ? (
        <section className="l-section">
          <h2 className="c-lgTtl">グラフ（{mode}）</h2>
          <CustomSelector<SelectItemProps>
            id="mode-select"
            label="モード"
            value={mode}
            options={modeList.map((mode) => ({
              label: mode,
              value: mode,
            }))}
            onChange={handleSortChange}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            wrapperClassName="l-selector"
            className="l-selector__select"
          />
          <ModeChart populationList={populationList} mode={mode} />
        </section>
      ) : (
        <section className="l-section">
          <h2 className="c-lgTtl">都道府県を選択してください</h2>
          <CustomSelector<SelectItemProps>
            id="mode-select"
            label="モード"
            value={mode}
            options={modeList.map((mode) => ({
              label: mode,
              value: mode,
            }))}
            onChange={handleSortChange}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            wrapperClassName="l-selector"
            className="l-selector__select"
          />
        </section>
      )}
    </>
  );
}
