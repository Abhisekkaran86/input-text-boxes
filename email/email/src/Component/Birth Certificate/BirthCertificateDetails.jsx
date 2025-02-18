import React from "react";

const BirthCertificateDetails = ({ data }) => {
  if (!data) {
    return null; // Prevent rendering if data is undefined
  }

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Birth Certificate Details</h3>
      <p><strong>Certificate Number:</strong> {data.certificateNumber}</p>
      <p><strong>Full Name:</strong> {data.fullName}</p>
      <p><strong>Date of Birth:</strong> {data.dob}</p>
      <p><strong>Place of Birth:</strong> {data.placeOfBirth}</p>
      <p><strong>Parent's Names:</strong> {data.parentNames}</p>
      <p><strong>Issued By:</strong> {data.issuedBy}</p>
      <p><strong>Issue Date:</strong> {data.issueDate}</p>
    </div>
  );
};

export default BirthCertificateDetails;
