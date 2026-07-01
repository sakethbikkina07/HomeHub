import buildinghome from '../assets/buildinghome.jpeg' 
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa"; 
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';         

function PropertyDetails() {
  return (      
    <div className="max-w-full mx-auto bg-[#E8E4DC] overflow-hidden shadow-xl p-6 min-h-screen">
      
       <nav className="flex items-center justify-between bg-white border border-gray-100 rounded-full px-6 py-3 shadow-sm mb-8">
                <div className="flex items-center gap-40">
                  <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
                  <button className="font-bold cursor-pointer text-lg text-gray-800">Dashboard</button>
                </div>
      
                <div className="hidden md:flex items-center flex-1 max-w-md mx-10">
                  <span className="mr-2 text-gray-500"><FaSearch /></span>
                  <input 
                    type="text" 
                    placeholder="" 
                    className="w-full border-b border-gray-400 outline-none bg-transparent text-sm"
                  />
                </div>
      
                <div className="flex items-center gap-4">
                  <button
                    className="bg-[#CBA358] cursor-pointer text-white px-5 py-2 rounded-full text-sm font-medium"
                  >
                    Login/Register 
                  </button>
                  <div className="p-2 bg-gray-100 rounded-full cursor-pointer"><IoMdNotifications /></div>
                  <div className="p-2 bg-gray-100 rounded-full cursor-pointer"><CgProfile /></div>
                </div>
              </nav>

      <div className="flex flex-col lg:flex-row gap-8 px-6">
        
        <div className="w-full lg:w-1/2">
          <img 
            src={buildinghome} 
            alt="property" 
            className="w-full h-full object-cover rounded-l-lg shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2">
          
          <div className="flex justify-end items-center gap-4 mb-6">
            <button className="flex items-center gap-2 bg-white cursor-pointer border border-gray-300 px-6 py-2 rounded-full shadow-sm font-bold">
              <span><IoFilterSharp /></span> Filter
            </button>
            <div className="bg-white p-3 rounded-full shadow-sm cursor-pointer">
               <FaHeart className="text-red-500" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Atlanta Luxury Family Home
          </h1>

          <div className="bg-white border-l-4 border-[#98A886] rounded-xl p-6 mb-6 shadow-sm">
            <p className="text-sm text-gray-700 text-center leading-relaxed">
              Experience premium family living in this elegant villa featuring spacious interiors, modern architecture, premium amenities, and excellent connectivity to key city locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#98A886] p-4 rounded-xl text-center">
              <p className="text-white font-bold leading-12">
                Property Type : <span className="font-bold">Villa</span>
              </p>
            </div>

            <div className="bg-white border-green-800 border-1 p-4 rounded-xl text-center shadow-sm">
              <p className="font-bold text-gray-800">Location :</p>
              <p className="font-bold text-gray-800">Vijayawada , Near Benz Circle</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#CBA358] p-4 rounded-xl text-center">
              <p className="text-white text-xl font-bold">Price: ₹1.25 Crore</p>
              <p className="text-white text-sm">Starting Price</p>
            </div>

            <div className="bg-white border-yellow-600 border-1 p-4 rounded-xl text-center shadow-sm flex items-center justify-center">
              <p className="font-bold text-gray-800">Rating :  4.8 / 5</p>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-[#98A886] px-10 py-2 rounded-xl">
              <h2 className="text-white text-xl font-bold">Property Features</h2>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="grid grid-cols-2 gap-3">
              <ul className="space-y-2 text-gray-800">
                <li>• 5 Bedrooms</li>
                <li>• 4 Bathrooms</li>
                <li>• 2 Car Parking Space</li>
                <li>• 3200 sq.ft Area</li>
                <li>• Private Garden</li>
              </ul>

              <ul className="space-y-2 text-gray-800">
                <li>• Modern Kitchen</li>
                <li>• Air Conditioning</li>
                <li>• 24/7 Security</li>
                <li>• High-Speed Wi-Fi</li>
                <li>• Swimming Pool</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className="bg-[#CBA358] text-white px-10 py-3 rounded-xl font-bold hover:bg-[#b58f4a]">
              Contact Owner
            </button>
            <div className="bg-gray-100 p-3 rounded-full cursor-pointer">
              <FaRegHeart />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default PropertyDetails;