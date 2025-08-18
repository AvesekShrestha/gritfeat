import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IRating {
    rate: number;
    count: number;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

type ProductProps = {
    query: string
}

export default function Products({ query }: ProductProps) {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProduct] = useState<IProduct[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data)
            setFilteredProduct(response.data)

        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product => product.title.toLowerCase().includes(query))
        setFilteredProduct(filtered)
    }, [query])

    return (
        <div className="min-h-screen bg-gray-50 pt-[70px]">

            <h1 className="text-3xl font-bold mb-6 text-gray-800">🛍️ Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts && products &&
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="h-48 flex items-center justify-center bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="max-h-40 object-contain"
                                />
                            </div>

                            <div className="p-4 flex flex-col justify-between h-40">
                                <h2 className="text-md font-semibold text-gray-800 line-clamp-2">
                                    {product.title}
                                </h2>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-lg font-bold text-indigo-600">
                                        ${product.price}
                                    </span>
                                    <span className="text-yellow-500 font-medium">
                                        ⭐ {product.rating.rate}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
