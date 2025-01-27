import { useState } from "react";
import CustomSelector from "../feature/CustomSelector";
import TotalPopulation from "./TotalPopulation";
import { modeList } from "../utils/chartOptions";

export default function Main() {
  // グラフモードの管理
  const [sortOption, setSortOption] = useState<Mode>("総人口");

  // モードハンドリング
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Mode;
    // console.log("graphMode", value);
    setSortOption(value);
  };

  return (
    <div>
      <main className="l-main">
        <div className="l-main__inner">
          <div className="l-sectionWrap">
            <section className="l-section">
              <h2 className="c-mainTtl">モード</h2>
              <CustomSelector<SelectItemProps>
                id="mode-select"
                label="モード"
                value={sortOption}
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

            {sortOption === "総人口" && <TotalPopulation mode={sortOption} />}
          </div>
        </div>
      </main>
    </div>
  );
}
