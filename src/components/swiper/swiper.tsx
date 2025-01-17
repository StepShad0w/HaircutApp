import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fone1, Fone2, Fone3, Fone4 } from '../../images'; // Adjust import based on your index.ts file setup

const images = [Fone1,Fone2,Fone3,Fone4];

const SliderComponent = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        pauseOnHover:false,
        
    };

    return (
        <div className="w-full">

        <Slider {...settings}>
            {images.map((img, index) => (
                <div key={index} className="h-screen w-100% bg-cover bg-center">
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        />
                    <div className="text-white absolute flex-col inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="text-white text-[38px] lg:text-[68px]">
                        <p >Чоловічі та жіночі стрижки</p>
                    </div>
                    <div className="text-white">
                        <p className='text-[16px] lg:text-[22px]'>смт. Козова, вулиця Михайла Грушевського, 12</p>
                        <a  className='text-[16px] lg:text-[30px] font-bold' href="tel:+380962548744">+38(096)25-48-744</a>
                    </div>
                    </div>
                </div>
            ))}
        </Slider>
            </div>
    );
};

export default SliderComponent;
