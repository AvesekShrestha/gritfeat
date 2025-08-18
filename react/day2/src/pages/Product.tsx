import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import type { IProduct } from "./Products";

export default function Product() {
    const [product, setProduct] = useState<IProduct | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
                Loading product...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">
            <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">

                <div className="flex-1 bg-gray-100 flex items-center justify-center p-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-96 object-contain"
                    />
                </div>

                <div className="flex-1 p-8 flex flex-col">
                    <span className="text-sm uppercase text-indigo-500 font-semibold mb-2">
                        {product.category}
                    </span>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        {product.title}
                    </h1>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-bold text-indigo-600">
                            ${product.price}
                        </span>
                        <span className="text-yellow-500 font-semibold">
                            ⭐ {product.rating.rate} ({product.rating.count} reviews)
                        </span>
                    </div>

                    <button className="bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow hover:bg-indigo-700 transition">
                        🛒 Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
