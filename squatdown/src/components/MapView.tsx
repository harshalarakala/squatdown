import React, { useMemo } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { Property } from '../types';

interface MapViewProps {
  properties: Property[];
}

const MapView: React.FC<MapViewProps> = ({ properties }) => {
    const mapCenter = useMemo(() => {
    if (properties.length > 0) {
      return { lat: properties[0].lat, lng: properties[0].lng };
    }
    return { lat: 39.8283, lng: -98.5795 };
  }, [properties]);

  const orangePinIcon = 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCGNSrR8ftIbDwJTuaUD20CQassCeZIHDY"
  });

  console.log('Properties:', properties);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100vh' }}
      center={mapCenter}
      zoom={properties.length > 0 ? 12 : 4}
    >
      {isLoaded && properties.map((property) => {
        console.log('Marker:', property.lat, property.lng);

        return (
          <MarkerF
            key={property.id}
            position={{ lat: property.lat, lng: property.lng }}
            icon={orangePinIcon}
            clickable={true}
          />
        );
      })}
    </GoogleMap>
  );
};

export default MapView;