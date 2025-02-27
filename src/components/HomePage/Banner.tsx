import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const Banner = () => {
  const bicycles = [
    {
      _id: "2343",
      image:
        "https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
      name: "Roadster 5000",
      type: "SpeedX",
      description: "A premium road bike designed for speed and performance.",
      price: 500,
    },
    {
      _id: "2343",
      image:
        "https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
      name: "Roadster 5000",
      type: "SpeedX",
      description: "A premium road bike designed for speed and performance.",
      price: 500,
    },
    {
      _id: "2343",
      image:
        "https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
      name: "Roadster 5000",
      type: "SpeedX",
      description: "A premium road bike designed for speed and performance.",
      price: 500,
    },
    {
      _id: "2343",
      image:
        "https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
      name: "Roadster 5000",
      type: "SpeedX",
      description: "A premium road bike designed for speed and performance.",
      price: 500,
    },
    {
      _id: "2343",
      image:
        "https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
      name: "Roadster 5000",
      type: "SpeedX",
      description: "A premium road bike designed for speed and performance.",
      price: 500,
    },
  ];

  return (
   <div className="flex justify-center p-10">
     <Carousel className="w-full max-w-4xl ">
  <div className="w-full ">
    <CarouselContent className=" flex ">
      {bicycles.map((bicycle, index) => (
        <CarouselItem
          key={index}
          className="pl-1  w-full sm:w-full sm:basis-full md:basis-1/2 lg:basis-1/3"
        >
          <div className="p-2">
            <div className="bg-white shadow-lg rounded-2xl p-5 transition transform hover:shadow-xl">
              
              <img
                src={bicycle.image}
                alt={bicycle.name}
                className="w-full h-auto max-h-48 object-contain rounded-lg"
              />

              {/* Card Content */}
              <div className="mt-4 text-center">
                  <h2 className="text-xl font-serif font-semibold">
                    {bicycle.name}
                  </h2>
                 
              
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
