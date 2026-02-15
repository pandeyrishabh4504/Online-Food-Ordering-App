import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import FilterBar from './components/FilterBar'
import FoodCard from './components/FoodCard'
import Cart from './components/Cart'
import Toast from './components/Toast'
import { foodData } from './data/foodData'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState(null)

  // Load cart from localStorage – with error handling
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('foodieCart')
      if (savedCart) {
        const parsed = JSON.parse(savedCart)
        setCartItems(Array.isArray(parsed) ? parsed : [])
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage', error)
      setCartItems([])
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('foodieCart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setToast({ message: `${product.name} added to cart!`, type: 'success' })
  }

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    setToast({ message: 'Item removed from cart', type: 'success' })
  }

  const placeOrder = () => {
    if (cartItems.length === 0) {
      setToast({ message: 'Your cart is empty!', type: 'error' })
      return
    }
    setCartItems([])
    setToast({ message: 'Order placed successfully! 🎉', type: 'success' })
  }

  const filteredFood = foodData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      <Navbar cartCount={cartCount} />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            {filteredFood.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                <span className="text-6xl block mb-4">😕</span>
                <h3 className="text-xl font-medium text-gray-700 mb-2">No items found</h3>
                <p className="text-gray-500">Try changing your filters or search term</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredFood.map((item) => (
                  <FoodCard key={item.id} item={item} onAddToCart={addToCart} />
                ))}
              </div>
            )}
          </div>
          <div className="lg:col-span-1">
            <Cart
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              onPlaceOrder={placeOrder}
            />
          </div>
        </div>
      </main>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default App