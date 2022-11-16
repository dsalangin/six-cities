import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {City} from '../../types/city';
import {Offer} from '../../types/offer';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer?: Offer;
}

function Map ({city, offers, selectedOffer}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: '/img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });


  useEffect(() =>{
    if(map) {
      offers.forEach((offer) => {
        leaflet.marker([offer.location.latitude, offer.location.longitude],
          {icon:(offer.id === selectedOffer?.id) ? currentCustomIcon : defaultCustomIcon}
        ).addTo(map);
      });
    }
  },[map, offers, selectedOffer]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
