import React, { useState } from "react";
import PriceCard from "./price-card/price-card";
import Crop from "../../images/ss.jpg";
import { Canadka, Fade, Pokraska, SidePart, Ukladka, Undercut, Wedding } from '../../images';

export default function Services() {
  const malePackages = [
    {
      text1: "60 хв",
      text2: "Стрижка ножицями та машинкою. Миття голови та укладання волосся",
      text3: "Чоловіча стрижка - Crop",
      price: "250₴",
      image: Crop,
    },
    {
      text1: "60 хв",
      text2: "Стрижка ножицями та машинкою. Миття голови та укладання волосся",
      text3: "Чоловіча стрижка - Fade",
      price: "300₴",
      image: Fade,
    },
    {
      text1: "60 хв",
      text2: "Стрижка ножицями та машинкою. Миття голови та укладання волосся",
      text3: "Чоловіча стрижка - Канадка",
      price: "300₴",
      image: Canadka,
    },
    {
      text1: "60 хв",
      text2: "Стрижка ножицями та машинкою. Миття голови та укладання волосся",
      text3: "Чоловіча стрижка - Side Part",
      price: "300₴",
      image: SidePart,
    },
    {
      text1: "60 хв",
      text2: "Стрижка ножицями та машинкою. Миття голови та укладання волосся",
      text3: "Чоловіча стрижка - Undercut",
      price: "300₴",
      image: Undercut,
    },
  ];

  const femalePackages = [
    {
      text1: "60 хв",
      text2: "Укладка волосся. Включає миття та використання засобів для укладки.",
      text3: "Жіноча укладка",
      price: "300/400/500₴",
      image: Ukladka,
    }, 
    {
      text1: "120 хв",
      text2: "Фарбування волосся. Включає стрижку, миття та укладку.",
      text3: "Фарбування",
      price: "700/800/1000₴",
      image: Pokraska,
    },
    {
      text1: "60-80 хв",
      text2: "Тонування волосся. Включає стрижку, миття та укладку.",
      text3: "Тонування",
      price: "500₴",
      image: Fade,
    },
    {
      text1: "120-150 хв",
      text2: "Весільна зачіска з використанням аксесуарів.",
      text3: "Весільна зачіска",
      price: "700₴",
      image: Wedding, 
    },
  ];
  

  const [activeCategory, setActiveCategory] = useState("male");
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  const packages =
    activeCategory === "male" ? malePackages : femalePackages;

  return (
    <div className="p-2 md:p-10">
      <div className="flex flex-col items-center" data-aos="fade-up">
        <p className="font-bold text-[38px]">Послуги перукаря</p>
        <p>{activeCategory == 'female' && 'ціни залежать від довжини волося'}</p>
        {/* <p className="text-[22px]">Ми все робимо швидко та чітко</p> */}
      </div>
      <div className="flex justify-center gap-4 mb-6 pt-4">
        <button
          className={`px-4 py-2 border-black border w-[100px] rounded-lg font-bold  ${
            activeCategory === "male" ? "bg-black border-white text-white duration-300" : "text-black"
          }`}
          onClick={() => (
            setActiveCategory("male"),
            setActiveCardIndex(null))}
        >
          Чоловічі
        </button>
        <button
            className={`px-4 py-2 border-black border w-[100px] rounded-lg font-bold duration-300  ${
              activeCategory === "female" ? "bg-black border-white text-white" : "text-black"
            }`}
          
          onClick={() => (
            setActiveCategory("female"),
            setActiveCardIndex(null))}

        >
          Жіночі
        </button>
      </div>
      <div className="flex flex-col gap-4 max-w-[900px] mx-auto p-6">
        {packages.map((packageInfo, index) => (
          <PriceCard
            key={index}
            text1={packageInfo.text1}
            text2={packageInfo.text2}
            text3={packageInfo.text3}
            price={packageInfo.price}
            image={packageInfo.image}
            isActive={activeCardIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
