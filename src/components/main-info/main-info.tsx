import React from 'react'
import IconText from './icon-text/icon-text';
import { SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { BsTelephonePlus } from "react-icons/bs";


export default function MainInfo() {
    const iconTextData = [
        { icon:  <SlLocationPin />, text1: "смт. Козова", text2: "вулиця Михайла Грушевського, 12" },
        { icon: <FaRegClock />, text1: "пн, ср, пт з 10:00 - 16:00", text2: "інші дні вихідні" },
        { icon: <BsTelephonePlus />, text1: "Телефон", text2: "+38(096)25-48-744" },
      ];
  return (
    <div className=" p-10 bg-orange-100">
        <div className="p-6 flex  items-center h-[100%] lg:max-w-[1400px] lg:mx-auto gap-6 flex-col md:flex-row lg:justify-evenly">
      {iconTextData.map((item, index) => (
        <div className="md:w-1/3 md:flex md:justify-center w-[300px]">

        <IconText
          key={index} 
          icon={item.icon} 
          text1={item.text1} 
          text2={item.text2} 
          />
          </div>
      ))}
    </div>
    </div>
  )
}
