import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import facebook from "../images/facebook.png"
import google from "../images/google.png"
import mail from "../images/mail.png"
import mobile from "../images/mobile.png"
import { RecaptchaVerifier, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth'
import { auth, facebookProvider, googleProvider } from '../firebase/setup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

interface signProps {
  setLog?:any
}

const Login = (props:signProps) => {
    
    const [emailPopup,setEmailPopup] = useState(false)
    const [phone,setPhone] = useState("")
    const [user,setUser] = useState<any>(null)
    const [otp,setOtp] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()


    const googleSignin = async() =>{
      try{
        await signInWithPopup(auth,googleProvider)
        auth.currentUser?.email && toast.success("LoggedIn successfully")
        setTimeout(()=>{
          navigate("/")
        },1000)
      }catch(err){
        console.error(err)
        const error:any = err
        toast.error(error)
      }
    }

    const sendOtp = async() =>{
      try{
        const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
        const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
        setUser(confirmation)
      }catch(err){
        console.error(err)
        const error:any = err
        toast.error(error)
      } 
    }

    const verifyOtp = async() =>{
      try{
       const data = await user.confirm(otp)
       data.user.phoneNumber && toast.success("LoggedIn successfully")
       setTimeout(()=>{
        navigate("/")
      },1000)
      }catch(err){
        console.error(err)
        const error:any = err
        toast.error(error)
      }
    }

    const emailLogin = async() =>{
      try{
      const data = await signInWithEmailAndPassword(auth,email,password)
      data.user.emailVerified && toast.success("LoggedIn successfully")
      setTimeout(()=>{
        navigate("/")
      },1000)
    }catch(err){
        console.error(err)
        const error:any = err
        toast.error(error)
      }
    }

    const facebookSignin = async() => {
      try{
       await signInWithPopup(auth,facebookProvider)
       toast.success("Loggedin successfully")
       setTimeout(()=>{
           navigate("/")
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
     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-stone-800 bg-opacity-75 transition-opacity"></div>
  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
                <h1 onClick={()=> props.setLog(false)} className='cursor-pointer'>X</h1>
              <h3 className="ml-28 text-base font-bold leading-6 text-gray-900" id="modal-title">{phone ? "Confirm your phone number" : "Log in or sign up"}</h3>
            </div>
            <hr className='mt-4'/>
            <h1 className='mt-4 font-semibold text-2xl ml-5'>{!phone && "Welcome to Airbnb clone"}</h1>
            {emailPopup ? <input onChange={(e)=> setEmail(e.target.value)} type="email" className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4  block w-11/12 p-2.5 outline-none" placeholder="Email" required/>
             : <PhoneInput value={phone} onChange={(phone)=> setPhone("+" + phone)} placeholder='Phone number' inputStyle={{width:"453px",height:"50px",fontSize:"17px"}} containerStyle={{marginTop:"15px",marginLeft:"20px"}}/>}
             {emailPopup && <input onChange={(e)=> setPassword(e.target.value)} type="password" className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4  block w-11/12 p-2.5 outline-none" placeholder="Password" required/>}
             <div id='recaptcha' className='mt-3 ml-5'></div>
             {phone && <button onClick={sendOtp} className="ml-5 bg-rose-600 h-12 text-white font-bold py-2 px-4 rounded mt-3 w-11/12">
            Send OTP
           </button>}
           {user && <input type="text" onChange={(e)=> setOtp(e.target.value)} className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4  block w-11/12 p-2.5 outline-none" placeholder="Otp" required/>}
           {otp && <button onClick={verifyOtp} className="ml-5 bg-rose-600 h-12 text-white font-bold py-2 px-4 rounded mt-3 w-11/12">
            Verify OTP
           </button>}
            <h1 className='text-xs ml-5 mt-3'>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</h1>
            {!phone && <button onClick={emailLogin} className="ml-5 bg-rose-600 h-12 text-white font-bold py-2 px-4 rounded mt-3 w-11/12">
            {emailPopup ? "Agree and Continue" : "Continue"}
           </button>}
           <h1 className='text-center mt-3'>or</h1>
           {!phone && <div onClick={facebookSignin} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-3 flex items-center border border-spacing-1 rounded-lg border-black'>
            <img src={facebook} className='w-6 h-6 ml-3'/>
            <h1 className='ml-24'>Continue with Facebook</h1>
           </div>}
           {!phone && <div onClick={googleSignin} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-lg border-black'>
            <img src={google} className='w-6 h-6 ml-3'/>
            <h1 className='ml-24'>Continue with Google</h1>
           </div>}
           {!emailPopup ? <div onClick={()=> setEmailPopup(true)} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-lg border-black'>
            <img src={mail} className='w-6 h-6 ml-3'/>
            <h1 className='ml-24 text'>Continue with email</h1>
           </div>
           : <div onClick={()=> setEmailPopup(false)} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-lg border-black'>
            <img src={mobile} className='w-6 h-6 ml-3'/>
            <h1 className='ml-24 text'>Continue with phone</h1>
           </div>}
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Login