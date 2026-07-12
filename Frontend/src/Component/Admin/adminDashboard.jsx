import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import bannerBg from '../../assets/banner.png'
import { FiPlus, FiUsers, FiHome, FiTrendingUp, FiUser, FiBell, FiSearch } from 'react-icons/fi'

function AdminDashboard() {
  const navigate = useNavigate()

  const recentUsers = [
    { name: 'User 1', date: '26/06/26' },
    { name: 'User 2', date: '26/06/26' },
    { name: 'User 3', date: '26/06/26' },
    { name: 'User 4', date: '25/06/26' },
  ]

  return (
    <div className="min-h-screen bg-[#f9f9f9] p-6">

      <nav className="w-9/12 m-auto flex items-center justify-between bg-white rounded-full px-6 py-3 border border-gray-200 shadow-md">

        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2 border-1 border-gray-300 shadow-sm">
            <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-serif text-lg text-gray-800">HomeHub</span>
        </div>

        <div className="flex items-center gap-8">
          <Link to="/dashboard" className="text-[#CBA358] font-semibold border-b-2 border-[#CBA358] pb-1 transition">
            Dashboard
          </Link>
          <Link to="/users" className="text-gray-600 hover:text-[#CBA358] font-medium transition">
            Manage Users
          </Link>
          <Link to="/houses" className="text-gray-600 hover:text-[#CBA358] font-medium transition">
            Manage Houses
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative w-10 h-10 rounded-full border-1 border-gray-300 flex items-center justify-center bg-white shadow-sm cursor-pointer hover:border-2 hover:border-[#CBA358] hover:shadow-md transition">
          <FiBell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-10 h-10 rounded-full border-1 border-gray-300 flex items-center justify-center bg-white shadow-sm cursor-pointer hover:border-2 hover:border-[#CBA358] hover:shadow-md transition">
            <FiUser className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </nav>

    <div className="flex items-center justify-between mt-8 mb-6">
        <div 
            className="w-full mt-2 relative rounded-3xl p-12 overflow-hidden bg-cover bg-right bg-no-repeat shadow-lg "
            style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="absolute  bg-gradient-to-r from-[#CBA358] from-30% via-[#CBA358]/80 via-60% to-[#CBA358]/40"></div>

            <div className="relative z-10 flex items-center justify-between gap-6">
            <div>
                <p className="text-yellow-50 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                Welcome Back
                </p>
                <h1 className="text-5xl font-serif text-white mb-2">
                Hey Admin <span className="inline-block">👋🏻</span>
                </h1>
                <p className="text-yellow-50 text-base max-w-lg">
                Here's what's happening with your properties and users today.
                </p>
            </div>

            <button
                onClick={() => navigate('/users')}
                className="relative z-10 bg-white text-yellow-700 font-semibold px-6 py-3 rounded-full shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 flex items-center gap-2 whitespace-nowrap"
            >
                <FiUser className="w-5 h-5" />
                Manage Users
            </button>
            </div>
        </div>
    </div>
      <div className="grid grid-cols-3 gap-5 mt-8">

        <div className="group bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm flex items-center gap-5 transition-all duration-400 hover:shadow-lg hover:border-[#CBA358] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#CBA358]/10 flex items-center justify-center transition-all duration-400 group-hover:bg-[#CBA358] group-hover:scale-110">
            <FiUsers className="w-6 h-6 text-[#CBA358] transition-colors duration-400 group-hover:text-white" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Total Users</p>
            <h3 className="text-3xl font-serif text-gray-900 mt-0.5">248</h3>
          </div>
        </div>

        <div className="group bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm flex items-center gap-5 transition-all duration-400 hover:shadow-lg hover:border-[#CBA358] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#CBA358]/10 flex items-center justify-center transition-all duration-400 group-hover:bg-[#CBA358] group-hover:scale-110">
            <FiHome className="w-6 h-6 text-[#CBA358] transition-colors duration-400 group-hover:text-white" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Total Houses</p>
            <h3 className="text-3xl font-serif text-gray-900 mt-0.5">32</h3>
          </div>
        </div>

        <div className="group bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm flex items-center gap-5 transition-all duration-400 hover:shadow-lg hover:border-[#CBA358] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#CBA358]/10 flex items-center justify-center transition-all duration-400 group-hover:bg-[#CBA358] group-hover:scale-110">
            <FiTrendingUp className="w-6 h-6 text-[#CBA358] transition-colors duration-400 group-hover:text-white" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Occupancy Rate</p>
            <h3 className="text-3xl font-serif text-gray-900 mt-0.5">89%</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-serif text-gray-900">Recent Users</h2>
              <p className="text-sm text-gray-500 mt-1">Latest registered users on the platform</p>
            </div>
            <Link to="/users" className="text-sm font-semibold text-[#CBA358] hover:scale-105 hover:underline transition">
              View All →
            </Link>
          </div>

          <div>
            {recentUsers.map((user, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer group border border-transparent hover:border-[#CBA358] hover:shadow-md transition-all duration-300 ${idx !== recentUsers.length - 1 ? 'border-b !border-b-gray-200 hover:!border-[#CBA358]' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#CBA358] flex items-center justify-center text-white font-semibold shadow-md">
                    <FiUser className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {user.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {user.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 h-full">

          <div
            onClick={() => navigate('/houses')}
            className="bg-[#CBA358] rounded-3xl items-center p-8 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition duration-300 relative overflow-hidden group flex-1"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <FiPlus className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Add New House</h3>
              <p className="text-yellow-50 text-sm">
                List a new property on the platform
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#CBA358] shadow-sm hover:shadow-xl transition duration-300 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">House Count</p>
                <h3 className="text-4xl font-serif text-[#CBA358]">32</h3>
              </div>
              <div className="p-4 rounded-2xl bg-[#CBA358]">
                <FiHome className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                <span className="text-green-600 font-semibold">+3</span> added this month
              </p>
            </div>
          </div>

          <button className="w-full bg-white border-2 border-[#CBA358] text-[#CBA358] font-semibold py-4 rounded-2xl cursor-pointer hover:bg-[#CBA358] hover:text-white transition duration-300 shadow-sm">
            View Analytics →
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
