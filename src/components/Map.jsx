import React, { useEffect, useRef, useState } from "react";
import "../../src/App.css";
import mapboxgl from "mapbox-gl"; // Importa mapboxgl
import "mapbox-gl/dist/mapbox-gl.css";
import reload from '../assets/reloadIcon.svg'

mapboxgl.accessToken = 'pk.eyJ1IjoiaG9zcGVkYWplYmV0YW5pYSIsImEiOiJjbG42OXZncXcwOTgyMmlwNXo4OTAyaG54In0.LrEpBd3umk6dBDMka2QGJg';

const Map = () => {
    
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-76.204680); 
  const [lat, setLat] = useState(-13.711405);
  const [zoom, setZoom] = useState(17);

  const resetMap = () => {
    map.current.resetNorth();
    map.current.setPitch(0);
    map.current.flyTo({
      center: [lng, lat],
      zoom: zoom,
    });

  };
  
  useEffect(() => {
    if (map.current) return; 
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v10",
        center: [lng, lat],
        zoom: zoom,
        cooperativeGestures: true,
        doubleClickZoom: false,
    });

  

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
    
  });
  
  
  return (
    <>
        <section className="relative">
          <header className='flex flex-col justify-center items-center'>
              <h1 className='mb-5 font-work uppercase text-sm font-bold desktop:mb-14'>encuéntranos</h1>
          </header>

          <div ref={mapContainer} className="map-container"/>
          <button onClick={resetMap} className="absolute top-[13%] right-3 tablet:top-[8%] tablet:right-3 bg-[#181818] text-white px-2 py-2 rounded-md"><img src={reload} alt="Logo Facebook"/></button>

        </section>
        
    </>
  );
};

export default Map;
