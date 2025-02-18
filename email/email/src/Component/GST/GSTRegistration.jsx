import React, { useState } from "react";
import GSTForm from "./GSTForm";

const GSTRegistration = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        GST Registration Certificate
      </h1>
      <GSTForm onSubmit={handleFormSubmit} />

      {submittedData && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Submitted Details:</h2>
          <p><strong>GST Number:</strong> {submittedData.gstNumber}</p>
          <p><strong>Business Name:</strong> {submittedData.businessName}</p>
          <p><strong>Owner Name:</strong> {submittedData.ownerName}</p>
          <p><strong>Registration Date:</strong> {submittedData.registrationDate}</p>
        </div>
      )}
    </div>
  );
};

export default GSTRegistration;
