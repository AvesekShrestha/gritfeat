import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
            <h1 className="text-5xl font-bold text-indigo-700 mb-4 text-center">
                👋 Welcome to FakeStore
            </h1>
            <p className="text-gray-700 text-lg mb-6 text-center max-w-xl">
                Discover amazing products at the best prices. Explore our catalog and find your next favorite item!
            </p>

            <Link
                to="/product"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
                🛍️ Browse Products
            </Link>
        </div>
    );
}
