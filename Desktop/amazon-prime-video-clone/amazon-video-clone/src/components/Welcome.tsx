import React, { useEffect, useState } from 'react'
import batman from "../images/batman.jpg"
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getMovies } from '../redux/movieSlice'
import { Link } from 'react-router-dom'

const Welcome = () => {

  const dispatch = useAppDispatch()


  const movie = useAppSelector(state => state.movie.data)


  useEffect(()=>{
    dispatch(getMovies())
  },[])

  console.log(movie)


  return (
    <div className='bg-black grid grid-cols-2 w-screen text-white'>
        <div className='p-8'>
         <h1 className='text-5xl text-gray-300 mt-4'>Welcome to Prime Video</h1>
         <h1 className='text-2xl text-gray-300 mt-6'>Watch the latest movies, TV shows, and award-winning Amazon Clone Originals</h1>
         <Link to="/login"><button className='bg-sky-700 p-3 rounded-sm w-72 mt-3 text-lg'>Sign in to join clone prime</button></Link>
        </div>
      <div className='h-screen pt-44 pl-10' style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movie?.results ? movie?.results[0]?.poster_path : ""})`,backgroundRepeat:"no-repeat",
      backgroundSize:"640px 450px"}}>
       <h1 className='text-gray-300 text-6xl'>{movie?.results ? movie?.results[0]?.title : ""}</h1>
       <h1 className='ml-3'>New movie</h1>
      </div>
    </div>
  )
}

export default Welcome
