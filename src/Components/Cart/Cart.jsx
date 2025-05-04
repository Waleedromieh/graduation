"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Image from '../../assets/royal soft.jpg'
import { NavLink } from "react-router-dom"

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Car shampoo liquid 750 ml",
    price: 35,
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
  },
  {
    id: 2,
    name: "new fast 3 liter",
    price: 95,
    quantity: 1,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
  },
  {
    id: 3,
    name: "White chlorine 3.750 liter",
    price: 60,
    quantity: 2,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
  },
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = cartItems.length > 0 ? 9.99 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b  from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
              <span className="text-gray-500 text-lg">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </span>
            </div>

            {cartItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center py-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <h2 className="text-xl font-medium text-gray-600 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <NavLink to={'/products'} className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-medium transition-colors">
                  Continue Shopping
                </NavLink>
              </motion.div>
            ) : (
              <>
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    <AnimatePresence>
                      {cartItems.map((item) => (
                        <motion.li
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                          transition={{ duration: 0.3 }}
                          className="py-6 flex"
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="h-full w-full object-fill object-center"
                            />
                          </motion.div>

                          <div className="ml-6 flex-1 flex flex-col">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <motion.p
                                key={`${item.id}-price-${item.quantity}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="ml-4"
                              >
                                ${(item.price * item.quantity).toFixed(2)}
                              </motion.p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex items-center space-x-3">
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="rounded-full p-1 border border-gray-300 hover:bg-gray-100 transition-colors"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                  </svg>
                                </motion.button>

                                <motion.span
                                  key={`${item.id}-qty-${item.quantity}`}
                                  initial={{ scale: 1.2 }}
                                  animate={{ scale: 1 }}
                                  className="font-medium text-gray-700 w-6 text-center"
                                >
                                  {item.quantity}
                                </motion.span>

                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="rounded-full p-1 border border-gray-300 hover:bg-gray-100 transition-colors"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 4v16m8-8H4"
                                    />
                                  </svg>
                                </motion.button>
                              </div>

                              <motion.button
                                whileHover={{ scale: 1.1, color: "#ef4444" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeItem(item.id)}
                                className="font-medium text-gray-500 hover:text-red-500 transition-colors"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </motion.button>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>

                <div className="h-px bg-gray-200 my-8"></div>

                <div className="space-y-4">
                  <div className="flex justify-between text-base text-gray-600">
                    <p>Subtotal</p>
                    <motion.p key={`subtotal-${subtotal}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      ${subtotal.toFixed(2)}
                    </motion.p>
                  </div>
                  <div className="flex justify-between text-base text-gray-600">
                    <p>Shipping</p>
                    <p>${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-base text-gray-600">
                    <p>Tax</p>
                    <motion.p key={`tax-${tax}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      ${tax.toFixed(2)}
                    </motion.p>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between text-lg font-bold">
                    <p>Total</p>
                    <motion.p
                      key={`total-${total}`}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-xl"
                    >
                      ${total.toFixed(2)}
                    </motion.p>
                  </div>
                </div>

                <div className="mt-10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 text-white py-4 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-red-800 transition-colors"
                  >
                    <NavLink to={'/checkout'}>Proceed to Checkout</NavLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>Need help? Contact our support team at support@example.com</p>
        </motion.div>
      </div>
    </div>
  )
}
