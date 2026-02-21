import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { LoginSignup } from './Pages/LoginSignup'
import {Shop} from './Pages/Shop.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category='men'/>}/>
        <Route path='/womens' element={<ShopCategory category='women'/>}/>
        <Route path='/kids' element={<ShopCategory category='kid'/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App