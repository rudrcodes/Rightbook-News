import React, { useState } from "react";
import arrow from "../../images/arrow.svg";
import home from "../../images/home.svg";
import football from "../../images/football.svg";
import tennis from "../../images/tennis.svg";
import cricket from "../../images/cricket.svg";
import CustomNavLink from "../../components/NavLink/NavLink";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside className="lg:pt-6 2xl:pt-12 border-b-2 z-50 lg:min-h-screen relative flex flex-col sticky top-0 right-0 border-r-4 border-[#20202D]">
      <div className="w-full flex justify-between lg:justify-center items-center py-3 px-5 lg:py-0">
        <h1 className="text-center md:text-2xl xl:text-3xl 2xl:text-4xl uppercase text-white font-['Lexend_Mega'] font-normal">
          <img className="mx-auto w-52 md:w-60 2xl:w-auto" src={logo} />
        </h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white bg-transparent outline-0 lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Nav menu */}
      <nav
        className={`px-6 absolute lg:static duration-300 ${
          isMenuOpen ? "" : "-translate-x-full"
        } top-full lg:translate-x-0 left-0 w-full bg-[#161620] z-50 lg:flex-1`}
      >
        <div className="">
          <h3 className="lg:text-lg 2xl:text-2xl font-bold text-white lg:py-5 2xl:py-14 flex justify-between items-center">
            NavLinks
          </h3>
          <ul
            className="lg:pb-3 2xl:pb-10 border-b-2 border-b-[#20202D]"
            onClick={() => setIsMenuOpen(false)}
          >
            <li>
              <CustomNavLink img={home} to="/">
                Home
              </CustomNavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="lg:text-lg 2xl:text-2xl font-bold text-white lg:pb-4 lg:pt-3 2xl:pb-11 2xl:pt-7">
            Games
          </h3>
          <ul className="pb-10" onClick={() => setIsMenuOpen(false)}>
            <li>
              <CustomNavLink to="/cricket/" img={cricket}>
                Cricket
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/tennis" img={tennis}>
                Tennis
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/football" img={football}>
                Football
              </CustomNavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hidden rounded-t-[30px] bg-[#262735]">
        <h1 className="text-center lg:text-lg 2xl:text-2xl font-bold text-white py-8">
          Feeling Lucky Today?
        </h1>
      </div>
    </aside>
  );
};

export default Navbar;
