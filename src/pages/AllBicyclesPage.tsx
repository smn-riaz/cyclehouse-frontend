
import FeaturedBicycles from "@/components/HomePage/FeaturedBicycles";
import { useGetAllProductsQuery } from "@/redux/api/productApi";


const AllBicyclesPage = () => {


  const {data} = useGetAllProductsQuery(undefined)

 const bicycles = data?.data

 

  return (
    <div className="mt-20">
      <h2 className="text-center text-green-600 text-3xl my-2 font-bold">Our All Collections</h2>
      <FeaturedBicycles bicycles={bicycles}/>
    </div>
  );
};

export default AllBicyclesPage;
