"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { name, quantity, category };
    onAddItem(newItem);
    
    
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 shadow-md p-6 w-[400px] border flex flex-col space-y-4"
    >
      {/* Item Name */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Item Name
        </label>
        <input
          type="text"
          placeholder="e.g., milk 4L 🥛"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-white bg-gray-100 text-black"
          required
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm text-bold text-white mb-1">
          <p>Allowed Range: 1–20</p>
          <p>
            Current: <span className="font-bold">{quantity}</span>
          </p>
        </label>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 text-white font-bold transition rounded ${
              quantity === 1 ? "bg-red-300" : "bg-red-500 hover:bg-red-600"
            }`}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 text-white font-bold transition rounded ${
              quantity === 20 ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            +
          </button>
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-white bg-gray-100 text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 w-[30%] rounded"
      >
        Add Item
      </button>
    </form>
  );
}
