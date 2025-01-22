import React from 'react';

interface PriceCardProps {
  text1: string;
  text2: string;
  text3: string;
  price: string;
  image: string;
  isActive: boolean;
  onToggle: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({
  text1,
  text2,
  text3,
  price,
  image,
  isActive,
  onToggle,
}) => {
  return (
    <div
      onClick={onToggle}
      // data-aos='fade-right'
      className='border-b-2 relative items-center justify-between hover:scale-105 duration-300 flex flex-col gap-4 p-4 text-center cursor-pointer'
    >
      <div className='flex flex-wrap md:flex-nowrap justify-between w-full'>
        <div className='flex flex-col items-start min-w-[500px]'>
          <h3 className='text-lg font-semibold'>{text1}</h3>
          <p className='text-start'>Що входить у вартість:</p>
          <p className='text-md flex text-start  max-w-[300px] md:max-w-[500px]'>{text2}</p>
          <p className='text-md font-bold text-start'>{text3}</p>
        </div>
        <div className='mt-4 flex items-center md:items-end flex-row-reverse md:flex-col w-full   justify-between  '>
          <span className={`transition-transform font-bold text-[20px] duration-500 ${isActive ? 'rotate-180' : ''}`}>
      {isActive? "-": "+"}
    </span>
          <span className='text-xl flex font-bold'>{price}</span>
        </div>
      </div>
      <div
        className={`${
          isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all  duration-300 ease-in-out`}
      >
        <img src={image} alt='photo' className='h-[300px] rounded-lg   object-cover' />
      </div>
    </div>
  );
};

export default PriceCard;
