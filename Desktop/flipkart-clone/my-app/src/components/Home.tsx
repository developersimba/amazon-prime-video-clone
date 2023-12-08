import React from 'react'
import {useState,useEffect} from "react"
import f from "../images/f.png"
import { Link } from 'react-router-dom'

 interface searchProp {
  search:any
  menu:any
 }

const Home = (props:searchProp) => {

    const [products,setProducts] = useState([])

    const getProducts = async() =>{
        try{
            await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
      getProducts()
    },[])


  return (
    <div className='bg-gray-200 grid grid-cols-5'>
   {!props.menu ? products.filter((product:any) => product.title.includes(props.search)).map((prod:any)=>{
    return <>
      <Link to="/details" state={{prod:prod}}><div className="bg-white ml-3 mt-3  max-w-sm rounded overflow-hidden shadow-lg p-3">
      <img className="w-full h-64" src={prod.image} alt="Sunset in the mountains"/>
      <div className='flex items-center'>
      <h1>{prod?.description.substring(0,prod?.description.indexOf(" ")) + "..."}</h1>
      <img src={f} className='w-28 h-24'/>
      </div>
      <h1 className='font-semibold text-lg'>${prod.price}</h1>
      <h1>{prod.title}</h1>
      </div>
      </Link>
    </>
   })
  :
  products.filter((product:any) => product.category.includes(props.menu)).map((prod:any)=>{
    return <>
      <div className="bg-white ml-3 mt-3 max-w-sm rounded overflow-hidden shadow-lg p-3">
      <img className="w-full h-64" src={prod.image} alt="Sunset in the mountains"/>
      <div className='flex items-center'>
      <h1>{prod?.description.substring(0,prod?.description.indexOf(" ")) + "..."}</h1>
      <img src={f} className='w-28 h-24'/>
      </div>
      <h1 className='font-semibold text-lg'>${prod.price}</h1>
      <h1>{prod.title}</h1>
      </div>
    </>
   })}
</div>
  )
}

export default Home
