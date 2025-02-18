import React, { useState, useEffect } from "react";

const RationCardForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    holderName: "",
    issuedDate: "",
    expiryDate: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ Stronger Validation Rules
  const validate = () => {
    const newErrors = {};
    const cardNumberRegex = /^[A-Z0-9]{8,12}$/; // Letters & Numbers Only (8-12 characters)
    const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Only Letters, Min 3 Max 50 Characters

    if (!formData.cardNumber) newErrors.cardNumber = "Card Number is required.";
    else if (!cardNumberRegex.test(formData.cardNumber)) newErrors.cardNumber = "Invalid Card Number. Use 8-12 letters/numbers.";

    if (!formData.holderName) newErrors.holderName = "Holder Name is required.";
    else if (!nameRegex.test(formData.holderName)) newErrors.holderName = "Name must be 3-50 letters only.";

    if (!formData.issuedDate) newErrors.issuedDate = "Issued Date is required.";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry Date is required.";
    else if (new Date(formData.expiryDate) <= new Date(formData.issuedDate)) {
      newErrors.expiryDate = "Expiry Date must be after Issued Date.";
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
      setFormData({ cardNumber: "", holderName: "", issuedDate: "", expiryDate: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      {/* Card Number */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
      </div>

      {/* Holder Name */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Holder Name:</label>
        <input
          type="text"
          name="holderName"
          value={formData.holderName}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.holderName && <span className="text-red-500 text-sm">{errors.holderName}</span>}
      </div>

      {/* Issued Date */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Issued Date:</label>
        <input
          type="date"
          name="issuedDate"
          value={formData.issuedDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.issuedDate && <span className="text-red-500 text-sm">{errors.issuedDate}</span>}
      </div>

      {/* Expiry Date */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Expiry Date:</label>
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.expiryDate && <span className="text-red-500 text-sm">{errors.expiryDate}</span>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`p-2 rounded-md w-full transition duration-300 ${
          isFormValid ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </form>
  );
};

export default RationCardForm;
