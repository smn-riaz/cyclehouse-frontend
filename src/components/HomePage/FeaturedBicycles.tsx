
import { TBicycle } from "@/types/bicycleCard.type"
import BicycleCard from "./BicycleCard"




const FeaturedBicycles = ({ bicycles }: { bicycles: TBicycle[] }) => {
 
  

  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bicycles?.map((bicycle,index) => (
         <BicycleCard key={index}  bicycle={bicycle} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default FeaturedBicycles