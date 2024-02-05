import React from 'react'

function ContactPage() {
    return (
        <div>
            <div className='relative overflow-hidden items-center justify-center'>
                <img className='h-72 lg:h-fit lg:scale-100 scale-x-150 ' src="https://themewagon.github.io/burger/img/banner/bradcam3.png" alt="" />
                <div className='w-screen  top-[40%] absolute text-center'>
                    <span className='text-3xl lg:text-7xl text-white font-bold'>CONTACT</span>
                </div>
            </div>
            <div className='px-4 py-10 space-y-8'>
                <span className='text-3xl'>Get in Touch</span>
                <form className='space-y-6'>
                    <textarea className='px-3 py-2 border-2 border-slate-200 w-[95%]' name="" placeholder='Enter Message' id="" cols="30" rows="10"></textarea>
                    <input className='px-3 py-3 w-[95%] border-2 border-slate-200' placeholder='Name' type="text" name="name" />
                    <input className='px-3 py-3 w-[95%] border-2 border-slate-200' placeholder='Email' type="text" name="email" />
                    <input className='px-3 py-3 w-[95%] border-2 border-slate-200' placeholder='Subject' type="text" name="subject" />

                    <input className='border-2 bg-orange-500 px-10 py-3 rounded-3xl text-white' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default ContactPage