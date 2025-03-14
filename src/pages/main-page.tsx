
import Header from '../components/header/header';
import MainInfo from '../components/main-info/main-info';
import Services from '../components/services/services';
import Footer from '../components/footer/footer';
import MapComponent from '../components/map-content/map-content';
import SliderComponent from '../components/swiper/swiper';
import PictureSection from '../components/picture-section/picture-section';
import ImageSection from '../components/image-section/image-section';
import { mapStyles } from './constants';
import RowUp from '../components/row-up/row-up';

export default function MainPage() {
  return (
    <div className='overflow-x-hidden'>
      {/* <img className='image-fone' src={myImage}></img> */}
      <Header />
      {/* <div className="image-fone">
            <div className="image-opacity">
                <div className="flex flex-col h-[100%] justify-center">
                    <div className="text-white text-[38px] lg:text-[68px]">
                        <p>Чоловічі та жіночі стрижки</p>
                    </div>
                    <div className="text-white">
                        <p className='text-[16px] lg:text-[22px]'>смт. Козова, вулиця Михайла Грушевського, 4</p>
                        <a  className='text-[16px] lg:text-[30px] font-bold' href="tel:+380962548744">+38(096)25-48-744</a>
                    </div>
                </div>

            </div>
        </div> */}
      <div className='image-opacity'>
        <SliderComponent />
      </div>
      <div data-aos='fade-up' className='d'>
        <MainInfo />
      </div>
      <div id='services' data-aos='fade-up' className='pt-20'>
        <Services />
      </div>
      {/* <div id='photos' className="d">

      <PictureSection></PictureSection>
      <ImageSection/>
      </div> */}
      <div id='location' data-aos='zoom-in'  className='pt-20 -mt-20 h-[500px] '>
        <MapComponent mapStyles={mapStyles}  />
      </div>
      <div id='contacts' className='d'>
        <Footer />
      </div>
      <RowUp/>
    </div>
  );
}
