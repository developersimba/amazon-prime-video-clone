import React from 'react'
import lens from "../images/lens.png"
import seller from "../images/seller.png"
import user from "../images/user.png"
import cart from "../images/cart.png"
import out from "../images/out.png"
import {Link} from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/setup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 interface searchProp {
  setSearch : any
  setMenu:any
 }

const Navbar = (props:searchProp) => {

  const logout = async() =>{
    try{
      await signOut(auth)
      toast.success("Logout succesfully")
    }catch(err){
      console.error(err)
    }
  }


  return (
    <>
    <ToastContainer autoClose={2000}/>
    <div className='grid grid-cols-2 p-3'>
      <div onClick={()=> props.setMenu("")} className='flex cursor-pointer'>
        <div className='ml-20'>
        <h1 className='text-blue-700 text-xl font-bold italic'>Flipkart</h1>
        <h4 className='text-gray-500 italic '>Explores</h4>
        </div>
        <div className='bg-blue-50 flex items-center p-2 w-full ml-7 rounded-lg'>
          <img src={lens} className='w-5 h-5 ml-2'/>
          <input onChange={(e)=> props.setSearch(e.target.value)}  className="outline-none bg-blue-50 ml-3  text-gray-900 text-xl rounded-lg
           block w-full" placeholder="Search for Products, Brands and More" required/>
        </div>
      </div>
      <div className='flex items-center'>
       <div className='flex ml-11'>
        <img src={seller} className='w-6 h-6'/>
        <h1 className='ml-2'>Become a seller</h1>
       </div>
       {!auth.currentUser?.phoneNumber && <Link to="/signin"><div className='flex ml-16'>
        <img src={user} className='w-6 h-6'/>
        <h1 className='ml-2'>Sign in</h1>
       </div>
       </Link>}
       <div className='flex ml-16'>
        <img src={cart} className='w-6 h-6'/>
        <h1 className='ml-2'>Cart</h1>
       </div>
       {auth.currentUser?.phoneNumber && <div onClick={logout} className='flex ml-16 cursor-pointer'>
        <img src={out} className='w-6 h-6'/>
        <h1 className='ml-2'>Logout</h1>
       </div>}
      </div>
    </div>
    </> 
  )
}

export default Navbar
