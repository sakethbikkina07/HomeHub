import buildinghome from '../assets/buildinghome.jpeg'
import buildinghome2 from '../assets/building.jpeg'
import logo from '../assets/logo.png'
import { FaSearch, FaHeart, FaRegHeart, FaBed, FaCar, FaTree, FaShieldAlt, FaWifi, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoLocationSharp, IoStar, IoHeart, IoEye, IoCall, IoSparkles, IoClose } from "react-icons/io5";
import { MdVilla, MdEdit, MdVerified, MdOutlineBedroomParent } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { HiArrowLeft, HiMenuAlt3 } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("saved");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 98765 43210",
    location: "Vijayawada, AP",
    bedrooms: "3BHK",
    parking: true,
    garden: true,
    security: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    setShowEditModal(false);
  };

  const notifications = [
    {
      id: 1,
      message: "New house added in Hyderabad.",
      time: "2 mins ago",
    },
    {
      id: 2,
      message: "Your booking request has been approved.",
      time: "1 hour ago",
    },
  ];

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
    <div className="max-w-full mx-auto bg-[#f9f9f9] min-h-screen p-3 md:p-5">

      <nav className="w-full lg:w-9/12 bg-white border border-gray-100 rounded-[20px] md:rounded-[50px] px-3 md:px-4 py-2 m-auto shadow-sm mb-4 relative">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm flex-shrink-0">
              <img src={logo} alt="logo" className="w-full h-full border border-gray-300 rounded-full" />
            </div>
            <p className="text-sm md:text-md text-gray-500 font-medium">HomeHub</p>
          </div>

          <div className="hidden lg:flex flex-1 items-center gap-4">
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
                <div className="relative">
                  <button
                    className="p-3 relative bg-gray-100 rounded-full cursor-pointer shadow-sm"
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    <IoMdNotifications />
                    {notifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {notifications.length}
                      </span>
                    )}
                  </button>

                  {showNotifications && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowNotifications(false)}
                      />
                      <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <h2 className="text-sm font-bold text-gray-800">
                            Notifications
                          </h2>
                        </div>
                        {notifications.length > 0 ? (
                          <div className="max-h-60 overflow-y-auto">
                            {notifications.map((notification, index) => (
                              <div
                                key={notification.id}
                                className={`flex items-start gap-3 px-4 py-3 hover:bg-[#fdf8f1] cursor-pointer ${index !== notifications.length - 1
                                  ? "border-b border-gray-100"
                                  : ""
                                  }`}
                              >
                                <div className="w-2 h-2 rounded-full bg-[#CBA358] mt-1.5 shrink-0" />
                                <div>
                                  <p className="text-sm text-gray-700">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-0.5">
                                    {notification.time}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="px-4 py-6 text-center text-sm text-gray-400">
                            No notifications yet
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>

                <div
                  className="p-3 bg-gray-100 rounded-full cursor-pointer shadow-sm"
                  onClick={() => navigate("/profile")}
                >
                  <CgProfile />
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <div className="relative">
              <button
                className="p-2.5 relative bg-gray-100 rounded-full cursor-pointer shadow-sm"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <IoMdNotifications className="text-gray-600 text-sm" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <h2 className="text-sm font-bold text-gray-800">
                        Notifications
                      </h2>
                    </div>
                    {notifications.length > 0 ? (
                      <div className="max-h-60 overflow-y-auto">
                        {notifications.map((notification, index) => (
                          <div
                            key={notification.id}
                            className={`flex items-start gap-3 px-4 py-3 hover:bg-[#fdf8f1] cursor-pointer ${index !== notifications.length - 1
                              ? "border-b border-gray-100"
                              : ""
                              }`}
                          >
                            <div className="w-2 h-2 rounded-full bg-[#CBA358] mt-1.5 shrink-0" />
                            <div>
                              <p className="text-sm text-gray-700">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-center text-sm text-gray-400">
                        No notifications yet
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-2.5 bg-gray-100 rounded-full cursor-pointer shadow-sm"
            >
              <FaSearch className="text-gray-500 text-sm" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-gray-100 rounded-full cursor-pointer shadow-sm"
            >
              {mobileMenuOpen ? (
                <IoClose className="text-gray-700 text-lg" />
              ) : (
                <HiMenuAlt3 className="text-gray-700 text-lg" />
              )}
            </button>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="lg:hidden mt-3 px-1 pb-2">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 shadow-inner">
              <span className="mr-3 text-gray-500">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>
        )}
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl rounded-l-3xl p-6 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                  <img src={logo} alt="logo" className="w-full h-full border border-gray-300 rounded-full" />
                </div>
                <p className="text-sm text-gray-500 font-medium">HomeHub</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-gray-100 rounded-full cursor-pointer"
              >
                <IoClose className="text-gray-700 text-lg" />
              </button>
            </div>

            <div className="h-px bg-gray-200"></div>

            <button
              onClick={() => { navigate("/login"); setMobileMenuOpen(false); }}
              className="w-full bg-[#CBA358] text-white px-5 py-3 rounded-full text-sm font-medium shadow-sm"
            >
              Login / Register
            </button>

            <button
              onClick={() => { navigate("/profile"); setMobileMenuOpen(false); }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <CgProfile className="text-lg text-gray-600" />
              <span className="text-sm font-medium text-gray-700">My Profile</span>
            </button>

            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              <IoMdNotifications className="text-lg text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Notifications</span>
            </button>

            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              <FaRegHeart className="text-lg text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Wishlist</span>
            </button>

            <div className="h-px bg-gray-200"></div>

            <button
              onClick={() => { navigate("/"); setMobileMenuOpen(false); }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <HiArrowLeft className="text-lg text-[#CBA358]" />
              <span className="text-sm font-medium text-gray-700">Back to Dashboard</span>
            </button>
          </div>
        </div>
      )}

      <div className="relative w-full md:w-11/12 mx-auto mt-4 md:mt-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src={buildinghome2}
            alt="banner"
            className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white p-1.5 md:p-2 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-3 md:border-4 border-white">
              <CgProfile className="text-gray-400 text-5xl sm:text-7xl md:text-9xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-11/12 mx-auto mt-16 sm:mt-18 md:mt-6 md:pl-56 md:pr-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-3 md:gap-0 px-2">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mb-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">{formData.fullName}</h1>
            <MdVerified className="text-[#CBA358] text-xl md:text-2xl" />
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 text-xs md:text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#CBA358]" />
              <span>{formData.location}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowEditModal(true)}
          className="flex items-center gap-2 bg-[#CBA358] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-bold text-xs md:text-sm shadow-md hover:bg-[#b58f4a] hover:shadow-lg hover:shadow-[#CBA358]/30 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <MdEdit className="text-base md:text-lg" />
          Edit Profile
        </button>
      </div>

      {showEditModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setShowEditModal(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-800">Edit Profile</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <IoClose className="text-gray-500 text-lg" />
              </button>
            </div>

            <div className="px-5 py-5 space-y-4 max-h-[65vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-[#CBA358] focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-[#CBA358] focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-[#CBA358] focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-[#CBA358] focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Bedrooms
                </label>
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-[#CBA358] focus:bg-white transition-all duration-200 cursor-pointer"
                >
                  <option value="1BHK">1BHK</option>
                  <option value="2BHK">2BHK</option>
                  <option value="3BHK">3BHK</option>
                  <option value="4BHK">4BHK</option>
                  <option value="5BHK+">5BHK+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                  Preferences
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="parking"
                      checked={formData.parking}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded accent-[#CBA358] cursor-pointer"
                    />
                    <div className="flex items-center gap-2">
                      <FaCar className="text-gray-400 text-xs group-hover:text-[#CBA358] transition-colors" />
                      <span className="text-sm text-gray-700">Parking Required</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="garden"
                      checked={formData.garden}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded accent-[#CBA358] cursor-pointer"
                    />
                    <div className="flex items-center gap-2">
                      <FaTree className="text-gray-400 text-xs group-hover:text-[#CBA358] transition-colors" />
                      <span className="text-sm text-gray-700">Garden Space</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="security"
                      checked={formData.security}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded accent-[#CBA358] cursor-pointer"
                    />
                    <div className="flex items-center gap-2">
                      <FaShieldAlt className="text-gray-400 text-xs group-hover:text-[#CBA358] transition-colors" />
                      <span className="text-sm text-gray-700">24/7 Security</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 border-t border-gray-100">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-2.5 rounded-xl bg-[#CBA358] text-white text-sm font-bold hover:bg-[#b58f4a] transition-colors cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full md:w-11/12 mx-auto flex flex-col lg:flex-row gap-4 md:gap-6 mt-6 md:mt-8 px-1 md:px-4">

        <div className="w-full lg:w-1/4 flex flex-col sm:flex-row lg:flex-col gap-4 md:gap-5">

          <div className="flex-1 bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CBA358]"></div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-[#CBA358]/10 rounded-lg flex items-center justify-center">
                <CgProfile className="text-[#CBA358] text-base md:text-lg" />
              </div>
              <h2 className="text-sm md:text-md font-extrabold text-gray-800">Personal Info</h2>
            </div>

            <div className="space-y-2.5 md:space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-[#98A886] text-[10px] md:text-xs" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-[11px] md:text-xs font-semibold text-gray-700 truncate">{formData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-[#98A886] text-[10px] md:text-xs" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Phone</p>
                  <p className="text-[11px] md:text-xs font-semibold text-gray-700">{formData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#98A886] text-[10px] md:text-xs" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-[11px] md:text-xs font-semibold text-gray-700">{formData.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-[#98A886]/10 rounded-lg flex items-center justify-center">
                <IoSparkles className="text-[#98A886] text-base md:text-lg" />
              </div>
              <h3 className="text-sm md:text-md font-extrabold text-gray-800">Preferences</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 md:gap-0 md:space-y-3.5">
              {preferences.map((pref, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 p-1.5 md:p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group cursor-default">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-[#98A886]/15 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <span className="text-[#98A886] text-[10px] md:text-xs group-hover:text-[#CBA358]">{pref.icon}</span>
                  </div>
                  <span className="text-[11px] md:text-xs font-semibold text-gray-700">{pref.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/4 flex flex-col gap-4 md:gap-5">

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden group cursor-pointer"
              >
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-2 md:gap-4">
                  <div
                    className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center text-white text-base md:text-xl shadow-md flex-shrink-0"
                    style={{ backgroundColor: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-lg md:text-2xl font-extrabold text-gray-800">{stat.count}</p>
                    <p className="text-[9px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm p-1.5 md:p-2 flex items-center gap-1.5 md:gap-2 border border-gray-100">
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 py-2 md:py-3 rounded-lg md:rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1 md:gap-2 ${activeTab === "saved"
                ? "bg-[#CBA358] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              <BsBookmarkHeartFill className={`text-xs md:text-sm ${activeTab === "saved" ? "text-white" : "text-[#CBA358]"}`} />
              <span className="hidden sm:inline">Saved</span> Homes
            </button>
            <button
              onClick={() => setActiveTab("viewed")}
              className={`flex-1 py-2 md:py-3 rounded-lg md:rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1 md:gap-2 ${activeTab === "viewed"
                ? "bg-[#CBA358] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              <IoEye className={`text-xs md:text-sm ${activeTab === "viewed" ? "text-white" : "text-[#CBA358]"}`} />
              <span className="hidden sm:inline">Viewed</span> Homes
            </button>
            <button
              onClick={() => setActiveTab("contacted")}
              className={`flex-1 py-2 md:py-3 rounded-lg md:rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1 md:gap-2 ${activeTab === "contacted"
                ? "bg-[#CBA358] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              <IoCall className={`text-xs md:text-sm ${activeTab === "contacted" ? "text-white" : "text-[#CBA358]"}`} />
              <span className="hidden sm:inline">Contacted</span> Owners
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.img}
                    alt={property.name}
                    className="w-full h-40 sm:h-36 md:h-44 object-cover transition-transform duration-700"
                  />
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
                      <IoStar className="text-yellow-500 text-[10px] md:text-xs" />
                      <span className="text-[10px] md:text-[11px] font-extrabold text-gray-800">{property.rating}</span>
                    </div>
                    <span className="text-[9px] md:text-[10px] text-gray-400 font-semibold">3200 sq.ft</span>
                  </div>

                  <h3 className="text-xs md:text-sm font-extrabold text-gray-800 mb-1 line-clamp-1">{property.name}</h3>
                  <div className="flex items-end justify-between pb-2 md:pb-3 border-b border-dashed border-gray-200 mb-2 md:mb-3">
                    <div>
                      <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-wider font-bold">Starting from</p>
                      <p className="text-base md:text-lg font-extrabold text-[#CBA358]">{property.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/redirect")}
                    className="w-full bg-gray-50 hover:bg-[#CBA358] text-gray-700 hover:text-white text-[10px] md:text-xs font-bold py-2 md:py-2.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn"
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

      <div className="flex justify-center mt-8 md:mt-10 mb-4 md:mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 hover:text-[#CBA358] hover:border-[#CBA358] px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group"
        >
          <HiArrowLeft className="text-xs md:text-sm group-hover:-translate-x-1 transition-transform duration-300 text-[#CBA358]" />
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

export default ProfilePage;
