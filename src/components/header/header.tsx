import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { TbX } from "react-icons/tb";


export default function Header() {
    const [open, setOpen] = useState(false)
    const handleOpenModal = ()=>{
        setOpen(!open)
    }
  return (
   <div className="p-8 absolute z-10 w-[100%]">
        <div className=" hidden md:flex justify-center gap-4 text-white text-[20px] font-bold">
            <a className='hover:text-gray-300' href="#services">Послуги</a>
            <a className='hover:text-gray-300' href="#photos">Фотографії</a>
            <a className='hover:text-gray-300' href="#location">Локація</a>
            <a className='hover:text-gray-300' href="#contacts">Контакти</a>
            
        </div>
        <div className="block md:hidden relative z-10">
            {!open ?
        <FaBars onClick={handleOpenModal} className='text-white text-[40px]' />
        :
        <TbX onClick={handleOpenModal} className='text-white text-[40px]'/>
            }
        </div>
        {open && 
        <div className="bg-black h-[100vh] absolute left-0 top-0 w-[100vw]">
             <div  className=" flex flex-col justify-center gap-4 text-white text-[20px] items-center h-[100%] font-bold">
            <a onClick={()=>setOpen(false)} href="#services">Послуги</a>
            <a onClick={()=>setOpen(false)} href="#photos">Фотографії</a>
            <a onClick={()=>setOpen(false)} href="#location">Локація</a>
            <a onClick={()=>setOpen(false)} href="#contacts">Контакти</a>
            
        </div>
        </div>
        }
   </div>
  )
}
