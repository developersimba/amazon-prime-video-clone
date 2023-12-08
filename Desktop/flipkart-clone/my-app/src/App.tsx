import React from 'react'
import Signin from './components/Signin'
import Main from './components/Main'
import {Routes,Route} from "react-router-dom"
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/details' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
