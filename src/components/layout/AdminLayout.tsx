import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import NotFound from "@/pages/NotFound";
import { adminSideLinks } from "../Admin/AdminSideLinks";


const AdminLayout = ({ role }: { role: string }) => {
    
  const user = useAppSelector(useCurrentUser) as { role: string } | null;

  if(role === user?.role) {
    return (<div className="flex">
        <div>
          <Sidebar role="admin" sideLinks={adminSideLinks}/>
        </div>
        <div>
          <Outlet />
        </div>
      </div>)
  } else {
    return <NotFound />
  }
   
};

export default AdminLayout