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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { px } from "framer-motion";

const orbitron = Orbitron({ subsets: ["latin"] });



const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className={`py-4 z-50 bg-white`}
    >
      <div className="container hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end gap-x-8">
            <Link href={"/"}>
              <Image
                width={100}
                height={90}
                src="/assets/logo.png"
                alt="alzaf"
                className="mt-4 ml-[200px]"
                priority
              />  
            </Link>
            <div>
              <input type="search" id="default-search" class="w-[450px] p-2 mt-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product" required />
              <button type="submit" class="absolute  p-2.5 mt-4 -ml-[10px] text-sm font-medium text-white bg-yellow-700 rounded-e-lg border border-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span class="sr-only">Search</span>
              </button>
            </div>
           
            
            <div class="relative w-8 h-8 mt-4 ml-[8px] overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-600">
                <svg class="absolute w-6 h-6 text-gray-400 left-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="relative w-8 h-8 mt-4 -ml-[20px] overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-600">
              <svg class="absolute h-6 w-6 text-gray-500 left-1 mt-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </div>
            <div class="relative w-8 h-8 mt-4 -ml-[20px] overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-600">
              <svg class="absolute h-6 w-6 text-gray-500 left-1 mt-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <Image
                width={160}
                height={120}
                src="/assets/cloudservices.png"
                alt="cloudservices"
                className="mt-4 ml-[10px]"
                priority
              />  
          </div>
          <div className="flex items-center">
           
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className={`!mx-0 !px-0 pb-0 pt-2 md:pb-3 md:pt-4 fixed top-0 transition-colors duration-300`}
        >
          <NavbarContent>
            <NavbarBrand>
              <Link href="/">
                <Image
                  width={800}
                  height={500}
                  src="/assets/logo.png"
                  alt="alzaf"
                  className="w-full h-auto rounded-lg"
                  priority
                />  
              </Link>
              <div className="ml-[5px]">
                <input type="search" id="default-search" class="w-[100px] p-0.3 px-0.5 text-[8px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product" required />
                <button type="submit" class="absolute  p-2.5 mt-1 -ml-[10px] text-[8px] font-medium text-white bg-yellow-700 rounded-e-lg border border-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    <svg class="w-1 h-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
              </div>
              <div class="relative w-6 h-6 ml-[20px] overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-600">
                <svg class="absolute w-4 h-4 text-gray-400 left-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              </div>
              <div class="relative w-6 h-6 ml-[8px] overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-600">
                <svg class="absolute h-4 w-4 text-gray-500 left-1 mt-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
            </NavbarBrand>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden"
            />
          </NavbarContent>

          <NavbarMenu className="overflow-hidden">
            <NavbarMenuItem className="flex flex-row">
              <Link
                key={''}
                href={''}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-black text-center font-medium py-1 mt-2 hover:bg-primary text-[15px]`}
              >
                Become a Seller
              </Link> 
            </NavbarMenuItem>
            <NavbarMenuItem className="flex flex-row">
              <Link
                  key={''}
                  href={''}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-black text-center font-medium py-1 mt-2 hover:bg-primary text-[15px]`}
              >
                Order Track
              </Link> 
            </NavbarMenuItem>
            <NavbarMenuItem className="flex flex-row">
              <Link
                  key={''}
                  href={'/register'}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-black text-center font-medium py-1 mt-2 text-primary text-[15px]`}
                >
                  Sign Up / Login
              </Link> 
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
      </div>
    </section>
  );
};

export default React.memo(MainNavbar);
