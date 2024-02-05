import React from 'react'
import About from './About'
import Testimonial from './Testimonial'

function AboutPage() {
    return (
        <div>
            <div className='relative overflow-hidden items-center justify-center'>
                <img className='h-72 lg:h-fit lg:scale-100 scale-150' src="https://themewagon.github.io/burger/img/banner/bradcam.png" alt="" />
                <div className='w-screen  top-[40%] absolute text-center'>
                <span className='text-3xl lg:text-7xl text-white font-bold'>ABOUT</span>
                </div>
            </div>
            <div className='mt-5'>
                <About />
            </div>
            
                <Testimonial />
            
        </div>
    )
}

export default AboutPage