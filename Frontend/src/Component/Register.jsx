import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import house from "../assets/log img.jpg";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff, HiOutlineHome } from "react-icons/hi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function Register() {
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

      {/* Logo */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-10 z-20">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-xl flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-8 h-8 sm:w-11 sm:h-11 object-contain" />
        </div>
      </div>

      <div className="relative lg:absolute inset-0 flex items-center justify-center min-h-screen p-4 sm:p-6 z-10">
        
        <div className="w-full max-w-md lg:max-w-none lg:w-[32%] rounded-[25px] sm:rounded-[35px] bg-black/25 sm:bg-white/5 backdrop-blur-[100] border border-white/30 sm:border-white/50 shadow-2xl px-5 py-6 sm:px-10 sm:py-2">

          {/* Header section */}
          <div className="flex flex-col items-center mb-4 sm:mb-5">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center mb-2">
              <HiOutlineHome className="text-[#D4A017] text-2xl sm:text-4xl" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white font-serif text-center">
              Create Your <span className="text-[#D4A017]"> Account </span>
            </h1>

            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 w-full">
              <div className="w-4 sm:w-5 h-[1px] bg-[#D4A017] rounded-full shrink-0"></div>
              <span className="text-[11px] sm:text-[12px] text-white text-center leading-tight"> Join HomeHub and discover your perfect home with ease </span>
              <div className="w-4 sm:w-5 h-[1px] bg-[#D4A017] rounded-full shrink-0"></div>
            </div>
          </div>

          {/* userName */}
          <div className="relative mb-3.5 sm:mb-4">
            <FaRegUser
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2
              text-gray-500 text-xl sm:text-2xl"
            />
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full h-12 sm:h-13 rounded-xl sm:rounded-2xl bg-white pl-12 sm:pl-14 pr-4 sm:pr-3
              text-gray-700 text-sm sm:text-base placeholder:text-gray-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative mb-3.5 sm:mb-4">
            <HiOutlineMail
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2
              text-gray-500 text-xl sm:text-2xl"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 sm:h-13 rounded-xl sm:rounded-2xl bg-white pl-12 sm:pl-14 pr-4 sm:pr-3
              text-gray-700 text-sm sm:text-base placeholder:text-gray-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative mb-3.5 sm:mb-4">
            <HiOutlineLockClosed
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2
              text-gray-500 text-xl sm:text-2xl"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full h-12 sm:h-13 rounded-xl sm:rounded-2xl bg-white pl-12 sm:pl-14 pr-12 sm:pr-14
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

          {/* ConfirmPassword */}
          <div className="relative">
            <HiOutlineLockClosed
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2
              text-gray-500 text-xl sm:text-2xl"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full h-12 sm:h-13 rounded-xl sm:rounded-2xl bg-white pl-12 sm:pl-14 pr-12 sm:pr-14
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

          {/* Agree checkbox container */}
          <div className="flex items-start justify-between mt-3">
            <label className="flex items-start gap-2 text-white cursor-pointer select-none">
              <input type="checkbox" className="accent-yellow-500 w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm leading-tight text-white/90">
                I agree to the Terms & Conditions and Privacy Policy
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-[#D4A017] hover:bg-yellow-600 shadow-lg mt-5 text-white text-lg sm:text-xl font-semibold transition duration-300"
          >
            Create Account →
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-white/40"></div>
            <span className="px-3 sm:px-4 text-white text-xs whitespace-nowrap">Or continue with</span>
            <div className="flex-1 border-t border-white/40"></div>
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-4 sm:gap-5">
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:scale-105 active:scale-95 transition duration-300 flex items-center justify-center shadow-lg">
              <FcGoogle className="text-2xl sm:text-3xl" />
            </button>

            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:scale-105 active:scale-95 transition duration-300 flex items-center justify-center shadow-lg">
              <FaFacebookF className="text-xl sm:text-2xl text-blue-600" />
            </button>
          </div>

          <div className="mt-4 text-center text-xs sm:text-sm">
            <span className="text-white">Already have an account?</span>
            <Link
              to="/login"
              className="ml-1 sm:ml-2 text-[#D4A017] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-3.5 flex items-center justify-center gap-1.5 text-center">
            <FaRegHeart className="text-[#D4A017] text-sm shrink-0"/> 
            <span className="text-white text-[11px] sm:text-xs">Your information is secure and protected.</span>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;