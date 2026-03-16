import React, { createContext, useState } from 'react'
import all_product from '../Components/Assests/all_product'

export const ShopContext = createContext(null)

// Initialize cart with all products set to quantity 0
const getDefaultCart = () => {
  const cart = {}
  all_product.forEach((product) => {
    cart[product.id] = 0
  })
  return cart
}

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }))
  }

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0)
  }

  const getTotalCartAmount = () => {
    return all_product.reduce((total, product) => {
      const qty = cartItems[product.id] || 0
      if (qty <= 0) return total
      return total + product.new_price * qty
    }, 0)
  }

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getTotalCartAmount,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}
