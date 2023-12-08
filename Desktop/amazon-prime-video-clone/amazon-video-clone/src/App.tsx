import React from 'react'
import Signin from './components/Signin'
import CreateAccount from './components/CreateAccount'
import {Routes,Route} from "react-router-dom"
import Main from './components/Main'
import Home from './components/Home'
import Details from './components/Details'
import Trailer from './components/Trailer'
import Movies from './components/Movies'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/movies" element={<Movies/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<Main/>}/>
    <Route path='/signup' element={<CreateAccount/>}/>
    <Route path='/login' element={<Signin/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/trailer' element={<Trailer/>}/>
    </Routes>
    </>
  )
}

export default App
