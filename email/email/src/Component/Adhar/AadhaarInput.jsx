import React from "react";

export default function AadhaarInput({
  value,
  handleChange,
  onBlur,
  error,
  containerClass,
  labelClass,
  className,
}) {
  return (
    <div className={containerClass}>
      <label htmlFor="aadhaar" className={labelClass}>
        Aadhaar Number
      </label>
      <input
        id="aadhaar"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className={`${className} ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
        placeholder="Enter Aadhaar number"
      />
    </div>
  );
}
