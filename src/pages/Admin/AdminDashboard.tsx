/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LiaBicycleSolid } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { useGetAllUsersQuery } from "@/redux/api/userApi";

const AdminDashboard = () => {

  const users = useGetAllUsersQuery(undefined)
  const orders = useGetAllOrdersQuery(undefined)
  const products = useGetAllProductsQuery(undefined)
     
  const totalUsers = users?.data?.data?.filter((user:any) => user.role === 'user')
  const totalAdmins = users?.data?.data?.filter((user:any) => user.role === 'admin')
  const totalProducts = products?.data?.data
  const totalOrders = orders?.data?.data
  const totalRevenue = totalOrders?.reduce((acc:number, order:any) => acc + order?.totalPrice, 0);
 

  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
        <Card className="bg-white  rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold mr-2">
              Total Products
            </CardTitle>
            <LiaBicycleSolid color="green" fontSize={25} />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalProducts?.length}</p>
            <Link to="/admin/all-products">
              <Button className="mt-4 p-2 bg-green-600 hover:bg-green-600">
                All Products
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-white  rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">
              Total Orders
            </CardTitle>
            <FaShoppingCart color="green" fontSize={18} />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalOrders?.length}</p>
            <Link to="/admin/all-orders">
              <Button className="mt-4 p-2 bg-green-600 hover:bg-green-600">
                All Orders
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-white  rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">
              Total Revenue
            </CardTitle>
            <LuBadgeDollarSign color="green" fontSize={20} />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${totalRevenue}</p>
          </CardContent>
        </Card>

        <Card className="bg-white  rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Total Users</CardTitle>
            <FaPeopleGroup color="green" fontSize={22} />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalUsers?.length}</p>
            <Link to="/admin/all-users">
              <Button className="mt-4 p-2 bg-green-600 hover:bg-green-600">
                All Users
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-white  rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold ">
              Total Admins
            </CardTitle>
            <GrUserAdmin color="green" fontSize={20} />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalAdmins?.length}</p>
            <Link to="/admin/all-admins">
              <Button className="mt-4 p-2 bg-green-600 hover:bg-green-600">
                All Admins
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
          <CardContent>
            <Link to="/admin/create-product">
              <Button className="mt-4 px-6 py-3 text-lg bg-green-600 hover:bg-green-600">
                Create Product
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
