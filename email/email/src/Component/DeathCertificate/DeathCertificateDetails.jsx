import React from "react";

const CertificateDetails = ({ data }) => {
  return (
    <div className="mt-6 p-4 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800">Certificate Details</h3>
      <p className="text-gray-700"><strong>Certificate Number:</strong> {data.certificateNumber}</p>
      <p className="text-gray-700"><strong>Full Name:</strong> {data.fullName}</p>
      <p className="text-gray-700"><strong>Date of Death:</strong> {data.dateOfDeath}</p>
      <p className="text-gray-700"><strong>Place of Death:</strong> {data.placeOfDeath}</p>
      <p className="text-gray-700"><strong>Parent's Names:</strong> {data.parentNames}</p>
      <p className="text-gray-700"><strong>Issued By:</strong> {data.issuedBy}</p>
      <p className="text-gray-700"><strong>Issue Date:</strong> {data.issueDate}</p>
    </div>
  );
};

export default CertificateDetails;
