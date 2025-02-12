import React, { useState } from "react";
import PanInput from "./PanInput";

export default function PanValidation() {
  const [pan, setPan] = useState(""); // PAN state
  const [error, setError] = useState(""); // Error state
  const [touched, setTouched] = useState(false); // Track if the input was touched

  // Validation function
  const validatePan = (value) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format: 5 letters, 4 digits, 1 letter
    if (!value) {
      return "PAN is required.";
    }
    if (!regex.test(value)) {
      return "Invalid PAN format. Example: ABCDE1234F.";
    }
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase(); // Convert input to uppercase
    setPan(value); // Update PAN state

    // Clear error while typing
    if (error) {
      setError("");
    }
  };

  // Handle blur event
  const handleBlur = () => {
    setTouched(true); // Mark as touched
    const validationError = validatePan(pan); // Validate PAN
    setError(validationError); // Update error state
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4 text-gray-800">PAN Validation</h1>
      <PanInput
        value={pan}
        handleChange={handleChange}
        onBlur={handleBlur}
        error={touched ? error : ""} // Show error only after blur
        // Pass CSS classes to the child
        containerClass="mb-4"
        labelClass="block text-gray-700 font-medium mb-2"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
      />
      {/* Error message */}
      {touched && error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {/* Success message */}
      {!error && touched && (
        <p className="text-green-500 text-sm mt-2">PAN is valid!</p>
      )}
    </div>
  );
}
