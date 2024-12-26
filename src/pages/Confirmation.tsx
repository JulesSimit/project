import { Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Confirmation() {
    const location = useLocation();
    const booking = location.state?.booking;

    if (!booking) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold mb-4">Invalid Booking</h1>
                <p className="mb-8">No booking information found.</p>
                <Link
                    to="/booking"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                    Return to Booking
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
                <p className="text-gray-600">Thank you for choosing Little Lemon. We look forward to serving you.</p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <dt className="text-sm font-medium text-gray-500">Date</dt>
                        <dd className="mt-1 text-sm text-gray-900">{new Date(booking.date).toLocaleDateString()}</dd>
                    </div>
                    <div>
                        <dt className="text-sm font-medium text-gray-500">Time</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                            {new Date(`2000-01-01T${booking.time}`).toLocaleTimeString([], {
                                hour: "numeric",
                                minute: "2-digit",
                            })}
                        </dd>
                    </div>
                    <div>
                        <dt className="text-sm font-medium text-gray-500">Number of Guests</dt>
                        <dd className="mt-1 text-sm text-gray-900">{booking.guests}</dd>
                    </div>
                    <div>
                        <dt className="text-sm font-medium text-gray-500">Name</dt>
                        <dd className="mt-1 text-sm text-gray-900">{booking.name}</dd>
                    </div>
                    <div>
                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                        <dd className="mt-1 text-sm text-gray-900">{booking.email}</dd>
                    </div>
                    <div>
                        <dt className="text-sm font-medium text-gray-500">Phone</dt>
                        <dd className="mt-1 text-sm text-gray-900">{booking.phone}</dd>
                    </div>
                    {booking.specialRequests && (
                        <div className="col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Special Requests</dt>
                            <dd className="mt-1 text-sm text-gray-900">{booking.specialRequests}</dd>
                        </div>
                    )}
                </dl>
            </div>

            <div className="text-center">
                <Link
                    to="/"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}

export default Confirmation;
