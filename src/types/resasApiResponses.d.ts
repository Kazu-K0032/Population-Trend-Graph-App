type Prefecture = {
  code: number;
  name: string;
};

type CheckItemProps = {
  id: string;
  name: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

type YearValue = {
  year: number;
  value: number;
};

// API から取得したデータの型
type PopulationData = {
  prefCode: number;
  prefName: string;
  data: YearValue[];
  color: string;
};

type PrefListProps = {
  selectedPrefCodes: number[];
  setSelectedPrefCodes: Dispatch<SetStateAction<number[]>>;
  setPopulationList: Dispatch<SetStateAction<PopulationData[]>>;
};
