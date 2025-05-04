"use client"

import { useState } from "react"
import { Heart, Trash2, ShoppingCart } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Fast ",
      price: 129.99,
      image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    },
    {
      id: 2,
      name: "clorel",
      price: 249.99,
      image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    },
    {
      id: 3,
      name: "shampoo car wash",
      price: 79.99,
      image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    },
    {
      id: 4,
      name: "shampoo car wash",
      price: 79.99,
      image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    },
  ])

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-red-600 flex items-center">
            <Heart className="mr-2" /> My Wishlist
          </h1>
          <span className="text-gray-600 font-medium">{wishlistItems.length} items</span>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <Heart className="h-16 w-16 mx-auto text-red-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Add items to your wishlist to save them for later</p>
            <NavLink to={'/products'} className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
              Continue Shopping
            </NavLink>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div 
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative bg-gray-100 p-4 flex justify-center">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-40 w-full object-contain" />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <NavLink to={'/productDetails'} className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-red-600 font-bold mb-3">${item.price.toFixed(2)}</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
