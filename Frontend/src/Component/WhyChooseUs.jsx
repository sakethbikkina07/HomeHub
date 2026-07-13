import React from "react";
import { FaHome, FaSearch, FaHeart, FaPhoneAlt } from "react-icons/fa";
import building from "../assets/buildinghome.jpeg";

function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side */}
        <div>
          <p className="text-[#CDAA5D] font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mt-3 leading-tight">
            Find Your Dream Home
            <br />
            with HomeHub
          </h2>

          <p className="text-[#666666] mt-5 leading-7 text-sm sm:text-base">
            HomeHub makes finding your perfect home simple by bringing verified
            property listings, smart recommendations, and direct owner contact
            together in one place.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F4E7C5] flex items-center justify-center flex-shrink-0">
                <FaSearch size={20} className="text-[#CDAA5D]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#222]">
                  Smart Search
                </h3>

                <p className="text-[#666666] text-sm mt-1">
                  Search homes by location, budget, property type and features.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F4E7C5] flex items-center justify-center flex-shrink-0">
                <FaHome size={20} className="text-[#CDAA5D]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#222]">
                  Best Recommendations
                </h3>

                <p className="text-[#666666] text-sm mt-1">
                  Get homes recommended based on your preferences.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F4E7C5] flex items-center justify-center flex-shrink-0">
                <FaHeart size={20} className="text-[#CDAA5D]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#222]">Wishlist</h3>

                <p className="text-[#666666] text-sm mt-1">
                  Save your favourite properties and access them anytime.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F4E7C5] flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt size={20} className="text-[#CDAA5D]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#222]">
                  Direct Contact
                </h3>

                <p className="text-[#666666] text-sm mt-1">
                  Contact property owners directly without hassle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <img
            src={building}
            alt="Luxury Home"
            className="rounded-3xl w-full h-[300px] sm:h-[450px] lg:h-[600px] object-cover"
          />

          {/* Floating Card */}
          <div
            className=" relative mt-4 lg:absolute lg:-left-14 lg:bottom-12 bg-[#1E2A38] text-white rounded-2xl p-5 sm:p-6 w-full sm:w-72 lg:w-52 shadow-xl z-20" >
            <FaHome className="text-[#CDAA5D] text-3xl mb-4" />

            <h2 className="text-3xl sm:text-4xl font-bold">500+</h2>

            <p className="text-base sm:text-lg mt-2 font-medium">
              Premium Homes
            </p>

            <p className="text-gray-300 text-sm mt-3 leading-6">
              Helping users discover their ideal home with trusted listings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
