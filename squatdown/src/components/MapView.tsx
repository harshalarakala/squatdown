import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { Property } from '../types';

interface MapViewProps {
  properties: Property[];
  onVisiblePropertiesChange: (visibleProperties: Property[]) => void;
}

const MapView: React.FC<MapViewProps> = ({ properties, onVisiblePropertiesChange }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapCenter, setMapCenter] = useState(() => {
    if (properties.length > 0) {
      return { lat: properties[0].lat, lng: properties[0].lng };
    }
    return { lat: 39.8283, lng: -98.5795 };
  });

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const orangePinIcon = 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCGNSrR8ftIbDwJTuaUD20CQassCeZIHDY',
    libraries: ['places'],
  });

  const handleBoundsChanged = useCallback(() => {
    if (map) {
      const bounds = map.getBounds();
      if (bounds) {
        const visibleProperties = properties.filter((property) => {
          const position = new google.maps.LatLng(property.lat, property.lng);
          return bounds.contains(position);
        });

        visibleProperties.sort((a, b) => a.activeBids - b.activeBids);
        onVisiblePropertiesChange(visibleProperties);
      }
    }
  }, [map, properties, onVisiblePropertiesChange]);

  const onMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    mapInstance.addListener('bounds_changed', handleBoundsChanged);
  };

  useEffect(() => {
    handleBoundsChanged();
  }, [map, properties, handleBoundsChanged]);

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
            style={{
              width: '300px',
              height: '40px',
              padding: '10px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </Autocomplete>
      </div>

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        center={mapCenter}
        zoom={properties.length > 0 ? 12 : 4}
        onLoad={onMapLoad}
      >
        {properties.map((property) => (
          <MarkerF
            key={property.id}
            position={{ lat: property.lat, lng: property.lng }}
            icon={orangePinIcon}
            clickable={true}
          />
        ))}
      </GoogleMap>
    </>
  );
};

export default MapView;