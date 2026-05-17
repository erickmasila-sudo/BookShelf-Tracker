import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/Authcontext"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")

  useEffect(() => {
    if (user) {
      getDoc(doc(db, "users", user.uid)).then(d => {
        if (d.exists()) setUsername(d.data().username)
      })
    }
  }, [user])

  const handleLogout = async () => {
    await logout()
    navigate("/auth")
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
      <span onClick={() => navigate("/")} className="text-amber-400 font-bold text-lg cursor-pointer">ReadShelf</span>
      <div className="flex items-center gap-4">
        {username && (
          <span onClick={() => navigate(`/shelf/${username}`)} className="text-gray-400 text-sm cursor-pointer hover:text-amber-400">
            My Public Shelf
          </span>
        )}
        <span onClick={handleLogout} className="text-gray-400 text-sm cursor-pointer hover:text-amber-400">Logout</span>
      </div>
    </nav>
  )
}

export default Navbar