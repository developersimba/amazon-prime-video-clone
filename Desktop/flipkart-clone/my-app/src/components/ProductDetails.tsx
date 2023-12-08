import React from 'react'
import { useLocation } from 'react-router-dom'
import f from "../images/f.png"

const ProductDetails = () => {

     const location = useLocation()

     console.log(location)

  return (
    <div className='flex p-3'>
      <img src={location?.state?.prod?.image} className='w-96 border border-spacing-1 shadow-2xl p-3'/>
      <div className='text-black ml-10 mt-20'>
        <h1 className='text-xl text-gray-500'>{location?.state?.prod?.title.toUpperCase()}</h1>
        <h1 className='font-bold text-2xl'>${location?.state?.prod?.price}</h1>
        <div className='flex items-center'>
        <h1>{location?.state?.prod?.category}</h1>
        <img src={f} className='w-20 h-16'/>
        </div>
        <h1>{location?.state?.prod?.description}</h1>
        <h1 className='bg-green-500 p-2 w-9 font-semibold text-white mt-3'>{location?.state?.prod?.rating?.rate}</h1>
      </div>
    </div>
  )
}

export default ProductDetails
