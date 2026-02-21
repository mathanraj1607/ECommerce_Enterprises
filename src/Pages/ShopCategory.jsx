import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { PopularCategory } from '../Components/Popular/PopularCategory'

export const ShopCategory = (props) => {
  return (
    <div>
      <Hero/>
      <PopularCategory category={props.category}/>
    </div>
  )
}
