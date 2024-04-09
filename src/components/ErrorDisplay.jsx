import React from 'react'

const ErrorDisplay = ({error}) => {
  return (
    <div className='bg-red-600  h-fit rounded p-5 my-5 '>
      <h2 className='py-3'>Try it later:</h2>

    <span className='my-5'>{error} !</span> </div>
  )
}

export default ErrorDisplay;