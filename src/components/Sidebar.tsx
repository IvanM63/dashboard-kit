import React, { ReactNode, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { LogOut, reset } from "../features/authSlice";
import {
  FaChartPie,
  FaTicket,
  FaLightbulb,
  FaUsers,
  FaUserTie,
  FaBook,
  FaGear,
} from "react-icons/fa6";
//import { ThunkDispatch } from "@reduxjs/toolkit";

import mainLogo from "../assets/logo.png";

const Sidebar = ({ expanded }: { expanded: boolean }) => {
  const location = useLocation();
  const [expandedSidebar, setExpandedSidebar] = useState(expanded);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setExpandedSidebar(false);
    } else {
      setExpandedSidebar(true);
    }
  };

  // handle the sidebar
  useEffect(() => {
    setExpandedSidebar(expanded);
  }, [expanded]);

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className=" flex ">
      <nav
        className={`flex flex-col flex-wrap h-full shadow-md transition-all duration-200
        bg-background dark:bg-gray-800
        ${expandedSidebar ? "w-56 py-6 " : "w-0"}
      `}
      >
        <div className="flex flex-row justify-center space-x-1 mb-4">
          <img
            className="flex"
            src={mainLogo}
            alt="logo"
            width={35}
            height={35}
          />
          <h1
            className={`font-semibold transition-all duration-300 text-[#838591]
          ${expandedSidebar ? "text-lg" : "text-[0] "}`}
          >
            Dashboard Kit
          </h1>
        </div>
        <div className="flex border-b border-gray-700">
          <ul className="flex-1 my-4">
            <li>
              <NavLink to={"/overview"}>
                <SidebarItem
                  icon={
                    <FaChartPie
                      className={
                        location.pathname === "/overview"
                          ? "fill-[#dde2ff]"
                          : "fill-[#5e606c]"
                      }
                      size={14}
                    />
                  }
                  text={expandedSidebar ? "Overview" : ""}
                  active={location.pathname === "/overview"}
                  expanded={expandedSidebar}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tickets"}>
                <SidebarItem
                  icon={
                    <FaTicket
                      className={
                        location.pathname === "/tickets"
                          ? "fill-[#dde2ff]"
                          : "fill-[#5e606c]"
                      }
                      size={14}
                    />
                  }
                  text={expandedSidebar ? "Tickets" : ""}
                  active={location.pathname === "/tickets"}
                  expanded={expandedSidebar}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/ideas"}>
                <SidebarItem
                  icon={
                    <FaLightbulb
                      className={
                        location.pathname === "/ideas"
                          ? "fill-[#dde2ff]"
                          : "fill-[#5e606c]"
                      }
                      size={14}
                    />
                  }
                  text={expandedSidebar ? "Ideas" : ""}
                  active={location.pathname === "/ideas"}
                  expanded={expandedSidebar}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contacts"}>
                <SidebarItem
                  icon={
                    <FaUsers
                      className={
                        location.pathname === "/contacts"
                          ? "fill-[#dde2ff]"
                          : "fill-[#5e606c]"
                      }
                      size={14}
                    />
                  }
                  text={expandedSidebar ? "Contacts" : ""}
                  active={location.pathname === "/contacts"}
                  expanded={expandedSidebar}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/agents"}>
                <SidebarItem
                  icon={
                    <FaUserTie
                      className={
                        location.pathname === "/agents"
                          ? "fill-[#dde2ff]"
                          : "fill-[#5e606c]"
                      }
                      size={14}
                    />
                  }
                  text={expandedSidebar ? "Agents" : ""}
                  active={location.pathname === "/agents"}
                  expanded={expandedSidebar}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/articles"}>
                <SidebarItem
                  icon={
                    <FaBook
                      className={
                        location.pathname === "/articles"
                          ? "fill-[#dde2ff]"
                          : "fill-[#5e606c]"
                      }
                      size={14}
                    />
                  }
                  text={expandedSidebar ? "Articles" : ""}
                  active={location.pathname === "/articles"}
                  expanded={expandedSidebar}
                />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex-1 my-4">
            <li>
              <NavLink to={"/settings"}>
                <SidebarItem
                  icon={
                    <FaGear
                      className={
                        location.pathname === "/settings"
                          ? "fill-[#dde2ff]"
                          : "fill-[#5e606c]"
                      }
                      size={14}
                    />
                  }
                  text={expandedSidebar ? "Settings" : ""}
                  active={location.pathname === "/settings"}
                  expanded={expandedSidebar}
                />
              </NavLink>
              <li>
                <NavLink to={"/subscription"}>
                  <SidebarItem
                    icon={
                      <FaUsers
                        className={
                          location.pathname === "/subscription"
                            ? "fill-[#dde2ff]"
                            : "fill-[#5e606c]"
                        }
                        size={14}
                      />
                    }
                    text={expandedSidebar ? "Subscription" : ""}
                    active={location.pathname === "/subscription"}
                    expanded={expandedSidebar}
                  />
                </NavLink>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export const SidebarItem = ({
  icon,
  text,
  active,
  expanded,
  color,
}: {
  icon: ReactNode;
  text?: string;
  active: boolean;
  expanded: boolean;
  color?: string;
}) => {
  return (
    <div
      className={`flex flex-row items-center px-8 py-3 cursor-pointer transition-colors duration-300
    ${
      active
        ? "text-[#dde2ff] bg-[#3e4049] border-l-4 border-[#dde2ff] px-7"
        : "text-[#a3a5b2] hover:bg-[#3e4049] "
    }
    ${!text ? "" : ""}
    `}
    >
      {icon}
      {text ? <span className="ml-4 text-xs">{text}</span> : ""}
    </div>
  );
};

export default Sidebar;
