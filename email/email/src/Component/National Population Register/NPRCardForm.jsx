import React, { useState, useEffect } from "react";

const NPRCardForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nprNumber: "",
    fullName: "",
    dob: "",
    registrationDate: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ Strong Validation Rules
  const validate = () => {
    const newErrors = {};
    const nprNumberRegex = /^[A-Z0-9]{10,15}$/; // Letters & Numbers Only (10-15 characters)
    const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Only Letters, Min 3 Max 50 Characters

    if (!formData.nprNumber) newErrors.nprNumber = "NPR Card Number is required.";
    else if (!nprNumberRegex.test(formData.nprNumber)) newErrors.nprNumber = "Invalid NPR Number. Use 10-15 letters/numbers.";

    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    else if (!nameRegex.test(formData.fullName)) newErrors.fullName = "Name must be 3-50 letters only.";

    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.registrationDate) newErrors.registrationDate = "Registration Date is required.";
    else if (new Date(formData.registrationDate) <= new Date(formData.dob)) {
      newErrors.registrationDate = "Registration Date must be after Date of Birth.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validate();
  }, [formData]); // 🔄 Validate in real-time on change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
      setFormData({ nprNumber: "", fullName: "", dob: "", registrationDate: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      {/* NPR Card Number */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">NPR Card Number:</label>
        <input
          type="text"
          name="nprNumber"
          value={formData.nprNumber}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.nprNumber && <span className="text-red-500 text-sm">{errors.nprNumber}</span>}
      </div>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
      </div>

      {/* Date of Birth */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.dob && <span className="text-red-500 text-sm">{errors.dob}</span>}
      </div>

      {/* Registration Date */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Registration Date:</label>
        <input
          type="date"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.registrationDate && <span className="text-red-500 text-sm">{errors.registrationDate}</span>}
      </div>

      {/* Submit Button (Disabled Until Form is Valid) */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full p-2 rounded-md text-white ${
          isFormValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default NPRCardForm;
