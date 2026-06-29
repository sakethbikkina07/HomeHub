import buildinghome from '../assets/buildinghome.jpeg' 
import logo from '../assets/logo.png'        
import { FaSearch } from "react-icons/fa"; 
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const properties = [
    1, 2, 3, 4, 5, 6, 7, 8
  ];

  return (      
      <div className="max-w-full mx-auto bg-white overflow-hidden shadow-xl p-6">
        
        <nav className="flex items-center justify-between bg-white border border-gray-100 rounded-full px-6 py-3 shadow-sm mb-8">
          <div className="flex items-center gap-40">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-lg text-gray-800">Dashboard</span>
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
              onClick={() => navigate('/login')}
              className="bg-[#CBA358] text-white px-5 py-2 rounded-full text-sm font-medium"
            >
              Login/Register 
            </button>
            <div className="p-2 bg-gray-100 rounded-full cursor-pointer"><IoMdNotifications /></div>
            <div className="p-2 bg-gray-100 rounded-full cursor-pointer"><CgProfile /></div>
          </div>
        </nav>

        <div className="w-full flex justify-between items-start mb-10">
          <div className="bg-[#98A886] p-6 rounded-2xl w-6/12 text-center">
            <h2 className="text-2xl font-bold text-white">Hey, Jada 👋</h2>
            <p className="text-xl font-serif italic text-white">Find Your Dream Home Today</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-6 py-2 rounded-full shadow-sm font-bold">
              <span><IoFilterSharp /></span> Filter
            </button>
            <div className="bg-white p-3 rounded-full shadow-sm cursor-pointer">
                <FaHeart className="text-red-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <img src={buildinghome} alt="house" className="w-full h-40 object-cover" />
              
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1">Atlanta Luxury Family Home</h3>
                <p className="text-xs text-gray-500 mb-3 leading-tight">
                  Modern luxury villa with spacious interiors, premium finishes...
                </p>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">Rating: 4.8 / 5</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-800">₹1.25 Crore</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">Type: Villa</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button className="bg-[#CBA358] text-white text-xs px-4 py-2 rounded-lg">
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

      </div>
  )
}

export default Dashboard;