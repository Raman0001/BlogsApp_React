import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <>
      <h2 className='font-bold text-7xl text-center'>Post not found</h2>
      <p className='text-center'>well, that's disappointing</p>
      <p className='pt-10 text-center text-blue-900 underline'>
        <Link to='/'>Visit Our Homepage</Link>
      </p>
    </>
  )
}

export default Missing
