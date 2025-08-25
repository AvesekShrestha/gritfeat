import Login from "./pages/Login"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
