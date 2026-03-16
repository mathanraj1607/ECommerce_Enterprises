import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

export const Item = (props) => {
  const { addToCart } = useContext(ShopContext)

  const handleAddToCart = () => {
    // Ensure we always pass a defined ID
    if (props.id !== undefined) {
      addToCart(props.id)
    }
  }

  return (
    <div className='items flex flex-col items-center'>
      <img src={props.image} alt='' className='w-full' />
      <p className='w-full text-center'>{props.name}</p>
      <div className='item-price flex flex-row gap-8'>
        <div className='item-price-new  text-gray-500 text-2xl font-medium'>
          ${props.new_price}
        </div>
        <div className='item-price-old line-through text-gray-200 text-1xl font-light flex justify-center items-center'>
          ${props.old_price}
        </div>
      </div>
      <button
        className='text-2xl text-white font-medium bg-red-500 p-3 border border-none rounded-4xl cursor-pointer'
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}
