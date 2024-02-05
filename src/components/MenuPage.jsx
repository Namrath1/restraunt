import React from 'react'
import Menu from './Menu'
import Testimonial from './Testimonial'

function MenuPage() {
  return (
    <div>

    <div className='relative overflow-hidden  '>
        <img className='h-72 scale-150 lg:h-fit lg:scale-100' src="https://themewagon.github.io/burger/img/banner/bradcam.png" alt="" />
        <div className='w-screen  top-[40%] absolute text-center'>
                <span className='lg:text-7xl text-3xl text-white font-bold'>MENU</span>
        </div>
    </div>
        <div className='mt-5'>
            <Menu/>
        </div>
       
        <Testimonial/>
       
    </div>
  )
}

export default MenuPage