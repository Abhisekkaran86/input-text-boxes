import React from "react";

function InputField({
  passport,
  error,
  onInputChange,
  onInputBlur,
  containerClass,
  labelClass,
  className,
}) {
  const handleChange = (e) => {
    const value = e.target.value;
    onInputChange(value); // Notify parent about input changes
  };

  const handleBlur = () => {
    onInputBlur(); // Notify parent when input is blurred
  };

  return (
    <div className={containerClass}>
      <label htmlFor="passport" className={labelClass}>
        Passport Number
      </label>
      <input
        id="passport"
        type="text"
        value={passport}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${className} ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
        placeholder="Enter your passport number"
      />
    </div>
  );
}

export default InputField;
