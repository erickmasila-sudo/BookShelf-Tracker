import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import DashBoard from "./pages/Dashboard"
import PublicShelf from "./pages/PublicShelf"
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound"
import { AuthProvider } from "./context/Authcontext";
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar";
function App() {
    return (
      <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<ProtectedRoute><Navbar /><DashBoard /></ProtectedRoute>} />
                <Route path="/Shelf/:username" element={<PublicShelf />} />
                <Route path="/admin" element={<ProtectedRoute><Navbar /><Admin /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </AuthProvider>
    )
}

export default App;