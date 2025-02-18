import React, { useState } from "react";
import BirthCertificateDetails from "./BirthCertificateDetails";

const BirthCertificateForm = () => {
  const [formData, setFormData] = useState({
    certificateNumber: "",
    fullName: "",
    dob: "",
    placeOfBirth: "",
    parentNames: "",
  });

  const [error, setError] = useState("");
  const [certificateData, setCertificateData] = useState(null);

  const validateCertificateNumber = (number) => {
    const certRegex = /^[A-Z]{2}\d{6}$/; // Example format: XX123456
    return certRegex.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateCertificateNumber(formData.certificateNumber)) {
      setError("Invalid Certificate Number. Format: XX123456");
      return;
    }

    if (!formData.fullName || !formData.dob || !formData.placeOfBirth || !formData.parentNames) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setCertificateData({
      ...formData,
      issuedBy: "Municipal Corporation / Panchayat",
      issueDate: "March 2025",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-lg p-6 shadow-lg bg-white rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Birth Certificate Verification</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Certificate Number"
            value={formData.certificateNumber}
            onChange={(e) => setFormData({ ...formData, certificateNumber: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            placeholder="Place of Birth"
            value={formData.placeOfBirth}
            onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            placeholder="Parent's Names"
            value={formData.parentNames}
            onChange={(e) => setFormData({ ...formData, parentNames: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {error && <div className="text-red-600 text-sm font-medium">{error}</div>}

          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Verify Certificate
          </button>
        </form>

        {certificateData && <BirthCertificateDetails data={certificateData} />}
      </div>
    </div>
  );
};

export default BirthCertificateForm;
