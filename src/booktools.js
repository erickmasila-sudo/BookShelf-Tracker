import { db } from "./firebase/config"
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore"

export const addBook = (userId, book) =>
  addDoc(collection(db, "books"), { ...book, userId, createdAt: new Date() })

export const getBooks = async (userId) => {
  const q = query(collection(db, "books"), where("userId", "==", userId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export const updateBook = (bookId, updates) =>
  updateDoc(doc(db, "books", bookId), updates)

export const deleteBook = (bookId) =>
  deleteDoc(doc(db, "books", bookId))