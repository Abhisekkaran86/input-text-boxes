import React, { useState } from "react";
import EmailInput from "./EmailInput ";

export default function EmailValidation() {
  const [email, setEmail] = useState(""); // State for the email input
  const [error, setError] = useState(""); // State for the error message
  const [touched, setTouched] = useState(false); // Track if the input has been touched

  // Validation function
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (!value) {
      return "Email address is required."; // Empty field
    }
    if (!regex.test(value)) {
      return "Invalid email address format."; // Invalid email
    }
    return ""; // No errors
  };

  // Handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError(""); // Clear error while typing
    }
  };

  // Handle blur (when user clicks outside)
  const handleBlur = () => {
    setTouched(true);
    const validationError = validateEmail(email);
    setError(validationError);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4 text-gray-800">
        Email Validation
      </h1>
      <EmailInput
        email={email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched ? error : ""}
        
        containerClass="mb-4"
        labelClass="block text-gray-700 font-medium mb-2"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
      />
      
      {touched && error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
     
      {!error && touched && (
        <p className="text-green-500 text-sm mt-2">Email is valid!</p>
      )}
    </div>
  );
}
