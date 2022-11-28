import React from 'react'
import {Link}from 'react-router-dom'
function Navbar() {
  return (
   <nav className='mx-auto  text-base lg:text-2xl  text-center bg-blue-50  fixed z-50 w-full '>
    <div>
        <h1 className='text-yellow-700 text-center text-4xl bg-yellow-100 p-2'>Restaurant</h1>
    </div>
    <div className='my-4'>
    <Link className='ml-4 text-blue-900 no-underline hover:underline text-blue-900 ' to='/'>All</Link>
    <Link className='ml-4 text-blue-900 no-underline hover:underline text-blue-900 ' to='/Breakfast'>Breakfast</Link>
    <Link className='ml-4 text-blue-900 no-underline hover:underline text-blue-900 ' to='/Lunch'>Lunch</Link>
    <Link className='ml-4 text-blue-900 no-underline hover:underline text-blue-900 ' to='/Evening'>Evening</Link>
    <Link className='ml-4 text-blue-900 no-underline hover:underline text-blue-900 ' to='/Dinner'>Dinner</Link>
    </div>
   </nav>
  )
}

export default Navbar