import React,{useEffect, useState} from 'react'
import shoes from "../images/shoes.jpg"
import furniture from "../images/furniture.jpg"
import clothes from "../images/clothes.jpg"
import electronics from "../images/electronics.jpg"
import others from "../images/others.jpg"
import { Link } from 'react-router-dom'

const Home = () => {

  const [product,setProduct] = useState([])

    const getProducts = async() =>{
        try{
            await fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(json =>setProduct(json))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
      getProducts()
    },[])


  return (
    <div className='p-10 flex justify-between'>
     <Link to="/products" state={{category:"Clothes",product:product}}><div style={{backgroundImage:`url(${clothes})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Clothes</h1>
        <h1 className='text-xl font-bold'>40-50% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>
     <Link to="/products" state={{category:"Shoes",product:product}}><div style={{backgroundImage:`url(${shoes})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Shoes</h1>
        <h1 className='text-xl font-bold'>50-70% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>
     <Link to="/products" state={{category:"Furniture",product:product}}><div style={{backgroundImage:`url(${furniture})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Furniture</h1>
        <h1 className='text-xl font-bold'>45-60% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>
     <Link to="/products" state={{category:"Electronics",product:product}}>
     <div style={{backgroundImage:`url(${electronics})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Electronics</h1>
        <h1 className='text-xl font-bold'>30-40% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>
     <Link to="/products" state={{category:"Miscellaneous",product:product}}><div style={{backgroundImage:`url(${others})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Others</h1>
        <h1 className='text-xl font-bold'>55-70% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>
    </div>
  )
}

export default Home
