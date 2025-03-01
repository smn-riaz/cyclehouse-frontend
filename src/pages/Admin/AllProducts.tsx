/* eslint-disable @typescript-eslint/no-unused-vars */

import { useDeleteProductMutation, useGetAllProductsQuery } from "@/redux/api/productApi";
import { TBicycle } from "@/types/bicycleCard.type";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const tableHeadings = [
  "Serial",
  "Name",
  "Image",
  "Brand",
  "Type",
  "Price",
  "Quantity",
  "Update",
  "Delete",
];

const AllProducts = () => {
  const { data } = useGetAllProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation()

  const bicycles = data?.data;

const handleDelete = (id:string) => {
  const toastId = toast.loading("Deleting...");
  try {
    deleteProduct(id)
    toast.success("Product Deleted successfully!", { id: toastId ,duration:2000});
  } catch (error) {
    toast.error("Something Error",{id:toastId,duration:2000})
  }
}

  return (
    <div className="overflow-auto rounded-lg border  p-4 m-4">
      <table className="w-full min-w-max border-collapse bg-white text-left text-sm text-gray-600">
        <thead className="bg-gray-200 text-gray-800">
          <tr>
            {tableHeadings.map((headLine, index) => (
              <th key={index} className="px-4 py-2 border">
                {headLine}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bicycles?.map((product: TBicycle, index: string) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 font-semibold"
            >
              <td className="px-4 py-2 border text-center">
                <HoverCard>
                  <HoverCardTrigger><p className="bg-green-600 w-7 h-7 rounded-full text-center flex items-center justify-center text-white">
  {index + 1}
</p>
</HoverCardTrigger>
                  <HoverCardContent>
                    <div className="bg-green-600 p-2 rounded-lg text-white">
                      <p>{product._id}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </td>
              <td className="px-4 py-2 border">{product.name}</td>
              <td className="px-4 py-2 border">
                <img width={60} src={product.image} alt="" />
              </td>
              <td className="px-4 py-2 border">{product.brand}</td>
              <td className="px-4 py-2 border">{product.type}</td>
              <td className="px-4 py-2 border">${product.price}</td>
              <td className="px-4 py-2 border text-center">
                {product.quantity ? (
                  product.quantity
                ) : (
                  <button className="bg-red-600 text-white p-1 rounded-3xl">
                    Stock out
                  </button>
                )}
              </td>
              <td className="px-4 py-2 border  text-yellow-600 text-xl text-center">
                <Link to={`/admin/update-product/${product._id}`}>
                <button className="shadow-2xl hover:shadow-3xl border-rose-100 p-2 bg-gradient-to-r from-yellow-400 to-yellow-700 text-white rounded-xl flex items-center justify-center space-x-2">
  <GrUpdate />
</button>
                </Link>
              </td>
              <td className="px-4 py-2 border  text-xl text-center">
                <button onClick={()=> handleDelete(product._id)} className="shadow-2xl hover:shadow-3xl border-rose-100 p-2 bg-slate-300 to-slate-300 text-red-600  rounded-xl flex items-center justify-center space-x-2" >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
