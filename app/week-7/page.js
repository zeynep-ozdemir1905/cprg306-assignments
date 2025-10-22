"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    const itemWithId = { ...newItem, id: items.length + 1 };
    setItems([...items, itemWithId]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-blue-300 p-6 space-y-10">
      <div className="flex flex-col items-start w-full max-w-md p-4">
        <h1 className="text-2xl text-black font-bold mb-4">
          Week 7 - New Item & Item List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
