import { Link } from "react-router-dom";

function NotFound() {
const Btn="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-6 py-3 rounded-lg text-sm cursor-pointer"
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-amber-400 mb-4">404</h1>
      <p className="text-gray-400 text-lg mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className={Btn}>Go Back Home</Link>
    </div>
  )
}

export default NotFound;