import {
    LayoutDashboard,
    Box,
    Activity,
    Wrench,
    Send,
    Users,
    FileText,
    ChevronDown,
    ChevronUp,
    Headphones,
    LogOut,
  } from 'lucide-react';
  import { useState } from 'react';
  
  const menu = [
    { name: 'Dashboard', icon: LayoutDashboard },
    {
      name: 'Assets',
      icon: Box,
      nested: ['All Assets', 'Add Asset'],
    },
    { name: 'Incidents', icon: Activity },
    { name: 'Services', icon: Wrench },
    { name: 'Request', icon: Send },
    {
      name: 'Users',
      icon: Users,
      nested: ['All Users', 'Add User'],
    },
    { name: 'Reports', icon: FileText },
  ];
  
  const Sidebar = () => {
    const [openItem, setOpenItem] = useState(null);
  
    const toggleMenu = (name) => {
      setOpenItem((prev) => (prev === name ? null : name));
    };
  
    return (
      <div className="w-[250px] bg-[#0E1D34] text-white h-screen flex flex-col justify-between">
        {/* TOP Logo + Menu */}
        <div className="p-5">
          <div className="text-2xl font-bold mb-8">Vajra</div>
          <div className="space-y-2">
            {menu.map((item, idx) => (
              <div key={idx}>
                <div
                  onClick={() => item.nested && toggleMenu(item.name)}
                  className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-[#1E2D44] cursor-pointer"
                >
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <item.icon size={18} />
                    {item.name}
                  </div>
                  {item.nested &&
                    (openItem === item.name ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </div>
  
                {/* NESTED */}
                {item.nested && openItem === item.name && (
                  <div className="ml-9 mt-1 space-y-1 text-sm text-gray-300 transition-all duration-200">
                    {item.nested.map((sub, subIdx) => (
                      <div
                        key={subIdx}
                        className="py-1 px-2 rounded hover:bg-[#2A3B55] cursor-pointer"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* BOTTOM Buttons */}
        <div className="px-4 py-6 space-y-3">
          <button className="w-full flex items-center gap-3 justify-center bg-[#132542] hover:bg-[#1F3556] py-2 rounded-full text-sm font-medium">
            <Headphones size={16} />
            Contact us
          </button>
          <button className="w-full flex items-center gap-3 justify-center bg-white text-[#0E1D34] hover:bg-gray-100 py-2 rounded-full text-sm font-semibold">
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  