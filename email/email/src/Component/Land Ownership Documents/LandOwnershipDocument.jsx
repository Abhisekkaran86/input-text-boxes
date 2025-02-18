import React, { useState } from "react";
import DocumentDetails from "./DocumentDetails";

const LandOwnershipDocument = () => {
  const [documentNumber, setDocumentNumber] = useState("");
  const [error, setError] = useState("");
  const [documentData, setDocumentData] = useState(null);

  const validateDocumentNumber = (number) => {
    const docRegex = /^[A-Z]{2}\d{6}$/; // Example format: XX123456
    return docRegex.test(number);
  };

  const handleSubmit = () => {
    if (!documentNumber) {
      setError("Document Number is required.");
      return;
    }

    if (!validateDocumentNumber(documentNumber)) {
      setError("Invalid Document Number. Format: XX123456");
      return;
    }

    setError("");
    setDocumentData({
      number: documentNumber,
      owner: "Abhisek karan",
      propertyLocation: "Bangalore, Karnataka, India",
      issuedDate: "April 2025",
      documentType: "Patta",
      registeredAuthority: "State Revenue Department",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Land Ownership Document Verification
        </h2>

        <input
          type="text"
          placeholder="Enter Document Number"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
        />
        {error && <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>}
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Check Document
        </button>
        {documentData && <DocumentDetails data={documentData} />}
      </div>
    </div>
  );
};

export default LandOwnershipDocument;
