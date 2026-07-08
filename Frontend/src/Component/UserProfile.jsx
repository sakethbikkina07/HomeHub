import buildinghome from '../assets/buildinghome.jpeg'
import buildinghome2 from '../assets/building.jpeg'
import logo from '../assets/logo.png'
import { FaSearch, FaHeart, FaRegHeart, FaBed, FaCar, FaTree, FaShieldAlt, FaWifi, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoLocationSharp, IoStar, IoHeart, IoEye, IoCall, IoSparkles } from "react-icons/io5";
import { MdVilla, MdEdit, MdVerified, MdOutlineBedroomParent} from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("saved");

  const properties = [
    { id: 1, name: "Atlanta Luxury Family Home", rating: 4.8, price: "₹1.25 Crore", type: "Villa", img: buildinghome, location: "Vijayawada" },
    { id: 2, name: "Atlanta Luxury Family Home", rating: 4.8, price: "₹1.25 Crore", type: "Villa", img: buildinghome, location: "Vijayawada" },
    { id: 3, name: "Atlanta Luxury Family Home", rating: 4.8, price: "₹1.25 Crore", type: "Villa", img: buildinghome, location: "Vijayawada" },
  ];

  const preferences = [
    { icon: <FaBed />, label: "3BHK Bedrooms" },
    { icon: <FaCar />, label: "Parking Required" },
    { icon: <FaTree />, label: "Garden Space" },
    { icon: <FaShieldAlt />, label: "24/7 Security" },
  ];

  const stats = [
    { icon: <BsBookmarkHeartFill />, label: "Saved", count: 12, color: "#CBA358" },
    { icon: <IoEye />, label: "Viewed", count: 48, color: "#98A886" },
    { icon: <IoCall />, label: "Contacted", count: 6, color: "#CBA358" },
  ];

  return (
    <div className="max-w-full mx-auto bg-[#f9f9f9] min-h-screen p-5">
      <nav className="w-9/12 bg-white border border-gray-100 rounded-[50px] px-4 py-2 m-auto shadow-sm mb-4">
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
            <div className="ml-10 mr-2 flex items-center flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-3 shadow-inner">
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

      <div className="relative w-11/12 mx-auto mt-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src={buildinghome2}
            alt="banner"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="absolute -bottom-16 left-10">
          <div className="w-40 h-40 rounded-full bg-white p-2 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white">
              <CgProfile className="text-gray-400 text-9xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-6 pl-56 pr-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-extrabold text-gray-800">John Doe</h1>
            <MdVerified className="text-[#CBA358] text-2xl" />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#CBA358]" />
              <span>Vijayawada, Andhra Pradesh</span>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-[#CBA358] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#b58f4a] hover:shadow-lg hover:shadow-[#CBA358]/30 transition-all duration-300 hover:scale-105 cursor-pointer">
          <MdEdit className="text-lg" />
          Edit Profile
        </button>
      </div>

      <div className="w-11/12 mx-auto flex flex-row gap-6 mt-8 px-4">

        <div className="w-1/4 flex flex-col gap-5">

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CBA358]"></div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#CBA358]/10 rounded-lg flex items-center justify-center">
                <CgProfile className="text-[#CBA358] text-lg" />
              </div>
              <h2 className="text-md font-extrabold text-gray-800">Personal Info</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-[#98A886] text-xs" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-xs font-semibold text-gray-700 truncate">john.doe@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-[#98A886] text-xs" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Phone</p>
                  <p className="text-xs font-semibold text-gray-700">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#98A886] text-xs" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-xs font-semibold text-gray-700">Vijayawada, AP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#98A886]/10 rounded-lg flex items-center justify-center">
                <IoSparkles className="text-[#98A886] text-lg" />
              </div>
              <h3 className="text-md font-extrabold text-gray-800">Preferences</h3>
            </div>
            <div className="space-y-3.5">
              {preferences.map((pref, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group cursor-default">
                  <div className="w-7 h-7 bg-gradient-to-br from-[#98A886]/20 to-[#CBA358]/20 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#98A886] text-xs group-hover:text-[#CBA358]">{pref.icon}</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{pref.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-3/4 flex flex-col gap-5">

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden group cursor-pointer"
              >
                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-md"
                    style={{ backgroundColor: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-gray-800">{stat.count}</p>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{stat.label} Homes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-2 flex items-center gap-2 border border-gray-100">
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "saved"
                  ? "bg-gradient-to-r from-[#CBA358] to-[#b58f4a] text-white shadow-md shadow-[#CBA358]/30"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <BsBookmarkHeartFill className={activeTab === "saved" ? "text-white" : "text-[#CBA358]"} />
              Saved Homes
            </button>
            <button
              onClick={() => setActiveTab("viewed")}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "viewed"
                  ? "bg-gradient-to-r from-[#CBA358] to-[#b58f4a] text-white shadow-md shadow-[#CBA358]/30"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <IoEye className={activeTab === "viewed" ? "text-white" : "text-[#CBA358]"} />
              Viewed Homes
            </button>
            <button
              onClick={() => setActiveTab("contacted")}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "contacted"
                  ? "bg-gradient-to-r from-[#CBA358] to-[#b58f4a] text-white shadow-md shadow-[#CBA358]/30"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <IoCall className={activeTab === "contacted" ? "text-white" : "text-[#CBA358]"} />
              Contacted Owners
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.img}
                    alt={property.name}
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                               
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
                      <IoStar className="text-yellow-500 text-xs" />
                      <span className="text-[11px] font-extrabold text-gray-800">{property.rating}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold">3200 sq.ft</span>
                  </div>

                  <h3 className="text-sm font-extrabold text-gray-800 mb-1 line-clamp-1">{property.name}</h3>
                  <div className="flex items-end justify-between pb-3 border-b border-dashed border-gray-200 mb-3">
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Starting from</p>
                      <p className="text-lg font-extrabold text-[#CBA358]">{property.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/redirect")}
                    className="w-full bg-gray-50 hover:bg-[#CBA358] text-gray-700 hover:text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn"
                  >
                    View Details
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 hover:text-[#CBA358] hover:border-[#CBA358] px-5 py-2.5 rounded-full text-xs font-bold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group"
        >
          <HiArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-300 text-[#CBA358]" />
          Back to Dashboard
        </button>
      </div>

    </div>
  )
}

export default ProfilePage;