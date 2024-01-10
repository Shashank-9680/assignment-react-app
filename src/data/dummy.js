import React from "react";

import { FaBeer } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import { MdPayments } from "react-icons/md";

import { LuMousePointer2 } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";
export const links = [
  {
    name: "Home",
    icon: <IoMdHome />,
  },
  {
    name: "Orders",
    icon: <FaClipboardList />,
  },
  {
    name: "Products",
    icon: <FaBeer />,
  },
  {
    name: "Delivery",
    icon: <FaTruck />,
  },
  {
    name: "Marketing",
    icon: <FaBeer />,
  },
  {
    name: "Analytics",
    icon: <SiSimpleanalytics />,
  },
  {
    name: "Payments",
    icon: <MdPayments />,
  },
  {
    name: "Tools",
    icon: <LuMousePointer2 />,
  },
  {
    name: "Discounts",
    icon: <CiDiscount1 />,
  },
  {
    name: "Audience",
    icon: <FaBeer />,
  },
  {
    name: "Appearence",
    icon: <IoIosColorPalette />,
  },
  {
    name: "Plugins",
    icon: <IoSparklesSharp />,
  },
];
