import React, { useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Property } from '../types';

interface MapViewProps {
  properties: Property[];
}

const MapView: React.FC<MapViewProps> = ({ properties }) => {
  // Memoize map center to avoid unnecessary re-renders
  const mapCenter = useMemo(() => {
    // Center the map on the first property in the list
    if (properties.length > 0) {
      return { lat: properties[0].lat, lng: properties[0].lng };
    }
    // Fallback to the center of the US if no properties
    return { lat: 39.8283, lng: -98.5795 };
  }, [properties]);

  // URL of an orange marker icon
  const orangePinIcon = 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';

  // Log properties to check their values
  console.log('Properties:', properties);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCGNSrR8ftIbDwJTuaUD20CQassCeZIHDY">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        center={mapCenter}
        zoom={properties.length > 0 ? 12 : 4} // Zoom in if properties exist
      >
        {/* Render markers on the map */}
        {properties.map((property) => {
          // Log each marker's lat and lng
          console.log('Marker:', property.lat, property.lng);

          return (
            <Marker
                key={property.id}
                position={{ lat: property.lat, lng: property.lng }}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
