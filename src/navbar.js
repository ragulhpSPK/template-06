import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[screen] mx-auto px-4 bg-black text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">E educate</h1>
      <ul className="hidden md:flex space-x-16 lg:pr-40">
        <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
          Home
        </li>
        <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
          Company
        </li>
        <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
          Resources
        </li>
        <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
          About
        </li>
        <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "absolute left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[red] ease-in-out duration-500 z-auto"
            : "ease-in-out duration-500 absolute left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          E educate
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
