import { NavLink } from 'react-router-dom'
import logo from '../../assets/Vector.svg'
import { ShoppingBag } from 'lucide-react';
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to={'/'} className='w-fit flex'>              <span className="text-red-600 font-bold text-xl"><img src={logo} className='w-[70%]' alt="" /></span>
              <span className='text-red-600 font-bold text-xl'> <span className='text-gray-500'>C</span>P<span className='text-gray-500'>C</span> Go</span></NavLink>

            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <NavLink to={'/'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>Home</NavLink>
              <NavLink to={'about'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>About</NavLink>
              <NavLink to={'services'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>Services</NavLink>
              <NavLink to={'contact'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>Contact</NavLink>
              <NavLink to={'products'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>Products</NavLink>
              {/* <NavLink to={'cart'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>    <ShoppingBag /></NavLink> */}

            </div>
          </div>

          {/* Mobile menu button with custom hamburger icon */}
<div className='flex'>
<NavLink to={'cart'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium flex justify-center items-center ':'flex justify-center items-center text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>    <ShoppingBag /></NavLink>

<div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  {/* X icon */}
                  <div className="w-5 h-0.5 bg-red-600 rotate-45 absolute"></div>
                  <div className="w-5 h-0.5 bg-red-600 -rotate-45 absolute"></div>
                </div>
              ) : (
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
                  {/* Hamburger icon */}
                  <div className="w-5 h-0.5 bg-red-600"></div>
                  <div className="w-5 h-0.5 bg-red-600"></div>
                  <div className="w-5 h-0.5 bg-red-600"></div>
                </div>
              )}
            </button>
          </div>
</div>
          

          {/* CTA Button - visible only on desktop */}
          <div className="hidden md:flex md:items-center">
            <NavLink to={'register'} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Get Started
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white flex flex-col items-start">
        <NavLink to={'/'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium ' }>Home</NavLink>
              <NavLink to={'about'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>About</NavLink>
              <NavLink to={'services'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>Services</NavLink>
              <NavLink to={'contact'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>Contact</NavLink>
              <NavLink to={'products'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>Products</NavLink>
              {/* <NavLink to={'cart'} className={(x)=>x.isActive ?'text-white bg-red-500 rounded-2xl   px-3 py-2 text-sm font-medium ':'text-red-600 hover:text-red-800  border-red-600 px-3 py-2 text-sm font-medium hover:bg-red-300 rounded-2xl hover:text-white transition-all duration-300 ease-in-out' }>    <ShoppingBag /></NavLink> */}
          <NavLink to={'register'} className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium justify-center text-center">
            Get Started
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
