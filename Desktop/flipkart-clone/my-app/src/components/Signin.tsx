import React, { useState } from 'react'
import home from "../images/home.jpg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../firebase/setup'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Signin = () => {

    const navigate = useNavigate()

    const [phone,setPhone] = useState("")
    const [user,setUser] = useState<any>(null)
    const [otp,setOtp] = useState("")

    const requestOtp = async() =>{
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
           auth.currentUser?.phoneNumber && navigate("/")
           toast.success("SignedIn successfully")
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div className='grid grid-cols-2'>
            <div className='bg-blue-600 h-full w-10/12 p-16'>
                <h1 className='text-white font-semibold text-3xl'>Login</h1>
                <h1 className='text-gray-200 pt-5 text-lg'>Get access to your Orders, Wishlist and Recommendations</h1>
                <img src={home} className='mt-44 w-96' />
            </div>
            <div className='p-10'>
            <PhoneInput country={'us'} value={phone} onChange={phone => setPhone("+" + phone)} inputStyle={{width:"510px",borderTop:"1px",borderRight:"1px"}} placeholder='Enter Mobile number'/>
                <h1 className='text-gray-500 text-sm mt-9'>By continuing, you agree to Flipkart's <span className='text-blue-700'>Terms of Use</span> and <span className='text-blue-700'>Privacy Policy.</span></h1>
                <button onClick={requestOtp} className="bg-orange-500 w-11/12 h-12 mt-5 text-white font-bold py-2 px-4">
                    Request OTP
                </button>
                <div className='mt-4' id='recaptcha'></div>
                {phone && <input onChange={(e)=> setOtp(e.target.value)}  className=" border outline-none border-gray-400 mt-4 text-gray-900 text-sm  block w-11/12 p-2.5" placeholder="Enter Otp" required/>}
                {otp && <button onClick={verifyOtp} className="bg-orange-500 w-11/12 h-12 mt-5 text-white font-bold py-2 px-4">
                    Verify OTP
                </button>}
                <h1 className='text-blue-700 text-center mt-28 font-semibold'>Login from here</h1>
            </div>
        </div>
    )
}

export default Signin
