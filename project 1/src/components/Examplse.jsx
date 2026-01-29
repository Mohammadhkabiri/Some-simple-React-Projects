export default function Example(Props) {
  return (
    <li>
      <button className={Props.isSelected ? "active" : undefined} onClick={Props.onSelect}>{Props.description}</button>
    </li>
  );
}
