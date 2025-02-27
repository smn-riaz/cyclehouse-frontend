
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";


const users = [
  {_id:'234',
    name: "Mr. Rahman",
    email:"mr@gmail.com",
    role: "user",
    isActivated:true
  },
  {_id:'234',
    name: "Mr. Rahman",
    email:"mr@gmail.com",
    role: "user",
    isActivated:false
  },
  
];

const tableHeadings = ["User Id",'Name','Email','Role','Status', 'Update','Delete']

const AllUsers = () => {

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
          {users.map((user, index) => (
            <tr key={index} className="border-b hover:bg-gray-100 text-center font-semibold">
              <td className="px-4 py-2 border">{user._id}</td>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">{user.isActivated? "Active": <button  className="bg-red-600 text-white p-1 rounded-3xl">Inactive</button>}</td>
              <td className="px-4 py-2 border"><GrUpdate /></td>
              <td className="px-4 py-2 border"><MdDelete /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
