// import React, { useState } from 'react';

// // Sample menu structure
// const menulist = {
//     admin: {
//         menuList: {
//             subMenu: {},
//             subMenu2: {},
//             back: {},
//             home: {}
//         }
//     },
//     patient: {
//         menuList: {
//             back: {},
//             home: {},
//             subMenuMEnuList1: {
//                 menuList: {
//                     menu15: {},
//                     back: {},
//                     home: {}
//                 }
//             },
//             subMenuMEnuList2: {
//                 menuList: {
//                     menu16: {},
//                     back: {},
//                     home: {}
//                 }
//             }
//         }
//     }
// };

// // Recursive component to render the menu
// const MenuItem = ({ item, label }) => {
//     const [open, setOpen] = useState(false);

//     const hasSubMenu = item.menuList && Object.keys(item.menuList).length > 0;

//     return (
//         <div>
//             <button
//                 onClick={() => setOpen(!open)}
//                 className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${hasSubMenu ? 'font-bold' : ''}`}
//             >
//                 {label}
//             </button>
//             {open && hasSubMenu && (
//                 <div className="ml-4">
//                     {Object.keys(item.menuList).map((subKey) => (
//                         <MenuItem key={subKey} item={item.menuList[subKey]} label={subKey} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// // Main Dropdown Menu Component
// const DropdownMenu = ({ menu }) => {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="relative inline-block text-left">
//             <div>
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
//                 >
//                     Menu
//                 </button>
//             </div>

//             {open && (
//                 <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                     <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                         {Object.keys(menu).map((key) => (
//                             <MenuItem key={key} item={menu[key]} label={key} />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// // Main App Component
// const App = () => {
//     return (
//         <div className="flex justify-center items-center h-screen">
//             <DropdownMenu menu={menulist.admin.menuList} />
//             <DropdownMenu menu={menulist.patient.menuList} />
//         </div>
//     );
// };

// export default App;