// ラベルの型
type Label = {
  htmlFor: string; // ラベルやセレクターに付与するID
  label: string; // ラベルの文章
  addClass?: string; // 追加クラス名
};

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
  label: string;
  value: string;
};
