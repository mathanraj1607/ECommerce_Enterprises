import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'

export const Cart = () => {
  const { all_product, cartItems, getTotalCartAmount } = useContext(ShopContext)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentMessage, setPaymentMessage] = useState('')

  const cartProducts = all_product.filter((product) => cartItems[product.id] > 0)
  const totalAmount = getTotalCartAmount()

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    // Simulate payment processing
    setPaymentMessage('Payment processed successfully! Thank you for your purchase.')
    // Reset form after a delay (optional)
    setTimeout(() => {
      setPaymentMessage('')
      setShowPayment(false)
    }, 3000)
  }

  return (
    <div className='p-8'>
      {showPayment ? (
        <div>
          <h2 className='text-3xl font-semibold mb-4'>Payment Information</h2>
          {paymentMessage && (
            <p className='text-green-500 mb-4'>{paymentMessage}</p>
          )}
          <form onSubmit={handlePaymentSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Card Number</label>
              <input
                type='text'
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                placeholder='•••• •••• •••• ••••'
              />
            </div>
            <div className='flex gap-4'>
              <div>
                <label className='block text-sm font-medium mb-1'>Expiry Date</label>
                <input
                  type='text'
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                  placeholder='MM/YY'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>CVV</label>
                <input
                  type='text'
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                  placeholder='•••'
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={() => setShowPayment(false)}
                className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300'
              >
                Back to Cart
              </button>
              <button
                type='submit'
                className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200'
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <h2 className='text-3xl font-semibold mb-4'>Cart Items</h2>

          {cartProducts.length === 0 ? (
            <p className='text-gray-500'>Your cart is empty.</p>
          ) : (
            <>
              <div className='space-y-4'>
                {cartProducts.map((product) => {
                  const qty = cartItems[product.id]
                  const unitPrice = product?.price ?? product?.new_price ?? 0
                  const lineTotal = unitPrice * qty

                  return (
                    <div
                      key={product.id}
                      className='flex justify-between items-center border border-gray-300 rounded-md px-4 py-3'
                    >
                      <div>
                        <p className='font-medium'>Product: {product.name}</p>
                        <p className='text-sm text-gray-500'>Product ID: {product.id}</p>
                        <p className='text-sm text-gray-700'>Unit Price: ${unitPrice.toFixed(2)}</p>
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

              <div className='mt-6'>
                <button
                  onClick={() => setShowPayment(true)}
                  className='px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors duration-200'
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

