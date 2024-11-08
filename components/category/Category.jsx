"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

import { Orbitron } from "next/font/google";

import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

import toast, { Toaster } from 'react-hot-toast';
import GetAllCategoryData from "@/lib/GetAllCategoryData";


const orbitron = Orbitron({ subsets: ["latin"] });

const Category = async() => {
  
  const categories = await GetAllCategoryData();
  console.log("5 categories", categories)


  return (
    <section className="bg-gray-200 overflow-hidden">
      <div className="container">
              <div className="bg-white w-[300px] mt-8 md:mt-0 md:ml-[190px] p-6 rounded-1xl">
                {categories.map((category) => (
                    <div key={category.id} class="flex flex-row items-center group/item hover:bg-slate-100">
                        <div>
                            <Image
                                width={18}
                                height={18}
                                src="/assets/icons8-facebook-50.png"
                                // src="https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/computer-laptop.svg"
                                // src={category.icon}
                                alt={category.title}
                                className="-mt-1 hover:text-yellow-500"
                                unoptimized
                            />        
                            
                        </div>
                        <div className="ml-5">
                            <p className="text-[16px] hover:text-yellow-500">{category.title}</p> 
                            <div class="group/edit invisible hover:bg-slate-200 group-hover/item:visible" href="">
                                <svg class="-mt-5 ml-[200px] mb-2 h-4 w-4 text-yellow-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 6 15 12 9 18" /></svg>
                            </div>
                        </div>
                    </div> 
                ))}   
          </div>
      </div>
    </section>
  );
};

export default Category;
