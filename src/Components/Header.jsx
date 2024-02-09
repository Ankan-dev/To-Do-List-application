import React from "react";
import { IoMdMenu } from "react-icons/io";

function Header() {
  return (
    <div className="flex items-center w-[40vh] h-[5vh] bg-violet-400 shadow-xl">
      <div className="h-full w-[20%]">
        <button className="w-full h-full flex items-center justify-center">
          <IoMdMenu className="w-[70%] h-[70%]"/>
        </button>
      </div>
      <div className="h-full 2-[70%] flex items-center font-extrabold ml-10 text-2xl">
        <h1>What To Do</h1>
      </div>
    </div>
  );
}

export default Header;
