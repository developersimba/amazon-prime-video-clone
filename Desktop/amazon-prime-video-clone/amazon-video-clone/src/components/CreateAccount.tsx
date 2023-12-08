import React,{useState} from 'react'
import prime from "../images/prime.png"
import {createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification} from "firebase/auth"
import { auth } from '../firebase/setup'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const CreateAccount = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const emailSignup = async() =>{
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      onAuthStateChanged(auth,async(user:any)=>{
        await sendEmailVerification(user)
      })
    }catch(err){
      console.error(err)
      const error:any = err
      toast.error(error)
    }
  }

 

  return (
    <>
    <ToastContainer autoClose={3000}/>
    <div className='flex flex-col justify-center items-center'>
        <img src={prime} className='w-52 h-28'/>
      <div className='p-6 border border-gray-300 rounded-lg'>
        <h1 className='text-2xl font-medium'>Create Account</h1>
        <label className='font-semibold'>Your name</label>
        <input type="text"  className=" mt-2 border border-gray-400 text-gray-900 text-sm rounded-sm
          block w-80 h-9 p-2.5 "  required placeholder='First and last name'/>
           <label className='font-semibold'>Email</label>
        <input type="email" onChange={(e)=> setEmail(e.target.value)}  className=" mt-2 border border-gray-400 text-gray-900 text-sm rounded-sm
          block w-80 h-9 p-2.5 "  required placeholder='Your email address'/>
          <h1 className='text-xs text-blue-700 hover:underline hover:text-orange-400'>Use your mobile number instead</h1>
        <label className='font-semibold'>Password</label>
        <input onChange={(e)=> setPassword(e.target.value)} type="password"  className=" mt-2 border border-gray-400 text-gray-900 text-sm rounded-sm
          block w-80 h-9 p-2.5 "  required placeholder='Password'/>
          <h1 className='text-sm mt-7'>To verify your email, we will send you a link. Click the<br/> link</h1>
          <button onClick={emailSignup} className="bg-yellow-300 h-9 hover:bg-yellow-400 w-80 text-black px-4 rounded-lg mt-4">
          Create your Amazon account
         </button>
         <h1 className='text-sm mt-4'>By continuing, you agree to the Amazon Conditions <br/>of Use and Privacy Notice.</h1>
         <hr className='mt-3'/>
         <h1 className=' text-black text-sm mt-4'>Already have an account ? <Link to="/login"><span className='text-blue-700'>Sign in</span></Link></h1>
      </div>
      <div className='bg-gray-100 h-40 mt-8 text-center w-full'>
        <h1 className='text-xs text-blue-700 mt-3'>Terms and Privacy Notice    Send us feedback      Help </h1>
        <h1 className='text-xs mt-3'>© 1996-2023, Amazon.com, Inc. or its affiliates</h1>
      </div>
    </div>
    </>
   
  )
}

export default CreateAccount
