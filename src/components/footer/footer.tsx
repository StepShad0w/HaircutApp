import React from 'react'
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='h-[500px] bg-black'>
        <div className="flex flex-col items-center text-white justify-evenly h-full">
            <div className="text-[22px] lg:text-[32px] font-bold">
                <p>+38(096)25-48-744</p>
            </div>
            <div className="text-[22px] lg:text-[32px] font-bold">
                <p>см. Козова, вулиця Михайла Грушевського, 4</p>
            </div>
            <div className="max-w-[370px] lg:max-w-[1200px]">
                <p>

            Ми працюємо з: 10:00 – 16:00, у понеділок, середу та п'ятницю
                </p>
                <p>

Пошта: goodwork.barber@gmail.com
                </p>
            </div>
            <a href="">

            <FaInstagram className='text-[40px]' />
            </a>
        </div>
    </div>
  )
}
