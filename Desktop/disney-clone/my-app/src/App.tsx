import React from 'react'
import Signin from './components/Signin'
import Main from './components/Main'
import {Routes,Route} from "react-router-dom"
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/details' element={<MovieDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
