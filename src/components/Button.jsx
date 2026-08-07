import React from 'react';

/**
 * Button Component
 * A reusable button component with different variants and sizes.
 * 
 * Props:
 * - children: Button text or content
 * - variant: 'primary' or 'secondary' (default: 'primary')
 * - size: 'sm', 'md', or 'lg' (default: 'md')
 * - fullWidth: Boolean to make button 100% width (default: false)
 * - onClick: Click handler function
 * - disabled: Boolean to disable button (default: false)
 * - type: 'button', 'submit', or 'reset' (default: 'button')
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  // Base styles
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  // Width styles
  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default Button;
