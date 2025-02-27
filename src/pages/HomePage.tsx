import Banner from "@/components/HomePage/Banner"
import FeaturedBicycles from "@/components/HomePage/FeaturedBicycles"
// import Footer from "@/components/HomePage/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
     
  <div className="my-20">
    <Banner />
  
</div>

<div className="my-10">
  <FeaturedBicycles />
  <div className="text-center">
  <Link to={`/bicycles`}><Button className="mt-4 border-2 p-4 border-green-600 bg-white text-green-700 font-bold text-lg hover:bg-green-600 hover:text-white"><FaEye size={2}/>View All</Button></Link>
  
  </div>
</div>

    </div>
  )
}

export default HomePage