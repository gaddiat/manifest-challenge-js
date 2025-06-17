import React from 'react';
import PropTypes from 'prop-types';

const variants = {
  primary: {
    active: 'bg-[#3B968B] text-white rounded-lg',
    disabled: 'bg-gradient-to-b from-[#FFF6EF] to-[#FFF6EF] border border-[rgba(46,45,41,0.1)] text-gray-400 rounded-lg',
    onClick: 'bg-[#3B968B] text-white opacity-90 rounded-lg',
  },
  secondary: {
    active: 'border-2 border-[#3B968B] text-[#3B968B] rounded-md',
    disabled: 'border-2 border-[rgba(46,45,41,0.1)] text-gray-400 rounded-md',
    onClick: 'border-2 border-[#3B968B] text-[#3B968B] opacity-90 rounded-md',
  },
  hover: {
    active: 'bg-gradient-to-b from-[rgba(46,45,41,0)] to-[rgba(46,45,41,0.05)] rounded-none',
    disabled: 'bg-gradient-to-b from-[rgba(46,45,41,0)] to-[rgba(46,45,41,0.05)] rounded-none',
    onClick: 'bg-gradient-to-b from-[rgba(46,45,41,0)] to-[rgba(46,45,41,0.05)] opacity-90 rounded-none',
  },
};

const sizeStyles = {
  mobile: {
    default: 'w-[329px] h-10 px-[129px] py-2 gap-2',
    hover: 'w-[375px] h-[70px] px-0 py-0',
  },
  desktop: {
    default: 'w-[600px] h-[42px] px-4 py-2 gap-2',
    hover: 'w-[637px] h-[70px] px-0 py-0',
  },
};

const Button = ({ variant = 'primary', state = 'active', size = 'desktop', children, onClick, className = '' }) => {
  const isHoverVariant = variant === 'hover';
  const baseStyles = isHoverVariant ? sizeStyles[size].hover : sizeStyles[size].default;
  const variantStyles = variants[variant]?.[state] || variants.primary.active;

  // For hover variant, wrap the button in a container with hover background
  if (isHoverVariant) {
    return (
      <div className={`flex justify-center items-center ${variantStyles} ${baseStyles} ${className}`}>
        <button
          onClick={onClick}
          disabled={state === 'disabled'}
          className={`w-[329px] h-10 px-[129px] py-2 gap-2 ${variants.primary[state]} ${
            size === 'desktop' ? 'w-[600px] h-[42px]' : ''
          } ${state === 'onClick' ? 'border-2 border-[#3B968B]' : ''}`}
        >
          {children}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={state === 'disabled'}
      className={`flex justify-center items-center ${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'hover']),
  state: PropTypes.oneOf(['active', 'disabled', 'onClick']),
  size: PropTypes.oneOf(['mobile', 'desktop']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;