import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import bannerBg from '../../assets/banner.png'
import Footer from '../Footer'
import { FiHome, FiUser, FiBell, FiSearch, FiPlus, FiEdit2, FiTrash2, FiMapPin, FiX, FiStar, FiMenu, FiTrendingUp, FiUsers } from 'react-icons/fi'

function ManageHouses() {

  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  const houses = [
    { name: 'Sky Apartments', type: '3BHK', rating: 4.5, location: 'Downtown', price: '₹ 1.25 cr', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' },
    { name: 'Ocean View Villa', type: '4BHK', rating: 4.8, location: 'Beachside', price: '₹ 7.80 cr', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
    { name: 'Green Meadows', type: '2BHK', rating: 4.2, location: 'Suburb', price: '₹ 3.20 cr', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800' },
    { name: 'Royal Heights', type: '3BHK', rating: 4.6, location: 'City Center', price: '₹ 5.50 cr', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800' },
    { name: 'Palm Residency', type: '4BHK', rating: 4.7, location: 'Coastal', price: '₹ 6.90 cr', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800' },
    { name: 'Sunset Villas', type: '3BHK', rating: 4.4, location: 'Hillside', price: '₹ 4.80 cr ', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800' },
    { name: 'Maple Homes', type: '2BHK', rating: 4.1, location: 'Suburb', price: '₹ 2.90 cr', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800' },
    { name: 'Crystal Manor', type: '5BHK', rating: 4.9, location: 'Uptown', price: '₹ 9.20 cr', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800' },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f9] p-3 md:p-6">

      <nav className="w-full lg:w-9/12 m-auto flex items-center justify-between bg-white rounded-[20px] md:rounded-full px-4 md:px-6 py-2.5 md:py-3 border border-gray-200 shadow-md relative">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-white rounded-full p-1.5 md:p-2 border border-gray-300 shadow-sm">
            <img src={logo} alt="logo" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
          </div>
          <span className="font-serif text-sm md:text-lg text-gray-800">HomeHub</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/admin" className="text-gray-600 hover:text-[#CBA358] font-medium transition">
            Dashboard
          </Link>
          <Link to="/users" className="text-gray-600 hover:text-[#CBA358] font-medium transition">
            Manage Users
          </Link>
          <Link to="/houses" className="text-[#CBA358] font-semibold border-b-2 border-[#CBA358] pb-1 transition">
            Manage Houses
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm cursor-pointer hover:border-2 hover:border-[#CBA358] hover:shadow-md transition">
            <FiBell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm cursor-pointer hover:border-2 hover:border-[#CBA358] hover:shadow-md transition">
            <FiUser className="w-5 h-5 text-gray-700" />
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button className="relative w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm cursor-pointer">
            <FiBell className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm cursor-pointer"
          >
            {mobileMenuOpen ? (
              <FiX className="w-4 h-4 text-gray-700" />
            ) : (
              <FiMenu className="w-4 h-4 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl rounded-l-3xl p-6 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1.5 border border-gray-300 shadow-sm">
                  <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
                </div>
                <span className="font-serif text-sm text-gray-800">HomeHub</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-gray-100 rounded-full cursor-pointer"
              >
                <FiX className="text-gray-700 text-lg" />
              </button>
            </div>

            <div className="h-px bg-gray-200"></div>

            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
            >
              <FiTrendingUp className="text-lg" />
              Dashboard
            </Link>
            <Link
              to="/users"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
            >
              <FiUsers className="text-lg" />
              Manage Users
            </Link>
            <Link
              to="/houses"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#CBA358]/10 text-[#CBA358] font-semibold transition-colors"
            >
              <FiHome className="text-lg" />
              Manage Houses
            </Link>

            <div className="h-px bg-gray-200"></div>

            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors">
              <FiUser className="text-lg" />
              Profile
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors">
              <FiBell className="text-lg" />
              Notifications
            </button>
          </div>
        </div>
      )}

      <div className="w-full mt-4 md:mt-6 relative rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden bg-cover bg-right bg-no-repeat shadow-lg"
        style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#CBA358] from-30% via-[#CBA358]/80 via-60% to-[#CBA358]/40" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6">
          <div>
            <p className="text-yellow-50 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-2 md:mb-3">
              Property Management
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-1 md:mb-2">
              Manage Houses
            </h1>
            <p className="text-yellow-50 text-xs md:text-base max-w-lg">
              View, edit and manage all properties listed on your platform.
            </p>
          </div>

          <button
            className="bg-white text-yellow-700 font-semibold px-4 md:px-8 py-2.5 md:py-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 flex items-center gap-2 text-xs md:text-sm whitespace-nowrap"
          >
            <FiPlus className="w-4 h-4 md:w-5 md:h-5" />
            Add New House
          </button>
        </div>
      </div>

      <div className="mt-5 md:mt-8 bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-100 shadow-sm">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-3 md:gap-4">
          <div>
            <h2 className="text-lg md:text-2xl font-serif text-gray-900">All Houses</h2>
            <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">A complete list of all properties available on the platform</p>
          </div>

          <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <FiSearch className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search houses..."
                className="pl-9 md:pl-11 pr-4 py-2.5 md:py-3 w-full sm:w-56 md:w-72 bg-[#f9f9f9] border border-gray-200 rounded-full text-xs md:text-sm text-gray-700 focus:outline-none focus:border-[#CBA358] focus:bg-white transition"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {houses.map((house, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-[#CBA358] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-36 sm:h-40 md:h-48 overflow-hidden bg-gray-100">
                <img
                  src={house.image}
                  alt={house.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full flex items-center gap-1 shadow-md">
                  <FiStar className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#CBA358] fill-[#CBA358]" />
                  <span className="text-[10px] md:text-xs font-semibold text-gray-800">{house.rating}</span>
                </div>
                <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-[#CBA358] text-white text-[10px] md:text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-md">
                  {house.type}
                </div>
              </div>

              <div className="p-3 md:p-5">
                <h3 className="text-sm md:text-lg font-serif text-gray-900 mb-0.5 md:mb-1">{house.name}</h3>
                <div className="flex items-center gap-1.5 text-gray-500 mb-2 md:mb-3">
                  <FiMapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="text-[10px] md:text-xs">{house.location}</span>
                </div>

                <div className="flex items-center justify-between pb-3 md:pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-[9px] md:text-xs text-gray-400 uppercase tracking-wider">Price</p>
                    <p className="text-sm md:text-lg font-semibold text-[#CBA358]">{house.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 md:mt-4">
                  <button className="flex-1 py-2 md:py-2.5 rounded-full bg-[#CBA358] text-white text-[10px] md:text-sm font-semibold flex items-center justify-center gap-1.5 md:gap-2 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition duration-300">
                    <FiEdit2 className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Edit
                  </button>
                  <button className="flex-1 py-2 md:py-2.5 rounded-full border border-gray-200 text-gray-700 text-[10px] md:text-sm font-semibold flex items-center justify-center gap-1.5 md:gap-2 cursor-pointer hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-300">
                    <FiTrash2 className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100 gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-900">{houses.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{houses.length}</span> houses
          </p>

          <div className="flex items-center gap-1.5 md:gap-2">
            <button className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-medium text-gray-600 border border-gray-200 hover:border-[#CBA358] hover:text-[#CBA358] transition">
              Previous
            </button>
            <button className="w-7 h-7 md:w-9 md:h-9 rounded-full text-[10px] md:text-sm font-semibold bg-[#CBA358] text-white shadow-md">
              1
            </button>
            <button className="w-7 h-7 md:w-9 md:h-9 rounded-full text-[10px] md:text-sm font-medium text-gray-600 hover:bg-[#CBA358]/10 hover:text-[#CBA358] transition">
              2
            </button>
            <button className="w-7 h-7 md:w-9 md:h-9 rounded-full text-[10px] md:text-sm font-medium text-gray-600 hover:bg-[#CBA358]/10 hover:text-[#CBA358] transition">
              3
            </button>
            <button className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-medium text-gray-600 border border-gray-200 hover:border-[#CBA358] hover:text-[#CBA358] transition">
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ManageHouses