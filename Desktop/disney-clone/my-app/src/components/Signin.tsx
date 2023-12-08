import React, { useState } from 'react'
import signin from "../images/signin.jpg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../firebase/setup'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

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
         auth.currentUser && toast.success("SignedIn successfully")
         navigate("/")
        }catch(err){
            console.error(err)
        }
    }


    return (
        <div className='grid grid-cols-2 h-screen bg-black'>
            <div style={{ backgroundImage: `linear-gradient(to left,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${signin})` }} >

            </div>
            <div className='ml-36'>
                <h1 className='mt-24 text-xl font-semibold text-white'>Log in or sign up to continue</h1>
                <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={phone => setPhone("+" + phone)}
                    inputStyle={{ backgroundColor: "black", color: "white" }}
                    placeholder='Enter mobile number'
                />
                <h6 className='text-gray-500 text-xs mt-3 '>By proceeding you confirm that you are above 18 years<br /> of age and agree to the Privacy Policy and Terms of use</h6>
                {phone && <button onClick={sendOtp} className="mt-10 h-12 bg-blue-700 w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send Otp
                </button>}
                <div id='recaptcha' className='mt-2'>

                </div>
                {phone && <input onChange={(e)=> setOtp(e.target.value)} type="text" className="bg-black border border-gray-300 mt-10 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Otp" required/>}
                {otp && <button onClick={verifyOtp} className="mt-10  bg-blue-700 w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Verify Otp
                </button>}
                {otp && <h3 className='text-slate-500 ml-3 mt-3'>Enter code, number and <span className='text-blue-500'>click Send Otp</span></h3>}
            </div>
        </div>
    )
}

export default Signin
