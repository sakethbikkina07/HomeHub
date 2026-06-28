import building from '../assets/building.jpeg'
import logo from '../assets/logo.png'
import google from '../assets/google.avif'
import facebook from '../assets/facebook.avif'

function Login() {
  return (
      <div className="flex bg-white w-full min-h-screen overflow-hidden">
        
        <div className="w-1/2 h-screen relative">
          <img 
            src={building} 
            alt="building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-white rounded-full overflow-hidden w-20 h-20 p-2 flex items-center justify-center shadow-lg">
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="w-1/2 p-10 flex flex-col justify-center">
          
          <h2 className="text-5xl mb-20 font-serif">
            Welcome Back User....
          </h2>

          <input 
            type="text" 
            placeholder="Username" 
            className="w-full p-4 mb-10 rounded-full bg-gray-100 border-2 border-yellow-600 outline-none text-left px-10"
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 mb-6 rounded-full bg-gray-100 border-2 border-yellow-600 outline-none text-left px-10"
          />

          <div className="flex justify-between mb-10 px-4">
            <a href="#" className="text-sm font-bold">Remember Me</a>
            <a href="#" className="text-sm font-bold">Forgot Password</a>
          </div>

          <button className="w-full p-4 bg-yellow-600 text-white rounded-full text-xl mb-10  hover:bg-yellow-700 ">
            Login Button
          </button>

          <div className="flex justify-center gap-10 mb-15">
            <img 
              src={google} 
              alt="google" 
              className="w-12 h-12 cursor-pointer rounded-full"
            />
            <img 
              src={facebook} 
              alt="facebook" 
              className="w-12 h-12 cursor-pointer rounded-full"
            />
          </div>

          <p className="text-center">
            New User ? Register here →
          </p>

        </div>
      </div>
  )
}

export default Login