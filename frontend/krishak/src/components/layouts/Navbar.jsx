import React, { useState, useEffect } from 'react'
import {HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LuSun, LuMoon } from "react-icons/lu";
import SideMenu from './SideMenu';

const Navbar = ({activeMenu}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check local storage for theme preference on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        // Set dark mode as default if no theme is saved or if it's not explicitly light
        if (savedTheme === 'dark' || !savedTheme) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Toggle theme and save to local storage
    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
    <div className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
      <div className="flex items-center gap-5">
        <button 
          className="block lg:hidden text-black"
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}        
        >
          {openSideMenu ? ( <HiOutlineX className="text-2xl" />
          ):( <HiOutlineMenu className="text-2xl" />
          )}
        </button>
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
      </div>

      <button 
        className="text-black p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? ( <LuSun className="text-xl" />
        ) : ( <LuMoon className="text-xl" />
        )}
      </button>

      {openSideMenu && (
        <div className="fixed top-[61px] left-0 h-[calc(100vh-61px)] w-64 bg-white border-r border-gray-200/50 z-50 lg:hidden">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar;