import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";


export default function RowUp() {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) { 
          setVisible(true);
        } else {
          setVisible(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    console.log(visible);
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',  
        });
      };
  return (
    <div className={`duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
 
    <div onClick={scrollToTop} className={`fixed cursor-pointer ${visible ? '' : 'rotate-180'}  hover:scale-125 duration-300 text-orange-500 md:text-[50px] text-[40px] rounded-[50%] bg-gray-500/50 z-50 bottom-10 md:bottom-20 right-5 md:right-20`}><IoIosArrowUp />
    </div>

    </div>
  )
}
