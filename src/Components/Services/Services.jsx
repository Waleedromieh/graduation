import { Fuel, Car, ShoppingBag, Droplets, Coffee, CreditCard, Clock, MapPin } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="waleed relative bg-gradient-to-r from-red-600 to-red-800 text-white min-h-[500px] ">
        <div className="waleed2 absolute inset-0 z-0">
          </div>
        <div className="absolute z-10 container mx-auto px-4 py-[50%] md:py-24 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-center text-red-100">
            Providing quality services to keep you moving on the road
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fuel Services */}
          <ServiceCard
            icon={<Fuel className="h-10 w-10 text-red-600" />}
            title="Fuel Services"
            description="Premium quality fuels including regular, premium, diesel, and ethanol options to keep your vehicle running at its best."
          />

          {/* Vehicle Maintenance */}
          <ServiceCard
            icon={<Car className="h-10 w-10 text-red-600" />}
            title="Vehicle Maintenance"
            description="Basic maintenance services including oil changes, tire pressure checks, and fluid top-ups to ensure your vehicle stays in optimal condition."
          />

          {/* Convenience Store */}
          <ServiceCard
            icon={<ShoppingBag className="h-10 w-10 text-red-600" />}
            title="Convenience Store"
            description="Well-stocked convenience store with snacks, beverages, travel essentials, and everyday items for your convenience."
          />

          {/* Car Wash */}
          <ServiceCard
            icon={<Droplets className="h-10 w-10 text-red-600" />}
            title="Car Wash"
            description="State-of-the-art car wash facilities to keep your vehicle clean and shining, with options ranging from basic to premium washes."
          />

          {/* Food Services */}
          <ServiceCard
            icon={<Coffee className="h-10 w-10 text-red-600" />}
            title="Food & Beverages"
            description="Fresh coffee, hot food, and grab-and-go meal options to satisfy your hunger and keep you energized during your journey."
          />

          {/* ATM/Banking */}
          <ServiceCard
            icon={<CreditCard className="h-10 w-10 text-red-600" />}
            title="ATM & Banking"
            description="Convenient ATM services for cash withdrawals and basic banking needs while you're on the go."
          />
        </div>
      </div>

      {/* Additional Features */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Additional Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-red-600" />}
              title="24/7 Availability"
              description="Our stations are open 24 hours a day, 7 days a week, ensuring you have access to our services whenever you need them."
            />
            <FeatureCard
              icon={<MapPin className="h-8 w-8 text-red-600" />}
              title="Convenient Locations"
              description="Strategically located stations across the country for your convenience, making it easy to find us wherever you are."
            />
          </div>
        </div>
      </div>

      {/* CTA Section with Background */}
      <div className="relative py-16 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=400&width=1600"
            alt="CPC Station Services"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit any of our CPC stations today and discover the difference quality service makes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Find Nearest Station
            </button>
            <NavLink to={'/products'} className="bg-white border border-red-600 hover:bg-red-50 text-red-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              View Special Offers
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

// Service Card Component
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
