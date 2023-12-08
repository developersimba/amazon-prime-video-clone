import React from 'react'
import banner1 from "../images/banner1.jpg"
import banner2 from "../images/banner2.jpg"

const Banner = () => {
  return (
    <div>
      <img src={banner1} className='p-4'/>
      <img src={banner2} className='p-7'/>
    </div>
  )
}

export default Banner
