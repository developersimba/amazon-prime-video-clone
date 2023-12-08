import React,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel'
import batman from "../images/batman.jpg"
import Navbar from './Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Category from './Category'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getMovies } from '../redux/movieSlice'


const Home = () => {
    

  const dispatch = useAppDispatch()


  const movie = useAppSelector(state => state.movie.data)

  console.log(movie)

  useEffect(()=>{
    dispatch(getMovies())
  },[])
  
  return (
    <>
    <Navbar/>
     <div className='grid grid-rows-2 bg-black w-screen'>
      <div className='bg-black pl-7 h-screen'>
        <h1 className='text-white text-5xl font-semibold ml-11 mt-7 '>Movies</h1>
      <Carousel className=' h-96 w-full mt-8' showThumbs={false} autoPlay={true} >
                <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movie?.results ? movie?.results[1]?.poster_path : ""})`,
                backgroundRepeat:"no-repeat",backgroundSize:"1200px 600px"}} className=' h-96 w-full'>  
                </div>
                <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movie?.results ? movie?.results[2]?.poster_path : ""})`,
                backgroundRepeat:"no-repeat",backgroundSize:"1200px 600px"}} className=' h-96 w-full'>  
                </div>
                <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movie?.results ? movie?.results[3]?.poster_path : ""})`,
                backgroundRepeat:"no-repeat",backgroundSize:"1200px 600px"}} className=' h-96 w-full'>  
                </div>
            </Carousel>
      </div>
      <div>
        <Category category="Action"/>
      </div>
    </div>
    </>
   
  )
}

export default Home
