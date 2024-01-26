import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Favorite from "../pages/Favorite"
import Navigation from "../components/Navigation"

const RouterMain = () => {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route element={<Home/>} path="/" />
    <Route element={<Favorite/>} path="/favorite" />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterMain