"use client";
import { useState } from "react";

export default function NewItem() {
  const[quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity((prev) => (prev<20 ? prev + 1 : prev));
  };
  const decrement = () => {
    setQuantity((prev) => (prev>1 ? prev - 1 : prev));
  };

  return ( 
  <div className="p-5 rounded-lg shadow-md border bg-gradient-to-br max-w-md mx-auto">
    <h2 className="text-1xl mb-2 text-left text-gray-500">Quantity:{quantity}</h2>
  
    {/* Quantity */}

    <div className="flex-4 p-1 flex items-left justify-left space-x-3">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`px-4 py-2 rounded-lg text-white font-medium transition ${
          quantity === 1 ? "bg-gray-400" : "bg-blue-500"
        }`}
      
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className={`px-4 py-2 rounded-lg text-white font-medium transition ${
          quantity === 20 ? "bg-gray-400" : "bg-blue-500" 
        }`}
      
      >
        +
      </button> 
    </div>
    <p className="text-xs text-left  text-gray-500">Allowed Range : 1-20</p>
    </div>
);
}