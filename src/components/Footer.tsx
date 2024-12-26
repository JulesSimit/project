function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Little Lemon</h3>
                        <p className="text-gray-300">
                            A charming Mediterranean restaurant bringing the flavors of the coast to your table.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                        <p className="text-gray-300">Monday - Friday: 11am - 10pm</p>
                        <p className="text-gray-300">Saturday - Sunday: 10am - 11pm</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-300">123 Restaurant Street</p>
                        <p className="text-gray-300">Chicago, IL 60601</p>
                        <p className="text-gray-300">Tel: (555) 123-4567</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                    © {new Date().getFullYear()} Little Lemon. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
