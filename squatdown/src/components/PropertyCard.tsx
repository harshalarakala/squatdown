import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="mb-4 p-4 shadow-lg rounded-lg bg-gray-100 m-8">
      <p className="text-lg font-semibold">{property.address}</p>
      <p className="text-sm text-gray-600">Phone: {property.phone}</p>
      <p className="text-sm text-gray-600">Loan Amount: ${property.loanAmount}</p>
      <p className="text-sm text-gray-600">Interest Rate: {property.interestRate}%</p>
      <p className={`text-lg font-bold ${property.activeBids === 0 ? 'text-green-500' : property.activeBids > 5 ? 'text-red-500' : 'text-yellow-500'}`}>
        {property.activeBids} Active Bids
      </p>
    </div>
  );
};

export default PropertyCard;
