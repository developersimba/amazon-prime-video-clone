import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import YouTube from 'react-youtube'

const Trailer = () => {

    const [video,setVideo] = useState<any>("")

    const location = useLocation()

    const getVideos = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id && location?.state?.id}/videos?api_key=aafa86502a60244c7844fcc84ca5ecce&language=en-US`)
        .then(res => res.json())
        .then(json => setVideo(json?.results))
    }

    useEffect(()=>{
        getVideos()
    },[])

    console.log(video)

    const opts = {
        width:"1200",
        height:"400",
        playerVars: {
            autoplay: 1,
          },
    }

  return (
    <div className='pt-20 bg-black h-screen w-screen'>
      <YouTube videoId={video[0]?.key} opts={opts}/>
    </div>
  )
}

export default Trailer
