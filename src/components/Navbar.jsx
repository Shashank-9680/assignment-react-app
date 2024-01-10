import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import avatar from "../assets/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import { IoMdArrowDropdown } from "react-icons/io";
const NavButton = ({ icon, color, customFunc }) => (
  <button
    type="button"
    onClick={customFunc}
    className="relative text-xl rounded-full w-10 h-10 grid place-items-center  bg-[#E6E6E6]/20"
  >
    {icon}
  </button>
);

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-8 relative">
      <div className="flex gap-4 items-center">
        <p className="font-normal text-[15px]">Payments</p>
        <p className="flex justify-center items-center gap-2">
          <div className="w-[16px] h-[16px] border-1 border-solid border-black rounded-full flex justify-center items-center  ">
            ?
          </div>
          <span className="font-normal text-xs">How it works</span>
        </p>
      </div>
      <div className="flex items-center w-400 bg-[#F2F2F2]">
        <div className="px-2 w-1/12">
          <CiSearch color="#5d5892" />
        </div>

        <input
          className="h-10 w-11/12 p-2 text-xs rounded-sm outline-none bg-[#F2F2F2]"
          type="text"
          placeholder="Search feautures,tutorials,etc."
        />
      </div>
      <div className="flex gap-4">
        <NavButton title="Cart" icon={<MdMessage />} />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          icon={<IoMdArrowDropdown />}
        />
      </div>
    </div>
  );
};

export default Navbar;
