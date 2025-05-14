import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { setUser, TUser, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { UserInfo } from "@/types/Login.type";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const user = useAppSelector(useCurrentUser);

  const [showPassword, setShowPassword] = useState(false);
  const [isAdminFilled, setIsAdminFilled] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    setTimeout(() => {
      toast.dismiss(toastId);
    }, 2500);

    try {
      const userInfo: UserInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      navigate(`/${user?.role}`);
      toast.success("Logged in", { id: toastId, duration: 1200 });
    } catch {
      toast.error("Something went wrong", { id: toastId, duration: 1200 });
    }
  };

  const toggleAdminCredentials = () => {
    if (!isAdminFilled) {
      setValue("email", "admin@gmail.com");
      setValue("password", "admin123");
    } else {
      resetField("email");
      resetField("password");
    }
    setIsAdminFilled(!isAdminFilled);
  };

  return (
    <div className="p-4 sm:p-12 my-20 mx-4 sm:mx-10">
      {user?.id ? (
        <h1 className="text-center text-3xl font-bold text-green-600">
          You’re already logged in ✅
        </h1>
      ) : (
        <div className="w-1/3 mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6 relative">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="CycleHouse Logo" className="h-16 w-auto" />
          </div>

          {/* Header */}

          <p className="text-center text-gray-500">Please login to continue to CycleHouse</p>

 <button
              type="button"
              onClick={toggleAdminCredentials}
              className={`w-full ${
                isAdminFilled ? "bg-red-400 hover:bg-red-500" : "bg-blue-500 hover:bg-blue-600"
              } text-white px-6 py-2 rounded-lg transition text-sm font-medium`}
            >
              {isAdminFilled ? "Clear Admin Credentials" : "Click to autofill Admin Credentials"}
            </button>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                {...register("email")}
                required
                className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="flex items-center justify-between text-gray-700 font-semibold mb-1">
                <span>Password</span>
                <span
                  className="text-green-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                minLength={6}
                required
                className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Autofill/Clear Admin Button */}
           

            {/* Register Link */}
            <p className="text-sm text-center text-gray-600">
              New to <span className="font-semibold text-green-600">CycleHouse</span>?{" "}
              <Link to="/register-user" className="underline text-green-500 hover:text-green-600">
                Register Now
              </Link>
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition text-lg font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
