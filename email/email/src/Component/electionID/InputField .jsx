import React from "react";

function InputField({ value, error, handleChange, handleBlur, containerClass, labelClass, className }) {
  return (
    <div className={containerClass}>
      <label htmlFor="electionId" className={labelClass}>
        Election ID
      </label>
      <input
        id="electionId"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${className} ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
        placeholder="Enter your Election ID"
      />
    </div>
  );
}

export default InputField;
