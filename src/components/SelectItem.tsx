export default function SelectItem({
  name,
  initOption,
  optionList,
}: SelectItemProps) {
  return (
    <select name={name} id={`${name}-select`}>
      <option value={initOption.value} className={initOption.class}>
        {initOption.name}
      </option>
      {optionList.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={option.class}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}
