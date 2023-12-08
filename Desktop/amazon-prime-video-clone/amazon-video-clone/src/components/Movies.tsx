import React,{useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getMovies } from '../redux/movieSlice'
import Navbar from './Navbar'
import { useLocation, useNavigate } from 'react-router-dom'

const Movies = () => {

    const location = useLocation()
    

    const navigate = useNavigate()

    const dispatch = useAppDispatch()


    const movie = useAppSelector(state => state.movie.data)
  
  
    useEffect(()=>{
      dispatch(getMovies())
    },[])

    const detailsNavigate = (data:any) =>{
        navigate("/details",{
            state:{
                data:data
            }
        })
    }


  return (
    <div className='bg-black w-screen h-screen'>
    <Navbar/>
    <h1 className='bg-black text-white font-bold text-2xl ml-6 mt-5'>Results for "{location?.state?.data}"</h1>
    <div className='grid grid-cols-4 bg-black mt-4'>
      {movie?.results ? movie?.results?.filter((data:any) => data?.title?.includes(location?.state?.data)).map((data:any)=>{
         return(
            <div onClick={()=> detailsNavigate(data)} className='mt-6 ml-6 cursor-pointer'>
               <img className='w-80 h-40 rounded-lg' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
            </div>    
         ) 
      }) : ""}
    </div>
    </div>
  )
}

export default Movies
