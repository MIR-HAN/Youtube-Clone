import React from 'react'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaArrowDown } from "react-icons/fa6";




const Comments = ({ data }) => {

    if (!data) {
        return <div>Loading comments...</div>;
    }
    console.log(data)
    return (
        <div className='my-6'>
            <h2 className='text-xlg font-bold'> {data.commentsCount} </h2>
            <input className='w-full bg-transparent mb-5 border-b p-2 outline-none'
                placeholder='Add comment' type="text" />


            {data.data && data.data.map((i) => (

                <div key={i.id} className='flex gap-2 items-center py-4 px-1'>
                    <img className='rounded-full' src={i.authorThumbnail[0].url} alt="logo" />
                    <div className='flex flex-col gap-2'>
                        <h5 className='flex gap-2'>
                            <span className='text-semi-bold'>{i.authorText} </span>
                            <span className='text-sm text-gray-700 p-1 rounded cursor-pointer'>{i.publishedTimeText}</span>
                        </h5>
                        <p>{i.textDisplay}</p>

                        <div className='flex gap-4 items-center'>
                            <div className='flex gap-1  text-gray-700 p-1 hover:bg-gray-700 rounded cursor-pointer '>
                                <i>  <SlLike /></i>
                                <span className='text-sm text-gray-400'>{i.likesCount}</span>
                            </div>

                            <div className=' text-gray-700 p-1  hover:bg-gray-700 rounded cursor-pointer '>
                                <i> <SlDislike /></i>
                            </div>

                            <span className=' text-gray-700 p-1 rounded cursor-pointer'>Reply
                            </span>
                        </div>


                        {i.replyCount > 0 && (
                            <div className='flex items-center gap-2 text-blue-500
    hover:bg-[#3752e883] w-fit rounded hover hover:text-white'>
                                <FaArrowDown />
                                {i.replyCount} Reply </div>
                        )}


                    </div>
                </div>

            ))}

        </div>
    )
}

export default Comments;