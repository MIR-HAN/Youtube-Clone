import React, { useContext } from 'react'
import SikBar from '../components/SikBar'
import { VideoContext } from '../context/VideoContext'
import ErrorDisplay from '../components/ErrorDisplay'
import VideoCard from '../components/VideoCard'
import Loader from '../components/Loader'



const Feed = () => {

  const { videos, error, isLoading } = useContext(VideoContext)
  return (
    <div className='flex'>
      <SikBar />

      <div className='videos'>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : (
          videos?.map((item) => item.type === 'video' && <VideoCard video={item} key={item.videoId} />))}
      </div>
    </div>



  )
}

export default Feed