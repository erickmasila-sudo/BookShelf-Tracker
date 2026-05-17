import { useState, useEffect } from "react"
import { useAuth } from "../context/Authcontext"
import { addBook, getBooks, updateBook, deleteBook } from "../booktools"
import Shelf from "../components/Shelf"
import {doc, getDoc} from "firebase/firestore"
import { db } from "../firebase/config"

const Dashboard = () => {
  const { user } = useAuth()
  const [books, setBooks] = useState([])
  const [searching, setSearching] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")

  const Label = "block text-white text-xl mb-1"
  const inputClass = "flex-1 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 placeholder-gray-600"
  const Btn = "bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-4 py-2 rounded-lg text-sm cursor-pointer"

  useEffect(() => {
    if (user) getBooks(user.uid).then(setBooks)
      if (user) {
    getBooks(user.uid).then(setBooks)
    getDoc(doc(db, "users", user.uid)).then(d => {
      if (d.exists()) setUsername(d.data().username)
    })
  }
  }, [user])

  const searchBooks = async () => {
    if (!query.trim()) return
    setLoading(true)
    const data = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=5`).then(r => r.json())
    setResults(data.docs)
    setLoading(false)
  }
  const handleAdd = async (book) => {
    const userDoc = await getDoc(doc(db, "users", user.uid))
    const username = userDoc.exists() ? userDoc.data().username : user.email
    const newBook = { title: book.title, author: book.author_name?.[0] || "Unknown", cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null, shelf: "Want to Read", progress: 0, totalPages: book.number_of_pages_median || 0, username }
    const added = await addBook(user.uid, newBook)
    setBooks([...books, { id: added.id, ...newBook }])
    setSearching(false); setQuery(""); setResults([])
  } 
  
  const handleMove = async (book, newShelf) => {
   await updateBook(book.id, { shelf: newShelf })
   setBooks(books.map(b => b.id === book.id ? { ...b, shelf: newShelf } : b))
}

  const handleRemove = async (id) => {
  await deleteBook(id)
  setBooks(books.filter(b => b.id !== id))
} 
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-amber-400">{username}'s Shelf</h1>
          <button onClick={() => setSearching(!searching)} className={Btn}>+ Add Book</button>
        </div>

        {searching && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-8">
            <label className={Label}>Search</label>
            <div className="flex gap-2 mb-4">
              <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && searchBooks()} placeholder="Search a book..." className={inputClass} />
              <button onClick={searchBooks} className={Btn}>{loading ? "..." : "Search"}</button>
            </div>
            <div className="space-y-2">
              {results.map((book, i) => (
                <div key={i} onClick={() => handleAdd(book)} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700">
                  {book.cover_i ? <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} className="w-8 h-12 object-cover rounded" /> : <div className="w-8 h-12 bg-gray-700 rounded flex items-center justify-center text-xs text-gray-500">?</div>}
                  <div>
                    <p className="text-sm font-medium">{book.title}</p>
                    <p className="text-xs text-gray-400">{book.author_name?.[0] || "Unknown"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      <div className="space-y-10">
       {["Want to Read", "Reading", "Finished"].map(shelf => (
      <Shelf key={shelf} title={shelf} books={books.filter(b => b.shelf === shelf)} onMove={handleMove} onRemove={handleRemove} />
      ))}
      </div>

      </div>
    </div>
  )
}

export default Dashboard