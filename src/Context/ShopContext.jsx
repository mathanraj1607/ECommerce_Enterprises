import React, { createContext, useEffect, useState } from 'react'
import { API_BASE_URL, list_of_product } from '../Components/Service/ProductService'
import seededProducts from '../Components/Assests/all_product'

export const ShopContext = createContext(null)

export const ShopContextProvider = ({ children }) => {
  const [all_product, setAllProduct] = useState([])
  const [cartItems, setCartItems] = useState({})
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [productsError, setProductsError] = useState(null)

  const extractProductsArray = (raw) => {
    if (Array.isArray(raw)) return raw
    // Common API response shapes
    if (Array.isArray(raw?.products)) return raw.products
    if (Array.isArray(raw?.data)) return raw.data
    if (Array.isArray(raw?.content)) return raw.content
    if (Array.isArray(raw?.items)) return raw.items
    return []
  }

  useEffect(() => {
    let isMounted = true
    setIsLoadingProducts(true)
    setProductsError(null)

    list_of_product()
      .then((response) => {
        if (!isMounted) return
        const products = extractProductsArray(response?.data)
        if (import.meta.env.DEV) {
          // Helps debug "empty cards" quickly without breaking prod builds.
          console.debug('[products] baseUrl=', API_BASE_URL, 'count=', products?.length, 'sample=', products?.[0])
        }
        // If API is reachable but returns an unexpected empty set, fall back to seeded products
        setAllProduct(products?.length ? products : seededProducts)
      })
      .catch((err) => {
        if (!isMounted) return
        setProductsError(err)
        // Fallback keeps UI functional even if API is down / blocked
        setAllProduct(seededProducts)
      })
      .finally(() => {
        if (!isMounted) return
        setIsLoadingProducts(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  // Ensure cart has keys for newly loaded products (default qty 0).
  useEffect(() => {
    if (!all_product?.length) return
    setCartItems((prev) => {
      const next = { ...prev }
      for (const p of all_product) {
        if (p?.id == null) continue
        if (next[p.id] == null) next[p.id] = 0
      }
      return next
    })
  }, [all_product])

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
      const unitPrice = product?.price ?? product?.new_price ?? 0
      return total + unitPrice * qty
    }, 0)
  }

  const contextValue = {
    all_product,
    isLoadingProducts,
    productsError,
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
