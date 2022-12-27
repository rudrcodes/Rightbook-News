import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = ({ rootRoute }) => {
  const className =
    "font-semibold block 2xl:font-bold text-base 2xl:text-xl bg-[#d9d9d933] rounded-lg text-slate-50 px-3 2xl:px-5 py-2";
  const activeClassName =
    "font-semibold block 2xl:font-bold text-base 2xl:text-xl bg-violet-500 rounded-lg text-slate-50 px-3 2xl:px-5 py-2";
  return (
    <div className="mb-8 border-b-2 pb-8 border-[#92929580]">
      <ul className="flex flex-wrap gap-2 justify-center xl:justify-start">
        <li>
          <NavLink
            to={`${rootRoute}/`}
            className={({ isActive }) =>
              isActive ? activeClassName : className
            }
          >
            Matches
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${rootRoute}/schedules/`}
            className={({ isActive }) =>
              isActive ? activeClassName : className
            }
          >
            Schedules
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
