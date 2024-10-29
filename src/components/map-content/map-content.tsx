import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'), 
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'), 
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'), 
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
});

const MapComponent = () => {
    const position: [number, number] = [49.434012, 25.149354]; 

    return (
        <div className="p-10">
            <div className="d">
                <p className='text-[30px] mb-4 font-semibold'>Локація</p>
            </div>
        <div className="max-w-[1000px] mx-auto flex justify-center">

        <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            <Marker position={position} icon={customIcon}>
                <Popup>Перукаря <br /> Easily customizable.</Popup>
            </Marker>
        </MapContainer>
                </div>
                </div>
    );
};

export default MapComponent;
