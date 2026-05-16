import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"

const Admin = () => {
  const [users, setUsers] = useState([])
  const [topBook, setTopBook] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const booksSnap = await getDocs(collection(db, "books"))
      const books = booksSnap.docs.map(d => d.data())

      const userCount = {}
      books.forEach(b => { if (b.username) userCount[b.username] = (userCount[b.username] || 0) + 1 })
      const sorted = Object.entries(userCount).sort((a, b) => b[1] - a[1])
      setUsers(sorted)

      const count = {}
      books.forEach(b => { count[b.title] = (count[b.title] || 0) + 1 })
      const top = Object.entries(count).sort((a, b) => b[1] - a[1])[0]
      if (top) setTopBook({ title: top[0], count: top[1] })
    }
    fetch()
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-amber-400 mb-6">Admin</h1>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6">
          <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Most Added Book</h2>
          {topBook
            ? <p className="text-gray-100">{topBook.title} <span className="text-amber-400">({topBook.count} users)</span></p>
            : <p className="text-gray-500 text-sm">No data yet</p>
          }
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Users ({users.length})</h2>
          {users.length === 0
            ? <p className="text-gray-500 text-sm">No users yet</p>
            : <div className="space-y-2">
                {users.map(([name, count], i) => (
                  <div key={i} className="flex justify-between border-b border-gray-800 pb-2">
                    <p className="text-sm text-gray-100">{name}</p>
                    <p className="text-xs text-amber-400">{count} books</p>
                  </div>
                ))}
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Admin