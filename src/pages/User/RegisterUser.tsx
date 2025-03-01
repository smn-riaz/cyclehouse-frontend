/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { registerUserValidationSchema } from "@/validation/registerUser.validation";
import { useRegisterUserMutation } from "@/redux/api/userApi";
import { toast } from "sonner";



type FormData = z.infer<typeof registerUserValidationSchema>;



const  RegisterUser = () => {

const navigate = useNavigate()

  const [registerUser] = useRegisterUserMutation()


  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm<FormData>({resolver: zodResolver(registerUserValidationSchema)});

  const onSubmit = async(data: FormData) => {

   const toastId = toast.loading('Creating..')

const userInfo = {...data,role:"user",isActivated: true,
    needsPasswordChange:true
  }
  
  try {
    const result = await registerUser(userInfo)
    if(result?.error){
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toast.error((result?.error as any)?.message || "An error occurred")
    } else {
      toast.success("User registration successfully completed !",{id:toastId,duration:1500})
      navigate('/login')
    }
  } catch (error) {
    toast.error("Something went wrong",{id:toastId,duration:1500})
  }


  }
  return (
    <div className="p-12 m-10">
      <form  onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200">
      <p className="font-bold text-2xl text-green-600 text-center">Register User</p>
    
          <div className="space-y-10">
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input {...register("name")} className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500" />
     
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input {...register("email")} className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500" />
         
          </div>
          <div>
            <label className="flex text-gray-700 font-semibold ">Password: <span className="text-bold text-lg mt-1 mx-2">{showPassword?<FaEyeSlash onClick={() => setShowPassword(!showPassword)}/>: <FaEye onClick={() => setShowPassword(!showPassword)}/>}</span></label>
            <input type={showPassword ? "text" : "password"} minLength={6} {...register("password")} className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500" /> 
          </div>
          </div>
          <p className="my-1">Already have an account? <Link to="/login" ><u>Login here</u></Link></p>
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Register</button>
    </form>
    </div>
  );
}


export default RegisterUser