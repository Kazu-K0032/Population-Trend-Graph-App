/**
 * ランダムな色を返す関数
 *
 * @param {string[]} existingColorList - setRandomColor関数を通じて既に登場した色のリスト. 連続して当該関数を使用する際に色が被らないようにする引数です。
 * @returns {string} - ランダムな色
 */
export function setRandomColor(existingColorList: string[] = []): string {
  const getRandomValue = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let color: string;

  do {
    const r = getRandomValue(100, 255);
    const b = getRandomValue(100, 255);
    const g = getRandomValue(100, 255);
    const a = 1;
    color = `rgba(${r}, ${g}, ${b}, ${a})`;
  } while (existingColorList.includes(color));
  return color;
}
