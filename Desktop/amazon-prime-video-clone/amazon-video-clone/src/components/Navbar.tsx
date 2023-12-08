import React, { useState } from 'react'
import lens from "../images/lens.png"
import profile from "../images/profile.png"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import searchIcon from "../images/search.png"

const Navbar = () => {

  const navigate = useNavigate()

  const [proImg,setProImg] = useState(false)
  const [lang,setLang] = useState(false)
  const [home,setHome] = useState(false)
  const [category,setCategory] = useState(false)
  const [search,setSearch] = useState<any>("")
  const [searchSwitch,setSearchSwitch] = useState(false)

  const logout = async() =>{
    try{
      await signOut(auth)
      auth.currentUser == null && toast.success("Loggedout Successfully")
      setTimeout(()=>{
        auth.currentUser == null && navigate("/")
      },1000)
    }catch(err){
      console.error(err)
    }
  }
  


  return (
    <>
    <ToastContainer autoClose={3000}/>
      <div className='bg-black flex items-center p-2 w-screen'>
      <Link to="/"><h1 className='ml-36 text-white font-semibold text-xl'>prime video</h1></Link>
      <div className='z-10' onMouseEnter={()=> setHome(true)} onMouseLeave={()=> setHome(false)}>
      <h1 className='cursor-pointer text-gray-300 ml-20 text-lg font-semibold'>Home</h1>
      {home && <div className='absolute ml-11 rounded-b-lg bg-gray-800 text-zinc-400 p-4 font-semibold text-xl h-20 w-32'>
      <Link to="/home" state={{data:""}}> <h1 className='mt-3'>Movies</h1></Link>
      </div>}
      </div>
      <div className='z-10' onMouseEnter={()=> setCategory(true)} onMouseLeave={()=>setCategory(false)}>
      <h1 className='text-gray-300 ml-96 text-lg font-semibold'>Categories</h1>
      {category && <div className='grid grid-cols-4 h-72 right-52 w-9/12 absolute 
       rounded-b-lg bg-gray-800 p-7 pl-28 text-zinc-400 font-bold text-xl'>
        <h1>Action</h1>
        <h1>Comedy</h1>
        <h1>Thriller</h1>
        <h1>Horror</h1>
        <h1>Anime</h1>
        <h1>Documentary</h1>
        <h1>Drama</h1>
        <h1>Kids</h1>
        <h1>Romance</h1>
      </div>}
      </div>
      <div >
      <img onClick={()=> setSearchSwitch(!searchSwitch)} src={lens} className=' cursor-pointer w-14 h-8 ml-5'/>
      {searchSwitch && <div className=' absolute rounded-b-lg bg-gray-800 h-24 z-10  right-52 w-9/12 p-4'>
        <div className='flex items-center bg-zinc-700 rounded-lg pl-4'>
          <Link to="/movies" state={{data:search}}><img  src={searchIcon} className='w-10 h-7'/></Link>
        <input onChange={(e)=> setSearch(e.target.value)} placeholder='Search' className='bg-zinc-700 outline-white text-xl rounded-lg pl-7 text-white w-full h-16'/>
        </div>
      </div>}
      </div>
      <div className='z-10' onMouseEnter={()=>setLang(true)} onMouseLeave={()=> setLang(false)}>
      <h1 className='cursor-pointer text-gray-300  ml-5 text-lg font-semibold' >EN</h1>
      {lang && <div className='grid grid-cols-4 h-96 right-52 w-9/12 absolute 
       rounded-b-lg bg-gray-800 p-7 pl-28 text-gray-400 font-bold text-xl'>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>English</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>French</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Italiano</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Portugues</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Deutsch</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Magyar</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Dansk</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Hindi</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Espanol</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Nederlands</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Bahasa Indonesia</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Francais</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Norsk</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Suomi</h1>
        <h1 className='ml-3 mt-4 hover:bg-white p-1 rounded-md w-32 h-10 hover:text-black'>Svenska</h1>
      </div>}
      </div>
      <div onMouseEnter={()=>setProImg(true)} onMouseLeave={()=> setProImg(false)} className='z-10'>
      <img src={profile} className='w-9 h-9 ml-5 cursor-pointer'/>
      {proImg && <div className='absolute rounded-b-lg bg-gray-800 h-20 z-10  right-52 w-40 p-4'>
        {auth.currentUser?.emailVerified ?    <h1 onClick={logout} className='text-lg text-gray-400 font-semibold hover:bg-white p-2 rounded-md hover:text-black'>Logout</h1>
        : <Link to="/login"><h1 className='text-lg text-gray-400 font-semibold hover:bg-white p-2 rounded-md hover:text-black'>Sign In</h1></Link>}
      </div>}
      </div>
    </div>
    </>
  
  )
}

export default Navbar