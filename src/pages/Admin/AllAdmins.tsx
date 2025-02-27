
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";


const admins = [
  {_id:'234',
    name: "Mr. Rahman",
    email:"mr@gmail.com",
    role: "admin",
    isActivated:true
  },
  {_id:'234',
    name: "Mr. Rahman",
    email:"mr@gmail.com",
    role: "admin",
    isActivated:false
  },
  
];

const tableHeadings = ["Admin Id",'Name','Email','Role','Status', 'Update','Delete']

const AllAdmins = () => {

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
          {admins.map((admin, index) => (
            <tr key={index} className="border-b hover:bg-gray-100 text-center font-semibold">
              <td className="px-4 py-2 border">{admin._id}</td>
              <td className="px-4 py-2 border">{admin.name}</td>
              <td className="px-4 py-2 border">{admin.email}</td>
              <td className="px-4 py-2 border">{admin.role}</td>
              <td className="px-4 py-2 border">{admin.isActivated? "Active": <button  className="bg-red-600 text-white p-1 rounded-3xl">Inactive</button>}</td>
              <td className="px-4 py-2 border"><GrUpdate /></td>
              <td className="px-4 py-2 border"><MdDelete /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAdmins;
