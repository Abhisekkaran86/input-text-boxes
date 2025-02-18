import React, { useState } from "react";
import NPRCardForm from "./NPRCardForm";

const Parrent = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        National Population Register (NPR) Card Registration
      </h1>
      <NPRCardForm onSubmit={handleFormSubmit} />

      {submittedData && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Submitted Details:</h2>
          <p><strong>NPR Card Number:</strong> {submittedData.nprNumber}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
          <p><strong>Registration Date:</strong> {submittedData.registrationDate}</p>
        </div>
      )}
    </div>
  );
};

export default Parrent;
