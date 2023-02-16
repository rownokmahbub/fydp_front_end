import React from 'react'

import {FaHatWizard} from 'react-icons/fa'
import {BiHomeCircle} from 'react-icons/bi'
import {TbNotification} from 'react-icons/tb'
import {CgProfile} from 'react-icons/cg'
import {HiHashtag} from 'react-icons/hi'
import rownok from '../assets/rownok.png'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import PostCreate from './PostCreate'
import SignIn from './SignIn';
const NavBar = () => {
    let [isOpen, setIsOpen] = useState(false);
    let [isSignUp, setSignUp] = useState(false);
    function closeSign() {
      setSignUp(false);
    
    }
  
    function openSign() {
      setSignUp(true);
     
    }
    function closeModal() {
        setIsOpen(false);
      
      }
    
      function openModal() {
        setIsOpen(true);
       
      }
  return (
   
      
      <div className='relative'>
     <div className='flex flex-col justify-start mt-10 h-[650px] sticky left-0 top-0 items-start gap-7'>
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
        <button className='btn btn-primary rounded-full' onClick={openModal}>Create Post</button>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-4xl flex justify-center items-center transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                     <PostCreate/>
                   
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
    
          <button  className="flex justify-between items-center absolute bottom-0 cursor-pointer" onClick={openSign}>
            <div className="flex gap-1">
               <img className='w-12' src={rownok} alt="" />
               <div className="flex flex-col">
                <p className='text-lg font-semibold capitalize'>rownok</p>
                <p className='text-xs text-gray-500'>@rownok</p>
               </div>
            </div>
        </button>
        <Transition appear show={isSignUp} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeSign}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md flex justify-center items-center transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <SignIn/>
                   
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          
        
    </div>
    </div>
     
   
   
   
  )
}

export default NavBar