import React from 'react'
import Main from './components/Main'
import Login from './components/Login'
import {Routes,Route} from "react-router-dom"
import Products from './components/Products'
import Details from './components/Details'
import Wishlist from './components/Wishlist'
import Navbar from './components/Navbar'

const App = () => {
  return (
<>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/details' element={<Details/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
</Routes>
</>
  )
}

export default App
