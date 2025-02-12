import React from "react";

export default function DrivingLicenseInput({
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
      <label htmlFor="drivingLicense" className={labelClass}>
        Driving License Number
      </label>
      <input
        id="drivingLicense"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className={`${className} ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
        placeholder="Enter driving license number"
      />
    </div>
  );
}
