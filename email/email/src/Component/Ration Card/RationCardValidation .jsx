import React, { useState } from "react";
import RationCardForm from "./RationCardForm";

const ResonCard = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Ration Card Registration
      </h1>
      <RationCardForm onSubmit={handleFormSubmit} />
      
      {submittedData && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Submitted Details:</h2>
          <p><strong>Card Number:</strong> {submittedData.cardNumber}</p>
          <p><strong>Holder Name:</strong> {submittedData.holderName}</p>
          <p><strong>Issued Date:</strong> {submittedData.issuedDate}</p>
          <p><strong>Expiry Date:</strong> {submittedData.expiryDate}</p>
        </div>
      )}
    </div>
  );
};

export default ResonCard;
