import React from "react";

const CertificateDetails = ({ data }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Certificate Details</h3>
      <p><strong>Certificate Number:</strong> {data.number}</p>
      <p><strong>Owner Name:</strong> {data.owner}</p>
      <p><strong>Property Location:</strong> {data.propertyLocation}</p>
      <p><strong>Issued Date:</strong> {data.issuedDate}</p>
      <p><strong>Registered Authority:</strong> {data.registeredAuthority}</p>
    </div>
  );
};

export default CertificateDetails;
