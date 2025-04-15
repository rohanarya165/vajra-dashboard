import { Bell, Grid3X3, Menu } from 'lucide-react';
import { useState } from 'react';

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Left - Title */}
      <h1 className="text-2xl font-semibold text-[#1B2A41]">Dashboard</h1>

      {/* Right - Buttons */}
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden flex items-center justify-center w-8 h-8 bg-[#F5F7FA] rounded-full text-[#1B2A41]"
          onClick={toggleMenu}
        >
          <Menu size={18} />
        </button>

        {/* User Type */}
        <div className="hidden lg:flex items-center gap-2 bg-[#F5F7FA] px-4 py-1 rounded-full shadow text-sm font-medium text-[#1B2A41]">
          <div className="w-7 h-7 rounded-full bg-[#1B2A41] text-white flex items-center justify-center text-xs font-bold">
            B
          </div>
          Non Bio Medical
        </div>

        {/* Location Dropdown */}
        <div className="hidden lg:block bg-[#F5F7FA] px-4 py-1 rounded-full shadow text-sm font-medium text-[#1B2A41] cursor-pointer">
          Vijayanagar ▼
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F7FA] shadow text-[#1B2A41]">
            <Grid3X3 size={18} />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F7FA] shadow text-[#1B2A41]">
            <Bell size={18} />
          </button>

          {/* Profile */}
          <div className="w-10 h-10 rounded-full bg-[#1B2A41] text-white flex items-center justify-center font-semibold">
            A
          </div>
        </div>
      </div>

      {/* Mobile Menu (when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4">
          {/* User Type */}
          <div className="flex items-center gap-2 bg-[#F5F7FA] px-4 py-1 rounded-full shadow text-sm font-medium text-[#1B2A41]">
            <div className="w-7 h-7 rounded-full bg-[#1B2A41] text-white flex items-center justify-center text-xs font-bold">
              B
            </div>
            Non Bio Medical
          </div>

          {/* Location Dropdown */}
          <div className="bg-[#F5F7FA] px-4 py-1 rounded-full shadow text-sm font-medium text-[#1B2A41] cursor-pointer">
            Vijayanagar ▼
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F7FA] shadow text-[#1B2A41]">
              <Grid3X3 size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F7FA] shadow text-[#1B2A41]">
              <Bell size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
