import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import house from "../assets/log img.jpg";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff, HiOutlineHome } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => { navigate("/dashboard"); };

  return (
    <div className="relative w-full min-h-screen overflow-y-auto lg:overflow-hidden bg-zinc-900">
      {/* Background Image */}
      <img
        src={house}
        alt="House"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute top-4 left-4 sm:top-6 sm:left-10 z-20">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-xl flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-8 h-8 sm:w-11 sm:h-11 object-contain" />
        </div>
      </div>

      <div className="relative lg:absolute inset-0 flex items-center justify-center min-h-screen p-4 sm:p-6 z-10">
        <div className="w-full max-w-md lg:max-w-none lg:w-[32%] rounded-[25px] sm:rounded-[35px] bg-black/20 sm:bg-white/5 backdrop-blur-[100] border border-white/30 sm:border-white/50 shadow-2xl px-6 py-8 sm:px-10 sm:py-6">

          {/* Home Icon */}
          <div className="flex flex-col items-center mb-5 sm:mb-7">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center mb-2 sm:mb-3">
              <HiOutlineHome className="text-[#D4A017] text-2xl sm:text-4xl" />
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl font-bold text-white font-serif">
              Welcome <span className="text-[#D4A017]"> Back </span>
            </h1>

            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-4 w-full">
              <div className="w-4 sm:w-5 h-[1px] bg-[#D4A017] rounded-full"></div>
              <span className="text-xs sm:text-sm text-white text-center"> Find your perfect home with us </span>
              <div className="w-4 sm:w-5 h-[1px] bg-[#D4A017] rounded-full"></div>
            </div>
          </div>

          {/* Email Container */}
          <div className="relative mb-4 sm:mb-6">
            <HiOutlineMail
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2
              text-gray-500 text-xl sm:text-2xl"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white pl-12 sm:pl-14 pr-4 sm:pr-5
              text-gray-700 text-sm sm:text-base placeholder:text-gray-400 outline-none"
            />
          </div>

          {/* Password Container */}
          <div className="relative">
            <HiOutlineLockClosed
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2
              text-gray-500 text-xl sm:text-2xl"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white pl-12 sm:pl-14 pr-12 sm:pr-14
              text-gray-700 text-sm sm:text-base placeholder:text-gray-400 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <HiOutlineEyeOff className="text-xl sm:text-2xl text-gray-500" />
              ) : (
                <HiOutlineEye className="text-xl sm:text-2xl text-gray-500" />
              )}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mt-4 sm:mt-5">
            <label className="flex items-center gap-2 text-white cursor-pointer select-none">
              <input type="checkbox" className="accent-yellow-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Remember Me</span>
            </label>

            <Link
              to="/forgot-password"
              className="text-xs sm:text-sm text-[#D4A017] hover:underline transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-[#D4A017] hover:bg-yellow-600 shadow-lg mt-6 sm:mt-8 text-white text-lg sm:text-xl font-semibold transition duration-300"
          >
            Login →
          </button>

          {/* Navigation Link Options */}
          <div className="mt-4 text-center text-xs sm:text-sm">
            <span className="text-white">New here?</span>
            <Link
              to="/register"
              className="ml-1 sm:ml-2 text-[#D4A017] font-semibold hover:underline"
            >
              Create an Account
            </Link>
          </div>

          {/* Footer branding */}
          <div className="mt-4 sm:mt-3 flex items-center justify-center gap-1.5 text-center">
            <FaRegHeart className="text-[#D4A017] text-sm sm:text-base shrink-0"/> 
            <span className="text-white text-[11px] sm:text-xs">Making home search simple and smart.</span>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;