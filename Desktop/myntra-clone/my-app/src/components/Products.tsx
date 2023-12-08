import React,{useState,useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link, useLocation } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';
import OfferTime from './OfferTime';


interface productProp {
product?:any
search?:any
menu?:any
}

const Products = (props:productProp) => {

    const location = useLocation()


  return (
    <>
    {location.state?.category && <Navbar/>}
    {location.state?.category && <OfferTime/>}
    {location.state?.category && <div className='flex items-center  text-sm ml-5 mt-2'>
    <Link to="/"><h1 className='text-gray-500'>Home / </h1></Link>
    <h1 className='ml-1 font-semibold'>{location.state?.category}</h1>
    </div>}
     {location.state?.category && <h1 className='text-lg font-bold ml-5 mt-3'>{location.state?.category ?? "No Products"}</h1>}
    {location.state?.category ? <div className='grid grid-cols-4 p-3 ml-11'>
      {location.state?.product?.filter((data:any)=> data?.category.name.includes(location.state?.category)).map((data:any)=>{
        return <>
        <Link to="/details" state={{data:data}}><div>
        <Carousel className='p-2 w-60 h-52 mt-4' autoPlay={true} showThumbs={false} showArrows={false}>
                <div>
                    <img src={data.images[0]} />
                </div>
                <div>
                <img src={data.images[1]} />
                </div>
                <div>
                <img src={data.images[2]} />
                </div>
            </Carousel>
         <h1 className='ml-4 font-bold mt-6'>{data.title}</h1>
         <h1 className='ml-4 text-sm text-gray-500'>{data.category.name}</h1>
         <div className='flex items-center'>
         <h1 className='ml-4 font-bold text-sm'>Rs. {data.price}</h1>
         <h1 className='text-xs text-gray-400 line-through ml-1'>Rs. {data.price + 500}</h1>
         <h1 className='text-xs text-orange-400 ml-1'>(Rs.500 OFF)</h1>
         </div>
        </div>
        </Link>
        </>
      })}
    </div> 
    : props.menu ?
    <div className='grid grid-cols-4 p-3 ml-11'>
      {props?.product?.filter((data:any)=>data.title.includes(props.menu)).map((data:any)=>{
        return <>
        <Link to="/details" state={{data:data}}><div>
        <Carousel className='p-2 w-60 h-52 mt-4' autoPlay={true} showThumbs={false} showArrows={false}>
                <div>
                    <img src={data.images[0]} />
                </div>
                <div>
                <img src={data.images[1]} />
                </div>
                <div>
                <img src={data.images[2]} />
                </div>
            </Carousel>
         <h1 className='ml-4 font-bold mt-6'>{data.title}</h1>
         <h1 className='ml-4 text-sm text-gray-500'>{data.category.name}</h1>
         <div className='flex items-center'>
         <h1 className='ml-4 font-bold text-sm'>Rs. {data.price}</h1>
         <h1 className='text-xs text-gray-400 line-through ml-1'>Rs. {data.price + 500}</h1>
         <h1 className='text-xs text-orange-400 ml-1'>(Rs.500 OFF)</h1>
         </div>
        </div>
        </Link>
        </>
      })}
    </div>
    : props.search ?
    <div className='grid grid-cols-4 p-3 ml-11'>
    {props?.product?.filter((data:any)=>data.title.includes(props.search)).map((data:any)=>{
      return <>
      <Link to="/details" state={{data:data}}><div>
      <Carousel className='p-2 w-60 h-52 mt-4' autoPlay={true} showThumbs={false} showArrows={false}>
              <div>
                  <img src={data.images[0]} />
              </div>
              <div>
              <img src={data.images[1]} />
              </div>
              <div>
              <img src={data.images[2]} />
              </div>
          </Carousel>
       <h1 className='ml-4 font-bold mt-6'>{data.title}</h1>
       <h1 className='ml-4 text-sm text-gray-500'>{data.category.name}</h1>
       <div className='flex items-center'>
       <h1 className='ml-4 font-bold text-sm'>Rs. {data.price}</h1>
       <h1 className='text-xs text-gray-400 line-through ml-1'>Rs. {data.price + 500}</h1>
       <h1 className='text-xs text-orange-400 ml-1'>(Rs.500 OFF)</h1>
       </div>
      </div>
      </Link>
      </>
    })}
  </div>
  : 
  <div className='grid grid-cols-4 p-3 ml-11'>
  {props.product?.map((data:any)=>{
    return <>
    <Link to="/details" state={{data:data}}><div>
    <Carousel className='p-2 w-60 h-52 mt-4' autoPlay={true} showThumbs={false} showArrows={false}>
            <div>
                <img src={data.images[0]} />
            </div>
            <div>
            <img src={data.images[1]} />
            </div>
            <div>
            <img src={data.images[2]} />
            </div>
        </Carousel>
     <h1 className='ml-4 font-bold mt-6'>{data.title}</h1>
     <h1 className='ml-4 text-sm text-gray-500'>{data.category.name}</h1>
     <div className='flex items-center'>
     <h1 className='ml-4 font-bold text-sm'>Rs. {data.price}</h1>
     <h1 className='text-xs text-gray-400 line-through ml-1'>Rs. {data.price + 500}</h1>
     <h1 className='text-xs text-orange-400 ml-1'>(Rs.500 OFF)</h1>
     </div>
    </div>
    </Link>
    </>
  })}
</div> }
    </>
    
  )
}

export default Products
