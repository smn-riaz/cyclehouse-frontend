import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useGetAllProductsQuery } from "@/redux/api/productApi";

// Components
import HeroBanner from "@/components/HomePage/HeroSection";
import SectionHeadline from "@/components/HomePage/SectionHeadline";
import TopSellingBicyle from "@/components/HomePage/TopSellingBicyle";
import FeaturedBicycles from "@/components/HomePage/FeaturedBicycles";
import MiddleBanner from "@/components/HomePage/TopBanner";
import Banner from "@/components/HomePage/Banner";
import Promotion from "@/components/HomePage/Promotion";
import Accessories from "@/components/HomePage/Accessories";
import Blog from "@/components/HomePage/Blogs";
import FamousBrands from "@/components/HomePage/FamousBrands";
import Testimonial from "@/components/HomePage/Testimonial";

const HomePage = () => {
  // Fetch data using Redux hook
  const { data } = useGetAllProductsQuery(undefined);

  // Safely slice the first 6 bicycles from the data, checking for null/undefined
  const bicycles = data?.data?.slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Top Selling Bicycles Section */}
      <div className="lg:pt-16 pt-8">
        <SectionHeadline title="Top selling Bicycles" />
        <TopSellingBicyle />
      </div>

      {/* Featured Bicycles Section */}
      <div className="lg:pt-16 pt-8">
        <SectionHeadline title="All collections" />
        <FeaturedBicycles bicycles={bicycles} />
        <div className="text-center">
          <Link to={`/bicycles`}>
            <div className="flex justify-center">
              <Button className="mt-4 p-4 border-2 border-green-600 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-700 shadow-lg hover:shadow-2xl rounded-md flex items-center justify-center gap-2">
                <FaEye size={20} />
                <span className="text-sm sm:text-lg">View All</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>

      {/* Middle Banner Section */}
     <div className="lg:pt-16 pt-8">
       <MiddleBanner />
     </div>

      {/* Special Offers Section */}
      <div className="lg:pt-16 pt-8">
        <SectionHeadline title="Special offers" />
        <Banner />
      </div>

      {/* Promotion Section */}
      <div className="lg:pt-16 pt-8">
         <SectionHeadline title="Why Electric Bikes?" />
        <Promotion />
      </div>

      {/* Accessories Section */}
      <div className="lg:pt-16 pt-8">
        <SectionHeadline title="No Tension to Repair!" />
        <Accessories />
      </div>

      {/* Blog Section */}
      <div className="lg:pt-16 pt-8">
        <SectionHeadline title="Rest & Read!" />
        <Blog />
      </div>

      {/* Famous Brands Section */}
      <div className="lg:pt-16 pt-8">
        <SectionHeadline title="Top Brands" />
        <FamousBrands />
      </div>

      {/* Customer Reviews Section */}
      <div className="lg:pt-16 pt-8">
        <SectionHeadline title="Our customers review" />
        <Testimonial />
      </div>
    </div>
  );
};

export default HomePage;
