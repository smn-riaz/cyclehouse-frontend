import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BsFillMenuButtonWideFill } from "react-icons/bs";


type TSidebar = {
  role:string,
  sideLinks: {
    title: string,
    path: string,
}[]
}

export default function Sidebar({role, sideLinks}:TSidebar) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen ">
    
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-44 bg-gray-900 text-white transition-transform  lg:translate-x-0", 
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold"><img  width={80} src="https://i.ibb.co.com/C5DWg9Sz/logo.png" alt="CycleHouse" /></Link>
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <ImCross />
          </Button>
        </div>


        <nav className="p-4 space-y-4">
{
  sideLinks.map((link,index) => <Link key={index} onClick={() => setIsOpen(false)}
    to={`/${role}/${link.path}`}
    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
  >   
    <span>{link.title}</span>
  </Link>)
} 
        </nav>
      </div>
      
      
      <div className="flex-1 p-1 lg:ml-64">
        <Button
          variant="ghost"
          className="lg:hidden mb-4"
          onClick={() => setIsOpen(true)}
        >
          <BsFillMenuButtonWideFill />
        </Button>
      </div>
    </div>
  );
}
