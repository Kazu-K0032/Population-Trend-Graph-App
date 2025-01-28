export default function Label({ htmlFor, label, addClass = "" }: Label) {
  return (
    <label htmlFor={htmlFor} className={`c-label ${addClass}`}>
      {label}
    </label>
  );
}
