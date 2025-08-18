import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products query={query} />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}
