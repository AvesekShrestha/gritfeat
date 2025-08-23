import Register from "./pages/Register"
import { useState } from "react"
import type { UserData } from "./pages/Register"
import Home from "./pages/Home"
// import { Routes, Route } from "react-router-dom"

export default function App() {
  const [user, setUser] = useState<UserData | null>(null)
  return (
    <>
      {!user ? (
        <Register setUser={setUser} />
      ) : (
        <Home user={user} />
      )}
    </>
  )
}
