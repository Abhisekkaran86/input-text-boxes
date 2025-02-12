import React from "react";

export default function PanInput({
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
      <label htmlFor="pan" className={labelClass}>
        PAN Number
      </label>
      <input
        id="pan"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className={`${className} ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
        placeholder="Enter PAN number"
      />
    </div>
  );
}
