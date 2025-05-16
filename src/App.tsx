import { Outlet } from "react-router-dom"
import Navbar from "./components/HomePage/Navbar"
import Footer from "./components/HomePage/Footer"



function App() {

  return (
    <>
  <div className="">  <Navbar /></div>
    <Outlet />
    <Footer />
    </>
  )
}

export default App
