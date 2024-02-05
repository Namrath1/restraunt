import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col mt-16 pt-16 pb-32 max-w-screen justify-center items-center text-center space-y-8  lg:flex-row lg:space-y-0 bg-slate-100 '>
        <div className='w-[70%] lg:w-[25%] lg:px-14 '>
            <span className='text-2xl font-semibold '>New York</span>
            <p className='text-center my-6 lg:text-lg'>5th flora, 700/D kings road,
               green lane New York-1782
               info@burger.com</p>
            <span className='text-orange-600 text-lg lg:text-2xl'>+10 378 483 6782</span>
        </div>
        <div className='w-[70%] lg:w-[25%] lg:px-14'>
        <span className='text-2xl font-semibold'>New York</span>
            <p className='text-center my-6 lg:text-lg'>5th flora, 700/D kings road,
               green lane New York-1782
               info@burger.com</p>
            <span className='text-orange-600 text-lg lg:text-2xl'>+10 378 483 6782</span>
        </div>
        <div className='flex flex-col lg:w-[30%] '>
        <span className='text-2xl font-semibold'>Stay Connected</span>
        <div className='-space-x-6'> 
        <input className='rounded-3xl px-10 py-3 border-2 mt-6' type="text" placeholder='Enter your email'/>
        <button className='bg-orange-600 px-6 py-3 rounded-3xl text-white font-semibold '>Sign Up</button>
        </div>
        <span className='mt-4 text-lg mb-10'>Stay connect with us to get exclusive offer!</span>
        </div>
    </div>
  )
}

export default Footer