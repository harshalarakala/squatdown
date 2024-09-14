import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { PreForeclosureProperty } from '../types/PreForeclosureProperty';

interface MapViewProps {
  properties: PreForeclosureProperty[];
}

const MapView: React.FC<MapViewProps> = ({ properties }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 });
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCGNSrR8ftIbDwJTuaUD20CQassCeZIHDY', // Replace with your actual Google Maps API key
    libraries: ['places'],
  });

  useEffect(() => {
    if (properties.length > 0) {
      setMapCenter({ lat: properties[0].location.latitude, lng: properties[0].location.longitude });
    }
  }, [properties]);

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        setMapCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="search-bar-container" style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
        <Autocomplete
        
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Search for a location"
            style={{ width: '300px', height: '40px', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </Autocomplete>
      </div>

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        center={mapCenter}
        zoom={properties.length > 0 ? 12 : 4}
      >
        {properties.map((property) => (
          <MarkerF
            key={property.propertyIdentification.ATTOMID}
            position={{ lat: property.location.latitude, lng: property.location.longitude }}
            icon='http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
            clickable={true}
          />
        ))}
      </GoogleMap>
    </>
  );
};

export default MapView;
