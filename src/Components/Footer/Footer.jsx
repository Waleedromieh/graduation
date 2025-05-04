import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-red-600 font-bold text-lg mb-4">CPC GO</h3>
              <p className="text-gray-600">Creating amazing experiences since 1934.</p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-red-600 font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink to={"/"} className="text-gray-600 hover:text-red-500 transition-colors">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"about"} className="text-gray-600 hover:text-red-500 transition-colors">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"services"} className="text-gray-600 hover:text-red-500 transition-colors">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"contact"} className="text-gray-600 hover:text-red-500 transition-colors">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-red-600 font-bold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-gray-600">
                <p>Cairo Governorate 4272011 Qasr El Nil</p>1
                <p> شارع دار الشفا </p>
                <p className="mt-2">
                  <a href="mailto:info@example.com" className="text-red-500 hover:underline">
                    CPCGO@gmail.com 
                  </a>
                </p>
                <p>
                  <a href="tel:+11234567890" className="text-red-500 hover:underline">
                  19816
                  </a>
                </p>
              </address>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} CPC GO. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  