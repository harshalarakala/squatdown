import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import { Property } from './types';
import { PreForeclosureProperty } from './types/PreForeclosureProperty';

const App = () => {
  const [properties, setProperties] = useState<PreForeclosureProperty[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.yourservice.com/preforeclosures'); // Replace with the actual API endpoint
        if (response.ok) {
          const data: PreForeclosureProperty[] = await response.json();
          
          // Log the fetched data to see if lat and lng are correct
          console.log('Fetched properties:', data);
          
          setProperties(data);
        } else {
          console.error('Failed to fetch data from the backend');
        }
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };
   
    fetchData();
  }, []);
  

  // Convert PreForeclosureProperty to Property for the Sidebar
const convertedProperties: Property[] = properties.map((property) => ({
  id: property.propertyIdentification.ATTOMID,
  address: `${property.location || 'Unknown Address'}`,
  phone: 'N/A', // Set default phone if not available
  loanAmount: 0, // Set a default loan amount if not available
  interestRate: 0, // Set a default interest rate if not available
  activeBids: 0, // Set default active bids if not available
  lat: property.location.latitude,
  lng: property.location.longitude,

}));


  return (
    <div className="min-h-screen flex">
      {/* Sidebar for Available Squats */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 overflow-y-auto">
        <Sidebar properties={convertedProperties} /> {/* Pass convertedProperties */}
      </div>

      {/* Map View */}
      <div className="flex-1">
        <MapView properties={properties} />
      </div>
    </div>
  );
};

export default App;
