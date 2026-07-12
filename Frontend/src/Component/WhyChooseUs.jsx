import React from "react";
import {
  FaHome,
  FaSearch,
  FaHeart,
  FaPhoneAlt,
} from "react-icons/fa";
import building from "../assets/buildinghome.jpeg";

function WhyChooseUs () {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-[10%] items-center">

        {/* Left Side */}
        <div>
          <p className="text-[#CDAA5D] font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-[#1F1F1F] mt-3">
            Find Your Dream Home
            <br />
            with HomeHub
          </h2>

          <p className="text-[#666666] mt-5 leading-8">
            HomeHub makes finding your perfect home simple by bringing
            verified property listings, smart recommendations, and
            direct owner contact together in one place.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10">

            <div className="flex gap-4">
              <div className="w-17 h-10 rounded-full bg-[#F4E7C5] flex items-center justify-center">
                <FaSearch size={20} className="text-[#CDAA5D]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#222]">
                  Smart Search
                </h3>

                <p className="text-[#666666] text-sm mt-1">
                  Search homes by location, budget,
                  property type and features.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-17 h-10 rounded-full bg-[#F4E7C5] flex items-center justify-center">
                <FaHome size={20} className="text-[#CDAA5D]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#222]">
                  Best Recommendations
                </h3>

                <p className="text-[#666666] text-sm mt-1">
                  Get homes recommended based
                  on your preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-17 h-10 rounded-full bg-[#F4E7C5] flex items-center justify-center">
                <FaHeart size={20} className="text-[#CDAA5D]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#222]">
                  Wishlist
                </h3>

                <p className="text-[#666666] text-sm mt-1">
                  Save your favourite properties
                  and access them anytime.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-15 h-10 rounded-full bg-[#F4E7C5] flex items-center justify-center">
                <FaPhoneAlt size={20} className="text-[#CDAA5D]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#222]">
                  Direct Contact
                </h3>

                <p className="text-[#666666] text-sm mt-1">
                  Contact property owners
                  directly without hassle.
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
            className="rounded-3xl h-[600px] w-full object-cover"
          />

          <div className="absolute left-[-15%] bottom-[10%] bg-[#1E2A38] text-white rounded-3xl p-6 w-50 shadow-xl">

            <FaHome className="text-[#CDAA5D] text-3xl mb-4" />

            <h2 className="text-4xl font-bold">500+</h2>

            <p className="text-lg mt-2 font-medium">
              Premium Homes
            </p>

            <p className="text-gray-300 text-sm mt-3 leading-6">
              Helping users discover their ideal
              home with trusted listings.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;