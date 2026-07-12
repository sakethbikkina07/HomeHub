import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import building from '../assets/building.jpeg'
import logo from '../assets/logo.png'
import google from '../assets/google.avif'
import facebook from '../assets/facebook.avif'

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

 return (
    <div className="flex bg-white w-full h-screen overflow-hidden">
      
      <div className="w-1/2 h-screen relative">
        <img 
          src={building} 
          alt="building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-6 left-6 bg-white rounded-full overflow-hidden w-15 h-15 p-2 flex items-center justify-center shadow-lg">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="w-1/2 h-screen flex items-center justify-center px-16 bg-white relative overflow-hidden">
        

        <div className="relative z-10 w-full max-w-lg">
          <p className="text-yellow-700 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Welcome Back
          </p>

          <h2 className="text-5xl font-serif text-gray-900 leading-tight mb-4">
            Sign in to continue
          </h2>

          <div>
            <div className="mb-7">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Username
              </label>
              <input 
                type="text" 
                placeholder="Enter your username" 
                className="w-full p-4 rounded-full bg-white border-2 border-yellow-600 outline-none text-left px-6 text-gray-800  placeholder:text-gray-400 hover:border-yellow-700 transition duration-300 hover:scale-105"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Password
              </label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full p-4 rounded-full bg-white border-2 border-yellow-600 outline-none text-left px-6 text-gray-800  placeholder:text-gray-400 hover:border-yellow-700 transition duration-300 hover:scale-105 "
              />
            </div>

            <div className="w-full flex justify-between items-center mb-10 px-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
                <input type="checkbox" className="accent-yellow-600 w-4 h-4" />
                Remember Me
              </label>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-yellow-700 transition">
                Forgot Password
              </a>
            </div>

            <button 
              type="button"
              onClick={handleLogin}
              className="w-5/12 ml-38 p-4 bg-yellow-600 text-white rounded-full text-xl font-semibold text-center hover:bg-yellow-700 transition duration-300 shadow-[0_10px_25px_rgba(202,138,4,0.35)]"
            >
              Login
            </button>
          </div>

          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="flex justify-center gap-6 mb-10">
            <button className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-gray-200 bg-white hover:border-yellow-500 hover:shadow-md transition">
              <img 
                src={google} 
                alt="google" 
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>

            <button className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-gray-200 bg-white hover:border-yellow-500 hover:shadow-md transition">
              <img 
                src={facebook} 
                alt="facebook" 
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm font-medium text-gray-700">Facebook</span>
            </button>
          </div>

          <Link to="/register" className="text-center block text-gray-700 font-medium hover:text-yellow-700 transition">
            New User ? Register here →
          </Link>
        </div>
      </div>
    </div>
  )

}

export default Login