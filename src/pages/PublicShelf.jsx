import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import Books from "../components/Books"

const PublicShelf = () => {
  const { username } = useParams()
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const q = query(collection(db, "books"), where("username", "==", username))
      const snapshot = await getDocs(q)
      setBooks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    }
    fetchBooks()
  }, [username])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-amber-400 mb-6">{username}'s Shelf</h1>
        {books.length === 0
          ? <p className="text-gray-500 text-sm">No books yet.</p>
          : <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {books.map(b => <Books key={b.id} book={b} />)}
            </div>
        }
      </div>
    </div>
  )
}

export default PublicShelf