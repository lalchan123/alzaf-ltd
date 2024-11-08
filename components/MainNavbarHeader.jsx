"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { MdOutlineLightMode } from "react-icons/md";

import { LuUser2 } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";
import { FaGithub } from "react-icons/fa";

const orbitron = Orbitron({ subsets: ["latin"] });

// Debounce function to limit the rate of calling the handleScroll function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

const MainNavbarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languange, setLanguage] = useState("");

  const confInputChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <section
      className={`fixed top-0 left-0 right-0 bg-gray-200 `}
    >
      <div className="container hidden md:block">
        {/* <div className="flex items-center justify-between">   */}
        <div className="grid grid-cols-2 gap-2">  
          <div className="flex items-center justify-end gap-x-8">
            <select
              value={languange}
              onChange={confInputChange}
              className="w-[82px] h-[25px] ml-[70px] text-gray-900 text-[12px] bg-gray-200"
            >
              <option value="">Language</option>
              <option value='English'>English</option>
              <option value='Bangla'>Bangla</option>
            </select>  
            <p className="text-gray-900 text-[12px]">
              Help Center
            </p>
            <p className="text-gray-900 text-[12px]">
              Helpline: 0964781656
            </p>
            {/* {menuItems.map((el) => (
              <Link
                key={el.slug}
                href={el.slug}
                className={`nav-item text-md md:text-[18px] font-semibold ${pathname === el.slug ? "!text-primary border-b-2 border-primary" : ""} hover:text-primary`}
              >
                {el.title}
              </Link>
            ))} */}
          </div>
          <div className="flex items-center justify-end gap-x-8">
            {/* <MdOutlineLightMode className="text-black size-7 cursor-pointer hover:text-primary" /> */}
            <Link
              key={''}
              href={''}
              className='flex items-center justify-center hover:bg-primary md:text-[12px]'
            >
              Become a Seller
            </Link> 
            <Link
              key={''}
              href={''}
              className='flex items-center justify-center hover:bg-primary md:text-[12px]'
            >
              Order Track
            </Link> 
            <Link
              key={''}
              href={'/register'}
              className='flex items-center justify-center text-primary md:text-[12px]'
            >
              Sign Up / Login
            </Link> 
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default React.memo(MainNavbarHeader);
