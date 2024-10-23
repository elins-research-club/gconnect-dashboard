import React, { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false); 

  const Menus = [
    { title: "Dashboard", src: "SquaresFour" },
    { title: "History", src: "ClockCounterClockwise" },
    { title: "Reports", src: "Note" },
    { title: "Alerts", src: "Siren" },
  ];

  return (
    <div className=' p-3'>
      <div className={`${!open ? "w-48" : "w-24"} border-2 rounded-[25px] duration-300 h-screen p-5 pl-7 bg-[#EFEFEF] relative`}>
        {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-[#2596be] rotate-180 ${!open && 'rotate-0'}`}
          onClick={() => {
            if (open) {
              setSubmenuOpen(false); 
            }
            setOpen(!open);
          }}
        /> */}
        <div className={`flex items-center gap-x-4`}>
          <img src='./src/assets/Vector.png' className='w-[38px] h-[36px] object-contain'
          onClick={() => {
            if (open) {
              setSubmenuOpen(false); 
            }
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
                    if (open) {
                      setSubmenuOpen(false); 
                    }
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
