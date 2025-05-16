import { Link } from "react-router-dom";
import promotion from "../../assets/promotion.jpg";

const Promotion = () => {
  return (
    <div className="min-h-[70vh] lg:py-16 px-6 rounded-lg py-6 xl:max-w-[1300px] xl:mx-auto">
      <div className="grid grid-cols-1  lg:grid-cols-3">
        <div className="col-span-1 p-8 flex justify-center items-center bg-black ">
          <div className="space-y-16">
            <h1 className=" font-semibold text-3xl text-white">
            Designed for modern movement. 
            E-bikes make getting around greener,
            easier, and way more fun.
          </h1>
          <button className="font-semibold bg-white px-4 text-xl py-2 hover:bg-black hover:text-white transition-all duration-300"><Link to="/bicycles">Shop Bikes</Link></button>
          </div>
          
        </div>
        <div className="col-span-2">
          <img src={promotion} alt="Bike" />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
