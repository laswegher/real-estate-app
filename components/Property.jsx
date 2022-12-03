import React from 'react';
import PropertyCard from './PropertyCard';

const Property = ({ data }) => {
  if (!data) return <p>data is not existe</p>;

  return (
    <div className="max-w-6xl mx-auto grid place-items-center gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mb-8 mt-4">
      {data.map((property) => (
        <PropertyCard
          key={property.id}
          {...property}
        />
      ))}
    </div>
  );
};

export default Property;
