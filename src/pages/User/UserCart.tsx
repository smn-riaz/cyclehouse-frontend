
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store"; // Adjust according to your project structure
import { FaTrashAlt } from "react-icons/fa"; // For delete icon
import { removeFromCart, updateQuantity } from "@/redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const UserCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.reducer.cart.cartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (cycleId: string) => {
    dispatch(removeFromCart(cycleId));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Cart Overview</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-red-500 font-bold my-6">No Product in Cart</p>
      ) : (
        <div className="overflow-x-auto mt-4">
          <table className="w-full min-w-max bg-white border-collapse">
            <thead className="bg-green-200">
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b ">
                  <td className="px-4 py-2">
                    <img src={item.image} alt={item.name} width={80} />
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                      className="border px-2 py-1 w-16 rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <Link to="/user/checkout"><button className="px-1 font-semibold py-2 bg-green-600 text-white rounded-md">Checkout</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCart;
