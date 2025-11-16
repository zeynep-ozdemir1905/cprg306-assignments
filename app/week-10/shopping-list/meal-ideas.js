"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const cleaned = ingredient
      .split(",")[0]
      .split(" ")[0]
      .replace(/[^\w\s]/gi, "")
      .trim()
      .toLowerCase();

    if (!cleaned) return [];

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleaned}`
    );
    const data = await response.json();
    
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  const loadMealIdeas = async () => {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  };

  return (
    <div className="p-6 bg-gray-200 rounded shadow-md w-[400px]">
      <h2 className="text-lg font-bold mb-3 text-gray-800">
        Meal ideas for “<span className="text-gray-600">{ingredient}</span>”
      </h2>
      <ul className="grid grid-cols-2 gap-3">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-2 border rounded hover:bg-blue-50 transition"
            >
              {meal.strMeal}
            </li>
          ))
        ) : (
          <p className="text-gray-500 col-span-2">
            No meals found for this ingredient.
          </p>
        )}
      </ul>
    </div>
  );
}
