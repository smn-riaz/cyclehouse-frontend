import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import { userSideLinks } from "../User/UserSideLinks";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import NotFound from "@/pages/NotFound";


const UserLayout = ({ role }: { role: string }) => {



  const user = useAppSelector(useCurrentUser) as { role: string } | null;

  if(role === user?.role) {
    return (<div className="flex">
        <div>
          <Sidebar role="user" sideLinks={userSideLinks}/>
        </div>
        <div>
          <Outlet />
        </div>
      </div>)
  } else {
    return <NotFound />
  }
   
};

export default UserLayout;