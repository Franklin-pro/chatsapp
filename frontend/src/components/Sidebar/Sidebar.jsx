import { useState } from 'react';
import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Handle clicking outside sidebar to close it
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('overlay')) {
      setIsMobileOpen(false);
    }
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
      <div className="sm:hidden fixed  top-4 right-2 z-50">
        <button 
          className="btn btn-circle btn-ghost" 
          onClick={toggleSidebar}
        >
          {isMobileOpen ? <IoMdClose size={24} /> : <HiMenuAlt1 size={24} className=' text-2xl text-blue-500  rounded-full'/>}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black lg:hidden md:hidden bg-opacity-50 z-40 overlay"
          onClick={handleClickOutside}
        >
          <div className="fixed left-0 top-0 h-full w-full bg-base-100 shadow-xl p-4 transform transition-transform duration-300 ease-in-out">
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