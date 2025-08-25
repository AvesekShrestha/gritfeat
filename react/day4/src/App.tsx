import Login from "./pages/Login"
import Home from "./pages/Home"
import { useState } from "react"

export default function App() {
  const [isloggedIn, setIsLoggedIn] = useState<boolean>(false)
  return (
    <>
      {isloggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </>
  )
}
