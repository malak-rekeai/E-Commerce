import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Footer from './components/Footer/Footer'
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kids_banner from './Assets/banner_kids.png'
import Product from './pages/Product'


const App = () => {
  return (
    <div className=''>
  <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>} />
        <Route path='/cart' element= {<Cart />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/product/:product_id' element= {<Product />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App