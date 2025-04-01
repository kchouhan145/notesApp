import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';

const Develooer = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center text-center gap-4 px-4 sm:px-8'>
        <h1 className='font-bold text-3xl sm:text-4xl'>HEY, I'M KARTIK CHOUHAN</h1>
        <p className='text-sm sm:text-base'>A Frontend focused Web Developer building the Frontend of Web Applications.</p>
        <p className='text-sm sm:text-base'>Currently working on React and learning Backend</p>
        <button className='bg-yellow-300 py-2 w-[10rem] rounded-lg self-center mt-6'>
            <Link to='https://kartik-chouhan.vercel.app/' className='text-sm sm:text-base'>Portfolio</Link>
        </button>
    </div>
  )
}

export default Develooer
