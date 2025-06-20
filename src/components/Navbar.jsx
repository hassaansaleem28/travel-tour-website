import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { HiInformationCircle, HiShoppingBag } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";

function Navbar() {
  // const [icon, setIcon] = useState(false);
  return (
    <nav className="flex p-2 gap-50 shadow-lg text-2xl bg-stone-100 rounded-2xl  top-4 left-6 w-[76rem] z-9999 fixed">
      <Logo />
      {/* {icon ? (
        <button onClick={() => setIcon(i => !i)} className="cursor-pointer">
          <FaBars />
        </button>
      ) : (
        <button onClick={() => setIcon(i => !i)} className="cursor-pointer">
          <FaTimes />
        </button>
      )} */}
      <ul className="flex gap-9 font-[500] top-15 z-9999">
        <li>
          <NavLink
            to="/"
            className="flex items-center transition-all duration-0.3 ease-in-out gap-1.5 py-[0.7rem] px-[1rem] hover:bg-teal-500 rounded-[4px] hover:text-stone-100"
          >
            <HiHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className="flex items-center transition-all duration-0.3 ease-in-out gap-1.5 py-[0.7rem] px-[1rem] hover:bg-teal-500 rounded-[4px] hover:text-stone-100"
          >
            <HiInformationCircle /> About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Service"
            className="flex items-center transition-all duration-0.3 ease-in-out gap-1.5 py-[0.7rem] px-[1rem] hover:bg-teal-500 rounded-[4px] hover:text-stone-100"
          >
            <HiShoppingBag /> Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className="flex items-center gap-1.5 transition-all duration-0.3 ease-in-out hover:bg-teal-500 rounded-[4px] hover:text-stone-100 py-[0.7rem] px-[1rem]"
          >
            <MdPermContactCalendar /> Contact
          </NavLink>
        </li>
        <li className="my-auto ml-2 px-3.5 pb-1 bg-gray-300 rounded-[5px] mb-3 hover:text-slate-100 hover:bg-gray-900 transition-all ease-in-out">
          <NavLink to="/Signup" className="text-[18px] font-bold">
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
