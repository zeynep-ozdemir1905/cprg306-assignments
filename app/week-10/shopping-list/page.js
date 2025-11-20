"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-services";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]); 
  const [selectedItemName, setSelectedItemName] = useState("");

 
  useEffect(() => {
    if (!user) return;

    const loadItems = async () => {
      try {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    };

    loadItems();
  }, [user]); 

 
  const handleAddItem = async (newItem) => {
    if (!user) return;

    try {
      const newItemId = await addItem(user.uid, newItem); 
      if (newItemId) {
        setItems([...items, { id: newItemId, ...newItem }]);
      }
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const handleItemSelect = (itemName) => setSelectedItemName(itemName);

  if (!user) {
    return (
      <p className="text-center text-white text-xl mt-10">
        Access Denied. Please log in first.
      </p>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      <header className="text-white py-5 bg-gray-800 shadow-md mb-8">
        <h1 className="text-center text-2xl font-semibold">
          Shopping List - Meal Ideas
        </h1>
      </header>

      <section className="flex flex-col md:flex-row justify-center gap-10 p-8 max-w-7xl mx-auto w-full">
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Add a new item
          </h2>
          <div className="space-y-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </section>
    </main>
  );
}
