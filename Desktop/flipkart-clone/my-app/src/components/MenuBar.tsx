import React from 'react'
import cloth from "../images/cloth.jpg"
import women from "../images/women.jpg"
import jewelry from "../images/jewelry.jpg"
import electronic from "../images/electronic.jpg"

interface menuProp {
 setMenu:any
}

const Menubar = (props:menuProp) => {
    return (
        <div className='flex p-3'>
            <div onClick={()=> props.setMenu("electronics")} className='cursor-pointer'>
                <img src={electronic} className='w-32 h-20 ml-20' />
                <h1 className='ml-28 font-semibold'>Electronics</h1>
            </div>
            <div onClick={()=> props.setMenu("men's")} className='cursor-pointer'>
                <img src={cloth} className='w-32 h-20 ml-48' />
                <h1 className='ml-56 font-semibold'>Clothing</h1>
            </div>
            <div onClick={()=> props.setMenu("jewelery")} className='cursor-pointer'>
                <img src={jewelry} className='w-32 h-20 ml-48' />
                <h1 className='ml-56 font-semibold'>Fashion</h1>
            </div>
            <div  onClick={()=> props.setMenu("women")} className='cursor-pointer'>
                <img src={women} className='w-32 h-20 ml-48' />
                <h1 className='ml-56 font-semibold'>Women</h1>
            </div>
        </div>
    )
}

export default Menubar
