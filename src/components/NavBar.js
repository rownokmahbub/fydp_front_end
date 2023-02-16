import React from 'react'
import {FaHatWizard} from 'react-icons/fa'
import {BiHomeCircle} from 'react-icons/bi'
import {TbNotification} from 'react-icons/tb'
import {CgProfile} from 'react-icons/cg'
import {HiHashtag} from 'react-icons/hi'

import rownok from '../assets/rownok.png'
const NavBar = () => {
  return (
    <div className='relative'>
     <div className='flex flex-col justify-start mt-10 h-[650px] sticky left-14 top-0 items-start gap-7'>
        <FaHatWizard className='text-3xl'/>
        <div className="flex items-center gap-2 cursor-pointer">
            <BiHomeCircle className='text-3xl'/>
            <p className='text-xl font-bold'>Home</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <TbNotification className='text-3xl'/>
            <p className='text-xl font-bold'>Notification</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <CgProfile className='text-3xl'/>
            <p className='text-xl font-bold'>Profile</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <HiHashtag className='text-3xl'/>
            <p className='text-xl font-bold'>Explore</p>
        </div>
        <button className='btn btn-primary rounded-full'>Create Post</button>

        <div className="flex justify-between items-center absolute bottom-0 cursor-pointer">
            <div className="flex gap-1">
               <img className='w-12' src={rownok} alt="" />
               <div className="flex flex-col">
                <p className='text-lg font-semibold capitalize'>rownok</p>
                <p className='text-xs text-gray-500'>@rownok</p>
               </div>
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default NavBar