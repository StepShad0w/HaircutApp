import React from 'react';

interface IconTextProps {
  icon: React.ReactNode;
  text1: string;          
  text2: string;          
}

const IconText: React.FC<IconTextProps> = ({ icon, text1, text2 }) => {
  return (
    <div className="flex flex-col items-center text-center min-h-[100px] w-full md:min-h-[200px] border-b-2 border-orange-400  p-4">
      <div className="text-3xl lg:text-6xl mb-4">{icon}</div> 
      <p className="text-lg text-gray-600 ">{text1}</p> 
      <p className="text-lg text-gray-600">{text2}</p>
    </div>
  );
};

export default IconText;
