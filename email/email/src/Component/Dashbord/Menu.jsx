import React, { useState, useEffect, useRef } from "react";

const Menu = ({ menus = [], additionalMenus = [] }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const combinedMenus = [...menus, ...additionalMenus];

  const toggleMenu = (index) => {
    setActiveMenu(prevIndex => (prevIndex === index ? null : index));
  };

  const handleOptionClick = (option) => {
    console.log("Selected Option:", option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="w-full flex flex-col items-center p-6 bg-white min-h-screen">
      <div className="flex overflow-x-auto border-b border-gray-300">
        <div className="flex flex-nowrap">
          {combinedMenus.map((menu, index) => (
            <div 
              key={index} 
              className="text-center p-4 bg-gray-200 w-48 relative hover:bg-white transition duration-300 ease-in-out flex flex-col items-center-l  cursor-pointer"
              onClick={() => toggleMenu(index)}
            >
              <div className="font-bold text-gray-900 text-lg w-full">{menu.title}</div>
              <p className="text-sm text-gray-600">{menu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Submenu Section */}
      {activeMenu !== null && (
        <div className="mt-4 w-full max-w-6xl flex flex-wrap justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full text-center">
            {combinedMenus[activeMenu]?.options.map((option, idx) => (
              <button 
                key={idx} 
                className="px-4 py-2 rounded-lg text-white transition duration-300 ease-in-out hover:opacity-80 w-full sm:w-auto"
                style={{ backgroundColor: ["#3B82F6", "#10B981", "#EF4444", "#A855F7"][idx % 4] }}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;