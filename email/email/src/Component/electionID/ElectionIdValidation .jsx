import React, { useState } from "react";
import InputField from "./InputField ";

export default function ElectionIdValidation() {
  const [electionId, setElectionId] = useState(""); // Election ID state
  const [error, setError] = useState(""); // Error state
  const [touched, setTouched] = useState(false); // Track if the input is touched

  // Validation function
  const validateElectionId = (value) => {
    const regex = /^[A-Z0-9]{10}$/; // Election ID: 10 alphanumeric characters
    if (!value) {
      return "Election ID is required.";
    }
    if (!regex.test(value)) {
      return "Election ID must be exactly 10 alphanumeric characters.";
    }
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase(); // Convert input to uppercase
    setElectionId(value); // Update state

    // Clear error while typing
    if (error) {
      setError("");
    }
  };

  // Handle blur (when user clicks outside)
  const handleBlur = () => {
    setTouched(true); // Mark as touched
    const validationError = validateElectionId(electionId); // Validate Election ID
    setError(validationError); // Update error state
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4 text-gray-800">
        Election ID Validation
      </h1>
      <InputField
        value={electionId}
        error={touched ? error : ""} // Show error only after blur
        handleChange={handleChange}
        handleBlur={handleBlur}
        // Pass CSS classes as arguments
        containerClass="mb-4"
        labelClass="block text-gray-700 font-medium mb-2"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
      />
      {/* Error message */}
      {touched && error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {/* Success message */}
      {!error && touched && electionId.length === 10 && (
        <p className="text-green-500 text-sm mt-2">
          Election ID is valid!
        </p>
      )}
    </div>
  );
}
