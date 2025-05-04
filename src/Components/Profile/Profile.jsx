"use client"

import { useState } from "react"
import { CalendarIcon, Package, ArrowLeft, User, LogOut } from "lucide-react"

export default function ProfilePage() {
  // Tabs state
  const [activeTab, setActiveTab] = useState("orders")

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Waleed",
    email: "WaleedAbdullah@gmail.com",
    password: "waleed123",
    phone: "1067205589",
    address: "EL-shrook, cairo , Egypt",
  })

  // Mock orders data
  const [orders, setOrders] = useState([
    {
      id: "ORD-12345",
      date: "2023-04-20",
      total: 129.99,
      status: "Delivered",
      items: [
        { name: "monazefat", price: 79.99, quantity: 1 },
        { name: "monazef", price: 25.0, quantity: 2 },
      ],
    },
    {
      id: "ORD-12346",
      date: "2023-05-15",
      total: 249.99,
      status: "Delivered",
      items: [{ name: "colorel", price: 249.99, quantity: 1 }],
    },
    {
      id: "ORD-12347",
      date: "2023-05-28",
      total: 85.5,
      status: "Processing",
      items: [{ name: "glass", price: 85.5, quantity: 1 }],
    },
  ])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the updated data to your backend
    alert("Profile information updated successfully!")
  }

  // Check if order is returnable (within 14 days)
  const isReturnable = (orderDate) => {
    const orderTime = new Date(orderDate).getTime()
    const currentTime = new Date().getTime()
    const daysDifference = Math.floor((currentTime - orderTime) / (1000 * 3600 * 24))
    return daysDifference <= 14
  }

  // Handle order return
  const handleReturnOrder = (orderId) => {
    // Here you would typically send the return request to your backend
    alert(`Return request initiated for order ${orderId}`)

    // Update the order status in our local state
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: "Return Requested" } : order)))
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-25 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-lg shadow p-6 sticky top-8">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-3xl text-gray-600">{userData.name.charAt(0)}</span>
              </div>
              <h2 className="text-xl font-semibold">{userData.name}</h2>
              <p className="text-gray-500 text-sm">{userData.email}</p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-3 ${activeTab === "orders" ? "bg-gray-100 font-medium" : "hover:bg-gray-50"}`}
              >
                <Package size={18} />
                <span>My Orders</span>
              </button>

              <button
                onClick={() => setActiveTab("account")}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-3 ${activeTab === "account" ? "bg-gray-100 font-medium" : "hover:bg-gray-50"}`}
              >
                <User size={18} />
                <span>Account Settings</span>
              </button>

              <button className="w-full text-left px-4 py-2 rounded-md flex items-center gap-3 text-red-500 hover:bg-red-50 mt-8">
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Orders History Tab */}
          {activeTab === "orders" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Order History</h1>

              {orders.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <Package size={48} className="mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-medium mb-2">No orders yet</h3>
                  <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                  <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800">
                    <ArrowLeft size={16} />
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{order.id}</h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <CalendarIcon size={14} className="mr-1" />
                              <span>
                                {new Date(order.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-medium">${order.total.toFixed(2)}</span>
                            <span
                              className={`text-sm px-2 py-1 rounded-full ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Processing"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-b py-4 my-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between py-2">
                              <div>
                                <span className="font-medium">{item.name}</span>
                                <span className="text-gray-500 text-sm ml-2">x{item.quantity}</span>
                              </div>
                              <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <button className="text-gray-500 hover:text-gray-700 text-sm underline">View Details</button>

                          {isReturnable(order.date) && order.status === "Delivered" && (
                            <button
                              onClick={() => handleReturnOrder(order.id)}
                              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm"
                            >
                              Return Order
                            </button>
                          )}

                          {!isReturnable(order.date) && order.status === "Delivered" && (
                            <span className="text-sm text-gray-500">Return period expired</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Account Settings Tab */}
          {activeTab === "account" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
<div className="md:flex justify-between items-center gap-3.5 sm:block">
<div className=" rounded-lg shadow p-6 sm:w-[50%] md:w-full mt-3.5">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap">
                    <div className="space-y-2 w-full">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    </div>

                    <div className="space-y-2 w-full">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    </div>

                    {/* <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                      <p className="text-xs text-gray-500">Leave blank to keep current password</p>
                    </div> */}

                    <div className="space-y-2 w-full">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2 w-full">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setActiveTab("orders")}
                      className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-800">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
<div className=" rounded-lg shadow p-6 sm:w-[50%] md:w-full mt-3.5  ">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap">
                    <div className="space-y-2 w-full">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                      <p className="text-xs text-gray-500">Leave blank to keep current password</p>
                    </div>
                    <div className="space-y-2 w-full">
                      <label htmlFor="NewPassword" className="block text-sm font-medium text-gray-700">
                        NewPassword
                      </label>
                      <input
                        type="password"
                        id="NewPassword"
                        name="NewPassword"
                        value={userData.NewPassword}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                      <p className="text-xs text-gray-500">Leave blank to keep current password</p>
                    </div>
                    <div className="space-y-2 w-full">
                      <label htmlFor="ConfirmPassword" className="block text-sm font-medium text-gray-700">
                        ConfirmPassword
                      </label>
                      <input
                        type="password"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        value={userData.ConfirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                      <p className="text-xs text-gray-500">Leave blank to keep current password</p>
                    </div>
                    {/* <div className="space-y-2 md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                    </div> */}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setActiveTab("orders")}
                      className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-800">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
</div>
             
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
