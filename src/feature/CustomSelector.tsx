import SelectItem from "../components/SelectItem";
import Label from "../components/Label";

interface CustomSelectorProps<T> {
  id: string; // ラベルやセレクターに付与するID
  label: string; // セクションタイトル等に使うラベル
  value: string | number | undefined; // 現在選択されている値
  options: T[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // セレクトタグの onChange イベントハンドラ
  getOptionLabel: (option: T) => string; // オプション表示用の文字列を取得する関数
  getOptionValue: (option: T) => string | number; // オプションの value 属性を取得する関数
  className?: string; // セレクトタグの追加CSSクラス（任意）
  wrapperClassName?: string; // ラベル+セレクトを囲むラッパーのCSSクラス（任意）
}

function CustomSelector<T>({
  id,
  label,
  value,
  options,
  onChange,
  getOptionLabel,
  getOptionValue,
  className = "",
  wrapperClassName = "",
}: CustomSelectorProps<T>) {
  return (
    <div className={`p-selector ${wrapperClassName}`}>
      <Label htmlFor={id} label={label} addClass="p-selector__label" />
      <SelectItem<T>
        id={id}
        value={value}
        addClass={`p-selector__option ${className}`}
        options={options}
        changeHandler={onChange}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
      />
    </div>
  );
}

export default CustomSelector;
