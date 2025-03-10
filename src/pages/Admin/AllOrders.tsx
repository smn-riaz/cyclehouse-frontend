/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "@/redux/api/orderApi";
import { toast } from "sonner";

const tableHeadings = [
  "Order Id",
  "Quantity",
  "Total price",
  "Status",
  "Product",
  "Image",
  "Type",
  "Brand",
  "Price",
  "User name",
  "Eamil",
];

const AllOrders = () => {
  const  { data } = useGetAllOrdersQuery(undefined)
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  const orders = data?.data;

  const handleStatusUpdate = async (id: string, status: string) => {
    const toastId = toast.loading("Order status updating...")
    try {
      if (status !== "pending") {
        const res = await updateOrderStatus({ id, payload: { status } });
        if(res){
          toast("Order Status Updated",{id:toastId,duration:1000});
        }
      }
    } catch (error) {
      toast.error("Something Error",{id:toastId,duration:1200});
    }
  };

  return (
    <div className="overflow-auto rounded-lg border  p-4 m-4">
    {
      !orders ? <h1>There is no order !</h1> :
      <table className="w-full min-w-max border-collapse bg-white text-left text-sm text-gray-600">
      <thead className="bg-gray-200 text-gray-800">
        <tr className="border-b bg-gray-100">
          <td colSpan={4} className="px-4 py-2  font-bold text-lg text-center">
            Order
          </td>
          <td colSpan={5} className="px-4 py-2 bg-green-100  font-bold text-lg text-center">
            Product
          </td>
          <td colSpan={2} className="px-4 py-2 bg-cyan-100 font-bold text-lg text-center">
            User
          </td>
        </tr>
        <tr>
          {tableHeadings.map((headLine, index) => (
            <th
              key={index}
              className={`px-4 py-2 border ${
                index >= 4 && index <= 8 ? "bg-green-100 " : ""
              } ${index >= 9 ? "bg-cyan-100 " : ""} `}
            >
              {headLine}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders?.map(
          (order: any, index: string) =>
            order.product &&
            order.user && (
              <tr
                key={index}
                className="border-b hover:bg-gray-100 text-center font-semibold"
              >
                <td className="px-4 py-2 border">{order._id}</td>
                <td className="px-4 py-2 border">{order.quantity}</td>
                <td className="px-4 py-2 border">${order.totalPrice}</td>

                {order.status === "cancelled" && (
                  <td className="px-4 py-2 border">
                    <button className="bg-red-600 p-1 uppercase rounded-xl text-white">
                      {order.status}
                    </button>
                  </td>
                )}
                {order.status === "delivered" && (
                  <td className="px-4 py-2 border">
                    <button className="bg-green-700 p-1 rounded-xl uppercase text-white">
                      {order.status}
                    </button>
                  </td>
                )}

                {(order.status === "pending" ||
                  order.status === "shipped") && (
                  <td className="px-4 py-2 border uppercase">
                    <select
                      className="bg-none border-[1px] border-green-300 hover:bg-none"
                      value={order.status}
                      onChange={(e) =>
                        handleStatusUpdate(order._id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                )}

                {order?.product && (
                  <>
                    <td className="px-4 py-2 border bg-green-50">
                      {order.product.name}
                    </td>
                    <td className="px-4 py-2 border bg-green-50">
                      <img width={40} src={order.product.image} alt="" />
                    </td>
                    <td className="px-4 py-2 border bg-green-50">
                      {order.product.type}
                    </td>
                    <td className="px-4 py-2 border bg-green-50">
                      {order.product.brand}
                    </td>
                    <td className="px-4 py-2 border bg-green-50">
                      ${order.product.price}
                    </td>
                  </>
                )}
                {order.user && (
                  <>
                    <td className="px-4 py-2 border bg-cyan-50">
                      {order.user.name}
                    </td>
                    <td className="px-4 py-2 border bg-cyan-50">
                      {order.user.email}
                    </td>
                  </>
                )}
              </tr>
            )
        )}
      </tbody>
    </table>
    }
    </div>
  );
};

export default AllOrders;
