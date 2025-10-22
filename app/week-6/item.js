export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 border rounded-md shadow-sm bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-between">
      {/* prodouct name */}
      <span className="font-semibold text-gray-700 w-1/3">{name}</span>

      {/* quantity*/}
      <span className="text-black-700 text-center w-1/3">quantity: {quantity}</span>

      {/* category */}
      <span className="italic text-sm text-black-600 text-right w-1/3">
        {category}
      </span>
    </li>
 );
}
