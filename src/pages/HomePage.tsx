import Banner from "@/components/HomePage/Banner";
import FeaturedBicycles from "@/components/HomePage/FeaturedBicycles";
// import Footer from "@/components/HomePage/Footer"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import TopSellingBicyle from "@/components/HomePage/TopSellingBicyle";
import TopBanner from "@/components/HomePage/TopBanner";
import Testimonial from "@/components/HomePage/Testimonial";
import SectionHeadline from "@/components/HomePage/SectionHeadline";

const HomePage = () => {
  const { data } = useGetAllProductsQuery(undefined);

  const bicycles = data?.data.slice(0, 6);
  return (
    <div>
      <div className="my-16 py-10">
        <TopBanner />
      </div>

      <div className="my-my-16 py-10">
        <SectionHeadline title="Special offers" />
        <Banner />
      </div>

      <div className="my-my-16 py-10">
      <SectionHeadline title="Top selling Bicycles" />
        <TopSellingBicyle />
      </div>

      <div className="my-my-16 py-10">
        <SectionHeadline title="All collections" />
        <FeaturedBicycles bicycles={bicycles} />
        <div className="text-center">
          <Link to={`/bicycles`}>
            <Button className="mt-4 border-2 p-4 border-green-600 bg-white text-green-700 font-bold text-lg hover:bg-green-600 hover:text-white">
              <FaEye size={2} />
              View All
            </Button>
          </Link>
        </div>
      </div>

      <div className="my-my-16 py-10">
        <SectionHeadline title="Our customers review" />
        <Testimonial />
      </div>
    </div>
  );
};

export default HomePage;
