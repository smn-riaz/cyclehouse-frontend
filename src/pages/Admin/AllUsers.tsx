/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDeactiveUserMutation, useGetAllUsersQuery } from "@/redux/api/userApi";;
import { FaUserLargeSlash } from "react-icons/fa6";
import { toast } from "sonner";
import { FaUserCheck } from "react-icons/fa";


const tableHeadings = ["User Id",'Name','Email','Role','Status','Update']

const AllUsers = () => {

    const {data} = useGetAllUsersQuery(undefined)

    const [deactiveUser] = useDeactiveUserMutation()
    
    
     const users = data?.data.filter((user:any) => user.role === 'user')

     const handleDeactive = async(id:string) => {

     const toastId = toast.loading("Deactivating...")

      try {
        const result = await deactiveUser(id)
        if(result?.error){
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          toast.error((result?.error as any)?.message || "An error occurred")
        } else {
          toast.success("User deactivated successfully !",{id:toastId,duration:2000})
        }
      } catch (error) {
        toast.error("Something went wrong",{id:toastId,duration:2000})
      }
       
     }

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
          {users?.map((user:any, index:string) => (
            <tr key={index} className="border-b hover:bg-gray-100 text-center font-semibold">
              <td className="px-4 py-2 border">{user._id}</td>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">{user.isActivated? "Active": <button  className="bg-red-600 text-white p-1 rounded-3xl">Inactive</button>}</td>

              {
                user.isActivated && <td className="px-4 py-2 border"><button className="text-red-700 text-xl " onClick={() => handleDeactive(user._id)}><FaUserLargeSlash /></button></td>
              }
              {
                !user.isActivated && <td className="px-4 py-2 border"><button className="text-green-700 text-xl " onClick={() => handleDeactive(user._id)}><FaUserCheck /></button></td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
