import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

export const Cart = () => {
  const { all_product, cartItems, getTotalCartAmount } = useContext(ShopContext)

  const cartProducts = all_product.filter((product) => cartItems[product.id] > 0)
  const totalAmount = getTotalCartAmount()

  return (
    <div className='p-8'>
      <h2 className='text-3xl font-semibold mb-4'>Cart Items</h2>

      {cartProducts.length === 0 ? (
        <p className='text-gray-500'>Your cart is empty.</p>
      ) : (
        <div className='space-y-4'>
          {cartProducts.map((product) => {
            const qty = cartItems[product.id]
            const lineTotal = product.new_price * qty

            return (
              <div
                key={product.id}
                className='flex justify-between items-center border border-gray-300 rounded-md px-4 py-3'
              >
                <div>
                  <p className='font-medium'>Product: {product.name}</p>
                  <p className='text-sm text-gray-500'>Product ID: {product.id}</p>
                  <p className='text-sm text-gray-700'>Unit Price: ${product.new_price.toFixed(2)}</p>
                </div>
                <div className='text-right'>
                  <p>Quantity: {qty}</p>
                  <p className='font-semibold'>Subtotal: ${lineTotal.toFixed(2)}</p>
                </div>
              </div>
            )
          })}

          <div className='flex justify-end border-t border-gray-200 pt-4'>
            <div className='text-right'>
              <p className='text-lg font-semibold'>Total: ${totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

