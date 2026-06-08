import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full h-[50px]  fixed top-0 ">
      <div className="max-w-[1600px] h-full z-50 mx-auto bg-white w-full px-20 items-center flex justify-between">
        <div>
          <span className="font-bold">Admin</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <IoIosNotifications className=" text-2xl" />
            <span className="absolute -top-1 -right-1 h-[1rem] w-[1rem] bg-red-500 text-white flex items-center justify-center rounded-full">
              0
            </span>
          </div>
          <div className="relative">
            <MdLanguage className=" text-2xl" />
            <span className="absolute -top-1 -right-1 h-[1rem] w-[1rem] bg-red-500 text-white flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <div className="relative">
            <IoMdSettings className=" text-2xl" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
