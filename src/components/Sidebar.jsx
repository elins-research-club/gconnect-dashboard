import React, { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false); 

  const Menus = [
    { title: "Dashboard", src: "hut" },
    { title: "Current Conditions", src: "sun" },
    { title: "Forecasts", src: "cloud" },
    { title: "Historical Data", src: "bar-chart" },
    { title: "Map & Radar", src: "map" },
    { 
      title: "Sensors", 
      src: "sensor", 
      submenus: [
        { title: "Temperature", src: "temperature" },
        { title: "Humidity", src: "drop" },
        { title: "Wind", src: "wind" },
        { title: "Pressure", src: "pulse" },
        { title: "Rainfall", src: "rainy" },
      ]
    },
    { title: "Alerts", src: "danger" },
    { title: "Data Management", src: "database" },
    { title: "System Status", src: "pulse" },
    { title: "Settings", src: "setting" },
  ];

  return (
    <div>
      <div className={`${!open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-1 bg-[#2596be] relative`}>
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-[#2596be] rotate-180 ${!open && 'rotate-0'}`}
          onClick={() => {
            if (open) {
              setSubmenuOpen(false); 
            }
            setOpen(!open);
          }}
        />
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li key={index} className="text-white text-sm">
              <div
                className={`flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:bg-opacity-30 rounded-md`}
                onClick={() => {
                  if (menu.title === "Sensors" && !open) {
                    setSubmenuOpen(!submenuOpen); 
                  }
                }}
              >
                <img src={`./src/assets/${menu.src}.png`} className="w-6 h-6" />
                {!open && <span className="whitespace-nowrap">{menu.title}</span>}
              </div>
              
              {menu.submenus && submenuOpen && !open && (
                <ul className="pl-8">
                  {menu.submenus.map((submenu, subIndex) => (
                    <li key={subIndex} className="text-white text-sm p-2 hover:bg-white hover:bg-opacity-30 rounded-md">
                      <img src={`./src/assets/${submenu.src}.png`} className="w-6 h-6 inline-block" />
                      <span className="ml-2">{submenu.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
