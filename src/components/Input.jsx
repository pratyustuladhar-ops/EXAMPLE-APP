import React from 'react';

/**
 * Input Component
 * A reusable input field component with labels and error handling.
 * 
 * Props:
 * - label: Label text for the input
 * - type: Input type ('text', 'email', 'password', etc.) (default: 'text')
 * - placeholder: Placeholder text
 * - value: Current value
 * - onChange: Change handler function
 * - error: Error message (if any)
 * - required: Boolean to mark field as required (default: false)
 */
const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  name,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2.5 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
