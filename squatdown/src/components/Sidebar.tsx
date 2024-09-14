import React from 'react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

interface SidebarProps {
  properties: Property[];
}

const Sidebar: React.FC<SidebarProps> = ({ properties }) => {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-orange-500 text-center p-4">Available Squats</h1>
      <div className="flex-1 overflow-y-auto">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
