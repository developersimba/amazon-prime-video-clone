import React, { useEffect } from 'react'
import {useState} from "react"
import ViewTrailer from './ViewTrailer'



interface movieProp {
  movies : any
}

const Welcome = (props:movieProp) => {

  


  return (
    <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${props?.movies?.poster_path})`,
    backgroundRepeat:"no-repeat",backgroundSize:"1160px 950px"}} className='pb-7 h-screen grid grid-cols-2'>
      <div>
       <h1 className='text-slate-300 pt-44 font-bold text-4xl'>{props?.movies?.title ?? props?.movies?.name}</h1>
       <h1 className='text-slate-300 mt-3'>{props?.movies?.release_date ?? props?.movies?.first_air_date}</h1>
       <h1 className='text-slate-300 mt-4'>{props?.movies?.overview?.substring(0,props?.movies?.overview.indexOf("."))}</h1>
        <h1 className='text-yellow-500 font-bold text-3xl mt-8'>Language - {props?.movies?.original_language}</h1>
        {props.movies && <ViewTrailer welcomeId = {props?.movies?.id}/>}
      </div>
    </div>
  )
}

export default Welcome
