import { Outlet } from "react-router-dom"
import Navbar from "./components/HomePage/Navbar"
import Footer from "./components/HomePage/Footer"



function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
