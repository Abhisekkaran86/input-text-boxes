import React, { useState, useEffect } from "react";

const Validation = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    itrNumber: "",
    fullName: "",
    financialYear: "",
    filingDate: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ Strong Validation Rules
  const validate = () => {
    const newErrors = {};
    const itrRegex = /^[A-Z0-9]{10,15}$/; // Letters & Numbers Only (10-15 characters)
    const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Only Letters, Min 3 Max 50 Characters
    const yearRegex = /^(19|20)\d{2}-\d{2}$/; // Format: YYYY-YY (e.g., 2022-23)

    if (!formData.itrNumber) newErrors.itrNumber = "ITR Acknowledgment Number is required.";
    else if (!itrRegex.test(formData.itrNumber)) newErrors.itrNumber = "Invalid ITR Number. Use 10-15 letters/numbers.";

    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    else if (!nameRegex.test(formData.fullName)) newErrors.fullName = "Name must be 3-50 letters only.";

    if (!formData.financialYear) newErrors.financialYear = "Financial Year is required.";
    else if (!yearRegex.test(formData.financialYear)) newErrors.financialYear = "Invalid format. Use YYYY-YY (e.g., 2022-23).";

    if (!formData.filingDate) newErrors.filingDate = "Filing Date is required.";

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
      setFormData({ itrNumber: "", fullName: "", financialYear: "", filingDate: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg mx-auto
      transition-transform transform hover:scale-105 duration-300 ease-in-out"
    >
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">ITR Acknowledgment Form</h2>

      {/* ITR Acknowledgment Number */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">ITR Acknowledgment Number:</label>
        <input
          type="text"
          name="itrNumber"
          value={formData.itrNumber}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        {errors.itrNumber && <span className="text-red-500 text-sm">{errors.itrNumber}</span>}
      </div>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
      </div>

      {/* Financial Year */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Financial Year (YYYY-YY):</label>
        <input
          type="text"
          name="financialYear"
          value={formData.financialYear}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          placeholder="e.g., 2022-23"
        />
        {errors.financialYear && <span className="text-red-500 text-sm">{errors.financialYear}</span>}
      </div>

      {/* Filing Date */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Filing Date:</label>
        <input
          type="date"
          name="filingDate"
          value={formData.filingDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        {errors.filingDate && <span className="text-red-500 text-sm">{errors.filingDate}</span>}
      </div>

      {/* Submit Button (Disabled Until Form is Valid) */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-2 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out 
          ${
            isFormValid
              ? "bg-blue-500 hover:bg-blue-700 text-white"
              : "bg-gray-400 text-gray-800 cursor-not-allowed"
          }`}
      >
        Submit
      </button>
    </form>
  );
};

export default Validation;
