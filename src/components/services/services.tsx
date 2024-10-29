import React from 'react'
import PriceCard from './price-card/price-card'

export default function Services() {
    const pricePackages = [
        {
          text1: "60 хв",
          text2: "Стрижка ножицями та машинкою.Миття голови та укладання волосся",
          text3: "Чоловіча стрижка",
          price: "250₴",
        },
        {
            text1: "60 хв",
            text2: "Стрижка ножицями та машинкою.Миття голови та укладання волосся",
            text3: "Чоловіча стрижка",
            price: "250₴",
          },
    ]
  return (
    <div className='p-10'>
        <div className="flex flex-col items-center"  data-aos="fade-up">
            <p className='font-bold text-[38px]'>Послуги перукаря</p>
            <p className='text-[22px]'>Ми все робимо швидко та чітко</p>
        </div>
         <div className="flex flex-col gap-4 items-center p-6">
      {pricePackages.map((packageInfo, index) => (
        <PriceCard
          key={index}
          text1={packageInfo.text1} 
          text2={packageInfo.text2} 
          text3={packageInfo.text3} 
          price={packageInfo.price} 
        />
      ))}
    </div>
    </div>
  )
}
