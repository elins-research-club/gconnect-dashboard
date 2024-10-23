import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", src: "SquaresFour" },
    { title: "History", src: "ClockCounterClockwise" },
    { title: "Reports", src: "Note" },
    { title: "Alerts", src: "Siren" },
  ];

  return (
    <div className={`${open ? "w-48" : "w-16"} border-2 border-gray-300 shadow-lg rounded-3xl duration-300 pl-3 bg-white relative`}>
      {/* Sidebar Toggle Icon */}
      <div className={`flex items-center gap-x-4 pt-6`}>
        <img
          src="./src/assets/Vector.png"
          className="w-[34px] h-[32px] object-contain cursor-pointer"
          onClick={() => {
            if (open) {
              setSubmenuOpen(false); // Close submenu when toggling
            }
            setOpen(!open); // Toggle sidebar
          }}
        />
        {open && <span className="whitespace-nowrap text-black text-sm font-semibold">G-Connect</span>}
      </div>

      {/* Sidebar Menu */}
      <div className="pt-16">
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li key={index} className="pb-6 text-black text-sm font-semibold">
              <div className={`flex items-center gap-x-4 cursor-pointer p-2 bg-gray-100 rounded-xl transition-colors duration-200 hover:bg-gray-200`}>
                <img
                  src={`./src/assets/${menu.src}.png`}
                  className="w-6 h-6"
                  alt={menu.title}
                  onClick={() => {
                    if (open) {
                      setSubmenuOpen(false); // Close submenu if open
                    }
                    setOpen(!open); // Toggle sidebar
                  }}
                />
                {open && <span className="whitespace-nowrap">{menu.title}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
