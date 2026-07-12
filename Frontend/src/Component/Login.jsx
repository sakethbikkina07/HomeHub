import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import house from "../assets/log img.jpg";
import {HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff, HiOutlineHome } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => { navigate("/dashboard"); };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={house}
        alt="House"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Logo */}
      <div className="absolute top-6 left-10 z-20">
        <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-11 h-11 object-contain" />
        </div>
      </div>

      {/* Login Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[32%] rounded-[35px] bg-white/5 backdrop-blur-100 border border-white/50 shadow-2xl px-10 py-5">

          {/* Home Icon */}
          <div className="flex flex-col items-center mb-7">
            <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center mb-3">
              <HiOutlineHome className="text-[#D4A017] text-4xl" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-white font-serif">
              Welcome <span className="text-[#D4A017]"> Back </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-4 w-full">
              <div className="w-16 h-[1px] bg-[#D4A017] rounded-full"></div>
              <span className="text-[18px] text-white text-xl"> Find your perfect home with us </span>
              <div className="w-16 h-[1px] bg-[#D4A017] rounded-full"></div>
            </div>
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <HiOutlineMail
              className="absolute left-5 top-1/2 -translate-y-1/2
              text-gray-600 text-2xl"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 rounded-2xl bg-white pl-14 pr-5
              text-gray-700 placeholder:text-gray-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <HiOutlineLockClosed
              className="absolute left-5 top-1/2 -translate-y-1/2
              text-gray-600 text-2xl"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full h-14 rounded-2xl bg-white pl-14 pr-14
              text-gray-700 placeholder:text-gray-400 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <HiOutlineEyeOff className="text-2xl text-gray-600" />
              ) : (
                <HiOutlineEye className="text-2xl text-gray-600" />
              )}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mt-5">
            <label className="flex items-center gap-2 text-white cursor-pointer">
              <input type="checkbox" className="accent-yellow-500 w-4 h-4" />

              <span className="text-sm">Remember Me</span>
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-[#D4A017] hover:underline transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full h-14 rounded-2xl bg-[#D4A017] hover:bg-yellow-600 shadow-lg mt-8 text-white text-xl font-semibold transition duration-300"
          >
            Login →
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-white"></div>

            <span className="px-4 text-white text-sm">Or continue with</span>

            <div className="flex-1 border-t border-white"></div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-5">
            <button className="w-12 h-12 rounded-full bg-white hover:scale-110 transition duration-300 flex items-center justify-center shadow-lg">
              <FcGoogle className="text-3xl" />
            </button>

            <button className="w-12 h-12 rounded-full bg-white hover:scale-110 transition duration-300 flex items-center justify-center shadow-lg">
              <FaFacebookF className="text-2xl text-blue-600" />
            </button>
          </div>

          {/* Register */}
          <div className="mt-4 text-center">
            <span className="text-white">New here?</span>

            <Link
              to="/register"
              className="ml-2 text-[#D4A017] font-semibold hover:underline"
            >
              Create an Account
            </Link>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2 ">
            <FaRegHeart className="text-[#D4A017] text-lg"/> <span className="text-white text-sm">Making home search simple and smart.</span>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;