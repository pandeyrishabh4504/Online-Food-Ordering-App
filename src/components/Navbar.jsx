import React from 'react'

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          🍽️ Foodie<span className="text-blue-600">Hub</span>
        </h1>
        <div className="relative">
          <span className="text-gray-700">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar