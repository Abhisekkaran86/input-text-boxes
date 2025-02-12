import React from "react";

const SearchBox = ({
  name,
  value,
  setSearch,
  showDropdown,
  filteredOptions,
  handleSelect,
  placeholder,
}) => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        name={name} // Dynamically set the name attribute
        value={value} // Controlled input
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder || "Search..."}
      />
      {showDropdown && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md max-h-48 overflow-auto z-10">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.id} // Use id as the key
                onClick={() => handleSelect(option.id)} // Pass only the id back to parent
                className="p-3 hover:bg-blue-100 cursor-pointer"
                
                
              >
                {option.value}
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
