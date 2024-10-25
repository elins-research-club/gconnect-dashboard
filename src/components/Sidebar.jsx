import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div
      className={`${
        open ? "w-60" : "w-20"
      } flex flex-col overflow-hidden border-2 border-gray-300 shadow-lg rounded-lg transition-all duration-500 p-2 bg-indigo-100 relative py-4`}
    >
      {/* Sidebar Toggle Icon */}
        <img
          src="./src/assets/arrow1.svg"
          className={`w-8 mx-1 self-end ${open ? "rotate-180" : ""} transition-all opacity-40 duration-500 select-none cursor-pointer`}
          onClick={() => {
            if (open) {
              setSubmenuOpen(false); // Close submenu when toggling
            }
            setOpen(!open); // Toggle sidebar
          }}
        />

        <div className="h-[0.5px] my-8 bg-gray-400"/>

      <div className={`flex items-center gap-x-2`}>
        <img
          src="./src/assets/Vector.png"
          className="w-[34px] h-[32px] object-contain ml-[3px]"
        />
        {open && (
          <span className="whitespace-nowrap text-black text-sm font-semibold">
            G-Connect
          </span>
        )}
      </div>

      {/* Sidebar Menu */}
      <div className="">
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li key={index} className="pb-3 text-black text-sm font-semibold">
              <div
                className={`flex items-center gap-x-3 cursor-pointer p-2 rounded-lg transition-colors duration-200 hover:bg-indigo-200`}
              >
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
                {open && (
                  <span className="whitespace-nowrap select-none">{menu.title}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
