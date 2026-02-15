import React from 'react'
import CartItem from './CartItem'

// ✅ Default parameter ensures cartItems is never undefined
const Cart = ({ cartItems = [], onUpdateQuantity, onRemoveItem, onPlaceOrder }) => {
  
  // ✅ Safe reduce – cartItems is always an array
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleIncrease = (item) => onUpdateQuantity(item.id, item.quantity + 1)
  const handleDecrease = (item) => {
    if (item.quantity > 1) onUpdateQuantity(item.id, item.quantity - 1)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>🛒</span> Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <span className="text-5xl block mb-3">🍽️</span>
          <p className="font-medium">Your cart is empty</p>
          <p className="text-sm mt-1 text-gray-400">Add delicious items from the menu</p>
        </div>
      ) : (
        <>
          <div className="max-h-96 overflow-y-auto pr-1 -mr-1 space-y-1">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={() => handleIncrease(item)}
                onDecrease={() => handleDecrease(item)}
                onRemove={() => onRemoveItem(item.id)}
              />
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-700">Total</span>
              <span className="text-2xl font-bold text-gray-900">₹{totalAmount}</span>
            </div>
            <button
              onClick={onPlaceOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-sm"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart