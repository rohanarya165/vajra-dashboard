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
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleMenu = (name) => {
    setOpenItem((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Hamburger Button for small screens */}
      <div className="lg:hidden p-4">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-white bg-blue-600 p-2 rounded-md"
        >
          <Menu />
        </button>
      </div>

      {/* Sidebar Drawer for mobile */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-50 w-[250px] h-full bg-[#0E1D34] text-white flex flex-col justify-between lg:hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-center text-[30px] mb-4">
                <div>Vajra</div>
                <button onClick={() => setDrawerOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-2">
                {menu.map((item, idx) => (
                  <div key={idx}>
                    <div
                      onClick={() => item.nested && toggleMenu(item.name)}
                      className={`flex items-center justify-between px-3 py-2 rounded-[100px] cursor-pointer ${openItem === item.name ? 'bg-white text-blue-500' : ''
                        }`}
                    >
                      <div className="flex items-center gap-3 text-sm font-medium">
                        <div
                          className={`${openItem === item.name
                              ? 'p-2 rounded-[100%] bg-blue-500 text-white'
                              : 'p-2'
                            }`}
                        >
                          <item.icon size={18} />
                        </div>
                        {item.name}
                      </div>
                      {item.nested &&
                        (openItem === item.name ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        ))}
                    </div>

                    <AnimatePresence initial={false}>
                      {item.nested && openItem === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden ml-9 mt-1 space-y-1 border-l text-sm text-gray-300"
                        >
                          {item.nested.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              className="py-1 px-4 rounded hover:bg-[#2A3B55] cursor-pointer"
                            >
                              {sub}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="px-4 py-6 space-y-3">
              <button className="w-full relative flex items-center gap-3 justify-center border border-white text-white cursor-pointer py-2 rounded-full text-sm font-semibold">
                <Headphones size={16} className="absolute left-4" />
                Contact us
              </button>
              <button className="w-full relative flex items-center gap-3 justify-center border border-white text-white cursor-pointer py-2 rounded-full text-sm font-semibold">
                <LogOut size={16} className="absolute left-4" />
                Log Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static Sidebar for large screens */}
      <div className="hidden lg:flex w-[250px] bg-[#0E1D34] text-white h-screen flex-col justify-between">
        <div className="p-5">
          <div className="text-[70px] py-4 text-center">Vajra</div>
          <div className="space-y-2">
            {menu.map((item, idx) => (
              <div key={idx}>
                <div
                  onClick={() => item.nested && toggleMenu(item.name)}
                  className={`flex items-center justify-between px-3 py-2 rounded-[100px] cursor-pointer ${openItem === item.name ? 'bg-white text-blue-500' : ''
                    }`}
                >
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <div
                      className={`${openItem === item.name
                          ? 'p-2 rounded-[100%] bg-blue-500 text-white'
                          : 'p-2'
                        }`}
                    >
                      <item.icon size={18} />
                    </div>
                    {item.name}
                  </div>
                  {item.nested &&
                    (openItem === item.name ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </div>

                <AnimatePresence initial={false}>
                  {item.nested && openItem === item.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden ml-9 mt-1 space-y-1 border-l text-sm text-gray-300"
                    >
                      {item.nested.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="py-1 px-4 rounded hover:bg-[#2A3B55] cursor-pointer"
                        >
                          {sub}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 py-6 space-y-3">
          <button className="w-full relative flex items-center gap-3 justify-center border border-white text-white cursor-pointer py-2 rounded-full text-sm font-semibold">
            <Headphones size={16} className="absolute left-4" />
            Contact us
          </button>
          <button className="w-full relative flex items-center gap-3 justify-center border border-white text-white cursor-pointer py-2 rounded-full text-sm font-semibold">
            <LogOut size={16} className="absolute left-4" />
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
