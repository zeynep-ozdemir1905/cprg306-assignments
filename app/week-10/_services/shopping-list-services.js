
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems(userId) {
  try {
    
    const itemsCol = collection(db, "users", userId, "items");
    
   

    
    const q = query(itemsCol);
    const snapshot = await getDocs(q);

    
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


export async function addItem(userId, item) {
  try {
  
    const itemsCol = collection(db, "users", userId, "items");

  
    const docRef = await addDoc(itemsCol, item);

    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    return null;
  }
}
