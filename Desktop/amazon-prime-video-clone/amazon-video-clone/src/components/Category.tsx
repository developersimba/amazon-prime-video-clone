import React,{useEffect} from 'react'
import batman from "../images/batman.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getMovies } from '../redux/movieSlice'

interface categoryProp {
  category:any
}

const Category = (props:categoryProp) => {

  const navigate = useNavigate()

  const dispatch = useAppDispatch()


  const movie = useAppSelector(state => state.movie.data)


  const detailsNavigate = (data:any) =>{
    navigate("/details",{
      state:{
          data:data
      }
    })
  }

  useEffect(()=>{
    dispatch(getMovies())
  },[])

  return (
    <>
    <div className='flex items-center ml-9'>
    <h1 className='text-blue-500 font-semibold text-2xl'>Prime</h1>
    <h1 className='text-white font-semibold text-xl ml-3'>{props.category} Movies</h1>
    </div>
    <div className='flex items-center overflow-scroll mt-4 no-amazon-scrollbar'>
    {movie?.results ? movie?.results?.map((data:any)=>{
      return <>
       <img onClick={()=> detailsNavigate(data)} src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} className='cursor-pointer ml-9 w-72 h-44 rounded-lg'/>
      </>
    }) : ""}
    </div>
    </>
  )
}

export default Category
