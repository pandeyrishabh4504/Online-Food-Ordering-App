import React from 'react'

const FoodCard = ({ item, onAddToCart }) => {
  const { name, price, category, rating, image } = item

  const categoryColor = {
    Veg: 'bg-green-100 text-green-800',
    Drinks: 'bg-purple-100 text-purple-800'
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-50 hover:border-blue-100">
      <img src={image} alt={name} className="w-full h-44 object-cover" />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h3>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryColor[category]}`}>
            {category}
          </span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>
          <span className="flex items-center text-sm bg-yellow-50 px-2 py-1 rounded-full">
            <span className="text-yellow-600 mr-1">⭐</span> {rating}
          </span>
        </div>
        <button
          onClick={() => onAddToCart(item)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default FoodCard