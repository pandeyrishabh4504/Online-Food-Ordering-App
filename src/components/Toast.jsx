import React, { useEffect } from 'react'

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600'

  return (
    <div className={`fixed bottom-6 right-6 ${bgColor} text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-up flex items-center gap-3`}>
      <span className="text-xl">✅</span>
      <p className="font-medium">{message}</p>
      <button onClick={onClose} className="ml-4 text-white/80 hover:text-white">
        ✕
      </button>
    </div>
  )
}

export default Toast