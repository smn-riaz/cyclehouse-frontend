import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const orders = [
  {
    _id: "243",
    user: {
      name: "Hasan",
      email: "hasan@yahoo.com",
    },
    product: {
      _id: "p11",
      name: "Roadster 5000",
      brand: "SpeedX",
      type: "Road",
      price: 300,
    },
    quantity: 3,
    totalPrice: 500,
  },
  {
    _id: "243",
    user: {
      name: "Hasan",
      email: "hasan@yahoo.com",
    },
    product: {
      _id: "p11",
      name: "Roadster 5000",
      brand: "SpeedX",
      type: "Road",
      price: 300,
    },
    quantity: 3,
    totalPrice: 500,
  },
  {
    _id: "243",
    user: {
      name: "Hasan",
      email: "hasan@yahoo.com",
    },
    product: {
      _id: "p11",
      name: "Roadster 5000",
      brand: "SpeedX",
      type: "Road",
      price: 300,
    },
    quantity: 3,
    totalPrice: 500,
  },
];

const tableHeadings = [
  "Order Id",
  "Quantity",
  "Total price",
  "Product",
  "Type",
  "Brand",
  "Price",
  "User name",
  "Eamil",
  "Update",
  "Delete",
];

const AllOrders = () => {
  return (
    <div className="overflow-auto rounded-lg border  p-4 m-4">
      <table className="w-full min-w-max border-collapse bg-white text-left text-sm text-gray-600">
        <thead className="bg-gray-200 text-gray-800">
        <tr>
            {tableHeadings.map((headLine, index) => (
              <th key={index} className={`px-4 py-2 border ${index >= 3 && index <= 6 ? 'bg-green-100 ' : ''} ${index >= 7 && index <= 8 ? 'bg-cyan-100 ' : ''} `}>
                {headLine}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 text-center font-semibold"
            >
              <td className="px-4 py-2 border">{order._id}</td>
              <td className="px-4 py-2 border">{order.quantity}</td>
              <td className="px-4 py-2 border">${order.totalPrice}</td>
              <td className="px-4 py-2 border bg-green-50">{order.product.name}</td>
              <td className="px-4 py-2 border bg-green-50">{order.product.type}</td>
              <td className="px-4 py-2 border bg-green-50">{order.product.brand}</td>
              <td className="px-4 py-2 border bg-green-50">${order.product.price}</td>
              <td className="px-4 py-2 border bg-cyan-50">{order.user.name}</td>
              <td className="px-4 py-2 border bg-cyan-50">{order.user.email}</td>
              <td className="px-4 py-2 border">
                <GrUpdate />
              </td>
              <td className="px-4 py-2 border">
                <MdDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
