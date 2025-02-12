import React from "react";

function EmailInput({ 
  email, 
  onChange, 
  onBlur, 
  error, 
  containerClass, 
  labelClass, 
  className
}) {
  return (
    <div className={containerClass}>
      <label htmlFor="email" className={labelClass}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
        className={`${className} ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
        placeholder="Enter your email"
      />
    </div>
  );
}

export default EmailInput;
