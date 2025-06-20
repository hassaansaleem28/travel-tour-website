import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <h1 className="font-black text-4xl ml-2  p-2">Trippy</h1>
    </NavLink>
  );
}

export default Logo;
