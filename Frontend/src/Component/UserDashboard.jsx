import { useState, useRef } from "react";
import buildinghome from "../assets/buildinghome.jpeg";
import logo from "../assets/logo.png";
import WhyChooseUs from "../Component/WhyChooseUs";
import {
  FaSearch,
  FaHeart,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoFilterSharp, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaHome, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { MdVilla } from "react-icons/md";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { BiBuildingHouse } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import Footer from "../Component/Footer";
import { IoStar } from "react-icons/io5";
import { FaLocationArrow,FaPhone,FaEnvelope} from "react-icons/fa6";


function Dashboard() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const notificationRef = useRef(null);

  const properties = [1, 2, 3, 4];

  const carouselSlides = [
    {
      id: 1,
      title: "Luxury Villas For You",
      subtitle:
        "Explore premium family homes with spacious interiors and elegant finishes.",
      price: "Starting from ₹1.25 Crore",
      image: buildinghome,
    },
    {
      id: 2,
      title: "Modern Homes In Prime Locations",
      subtitle:
        "Find handpicked properties in the most desirable neighborhoods.",
      price: "Top Picks This Week",
      image: buildinghome,
    },
    {
      id: 3,
      title: "Comfort, Style And Space",
      subtitle: "Discover dream homes that match your lifestyle and budget.",
      price: "View Featured Listings",
      image: buildinghome,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
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

  return (
    <div className="w-full mx-auto bg-[#f9f9f9] overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
      {/* Navbar */}
      <nav className="w-full lg:w-9/12 bg-white border border-gray-100 rounded-[20px] md:rounded-[50px] px-3 md:px-4 py-2 m-auto shadow-sm mb-4 relative">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm flex-shrink-0">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full border border-gray-300 rounded-full"
              />
            </div>
            <p className="text-sm md:text-md text-gray-500 font-medium">
              HomeHub
            </p>
          </div>

          {/* Desktop Nav */}
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
                {/* Notification Button + Dropdown */}
                <div className="relative" ref={notificationRef}>
                  <button
                    className="p-3 relative bg-gray-100 rounded-full cursor-pointer shadow-sm"
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    <IoMdNotifications />
                    {notifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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
                      <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                          <h2 className="text-sm font-bold text-gray-800">
                            Notifications
                          </h2>
                        </div>

                        {notifications.length > 0 ? (
                          <div className="max-h-60 overflow-y-auto">
                            {notifications.map((notification, index) => (
                              <div
                                key={notification.id}
                                className={`flex items-start gap-3 px-4 py-3 hover:bg-[#fdf8f1] cursor-pointer transition-colors duration-200 ${
                                  index !== notifications.length - 1
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
                  className="p-3 bg-gray-100 rounded-full cursor-pointer shadow-sm"
                  onClick={() => navigate("/profile")}
                >
                  <CgProfile />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-2">
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

        {/* Mobile Search Bar */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 px-1 pb-2 flex flex-col gap-3">
            <button
              onClick={() => navigate("/login")}
              className="bg-[#CBA358] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm w-full"
            >
              Login / Register
            </button>
            <div className="flex items-center justify-center gap-4">
              <button
                className="p-3 relative bg-gray-100 rounded-full cursor-pointer shadow-sm"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <IoMdNotifications />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>
              <button
                className="p-3 bg-gray-100 rounded-full cursor-pointer shadow-sm"
                onClick={() => navigate("/profile")}
              >
                <CgProfile />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-sm sm:text-md text-gray-500 mb-1">
            Welcome Jada...👋🏻
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800">
            Find Your Dream Home Today !
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm font-bold text-gray-700 hover:border-[#CBA358] transition-all duration-300 group">
            <IoFilterSharp className="text-[#CBA358]" />
            <span className="text-xs sm:text-sm group-hover:text-[#CBA358] transition-all duration-300">
              Filter
            </span>
          </button>
          <div className="bg-white p-3 sm:p-4 rounded-full shadow-sm cursor-pointer border border-gray-100">
            <FaHeart className="text-red-500 text-sm sm:text-base" />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[220px] sm:h-[350px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10 shadow-md">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselSlides.map((slide) => (
            <div key={slide.id} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 lg:px-20">
                <div className="flex items-center gap-2 w-fit bg-[#CBA358] text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-white/30">
                  <FaStar /> <span>Recommended For You</span>
                </div>

                <h3 className="text-xl sm:text-3xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 leading-tight max-w-xl drop-shadow-lg">
                  {slide.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-lg text-white/90 mb-4 sm:mb-6 max-w-lg drop-shadow-md">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-white/30">
                    {slide.price}
                  </span>
                  <button className="bg-[#CBA358] hover:bg-[#b8923e] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg transition duration-300">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition duration-300"
        >
          <FaChevronLeft className="text-xs sm:text-base" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition duration-300"
        >
          <FaChevronRight className="text-xs sm:text-base" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-7 sm:w-9 bg-[#CBA358]"
                  : "w-2 sm:w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Feature Bar */}
        <div className="hidden sm:block relative lg:absolute lg:bottom-0 left-0 w-full bg-black/30 backdrop-blur-xl lg:rounded-b-[30px] px-4 sm:px-6 lg:px-8 py-4 mt-6 lg:mt-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 justify-center lg:justify-start lg:border-r lg:border-white/40 pr-4">
              <FaHome className="text-[#D4A017] text-2xl sm:text-3xl shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                  Handpicked Homes
                </h3>
                <p className="text-gray-300 text-[10px] sm:text-xs">
                  Curated just for you
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start lg:border-r lg:border-white/40 pr-4">
              <FaShieldAlt className="text-[#D4A017] text-2xl sm:text-3xl shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                  Verified Listings
                </h3>
                <p className="text-gray-300 text-[10px] sm:text-xs">
                  Trusted & Secure
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start lg:border-r lg:border-white/40 pr-4">
              <FaHeadset className="text-[#D4A017] text-2xl sm:text-3xl shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                  Expert Support
                </h3>
                <p className="text-gray-300 text-[10px] sm:text-xs">
                  Here to help you
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <FaRegHeart className="text-[#D4A017] text-2xl sm:text-3xl shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                  Best Deals
                </h3>
                <p className="text-gray-300 text-[10px] sm:text-xs">
                  Unbeatable Prices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Picks */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
          Top Picks For You
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          Explore our top handpicked listings for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {properties.map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:-translate-y-1 transition duration-300"
          >
            <img
              src={buildinghome}
              alt="house"
              className="w-full h-36 sm:h-40 object-cover"
            />

            <div className="p-3 sm:p-4">
              <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">
                Atlanta Luxury Family Home
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500 mb-3 leading-tight">
                Modern luxury villa with spacious interiors, premium finishes...
              </p>

              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] sm:text-xs font-bold">
                  Rating: 4.8 / 5
                </span>
              </div>

              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="font-bold text-gray-800 text-sm sm:text-base">
                  ₹1.25 Crore
                </span>
                <span className="text-[10px] sm:text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                  Type: Villa
                </span>
              </div>

              <div className="flex justify-between items-center mt-3 sm:mt-4">
                <button
                  onClick={() => navigate("/redirect")}
                  className="bg-[#CBA358] text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg"
                >
                  View Details
                </button>
                <button className="text-gray-400 hover:text-red-500">
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Browse by Property Type */}
      <div className="w-full bg-[#faf7f2] mt-8 sm:mt-10 px-4 sm:px-6 lg:px-10 py-6 sm:py-8 shadow-lg rounded-2xl">
        <h3 className="text-center text-[#1f2937] text-xl sm:text-2xl lg:text-4xl font-bold mb-6 sm:mb-8">
          Browse by Property Type
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="flex flex-col items-center text-center">
            <MdVilla className="text-[#cdaa5d] text-3xl sm:text-4xl lg:text-5xl mb-2" />
            <span className="text-[#4b5563] text-xs sm:text-sm lg:text-lg font-semibold">
              Villas
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <PiBuildingApartmentLight className="text-[#cdaa5d] text-3xl sm:text-4xl lg:text-5xl mb-2" />
            <span className="text-[#4b5563] text-xs sm:text-sm lg:text-lg font-semibold">
              Apartments
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <BiBuildingHouse className="text-[#cdaa5d] text-3xl sm:text-4xl lg:text-5xl mb-2" />
            <span className="text-[#4b5563] text-xs sm:text-sm lg:text-lg font-semibold">
              Duplex
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <BsHouseFill className="text-[#cdaa5d] text-3xl sm:text-4xl lg:text-5xl mb-2" />
            <span className="text-[#4b5563] text-xs sm:text-sm lg:text-lg font-semibold">
              Penthouses
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <MdVilla className="text-[#cdaa5d] text-3xl sm:text-4xl lg:text-5xl mb-2" />
            <span className="text-[#4b5563] text-xs sm:text-sm lg:text-lg font-semibold">
              Farm Houses
            </span>
          </div>
        </div>
      </div>

      <WhyChooseUs />

      <Footer />
    </div>
 
  );
}

export default Dashboard;