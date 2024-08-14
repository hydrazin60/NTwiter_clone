import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Navbar() {
  return (
    <header className="w-full flex justify-between bg-white text-black  ">
      <div className="flex w-[30vw] items-center justify-center  p-1 ">
        <div className="">
          <span className=" flex justify-center items-center p-0 ">
            <Link href="/">
              <FaLinkedin className="text-5xl text-blue-500" />
            </Link>
          </span>
        </div>
        <div className="flex justify-center ">
          <span className="relative">
            <input
              type="text"
              className="
        bg-gray-200
        h-9
        border
        border-gray-300
        rounded-lg
        transition-all
        duration-300
        ease-in-out
        w-64
        focus:w-72
        focus:border-4
        focus:border-gray-700
        focus:outline-none
        peer
      "
            />
          </span>
        </div>
      </div>

      <div className=" flex w-[50vw] gap-10 text-zinc-500  pt-2">
        <div className="hover:cursor-pointer hover:text-black">
          <span className="  flex justify-center items-center p-0 ">
            <IoHomeSharp className="text-2xl" />
          </span>
          <span className="p-0">
            <p className="text-xs">Home</p>
          </span>
        </div>

        <div className="hover:cursor-pointer hover:text-black">
          <span className="  flex justify-center items-center p-0 ">
            <GrGroup className="text-2xl" />
          </span>
          <span className="p-0">
            <p className="text-xs">Network</p>
          </span>
        </div>

        <div className="hover:cursor-pointer hover:text-black">
          <span className="  flex justify-center items-center p-0 ">
            <IoBagHandleSharp className="text-2xl" />
          </span>
          <span className="p-0">
            <p className="text-xs">Jobs</p>
          </span>
        </div>

        <div className="hover:cursor-pointer hover:text-black">
          <span className="  flex justify-center items-center p-0 ">
            <AiFillMessage className="text-2xl" />
          </span>
          <span className="p-0">
            <p className="text-xs">Messaging</p>
          </span>
        </div>

        <div className="hover:cursor-pointer hover:text-black">
          <span className="  flex justify-center items-center p-0 ">
            <IoNotifications className="text-2xl" />
          </span>
          <span className="p-0">
            <p className="text-xs">Jobs</p>
          </span>
        </div>
        <div className="hover:cursor-pointer hover:text-black">
          <span className="  flex justify-center items-center p-0 ">
            <IoNotifications className="text-2xl" />
          </span>
          <span className="p-0">
            <p className="text-xs">Jobs</p>
          </span>
        </div>

        <div className="hover:cursor-pointer hover:text-black">
          <span className=" flex justify-center items-center p-0 ">
            <FaBuilding className="text-2xl" />
          </span>
          <span className="p-0">
            <p className="text-xs">Jobs</p>
          </span>
        </div>

        <div className="hover:cursor-pointer hover:text-black">
          <span className="  flex justify-center items-center p-0  ">
            <FaStar className="text-2xl" />
          </span>
          <span className="p-0 ">
            <p className="text-xs">Jobs</p>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
