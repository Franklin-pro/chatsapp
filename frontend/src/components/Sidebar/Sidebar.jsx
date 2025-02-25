import { useState, useEffect } from 'react';
import React from 'react';
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import useConversation from '../../zustand/useConversation';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { selectedConversation } = useConversation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (selectedConversation) {
      setIsMobileOpen(false);
    }
  }, [selectedConversation]);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden sm:flex sm:flex-col border-r border-slate-500 p-4">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden fixed top-5 right-5 z-50">
        <button
          className="btn btn-circle btn-ghost  relative flex items-center justify-center w-14 h-14"
          onClick={toggleSidebar}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animate Icon Disappearance */}
          <AnimatePresence>
            {!isHovered && (
              <motion.div
                key={isMobileOpen ? "close" : "menu"}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {isMobileOpen ? (
                  <IoMdClose size={24} className="text-white" />
                ) : (
                  <HiMenuAlt1 size={24} className="text-2xl text-gray-50 rounded-full" />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animate Text Appearance */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                key={isMobileOpen ? "start" : "chats"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute text-sm text-white"
              >
                Start Chats
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div
          className=" fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={(e) => e.target.classList.contains('overlay') && setIsMobileOpen(false)}
        >
          <div className="fixed left-0 top-0 h-full menu bg-base-200 text-base-content w-full  shadow-xl p-4 transform transition-transform duration-300 ease-in-out">
            <div className="mt-12">
              <SearchInput />
              <div className="divider px-3"></div>
              <Conversations />
              <LogoutButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
