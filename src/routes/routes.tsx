import App from "@/App";
import AboutPage from "@/pages/AboutPage";
import AdminDashboard from "@/pages/Admin/AdminDashboard";

import CreateProduct from "@/pages/Admin/CreateProduct";
import UpdateProduct from "@/pages/Admin/UpdateProduct";
import AllBicyclesPage from "@/pages/AllBicyclesPage";
import BicycleDetailsPage from "@/pages/BicycleDetailsPage";
import { createBrowserRouter } from "react-router-dom";
import AllProducts from "@/pages/Admin/AllProducts";
import AllUsers from "@/pages/Admin/AllUsers";
import AllOrders from "@/pages/Admin/AllOrders";
import UserDashboard from "@/pages/User/UserDashboard";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import RegisterUser from "@/pages/User/RegisterUser";
import Login from "@/pages/Login";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AdminLayout from "@/components/layout/AdminLayout";
import UserLayout from "@/components/layout/UserLayout";
import AllAdmins from "@/pages/Admin/AllAdmins";
import UserOrders from "@/pages/User/UserOrders";
import CreateOrder from "@/pages/User/CreateOrder";
import NotFound from "@/pages/NotFound";





const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<HomePage />
            },
            {
                path:'/bicycles',
                element:<AllBicyclesPage />
            },
            {
                path:'/bicycles/:id',
                element:<BicycleDetailsPage />
            },
            {
                path:"/about",
                element: <AboutPage />
            },
            {
                path:"/register-user",
                element: <RegisterUser />
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/contact",
                element: <ContactPage />
            },
            {
                path:"*",
                element: <NotFound />
            },
        ]

    },
   
    
    {
        path:"/admin",
        element: <ProtectedRoute><AdminLayout role="admin"/></ProtectedRoute>,
        children:[
            {
                index:true,
                element: <AdminDashboard />
            },
            {
                path:"dashboard",
                element: <AdminDashboard />
            },
            {
                path:"create-product",
                element: <CreateProduct />
            },
            {
                path:"update-product/:id",
                element: <UpdateProduct />
            },
            {
                path:"all-products",
                element: <AllProducts />
            },
            {
                path:"all-users",
                element: <AllUsers />
            },
            {
                path:"all-admins",
                element: <AllAdmins/>
            },
            {
                path:"all-orders",
                element: <AllOrders />
            },
        ]
    },
    {
        path:"/user",
        element: <ProtectedRoute><UserLayout role="user"/></ProtectedRoute>,
        children:[
            {
                index:true,
                element: <UserDashboard />
            },
            {
                path:"dashboard",
                element: <UserDashboard />
            },
            {
                path:"orders",
                element: <UserOrders />
            },
            {
                path:"create-order",
                element: <CreateOrder />
            },
            
        ]
    },
])


export default router