/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { Link } from "react-router-dom";

const TopSellingBicycle = () => {
  const { data } = useGetAllProductsQuery(undefined);
  const bicycles = data?.data?.slice(3, 6);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:py-16 py-6 xl:max-w-[1300px] xl:mx-auto px-8">
      {bicycles?.map((bicycle: any, index: number) => (
        <Link key={index} to={`/bicycles/${bicycle._id}`}>
          <div className="relative group overflow-hidden border border-gray-300 rounded-xl transition-transform duration-300 hover:scale-105">
            <img
              src={bicycle.image}
              alt={bicycle.name}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold italic">{bicycle.name}</h2>
              <p className="text-lg sm:text-xl">{bicycle.type}</p>
            </div>
            <div className="absolute inset-0 border border-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopSellingBicycle;
