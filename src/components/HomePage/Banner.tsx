/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { Link } from "react-router-dom";

const Banner = () => {
  const { data } = useGetAllProductsQuery(undefined);
  
    const bicycles = data?.data?.slice(-4);

  return (
   <div className="flex justify-center px-6 sm:px-10 py-12 sm:py-16  sm:mx-16">
     <Carousel className="w-full max-w-4xl ">
  <div className="w-full ">
    <CarouselContent className=" flex ">
      {bicycles?.map((bicycle:any, index:string) => (
        <CarouselItem
          key={index}
          className="pl-1  w-full sm:w-full sm:basis-full md:basis-1/2 lg:basis-1/3"
        >
          <div className="p-2 ">
            <div className="bg-white shadow-lg rounded-2xl p-5 transition transform hover:shadow-xl">
              
              <img
                src={bicycle.image}
                alt={bicycle.name}
                className="w-full border-green-500 border-2 h-auto max-h-48 object-contain rounded-lg"
              />

              <div className="mt-4 text-center">
                 <Link to={`/bicycles/${bicycle._id}`}> <h2 className="text-xl font-serif font-semibold">
                    <u>{bicycle.name}</u>
                  </h2></Link>
                 
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </div>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
   </div>


  );
};

export default Banner;
