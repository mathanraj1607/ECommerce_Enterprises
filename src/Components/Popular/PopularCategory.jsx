import React from 'react'
import { Item } from "../Item/Item"
import data_product from '../Assests/all_product'

export const PopularCategory = (props) => {
  return (
    <div className='Popular-Women'>
      <h1 className='text-center text-5xl font-medium m-5'>
        Popular in {props.category}
      </h1>

      <div class="h-1.5 bg-gray-400 w-64 absolute left-155 border border-none rounded-4xl"></div><br />

      <div className='popular-item grid grid-cols-3 gap-4 justify-items-center mt-6'>
        {data_product
          .filter((item) => item.category === props.category)
          .map((item, i) => (
            <Item
              key={i}
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
