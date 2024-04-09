import millify from 'millify';
import React, { useState } from 'react'

const VideoInfo = ({video}) => {

    const [expand,setExpand]=useState(false)

const text = expand ? video.description : video.description.slice(0,300) + '...more'

  return (
    <div onClick={()=> setExpand(!expand)} className='bg-gray-600 rounded bg-darkgray-400
    cursor-pointer mt-5 hover:bg-opacity-80'>

        <div className='flex gap-3 mb-2'>
            <p className='font-bold'>{millify(video.viewCount)}view </p>
            <p className='font-bold'>{new Date(video.publishDate).toLocaleDateString('en',{
            
            day:'2-digit',
            month:'short',
            year:'numeric'
            } )}</p>
        </div>
    
    <p>{text.split('\n').map((line)=> <span>
        {line} <br />
    </span>)}</p>
    
    </div>

  )
}

export default VideoInfo;