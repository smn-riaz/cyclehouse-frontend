

import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const products = [
  {
    _id:"243",
    name: "Roadster 5000",
    brand: "SpeedX",
    type: "Road",
    price: 300,
    quantity: 0,
    inStock: false,
  },
  {
    _id:"243",
    name: "Roadster 5000",
    brand: "SpeedX",
    type: "Road",
    price: 300,
    quantity: 0,
    inStock: false,
  },
];

const tableHeadings = ["Product Id", 'Name','Brand','Type','Price','Quantity', 'Update','Delete']

const AllProducts = () => {

 

  return (
    <div className="overflow-auto rounded-lg border  p-4 m-4">
      <table className="w-full min-w-max border-collapse bg-white text-left text-sm text-gray-600">
        <thead className="bg-gray-200 text-gray-800">
          <tr>
            {tableHeadings.map((headLine, index) => (
              <th key={index} className="px-4 py-2 border">{headLine}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b hover:bg-gray-100 text-center font-semibold">
              <td className="px-4 py-2 border">{product._id}</td>
              <td className="px-4 py-2 border">{product.name}</td>
              <td className="px-4 py-2 border">{product.brand}</td>
              <td className="px-4 py-2 border">{product.type}</td>
              <td className="px-4 py-2 border">${product.price}</td>
              <td className="px-4 py-2 border">
                {product.quantity ? product.quantity : <button  className="bg-red-600 text-white p-1 rounded-3xl">Stock out</button>}
              </td>
              <td className="px-4 py-2 border"><Link to={`/admin/update-product/${product._id}`}><button><GrUpdate /></button></Link></td>
              <td className="px-4 py-2 border"><button><MdDelete /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
