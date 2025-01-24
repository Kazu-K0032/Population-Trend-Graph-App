// チェックボックスの型
type CheckItemProps = {
  id: string;
  name: string;
  isChecked: boolean;
  addClass?: string;
  onChange: (checked: boolean) => void;
};

// セレクト タグの型
type SelectItemProps = {
  name: string;
  initOption: {
    value: string;
    name: string;
    class?: string;
  };
  optionList: {
    value: string;
    name: string;
    class?: string;
  }[];
  // onChange: (selectdValue: string) => void;
};
