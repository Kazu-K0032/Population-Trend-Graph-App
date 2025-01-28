import { useState, useEffect } from 'react';

export default function CheckItem({
  id,
  name,
  isChecked: initialChecked,
  addClass = '',
  onChange,
  disabled = false,
}: CheckItemProps) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  useEffect(() => {
    setIsChecked(initialChecked);
  }, [initialChecked]);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  addClass = addClass !== '' ? addClass + ' ' : '';

  return (
    <div className={`${addClass}c-check${isChecked ? ' --checked' : ''}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="c-check__box"
        disabled={disabled}
      />
      <label htmlFor={id} className="c-check__label">
        {name}
      </label>
    </div>
  );
}
