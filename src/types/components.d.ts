// ラベルの型
type Label = {
  htmlFor: string; // ラベルやセレクターに付与するID
  label: string; // ラベルの文章
  addClass?: string; // 追加クラス名
};

// チェックボックスの型
type CheckItemProps = {
  id: string; // inputタグのid属性およびlabelのhtmlFor属性
  name: string; // inputタグのname属性およびlabelの値
  isChecked: boolean; // チェックされたかどうか. trueならチェック済み
  addClass?: string; // input, labelタグを囲うdivタグに追加するクラス名
  onChange: (checked: boolean) => void; // チェックをトリガーとする関数
  disabled?: boolean; // ユーザーの追加操作を制御する(true - ユーザーは他の操作ができないようにする)
};

// セレクト タグの型
type SelectItemProps = {
  label: string; // ドロップダウンメニューで表示される文字列
  value: string; // value 属性に設定される文字列
};
