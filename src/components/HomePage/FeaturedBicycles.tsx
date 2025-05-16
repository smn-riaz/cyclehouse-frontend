import { TBicycle } from "@/types/bicycleCard.type";
import BicycleCard from "./BicycleCard";

const FeaturedBicycles = ({ bicycles }: { bicycles: TBicycle[] }) => {
  return (
    <div className="lg:py-16 container px-8 py-6 xl:max-w-[1300px] mx-auto ">
   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bicycles?.map((bicycle, index) => (
            <BicycleCard key={index} bicycle={bicycle} />
          ))}
        </div>
      </div>
  
  );
};

export default FeaturedBicycles;
