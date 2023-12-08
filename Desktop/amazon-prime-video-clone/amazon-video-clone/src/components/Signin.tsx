import React,{useState} from 'react'
import prime from "../images/prime.png"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/setup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const emailLogin = async() =>{
    try{
     const data = await signInWithEmailAndPassword(auth,email,password)
     data.user.emailVerified && toast.success("LoggedIn successfully")
     setTimeout(()=>{
      data.user.emailVerified && navigate("/home")
     },1000)
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
        <h1 className='text-2xl font-medium'>Sign in</h1>
        <label className='font-semibold'>Email Address</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}  className=" mt-4 border border-gray-800 text-gray-400 text-sm rounded-sm
          block w-80 h-9 p-2.5 "  required/>
          <label className='font-semibold'>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}  className=" mt-4 border border-gray-800 text-gray-400 text-sm rounded-sm
          block w-80 h-9 p-2.5 "  required/>
          <button onClick={emailLogin} className="bg-yellow-300 h-9 hover:bg-yellow-400 w-80 text-black  px-4 rounded-lg mt-4">
          Continue
         </button>
         <h1 className='text-sm mt-4'>By continuing, you agree to the Amazon Conditions <br/>of Use and Privacy Notice.</h1>
         <h1 className='mt-4'>- Need help?</h1>
      </div>
      <h1 className='text-center text-gray-400 text-sm mt-4'>New to Amazon ?</h1>
      <Link to="/signup"><button className='border border-gray-300 p-1 rounded-lg w-96 shadow-lg mt-4'>Create your Amazon account</button></Link>
      <div className='bg-gray-100 h-40 mt-8 text-center w-full'>
        <h1 className='text-xs text-blue-700 mt-3'>Terms and Privacy Notice    Send us feedback      Help </h1>
        <h1 className='text-xs mt-3'>© 1996-2023, Amazon.com, Inc. or its affiliates</h1>
      </div>
    </div>
    </>
   
  )
}

export default Signin
