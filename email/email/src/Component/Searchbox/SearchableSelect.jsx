import React, { useState } from "react";
import SearchBox from "./SearchBox";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOptionId, setSelectedOptionId] = useState(null); // Store only ID
  const [showDropdown, setShowDropdown] = useState(false);

  const options = [
    { id: 1, value: "React" },
    { id: 2, value: "Node" },
    { id: 3, value: "Mongo" },
    { id: 4, value: "Express" },
    { id: 5, value: "Php" },
    { id: 6, value: "MySql" },
    { id: 7, value: "AWS" },
  ];

  // Handle input change and filter options dynamically
  const handleSearchChange = (value) => {
    setSearch(value);

    if (value.trim() === "") {
      setFilteredOptions([]);
      setShowDropdown(false);
    } else {
      const filtered = options.filter((option) =>
        option.value.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowDropdown(true);
    }
  };

  // Handle selecting an option
  const handleSelect = (id) => {
    setSelectedOptionId(id); // Store only the selected option's ID
    const selectedOption = options.find((option) => option.id === id);
    setSearch(selectedOption?.value || ""); // Update input value with the corresponding value
    setShowDropdown(false);
    console.log(id)
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4"> Search Box </h1>
      <SearchBox
        name="Search"
        value={search}
        setSearch={handleSearchChange}
        showDropdown={showDropdown}
        filteredOptions={filteredOptions}
        handleSelect={handleSelect}
        placeholder="Search for a technology..."
      />
      {selectedOptionId !== null && (
        <div className="mt-4 text-gray-700">
          Selected:{" "}
          <strong>
            {options.find((option) => option.id === selectedOptionId)?.value}
          </strong>
        </div>
      )}
    </div>
  );
};

export default App;
