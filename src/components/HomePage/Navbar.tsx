import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useAppSelector(useCurrentUser);

  const role = user?.role;

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false)
    toast.message("Logout successfully.",{duration:2000})
  };

  return (
    <div className="">
      <nav className="bg-white shadow-md w-full fixed top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between sm:px-10 h-16 items-center">
            <Link to="/">
              <img width={120} src="https://i.ibb.co.com/C5DWg9Sz/logo.png" alt="CycleHouse" />
            </Link>

            <div className="hidden md:flex items-center space-x-6 ">
              <Link to="/" className="text-gray-700 hover:text-black">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-black">
                About
              </Link>
              <Link to="/bicycles" className="text-gray-700 hover:text-black">
                Bicycles
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-black">
                Contact
              </Link>

              {user?.role && (
                <Link
                  to={`/${role}`}
                  className="text-gray-700 hover:text-black"
                >
                  Dashboard
                </Link>
              )}

              {user?.role ? (
                <Button
                  className="bg-green-600 hover:bg-green-700 font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button className="bg-green-600 hover:bg-green-700 font-semibold">
                  <Link to="/login">Login</Link>
                </Button>
              )}

             
            </div>

            <div className="md:hidden px-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

   
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="p-4 space-y-4">
              <Link onClick={() => setIsOpen(false)} to="/" className="block text-gray-700 hover:text-black">
                Home
              </Link>
              <Link onClick={() => setIsOpen(false)}
                to="/about"
                className="block text-gray-700 hover:text-black"
              >
                About
              </Link>
              <Link onClick={() => setIsOpen(false)}
                to="/bicycles"
                className="block text-gray-700 hover:text-black"
              >
                Bicycles
              </Link>
              <Link onClick={() => setIsOpen(false)}
                to="/contact"
                className="block text-gray-700 hover:text-black"
              >
                Contact
              </Link>

              {user?.role && (
                <Link onClick={() => setIsOpen(false)}
                  to={`/${role}`}
                  className="block text-gray-700 hover:text-black"
                >
                  Dashboard
                </Link>
              )}

              {user?.role ? (
                <Button
                  className="bg-green-600 hover:bg-green-700 font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button className="bg-green-600 hover:bg-green-700 font-semibold">
                  <Link onClick={() => setIsOpen(false)} to="/login">Login</Link>
                </Button>
              )}
             
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
