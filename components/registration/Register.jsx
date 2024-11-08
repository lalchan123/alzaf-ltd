"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

import { Orbitron } from "next/font/google";

import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

import toast, { Toaster } from 'react-hot-toast';


const orbitron = Orbitron({ subsets: ["latin"] });

const Register = () => {
  

  const [loading, setLoading] = useState(false);
  const [isVisiblep, setIsVisiblep] = useState(false);
  const toggleVisibilityp = () => setIsVisiblep(prevState => !prevState);

  const [isVisiblecp, setIsVisiblecp] = useState(false);
  const toggleVisibilitycp = () => setIsVisiblecp(prevState => !prevState);

  const [fullName, setFullName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.length < 8) {
      toast.error("Your password must be at least 8 characters")

    }
    if (password.search(/[A-Z]/) < 0) {
      toast.error("Your password must contain at least one uppercase letter.")

    }
    if (password.search(/[0-9]/) < 0) {
      toast.error("Your password must contain at least one digit.")
    }
    if (password.search(/[!#$%&? "]/) < 0) {
      toast.error("Your password must contain at least one special character.")
    }
    if (password != confirmPassword) {
      toast.error("Your password and confirm password is not equal.")
    }
  };

  return (
    <section className="bg-gray-200 overflow-hidden">
      <div className="container">
          <div className="bg-white mt-20 md:mt-10 mb-10 p-6 rounded-2xl md:w-[800px]  md:h-[440px] md:ml-[150px]">
              <p className="text-[22px] font-bold md:ml-12 mt-5 grid justify-items-start">Welcome to Alzaf.com</p>
              <p className="text-[22px] text-primary ml-20 md:mr-5 md:-mt-8 md:grid justify-items-end ">Login</p>
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col md:ml-12 mt-6 items-center w-full gap-4 mb-6 md:flex-col">
                  <div className="w-full md:flex-1">
                    <p className="text-black-700 text-[14px]">Full Name</p>
                    <input
                      class="md:w-[310px] bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-1xl focus:ring-black focus:border-black block w-full p-2.5 py-1 placeholder:text-[12px] pl-5 mt-1"
                      placeholder="Lalchan Badsa"
                      required
                      type="text"
                      name="full_name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                    />
                  </div>
                  <div className="w-full -mt-2 md:flex-1">
                    <p className="text-black-700 text-[14px]">Phone Number or Email</p>
                    <input
                      class="md:w-[310px] bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-1xl focus:ring-black focus:border-black block w-full p-2.5 py-1 placeholder:text-[12px] pl-5 mt-1"
                      placeholder="Phone or Email"
                      required
                      type="text"
                      name="phone_or_email"
                      value={phoneOrEmail}
                      onChange={(event) => setPhoneOrEmail(event.target.value)}
                    />
                  </div>
                  <div className="w-full -mt-2 md:flex-1">
                      <p className="text-black-700 text-[14px]">Password</p>
                      <input
                        id="password"
                        type={isVisiblep ? "text" : "password"}
                        class="md:w-[310px] bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-1xl focus:ring-black focus:border-black block w-full p-2.5 py-1 placeholder:text-[12px] pl-5 mt-1"
                        placeholder="Please enter your password"
                        aria-label="Password"
                        required
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <button
                        className="absolute -mt-6 ml-[275px] md:ml-[285px] cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                        type="button"
                        onClick={toggleVisibilityp}
                        aria-label={isVisiblep ? "Hide password" : "Show password"}
                        aria-pressed={isVisiblep}
                        aria-controls="password"
                      >
                        {isVisiblep ? (
                          <EyeOff size={20} aria-hidden="true" />
                        ) : (
                          <Eye size={20} aria-hidden="true" />
                        )}
                      </button>
                  </div>
                  <div className="w-full -mt-2 md:flex-1">
                      <p className="text-black-700 text-[14px]">Confirm Password</p>
                      <input
                        id="password"
                        type={isVisiblecp ? "text" : "password"}
                        class="md:w-[310px] bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-1xl focus:ring-black focus:border-black block w-full p-2.5 py-1 placeholder:text-[12px] pl-5 mt-1"
                        placeholder="Confirm password"
                        aria-label="Password"
                        required
                        name="confirm_password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                      />
                      <button
                        className="absolute -mt-6 ml-[275px] md:ml-[285px] cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                        type="button"
                        onClick={toggleVisibilitycp}
                        aria-label={isVisiblecp ? "Hide password" : "Show password"}
                        aria-pressed={isVisiblecp}
                        aria-controls="password"
                      >
                        {isVisiblecp ? (
                          <EyeOff size={20} aria-hidden="true" />
                        ) : (
                          <Eye size={20} aria-hidden="true" />
                        )}
                      </button>
                  </div>
                  <div className={`w-full -mt-2  md:ml-[690px] md:flex-1 md:-mt-[250px]`}>
                    <p className="text-black-700 text-[14px]">Birthday</p>
                    <select
                      value={month}
                      onChange={(event)=> setMonth(event.target.value)}
                      // className="w-[82px] h-[25px] ml-[70px] text-gray-900 text-[12px] bg-gray-200"
                      className="w-[90px] md:w-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-[10px] rounded-1xl focus:ring-black focus:border-black block w-full p-2.5 py-1.5 placeholder:text-[10px] pl-1 mt-1"
                    >
                      <option value="" className="text-gray-900 text-[10px]">Month</option>
                      <option value='January' className="text-gray-900 text-[10px]">January</option>
                      <option value='February' className="text-gray-900 text-[10px]">February</option>
                      <option value='March' className="text-gray-900 text-[10px]">March</option>
                      <option value='April' className="text-gray-900 text-[10px]">April</option>
                      <option value='May' className="text-gray-900 text-[10px]">May</option>
                      <option value='Jun' className="text-gray-900 text-[10px]">Jun</option>
                      <option value='July' className="text-gray-900 text-[10px]">July</option>
                      <option value='August' className="text-gray-900 text-[10px]">August</option>
                      <option value='September' className="text-gray-900 text-[10px]">September</option>
                      <option value='October' className="text-gray-900 text-[10px]">October</option>
                      <option value='November' className="text-gray-900 text-[10px]">November</option>
                      <option value='December' className="text-gray-900 text-[10px]">December</option>
                    </select> 
                    <select
                      value={day}
                      onChange={(event)=> setDay(event.target.value)}
                      // className="w-[82px] h-[25px] ml-[70px] text-gray-900 text-[12px] bg-gray-200"
                      className="w-[90px] md:w-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-[10px] rounded-1xl focus:ring-black focus:border-black block w-full p-2.5 py-1.5 placeholder:text-[10px] pl-1 -mt-[27px] ml-[100px] md:ml-[85px]"
                    >
                      <option value="" className="text-gray-900 text-[10px]">Day</option>
                      <option value='Saturday' className="text-gray-900 text-[10px]">Saturday</option>
                      <option value='Sunday' className="text-gray-900 text-[10px]">Sunday</option>
                      <option value='Monday' className="text-gray-900 text-[10px]">Monday</option>
                      <option value='Tuesday' className="text-gray-900 text-[10px]">Tuesday</option>
                      <option value='Wednesday' className="text-gray-900 text-[10px]">Wednesday</option>
                      <option value='Thursday' className="text-gray-900 text-[10px]">Thursday</option>
                      <option value='Friday' className="text-gray-900 text-[10px]">Friday</option>
                    </select> 
                    <select
                      value={year}
                      onChange={(event)=> setYear(event.target.value)}
                      // className="w-[82px] h-[25px] ml-[70px] text-gray-900 text-[12px] bg-gray-200"
                      className="w-[90px] md:w-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-[10px] rounded-1xl focus:ring-black focus:border-black block w-full p-2.5 py-1.5 placeholder:text-[10px] pl-1 -mt-[27px] ml-[200px] md:ml-[170px]"
                    >
                      <option value="" className="text-gray-900 text-[10px]">Year</option>
                      <option value='2000' className="text-gray-900 text-[10px]">2000</option>
                      <option value='2001' className="text-gray-900 text-[10px]">2001</option>
                      <option value='2002' className="text-gray-900 text-[10px]">2002</option>
                      <option value='2003' className="text-gray-900 text-[10px]">2003</option>
                      <option value='2004' className="text-gray-900 text-[10px]">2004</option>
                      <option value='2005' className="text-gray-900 text-[10px]">2005</option>
                      <option value='2006' className="text-gray-900 text-[10px]">2006</option>
                      <option value='2007' className="text-gray-900 text-[10px]">2007</option>
                      <option value='2008' className="text-gray-900 text-[10px]">2008</option>
                      <option value='2009' className="text-gray-900 text-[10px]">2009</option>
                      <option value='2010' className="text-gray-900 text-[10px]">2010</option>
                      <option value='2011' className="text-gray-900 text-[10px]">2011</option>
                      <option value='2012' className="text-gray-900 text-[10px]">2012</option>
                      <option value='2013' className="text-gray-900 text-[10px]">2013</option>
                      <option value='2014' className="text-gray-900 text-[10px]">2014</option>
                      <option value='2015' className="text-gray-900 text-[10px]">2015</option>
                      <option value='2016' className="text-gray-900 text-[10px]">2016</option>
                    </select> 
                    {/* <span className="text-orange-600">{formErrors.phone}</span> */}
                  </div>
                  <div className="w-full -mt-2 md:mt-[1px] md:ml-[690px] md:flex-1">
                    <p className="text-black-700 text-[14px] md:-mt-[67px] md:ml-[200px] md:ml-[260px]">Gender</p>
                    <select
                      value={gender}
                      onChange={(event)=> setGender(event.target.value)}
                      // className="w-[82px] h-[25px] ml-[70px] text-gray-900 text-[12px] bg-gray-200"
                      className="w-[300px] md:w-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-[10px] rounded-1xl focus:ring-black focus:border-black block w-full p-2.5 py-1.5 placeholder:text-[10px] pl-1 md:mt-[2px] md:ml-[200px] md:ml-[260px]"
                    >
                      <option value="" className="text-gray-900 text-[10px]">Gender</option>
                      <option value='Male' className="text-gray-900 text-[10px]">Male</option>
                      <option value='Other' className="text-gray-900 text-[10px]">Female</option>
                      <option value='2002' className="text-gray-900 text-[10px]">Other</option>
                    </select> 
                    {/* <span className="text-orange-600">{formErrors.phone}</span> */}
                  </div>
                  <div className="w-full -mt-2 md:-mt-[27px] md:ml-[690px] md:flex-1">
                    <input id="default-checkbox" type="checkbox" value="" class="w-2 h-2 text-yellow-600 bg-yellow-100 border-yellow-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-yellow-800 focus:ring-2 dark:bg-yellow-700 dark:border-yellow-600" />
                    <label for="default-checkbox" class="ml-[3px] text-[12px] font-medium text-gray-900 dark:text-gray-300">I'd like to receive exclusive offers and promotions via SMS</label>
                  </div>
                  <div className="w-full -mt-2 md:-mt-[10px] md:ml-[690px] md:flex-1">
                    <Button
                      className="w-[300px] h-[30px] md:w-[345px] flex items-center justify-center px-2 py-1 mb-2 text-[12px] font-medium text-white border border-white bg-orange-600 hover:bg-orange-600 hover:border-primary md:text-[12px] md:px-8 me-0 md:me-6 rounded-1xl"
                      radius="1xl"
                      size="1xl"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </Button>
                  </div>
                  <div className="w-full -mt-2 md:-mt-[14px] md:ml-[690px] md:flex-1">
                    <p className="text-gray-500 text-[14px] ml-[150px] md:ml-[165px]">Or</p>
                  </div>
                  <div className="w-full -mt-2 md:-mt-[10px] md:ml-[690px] md:flex-1">
                    <Button
                      className="w-[300px] h-[30px] md:w-[345px] flex items-center justify-center px-2 py-1 mb-2 text-[12px] font-medium text-black-700 hover:text-white border border-orange-600 bg-transparent hover:bg-orange-600 hover:border-primary md:text-[12px] md:px-8 me-0 md:me-6 rounded-1xl"
                      radius="1xl"
                      size="1xl"
                    >
                      <span>
                        <Image
                          width={25}
                          height={25}
                          src="/assets/icons8-facebook-50.png"
                          alt="alzaf"
                          // className="mt-4"
                          priority
                        />  
                      </span> 
                      Sign Up with Facebook
                    </Button>
                  </div>
                  <div className="w-full -mt-2 md:-mt-[10px] md:ml-[690px] md:flex-1">
                    <Button
                      className="w-[300px] h-[30px] md:w-[345px] flex items-center justify-center px-2 py-1 mb-2 text-[12px] font-medium text-black-700  hover:text-white border border-orange-600 bg-transparent hover:bg-orange-600 hover:border-primary md:text-[12px] md:px-8 me-0 md:me-6 rounded-1xl"
                      radius="1xl"
                      size="1xl"
                    >
                      <span>
                        <Image
                          width={25}
                          height={25}
                          src="/assets/icons8-google-48.png"
                          alt="alzaf"
                          // className="mt-4"
                          priority
                        />  
                      </span> 
                      Sign Up with Google
                    </Button>
                  </div>
              
                </div>
              </form>
          </div>
      </div>
    </section>
  );
};

export default Register;
