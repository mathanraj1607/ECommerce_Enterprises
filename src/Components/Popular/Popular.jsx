import React from 'react'
import data_product from '../Assests/all_product'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className='Popular'>
      <h1 className='text-center text-5xl font-medium m-5'>Popular in Product</h1>
      <div className='h-1.5 bg-gray-400 w-64 absolute left-155 border border-none rounded-4xl'></div>
      <br />
      <div className='popular-item grid grid-cols-3 gap-4 justify-items-center'>
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}
