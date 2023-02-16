import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  currentOffer?: Offer;
}

function Map({ city, offers, currentOffer }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

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

  useEffect(() => {
    if (map) {
      const { latitude, longitude, zoom } = city.location;
      map.flyTo([latitude, longitude], zoom);


      offers.forEach((offer) => {
        leaflet.marker([offer.location.latitude, offer.location.longitude],
          { icon: (offer.id === currentOffer?.id) ? currentCustomIcon : defaultCustomIcon, title: String(offer.id) }
        ).addTo(map);
      });
    }

    return () => {
      map?.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          layer.remove();
        }
      });
    };

  }, [map, offers, currentOffer]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
