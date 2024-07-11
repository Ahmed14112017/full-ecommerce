import './App.css'
import Layout from './ui/Layout'
import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Category from './Pages/Category'
import Profile from './Pages/Profile'
import Cart from './Pages/Cart'
import Favorite from './Pages/Favorite'
import Orders from './Pages/Orders'
import Success from './Pages/Success'
import Cancel from './Pages/Cancel'
import Notfound from './Pages/Notfound'
function App() {
  

  return (
    <main>
      
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index  element={<Home />} />
        <Route path='/product'element={<Product />} />
        <Route path='/product:id'element={<Product />} />
        <Route path='/category'  element={<Category />} />
        <Route path='/category:id'  element={<Category />} />
        <Route path='/profile'  element={<Profile />} />
        <Route path='/cart'  element={<Cart />} />
        <Route path='/favorite'  element={<Favorite />} />
        <Route path='/orders'  element={<Orders />} />
        <Route path='/success'  element={<Success />} />
        <Route path='/cancel'  element={<Cancel />} />
        <Route path='/notfound'  element={<Notfound />} />
        
        </Route>
      </Routes>
      
      
      
      
    </main>
  )
}

export default App
