"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items = [], onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2 text-white">Sort Items</h2>
      <div className="mb-4 space-x-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-gray-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-gray-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
      </div>
      <ul>
      {sortedItems.map((item, index) => (
  <Item
    key={item.id || index} 
    name={item.name}
    quantity={item.quantity}
    category={item.category}
    onSelect={onItemSelect}
  />
))}
      </ul>
    </div>
  );
}