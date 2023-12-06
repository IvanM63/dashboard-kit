import React, { useEffect, useState } from "react";

import { FaMagnifyingGlass, FaBell, FaBars } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export default function Header({ onClick }: { onClick: () => void }) {
  const location = useLocation();

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="flex flex-row w-full px-8 py-5 items-center ">
      <div className="flex flex-1 flex-row items-center space-x-2">
        <HeaderItem onClick={onClick}>
          <FaBars className="fill-gray-400 dark:fill-white" size={18} />
        </HeaderItem>

        <h1 className="text-xl font-bold dark:text-white">
          {location.pathname.charAt(1).toUpperCase() +
            location.pathname.slice(2)}
        </h1>
      </div>

      <div className="flex flex-1 flex-row justify-end items-center">
        <HeaderItem>
          <FaMagnifyingGlass
            className="fill-gray-400 dark:fill-white"
            size={18}
          />
        </HeaderItem>
        <HeaderItem onClick={handleNotificationClick}>
          {/* Dot Notification */}

          <div
            className="flex bg-primary w-1 h-1 p-1 -top-[6px] -right-[10px] rounded-full 
          relative border-2 border-[#f7f8fc]"
          ></div>
          <FaBell
            className="flex fill-gray-400 -ml-2 dark:fill-white"
            size={18}
          />
          {isNotificationOpen && (
            <div className="absolute top-12 right-30 bg-white border rounded shadow-md">
              {/* Your notification content goes here */}
              <div className="p-2">Notification 1</div>
              <div className="p-2">Notification 2</div>
            </div>
          )}
        </HeaderItem>
        <div className="flex border-[1px] mx-4 h-8"></div>
        <p className="font-semibold mx-4 dark:text-white">Jones Ferdinand</p>
        <HeaderItem>
          <img
            src="https://avatars.githubusercontent.com/u/55942632?v=4"
            alt="avatar"
            className="rounded-full w-10 h-10 border-2 p-[0.05rem]"
          />
        </HeaderItem>
      </div>
    </div>
  );
}

const HeaderItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  //console.log(React.Children.count(children));
  return (
    <div
      onClick={onClick}
      className="flex hover:bg-blue-100 rounded-xl w-10 h-10 justify-center 
      items-center cursor-pointer transition-all duration-200 dark:hover:bg-gray-700"
    >
      {children}
    </div>
  );
};
