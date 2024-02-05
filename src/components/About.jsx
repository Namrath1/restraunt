import React from 'react'

function About() {
  return (
    <section className='my-20 px-5 lg:flex lg:px-44 lg:space-x-14'>
    <div className='relative'>

    <div className=''>
       <img src="https://themewagon.github.io/burger/img/about/1.png" alt="" />
       <img className='absolute -bottom-10 right-0 h-[60%] lg:-right-10 ' src="https://themewagon.github.io/burger/img/about/2.png" alt="" />
    </div>
    </div>

    <div className='mt-14 lg:w-[50%] lg:px-20'>
        <span className='text-3xl font-semibold'>ABOUT US</span>
        <br />
        <br />
        <span className='text-3xl font-bold lg:text-5xl'>BEST BURGER IN YOUR CITY</span>
        <p className='my-5 text-slate-500 font-extralight text-lg'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
        </p>
        <img src="https://themewagon.github.io/burger/img/jessica-signature.png" alt="" />
    </div>
    
   
    </section>
  )
}

export default About