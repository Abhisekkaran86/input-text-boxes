import React, { useState } from "react";
import InputField from "./PassportInput";

export default function PassportValidation() {
  const [passport, setPassport] = useState(""); // State for the input value
  const [error, setError] = useState(""); // State for the error message
  const [touched, setTouched] = useState(false); // Track if the input has been touched

  // Validation function
  const validatePassport = (value) => {
    const regex = /^[A-Za-z0-9]{8}$/; // Only alphanumeric characters, exactly 8
    if (!value) {
      return "Passport number is required."; // Empty field
    }
    if (!regex.test(value)) {
      return "Passport number must contain exactly 8 alphanumeric characters."; // Invalid format
    }
    return ""; // No errors
  };

  // Handle input change (from child)
  const handleInputChange = (value) => {
    let sanitizedValue = value.replace(/[^A-Za-z0-9]/g, ""); // Remove non-alphanumeric characters

    // Limit the input to 8 characters
    if (sanitizedValue.length > 8) {
      sanitizedValue = sanitizedValue.slice(0, 8);
    }

    setPassport(sanitizedValue); // Update state

    // Clear the error if the user starts typing again
    if (error) {
      setError("");
    }
  };

  // Handle blur (from child)
  const handleInputBlur = () => {
    setTouched(true); // Mark the input as touched
    const validationError = validatePassport(passport); // Validate input
    setError(validationError); // Update error state
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4 text-gray-800">
        Passport Number Validation
      </h1>
      <InputField
        passport={passport}
        error={touched ? error : ""} // Only display error if touched
        onInputChange={handleInputChange} // Pass change handler to child
        onInputBlur={handleInputBlur} // Pass blur handler to child
        // Pass Tailwind CSS classes to child
        containerClass="mb-4"
        labelClass="block text-gray-700 font-medium mb-2"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
      />
      {/* Error message shown only after blur */}
      {touched && error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
      {/* Success message if valid */}
      {!error && touched && passport.length === 8 && (
        <p className="text-green-500 text-sm mt-2">
          Passport number is valid!
        </p>
      )}
    </div>
  );
}
