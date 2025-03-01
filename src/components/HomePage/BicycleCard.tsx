import { TBicycle } from "@/types/bicycleCard.type";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BicycleCard = ({ bicycle }: { bicycle: TBicycle }) => {

  const {_id,image,name,type,description,price,quantity} = bicycle

  return (
    <div
      key={_id}
      className="bg-white shadow-lg rounded-2xl p-4 transition transform hover:shadow-xl"
    >
   
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="mt-4">
        <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex justify-between items-center">
      <p className="text-gray-500 font-semibold">{type}</p> 
      <p className="text-lg font-semibold white bg-slate-200 text-green-700 rounded-md py-0.5 px-2">{quantity} <sub>pcs</sub></p>
      </div>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        

      
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">
            ${price}
          </span>


          <Link to={`/bicycles/${_id}`}><button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default BicycleCard;
