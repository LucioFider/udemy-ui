import React from "react";
import {
  ShoppingCartIcon,
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4">
      <MenuIcon className="h-6 w-6 md:hidden" />
      <h2 className="text-3xl font-bold">synt-x</h2>
      <h3 className="hidden text-sm md:block">Categories</h3>
      <form className="hidden bg-[#f8fafb] md:flex border border-gray-400 rounded-3xl flex-1 h-12 items-center">
        <SearchIcon className="h-5 w-5 mx-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search for anything"
          className="bg-transparent text-sm outline-none"
        />
      </form>
      <h3 className="hidden text-sm lg:block">Web Applications</h3>
      <h3 className="hidden text-sm lg:block md:hidden">Hire Us</h3>
      <div className="flex">
        <SearchIcon className="h-5 w-6 text-gray-400 md:hidden" />
        <ShoppingCartIcon className="h-5 w-6 " />
      </div>
      <div className="hidden md:flex pr-4 space-x-4 justify-end">
        <button className="border border-black text-sm font-bold h-10 w-20 hover:bg-[#f5f5f5]">
          Log In
        </button>
        <button className="border bg-black text-white hover:text-black border-black text-sm font-bold h-10 w-20 hover:bg-[#f5f5f5]">
          Sign Up
        </button>
        <button className="border border-black w-10 flex items-center justify-center hover:bg-[#f5f5f5]">
          <GlobeAltIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
