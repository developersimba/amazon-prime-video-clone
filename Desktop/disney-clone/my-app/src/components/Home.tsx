import React, { useEffect, useState } from 'react'
import johnwick from "../images/johnwick.png"
import { Link } from 'react-router-dom'

interface movieProp {
    movies:any
    search:boolean
    searchRef:any
}

const Home = (props:movieProp) => {


    const [searchKeys,setSearchKeys] = useState("")


    return (
        <>
         {props.search &&
          <input ref={props.searchRef} onChange={(e)=> setSearchKeys(e.target.value)} type="text"  className="ml-28 mt-3 bg-gray-800 border 
         border-gray-800 text-white text-sm rounded-lg focus:ring-gray-800
          focus:border-gray-800 block w-10/12 p-2.5 outline-none" placeholder="Movies, Shows and more" required/>}
       <h1 className='mt-5 text-slate-300 pl-28 font-bold text-2xl'>Latest Releases</h1>
        <div className='grid grid-cols-6 pl-24 pt-7'>
            {props?.movies?.filter((data:any)=> data?.title?.includes(searchKeys) || data?.name?.includes(searchKeys)).map((data:any) => {
                return <>
                    <Link to="/details" state={{data:data}}><div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains" />
                    </div>
                    </Link>
                </>
            })}
        </div>
        </>
    )
}

export default Home
