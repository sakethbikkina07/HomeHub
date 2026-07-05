import buildinghome from '../assets/buildinghome.jpeg'
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBed, FaBath, FaCar, FaRulerCombined, FaTree, FaUtensils, FaSnowflake, FaShieldAlt, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { IoLocationSharp, IoStar } from "react-icons/io5";
import { MdVilla } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PropertyDetails() {
  const navigate = useNavigate();

  const features = [
    { icon: <FaBed />, label: "5 Bedrooms" },
    { icon: <FaBath />, label: "4 Bathrooms" },
    { icon: <FaCar />, label: "2 Car Parking" },
    { icon: <FaRulerCombined />, label: "3200 sq.ft" },
    { icon: <FaTree />, label: "Private Garden" },
    { icon: <FaUtensils />, label: "Modern Kitchen" },
    { icon: <FaSnowflake />, label: "Air Conditioning" },
    { icon: <FaShieldAlt />, label: "24/7 Security" },
    { icon: <FaWifi />, label: "High-Speed Wi-Fi" },
    { icon: <FaSwimmingPool />, label: "Swimming Pool" },
  ];

  return (
    <div className="max-w-full mx-auto bg-[#f9f9f9] overflow-hidden shadow-5xl p-5">
      <nav className="w-9/12 bg-white border border-gray-100 rounded-[50px] px-4 py-2 m-auto shadow-sm mb-8">
              <div className="flex flex-row items-center justify-between gap-4">
                  <div className="flex items-center justify-between w-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                      <img src={logo} alt="logo" className="w-full h-full border border-gray-300 rounded-full" />
                    </div>
                    <div>
                      <p className="text-md text-gray-500">HomeHub</p>
                    </div>
                  </div>
                </div>
      
                <div className="flex-1 flex flex-row items-center gap-4">
            <div className=" ml-10 mr-2 flex items-center flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-3 shadow-inner">
              <span className="mr-3 text-gray-500">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search properties, villas, apartments..."
                className="w-full outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>
      
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => navigate("/login")}
                      className="bg-[#CBA358] text-white px-5 py-3 mr-3 rounded-full text-sm font-medium shadow-sm whitespace-nowrap"
                    >
                      Login / Register
                    </button>
      
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-100 rounded-full cursor-pointer shadow-sm">
                        <IoMdNotifications />
                      </div>
                      <div className="p-3 bg-gray-100 rounded-full cursor-pointer shadow-sm">
                        <CgProfile />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

      <div className="flex flex-row gap-8 px-10 py-8">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={buildinghome}
              alt="property"
              className="w-full h-[650px]"
            />

            <button
              className="absolute top-4 right-4 bg-white border-2 border-gray-200 backdrop-blur-sm p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-all duration-300 transition-all duration-300">
              <FaHeart/>
            </button>
            
          </div>

          <div className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <MdVilla className="text-[#98A886] text-xl" />
              <span className="font-semibold">Villa</span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-2 text-gray-700">
              <IoLocationSharp className="text-[#CBA358] text-xl" />
              <span className="font-semibold text-sm">Vijayawada</span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-1.5 text-gray-700">
              <IoStar className="text-yellow-500 text-xl" />
              <span className="font-bold">4.8</span>
              <span className="text-gray-400 text-md">/5</span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaRulerCombined className="text-[#98A886]" />
              <span className="font-semibold text-sm">3200 sq.ft</span>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col">

          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[#98A886] font-semibold text-sm uppercase tracking-widest mb-1">Luxury Property</p>
              <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
                Atlanta Luxury
                <br />
                <span className="text-[#CBA358]">Family Home</span>
              </h1>
            </div>
            <button className="flex items-center gap-2 bg-white cursor-pointer border border-gray-200 px-5 py-2.5 rounded-full shadow-sm font-bold text-sm hover:border-[#CBA358] hover:text-[#CBA358] transition-all duration-300 group">
              <IoFilterSharp/> Filter
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6 text-gray-500">
            <IoLocationSharp className="text-[#CBA358]" />
            <span className="text-sm font-medium">Vijayawada, Near Benz Circle, Andhra Pradesh</span>
          </div>

          <div className="relative bg-white rounded-2xl p-6 mb-6 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CBA358] rounded-l-2xl"></div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-2 ml-3">About This Property</h3>
            <p className="text-sm text-gray-600 leading-relaxed ml-3">
              Experience premium family living in this elegant villa featuring spacious interiors, modern architecture, premium amenities, and excellent connectivity to key city locations.
            </p>
          </div>

          <div className="w-full grid grid-cols-3 gap-3 mb-6">
            <div className="bg-[#98A886] p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <MdVilla className="text-white/80 text-2xl mx-auto mb-1.5" />
              <p className="text-white/80 text-[10px] uppercase tracking-wider mb-0.5 font-semibold">Property Type</p>
              <p className="text-white font-bold text-lg">Villa</p>
            </div>

            <div className="bg-[#CBA358] p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <IoStar className="text-white/80 text-2xl mx-auto mb-1.5" />
              <p className="text-white/80 text-[10px] uppercase tracking-wider mb-0.5 font-semibold">User Rating</p>
              <p className="text-white font-bold text-lg">4.8 / 5</p>
            </div>

            <div className="bg-[#98A886] p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <GiMoneyStack className="text-white/80 text-2xl mx-auto mb-1.5 relative z-10" />
              <p className="text-white/80 text-[10px] uppercase tracking-wider mb-0.5 font-semibold relative z-10">Starting Price</p>
              <p className="text-white font-bold text-lg relative z-10">₹1.25 Cr</p>
            </div>

          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gray-300"></div>
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Property Features</h2>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-3 flex flex-col items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group"
                >
                  <div className="text-[#98A886] text-xl group-hover:text-[#CBA358] group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <p className="text-[10px] font-semibold text-gray-600 text-center leading-tight">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <button className="flex-1 bg-[#CBA358] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#b58f4a] hover:shadow-xl hover:shadow-[#CBA358]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
              Contact Owner
            </button>
            <button
              className="bg-white border-2 border-gray-200 p-4 rounded-2xl cursor-pointer hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-all duration-300 group"
            >
              <FaRegHeart/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails;
