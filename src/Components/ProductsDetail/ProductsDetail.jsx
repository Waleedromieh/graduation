import { useState } from "react"
import img1 from '../../assets/royal soft.jpg'
export default function ProductsDetail() {
  const [quantity, setQuantity] = useState(1)

  const product = {
    name: "Classic Red Sneakers",
    price: 129.99,
    description:
      "Premium quality sneakers made with genuine leather and durable rubber soles. Perfect for casual wear or light athletic activities.",
    features: [
      "Genuine leather upper",
      "Cushioned insole for comfort",
      "Durable rubber outsole",
      "Breathable mesh lining",
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  }

  const handleQuantityChange = (e) => {
    setQuantity(Number.parseInt(e.target.value))
  }

  const addToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Product Details */}
      <div className="max-w-7xl mx-auto p-4 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={img1}
                alt={product.name}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={img1 || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-auto rounded-lg border border-gray-200 cursor-pointer hover:border-red-500"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="mt-2">
              <span className="text-2xl font-bold text-red-600">${product.price}</span>
            </div>

            <div className="mt-6">
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Features:</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Quantity:</h3>
              <div className="flex items-center mt-2">
                <select
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={addToCart}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center text-gray-600 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>14-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src="https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200"
                  alt={`Related product ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Related Sneaker {item}</h3>
                  <p className="text-red-600 font-bold mt-1">$99.99</p>
                  <button className="mt-2 w-full bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
