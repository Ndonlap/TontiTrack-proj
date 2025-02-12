// Dropdown for the user profile
import React, { useEffect, useState } from "react";
import profile from "../../../assets/images/profile.png";
import applog from "../../../assets/images/applog.png"

const Dropdown = ({ open = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative inline-block text-left">
        {/* User profile icon */}
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center "
        >
          <img
           title="My profile"
            src={profile}
            style={{ height: 48, width: 48 }}
            className="rounded-full cursor-pointer"
            alt=""
            onChange={(e) => {}}
          />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 mr-510w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="w-64 h-[90%] bg-gray-100 shadow-lg rounded-xl p-6">
              <div className="mb-8">
                <div className="flex items-center justify-center">
                  <img
                    src={applog}
                    style={{ height: 48, width: 48 }}
                    alt="Logo"
                    className="h-8 w-auto"
                  />
                </div>
              </div>
              <nav className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <span className="material-icons-outlined">home</span>
                  <span className="ml-3">Home</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <span className="material-icons-outlined">search</span>
                  <span className="ml-3">Explore</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <span className="material-icons-outlined">notifications</span>
                  <span className="ml-3">Notifications</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg bg-gray-200"
                >
                  <span className="material-icons-outlined">message</span>
                  <span className="ml-3">Messages</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <span className="material-icons-outlined">article</span>
                  <span className="ml-3">Articles</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <span className="material-icons-outlined">bookmark</span>
                  <span className="ml-3">Bookmarks</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <span className="material-icons-outlined">store</span>
                  <span className="ml-3">Store</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <span className="material-icons-outlined">group</span>
                  <span className="ml-3">Communities</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <span className="material-icons-outlined">more_horiz</span>
                  <span className="ml-3">More</span>
                </a>
              </nav>
              <div className="border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
