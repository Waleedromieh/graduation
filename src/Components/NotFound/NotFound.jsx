// import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      {/* Top red bar */}
      <div className="absolute top-0 h-2 w-full bg-red-600" />

      {/* Company logo/name */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">CPC COMPANY</h1>
        <div className="mt-1 h-1 w-24 bg-gray-300 mx-auto" />
      </div>

      {/* Error content */}
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-9xl font-extrabold text-red-600">404</h2>
        <div className="mt-4 h-1 w-16 bg-gray-300" />
        <h3 className="mt-6 text-2xl font-semibold text-gray-700">Page Not Found</h3>
        <p className="mt-4 max-w-md text-gray-500">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Back to home button */}
        <NavLink
          to={"/"}
          className="mt-8 flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </NavLink>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CPC Company. All rights reserved.
      </div>
    </div>
  )
}
