// _services/shopping-list-service.js

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} - An array of items with id and data.
 */
export async function getItems(userId) {
  try {
    // Reference to the items subcollection for the user
    const itemsCol = collection(db, "users", userId, "items");
    
    // Optional: add query here if needed
    const q = query(itemsCol);

    // Fetch all documents in the subcollection
    const snapshot = await getDocs(q);

    // Map each document to an object containing id and data
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    return [];
  }
}

/**
 * Adds a new item to a specific user's list in Firestore.
 * @param {string} userId 
 * @param {Object} item - T
 * @returns {Promise<string>} 
 */
export async function addItem(userId, item) {
  try {
    // Reference to the items subcollection for the user
    const itemsCol = collection(db, "users", userId, "items");

    // Add the new item to Firestore
    const docRef = await addDoc(itemsCol, item);

    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    return null;
  }
}
