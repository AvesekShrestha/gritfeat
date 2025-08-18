import { Link } from "react-router-dom";

interface NavbarProps {
    query: string;
    setQuery: (value: string) => void;
}

export default function Navbar({ query, setQuery }: NavbarProps) {

    return (
        <nav className="fixed top-0 left-0 w-full h-[70px] bg-indigo-600 text-white px-6 py-4 flex items-center justify-between shadow-lg z-50">

            <span className="text-2xl font-bold hover:text-indigo-200 cursor-pointer">
                <Link to="/">FakeStore</Link>
            </span>

            <div className="flex flex-row gap-5 items-center">
                <ul className="flex gap-6 items-center">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-indigo-200 transition font-medium"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/product"
                            className="hover:text-indigo-200 transition font-medium"
                        >
                            Products
                        </Link>
                    </li>
                </ul>

                <div>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="px-3 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
}
