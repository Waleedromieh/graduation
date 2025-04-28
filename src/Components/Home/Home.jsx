import img1 from '../../assets/Frame 14.png'
import img2 from '../../assets/Frame 33.png'
import img3 from '../../assets/Frame 44.png'
import img4 from '../../assets/Frame 4.png'
import img5 from '../../assets/Frame 5.png'
import { NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">Explore, shop, and find effective cleaning</h1>
          <p className="text-gray-600">wide selection of over 200 cleaning products</p>
          <div className="flex space-x-4">
            <NavLink to={'products'} className="bg-red-500 text-white px-6 py-2 rounded-full font-medium">start shopping</NavLink>
            <NavLink to={'services'} className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full font-medium">start shopping</NavLink>
          </div>

          {/* Stats */}
          <div className="flex space-x-12 pt-6">
            <div>
              <p className="font-bold text-xl">500 +</p>
            </div>
            <div>
              <p className="font-bold text-xl">200</p>
            </div>
            <div>
              <p className="font-bold text-xl">10K +</p>
            </div>
          </div>
        </div>

        {/* Featured Product */}
        <div className="bg-gray-200 rounded-lg p-4">
          <img
            src={img1}
            alt="Hand with blue glove cleaning"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-sm text-gray-500">4+1</p>
              <p className="text-sm text-gray-500">Limited quantity</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-gray-300 text-gray-800 px-4 py-1 rounded-md text-sm cursor-pointer">Add to cart</button>
              <button className="bg-gray-300 text-gray-800 px-4 py-1 rounded-md text-sm cursor-pointer">View details</button>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">NEW ARRIVAL PRODUCTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img2}
              alt="Cleaning product"
              className="w-full h-40 "
            />
            <div className="p-4">
              <h3 className="font-bold uppercase text-sm">PRODUCT NAME</h3>
              <p className="text-xs text-gray-600 mt-2">
                Lorem ipsum sit dolorem facta tempore blandit a condimentum porta mauris dolor e elementum eu mi elit
                suspendisse nisi et.
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-xs text-gray-500">PRICE</p>
                  <p className="font-bold">50 EGP</p>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs cursor-pointer">ADD TO CART</button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img3}
              alt="Cleaning product"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold uppercase text-sm">PRODUCT NAME</h3>
              <p className="text-xs text-gray-600 mt-2">
                Lorem ipsum sit dolorem facta tempore blandit a condimentum porta mauris dolor e elementum eu mi elit
                suspendisse nisi et.
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-xs text-gray-500">PRICE</p>
                  <p className="font-bold">80 EGP</p>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs cursor-pointer">ADD TO CART</button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img4}
              alt="Cleaning product"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold uppercase text-sm">PRODUCT NAME</h3>
              <p className="text-xs text-gray-600 mt-2">
                Lorem ipsum sit dolorem facta tempore blandit a condimentum porta mauris dolor e elementum eu mi elit
                suspendisse nisi et.
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-xs text-gray-500">PRICE</p>
                  <p className="font-bold">94 EGP</p>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs cursor-pointer">ADD TO CART</button>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img5}
              alt="Cleaning product"
              className="w-full   h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold uppercase text-sm">PRODUCT NAME</h3>
              <p className="text-xs text-gray-600 mt-2">
                Lorem ipsum sit dolorem facta tempore blandit a condimentum porta mauris dolor e elementum eu mi elit
                suspendisse nisi et.
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-xs text-gray-500">PRICE</p>
                  <p className="font-bold">230 EGP</p>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer text-xs cursor-pointer">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 bg-red-100 p-6 rounded-lg">
        {/* Oil Banner */}
        <div className="bg-white p-6 rounded-lg flex items-center cursor-pointer">
          <div className="flex-1">
            <h3 className="text-3xl font-bold">OIL</h3>
            <p className="text-sm mt-2 uppercase">
              VARIETY OF PRIME OILS WITH <br />
              "PERFECT" QUALITY
            </p>
          </div>
          <div className="flex-1">
            <img
              src={img5}
              alt="Oil product"
              className="h-32 object-contain mx-auto"
            />
          </div>
        </div>

        {/* Petrochemicals Banner */}
        <div className="bg-white p-6 rounded-lg flex items-center cursor-pointer">
          <div className="flex-1">
            <h3 className="text-xl font-bold">
              PETROCHEMICALS
              <br />
              PRODUCTS
            </h3>
            <p className="text-sm mt-2">
              Variety of perfect quality petro
              <br />
              chemicals products
            </p>
          </div>
          <div className="flex-1">
            <img
              src={img3}
              alt="Petrochemical product"
              className="h-32 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
