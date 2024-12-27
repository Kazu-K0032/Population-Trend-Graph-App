import { useState } from "react";

type CheckItemProps = {
  id: string;
  name: string;
  isChecked: boolean;
};

export default function CheckItem({
  id,
  name,
  isChecked: initialChecked,
}: CheckItemProps) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  return (
    <div>
      <div className="c-check">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="c-check__box"
        />
        <label htmlFor={id} className="c-check_label">
          {name}
        </label>
      </div>
    </div>
  );
}
