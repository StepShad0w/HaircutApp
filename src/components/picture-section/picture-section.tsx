import React from 'react';
import { Fone1, Fone2 } from '../../images';

export default function PictureSection() {
  const imagesArray = [ Fone2,Fone2,Fone2,Fone2,Fone2,Fone2];
  const lengh = imagesArray.length
  return (
    <div className=''>
        {/* <div className="flex pb-10 ">
            <div className="w-1/3">
                <img src={Fone2} alt="" />
                <img src={Fone2} alt="" />
            </div>
            <div className="w-2/3">

            <img src={Fone2} alt="" />
            </div>
        </div> */}
      <div className=''>
        <div className={`flex flex-wrap md:flex-nowrap  `}>
          {imagesArray.map((img) => (
            <div className={`md:w-1/${lengh} xs:w-1/${lengh/2} w-1/${lengh/3}  `}>
              <img src={img} alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
