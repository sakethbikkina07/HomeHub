import logo from '../assets/logo.png'
import { FaLocationArrow, FaPhone, FaEnvelope } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="w-full mt-8 md:mt-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#1a1a1a] text-white py-10 md:py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <div className="bg-white rounded-full p-2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
              <img src={logo} alt="logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">
              Home<span className="text-[#CBA358]">Hub</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md mx-auto sm:mx-0">
            Find your dream home with HomeHub. We connect buyers, sellers, and renters with the perfect properties across India.
          </p>

          <div className="flex justify-center sm:justify-start gap-3 flex-wrap">
            <div className="bg-[#CBA358] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#b58f4a] transition">
              <span className="text-white font-bold text-sm">f</span>
            </div>
            <div className="bg-[#CBA358] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#b58f4a] transition">
              <span className="text-white font-bold text-sm">in</span>
            </div>
            <div className="bg-[#CBA358] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#b58f4a] transition">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <div className="bg-[#CBA358] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#b58f4a] transition">
              <span className="text-white font-bold text-sm">ig</span>
            </div>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-4 text-[#CBA358]">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Dashboard</li>
            <li className="hover:text-white cursor-pointer transition">Properties</li>
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-4 text-[#CBA358]">Our Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">Buy Property</li>
            <li className="hover:text-white cursor-pointer transition">Sell Property</li>
            <li className="hover:text-white cursor-pointer transition">Luxury Villas</li>
            <li className="hover:text-white cursor-pointer transition">Commercial</li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-base md:text-lg font-bold mb-4 text-[#CBA358]">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start justify-center sm:justify-start gap-2">
              <span className="text-gray-200 mt-0.5"><FaLocationArrow /></span>
              <span>Aitam, Tekkali, Andhra Pradesh</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-gray-200"><FaPhone /></span>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 break-all">
              <span className="text-gray-200"><FaEnvelope /></span>
              <span>support@homehub.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-5 md:pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2026 <span className="text-[#CBA358] font-bold">HomeHub</span>. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs sm:text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;