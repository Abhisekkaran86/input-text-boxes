import React, { useState, useEffect } from "react";

const GSTForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    gstNumber: "",
    businessName: "",
    ownerName: "",
    registrationDate: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ Advanced Validation Rules
  const validate = () => {
    const newErrors = {};
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;

    if (!formData.gstNumber) newErrors.gstNumber = "GST Number is required.";
    else if (!gstRegex.test(formData.gstNumber)) newErrors.gstNumber = "Invalid GSTIN format.";

    if (!formData.businessName) newErrors.businessName = "Business Name is required.";
    else if (!nameRegex.test(formData.businessName)) newErrors.businessName = "Business name must be 3-50 characters.";

    if (!formData.ownerName) newErrors.ownerName = "Owner Name is required.";
    else if (!nameRegex.test(formData.ownerName)) newErrors.ownerName = "Owner name must be 3-50 characters.";

    if (!formData.registrationDate) newErrors.registrationDate = "Registration Date is required.";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
      setFormData({ gstNumber: "", businessName: "", ownerName: "", registrationDate: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto transition-transform transform hover:scale-105 duration-300 ease-in-out"
    >
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">GST Registration Form</h2>

      {/* GST Number */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">GST Number:</label>
        <input
          type="text"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., 22ABCDE1234F1Z5"
        />
        {errors.gstNumber && <span className="text-red-500 text-sm">{errors.gstNumber}</span>}
      </div>

      {/* Business Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Business Name:</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Business Name"
        />
        {errors.businessName && <span className="text-red-500 text-sm">{errors.businessName}</span>}
      </div>

      {/* Owner Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Owner Name:</label>
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Owner's Full Name"
        />
        {errors.ownerName && <span className="text-red-500 text-sm">{errors.ownerName}</span>}
      </div>

      {/* Registration Date */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Registration Date:</label>
        <input
          type="date"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.registrationDate && <span className="text-red-500 text-sm">{errors.registrationDate}</span>}
      </div>

      {/* Submit Button */}
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

export default GSTForm;
