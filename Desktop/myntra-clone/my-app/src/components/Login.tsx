import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth, database } from '../firebase/setup'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { doc, setDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const navigate = useNavigate()

    const [phone, setPhone] = useState("")
    const [user,setUser] = useState<any>(null)
    const [otp,setOtp] = useState("")

    const sendOtp = async() =>{
        try{
            const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
            const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
            setUser(confirmation)
        }catch(err){
            console.error(err)
        }
    }

    const verifyOtp = async() =>{
        try{
            await user.confirm(otp)
            const userDoc = doc(database,"users",`${auth.currentUser?.uid}`)
            setDoc(userDoc,{
                data:auth.currentUser?.uid
            })
            auth.currentUser?.phoneNumber && toast.success("LoggedIn successfully")
            setTimeout(()=>{
                auth.currentUser?.phoneNumber && navigate("/")
            },1000)
        }catch(err){
            console.error(err)
            let error:any = err
            toast.error(error)
        }
    }
    
    console.log(auth)

    return (
        <>
        <ToastContainer/>
        <Navbar/>
         <div className='bg-rose-50 h-screen flex flex-col justify-center items-center'>
            <div className='h-96 w-96 bg-white flex flex-col justify-center items-center'>
                <h1 className='font-bold text-lg text-start'>Login <span className='font-normal text-sm'> or </span>Signup</h1>
                {user == null && <div className='mt-5'>
                <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={phone => setPhone("+" + phone)}
                    placeholder='Mobile Number'
                    buttonStyle={{ backgroundColor: "white" }}
                    inputStyle={{width:"320px"}} />   
                </div>}
                <div id='recaptcha'></div>
                <h1 className='mt-4 text-xs text-gray-400'>By clicking continue, you can <span className='text-rose-500 font-bold'>Login to this myntra clone</span></h1>
                {!otp && <button onClick={sendOtp} className="mt-4 bg-rose-500  text-white w-80 font-bold py-2 px-4  text-sm">
                    CONTINUE
                </button>}
                <div className='mt-3' id="recaptcha">
                </div>
                {user && <input onChange={(e)=> setOtp(e.target.value)} className=" border border-spacing-1 text-gray-900 font-normal  outline-none
                  text-sm rounded-sm  block w-80 p-2.5 mt-2" placeholder="Enter Otp" required/>}
                  {otp && <button onClick={verifyOtp} className="mt-4 bg-rose-500  text-white w-80 font-bold py-2 px-4  text-sm">
                    Verify OTP
                </button>}
                <h1 className='mt-4 text-xs text-gray-400'>Have trouble loggin in? <span className='text-rose-500 font-bold'>Click continue</span></h1>
            </div>
        </div>
        </>
       
    )
}

export default Login
