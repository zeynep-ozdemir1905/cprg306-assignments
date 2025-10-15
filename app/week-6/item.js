export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 border-b border-gray-300">
      <strong>{name}</strong> — {quantity} ({category})
    </li>
  );
}
