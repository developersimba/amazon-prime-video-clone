import React from 'react'
import Main from './components/Main'
import Login from './components/Login'
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup'
import Details from './components/Details'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<Main/>}/>
    <Route path='/details' element={<Details/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
