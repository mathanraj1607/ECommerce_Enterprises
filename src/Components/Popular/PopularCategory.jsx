import React, { useContext } from 'react'
import { Item } from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

export const PopularCategory = (props) => {
  const { all_product, isLoadingProducts, productsError } = useContext(ShopContext)

  const normalizeCategory = (value) => {
    const v = String(value ?? '').trim().toLowerCase()
    // Seed data uses "kid" while backend uses "Kids"
    if (v === 'kids') return 'kid'
    return v
  }

  if (isLoadingProducts) {
    return <div className='Popular-Women text-center p-8'>Loading products...</div>
  }

  if (productsError) {
    return <div className='Popular-Women text-center p-8'>Failed to load products.</div>
  }

  return (
    <div className='Popular-Women'>
      <h1 className='text-center text-5xl font-medium m-5'>Popular in {props.category}</h1>

      <div className='h-1.5 bg-gray-400 w-64 absolute left-155 border border-none rounded-4xl'></div>
      <br />

      <div className='popular-item grid grid-cols-3 gap-4 justify-items-center mt-6'>
        {all_product
          .filter((item) => normalizeCategory(item.category) === normalizeCategory(props.category))
          .map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              image={item.image}
              price={item.price}
              actualPrice={item.actualPrice}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      
    </div>
  )
}
