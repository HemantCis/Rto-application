import React from 'react';

const Select = ({
  id,
  value,
  onChange,
  options = [],
  defaultValue = '',
  className = '',
  ...rest
}) => {
 

  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
      {...rest}
    >
      {/* {defaultValue && (
        <option value="" selected>{defaultValue}</option>
      )} */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
