import React from 'react'

// Individual cart item with quantity controls
const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center py-4 border-b border-gray-100 last:border-0">
      <img src={item.image} alt={item.name} className="w-16 h-12 object-cover rounded-md" />
      <div className="flex-1 ml-4">
        <h4 className="font-medium text-gray-800">{item.name}</h4>
        <p className="text-sm text-gray-600">₹{item.price} each</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onDecrease}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <span className="w-6 text-center font-medium">{item.quantity}</span>
        <button
          onClick={onIncrease}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
        >
          +
        </button>
        <button
          onClick={onRemove}
          className="ml-2 text-red-500 hover:text-red-700"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default CartItem