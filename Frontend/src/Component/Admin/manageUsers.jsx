import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import bannerBg from '../../assets/banner.png'
import Footer from '../Footer'
import { FiUsers, FiUser, FiBell, FiSearch, FiPlus, FiEdit2, FiTrash2, FiMail, FiMenu, FiX, FiTrendingUp, FiHome } from 'react-icons/fi'

function ManageUsers() {

  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const users = [
    { id: 1, name: 'Username-1', email: 'user1@example.com', joined: '26/06/26' },
    { id: 2, name: 'Username-2', email: 'user2@example.com', joined: '26/06/26' },
    { id: 3, name: 'Username-3', email: 'user3@example.com', joined: '25/06/26' },
    { id: 4, name: 'Username-4', email: 'user4@example.com', joined: '24/06/26' },
    { id: 5, name: 'Username-5', email: 'user5@example.com', joined: '23/06/26' },
    { id: 6, name: 'Username-6', email: 'user6@example.com', joined: '22/06/26' },
    { id: 7, name: 'Username-7', email: 'user7@example.com', joined: '21/06/26' },
    { id: 8, name: 'Username-8', email: 'user8@example.com', joined: '20/06/26' },
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
          <Link to="/users" className="text-[#CBA358] font-semibold border-b-2 border-[#CBA358] pb-1 transition">
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
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
            >
              <FiTrendingUp className="text-lg" />
              Dashboard
            </Link>
            <Link
              to="/users"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#CBA358]/10 text-[#CBA358] font-semibold transition-colors"
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

      <div className="w-full mt-4 md:mt-6 relative rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden bg-cover bg-right bg-no-repeat shadow-lg"
        style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#CBA358] from-30% via-[#CBA358]/80 via-60% to-[#CBA358]/40" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6">
          <div>
            <p className="text-yellow-50 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-2 md:mb-3">
              User Management
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-1 md:mb-2">
              Manage Users
            </h1>
            <p className="text-yellow-50 text-xs md:text-base max-w-lg">
              View, edit and manage all registered users on your platform.
            </p>
          </div>

          <button className="bg-white text-yellow-700 font-semibold px-4 md:px-8 py-2.5 md:py-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 flex items-center gap-2 text-xs md:text-sm whitespace-nowrap">
            <FiPlus className="w-4 h-4 md:w-5 md:h-5" />
            Add New User
          </button>
        </div>
      </div>

      <div className="mt-5 md:mt-8 bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-100 shadow-sm">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-3 md:gap-4">
          <div>
            <h2 className="text-lg md:text-2xl font-serif text-gray-900">All Users</h2>
            <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">A complete list of all users registered on the platform</p>
          </div>

          <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <FiSearch className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-9 md:pl-11 pr-4 py-2.5 md:py-3 w-full sm:w-56 md:w-72 bg-[#f9f9f9] border border-gray-200 rounded-full text-xs md:text-sm text-gray-700 focus:outline-none focus:border-[#CBA358] focus:bg-white transition"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-[#f9f9f9] rounded-xl mb-2">
          <div className="col-span-1 text-xs font-semibold text-gray-500 uppercase">S.No</div>
          <div className="col-span-4 text-xs font-semibold text-gray-500 uppercase">User</div>
          <div className="col-span-4 text-xs font-semibold text-gray-500 uppercase">Email</div>
          <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase">Joined</div>
          <div className="col-span-1 text-xs font-semibold text-gray-500 uppercase text-right">Actions</div>
        </div>

        <div className="hidden md:block">
          {users.map((user, idx) => (
            <div
              key={user.id}
              className={`grid grid-cols-12 gap-4 items-center px-5 py-4 rounded-xl group border border-transparent hover:border-[#CBA358] hover:shadow-md transition-all duration-300 ${
                idx !== users.length - 1 ? 'border-b !border-b-gray-100 hover:!border-[#CBA358]' : ''
              }`}
            >
              <div className="col-span-1 text-sm text-gray-400 font-medium">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#CBA358] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <FiUser className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                </div>
              </div>

              <div className="col-span-4 flex items-center gap-2 text-sm text-gray-600">
                <FiMail className="w-4 h-4 text-gray-400" />
                {user.email}
              </div>

              <div className="col-span-2">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {user.joined}
                </span>
              </div>

              <div className="col-span-1 flex items-center justify-end gap-2">
                <button
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center bg-white cursor-pointer hover:bg-[#CBA358] hover:border-[#CBA358] hover:text-white text-gray-600 transition duration-300"
                  title="Edit User"
                >
                  <FiEdit2 className="w-4 h-4" />
                </button>
                <button
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center bg-white cursor-pointer hover:bg-red-500 hover:border-red-500 hover:text-white text-gray-600 transition duration-300"
                  title="Delete User"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-3">
          {users.map((user, idx) => (
            <div
              key={user.id}
              className="bg-white rounded-xl border border-gray-100 p-4 hover:border-[#CBA358] hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#CBA358] flex items-center justify-center text-white shadow-md flex-shrink-0">
                    <FiUser className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                      <FiMail className="w-3 h-3 text-gray-400" />
                      <span className="truncate max-w-[150px]">{user.email}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-medium">
                  #{String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                  Joined: {user.joined}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white cursor-pointer hover:bg-[#CBA358] hover:border-[#CBA358] hover:text-white text-gray-600 transition duration-300"
                  >
                    <FiEdit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white cursor-pointer hover:bg-red-500 hover:border-red-500 hover:text-white text-gray-600 transition duration-300"
                  >
                    <FiTrash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 md:mt-6 pt-4 md:pt-6 border-t border-gray-100 gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-900">{users.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{users.length}</span> users
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

export default ManageUsers
