import React, { useState } from "react";
import CertificateDetails from "./CertificateDetails";

const EncumbranceCertificate = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [error, setError] = useState("");
  const [certificateData, setCertificateData] = useState(null);

  const validateCertificateNumber = (number) => {
    const certRegex = /^[A-Z]{2}\d{6}$/; // Example format: XX123456
    return certRegex.test(number);
  };

  const handleSubmit = () => {
    if (!certificateNumber) {
      setError("Invalid Certificate Number. Format: XX123456");
      return;
    }

    setError("");
    setCertificateData({
      number: certificateNumber,
      owner: "Abhisek Karan",
      propertyLocation: "Kolkata, West Bengal, India",
      issuedDate: "March 2025",
      legalStatus: "No Legal Dues",
      registeredAuthority: "State Government",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Encumbrance Certificate (EC)
        </h2>
        <input
          type="text"
          placeholder="Enter EC Number"
          value={certificateNumber}
          onChange={(e) => setCertificateNumber(e.target.value)}
          className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
        />
        {error && <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>}
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Check EC Certificate
        </button>
        {certificateData && <CertificateDetails data={certificateData} />}
      </div>
    </div>
  );
};

export default EncumbranceCertificate;
