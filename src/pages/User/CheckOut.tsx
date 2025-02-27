import { Button } from "@/components/ui/button";


const CheckOut = () => {
  const bicycle = {
    name: "Roadster 5000",
    brand: "SpeedX",
    price: 300,
    quantity: 1,
  };


  return (
     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Product Information */}
      <div className="p-4 border rounded">
        <h3 className="text-lg font-semibold mb-2">Product Information</h3>
        <p className="font-medium">{bicycle.name} - {bicycle.brand}</p>
        <p className="text-green-600 font-semibold">Price: ${bicycle.price}</p>
      </div>
      
      {/* User Information */}
      <div className="p-4 border rounded">
        <h3 className="text-lg font-semibold mb-2">User Information</h3>
      </div>
      
      {/* Payment Integration (SurjoPay) */}
      <div className="p-4 border rounded">
        <h3 className="text-lg font-semibold mb-2">Payment with SurjoPay</h3>
        <input type="text" name="cardNumber" placeholder="Card Number"  className="w-full px-4 py-2 border rounded mb-4" required />
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-2">Place Order</Button>
      </div>
    </div>
  );
};

export default CheckOut;
