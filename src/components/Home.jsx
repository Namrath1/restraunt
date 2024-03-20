import React from 'react'

import Menu from './Menu'
import About from './About'
import Testimonial from './Testimonial'
function Home() {
  return (
    <div>
        <div className='relative '>
            <img className='h-80 lg:h-fit ' src="\pexels-daniel-reche-3616956.jpg" alt="" />
            <div className='absolute top-[10%] lg:top-[20%] w-screen m-auto text-center'>
                <img className='w-44 m-auto' src="https://themewagon.github.io/burger/img/shape/1.png" alt="" />
                <span className='text-white text-xl font-bold absolute left-[48%] top-3 text-center'>Big Deal</span>
                <div className='flex flex-col'>
                <span className='text-white font-extrabold text-5xl lg:text-8xl '>BURGER <br />BACHELOR </span>
                <span className='text-yellow-400 italic text-6xl -mt-5 lg:text-[6.5rem] lg:font-bold lg:-mt-10'>Mexican</span>
                </div>
            </div>
        </div>

        <Menu/>
        <About/>
        <Testimonial/>
    </div>
  )
}

export default Home