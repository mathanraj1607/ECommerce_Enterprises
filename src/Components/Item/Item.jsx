import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

export const Item = (props) => {
  const { addToCart } = useContext(ShopContext)

  // Support both backend field names (url/price/actualPrice) and seeded frontend names (image/new_price/old_price)
  const imgSrc = props.url ?? props.image
  const newPrice = props.price ?? props.new_price
  const oldPrice = props.actualPrice ?? props.old_price

  const handleAddToCart = () => {
    // Ensure we always pass a defined ID
    if (props.id !== undefined) {
      addToCart(props.id)
    }
  }

  return (
    <div className='items flex flex-col items-center transition-transform duration-300 hover:scale-105'>
      <img src={imgSrc} alt='' className='w-full' />
      <p className='w-full text-center'>{props.name}</p>
      <div className='item-price flex flex-row gap-8'>
        <div className='item-price-new  text-gray-500 text-2xl font-medium'>
          ${newPrice}
        </div>
        <div className='item-price-old line-through text-gray-400 text-1xl font-light flex justify-center items-center'>
          ${oldPrice}
        </div>
      </div>
      <button
        className='text-2xl text-white font-medium bg-red-500 p-3 border border-none rounded-4xl cursor-pointer transition-colors duration-200 hover:bg-red-600 active:bg-red-300'
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}
