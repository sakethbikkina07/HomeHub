import buildinghome from '../assets/buildinghome.jpeg'
import building from '../assets/building.jpeg'
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaBed, FaBath, FaCar, FaRulerCombined, FaTree, FaUtensils, FaSnowflake, FaShieldAlt, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { IoLocationSharp, IoStar, IoArrowBack, IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { MdVilla } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PropertyDetails() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const propertyImages = [
    { src: building, alt: 'Building Home 2' },
    { src: building, alt: 'Building Home 2' },
    { src: building, alt: 'Building Home 2' },
    { src: building, alt: 'Building Home 2' },
    { src: building, alt: 'Building Home 2' },
  ];

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? propertyImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === propertyImages.length - 1 ? 0 : prev + 1
    );
  };

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
    <div className="max-w-full mx-auto bg-[#f9f9f9] overflow-hidden shadow-5xl p-3 md:p-5 min-h-screen">

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
                <div className="p-3 bg-gray-100 rounded-full cursor-pointer shadow-sm">
                  <IoMdNotifications />
                </div>
                <button className="p-3 bg-gray-100 rounded-full cursor-pointer shadow-sm"
                  onClick={() => navigate("/profile")}>
                  <CgProfile />
                </button>
              </div>
            </div>
          </div>

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
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl rounded-l-3xl p-6 flex flex-col gap-4 animate-slide-in"
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
              <IoArrowBack className="text-lg text-[#CBA358]" />
              <span className="text-sm font-medium text-gray-700">Back to Dashboard</span>
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between w-full mx-auto px-2 sm:px-4 md:px-10">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 md:gap-3 bg-white border border-gray-200 px-3 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm cursor-pointer hover:shadow-md hover:border-[#CBA358] transition-all duration-300"
        >
          <IoArrowBack className="text-[#CBA358] text-sm" />
          <span className="text-xs md:text-sm font-semibold text-gray-600 group-hover:text-[#CBA358] transition-colors duration-300">
            Back to Dashboard
          </span>
        </button>

        <button className="flex items-center gap-2 bg-white cursor-pointer border border-gray-200 px-3 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm font-bold text-xs md:text-sm hover:border-[#CBA358] hover:text-[#CBA358] transition-all duration-300">
          <IoFilterSharp className="text-[#CBA358]" /> Filter
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 px-2 sm:px-4 md:px-10 py-5 md:py-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-4">
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">
              <img
                src={propertyImages[currentImageIndex].src}
                alt={propertyImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />

              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
              >
                <IoChevronBack className="text-base md:text-xl text-gray-800" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
              >
                <IoChevronForward className="text-base md:text-xl text-gray-800" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 lg:hidden">
                {propertyImages.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-[#CBA358] w-5' : 'bg-white/70'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {propertyImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${
                  index === currentImageIndex ? 'border-3 border-[#CBA358] scale-105 shadow-md shadow-[#CBA358]/20' : 'border-2 border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-0 bg-white rounded-2xl sm:flex sm:items-center sm:justify-between px-4 md:px-6 py-3 md:py-4 shadow-sm">
            <div className="flex items-center gap-2 text-gray-700 justify-center sm:justify-start">
              <MdVilla className="text-[#98A886] text-lg md:text-xl" />
              <span className="font-semibold text-xs md:text-sm">Villa</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-2 text-gray-700 justify-center sm:justify-start">
              <IoLocationSharp className="text-[#CBA358] text-lg md:text-xl" />
              <span className="font-semibold text-xs md:text-sm">Vijayawada</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-1.5 text-gray-700 justify-center sm:justify-start">
              <IoStar className="text-yellow-500 text-lg md:text-xl" />
              <span className="font-bold text-xs md:text-sm">4.8</span>
              <span className="text-gray-400 text-xs">/5</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-2 text-gray-700 justify-center sm:justify-start">
              <FaRulerCombined className="text-[#98A886] text-sm" />
              <span className="font-semibold text-xs md:text-sm">3200 sq.ft</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <div>
              <p className="text-[#98A886] font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-widest mb-1">Luxury Property</p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
                Atlanta Luxury <span className="text-[#CBA358]">Family Home</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 md:mb-6 text-gray-500">
            <IoLocationSharp className="text-[#CBA358] flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">Vijayawada, Near Benz Circle, Andhra Pradesh</span>
          </div>

          <div className="relative bg-white rounded-2xl p-4 md:p-6 mb-4 md:mb-6 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CBA358] rounded-l-2xl"></div>
            <h3 className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider mb-2 ml-3">About This Property</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed ml-3">
              Experience premium family living in this elegant villa featuring spacious interiors, modern architecture, premium amenities, and excellent connectivity to key city locations.
            </p>
          </div>

          <div className="w-full grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="bg-[#98A886] p-3 md:p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <MdVilla className="text-white/80 text-lg sm:text-xl md:text-2xl mx-auto mb-1 md:mb-1.5" />
              <p className="text-white/80 text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-wider mb-0.5 font-semibold">Property Type</p>
              <p className="text-white font-bold text-xs sm:text-sm md:text-lg">Villa</p>
            </div>

            <div className="bg-[#CBA358] p-3 md:p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <IoStar className="text-white/80 text-lg sm:text-xl md:text-2xl mx-auto mb-1 md:mb-1.5" />
              <p className="text-white/80 text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-wider mb-0.5 font-semibold">User Rating</p>
              <p className="text-white font-bold text-xs sm:text-sm md:text-lg">4.8 / 5</p>
            </div>

            <div className="bg-[#98A886] p-3 md:p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <GiMoneyStack className="text-white/80 text-lg sm:text-xl md:text-2xl mx-auto mb-1 md:mb-1.5 relative z-10" />
              <p className="text-white/80 text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-wider mb-0.5 font-semibold relative z-10">Starting Price</p>
              <p className="text-white font-bold text-xs sm:text-sm md:text-lg relative z-10">₹1.25 Cr</p>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="h-px flex-1 bg-gray-300"></div>
              <h2 className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 uppercase tracking-widest whitespace-nowrap">Property Features</h2>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-2 md:p-3 flex flex-col items-center gap-1 md:gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group"
                >
                  <div className="text-[#98A886] text-base sm:text-lg md:text-xl group-hover:text-[#CBA358] group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <p className="text-[7px] sm:text-[8px] md:text-[10px] font-semibold text-gray-600 text-center leading-tight">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4 mt-auto">
            <button className="flex-1 sm:flex-none sm:w-auto lg:w-1/2 bg-[#CBA358] text-white py-3 md:py-4 px-6 rounded-2xl font-bold text-sm md:text-lg hover:bg-[#b58f4a] hover:shadow-xl hover:shadow-[#CBA358]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] lg:ml-auto">
              Contact Owner
            </button>
            <button className="bg-white border-2 border-gray-200 p-3 md:p-4 rounded-2xl cursor-pointer hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-all duration-300 group flex-shrink-0">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails;