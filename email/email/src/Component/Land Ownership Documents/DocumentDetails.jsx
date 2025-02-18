import React from "react";

const DocumentDetails = ({ data }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Land Ownership Document Details</h3>
      <p><strong>Document Number:</strong> {data.number}</p>
      <p><strong>Owner Name:</strong> {data.owner}</p>
      <p><strong>Property Location:</strong> {data.propertyLocation}</p>
      <p><strong>Issued Date:</strong> {data.issuedDate}</p>
      <p><strong>Document Type:</strong> {data.documentType}</p>
      <p><strong>Registered Authority:</strong> {data.registeredAuthority}</p>
    </div>
  );
};

export default DocumentDetails;
