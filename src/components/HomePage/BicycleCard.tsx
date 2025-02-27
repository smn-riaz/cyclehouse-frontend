import { Link } from "react-router-dom";
import { TBicycleCard } from "@/types/bicycleCard.type";

const BicycleCard = ({_id, name, image, type, description, price}:TBicycleCard) => {
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
        <p className="text-gray-500">{type}</p>
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
