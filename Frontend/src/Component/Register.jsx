import { Link } from 'react-router-dom'
import building from '../assets/building.jpeg'
import logo from '../assets/logo.png'

function Register() {
  return (

      <div className="flex bg-white rounded-lg overflow-hidden">
        
        <div className="w-1/2 p-10 flex flex-col justify-center">
          
          <h2 className="text-5xl mb-15 font-serif">
            New Registeration
          </h2>

          <input 
            type="text" 
            placeholder="Username" 
            className="w-11/12 p-3 mb-5 rounded-full bg-gray-100 border-2 border-yellow-600 outline-none text-left px-10"
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-11/12 p-3 mb-5 rounded-full bg-gray-100 border-2 border-yellow-600 outline-none text-left px-10"
          />

          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-11/12 p-3 mb-5 rounded-full bg-gray-100 border-2 border-yellow-600 outline-none text-left px-10"
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-11/12 p-3 mb-5 rounded-full bg-gray-100 border-2 border-yellow-600 outline-none text-left px-10"
          />

          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-11/12 p-3 mb-10 rounded-full bg-gray-100 border-2 border-yellow-600 outline-none text-left px-10"
          />

          <div className="flex justify-center mb-10">
            <button className="px-16 py-3 bg-yellow-600 text-white rounded-full text-xl hover:bg-yellow-700">
              Register
            </button>

          </div>

          <Link to="/" className="text-center block">
              Already have an account? Login here →
            </Link>

        </div>

        <div className="w-1/2 h-screen relative">
          <img 
            src={building} 
            alt="building" 
            className="w-full h-full object-cover"
          />

          <div className="absolute top-6 right-6 bg-white rounded-full overflow-hidden w-15 h-15 p-2 flex items-center justify-center shadow-lg">
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </div>
        </div>

      </div>
  )
}

export default Register