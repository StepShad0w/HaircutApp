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
      className='border-b-2 relative items-center justify-between   flex flex-col gap-4 p-4 text-center cursor-pointer'
    >
      <div className='flex flex-wrap justify-between w-full'>
        <div className='flex flex-col items-start'>
          <h3 className='text-lg font-semibold'>{text1}</h3>
          <p className='text-start'>Що входить у вартість:</p>
          <p className='text-md flex text-start  max-w-[300px]'>{text2}</p>
          <p className='text-md font-bold text-start'>{text3}</p>
        </div>
        <div className='mt-4 flex items-end '>
          <span className='text-xl font-bold'>{price}</span>
        </div>
      </div>
      <div
        className={`${
          isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <img src={image} alt='s' className='h-[300px] object-cover' />
      </div>
    </div>
  );
};

export default PriceCard;
