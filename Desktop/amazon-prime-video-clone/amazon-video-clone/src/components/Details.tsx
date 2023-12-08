import React from 'react'
import batman from "../images/batman.jpg"
import Navbar from './Navbar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import movie from "../images/movie.png"
import { auth } from '../firebase/setup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {

  const navigate = useNavigate()

  const location = useLocation()


  const trailerNavigate = (id:any) =>{
   auth.currentUser?.emailVerified ?  navigate("/trailer",{
      state:{
        id:id
      }
    })
    : toast.warning("Please login")
  }

  return (
    <>
    <ToastContainer autoClose={2000}/>
    <Navbar/>
    <div className='h-screen w-screen text-white pl-16 pt-20' style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${location?.state?.data?.poster_path})`,backgroundRepeat:"no-repeat",backgroundSize:"1300px 650px"}}>
      <h1 className='text-sky-500 font-bold text-4xl text-right'>prime</h1>
      <h1 className='text-6xl font-bold'>{location?.state?.data?.title}</h1>
      <h1 className='text-2xl font-medium mt-10 mr-60'>{location?.state?.data?.overview}</h1>
      <div className='flex items-center font-semibold text-xl text-gray-400'>
      <h1>{location?.state?.data?.original_language.toUpperCase()}</h1>
      <h1 className='ml-4'>{location?.state?.data?.release_date}</h1>
      <div className='bg-white rounded-full p-3 ml-4 hover:bg-gray-700 cursor-pointer'>
      <img onClick={()=> trailerNavigate(location?.state?.data?.id)} src={movie} className='w-8 h-8'/>
      </div>
      </div>
    </div>
    </> 
  )
}

export default Details
