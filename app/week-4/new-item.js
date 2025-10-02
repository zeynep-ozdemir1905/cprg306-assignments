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
    <div className="p-4 shadow-md border border-gray-800 bg-gradient-to-br w-[350px] from-purple-200 to-blue-200 rounded-lg">
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
    <p className="text-xs text-left text-gray-500">Allowed Range : 1-20</p>
    </div>
);
}