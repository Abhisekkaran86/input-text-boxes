import React from "react";

const PassbookDetails = ({ data }) => {
  return (
    <div className="mt-4 p-2 bg-gray-100 rounded-lg">
      <p><strong>EPF Number:</strong> {data.number}</p>
      <p><strong>Balance:</strong> {data.balance}</p>
      <p><strong>Last Updated:</strong> {data.lastUpdated}</p>
    </div>
  );
};

export default PassbookDetails;
