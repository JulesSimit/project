import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <section className="relative h-[600px]">
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070"
                    alt="Restaurant interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl font-bold mb-4">Little Lemon</h1>
                        <p className="text-xl mb-8">Experience Mediterranean cuisine at its finest</p>
                        <Link
                            to="/booking"
                            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                            <Calendar className="mr-2" />
                            Book a Table
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Little Lemon?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Fresh Ingredients</h3>
                            <p className="text-gray-600">
                                We source the finest ingredients daily from local markets and suppliers.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Expert Chefs</h3>
                            <p className="text-gray-600">
                                Our experienced chefs bring authentic Mediterranean flavors to every dish.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Cozy Atmosphere</h3>
                            <p className="text-gray-600">
                                Enjoy your meal in our warm and welcoming Mediterranean-inspired setting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
