/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetAllOrdersQuery,
  useGetUserOrdersQuery,
  useUpdateOrderStatusMutation,
} from "@/redux/api/orderApi";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
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
];

const UserOrders = () => {
  const user = useAppSelector(useCurrentUser);
  const res = useGetUserOrdersQuery(user?.id ?? "");
  const orders = res?.currentData?.data;

  return (
    <div className="overflow-auto rounded-lg border  p-4 m-4">
      {
        !(orders?.length) ? <h1 className="text-center font-semibold text-gray-500 text-xl">There is no order.</h1> :
        <table className="w-full min-w-max border-collapse bg-white text-left text-sm text-gray-600">
        <thead className="bg-gray-200 text-gray-800">
          <tr className="border-b bg-gray-100">
            <td
              colSpan={4}
              className="px-4 py-2  font-bold text-lg text-center"
            >
              Order
            </td>
            <td
              colSpan={5}
              className="px-4 py-2 bg-green-100  font-bold text-lg text-center"
            >
              Product
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

                  <td className="px-4 py-2 border">
                    <button
                      className={`p-1 rounded-xl uppercase text-sm text-white ${
                        order.status === "shipped"
                          ? "bg-green-400"
                        :order.status === "delivered"
                          ? "bg-green-700"
                          : order.status === "pending"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                    >
                      {order.status.toUpperCase()}
                    </button>
                  </td>

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
                </tr>
              )
          )}
        </tbody>
      </table>
      }
    </div>
  );
};

export default UserOrders;
