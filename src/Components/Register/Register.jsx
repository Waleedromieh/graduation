"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Register() {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Hello, Friend!</h1>
            <p className="text-sm sm:text-base mb-6 md:mb-8">
              Enter your personal details and start your journey with us
            </p>
            {/* <button className="border border-white rounded-full py-2 px-6 sm:px-8 text-white hover:bg-red-700 transition-colors w-max text-sm sm:text-base">
              
            </button> */}
            <NavLink to={'/login'} className="border border-white rounded-full py-2 px-6 sm:px-8 text-white hover:bg-red-700 transition-colors w-max text-sm sm:text-base">SIGN IN</NavLink>
          </div>
        </div>

        {/* Right side - Sign up form */}
        <div className="bg-white w-full md:w-3/5 p-6 sm:p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 text-center mb-6 md:mb-8">Create Account</h2>

            {/* Social login options */}
            <div className="flex justify-center space-x-4 mb-6 md:mb-8">
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <a href="https://www.facebook.com/profile.php?id=100064804803798" target="_blank"><span className="font-bold">f</span></a>
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <span className="font-bold">G</span>
              </button>
              {/* <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <span className="font-bold">in</span>
              </button> */}
            </div>

            <div className="text-center text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
              or use your email for registration:
            </div>

            {/* Sign up form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
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
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

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
                SIGN UP
              </button>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-white border-3 border-red-500 text-red-600 py-2 sm:py-3 rounded-full mt-3 sm:mt-8 hover:bg-red-700 hover:text-white  hover:border-white transition-colors text-sm sm:text-base"
              >
                SIGN UP WITH GOOGLE <span className="w-10 flex"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 100 100">
<path fill="#78a0cf" d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"></path><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path><path fill="#cee1f4" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path><path fill="#78a0cf" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path><path fill="#78a0cf" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path><path fill="#fff" d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"></path><path fill="#f1bc19" d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"></path><path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"></path><g><path fill="#ea5167" d="M35.233,47.447C36.447,40.381,42.588,35,50,35c3.367,0,6.464,1.123,8.968,2.996l6.393-6.885 C61.178,27.684,55.83,25.625,50,25.625c-11.942,0-21.861,8.635-23.871,20.001L35.233,47.447z"></path><path fill="#00a698" d="M58.905,62.068C56.414,63.909,53.335,65,50,65c-7.842,0-14.268-6.02-14.934-13.689l-8.909,2.97 C28.23,65.569,38.113,74.125,50,74.125c6.261,0,11.968-2.374,16.27-6.27L58.905,62.068z"></path><path fill="#48bed8" d="M68.5,45.5h-4.189H50.5v9h13.811c-1.073,3.414-3.333,6.301-6.296,8.179l7.245,6.038 c5.483-4.446,8.99-11.233,8.99-18.842c0-1.495-0.142-2.955-0.401-4.375H68.5z"></path><path fill="#fde751" d="M35,50c0-2.183,0.477-4.252,1.316-6.123l-7.818-5.212c-1.752,3.353-2.748,7.164-2.748,11.21 c0,3.784,0.868,7.365,2.413,10.556L36,55C35.634,53.702,35,51.415,35,50z"></path></g><g><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925 c5.75,0,11.362,2.005,15.804,5.646l0.576,0.472l-7.327,7.892l-0.504-0.377C56.051,36.688,53.095,35.7,50,35.7 c-7.885,0-14.3,6.415-14.3,14.3S42.115,64.3,50,64.3c5.956,0,11.195-3.618,13.324-9.1L50,55.208l-0.008-10.184l24.433-0.008 l0.104,0.574c0.274,1.503,0.421,2.801,0.421,4.285C74.95,63.633,63.758,74.825,50,74.825z M50,26.325 c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55c0-1.211-0.105-2.228-0.3-3.458H51.192 L51.2,53.8h14.065l-0.286,0.91C62.914,61.283,56.894,65.7,50,65.7c-8.657,0-15.7-7.043-15.7-15.7S41.343,34.3,50,34.3 c3.19,0,6.245,0.955,8.875,2.768l5.458-5.878C60.238,28.048,55.178,26.325,50,26.325z"></path></g>
</svg></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
