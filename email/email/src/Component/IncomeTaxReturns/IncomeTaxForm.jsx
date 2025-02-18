import React, { useState } from "react";

 const IncomeTaxForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Income Tax Returns (ITR) Acknowledgment
      </h1>
      <ITRForm onSubmit={handleFormSubmit} />

      {submittedData && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Submitted Details:</h2>
          <p><strong>ITR Acknowledgment Number:</strong> {submittedData.itrNumber}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Financial Year:</strong> {submittedData.financialYear}</p>
          <p><strong>Filing Date:</strong> {submittedData.filingDate}</p>
        </div>
      )}
    </div>
  );
};

export default IncomeTaxForm;
