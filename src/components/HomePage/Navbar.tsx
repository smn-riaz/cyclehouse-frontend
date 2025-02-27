import { useState } from "react";
import { Button } from "../ui/button"
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-10">
      <nav className="bg-white shadow-md w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <Link to="/"><img  width={120} src="/src/assets/logo.png" alt="" /></Link>
          
        
          <div className="hidden md:flex items-center space-x-6 ">
            <Link to="/"  className="text-gray-700 hover:text-black">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
            <Link to="/bicycles" className="text-gray-700 hover:text-black">Bicycles</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
            <Link to="/admin" className="text-gray-700 hover:text-black">Dashboard A</Link>
            <Link to="/user" className="text-gray-700 hover:text-black">Dashboard U</Link>
            <Button className="bg-green-600 hover:bg-green-700" asChild>
      <Link to="/login"><IoMdLogIn />Login</Link>
    </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="p-4 space-y-4">
            <Link to="" className="block text-gray-700 hover:text-black">Home</Link>
            <Link to="" className="block text-gray-700 hover:text-black">About</Link>
            <Link to="" className="block text-gray-700 hover:text-black">Bicycles</Link>
            <Link to="" className="block text-gray-700 hover:text-black">Contact</Link>
            <Button asChild>
      <Link to="/login">Login</Link>
    </Button>
          </div>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar