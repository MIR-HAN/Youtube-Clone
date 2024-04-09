import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const Loader = () => {

const arr =[1,2,3,4,5,6,7,8,9,1,2,3,4]

    return arr.map ((item) => (
        <div key={item.id} className="p-4  rounded shadow animate-pulse md:p-6">
            <div className="flex items-center justify-center h-48 mb-4rounded bg-gray-700">

            </div>

            <div className="flex items-center mt-4 gap-3">
                <FaRegUserCircle className='text-5xl text-gray-700' />

                <div>
                    <div className="h-2.5 rounded-full bg-gray-700 w-44 mb-2"/>
                    <div className="w-16 h-2 rounded-full dark:bg-gray-700 my-3"/>
                   <div className='flex gap-2'>
                    <div className='w-28 h-2 bg-gray-700 rounded full ' />
                    <div className='w-28 h-2 bg-gray-700 rounded full ' />
                    </div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
)
    )
}

export default Loader;