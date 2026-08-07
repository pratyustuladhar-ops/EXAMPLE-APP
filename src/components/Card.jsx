import React from 'react';

/**
 * Card Component
 * A reusable card component for displaying content in a container.
 * 
 * Props:
 * - children: Card content
 * - title: Optional card title
 * - className: Additional CSS classes
 */
const Card = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-shadow duration-200 hover:shadow-lg ${className}`}>
      {title && <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
