import React from 'react';
import myImage from '../images/phone.jpg';
import Header from '../components/header/header';
import MainInfo from '../components/main-info/main-info';
import Services from '../components/services/services';
import Footer from '../components/footer/footer';
import MapComponent from '../components/map-content/map-content';
import SliderComponent from '../components/swiper/swiper';
import { Fone1 } from '../images';
import PictureSection from '../components/picture-section/picture-section';
import ImageSection from '../components/image-section/image-section';
export const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#0066ff"
            },
            {
                "saturation": 74
            },
            {
                "lightness": 100
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": 0.6
            },
            {
                "saturation": -85
            },
            {
                "lightness": 61
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#5f94ff"
            },
            {
                "lightness": 26
            },
            {
                "gamma": 5.86
            }
        ]
    }
]
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
      <PictureSection></PictureSection>
      <ImageSection/>
      <div id='location' data-aos='zoom-in'  className='pt-20 h-[400px] '>
        <MapComponent mapStyles={mapStyles}  />
      </div>
      <div id='contacts' className='d'>
        <Footer />
      </div>
    </div>
  );
}
