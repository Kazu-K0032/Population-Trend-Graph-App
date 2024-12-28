// src/components/CheckItem.tsx
import { useState, useEffect } from "react";

export default function CheckItem({
  id,
  name,
  isChecked: initialChecked,
  onChange,
}: CheckItemProps) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  useEffect(() => {
    setIsChecked(initialChecked);
  }, [initialChecked]);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked); // 親に「チェックした」「外した」を通知
  };

  return (
    <div className={`c-check${isChecked ? " --checked" : ""}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="c-check__box"
      />
      <label htmlFor={id} className="c-check__label">
        {name}
      </label>
    </div>
  );
}
