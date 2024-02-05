import React from 'react'
import Menuitem from './MenuItem'
import items from './MenuItems'
function Menu() {
    return (
        <div>

            <section className='text-center py-14 lg:px-20 px-3  flex flex-col items-center'>
                <div className='flex flex-col space-y-3 flex-wrap'>
                    <span className='text-yellow-400 text-4xl  '>Burger Menu</span>
                    <span className='font-bold text-4xl  '>BEST EVER BURGERS</span>
                </div>

                <div className='flex flex-col py-10 space-y-8 lg:grid lg:grid-cols-2 lg:px-20 lg:place-content-center lg:space-y-8'>
                    {items.map((i) => {
                        return (
                            <Menuitem
                                img={i.img}
                                name={i.name}
                                description={i.description}
                                price={i.price} />)
                    })}
                </div>

                <button className='w-[90%] py-3 border-2 rounded-3xl text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-white font-semibold'>More Items</button>
            </section>

            <section>
                <div className='flex flex-col space-y-7 lg:flex-row lg:space-y-0'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-125 duration-300 ' src="https://themewagon.github.io/burger/img/burgers/1.png" alt="" />
                        <div className='px-4 absolute top-[25%] w-[80%] flex flex-col lg:top-[35%] lg:px-14 lg:space-y-3'>
                            <span className='text-2xl text-orange-500 font-semibold lg:text-4xl'>$20</span>
                            <span className=' text-xl text-white font-semibold lg:text-3xl'> The Burger President </span>
                            <p className='text-base text-white font-thin lg:text-lg'>Great way to make your business appear trust and relevant</p>
                            <button className='bg-yellow-400 text-base text-white rounded-3xl font-semibold px-3 py-1 lg:py-3 lg:w-[30%]'>Order Now</button>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-125 duration-300' src="https://themewagon.github.io/burger/img/burgers/2.png" alt="" />
                        <div className='px-4 absolute top-[25%] w-[80%] flex flex-col lg:top-[35%] lg:px-14 lg:space-y-3'>
                            <span className='text-2xl text-orange-500 font-semibold lg:text-4xl'>$20</span>
                            <span className=' text-xl text-white font-semibold lg:text-3xl'> The Burger President </span>
                            <p className='text-base text-white font-thin lg:text-lg'>Great way to make your business appear trust and relevant</p>
                            <button className='bg-yellow-400 text-base text-white rounded-3xl font-semibold px-3 py-1 lg:py-3 lg:w-[30%]'>Order Now</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Menu