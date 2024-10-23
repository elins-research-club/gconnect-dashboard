import React, { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "SquaresFour" },
    { title: "History", src: "ClockCounterClockwise" },
    { title: "Reports", src: "Note" },
    { title: "Alerts", src: "Siren" },
  ];

  return (
    <div >
      
      <div className={`${!open ? "w-48" : "w-20"} border-2 rounded-[25px] duration-300 h-full p-3 pl-5 bg-[#EFEFEF] relative`}>
        <div className={`flex items-center gap-x-4 `}>
          <img src='./src/assets/Vector.png' className='w-[36px] h-[34px] object-contain'
          onClick={() => {
            setOpen(!open);
          }}/>
          {!open && <span className="whitespace-nowrap">G-Connect</span>}
        </div>
        
        <div className='pt-24'>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li key={index} className="pb-6 text-black text-sm">
                <div
                  className={`flex items-center gap-x-4 cursor-pointer p-2 bg-[#E5E5E5]  rounded-md`}
                >
                  <img src={`./src/assets/${menu.src}.png`} className="w-6 h-6"
                   onClick={() => {
                    setOpen(!open);
                  }} />
                  {!open && <span className="whitespace-nowrap">{menu.title}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
