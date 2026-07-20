import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import bannerBg from '../../assets/banner.png'
import Footer from '../Footer'
import { FiPlus, FiUsers, FiHome, FiTrendingUp, FiUser, FiBell, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

function AdminDashboard() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const recentUsers = [
    { name: 'User 1', date: '26/06/26' },
    { name: 'User 2', date: '26/06/26' },
    { name: 'User 3', date: '26/06/26' },
    { name: 'User 4', date: '25/06/26' },
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
          <Link to="/admin" className="text-[#CBA358] font-semibold border-b-2 border-[#CBA358] pb-1 transition">
            Dashboard
          </Link>
          <Link to="/users" className="text-gray-600 hover:text-[#CBA358] font-medium transition">
            Manage Users
          </Link>
          <Link to="/houses" className="text-gray-600 hover:text-[#CBA358] font-medium transition">
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
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#CBA358]/10 text-[#CBA358] font-semibold transition-colors"
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
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
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

      <div className="flex items-center justify-between mt-5 md:mt-8 mb-4 md:mb-6">
        <div
          className="w-full mt-2 relative rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden bg-cover bg-right bg-no-repeat shadow-lg"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#CBA358] from-30% via-[#CBA358]/80 via-60% to-[#CBA358]/40" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6">
            <div>
              <p className="text-yellow-50 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-2 md:mb-3">
                Welcome Back
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-1 md:mb-2">
                Hey Admin <span className="inline-block">👋🏻</span>
              </h1>
              <p className="text-yellow-50 text-xs md:text-base max-w-lg">
                Here's what's happening with your properties and users today.
              </p>
            </div>

            <button
              onClick={() => navigate('/users')}
              className="relative z-10 bg-white text-yellow-700 font-semibold px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 flex items-center gap-2 whitespace-nowrap text-xs md:text-sm"
            >
              <FiUser className="w-4 h-4 md:w-5 md:h-5" />
              Manage Users
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mt-4 md:mt-8">
        <div className="group bg-white rounded-xl md:rounded-2xl px-4 md:px-6 py-4 md:py-5 border border-gray-100 shadow-sm flex items-center gap-4 md:gap-5 transition-all duration-300 hover:shadow-lg hover:border-[#CBA358] hover:-translate-y-1">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#CBA358]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#CBA358] group-hover:scale-110 flex-shrink-0">
            <FiUsers className="w-5 h-5 md:w-6 md:h-6 text-[#CBA358] transition-colors duration-300 group-hover:text-white" />
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">Total Users</p>
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mt-0.5">248</h3>
          </div>
        </div>

        <div className="group bg-white rounded-xl md:rounded-2xl px-4 md:px-6 py-4 md:py-5 border border-gray-100 shadow-sm flex items-center gap-4 md:gap-5 transition-all duration-300 hover:shadow-lg hover:border-[#CBA358] hover:-translate-y-1">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#CBA358]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#CBA358] group-hover:scale-110 flex-shrink-0">
            <FiHome className="w-5 h-5 md:w-6 md:h-6 text-[#CBA358] transition-colors duration-300 group-hover:text-white" />
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">Total Houses</p>
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mt-0.5">32</h3>
          </div>
        </div>

        <div className="group bg-white rounded-xl md:rounded-2xl px-4 md:px-6 py-4 md:py-5 border border-gray-100 shadow-sm flex items-center gap-4 md:gap-5 transition-all duration-300 hover:shadow-lg hover:border-[#CBA358] hover:-translate-y-1">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#CBA358]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#CBA358] group-hover:scale-110 flex-shrink-0">
            <FiTrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#CBA358] transition-colors duration-300 group-hover:text-white" />
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">Occupancy Rate</p>
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mt-0.5">89%</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
        <div className="lg:col-span-2 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div>
              <h2 className="text-lg md:text-2xl font-serif text-gray-900">Recent Users</h2>
              <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">Latest registered users on the platform</p>
            </div>
            <Link to="/users" className="text-xs md:text-sm font-semibold text-[#CBA358] hover:scale-105 hover:underline transition whitespace-nowrap">
              View All →
            </Link>
          </div>

          <div>
            {recentUsers.map((user, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer group border border-transparent hover:border-[#CBA358] hover:shadow-md transition-all duration-300 ${
                  idx !== recentUsers.length - 1 ? 'border-b !border-b-gray-200 hover:!border-[#CBA358]' : ''
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#CBA358] flex items-center justify-center text-white font-semibold shadow-md flex-shrink-0">
                    <FiUser className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <p className="font-medium text-sm md:text-base text-gray-900">{user.name}</p>
                </div>
                <span className="text-[10px] md:text-xs text-gray-500 bg-gray-100 px-2 md:px-3 py-1 rounded-full">
                  {user.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div
            onClick={() => navigate('/houses')}
            className="bg-[#CBA358] rounded-2xl md:rounded-3xl p-6 md:p-8 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition duration-300 relative overflow-hidden group flex-1"
          >
            <div className="relative z-10">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 md:mb-4">
                <FiPlus className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-serif text-white mb-1 md:mb-2">Add New House</h3>
              <p className="text-yellow-50 text-xs md:text-sm">List a new property on the platform</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#CBA358] shadow-sm hover:shadow-xl transition duration-300 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-500 mb-1">House Count</p>
                <h3 className="text-3xl md:text-4xl font-serif text-[#CBA358]">32</h3>
              </div>
              <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#CBA358]">
                <FiHome className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
              <p className="text-[10px] md:text-xs text-gray-500">
                <span className="text-green-600 font-semibold">+3</span> added this month
              </p>
            </div>
          </div>

          <button className="w-full bg-white border-2 border-[#CBA358] text-[#CBA358] font-semibold py-3 md:py-4 rounded-xl md:rounded-2xl cursor-pointer hover:bg-[#CBA358] hover:text-white transition duration-300 shadow-sm text-sm md:text-base">
            View Analytics →
          </button>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default AdminDashboard;
