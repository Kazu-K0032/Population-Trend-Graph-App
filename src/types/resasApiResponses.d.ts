// 1都道府県(prefCode: コード, prefName: 都道府県名)の型
type Prefecture = {
  prefCode: number;
  prefName: string;
};

// 1都道府県の人口構成(year: 年, value: 人口)の型
type YearValue = {
  year: number;
  value: number;
};

// グラフに表示する1都道府県のデータセットの型
type PopulationData = Prefecture & {
  data: YearValue[];
  color: string;
};

// アクティブ状態の都道府県リストの型
type PrefListProps = {
  selectedPrefCodes: number[];
  setSelectedPrefCodes: Dispatch<SetStateAction<number[]>>;
  setPopulationList: Dispatch<SetStateAction<PopulationData[]>>;
  addClass?: string;
  mode: Mode;
};

// モードの型
type Mode = "総人口" | "年少人口" | "生産年齢人口" | "老年人口";
