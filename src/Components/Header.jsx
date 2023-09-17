import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [btnLogin,setbtnLogin]=useState("Login")
  return (
    <div className='header flex justify-between  px-6 py-3 bg-black items-center  text-white shadow-2xl '>

        <div className="imageLogo">
            <img className='w-14 h-14 rounded-full' src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg" alt="" />
        </div>

        <div className="navList">
            <ul className='flex gap-4 text-lg'>
                <li>
                      <Link to="/">Home</Link>

                </li>
                <li><Link to="/about">AboutUs</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li>Cart</li>
                <button className='bg-cyan-50 text-black p-1 rounded'
                     onClick={()=>{
                      if(btnLogin=="Login"){
                        setbtnLogin("Logout")
                      }
                      else{
                        setbtnLogin("Login")
                      }
                     }}
                >{btnLogin}</button>
            </ul>
        </div>

    </div>
  )
}

export default Header