"use client"

export default function Checkout() {
  // This would be handled with React state in a real implementation
  function handleSubmit(event) {
    event.preventDefault()
    alert("Order placed successfully! You will pay with cash upon delivery.")
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          <p className="mt-2 text-gray-600">Cash payment only</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-red-600">
                <h2 className="text-xl font-semibold text-white">Order Summary</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {/* products */}
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-800">Car shampoo liquid 750 ml</p>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    <p className="font-medium text-gray-800">$35.00</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-800">new fast 3 liter</p>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    <p className="font-medium text-gray-800">$95.00</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-800">
                      White chlorine 3.750 liter</p>
                      <p className="text-sm text-gray-500">Quantity: 2</p>
                    </div>
                    <p className="font-medium text-gray-800">$120.00</p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium text-gray-800">$250.0</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-medium text-gray-800">$5.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Tax</p>
                    <p className="font-medium text-gray-800">$12.00</p>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                    <p className="font-semibold text-gray-800">Total</p>
                    <p className="font-semibold text-red-600">$267.00</p>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 border-l-4 border-red-500 p-4">
                  <div className="flex">
                    <div>
                      <p className="text-sm text-gray-700">
                        <span className="font-bold text-red-600">Cash on delivery:</span> Please have the exact amount
                        ready when your order arrives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-red-600">
                <h2 className="text-xl font-semibold text-white">Delivery Information</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Special instructions for delivery"
                    ></textarea>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h3 className="font-medium mb-2 text-gray-800">Cash Payment Instructions:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                      <li>
                        Have the exact amount of <span className="text-red-600 font-medium">$166.97</span> ready at the
                        time of delivery
                      </li>
                      <li>Our delivery person cannot provide change</li>
                      <li>You will receive a receipt upon payment</li>
                      <li>Delivery typically takes 3-5 business days</li>
                    </ul>
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <button
                    type="submit"
                    className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mb-2">
                    Place Order - Pay with visa
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Place Order - Pay with Cash on Delivery
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
