import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(0, "Password is required"),
  
});

type FormData = z.infer<typeof schema>;

const  RegisterUser = () => {

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema)
    ,
    defaultValues: {
      name: "akib",
     email:"akib@gmail.com",
     password:'akib1234'
    },
  });

  const onSubmit = (data: FormData) => {

    console.log("Form submitted:", data);
  };

  return (
    <div className="p-12 m-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200">
      <p className="font-bold text-2xl text-green-600 text-center">Register User</p>
    
          <div className="space-y-10">
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input {...register("name")} className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input {...register("email")} className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="flex text-gray-700 font-semibold ">Password: <span className="text-bold text-lg mt-1 mx-2">{showPassword?<FaEyeSlash onClick={() => setShowPassword(!showPassword)}/>: <FaEye onClick={() => setShowPassword(!showPassword)}/>}</span></label>
            <input type={showPassword ? "text" : "password"} minLength={6} {...register("password")} className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500" /> 
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          </div>
          <p className="my-1">Already have an account? <Link to="/login" ><u>Login here</u></Link></p>
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Submit</button>
    </form>
    </div>
  );
}


export default RegisterUser