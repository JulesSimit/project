import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
