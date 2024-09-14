// src/components/Sidebar.tsx
import React from 'react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

interface SidebarProps {
  properties: Property[];
}

const Sidebar: React.FC<SidebarProps> = ({ properties }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-orange-500">Available Squats</h1>
      <div>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="mt-4 text-center text-gray-600">More Cards Below...</div>
    </div>
  );
};

export default Sidebar;
