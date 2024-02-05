import React from 'react'

function MenuItem(props) {
  return (
    <div className='flex space-y-4 lg:space-x-3 flex-col lg:flex-row items-center  '>
        <div className='rounded-full '>
            <img className='h-44 w-44' src={props.img} alt="" />
        </div>
        <div className='flex flex-col space-y-3 lg:w-[60%] lg:text-left '>
            <span className='text-2xl lg:text-3xl font-bold'>{props.name}</span>
            <span className='text-lg '>{props.description}</span>
            <span className='text-orange-500 font-bold text-2xl'>{props.price}</span>
        </div>
    </div>
  )
}

export default MenuItem