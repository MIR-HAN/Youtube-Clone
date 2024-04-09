import React from 'react'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

const ChanelInfo = ({video}) => {
  return (
    <div className='flex justify-between '>
    <div className='flex items-center gap-4'>
        <img className='rounded-full w-12 h-12' src={video.channelThumbnail[0].url} alt="" />
        <div>
            <h4 className='font-bold'>{video.channelTitle}</h4>
            <p className='text-gray-400'>{video.subscriberCountText}</p>
        </div>

        <button className='bg-white text-black px-3 h-9
transition hover:bg-gray-400 rounded-full'>Subscribe</button>
    </div>

    {/* Right side*/}
    <div className='flex items-center rounded-full cursor-pointer bg-'>
        <div className='py-2 px-6 border-r  bg-gray-600'>
            <SlLike />
        </div>
        <div className='py-2 px-6 bg-gray-600'>
            <SlDislike />
        </div>
    </div>
</div>
  )
}

export default ChanelInfo;