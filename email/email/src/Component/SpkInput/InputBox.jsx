import React from "react";

const SPKBaseInputBox = ({  value, type = "text", name, onChange, onBlur,   error,  className = "",  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value} 
      onChange={onChange} 
      onBlur={onBlur}
      className={`py-2 my-2  ${error? 'bg-red-100 bg-opacity-5 ':'' } ${className}`}
      {...rest}
    />
  );
};

export default SPKBaseInputBox;
