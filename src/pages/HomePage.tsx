import Banner from "@/components/HomePage/Banner";
import FeaturedBicycles from "@/components/HomePage/FeaturedBicycles";
// import Footer from "@/components/HomePage/Footer"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useGetAllProductsQuery } from "@/redux/api/productApi";

const HomePage = () => {
  const { data } = useGetAllProductsQuery(undefined);

  const bicycles = data?.data.slice(0, 6);
  return (
    <div>
      <div className="mt-20">
      <h2 className="text-center text-green-600 text-3xl font-bold">BEST COLLECTIONS</h2>
        <Banner />
      </div>

      <div className="my-10">
        <h2 className="text-center text-green-600 text-3xl my-2 font-bold">Our Collections</h2>
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
    </div>
  );
};

export default HomePage;
