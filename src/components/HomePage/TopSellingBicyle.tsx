/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/api/productApi";



const TopSellingBicyle = () => {

    const { data } = useGetAllProductsQuery(undefined);
      
        const bicycles = data?.data?.slice(3,6);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-10 py-12 sm:py-16  sm:mx-16">
      {bicycles?.map((bicycle:any, index:number) => (
        <div
          key={index}
          className="relative p-3 group overflow-hidden border border-gray-300 rounded-xl"
        >
          <img
            src={bicycle.image}
            alt={bicycle.name}
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold italic">{bicycle.name}</h2>
            <p className="text-lg">{bicycle.type}</p>
          </div>
          <div className="absolute inset-0 border border-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default TopSellingBicyle;
