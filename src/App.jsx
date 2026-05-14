import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import DashBoard from "./pages/Dashboard"
import PublicShelf from "./pages/PublicShelf"
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/Shelf/:username" element={<PublicShelf />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;