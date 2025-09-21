export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 border rounded-md shadow-sm bg-white flex justify-between">
      <span className="font-semibold">{name}</span>
      <span className="text-gray-600">Qty: {quantity}</span>
      <span className="italic text-sm text-blue-500">{category}</span>
    </li>
  );
}

