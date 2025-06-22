import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { HiInformationCircle, HiShoppingBag } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [icon, setIcon] = useState(false);

  return (
    <nav className="flex p-2 lg:gap-50 shadow-lg text-2xl bg-stone-100 rounded-2xl top-4 md:left-6 lg:left-6 left-4 lg:w-[76rem] md:w-[60rem] md:gap-20 z-9999 fixed gap-[11rem]">
      <Logo />
      <div className="md:hidden">
        <button
          onClick={() => setIcon(prev => !prev)}
          className="align-middle cursor-pointer mt-3.5 mr-4 text-3xl"
        >
          {icon ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul
        className={`${
          icon ? "flex" : "hidden"
        } md:flex lg:gap-9 flex-col items-center md:flex-row font-[500] top-15 z-9999 bg-stone-100 md:bg-transparent absolute md:static left-0 w-full md:w-auto mt-16 md:mt-0 p-4 md:p-0 rounded-lg`}
      >
        <li>
          <NavLink
            to="/"
            className="flex items-center transition-all duration-0.3 ease-in-out gap-1.5 py-[0.7rem] mr-10 md:mr-0 px-[1rem] hover:bg-teal-500 rounded-[4px] hover:text-stone-100"
          >
            <HiHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className="flex items-center transition-all duration-0.3 ease-in-out gap-1.5 py-[0.7rem] px-[1rem] mr-9 md:mr-0 hover:bg-teal-500 rounded-[4px] hover:text-stone-100"
          >
            <HiInformationCircle /> About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Service"
            className="flex items-center transition-all duration-0.3 ease-in-out gap-1.5 py-[0.7rem] px-[1rem] mr-5 md:mr-0 hover:bg-teal-500 rounded-[4px] hover:text-stone-100"
          >
            <HiShoppingBag /> Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className="flex items-center gap-1.5 transition-all duration-0.3 ease-in-out hover:bg-teal-500 mr-2 md:mr-0 rounded-[4px] hover:text-stone-100 py-[0.7rem] px-[1rem]"
          >
            <MdPermContactCalendar /> Contact
          </NavLink>
        </li>
        <li className="my-auto ml-2 px-3.5 pb-1 bg-gray-300 rounded-[5px] mb-3 hover:text-slate-100 mt-3 mr-6 md:mr-0 hover:bg-gray-900 transition-all ease-in-out">
          <NavLink to="/Signup" className="text-[18px] font-bold">
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
