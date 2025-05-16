import { Button } from "@/components/ui/button";
import { useGetSpecificProductQuery } from "@/redux/api/productApi";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BicycleDetailsPage = () => {
  const user = useAppSelector(useCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const cycleId = location.pathname.split("/")[2];

  const { data, isLoading, error } = useGetSpecificProductQuery(cycleId);
  const bicycle = data?.data;

  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    if (quantity < bicycle?.quantity) {
      setQuantity(quantity + 1);
    }
  };
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  const handleOrder = () => {
    const orderInfo = {
      user,
      product: bicycle,
      quantity,
      totalPrice: quantity * bicycle.price,
    };
    navigate(`/user/create-order`, { state: orderInfo });
  };

  if (isLoading) {
    return (
      <div className="max-w-sm my-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
        <p className="text-center text-gray-500 font-semibold">Loading ...</p>
      </div>
    );
  }

  if (error || !bicycle) {
    return (
      <div className="max-w-sm my-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
        <p className="text-center text-red-500 font-semibold">Failed to load bicycle details.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl my-16 mx-auto p-6 md:p-10 bg-white shadow-xl rounded-3xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.img
          src={bicycle?.image}
          alt={bicycle?.name}
          className="w-full rounded-2xl shadow-md object-cover h-80 md:h-full"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              {bicycle?.name}
            </h2>
            <p className="text-gray-600 text-lg mb-2">
              Brand: <span className="font-semibold">{bicycle?.brand}</span>
            </p>
            <p className="text-gray-600 text-lg mb-2">
              Type: <span className="font-semibold">{bicycle?.type}</span>
            </p>
            <p className="text-gray-600 text-lg mb-2">
              Available Quantity: <span className="font-semibold">{bicycle?.quantity}</span>
            </p>
            <p className="text-3xl font-bold text-green-600 mt-4">
              ${bicycle?.price}
            </p>
          </div>

          <div className="mt-8">
            <div className="flex items-center space-x-4 mb-4">
              <Button onClick={decrease} className="rounded-full bg-green-600 text-2xl px-4 py-2 flex justify-center items-center border">
                -
              </Button>
              <span className="text-xl font-semibold">{quantity}</span>
              <Button onClick={increase} className="rounded-full bg-green-600 text-2xl flex justify-center items-center px-4 py-2 border">
                +
              </Button>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Total Price: <span className="text-green-600">${bicycle?.price * quantity}</span>
            </h3>
            {bicycle?.inStock && user?.id && (
              <Button
                onClick={handleOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-lg transition"
              >
                Checkout Order
              </Button>
            )}
            {!bicycle?.inStock && (
              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-3 rounded-lg"
                disabled
              >
                Out of Stock
              </Button>
            )}
            {bicycle?.inStock && !user?.id && (
              <Link to="/login">
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-lg">
                  Login to Add to Cart
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BicycleDetailsPage;