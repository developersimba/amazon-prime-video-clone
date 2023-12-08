import React from 'react'
import house from "../images/house.png"
import camping from "../images/camping.png"
import cabin from "../images/cabin.png"
import container from "../images/container.png"
import room from "../images/room.png"
import skiing from "../images/skiing.png"
import top from "../images/top.png"
import view from "../images/view.png"

interface menuProp {
  setMenu:any
}

const Menubar = (props:menuProp) => {
  return (
    <div className='flex pt-8 cursor-pointer'>
      <div onClick={()=>props.setMenu("House")} className='ml-11'>
        <img src={house} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>House</h1>
      </div>
      <div onClick={()=>props.setMenu("room")} className='ml-11 cursor-pointer'>
        <img src={camping} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Room</h1>
      </div>
      <div onClick={()=>props.setMenu("hostel")} className='ml-11 cursor-pointer'>
        <img src={top} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Hostel</h1>
      </div>
      <div onClick={()=>props.setMenu("hotel")} className='ml-11 cursor-pointer'>
        <img src={view} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Hotel</h1>
      </div>
      <div onClick={()=>props.setMenu("Studio")} className='ml-11 cursor-pointer'>
        <img src={container} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Studio</h1>
      </div>
      <div onClick={()=>props.setMenu("townhouse")} className='ml-11 cursor-pointer'>
        <img src={cabin} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Townhouse</h1>
      </div>
      <div onClick={()=>props.setMenu("apartment")} className='ml-11 cursor-pointer'>
        <img src={room} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Apartment</h1>
      </div>
      <div onClick={()=>props.setMenu("view")} className='ml-11 cursor-pointer'>
        <img src={skiing} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>View</h1>
      </div>
    </div>
  )
}

export default Menubar
