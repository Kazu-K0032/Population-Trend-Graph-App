interface SelectorProps<T> {
  value: string | number | undefined; // 現在の選択値
  addClass?: string; // 追加のCSSクラス
  id?: string; // selectタグのID
  options: T[]; // オプション配列
  changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void; // onChangeハンドラ
  getOptionLabel: (option: T) => string; // オプションのラベル (option要素の表示文字列) を返す関数
  getOptionValue: (option: T) => string | number; // オプションの value (option要素のvalue属性) を返す関数
}

export default function Selector<T>({
  value,
  addClass = "",
  id,
  options,
  changeHandler,
  getOptionLabel,
  getOptionValue,
}: SelectorProps<T>) {
  return (
    <select
      id={id}
      value={value}
      onChange={changeHandler}
      className={`c-select ${addClass}`}
    >
      {options.map((option, index) => {
        const optionValue = getOptionValue(option);
        const optionLabel = getOptionLabel(option);

        return (
          <option key={index} value={optionValue} className="c-select__option">
            {optionLabel}
          </option>
        );
      })}
    </select>
  );
}
