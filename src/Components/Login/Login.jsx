import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Add your signup logic here
      }
    return (
        <div className="min-h-screen pt-18 bg-gray-50 flex items-center justify-center relative overflow-hidden p-4 sm:p-6">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-red-500 -rotate-45 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-yellow-400 rounded-full -translate-x-1/3 translate-y-1/3"></div>
  
        {/* Main container */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl z-10 flex flex-col md:flex-row">
          {/* Left side - Red panel */}
          <div className="bg-red-600 text-white w-full md:w-2/5 p-6 sm:p-8 flex flex-col relative">
            {/* Logo */}
            <div className="flex items-center mb-8 md:mb-12">
              <div className="border border-white p-1 mr-2">
                <span className="text-xs sm:text-sm">CPC</span>
              </div>
              <span className="text-xs sm:text-sm">cooperation</span>
            </div>
  
            {/* Decorative elements - hidden on very small screens */}
            <div className="hidden sm:block absolute top-1/3 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-red-500 rounded-full opacity-30"></div>
            <div className="hidden sm:block absolute bottom-1/4 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-red-500 rounded-full opacity-30"></div>
            <div className="hidden sm:block absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 transform rotate-45 bg-red-500 opacity-30"></div>
  
            {/* Content */}
            <div className="flex-grow flex flex-col justify-center z-10 py-6 md:py-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Welcome Back</h1>
              <p className="text-sm sm:text-base mb-6 md:mb-8">
              To keep connected with us please login with your personal info
              </p>
              {/* <button className="border border-white rounded-full py-2 px-6 sm:px-8 text-white hover:bg-red-700 transition-colors w-max text-sm sm:text-base">
                
              </button> */}
              <NavLink to={'/register'} className="border border-white rounded-full py-2 px-6 sm:px-8 text-white hover:bg-red-700 transition-colors w-max text-sm sm:text-base">SIGN UP</NavLink>
            </div>
          </div>
  
          {/* Right side - Sign up form */}
          <div className="bg-white w-full md:w-3/5 p-6 sm:p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-red-600 text-center mb-6 md:mb-8">Login to CPC </h2>
  
              {/* Social login options */}
              <div className="flex justify-center space-x-4 mb-6 md:mb-8">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="font-bold">f</span>
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="font-bold">G</span>
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="font-bold">in</span>
                </button>
              </div>
  
              <div className="text-center text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                or use your email for registration:
              </div>
  
              {/* Sign up form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-3 sm:space-y-4">
                 
                   
                
  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-9 sm:px-10 py-2 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm sm:text-base"
                      required
                    />
                    <div className="absolute left-3 top-2.5 sm:top-3.5 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
  
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-9 sm:px-10 py-2 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm sm:text-base"
                      required
                    />
                    <div className="absolute left-3 top-2.5 sm:top-3.5 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 sm:py-3 rounded-full mt-6 sm:mt-8 hover:bg-red-700 transition-colors text-sm sm:text-base"
                >
                 Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  