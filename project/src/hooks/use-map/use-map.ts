import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useState, useEffect, useRef, MutableRefObject} from 'react';
import {City} from '../../types/city';

//useState добавит состояние для нашего пользовательского хука
//useEffect — возможность применять побочные эффекты
//useRef поможет защититься от повторной инициализации карты.

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  city: City;
}

function useMap ({mapRef, city}: UseMapProps) {

  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderRef = useRef(false);

  useEffect(() => {
    if(mapRef.current && !isRenderRef.current) {
      const instance = leaflet.map(mapRef.current).setView([city.location.latitude, city.location.longitude], city.location.zoom);

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance);

      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
