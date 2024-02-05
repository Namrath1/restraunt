import React from 'react'

function Testimonial() {
  return (
    <div className='flex flex-col space-y-3 items-center pt-40'>
        <span className='text-3xl text-yellow-500 font-semibold'>Testimonials</span>
        <span className='text-3xl font-bold'>HAPPY CUSTOMERS</span>
        <p className='lg:w-[50%] px-5 text-center pt-5 text-lg '>
        “Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor
        sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec
        sedneque.
        </p>


        <section className='pt-20 space-y-6 lg:flex lg:space-y-0 lg:space-x-8'>
            <img src="https://themewagon.github.io/burger/img/instragram/1.png" alt="" />
            <img src="https://themewagon.github.io/burger/img/instragram/2.png" alt="" />
            <img src="https://themewagon.github.io/burger/img/instragram/3.png" alt="" />
            <img src="https://themewagon.github.io/burger/img/instragram/4.png" alt="" />
        </section>
    </div>
  )
}

export default Testimonial