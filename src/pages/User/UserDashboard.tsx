/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetUserOrdersQuery } from "@/redux/api/orderApi";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { Link } from "react-router-dom";
import { LiaBicycleSolid } from "react-icons/lia";


 const UserDashboard = () => {

  const user = useAppSelector(useCurrentUser)
  const res = useGetUserOrdersQuery(user?.id ?? "")
  const userOrderInfo = res?.currentData?.data
  console.log(userOrderInfo);

  const totalLifetimeCost = userOrderInfo?.filter((order:any) => order.status !=='cancelled').reduce((acc:number, order:any) => acc + order?.totalPrice, 0)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      
   
      <Card className="bg-white rounded-xl">
        <CardHeader className="flex items-start space-x-2">
          <CardTitle className="text-lg font-semibold">@Me</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            
              <p>
             <span className="font-semibold"> Email </span><br />{user?.email}
              </p>
              
      
          </ul>
        </CardContent>
      </Card>

    
      <Card className="bg-white  rounded-xl col-span-1">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Ordered Summary</CardTitle>
        </CardHeader>
        <CardContent>
         <div className="space-y-3">
         <p className="font--semibold">Total Orders: <button className="bg-green-600 w-6 h-6 rounded-full text-white font-bold">{userOrderInfo?.length}</button></p>
         <button className="bg-green-600 py-1 px-2 font-semibold text-white rounded-md "><Link className="flex text-lg items-center gap-2 justify-between" to="/user/orders">View orders  <LiaBicycleSolid /></Link></button>
         </div>
        </CardContent>
      </Card>

     
      <Card className="bg-white  rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Total Cost </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-600">$ {totalLifetimeCost}</p>
        </CardContent>
      </Card>

    </div>
  );
}

export default UserDashboard