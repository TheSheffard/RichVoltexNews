import { Link } from "react-router-dom";
import { NavLinks } from "../Components/NavComp/NavFucn";
import AdSense from "../Components/AdSense";


export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Punch 9ja
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              At Punch 9ja, we gather, investigate, and present news and current events 
              through various media platforms. Delivering trusted journalism to millions 
              of readers worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-white text-sm font-semibold">
                    {social.charAt(0)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Categories
            </h3>
            <ul className="space-y-3">
              {NavLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-red-500 transition-colors duration-300"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
                  Disclaimer
                </Link>
              </li>
            </ul>

          
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>Copyright © {new Date().getFullYear()} Punch 9ja. All rights reserved.</p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>📰 Trusted News Source</span>
              <span>🌍 Global Coverage</span>
              <span>⚡ Real-time Updates</span>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-300">24/7 Updates</span>
              </div>
              <div className="text-xs text-gray-500">
                Made with ❤️ for Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdSense adSlot="3891595190" />

    </footer>
  );
};