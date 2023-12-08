import React, { useState } from 'react'
import logo from "../images/logo.png"
import user from "../images/user.png"
import search from "../images/search.png"
import home from "../images/home.png"
import tv from "../images/tv.png"
import movie from "../images/movie.png"
import { Fade } from 'react-awesome-reveal'
import {Link} from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/setup'
import out from "../images/out.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface menuProp {
  setMenu : any
  setSearch :any
  search : boolean
  searchRef:any
}


const Navbar = (props:menuProp) => {


    const [touch,setTouch] = useState(false)

    const logout = async() =>{
      try{
        await signOut(auth)
        !auth.currentUser && toast.success("Loggedout successfully")
      }catch(err){
        console.error(err)
      }
    }

  return (
    <div className='fixed grid grid-cols-2 bg-black h-full w-24'>
      <div onMouseEnter={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)}>
       <img src={logo} className='w-28 ml-5 mt-5'/>
       {!auth.currentUser && <Link to="/signin"><img src={user} className='w-5 ml-9 mt-8 cursor-pointer'/></Link>}
       <img onClick={()=> {
        setTimeout(()=>{
          props.searchRef?.current?.focus()
        },1)
        props.setSearch(!props.search)
      }} src={search} className='w-9 ml-7 mt-8 cursor-pointer'/>
       <img src={home} onClick={()=> {
        props.setSearch(false)
        props.setMenu("home")
      }
        } className='w-9 ml-7 mt-8 cursor-pointer'/>
       <img src={movie}  onClick={()=> {
         props.setSearch(false)
        props.setMenu("movie")
       }} className='w-16 mt-8 ml-5 cursor-pointer'/>
       <img src={tv}  onClick={()=> {
         props.setSearch(false)
        props.setMenu("tv")
       }} className='w-16 mt-8 ml-5 cursor-pointer'/>
       {auth.currentUser && <img src={out} onClick={logout} className='w-16 mt-8 ml-5 cursor-pointer'/>}
      </div>
      {touch && <Fade><div className='bg-opacity-60 z-20 ml-8 w-20 bg-black h-screen font-bold text-base text-slate-300'>
       {!auth.currentUser && <h4 className='pt-20'>Signin</h4>}
       <h4 className='mt-8'>Search</h4>
       <h4 className='mt-12'>Home</h4>
       <h4 className='mt-9'>Movie</h4>
       <h4 className='mt-9'>Tv</h4>
       {auth.currentUser && <h4 className='mt-9'>Signout</h4>}
      </div>
      </Fade>}
    </div>
  )
}

export default Navbar
