"use client";
export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="p-3 border rounded-md shadow-sm bg-gradient-to-r bg-gray-700 flex items-center justify-between cursor-pointer hover:bg-blue-200 transition"
    >
      <span className="font-semibold text-white w-1/3">{name}</span>
      <span className="text-white text-center w-1/3">
        quantity: {quantity}
      </span>
      <span className="italic text-sm text-white text-right w-1/3">
        {category}
      </span>
    </li>
  );
}
