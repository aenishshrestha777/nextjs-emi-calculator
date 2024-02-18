"use client";
import Image from "next/image";
import logo from "../images/logo.svg";
export function Navbar() {
  return (
    <div className=" w-full border-solid border-b-2 border-y-0 border-t-0">
      <div className="w-full md:w-[1000px] relative left-[50%] translate-x-[-50%]">
        <div className="w-full h-16  flex items-center justify-between">
          <Image
            src={logo}
            width={609}
            height={80}
            alt="logo"
            className="w-32 mx-4"
          ></Image>
          <div className="mx-4 md:mx-20 flex">
            <ul className="list-none hidden md:flex md:text-gray-800 md:font-light md:text-sm md:mx-6">
              <li className="px-6">Signup</li>
              <li className="px-6">About</li>
              <li className="px-6">Products</li>
              <li className="px-6">Pricing</li>
              <li className="px-6">Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}