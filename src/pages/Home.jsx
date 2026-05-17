import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-amber-400 mb-3">ReadShelf</h1>
      <p className="text-gray-400 text-lg mb-8">Track what you read, share your shelf.</p>
      <button onClick={() => navigate("/auth")} className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-6 py-3 rounded-lg text-sm cursor-pointer">
        Get Started
      </button>
    </div>
  )
}

export default Home