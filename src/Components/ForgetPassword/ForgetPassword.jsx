"use client"

import { useState } from "react"
import { ArrowLeft, Mail, Loader2 } from "lucide-react"
// import Link from "next/link"
import { NavLink } from "react-router-dom"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address" })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      // This is where you would integrate with your authentication system
      // For example: await sendPasswordResetEmail(email)

      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setMessage({
        type: "success",
        text: "Password reset instructions have been sent to your email",
      })
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md border border-red-100 rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 space-y-1">
          <h1 className="text-2xl font-bold text-red-600">Reset Password</h1>
          <p className="text-gray-500 text-sm">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <div className="px-6 pb-4">
          {message && (
            <div
              className={`mb-4 p-3 rounded-md ${
                message.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              <p>{message.text}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-red-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Instructions
                </>
              ) : (
                "Send Reset Instructions"
              )}
            </button>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-red-100">
          <NavLink to={"/login"} className="flex items-center text-sm text-red-600 hover:text-red-800 transition-colors">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Login
          </NavLink>
        </div>
      </div>
    </div>
  )
}
