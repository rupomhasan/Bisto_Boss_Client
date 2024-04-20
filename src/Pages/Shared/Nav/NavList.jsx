import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="order"
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );
};

export default NavList;
