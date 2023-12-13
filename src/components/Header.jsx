import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-3/5 flex flex-row justify-between items-center mx-auto py-5 font-bold font-robotoMono">
      <h1 className="font-bold text-3xl">Accounting</h1>
      <button className="text-sm hover:text-green-500">HOME</button>
      <button className="text-sm hover:text-green-500">ABOUT</button>
      <button className="text-sm hover:text-green-500">SERVICES</button>
      <button className="text-sm hover:text-green-500">CASE STUDY</button>
      <button className="text-sm hover:text-green-500">BLOG</button>
      <button className="text-sm hover:text-green-500">CONTACT</button>
      <div className="flex flex-row border items-center border-gray-200 p-2 rounded-sm">
        <input type="text" className=" outline-none text-sm" />
        <FaSearch />
      </div>
    </div>
  );
};

export default Header;
