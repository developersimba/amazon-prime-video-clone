import React,{useEffect, useState} from 'react'
import {useLocation} from "react-router-dom"
import Navbar from './Navbar'
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import { auth, database } from '../firebase/setup'
import moment from "moment"
import Avatar from 'react-avatar'
import profile from "../images/profile.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {

    const location = useLocation()

    const [review,setReview] = useState("")
    const [reviewData,setReviewData] = useState<any>([])

    const addReview = async() =>{
      try{
        const userDoc = doc(database,"Hotels",`${location.state.data.id}`)
        const reviewRef = collection(userDoc,"Reviews")
         await addDoc(reviewRef,{
           review:review,
           email:auth.currentUser && auth.currentUser.email,
           date:moment(new Date()).format("DD-MM-YYYY"),
           proImg:auth.currentUser?.photoURL
         })
         toast.success("Review added successfully")
      }catch(err){
        console.error(err)
      } 
    }


    const getReviews = async() =>{
      const userDoc = doc(database,"Hotels",`${location.state.data.id}`)
        const reviewRef = collection(userDoc,"Reviews")
        try{
         const data = await getDocs(reviewRef)
        const filteredData = data.docs?.map((doc)=>({
            ...doc.data(),
        }))
        setReviewData(filteredData)
        }catch(err){
          console.error(err)
        }
    }

    useEffect(()=>{
      getReviews()
    },[reviewData])



  return (
    <>
    <ToastContainer autoClose={3000}/>
    <Navbar/>
     <div className='ml-20 mt-4'>
      <h1 className='text-3xl font-semibold'>{location.state.data.name}</h1>
      <div className='flex mt-5'>
        <img src={location.state.data.images[0]} className='w-5/12 h-80 rounded-l-xl'/>
        <div>
        <div className='flex'>
            <img src={location.state.data.images[1]} className='w-72 h-36 ml-2'/>
            <img src={location.state.data.images[2]} className='w-72 h-36 ml-2 rounded-r-xl'/>
        </div>
        <div className='flex'>
            <img src={location.state.data.images[3]} className='w-72 h-40 ml-2 mt-4'/>
            <img src={location.state.data.images[4]} className='w-72 h-40 ml-2 mt-4 rounded-r-xl'/>
        </div>
        </div>
      </div>
      <h1 className='text-2xl font-semibold mt-7'>{location.state.data.address}</h1>
      <h1>{location.state.data.persons} guests . {location.state.data.bedrooms} bedroom . {location.state.data.beds} bed . {location.state.data.bathrooms} bathroom</h1>
      <h1 className='font-semibold text-xl'>{location.state.data.reviewsCount} reviews</h1>
      <hr className='mt-10'/>
      <h1 className='mt-10 text-2xl font-semibold'>What this place offers</h1>
      <h1 className='mt-3 text-xl font-normal'>{location.state.data.previewAmenities[0]}</h1>
      <h1 className='mt-3 text-xl font-normal'>{location.state.data.previewAmenities[1]}</h1>
      <h1 className='mt-3 text-xl font-normal'>{location.state.data.previewAmenities[2]}</h1>
      <hr className='mt-10'/>
      <div className='flex items-center'>
      <img src={location.state.data.hostThumbnail} className='mt-6 w-10 h-10 rounded-full'/>
      <h1 className='mt-6 ml-3'>{location.state.data.type}</h1>
      </div>
      <hr className='mt-5'/>
      <div className='flex mt-8'>
      <input onChange={(e)=> setReview(e.target.value)} type="text"  className="border-b-2 text-gray-900 text-lg  border-gray-300 h-12  block w-5/12 p-2.5 outline-none" placeholder="Comments" required/>
      <button onClick={addReview} className='shadow-2xl text-white bg-gray-800 w-14 h-14 border border-gray-400 ml-7'>Add</button>
      </div>
      <div className='mt-8 grid grid-cols-2'>
      {reviewData.map((data:any)=>{
       return <>
       <div>
       <div className='flex items-center mt-8'>
        {data.proImg ? <img src={data.proImg} className='rounded-full w-12 h-12'/>
        : !data?.email ? <Avatar name={data.email ?? "Avatar"} size='40' round={true} textSizeRatio={1.75}/>
        : <Avatar src={profile} size='40' round={true} />}
        <div  className='ml-3'>
        <h1 className='font-semibold text-lg'>{data.email.substring(0,data.email.indexOf("@"))}</h1>
        <h1 className='font-normal text-gray-500 text-sm mt-2 '>{data.date}</h1>
        </div>
        </div>
        <h1 className='mt-4'>{data.review}</h1>
       </div> 
        </> 
      })}
      </div>
      <div>
      </div>
    </div>
    </>
  )
}

export default Details
