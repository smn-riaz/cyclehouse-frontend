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

const RegisterUser = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormData>({
    
    resolver: zodResolver(registerUserValidationSchema),
  });

  const onSubmit = async (data: FormData) => {
 if(data.email && data.name && data.password){
     const toastId = toast.loading("Creating...");
    setTimeout(() => {
      toast.dismiss(toastId);
    }, 2500);

    const userInfo = {
      ...data,
      role: "user",
      isActivated: true,
      needsPasswordChange: true,
    };

    try {
      const result = await registerUser(userInfo);
      if(result) {
        toast.success("User registration successfully completed!", {
          id: toastId,
          duration: 1500,
        });
        navigate("/login");
      } else {
        toast.error("Something went error!")
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 1500 })
    }
 } else {
   const toastId = toast.loading("Creating...");
   setTimeout(() => {
     toast.dismiss(toastId);
   }, 2500);
   toast.warning("Data is missing", { id: toastId, duration: 1500 })
 }
  };

  return (
<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 md:pt-20 bg-gray-50">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 max-w-xl bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 space-y-6"
  >
    {/* Header */}
    <div className="text-center">
      <img src="/logo.png" alt="CycleHouse Logo" className="h-14 mx-auto mb-2 object-contain" />
      <p className="text-gray-500">Register to continue to CycleHouse</p>
    </div>

    {/* Name */}
    <div>
      <label className="block mb-1 text-gray-700 font-medium">Name</label>
      <input
        {...register("name")}
        placeholder="Your full name"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none transition"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-1 text-gray-700 font-medium">Email</label>
      <input
        {...register("email")}
        type="email"
        placeholder="you@example.com"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none transition"
      />
    </div>

    {/* Password */}
    <div>
      <label className="block mb-1 text-gray-700 font-medium">Password</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          minLength={6}
          placeholder="Enter your password"
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none transition"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>

    {/* Already have account */}
    <p className="text-sm text-center text-gray-600">
      Already have an account?{" "}
      <Link to="/login" className="text-green-600 underline hover:text-green-700">
        Login here
      </Link>
    </p>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
    >
      {isSubmitting ? "Registering..." : "Register"}
    </button>
  </form>
</div>



  );
};

export default RegisterUser;
