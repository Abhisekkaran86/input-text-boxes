import React, { useState } from "react";
import SearchBox from "./SearchBox";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const options = ["React", "Node", "mongo", "Express", "Php", "MySql", "aws"];

  // Handle input change and filter options dynamically
  const handleSearchChange = (value) => {
    setSearch(value);

    if (value.trim() === "") {
      setFilteredOptions([]);
      setShowDropdown(false);
    } else {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowDropdown(true);
    }
  };

  // Handle selecting an option
  const handleSelect = (option) => {
    setSelectedOption(option);
    setSearch(option);
    setShowDropdown(false);
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
        placeholder="Search for a fruit..."
      />
      {selectedOption && (
        <div className="mt-4 text-gray-700">
          Selected: <strong>{selectedOption}</strong>
        </div>
      )}
    </div>
  );
};

export default App;
