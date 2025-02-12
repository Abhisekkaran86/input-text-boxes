import React, { useState } from "react";
import DrivingLicenseInput from "./DrivingLicenseInput";

export default function DrivingLicenseValidation() {
  const [license, setLicense] = useState(""); // State for the license input
  const [error, setError] = useState(""); // State for the error message
  const [touched, setTouched] = useState(false); // Track if the input has been touched

  // Validation function
  const validateLicense = (value) => {
    const regex = /^[A-Za-z0-9]{6,12}$/; // Alphanumeric, 6-12 characters
    if (!value) {
      return "Driving license number is required.";
    }
    if (!regex.test(value)) {
      return "Driving license number must be 6-12 alphanumeric characters.";
    }
    return ""; // No errors
  };

  // Handle input change
  const handleChange = (e) => {
    setLicense(e.target.value);
    if (error) {
      setError(""); // Clear error while typing
    }
  };

  // Handle blur (when user clicks outside)
  const handleBlur = () => {
    setTouched(true);
    const validationError = validateLicense(license);
    setError(validationError);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4 text-gray-800">
        Driving License Validation
      </h1>
      <DrivingLicenseInput
        value={license}
        handleChange={handleChange}
        onBlur={handleBlur}
        error={touched ? error : ""}
        // Pass Tailwind CSS classes dynamically
        containerClass="mb-4"
        labelClass="block text-gray-700 font-medium mb-2"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
      />
      {/* Error message shown only after blur */}
      {touched && error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
      {/* Success message if valid */}
      {!error && touched && (
        <p className="text-green-500 text-sm mt-2">
          Driving license number is valid!
        </p>
      )}
    </div>
  );
}
