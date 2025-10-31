"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => setItems([...items, newItem]);
  const handleItemSelect = (itemName) => setSelectedItemName(itemName);

  return (
    <main className=" bg-gray-500 min-h-screen">
      {/* Header */}
      <header className=" text-white py-5 bg-gray-800 shadow-md mb-8">
        <h1 className="text-center text-2xl font-semibold">
          Week 8 - Meal Ideas Based on Selected Item
        </h1>
      </header>

      <section className="flex flex-col md:flex-row justify-center gap-10 p-8 max-w-7xl mx-auto w-full">
      
        <div className="flex-1 bg-gray-300 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add a new item</h2>
          <div className="space-y-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        
        <div className="flex-1 bg-gray-300 p-6 rounded-2xl shadow-md">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </section>
    </main>
  );
}
