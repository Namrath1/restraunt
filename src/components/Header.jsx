import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {

    const [displayMode, setdisplayMode] = useState("none")
    const dispfuntion = () => {
        if(displayMode === "none"){
            setdisplayMode("block");
        }else{
            setdisplayMode("none");
        }
    }
    
   const [size, setsize] = useState(0)
     useEffect(() => {
      setsize(window.innerWidth)
     }, [window.innerWidth])
     
    
      if (size > 768) {
        return (
            <div className='bg-black flex justify-center'>
                <div className='w-1/3 text-white flex items-center justify-center '>
                    <ul className='flex space-x-7 text-base  justify-center font-bold flex-wrap'>
                        <li className='hover:underline decoration-yellow-400 underline-offset-4 hover:text-yellow-400'><Link to="/">Home</Link> </li>
                        <li className='hover:underline  decoration-yellow-400 underline-offset-4  hover:text-yellow-400'><Link to="/menu">Menu</Link></li>
                        <li className='hover:underline  decoration-yellow-400 underline-offset-4  hover:text-yellow-400'><Link to="/about">About</Link></li>
                        <li className='hover:underline  decoration-yellow-400 underline-offset-4  hover:text-yellow-400'>Blog</li>
                        <li className='underline-offset-4  decoration-yellow-400 hover:underline  hover:text-yellow-400'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='w-1/3 '>
                    <img onClick={<Link to="/"></Link>} className='m-auto' src="https://themewagon.github.io/burger/img/logo.png" alt="" />
                </div>
                <div className='w-1/3 flex items-center space-x-4'>
                    <img src="\icons8-instagram.svg" alt="" />
                    <img src="\icons8-twitter.svg" alt="" />
                </div>
            </div>
          )
      } else {
        return(
        <div>
        <div className='bg-black flex justify-between p-4 relative'>
        <img className='h-12 sm:h-16' src="https://themewagon.github.io/burger/img/logo.png" alt="" />
        <img onClick={dispfuntion} className='w-10' src="\icons8-menu.svg" alt="" />
        </div>
        <div style={{display:displayMode}} className='mx-[5%] absolute top-[9%] bg-white w-[90%]  z-10 '>
            <ul className='  px-5 py-2 space-y-3'>
                <li className='active:text-orange-500'><Link to="/">Home</Link></li>
                <li className='active:text-orange-500'><Link to="/menu">Menu</Link></li>
                <li className='active:text-orange-500' ><Link to="/about">About</Link></li>
                <li className='active:text-orange-500' ><Link to="/contact">Contact</Link></li>
                <li className='active:text-orange-500' >Blog</li>
            </ul>
        </div>
        </div>
        
        )
      }
    };

    


  


export default Header