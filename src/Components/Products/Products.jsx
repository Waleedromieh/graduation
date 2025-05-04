import { NavLink } from "react-router-dom"

export default function Products() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium products made with quality materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <NavLink to={'/productDetails'}
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                    <span className="ml-1 text-yellow-500">★</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  {product.discount > 0 ? (
                    <div className="flex items-center">
                      <p className="font-bold text-gray-900">
                        ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
                      </p>
                      <p className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</p>
                    </div>
                  ) : (
                    <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
                  )}
                  <button className="px-3 py-1 bg-red-900 text-white text-sm font-medium rounded hover:bg-red-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="px-6 py-2 border border-red-900 text-red-900 font-medium rounded hover:bg-red-900 hover:text-white transition-colors">
            View All Products
          </button>
        </div> */}
      </div>
    </section>
  )
}

// Sample product data
const products = [
  {
    id: 1,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew:false ,
    discount: 0,
  },
  {
    id: 2,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew:false ,
    discount: 0,
  },
  {
    id: 3,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 5,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew: false,
    discount: 0,
  },
  {
    id: 6,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 8,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew: false,
    discount: 0,
  },
  {
    id: 9,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 1,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 2,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew: false,
    discount: 0,
  },
  {
    id: 3,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 5,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew: false,
    discount: 0,
  },
  {
    id: 6,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 8,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew: false,
    discount: 0,
  },
  {
    id: 9,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 1,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 2,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew: false,
    discount: 0,
  },
  {
    id: 3,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 5,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew: false,
    discount: 0,
  },
  {
    id: 6,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Car shampoo liquid 750 ml",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51LYGIcUdGL._AC_SX522_.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 8,
    name: "new fast 3 liter",
    category: "Kitchenware",
    price: 24.99,
    rating: 4.5,
    image: "https://green-detergents.com/cdn/shop/files/1_f0a10e30-5279-4dff-b3d0-e532398f3d25.png?v=1712882441&width=1200",
    isNew: false,
    discount: 0,
  },
  {
    id: 9,
    name: "White chlorine 3.750 liter",
    category: "Home Decor",
    price: 89.99,
    rating: 4.9,
    image: "https://media.zid.store/398ee067-ba00-404c-ba29-fc6a2e558ef0/32b4e9e5-6c55-4bdd-8959-ab3ee5b8c9ec.jpg",
    isNew: false,
    discount: 0,
  },
  

]
