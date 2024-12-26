import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-green-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <Utensils className="h-8 w-8" />
                        <span className="text-xl font-bold">Little Lemon</span>
                    </Link>
                    <div className="flex space-x-4">
                        <Link to="/" className="hover:text-green-200 transition-colors">
                            Home
                        </Link>
                        <Link to="/booking" className="hover:text-green-200 transition-colors">
                            Book a Table
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
