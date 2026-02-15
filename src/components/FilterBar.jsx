import React from 'react'

const FilterBar = ({ selectedCategory, onCategoryChange, searchQuery, onSearchChange }) => {
  const categories = ['All', 'Veg', 'Drinks']

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-gray-100">
      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 Search for dishes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all
              ${selectedCategory === cat 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar