import React from "react";
import { Package, MessageSquare, ShoppingCart } from "lucide-react";

const sidebarButtons = [
  { icon: Package, label: "Prebuilds", bgColor: "hover:bg-black", textColor: "hover:text-white" },
  { icon: MessageSquare, label: "Get Help", bgColor: "hover:bg-blue-600", textColor: "hover:text-white" },
  { icon: ShoppingCart, label: "Buy Now", bgColor: "hover:bg-green-500", textColor: "hover:text-white" },

];

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 p-2 shadow-lg w-20 h-full border-r border-gray-200 fixed right-0 top-0">
      {sidebarButtons.map((button, index) => (
        <button
          key={index}
          className={`flex flex-col items-center bg-white text-gray-700 rounded-md p-2 mb-3 w-16 transition text-[10px] font-bold ${button.bgColor} ${button.textColor}`}
        >
          <button.icon size={16} />
          <span>{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
