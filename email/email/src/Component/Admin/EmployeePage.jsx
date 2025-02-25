import React, { useState } from 'react';

const menuList = {
  Administration: {
    name: 'Administration',
    displayName: 'Administration',
    access: true,
    path: '/dashboard',
    menu: {
      'Roles & Permissions': {
        name: 'Roles & Permissions',
        displayName: 'All Roles & Permissions',
        access: true,
        _id: '6782084da840f3a7bf1a2f85',
        menu: {
          RP1: {
            name: 'RP1',
            displayName: 'All Roles & Permissions',
            access: true,
            _id: '6782084da840f3a7bf1a2f85'
          },
          RP2: {
            name: 'RP2',
            displayName: 'All Employee',
            access: true,
            _id: '6782084da840f3a7bf1a2f86'
          },
          back: { action: 'back' },
          home: { action: 'home' }
        }
      },
      Employee: {
        name: 'Employee',
        displayName: 'All Employee',
        access: true,
        _id: '6782084da840f3a7bf1a2f86',
        menu: {
          EMP1: {
            name: 'Employee 1',
            displayName: 'All Roles & Permissions',
            access: true,
            _id: '6782084da840f3a7bf1a2f85'
          },
          EMP2: {
            name: 'Employee 2',
            displayName: 'All Employee',
            access: true,
            _id: '6782084da840f3a7bf1a2f86'
          },
          back: { action: 'back' },
          home: { action: 'home' }
        }
      }
    }
  },
  Patients: {
    name: 'Patients',
    displayName: 'Patients',
    access: true,
    path: '/patients',
    menu: {
      Access: {
        name: 'Access',
        displayName: 'All Patient',
        access: true,
        _id: '6782084da840f3a7bf1a2f8d',
        menu: {
          'Create Patient': {
            name: 'Create Patient',
            displayName: 'All Patient',
            access: true,
            _id: '6782084da840f3a7bf1a2f8d'
          },
          'Delete Patient': {
            name: 'Delete Patient',
            displayName: 'All Appointment',
            access: true,
            _id: '6782084da840f3a7bf1a2f8e'
          },
          back: { action: 'back' },
          home: { action: 'home' }
        }
      },
      Rules: {
        name: 'Appointment',
        displayName: 'All Appointment',
        access: true,
        _id: '6782084da840f3a7bf1a2f8e',
        menu: {
          Patient: {
            name: 'Patient',
            displayName: 'All Patient',
            access: true,
            _id: '6782084da840f3a7bf1a2f8d'
          },
          Appointment: {
            name: 'Appointment',
            displayName: 'All Appointment',
            access: true,
            _id: '6782084da840f3a7bf1a2f8e'
          },
          back: { action: 'back' },
          home: { action: 'home' }
        }
      }
    }
  }
};

const buildMenu = (menu) => {
  return Object.keys(menu).map((key) => ({
    title: menu[key].displayName,
    subMenus: menu[key].menu ? buildMenu(menu[key].menu) : [],
    action: menu[key].action || null
  }));
};

const AdminDashboard = () => {
  const homeMenu = [
    { title: menuList.Administration.displayName, subMenus: buildMenu(menuList.Administration.menu) },
    { title: menuList.Patients.displayName, subMenus: buildMenu(menuList.Patients.menu) }
  ];

  const [currentMenu, setCurrentMenu] = useState(homeMenu);
  const [menuHistory, setMenuHistory] = useState([homeMenu]);
  const [expandedMenus, setExpandedMenus] = useState({});

  const handleMenuClick = (menu) => {
    if (menu.action === 'back') {
      const newHistory = [...menuHistory];
      newHistory.pop();
      const previousMenu = newHistory[newHistory.length - 1] || homeMenu;
      setMenuHistory(newHistory);
      setCurrentMenu(previousMenu);
      setExpandedMenus({});
    } else if (menu.action === 'home') {
      setMenuHistory([homeMenu]);
      setCurrentMenu(homeMenu);
      setExpandedMenus({});
    } else {
      setMenuHistory((prev) => [...prev, menu.subMenus || []]);
      setCurrentMenu(menu.subMenus || []);
      setExpandedMenus((prev) => ({ ...prev, [menu.title]: true }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        {currentMenu.map((menu, index) => (
          <div key={index} className="mb-2">
            <button 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
              onClick={() => handleMenuClick(menu)}
            >
              {menu.title}
            </button>
            {expandedMenus[menu.title] && menu.subMenus.length > 0 && (
              <div className="mt-2 ml-4 space-y-2">
                {menu.subMenus.map((subMenu, subIndex) => (
                  <button 
                    key={subIndex} 
                    className="w-full bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                    onClick={() => handleMenuClick(subMenu)}
                  >
                    {subMenu.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
