import { Button } from "@/components/ui/button"
import { Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";



const BicycleDetailsPage = () => {



  const bicycle = {
    _id: "243",
    image: "https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
    name: "Roadster 5000",
    brand: "SpeedX",
    type: "Road",
    price: 300,
    quantity: 10,
    inStock: true,
    rating: 4.5,
    reviews: 120,
  };

  const [quantity, setQuantity] = useState(1);

  const increase = () => {

    if(quantity < bicycle.quantity){
      setQuantity(quantity + 1)
    }
    // if(quantity=== bicycle.quantity){
     
    // }
  };



  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="max-w-4xl my-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={bicycle.image} alt={bicycle.name} className="w-full rounded-lg shadow-md" />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{bicycle.name}</h2>
            <p className="text-gray-600 text-lg">Brand: <span className="font-semibold">{bicycle.brand}</span></p>
            <p className="text-gray-600 text-lg">Type: <span className="font-semibold">{bicycle.type}</span></p>
            <p className="text-gray-600 text-lg">Quantity: <span className="font-semibold">{bicycle.quantity}</span></p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < bicycle.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-gray-700">({bicycle.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-semibold text-green-600 mt-4">${bicycle.price}</p>
          </div>


          <div className="my-4">
    
      <div className="">
        <div className="flex items-center space-x-4 my-2">
          <button onClick={decrease} className="px-4 py-2 border rounded">-</button>
          <span>{quantity}</span>
          <button onClick={increase} className={`px-4 py-2 border rounded`}>+</button>
        </div>
        <p>Total Price: ${bicycle.price * quantity}</p>
      </div>
   <div>
   {bicycle.inStock ? (
              <Link to='/user/checkout'><Button className=" bg-green-600 hover:bg-green-700 text-white text-lg py-2">Add to Cart</Button></Link>
            ) : (
              <Button className=" bg-red-500 hover:bg-red-600 text-white text-lg py-2" disabled>Out of Stock</Button>
            )}
   </div>
    </div>

          <div className="mt-4">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default BicycleDetailsPage