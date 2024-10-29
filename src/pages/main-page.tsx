import React from 'react'
import myImage from '../images/phone.jpg';
import Header from '../components/header/header';
import MainInfo from '../components/main-info/main-info';
import Services from '../components/services/services';
import Footer from '../components/footer/footer';
import MapComponent from '../components/map-content/map-content';
export default function MainPage() {
  return (
    <div className=''>
        {/* <img className='image-fone' src={myImage}></img> */}
                <Header/>
        <div className="image-fone">
            <div className="image-opacity">
                <div className="flex flex-col h-[100%] justify-center">
                    <div className="text-white text-[38px] lg:text-[68px]">
                        <p>Чоловічі та жіночі стрижки</p>
                    </div>
                    <div className="text-white">
                        <p className='text-[16px] lg:text-[22px]'>см. Козова, вулиця Михайла Грушевського, 4</p>
                        <p className='text-[16px] lg:text-[30px] font-bold'>+38(096)25-48-744</p>
                    </div>
                </div>

            </div>
        </div>
        <div  data-aos="fade-up" className="d">

                <MainInfo   />
        </div>
                <div id='services' data-aos="fade-up" className="pt-20">
                <Services />
                </div>
                <div id='location' data-aos="zoom-in" className="pt-20">

                <MapComponent/>
                </div>
                <div id='contacts' className="d">

                <Footer/>
                </div>
    </div>
  )
}
