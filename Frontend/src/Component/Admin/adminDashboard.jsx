import { useState } from "react";
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
import { IoFilterSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaHome, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { MdVilla } from "react-icons/md";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { BiBuildingHouse } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import Footer from "../Component/Footer";

function Dashboard() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

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
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length,
    );
  };

  return (
    <div className="w-full mx-auto bg-[#f9f9f9] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-6 shadow-5xl p-6">
      <nav className="w-9/12 bg-white border border-gray-100 rounded-[50px] px-4 py-2 m-auto shadow-sm mb-8">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full border border-gray-300 rounded-full"
                />
              </div>
              <div>
                <p className="text-md text-gray-500 font-bold">HomeHub</p>
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
                <button
                  className="p-3 bg-gray-100 rounded-full cursor-pointer shadow-sm"
                  onClick={() => navigate("/profile")}
                >
                  <CgProfile />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 mb-6">
        <div>
          <p className="text-md text-gray-500 mb-1">Welcome Jada...👋🏻</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Find Your Dream Home Today !
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-full shadow-sm font-bold text-gray-700 hover:border-[#CBA358] transition-all duration-300 group">
            <span>
              <IoFilterSharp className="text-[#CBA358]" />
            </span>
            <span className="text-sm group-hover:text-[#CBA358] transition-all duration-300">
              Filter
            </span>
          </button>
          <div className="bg-white p-4 rounded-full shadow-sm cursor-pointer border border-gray-100">
            <FaHeart className="text-red-500" />
          </div>
        </div>
      </div>

      <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden mb-10 shadow-md">
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

              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-20">
                <div className="flex items-center gap-2 w-fit bg-[#CBA358] text-white text-xs font-semibold px-4 py-2 rounded-full mb-4 border border-white/30">
                  <FaStar /> <span>Recommended For You</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 leading-tight max-w-xl drop-shadow-lg">
                  {slide.title}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 max-w-lg drop-shadow-md">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium border border-white/30">
                    {slide.price}
                  </span>
                  <button className="bg-[#CBA358] hover:bg-[#b8923e] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg transition duration-300">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-xs border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition duration-300"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-xs border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition duration-300"
        >
          <FaChevronRight />
        </button>

        <div className="absolute sm:bottom-20 sm:left-1/2  -translate-x-1/2 flex items-center gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-9 bg-[#CBA358]"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="relative lg:absolute lg:bottom-0 left-0 w-full bg-black/30 backdrop-blur-xl lg:rounded-b-[30px] px-4 sm:px-6 lg:px-8 py-5 lg:py-4 mt-6 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-3 justify-center lg:justify-start text-center sm:text-left lg:border-r lg:border-white/40 pr-4">
              <FaHome className="text-[#D4A017] text-3xl shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-sm lg:text-base">
                  Handpicked Homes
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Curated just for you
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3 justify-center lg:justify-start text-center sm:text-left lg:border-r lg:border-white/40 pr-4">
              <FaShieldAlt className="text-[#D4A017] text-3xl shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-sm lg:text-base">
                  Verified Listings
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Trusted & Secure
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3 justify-center lg:justify-start text-center sm:text-left lg:border-r lg:border-white/40 pr-4">
              <FaHeadset className="text-[#D4A017] text-3xl shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-sm lg:text-base">
                  Expert Support
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Here to help you
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3 justify-center lg:justify-start text-center sm:text-left">
              <FaRegHeart className="text-[#D4A017] text-3xl shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-sm lg:text-base">
                  Best Deals
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Unbeatable Prices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">Top Picks For You</h3>
        <p className="text-sm text-gray-500">
          Explore our top handpicked listings for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:-translate-y-1 transition duration-300"
          >
            <img
              src={buildinghome}
              alt="house"
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-1">
                Atlanta Luxury Family Home
              </h3>
              <p className="text-xs text-gray-500 mb-3 leading-tight">
                Modern luxury villa with spacious interiors, premium finishes...
              </p>

              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold">Rating: 4.8 / 5</span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-gray-800">₹1.25 Crore</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                  Type: Villa
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => navigate("/redirect")}
                  className="bg-[#CBA358] text-white text-xs px-4 py-2 rounded-lg"
                >
                  view details
                </button>
                <button className="text-gray-400 hover:text-red-500">
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#faf7f2] mt-10 px-4 sm:px-6 lg:px-10 py-8 shadow-lg">
        <h3 className="text-center text-[#1f2937] text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Browse by Property Type
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center">
          <div className="flex flex-col items-center text-center">
            <MdVilla className="text-[#cdaa5d] text-4xl sm:text-5xl mb-2" />
            <span className="text-[#4b5563] text-sm sm:text-base lg:text-lg font-semibold">
              Villas
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <PiBuildingApartmentLight className="text-[#cdaa5d] text-4xl sm:text-5xl mb-2" />
            <span className="text-[#4b5563] text-sm sm:text-base lg:text-lg font-semibold">
              Apartments
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <BiBuildingHouse className="text-[#cdaa5d] text-4xl sm:text-5xl mb-2" />
            <span className="text-[#4b5563] text-sm sm:text-base lg:text-lg font-semibold">
              Duplex Houses
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <BsHouseFill className="text-[#cdaa5d] text-4xl sm:text-5xl mb-2" />
            <span className="text-[#4b5563] text-sm sm:text-base lg:text-lg font-semibold">
              Penthouses
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <MdVilla className="text-[#cdaa5d] text-4xl sm:text-5xl mb-2" />
            <span className="text-[#4b5563] text-sm sm:text-base lg:text-lg font-semibold">
              Farm Houses
            </span>
          </div>
        </div>
      </div>

      <div>
        <WhyChooseUs />
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;