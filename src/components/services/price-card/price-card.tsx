import React from 'react';

interface PriceCardProps {
  text1: string;
  text2: string;
  text3: string;
  price: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ text1, text2, text3, price }) => {
  return (
    <div  data-aos="fade-right" className="border-b-2 justify-between max-w-[640px] flex gap-4  p-4  text-center">
        <div className="flex flex-col items-start">

      <h3 className="text-lg font-semibold">{text1}</h3>
        <p className='text-start'>Що входить у вартість:</p>
      <p className="text-md flex text-start">{text2}</p>
      <p className="text-md font-bold">{text3}</p>
        </div>
      <div className="mt-4 flex items-end">
        <span className="text-xl font-bold">{price}</span>
      </div>
    </div>
  );
};

export default PriceCard;
