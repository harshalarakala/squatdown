// src/App.tsx
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import { Property } from './types';

const App = () => {
  const mockProperties: Property[] = [
    {
      id: 1,
      address: '1600 Pennsylvania Ave NW, Washington, DC 20500',
      phone: '202-456-1111',
      loanAmount: 500000,
      interestRate: 3.5,
      activeBids: 4,
      lat: 38.8977,
      lng: -77.0365,
    },
    {
      id: 2,
      address: '1 Infinite Loop, Cupertino, CA 95014',
      phone: '408-996-1010',
      loanAmount: 750000,
      interestRate: 2.8,
      activeBids: 7,
      lat: 37.3318,
      lng: -122.0312,
    },
    {
      id: 3,
      address: '350 Fifth Avenue, New York, NY 10118',
      phone: '212-736-3100',
      loanAmount: 600000,
      interestRate: 4.0,
      activeBids: 2,
      lat: 40.748817,
      lng: -73.985428,
    },
  ];

  const [properties, setProperties] = useState<Property[]>(mockProperties);

/**
 *useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        if (response.ok) {
          const data: Property[] = await response.json();
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

 */

  return (
    <div className="min-h-screen flex">
      {/* Sidebar for Available Squats */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 overflow-y-auto">
        <Sidebar properties={properties} />
      </div>

      {/* Map View */}
      <div className="flex-1">
        <MapView properties={properties} />
      </div>
    </div>
  );
}

export default App;
