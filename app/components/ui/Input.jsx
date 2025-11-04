import React from 'react';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  className = '',
  onBlur,
  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
      {...rest}
    />
  );
};

export default Input;
