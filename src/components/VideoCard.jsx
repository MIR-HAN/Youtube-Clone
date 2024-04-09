import millify from 'millify';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const VideoCard = ({ video, isRow }) => {

const [isHover, setIsHover] = useState(false);
const navigate = useNavigate();


    return (
        <div 
        onClick={()=> navigate(`/watch?v=${video.videoId}`)}
       onMouseEnter={()=> setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)} 
        className={`${isRow ? 'row' : ' '} 'cursor-pointer`}>

            <div>
                <img className='rounded-lg w-full h-full'
                //get best qualty img in the array
                    src={
                        isHover && video.richThumbnail ?
                        video.richThumbnail[0].url
                        :video.thumbnail[video.thumbnail.length - 1].url} alt="" />
            </div>

{/*bottom */}
            <div className='flex gap-4 mt-5'>
                <img className='c-pic w-14 h-14 rounded-full' src={video.channelThumbnail[0].url} alt="logo" />
               
                <div>
                    <h4 className='font-bold line-clamp-2'>{video.title}</h4>
                    <p>{video.channelTitle}</p>
                    <div className='detail flex gap-3'>
                        <p className='flex gap-1'>
                        <span>{millify(video.viewCount)}</span>
                        <span className='text'>Views</span>
                        </p>   
                         *
                        <p>{video.publishedTimeText}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoCard;