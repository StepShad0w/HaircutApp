import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='h-[500px] bg-black'>
      <div className='flex flex-col items-center text-white justify-evenly h-full'>
        <div className='text-[22px] lg:text-[32px] font-bold'>
          <a href='tel:+380962548744'>+38(096)25-48-744</a>
        </div>
        <div className='text-[22px] lg:text-[32px] font-bold'>
          <p>смт. Козова, вулиця Михайла Грушевського, 12</p>
        </div>
        <div className='max-w-[370px] lg:max-w-[1200px]'>
          <p>Ми працюємо з: 10:00 – 16:00, у понеділок, середу та п'ятницю</p>
        </div>
        <a
          className='flex items-center gap-4'
          target='_blanck'
          href='https://www.instagram.com/galiaboiko5/'
        >
          <p>Записатися через instagram</p>

          <FaInstagram className='text-[40px]' />
        </a>
      </div>
    </div>
  );
}
