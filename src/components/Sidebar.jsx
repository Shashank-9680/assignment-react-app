import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";

import grand from "../assets/grand.webp";
import image from "./Image.png";
import { IoChevronDown } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { useStateContext } from "../contexts/ContextProvider";
const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-1 pt-1.5 pb-1.5 rounded-lg  bg-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-1 pt-1.5 pb-1.5 rounded-lg text-md text-white dark:text-gray-200 dark:hover:text-black hover:text-black hover:bg-light-gray/50 m-2";

  return (
    <div className="h-full flex flex-col justify-between px-4 pb-10 bg-[#1E2640] text-white">
      <>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center mt-6">
            <img src={image}></img>
            <div className="flex flex-col w-1/2 gap-4">
              <div className="font-medium text-sm leading-5 cursor-pointer">
                Nishyan
              </div>
              <div className="font-normal text-xs leading-4 underline text-#FFFFFF cursor-pointer">
                Visit Store
              </div>
            </div>
            <IoChevronDown />
          </div>
          <div>
            {links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#FFFFFF1A " : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {link.icon}
                <span className="capitalize ">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="w-full border-0  rounded bg-[#353C53]">
          <div className="flex gap-3 py-1.5 px-3 items-center">
            <div className="bg-[#FFFFFF] flex justify-center items-center opacity-10 border-0 rounded p-1.5 h-9 w-9 ">
              <CiWallet color="black" />
            </div>
            <div className="flex flex-col">
              <div className="text-xs font-normal cursor-pointer">
                Available Credits
              </div>
              <span className="text-xl font-medium cursor-pointer">222.10</span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
