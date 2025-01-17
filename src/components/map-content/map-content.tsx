
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100%",
    height: "100%",
};

const coordinates = {
    lat: 49.434078,
    lng: 25.149087,
};
// // eslint-disable-next-line no-explicit-any
const MapComponent = ({ mapStyles = [] }: { mapStyles: unknown }) => {
    const googleMapsApiKey = 'AIzaSyC1Uic65jAQXOA40usOKLT_codIlDUU9VU';
    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={coordinates}
                zoom={15}
                options={{
                    styles: mapStyles as null,
                    disableDefaultUI: true,
                }}
            >
                <Marker
                    position={coordinates}
                    title="26 Broadway, New York, NY 10004"
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;



// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const customIcon = new L.Icon({
//     iconUrl: require('leaflet/dist/images/marker-icon.png'), 
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'), 
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'), 
//     iconSize: [25, 41], 
//     iconAnchor: [12, 41], 
//     popupAnchor: [1, -34], 
// });

// const MapComponent = () => {
//     const position: [number, number] = [49.434012, 25.149354];

//     return (
//         <div className="p-10">
//             <div className="d">
//                 <p className="text-[30px] mb-4 font-semibold">Локація</p>
//             </div>
//             <div className="max-w-[1000px] mx-auto flex justify-center">
//                 <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
//                     <TileLayer
//                         url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
//                     />
//                     <Marker position={position} icon={customIcon}>
//                         <Popup>Перукаря <br /> Easily customizable.</Popup>
//                     </Marker>
//                 </MapContainer>
//             </div>
//             <a
//                 target="blank"
//                 href="https://www.google.com.ua/maps/place/49.434012,25.149354"
//                 className="text-blue-500 hover:underline"
//             >
//                 Відкрити в Google Maps
//             </a>
//         </div>
//     );
// };

// export default MapComponent;
