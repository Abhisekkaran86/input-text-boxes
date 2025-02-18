import React, { useState } from "react";
import PassbookDetails from "./PassbookDetails";

const EPFPassbook = () => {
  const [epfNumber, setEpfNumber] = useState("");
  const [error, setError] = useState("");
  const [passbookData, setPassbookData] = useState(null);

  const validateEPFNumber = (number) => {
    const epfRegex = /^[A-Z]{2}\d{5}\d{7}$/; // Example format XX123451234567
    return epfRegex.test(number);
  };

  const handleSubmit = () => {
    if (!validateEPFNumber(epfNumber)) {
      setError("Invalid EPF number. Format: XX123451234567");
      return;
    }
    setError("");
    setPassbookData({ number: epfNumber, balance: "₹50,000", lastUpdated: "Feb 2025" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">EPF Passbook</h2>
        <input
          type="text"
          placeholder="Enter EPF Number"
          value={epfNumber}
          onChange={(e) => setEpfNumber(e.target.value)}
          className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
        />
        {error && <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>}
        <button 
          onClick={handleSubmit} 
          className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
          Check Passbook
        </button>
        {passbookData && <PassbookDetails data={passbookData} />}
      </div>
    </div>
  );
};

export default EPFPassbook;
