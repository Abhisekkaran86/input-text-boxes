import React, { useState } from "react";
import AadhaarInput from "./AadhaarInput";

export default function AadhaarValidation() {
  const [aadhaar, setAadhaar] = useState(""); // State for the Aadhaar number
  const [error, setError] = useState(""); // State for the error message
  const [touched, setTouched] = useState(false); // Track if the input has been touched

  // Validation function
  const validateAadhaar = (value) => {
    const regex = /^[0-9]{12}$/; // Aadhaar must be exactly 12 digits
    if (!value) {
      return "Aadhaar number is required.";
    }
    if (!regex.test(value)) {
      return "Aadhaar number must be exactly 12 digits.";
    }
    return ""; // No errors
  };

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numeric input
    setAadhaar(value);

    // Clear the error when the user starts typing again
    if (error) {
      setError("");
    }
  };

  // Handle blur (when user clicks outside)
  const handleBlur = () => {
    setTouched(true);
    const validationError = validateAadhaar(aadhaar);
    setError(validationError);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Aadhaar Validation</h1>
      <AadhaarInput
        value={aadhaar}
        handleChange={handleChange}
        onBlur={handleBlur}
        error={touched ? error : ""}
        // Pass Tailwind CSS classes dynamically
        containerClass="mb-4"
        labelClass="block text-gray-700 font-medium mb-2"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
      />
      {/* Error message shown only after blur */}
      {touched && error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {/* Success message if valid */}
      {!error && touched && (
        <p className="text-green-500 text-sm mt-2">Aadhaar number is valid!</p>
      )}
    </div>
  );
}
