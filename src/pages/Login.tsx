import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {  useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { setUser, TUser, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { UserInfo } from "@/types/Login.type";




const  Login = () => {

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const [login,{data}] = useLoginMutation()

   const user = useAppSelector(useCurrentUser);
  
  if(data){
    toast(data?.message)
  }


  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit
  } = useForm({defaultValues:{
    email:"user@gmail.com",
    password:"user123"
  }})




  const onSubmit:SubmitHandler<FieldValues> = async (data: FieldValues) => {

  const toastId =  toast.loading("Logging in")

    try {
      const userInfo: UserInfo = {
        email: data.email,
        password: data.password,
      };
  
      
      const res = await login(userInfo).unwrap();
  
      const user = verifyToken(res.data.accessToken) as TUser
      
  
      dispatch(setUser({ user, token: res.data.accessToken }));
  
      navigate(`/${user?.role}`)
      toast.success("Logged in",{id:toastId, duration:1200})
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Something went wrong", {id:toastId,duration:1200})
    }
  }
  return (
    <div className="p-12 m-10">
      {
        user?.id ? <h1>Already Logged In</h1> :
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200">
      <p className="font-bold text-2xl text-green-600 text-center">Login</p>
    
          <div className="space-y-10">

          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input {...register("email")} className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500" />
           
          </div>
          <div>
            <label className="flex text-gray-700 font-semibold ">Password: <span className="text-bold text-lg mt-1 mx-2">{showPassword?<FaEyeSlash onClick={() => setShowPassword(!showPassword)}/>: <FaEye onClick={() => setShowPassword(!showPassword)}/>}</span></label>
            <input type={showPassword ? "text" : "password"} minLength={6} {...register("password")} className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500" /> 
           

            <p className="my-1">New to CycleHouse? <Link to="/register-user" ><u>Register Now</u></Link>
            </p>
          </div>
          </div>
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Submit</button>
    </form>
      }
    </div>
  );
}


export default Login