"use client";
import Image from "next/image";
import Link from 'next/link';
import logo from "../images/asdesign.png";
export function Navbar() {
  return (
    <div className=" w-full border-solid border-b-2 border-y-0 border-t-0">
      <div className="w-full md:w-[1000px] relative left-[50%] translate-x-[-50%]">
        <div className="w-full h-16  flex items-center justify-between">
          <Link href="https://housedesigninnepal.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src={logo}
                width={609}
                height={80}
                alt="logo"
                className="w-32 mx-4"
              ></Image>
            </Link>
          <div className="mx-4 md:mx-20 flex">
            <ul className="list-none hidden md:flex md:text-gray-800 md:font-light md:text-sm md:mx-6">
            <li className="px-6">
                <Link href="https://housedesigninnepal.com/" target="_blank" rel="noopener noreferrer">
                  Home
                </Link></li>
              <li className="px-6">
                <Link href="https://housedesigninnepal.com/about/" target="_blank" rel="noopener noreferrer">
                About
                </Link></li>
              <li className="px-6">
                <Link href="https://housedesigninnepal.com/services/" target="_blank" rel="noopener noreferrer">
                Services
                </Link></li>
              <li className="px-6">
                <Link href="https://housedesigninnepal.com/contact-us/" target="_blank" rel="noopener noreferrer">
                Contact Us
                </Link></li>
              <li className="px-6">
                <Link href="https://housedesigninnepal.com/blog/" target="_blank" rel="noopener noreferrer">
                  Blog
                </Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}